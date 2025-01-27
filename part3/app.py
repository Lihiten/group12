from flask import Flask
from flask_pymongo import PyMongo



###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages
## index
from part3.pages.index.index import index_bp
app.register_blueprint(index_bp, url_prefix="/")

## contact
from part3.pages.contact.contact import contact_bp
app.register_blueprint(contact_bp, url_prefix='/contact')



## login
from part3.pages.login.login import login_bp
app.register_blueprint(login_bp)


## signup
from part3.pages.signup.signup import signup_bp
app.register_blueprint(signup_bp, url_prefix="/signup")


## workshops
from part3.pages.workshops.workshops import workshops_bp

app.register_blueprint(workshops_bp)



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

app.config["MONGO_URI"] = "mongodb+srv://lihiten:Lihi123ten99@cluster0.t7874.mongodb.net/web_project?retryWrites=true&w=majority"
mongo = PyMongo(app)
db = mongo.db

if __name__ == "__main__":
    app.run(debug=True)

