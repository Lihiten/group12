from flask import Blueprint, request, redirect, url_for, render_template, flash
from pymongo import MongoClient
from part3.settings import MONGO_URI, DATABASE_NAME

# התחברות למסד נתונים
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
customers_collection = db["customers"]

# יצירת Blueprint
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

        # יצירת מסמך לשמירה ב-MongoDB
        new_user = {
            "full_name": full_name,
            "email": email,
            "password": password,  # שיקולי אבטחה: יש להצפין את הסיסמאות לפני שמירה
            "age": age,
            "phone": phone
        }

        # שמירת המשתמש בקולקציה
        customers_collection.insert_one(new_user)
        print(f"📩 New signup: {full_name}, {email}, {age}, {phone}")

        # הודעת הצלחה והפניה לעמוד הבית
        flash('Registration successful!', 'success')
        return redirect(url_for('index.homepage'))

    return render_template('signup.html')
