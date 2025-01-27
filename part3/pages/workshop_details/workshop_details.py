from flask import Blueprint, render_template

workshop_details = Blueprint('workshop_details', __name__, template_folder='templates',static_folder='static')

@workshop_details.route('/workshop_details/<type>')
def workshop_details_page(type):
    # לוגיקה לעמוד workshop details
    return render_template('workshop_details.html', type=type)
