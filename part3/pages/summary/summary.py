from flask import Blueprint, render_template

# יצירת ה-Blueprint עם שם תואם
summary_bp = Blueprint('summary', __name__, template_folder='templates', static_folder='static')

# הגדרת הנתיב לעמוד summary
@summary_bp.route('/')
def summary():
    return render_template('summary.html')

