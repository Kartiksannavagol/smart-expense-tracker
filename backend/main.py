from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import expenses_collection
from pydantic import BaseModel
from bson import ObjectId

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Expense(BaseModel):
    amount: float
    category: str
    description: str
    date: str


# ADD EXPENSE
@app.post("/expenses")
async def add_expense(expense: Expense):

    result = expenses_collection.insert_one(expense.dict())

    return {
        "id": str(result.inserted_id),
        "message": "Expense added"
    }


# GET ALL EXPENSES
@app.get("/expenses")
async def get_expenses():

    expenses = []

    for expense in expenses_collection.find():
        expenses.append({
            "_id": str(expense["_id"]),
            "amount": expense["amount"],
            "category": expense["category"],
            "description": expense["description"],
            "date": expense["date"]
        })

    return expenses


# DELETE EXPENSE
@app.delete("/expenses/{expense_id}")
async def delete_expense(expense_id: str):

    expenses_collection.delete_one({"_id": ObjectId(expense_id)})

    return {"message": "Expense deleted"}

# UPDATE EXPENSE
@app.put("/expenses/{expense_id}")
async def update_expense(expense_id: str, expense: Expense):

    expenses_collection.update_one(
        {"_id": ObjectId(expense_id)},
        {"$set": expense.dict()}
    )

    return {"message": "Expense updated"}