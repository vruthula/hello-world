from fastapi import FastAPI, HTTPException
import json
import os

app = FastAPI()

# Load student data from JSON file
json_file_path = os.path.join(os.path.dirname(__file__), "students.json")

with open(json_file_path, "r") as f:
    students = json.load(f)

@app.get("/students")
def get_students():
    return students

@app.get("/students/{id}")
def get_student(id: int):
    for student in students:
        if student["id"] == id:
            return student
    raise HTTPException(status_code=404, detail="Student not found")
