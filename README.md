# ArtConnect

## Project Description

ArtConnect is a web application designed to help beginner and professional artists showcase artwork, promote events, and connect with art enthusiasts.

The platform provides a centralized location where visitors can explore artwork, discover upcoming art-related events, and learn more about opportunities within the local art community.

This project was created for CIS2336 Web Applications at the University of Houston.

---

## Developer

**Name:**  
Javon Baxter

**Email:**  
jcbaxter@cougarnet.uh.edu

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- CORS

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## Website Features

- Homepage introducing ArtConnect
- Artwork gallery displaying creative work
- Upcoming art events page
- Artist submission form
- Client-side form validation
- FAQ accordion section
- Multimedia content
- Responsive design
- Backend artwork submission API
- Temporary server-side artwork storage

---

## Folder Structure

```text
javon-baxter-cis2336-project/
│
├── .gitignore
├── README.md
│
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── pages/
│       ├── gallery.html
│       ├── events.html
│       ├── submit.html
│       ├── faq.html
│       └── references.html
│
└── backend/
    ├── package.json
    ├── package-lock.json
    └── server.js
```

---

## Backend Documentation

### Backend Purpose

The ArtConnect backend was developed using Node.js and Express.js. It receives artwork submissions from the Artist Submission Form, validates the submitted information, temporarily stores the submissions, and returns a confirmation response to the frontend.

### Backend API Routes

**GET `/api`**

Confirms that the ArtConnect backend is running successfully.

**GET `/api/artworks`**

Returns the artwork submissions currently stored in the backend.

**POST `/api/artworks`**

Receives artwork information from the Artist Submission Form, validates the submitted information, temporarily stores the artwork, and returns a confirmation message.

### Backend Validation

The backend validates the following information:

- Artist name
- Email address
- Artwork title
- Category
- Price
- Description

The backend also validates the email format and makes sure the artwork price is a valid non-negative number.

### Temporary Storage

Submitted artwork is temporarily stored in a JavaScript array called `artworkSubmissions`.

The data is not permanently stored in a database. The submissions remain available while the Node.js server is running and are cleared when the server is stopped.

### Running the Backend

The backend can be started from the `backend` folder using:

```bash
npm start
```

The server runs locally on:

```text
http://localhost:3000
```

When the server starts successfully, the terminal displays:

```text
ArtConnect backend is running at http://localhost:3000
```

### Frontend and Backend Connection

The Artist Submission Form uses JavaScript to send artwork information to the Express backend using a POST request.

The frontend sends the submission to:

```text
http://localhost:3000/api/artworks
```

The backend processes the information and returns a JSON response. The frontend then displays either a successful submission message or an error message to the user.

### Git Development Process

Git was used throughout development to track changes to the project. Changes were committed and pushed to GitHub at different stages of development, including backend setup, API development, form integration, testing, and documentation.

### AI Assistance

AI tools were used during development for assistance with:

- Node.js and Express setup
- Backend API development
- Connecting the frontend form to the backend
- Form validation
- Debugging
- Developer documentation

AI-generated suggestions were reviewed and adapted for the ArtConnect project.