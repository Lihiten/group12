from flask import Blueprint, request, jsonify, render_template
from pymongo import MongoClient
from part3.settings import MONGO_URI, DATABASE_NAME

# חיבור למסד הנתונים
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

# יצירת Blueprint
workshop_details = Blueprint('workshop_details', __name__, template_folder='templates', static_folder='static')

@workshop_details.route('/workshop_details/<type>')
def workshop_details_page(type):
    return render_template('workshop_details.html', type=type)

# בדיקת זמינות לסדנה
@workshop_details.route('/check_availability', methods=['POST'])
def check_availability():
    data = request.json
    workshop = data.get("workshop")
    date = data.get("date")
    time = data.get("time")

    if not workshop or not date or not time:
        return jsonify({"error": "Missing required parameters"}), 400

    registration = db.workshop_registrations.find_one({"workshop": workshop, "date": date, "time": time})

    if registration and registration["participants"] >= 10:
        return jsonify({"available": False, "message": "This workshop is fully booked."}), 400

    return jsonify({"available": True})


# שמירת הרשמה לסדנה במסד הנתונים
@workshop_details.route('/register_workshop', methods=['POST'])
def register_workshop():
    data = request.json
    workshop = data.get("workshop")
    date = data.get("date")
    time = data.get("time")

    if not workshop or not date or not time:
        return jsonify({"error": "Missing required fields"}), 400

    # חיפוש הרשמה קיימת
    registration = db.workshop_registrations.find_one({"workshop": workshop, "date": date, "time": time})

    if registration:
        if registration["participants"] >= 10:
            return jsonify({"success": False, "message": "This workshop is already full."}), 400
        db.workshop_registrations.update_one({"_id": registration["_id"]}, {"$inc": {"participants": 1}})
        participants = registration["participants"] + 1
    else:
        db.workshop_registrations.insert_one({"workshop": workshop, "date": date, "time": time, "participants": 1})
        participants = 1

    return jsonify({"success": True, "participants": participants})
# בדיקה אילו שעות בסדנה כבר מלאות
@workshop_details.route('/get_fully_booked_times', methods=['POST'])
def get_fully_booked_times():
    data = request.json
    workshop = data.get("workshop")
    date = data.get("date")

    if not workshop or not date:
        return jsonify({"error": "Missing workshop or date"}), 400

    fully_booked_times = db.workshop_registrations.find({"workshop": workshop, "date": date, "participants": 10})
    booked_times = [r["time"] for r in fully_booked_times]

    return jsonify({"fullyBooked": booked_times})

