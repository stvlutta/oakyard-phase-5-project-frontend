import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Add error handling for debugging
window.addEventListener('error', (event) => {
  console.log('Global error caught:', event.error, event.filename, event.lineno);
});

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
} else {
  console.error('Root element not found');
}