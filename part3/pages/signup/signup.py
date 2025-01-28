from flask import Blueprint, request, redirect, url_for, render_template, flash
from pymongo import MongoClient
from werkzeug.security import generate_password_hash
from part3.settings import MONGO_URI, DATABASE_NAME

# התחברות למסד הנתונים
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
customers_collection = db["customers"]

# יצירת Blueprint להרשמה
signup_bp = Blueprint('signup', __name__, template_folder='templates', static_folder='static')

@signup_bp.route('/signup/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # שליפת הנתונים מהטופס
        full_name = request.form.get('full-name')
        email = request.form.get('email')
        password = request.form.get('password')
        age = request.form.get('age')
        phone = request.form.get('phone')

        # בדיקה אם המשתמש כבר קיים
        existing_user = customers_collection.find_one({"email": email})
        if existing_user:
            flash("User already exists! Please log in.", "error")
            return redirect(url_for("login.login"))  # אם המשתמש כבר קיים, להפנות לעמוד ההתחברות

        # הצפנת הסיסמה ושמירת המשתמש
        password_hashed = generate_password_hash(password)
        new_user = {
            "full_name": full_name,
            "email": email,
            "password": password_hashed,  # שמירת סיסמה מוצפנת
            "age": age,
            "phone": phone
        }
        customers_collection.insert_one(new_user)

        print(f"📩 New signup: {full_name}, {email}, {age}, {phone}")

        # הודעת הצלחה והפניה לעמוד ההתחברות
        flash("Registration successful! Please log in.", "success")
        return redirect(url_for("login.login"))

    return render_template('signup.html')
