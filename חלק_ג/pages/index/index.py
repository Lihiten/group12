from flask import Blueprint
from flask import render_template, redirect, url_for


# index blueprint definition
homepage = Blueprint(
    'index',
    __name__,
    static_folder='static',
    static_url_path='/index',
    template_folder='templates'
)


# Routes
@homepage.route('/')
def index():
    return render_template('index.html')


@homepage.route('/homepage')
@homepage.route('/home')
def redirect_homepage():
    # print('I am in /Homepage route!')
    return redirect(url_for('index.index'))
