from flask import Blueprint, render_template

# workshops blueprint definition
about = Blueprint(
    'workshops',
    __name__,
    static_folder='static',
    static_url_path='/workshops',
    template_folder='templates'
)


# Routes
@about.route('/about')
def index():
    return render_template('workshops.html')
