from flask import Blueprint, render_template, request, redirect, url_for

signup_bp = Blueprint('signup', __name__, template_folder='templates', static_folder='static')

@signup_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':  # אם נשלח טופס
        full_name = request.form['full-name']
        email = request.form['email']
        password = request.form['password']
        age = request.form['age']
        phone = request.form['phone']

        print(f"📩 New signup: {full_name}, {email}, {age}, {phone}")  # בדיקה בטרמינל

        # הפניה לנתיב /summary/summary
        return redirect(url_for('summary.summary', name=full_name, email=email, age=age, phone=phone))

    return render_template('signup.html')  # אם זו בקשת GET
