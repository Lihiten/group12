from flask import render_template
from flask import Blueprint

# about blueprint definition
menu = Blueprint(
    'contact',
    __name__,
    static_folder='static',
    static_url_path='/contact',
    template_folder='templates'
)


# Routes
@menu.route('/menu')
def index():
    return render_template('contact.html')
