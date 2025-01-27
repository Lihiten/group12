from flask import Flask

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages
## index
from part3.pages.index.index import index_bp
app.register_blueprint(index_bp, url_prefix="/")

## contact
from part3.pages.contact.contact import contact

app.register_blueprint(contact)

## login
from part3.pages.login.login import login

app.register_blueprint(login)

## signup
from part3.pages.signup.signup import signup
app.register_blueprint(signup)


## workshops
from part3.pages.workshops.workshops import workshops

app.register_blueprint(workshops)

## workshop_details
from part3.pages.workshop_details.workshop_details import workshop_details
app.register_blueprint(workshop_details)


## Page error handlers
from part3.pages.page_error_handlers.page_error_handlers import page_error_handlers

# Register blueprints
app.register_blueprint(page_error_handlers)



###### Components
## Main menu
from part3.components.main_menu.main_menu import main_menu

app.register_blueprint(main_menu)

if __name__ == "__main__":
    app.run(debug=True)