import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ShowSummary from './components/ShowSummary';
import Stories from './components/Stories';
import BookTicketPage from './components/BookTicketPage';
import BookingForm from './components/BookingForm';
function App() {
  return (
    <Router>
  <Routes>
  <Route path="/" element={<Navigate to="/components/stories" />} />
  <Route path="/components/stories" element={<Stories />} />
  <Route path="/components/show-summary/:id" element={<ShowSummary />} />
  <Route path="/book-ticket/:id" element={<BookTicketPage />} />
  <Route path="/BookingForm" element={<BookingForm />} />
</Routes>

    </Router>
  );
}
export default App;
























