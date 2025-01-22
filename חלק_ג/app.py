from flask import Flask, render_template
from utilities.db.db_manager import get_all_data

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
