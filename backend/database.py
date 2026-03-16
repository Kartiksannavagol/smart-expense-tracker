from pymongo import MongoClient
import certifi

MONGO_URL = "mongodb+srv://shankarulligeri14_db_user:B8MaTt2xjZr3u6wT@cluster0.ezsd0c5.mongodb.net/expense_db?retryWrites=true&w=majority"

client = MongoClient(MONGO_URL, tlsCAFile=certifi.where())

db = client["expense_db"]

expenses_collection = db["expenses"]