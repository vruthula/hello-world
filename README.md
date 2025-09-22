Backend Team – Week 1 Tasks

Internship Training – Week 1 Requirement Document
Duration: Week 1 (Monday → Friday)
Submission Deadline:Friday, [12-9-2025], 6:00 PM IST
Teams:Backend (Flask/FastAPI with MongoDB)
Mode of Submission: GitHub repository link shared via internship Slack/Email thread
________________________________________
🔹Task BE-101 – GitHub & Collaboration Setup
•	Requirement:
o	Create a GitHub repo backend-week1-{name}.
o	Add README.md with setup instructions.
o	Make at least 5 commits over the week.
o	Pair programming: submit a Pull Request and review a peer’s code.
•	Output: Repo with structured commits + merged PRs.

🔹Task BE-102 – Python Refresher
•	Requirement:
o	Write a script to:
	Store student data as dicts in a list.
	Sort by age.
	Save results to JSON file.
•	Output: Python script + generated JSON file.

🔹Task BE-103 – Flask Basics
•	Requirement:
o	Create Flask app with:
	/hello → returns "Hello, Interns!".
	/students → returns hardcoded JSON list of students.
•	Output: Flask app running locally, tested via browser/Postman.

🔹Task BE-104 – FastAPI Basics
•	Requirement:
o	Create FastAPI app with:
	/ping → returns { "message": "pong" }.
	/students/{id} → returns dummy student details.
	Run with uvicorn.
	Test in Swagger UI /docs.
•	Output: FastAPI app tested locally.

🔹Task BE-105 – Mini Project: Student Directory API
•	Requirement:
o	Build a Student Directory API in FastAPI.
o	Features:
	/students → returns list of students (id, name, age, dept).
	/students/{id} → returns student details by ID.
	Data stored in a Python list (MongoDB starts Week 2).
o	Must follow REST standards (GET methods only this week).
•	Submission:
o	Push project to GitHub repo backend-week1-student-directory-{name}.
o	Include README.md with:
	Setup steps (uvicorn main:app --reload).
	Example API requests + responses.
	Screenshot of Swagger UI.
•	Output: Working API project with proper repo structure.







General Submission Guidelines
1.	Push all code to GitHub before deadline.
2.	Each repo must have:
o	README.md (overview + setup + screenshots).
o	Proper folder structure (/src, /static if frontend).
o	Minimum 5 commits (no dumping final code at once).
3.	Share GitHub repo link on Slack/email under Week 1 Submissions thread.

Expected Outcomes by End of Week 1
•	Frontend interns: basics of HTML, CSS, JS, TS, Git + a functional To-Do List app.
•	Backend interns: Python refresher, Flask + FastAPI basics, Git + a Student Directory API.
•	Both teams: familiarity with Git workflows, commits, PRs, and repo documentation.
