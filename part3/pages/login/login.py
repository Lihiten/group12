from flask import render_template
from flask import Blueprint

# about blueprint definition
login = Blueprint(
    'login',
    __name__,
    static_folder='static',
    static_url_path='/login',
    template_folder='templates'
)


# Routes
@login.route('/login')
def index():
    return render_template('login.html')
