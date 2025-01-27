from flask import Blueprint, render_template

# יצירת Blueprint בשם workshops_bp
workshops_bp = Blueprint('workshops', __name__, template_folder='templates', static_folder='static')

# ניתוב לדף Workshops
@workshops_bp.route('/', endpoint='workshops_page')  # הוספת endpoint ייחודי
def workshops():
    return render_template('workshops.html')
