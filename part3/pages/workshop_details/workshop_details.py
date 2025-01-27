from flask import Blueprint, render_template

workshop_details = Blueprint(
    'workshop_details',
    __name__,
    static_folder='static',
    static_url_path='/workshop_details',
    template_folder='templates'
)

@workshop_details.route('/workshop_details')
def index():
    return render_template('workshop_details.html')
