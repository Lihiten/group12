from flask import Blueprint, render_template, request, redirect, url_for, flash
from werkzeug.security import check_password_hash
from part3.app import db  # חיבור למסד הנתונים

login_bp = Blueprint('login', __name__, template_folder='templates', static_folder='static')

@login_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # חיפוש המשתמש במסד הנתונים
        user = db.users.find_one({"email": email})

        if user and check_password_hash(user['password'], password):  # בדיקת סיסמה
            flash("Login successful!", "success")
            return redirect(url_for('index.homepage'))  # מעבר לעמוד הבית
        else:
            flash("Invalid email or password. Please try again.", "error")

    return render_template('login.html')
