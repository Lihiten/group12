from flask import Blueprint


# index blueprint definition
from flask import Blueprint, render_template

# יצירת Blueprint בשם index
index_bp = Blueprint(
    'index',
    __name__,
    template_folder='templates',
    static_folder='static'
)



@index_bp.route('/')
def homepage():
    return render_template('index.html')