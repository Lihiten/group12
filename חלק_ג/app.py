from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient
import os

app = Flask(__name__)

# חיבור ל-MongoDB
client = MongoClient(os.getenv('MONGO_URI', 'mongodb://localhost:27017'))
db = client['cook_master']
users_collection = db['users']

# דף הבית
@app.route('/')
def index():
    return render_template('index.html')

# דף הרשמה
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        age = request.form['age']
        phone = request.form['phone']
        # שמירת משתמש ב-DB
        users_collection.insert_one({
            'name': name,
            'email': email,
            'password': password,
            'age': int(age),
            'phone': phone
        })
        return redirect(url_for('index'))
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)
