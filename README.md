# HuduAssist - AI Assistant for Huduma Centre

A modern, user-friendly AI assistant interface designed to help Kenyans access government services through Huduma Centre.

## Features

- 🎨 Modern, responsive UI design
- 💬 Real-time chat interface
- 📱 Mobile-friendly design
- 🎯 Clean and intuitive user experience
- 🇰🇪 Designed with Kenyan users in mind

## Project Structure

```
HuduAssist-/
├── src/                          # Frontend React application
│   ├── components/
│   │   ├── Header.jsx          # Header with logo and branding
│   │   ├── ChatContainer.jsx   # Main chat container
│   │   ├── Message.jsx         # Individual message component
│   │   ├── InputArea.jsx       # Message input area
│   │   └── LoadingIndicator.jsx # Loading animation
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── backend/                     # Backend API (to be created)
├── HuduAssist Logo.png        # Logo file
├── index.html                 # HTML template
├── package.json               # Frontend dependencies
├── requirements.txt           # Python backend dependencies
├── requirements-dev.txt       # Development dependencies
└── vite.config.js            # Vite configuration
```

## Getting Started

### Frontend Setup

#### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

#### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

#### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Backend Setup

#### Prerequisites

- Python 3.9 or higher
- pip (Python package manager)

#### Installation

1. Create a virtual environment (recommended):
```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. For development, install additional dev dependencies:
```bash
pip install -r requirements-dev.txt
```

4. Create a `.env` file in the backend directory with your configuration:
```env
OPENAI_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```

5. Run the backend server:
```bash
# If using FastAPI
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# If using Flask
flask run
```

## Technologies Used

### Frontend
- React 18
- Vite
- CSS3 (with CSS Variables)
- Modern ES6+ JavaScript

### Backend
- FastAPI (or Flask)
- Python 3.9+
- OpenAI API (for AI responses)
- SQLAlchemy (for database)
- Pydantic (for data validation)

## Next Steps

- [ ] Connect frontend to backend API
- [ ] Add authentication if needed
- [ ] Implement actual AI responses
- [ ] Add database for conversation history
- [ ] Deploy to production

## API Integration

To connect the frontend to your backend, update the `handleSendMessage` function in `src/App.jsx`:

```javascript
const handleSendMessage = async (message) => {
  // ... existing code ...
  
  try {
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    })
    
    const data = await response.json()
    // Handle response...
  } catch (error) {
    // Handle error...
  }
}
```

## License

MIT License
