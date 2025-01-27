from flask import Blueprint, render_template

signup = Blueprint(
    'signup',  # שם ה-blueprint
    __name__,
    static_folder='static',
    template_folder='templates'
)

@signup.route('/signup')
def signup_page():
    return render_template('signup.html')
