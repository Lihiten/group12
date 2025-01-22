from flask import Blueprint
from flask import render_template, redirect, url_for


# homepage blueprint definition
profile = Blueprint(
    'workshop-details',
    __name__,
    static_folder='static',
    static_url_path='/workshop-details',
    template_folder='templates'
)


# Routes
@profile.route('/profile')
def index():
    return render_template('workshop-details.html')
