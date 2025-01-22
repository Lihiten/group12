from flask import Blueprint, render_template

# summary blueprint definition
catalog = Blueprint('summary', __name__, static_folder='static', static_url_path='/summary', template_folder='templates')


# Routes
@catalog.route('/catalog')
def index():
    return render_template('summary.html')
