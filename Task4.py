from fastapi import FastAPI, HTTPException
import json

app = FastAPI()

# Load the JSON data once when the server starts
with open("students.json", "r") as f:
    students = json.load(f)

@app.get("/ping")
def ping():
    return {"message": "pong"}

@app.get("/students/{id}")
def get_student(id: int):
    # Search for student by id
    for student in students:
        if student["id"] == id:
            return student
    # If not found, return 404
    raise HTTPException(status_code=404, detail="Student not found")

@app.get("/students")  # Optional: get all students
def get_all_students():
    return students
