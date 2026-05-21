# EduReach AI Platform

AI-powered college counseling platform built using React, Node.js, MongoDB Atlas Vector Search, and Gemini API with Retrieval-Augmented Generation (RAG) to provide contextual and intelligent student assistance.

---

## 🚀 Overview

EduReach is a full-stack AI-powered educational platform designed to simplify how students interact with college information systems.

Traditional college websites are often overloaded with static information, making it difficult for students to quickly find answers about:

- Courses
- Admissions
- Fee structures
- Scholarships
- Placements
- Campus details

EduReach solves this problem using an intelligent RAG-based AI chatbot that provides contextual, accurate, and conversational responses in real time.

---

## ✨ Features

### 🤖 AI RAG Chatbot
- Context-aware AI assistant
- Retrieves information from a college knowledge base
- Generates intelligent responses using Gemini API
- Handles admission, placements, fees, scholarships, and course-related queries

### 🔍 MongoDB Atlas Vector Search
- Stores embeddings for semantic search
- Enables intelligent retrieval of relevant college data
- Improves chatbot accuracy with contextual understanding

### 🔐 JWT Authentication
- Secure user signup/login system
- Protected routes and authenticated access

### 📞 AI Callback Request System
- Students can request counseling support
- User-friendly callback request workflow
- Integrated AI-assisted counselor interaction flow

### 🎨 Modern Responsive UI
- Fully responsive design
- Clean educational landing page
- Interactive chatbot interface
- Smooth user experience

---

## 🛠️ Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- MongoDB Atlas
- MongoDB Atlas Vector Search

### AI & RAG
- Gemini API
- LangChain
- Embeddings
- Recursive Character Text Splitter

### Authentication
- JWT (JSON Web Tokens)
- Cookies

---

## 🧠 How RAG Works In This Project

1. College-related data is converted into embeddings
2. Embeddings are stored in MongoDB Atlas Vector Search
3. User queries are converted into embeddings
4. Relevant knowledge chunks are retrieved semantically
5. Gemini API generates contextual responses using retrieved data

This enables intelligent, context-aware conversations instead of simple keyword matching.

---

## 📂 Project Structure

```bash
edureach-platform/
│
├── client/         # React Frontend
├── server/         # Node.js Backend
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ManishaBathini/edureach-ai-platform.git
```

### 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

### 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4️⃣ Setup Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Run Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

_Add project screenshots here_

- Homepage
- AI Chatbot
- Callback Request Form
- Placement Highlights

---

## 🔥 Challenges Faced

- Implementing Retrieval-Augmented Generation (RAG)
- Managing vector embeddings and semantic search
- Handling frontend-backend integration
- Authentication and protected route handling
- Improving AI response accuracy and context retrieval
- Debugging API integration and asynchronous workflows

---

## 📈 Future Improvements

- Voice-enabled AI counselor
- Multi-language support
- Real-time admission tracking
- AI-powered career recommendations
- Admin dashboard for colleges
- Advanced analytics and insights

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Full-stack application development
- AI integration in real-world systems
- Vector databases and semantic search
- Authentication and API architecture
- Debugging production-level issues
- Building scalable AI-assisted platforms

---

## ⭐ Conclusion

EduReach demonstrates how AI and RAG systems can modernize traditional educational platforms by providing intelligent, real-time, and contextual student assistance for students exploring colleges and career opportunities.