from flask import render_template
from flask import Blueprint

# contact blueprint definition
contact = Blueprint(
    'contact',
    __name__,
    static_folder='static',
    static_url_path='/contact',
    template_folder='templates'
)


# Routes
@contact.route('/contact')
def index():
    return render_template('contact.html')
