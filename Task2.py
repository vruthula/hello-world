import json

# Step 1: Store student data as dicts in a list
students = [
    {"id": 1, "name": "Alice", "age": 22, "dept": "CSE"},
    {"id": 2, "name": "Bob", "age": 20, "dept": "ECE"},
    {"id": 3, "name": "Charlie", "age": 23, "dept": "ME"},
    {"id": 4, "name": "Diana", "age": 21, "dept": "IT"}
]

# Step 2: Sort by age
students_sorted = sorted(students, key=lambda x: x["age"])

# Step 3: Save results to JSON file
with open("students.json", "w") as f:
    json.dump(students_sorted, f, indent=4)

print("✅ Students sorted by age and saved to students.json")
