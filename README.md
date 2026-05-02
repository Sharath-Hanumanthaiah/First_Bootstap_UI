# curly-barnacle-task-tracker
# TaskTracker

A simple Task Tracker application to manage tasks and users with a lightweight in-memory storage approach.


## Features

### 1. CRUD for Tasks
- Create, Read, Update, Delete tasks.
- Each task should have:
  - **Unique ID**
  - **Title**
  - **Description** 
  - **Status**: `To Do`, `In Progress`, `Done`
  - **Due Date**
  - **Priority**



### 2. User Management
- Add, edit, delete users.
- Each user should have:
  - **Unique ID**
  - **Name**
  - **Email**
  - **Role**


### 4. View Tasks
- View tasks using filters:
  - By **UserName**
  - By **Status**
  - By **Due Date**
  - By **Priority**

## Authentication
Create user login where user login with gmail and passowd or gmail auth or git Auth
so user can click on the google Icon and user will be redirected to google login and get it authenticated and get back to same our page. Same happens for the Git also

### 5. User can transfer the task to other user.

### 6. Storage
- No external storage (e.g., database, files).
- All data stored in **variables (in-memory)**.

---

## Deliverables

- **Python source code** organized into modules:
  - `models/`
  - `services/`
  - `routes/`
- **UI** to interact with the application.
- **requirements.txt** file for dependencies.
- **README.md** file with setup and usage instructions.

---
