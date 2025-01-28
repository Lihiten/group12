from flask import Blueprint, request, redirect, url_for, render_template, flash, session
from pymongo import MongoClient
from werkzeug.security import check_password_hash
from part3.settings import MONGO_URI, DATABASE_NAME

# התחברות למסד הנתונים
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
customers_collection = db["customers"]

# יצירת Blueprint
login_bp = Blueprint('login', __name__, template_folder='templates', static_folder='static')

@login_bp.route('/login/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            flash("Please fill in all fields!", "error")
            return redirect(url_for("login.login"))

        # חיפוש המשתמש במסד הנתונים
        user = customers_collection.find_one({"email": email})

        if user:
            # בדיקה אם הסיסמה תואמת לסיסמה השמורה (בהנחה שהיא מוצפנת)
            if check_password_hash(user["password"], password):
                session["user"] = user["email"]
                flash("Login successful!", "success")
                return redirect(url_for("index.homepage"))  # מעבר לדף הבית
            else:
                flash("Incorrect password!", "error")
        else:
            flash("User does not exist! Please sign up.", "error")

    return render_template('login.html')
