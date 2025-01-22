from flask import Flask, render_template
from utilities.db.db_manager import get_all_data
from flask import Flask
from blueprints.home import home
from blueprints.auth import auth

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Register blueprints
app.register_blueprint(home, url_prefix='/')
app.register_blueprint(auth, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)

app = Flask(__name__)

@app.route('/')
def home():
    try:
        # שליפת נתונים ממסד הנתונים
        data = get_all_data()
        return render_template('HTML/index.html', data=data)
    except Exception as e:
        print(f"Error in home route: {e}")
        return "An error occurred while loading the home page.", 500

if __name__ == "__main__":
    app.run(debug=True)
