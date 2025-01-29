from pymongo import MongoClient
from ...settings import MONGO_URI, DATABASE_NAME, COLLECTION_NAME


def connect_to_db():
    """
    פונקציה להתחברות למסד הנתונים MongoDB
    """
    client = MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    return db

def insert_data_to_db(data):
    """
    פונקציה להוספת נתונים לאוסף
    """
    db = connect_to_db()
    collection = db[COLLECTION_NAME]
    collection.insert_one(data)

def get_all_data():
    """
    פונקציה לשליפת כל הנתונים
    """
    db = connect_to_db()
    collection = db[COLLECTION_NAME]
    return list(collection.find())

def insert_sample_data():
    client = MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    collection = db[COLLECTION_NAME]
    # הוספת נתונים לדוגמה
    collection.insert_one({"name": "Example Data", "value": 123})
    print("Sample data inserted!")

def check_user_exists(email):
    db = connect_to_db()
    users = db["users"]
    return users.find_one({"email": email}) is not None

def insert_user(user_data):
    db = connect_to_db()
    users = db["users"]
    users.insert_one(user_data)

    db.workshop_registrations.update_many(
        {},  # בוחר את כל המסמכים
        {"$set": {"available_spots": 10}}  # מוסיף שדה עם ערך ברירת מחדל
    )

    def update_available_spots(workshop_id):
        """
        מעדכן את מספר המקומות הפנויים בסדנה לאחר רישום משתתף
        """
        db = connect_to_db()
        workshops = db["workshop_registrations"]

        # חיפוש הסדנה ובדיקת מספר המקומות הפנויים
        workshop = workshops.find_one({"_id": workshop_id})

        if workshop and workshop.get("available_spots", 0) > 0:
            workshops.update_one(
                {"_id": workshop_id},
                {"$inc": {"available_spots": -1}}
            )
            return True
        return False  # אם אין מקומות פנויים, לא לבצע עדכון

