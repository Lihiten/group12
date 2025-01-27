import os
from dotenv import load_dotenv
load_dotenv()

# Secret key setting from .env for Flask sessions
SECRET_KEY = os.environ.get('SECRET_KEY')

# DB base configuration from .env for modularity and security reasons
DB = {
    'host' : os.environ.get('DB_HOST'),
    'user': os.environ.get('DB_USER'),
    'password': os.environ.get('DB_PASSWORD'),
    'database': os.environ.get('DB_NAME')
}
MONGO_URI= "mongodb+srv://lihiten:Lihi123ten99@cluster0.t7874.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_NAME = "web_project"  # שם בסיס הנתונים
COLLECTION_NAME = "data_collection"  # שם האוסף

