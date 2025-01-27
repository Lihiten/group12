from flask import Blueprint, render_template

# workshops blueprint definition
workshops = Blueprint(
    'workshops',
    __name__,
    static_folder='static',
    static_url_path='/workshops',
    template_folder='templates'
)


# Routes
@workshops.route('/workshops')
def index():
    return render_template('workshops.html')
