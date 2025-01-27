from flask import Blueprint, render_template

signup_bp = Blueprint(
    'signup',
    __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='/signup/static'
)


@signup_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    return render_template('signup.html')
