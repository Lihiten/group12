from flask import Blueprint, render_template

# יצירת Blueprint בשם workshops_bp
workshops_bp = Blueprint('workshops', __name__, template_folder='templates')

# ניתוב לדף Workshops
@workshops_bp.route('/workshops')
def workshops():
    return render_template('workshops.html')
