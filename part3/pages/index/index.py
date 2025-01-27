from flask import Blueprint
from flask import render_template, redirect, url_for


# index blueprint definition
from flask import Blueprint, render_template

index = Blueprint(
    'index',  # שם ה-blueprint
    __name__,
    static_folder='static',
    template_folder='templates'
)

@index.route('/')
def index():
    return render_template('index.html')


@index.route('/homepage')
@index.route('/home')
def redirect_homepage():
    # print('I am in /index route!')
    return redirect(url_for('index.index'))
