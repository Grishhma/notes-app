# 📝 Notes App

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Python 3.7+](https://img.shields.io/badge/python-3.7%2B-green.svg)](https://www.python.org/)  
[![Flask](https://img.shields.io/badge/flask-3.1.0-lightgrey.svg)](https://flask.palletsprojects.com/)

A simple full-stack note-taking application with:

- **CRUD** operations on notes via a REST API  
- **Backend:** Python + Flask + SQLite (SQLAlchemy)  
- **Frontend:** Vanilla HTML, CSS & JavaScript (`fetch`)  
- **CORS** enabled for cross-origin support  

---

## 🚀 Features

- Create, Read, Update, Delete notes  
- Minimal dependencies & zero-config setup  
- Responsive, mobile-friendly UI  

---
## 📋 Prerequisites
- Python 3.7+
- Git (optional, for cloning)
- Modern web browser
  
---
## 🛠️ Backend Setup
1. **Clone the repo & navigate**  
   ```bash
   git clone https://github.com/Grishhma/notes-app.git
   cd notes-app/backend
2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
3. **Run the Flask server**
    ```bash
    python app.py
4. **Verify the API**
   ```bash
   http://127.0.0.1:5000/api/notes
   ```
 ---
 ## 🌐 Frontend Setup

1. **Open a new terminal & navigate**  
   ```bash
   cd notes-app/frontend
2. **Serve the static files**
    ```bash
    python -m http.server 8000
3. **Open the UI in your browser**
   ```bash
   http://127.0.0.1:8000
4. **Interact with the app**
  - Add a note by typing in the input field and clicking Add
  - Edit a note inline; changes auto-save
  - Delete a note by clicking the ✖️ button
---
## 📸 Screenshots
![image](https://github.com/user-attachments/assets/25ae53c4-3d8f-46e3-9f3d-db9013704854)
![image](https://github.com/user-attachments/assets/350f6ff9-35e5-4a2d-b2b7-297afa53e3db)
