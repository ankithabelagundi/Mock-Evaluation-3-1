import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { PostsProvider } from './context/PostContext.jsx'
import "./index.css";
createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <PostsProvider>
      <App />
      </PostsProvider>
      </ThemeProvider>
);
