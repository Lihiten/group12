from flask import Flask, render_template
from utilities.db.db_manager import get_all_data
from utilities.db.db_manager import insert_sample_data

insert_sample_data()


app = Flask(__name__)

@app.route('/')
def home():
    try:
        # שליפת נתונים ממסד הנתונים
        data = get_all_data()
        print(f"Fetched data: {data}")  # לוג לבדיקה
        return render_template('home.html', data=data)
    except Exception as e:
        print(f"Error in home route: {e}")
        return "An error occurred", 500

if __name__ == "__main__":
    app.run(debug=True)
