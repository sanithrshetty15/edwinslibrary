# Edwin's Library

**A Full-Stack Library Management System**

**Live Website:** [https://edwinslibrary.netlify.app/](https://edwinslibrary.netlify.app/)

**Backend API:** [https://edwinslibrary.onrender.com/](https://edwinslibrary.onrender.com/)

## About the Project

Edwin's Library is a web-based library management system designed to simplify the management of books, student accounts, and borrowing activities.

The platform provides separate functionality for students and administrators. Students can register, access their accounts after approval, browse available books, issue books, and manage their issued books. Administrators can authenticate through email OTP, review student registrations, manage books, and oversee library operations.

The application uses React for the frontend, Node.js and Express for the backend, MongoDB Atlas for data storage, Cloudinary for book cover images, and Resend for email delivery.

## Features

### Student Features

- Student registration with academic and personal information.
- Administrator approval before student login.
- Student authentication using USN and password.
- Browse available books.
- Issue books using their barcodes.
- View currently issued books.
- Return issued books.
- Responsive user interface for supported devices.

### Administrator Features

- Email OTP authentication.
- View pending student registrations.
- Approve student accounts.
- Reject pending registrations.
- Add books with title, author, quantity, and unique barcode.
- Upload book cover images using Cloudinary.
- Manage book availability and borrowing activities.

### Security Features

- JWT-based authentication for protected routes.
- Password hashing using bcrypt.
- Role-based authorization.
- Environment variables for sensitive configuration.
- Image upload validation and file-size limits.
- Cloud-hosted MongoDB database.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, JavaScript |
| Styling | Tailwind CSS |
| Routing | React Router |
| HTTP Client | Axios |
| Notifications | React Hot Toast |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JSON Web Tokens, bcrypt |
| Email Delivery | Resend |
| Image Storage | Cloudinary |
| File Uploads | Multer |
| Frontend Hosting | Netlify |
| Backend Hosting | Render |
| Version Control | Git, GitHub |

## System Architecture

```text
Student / Administrator
          |
          v
React + Vite Frontend
        Netlify
          |
          | HTTPS API Requests
          v
Node.js + Express Backend
         Render
          |
          +-------------------+
          |                   |
          v                   v
    MongoDB Atlas          Cloudinary
    Database               Book Images
          |
          v
     Student, Book,
     and Issue Records

Resend
  |
  v
Email OTP Delivery
```

## Project Structure

```text
edwinslibrary/
├── frontend/
│   ├── public/
│   │   └── _redirects
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── cloudinary.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   └── sendEmail.js
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

The structure above highlights the main directories and files. Individual files may differ as the project evolves.

## Prerequisites

Before running the project locally, ensure that you have:

- Node.js and npm installed.
- Git installed.
- A MongoDB Atlas account and database.
- A Cloudinary account for book cover storage.
- A Resend account for email delivery.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sanithrshetty15/edwinslibrary.git
cd edwinslibrary
```

### 2. Configure the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password

RESEND_API_KEY=your_resend_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Replace the placeholder values with your own credentials. Never commit your `.env` file or expose your secrets publicly.

Install the backend dependencies and start the development server:

```bash
npm run dev
```

The backend normally runs at:

```text
http://localhost:5000
```

The API base path is:

```text
http://localhost:5000/api/auth
```

### 3. Configure the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

If your Axios configuration uses the Vite environment variable `VITE_API_URL`, create a `frontend/.env` file:

```env
VITE_API_URL=http://localhost:5000/api/auth
```

Ensure `src/services/api.js` reads the variable:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

Start the frontend development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, typically:

```text
http://localhost:5173
```

## Deployment

Edwin's Library uses Netlify for the frontend, Render for the backend, and MongoDB Atlas for the database.

### Frontend Deployment on Netlify

- Repository: `sanithrshetty15/edwinslibrary`
- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: Not required for the current frontend setup.

If the frontend uses Vite environment variables, configure the production API URL in Netlify:

```env
VITE_API_URL=https://edwinslibrary.onrender.com/api/auth
```

Redeploy the frontend after changing environment variables.

**Live Frontend:** [https://edwinslibrary.netlify.app/](https://edwinslibrary.netlify.app/)

### Backend Deployment on Render

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`

Configure all required environment variables in the Render dashboard. Do not upload your local `.env` file to the repository.

The server uses `process.env.PORT`, allowing Render to provide the appropriate port.

**Backend URL:** [https://edwinslibrary.onrender.com/](https://edwinslibrary.onrender.com/)

### Database Deployment

MongoDB Atlas provides the cloud database used by the application.

The backend connects using the `MONGODB_URI` environment variable.

### Email Delivery

Resend is used to send administrator OTP emails. Configure `RESEND_API_KEY` in the Render environment variables.

### Book Cover Storage

Cloudinary stores uploaded book cover images. Configure the Cloudinary credentials in the backend environment.

## API Overview

The backend API is mounted under:

```text
/api/auth
```

The following table summarizes the principal API operations. Confirm the exact paths and HTTP methods in `backend/routes/authRoutes.js` when modifying the API.

| Functionality | Example Endpoint |
|---|---|
| Student Registration | `/register` |
| Student Login | `/login` |
| Send Administrator OTP | `/admin/send-otp` |
| Verify Administrator OTP | `/admin/verify-otp` |
| List Books | `/books` |
| Add a Book | `/book/add` |
| Issue a Book | `/book/issue` |
| Return a Book | `/book/return` |
| List Issued Books | `/issued` |
| View Pending Students | `/admin/pending-students` |
| Approve a Student | `/admin/approve-student` |
| Reject a Student | `/admin/reject-student` |

Some endpoints require authentication and administrator authorization.

## Database Overview

The application uses MongoDB Atlas with Mongoose.

The main data entities include:

- **Users:** Student and administrator account information, including registration and approval details.
- **Books:** Book titles, authors, quantities, barcodes, and cover image URLs.
- **Issues:** Records connecting students with the books they have borrowed.

Actual collection names depend on the Mongoose models and database configuration.

## Security Best Practices

- Never commit environment files, passwords, API keys, or database credentials.
- Use strong, unique JWT secrets.
- Restrict database network access in MongoDB Atlas.
- Enforce administrator permissions on the backend.
- Validate incoming request data and uploaded files.
- Avoid returning sensitive internal errors in production responses.
- Rotate credentials if they are accidentally exposed.

## Testing Checklist

- [ ] Student registration works.
- [ ] Unapproved students cannot log in.
- [ ] Administrator OTP emails are delivered.
- [ ] OTP verification works.
- [ ] Approved students can log in.
- [ ] Administrators can add books.
- [ ] Book cover images upload and display correctly.
- [ ] Available books can be issued.
- [ ] Issued books can be returned.
- [ ] Book quantities update correctly.
- [ ] Protected routes reject unauthorized requests.
- [ ] Direct navigation to frontend routes works.
- [ ] The interface works on mobile and desktop screens.

## Troubleshooting

### Frontend Cannot Reach the Backend

- Verify the frontend API URL.
- Check the Render service status and logs.
- Verify the backend CORS configuration.

### Administrator OTP Is Not Received

- Check the Render environment variables.
- Verify the Resend API key.
- Review delivery status and sender restrictions in Resend.

### Book Covers Do Not Appear

- Verify the Cloudinary environment variables.
- Check the image upload response.
- Confirm that the stored image URL is accessible.

### Frontend Routes Return 404

Ensure `frontend/public/_redirects` contains:

```text
/*    /index.html   200
```

### Database Connection Fails

- Verify `MONGODB_URI`.
- Check MongoDB Atlas network access.
- Verify the database user's permissions.

## Future Improvements

Potential future enhancements include:

- Advanced book search, filtering, and sorting.
- QR-code scanning for book issuing.
- Borrowing history and due-date tracking.
- Automated overdue reminders.
- Dashboard analytics and reports.
- Improved administrator tools and audit logs.
- Further accessibility and responsive design improvements.
- Automated testing and continuous integration.

## Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test the changes locally.
5. Submit a pull request with a clear description.

## License

No license has been specified yet. Unless a license is added to the repository, the project should not be assumed to be available for unrestricted reuse, modification, or redistribution.

## Author

**Sanith R Shetty**

GitHub: [@sanithrshetty15](https://github.com/sanithrshetty15)

Project: Edwin's Library

Live Website: [https://edwinslibrary.netlify.app/](https://edwinslibrary.netlify.app/)
