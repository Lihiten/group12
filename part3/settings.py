import os
from dotenv import load_dotenv
from pymongo import MongoClient

# Load environment variables from .env file
load_dotenv()

# Secret key for Flask sessions
SECRET_KEY = os.environ.get('SECRET_KEY', 'my_secret_key')

# Database configuration from .env
DB = {
    'host': os.environ.get('DB_HOST'),
    'user': os.environ.get('DB_USER'),
    'password': os.environ.get('DB_PASSWORD'),
    'database': os.environ.get('DB_NAME')
}

# MongoDB connection
MONGO_URI = "mongodb+srv://lihiten:Lihi123ten99@cluster0.t7874.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_NAME = "web_project"  # Database name
COLLECTION_NAME = "customers"  # Example collection name

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]  # Select the database

# Ensure workshop_registrations collection exists
if "workshop_registrations" not in db.list_collection_names():
    db.create_collection("workshop_registrations")
