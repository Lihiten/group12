from flask import Blueprint, render_template, request

summary_bp = Blueprint('summary', __name__, static_folder='static', template_folder='templates')

@summary_bp.route('/summary', methods=['GET'])
def summary():
    name = request.args.get('name')
    email = request.args.get('email')
    age = request.args.get('age')
    phone = request.args.get('phone')

    return render_template('summary.html', name=name, email=email, age=age, phone=phone)
