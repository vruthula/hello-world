from flask import Flask, jsonify
import json

app = Flask(__name__)

# Load students from JSON file
with open("students.json", "r") as f:
    students = json.load(f)

@app.route("/hello")
def hello():
    return "Hello, Interns!"

@app.route("/students")
def get_students():
    return jsonify(students)

if __name__ == "__main__":
    app.run(debug=True)
