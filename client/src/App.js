import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import PostOverview from './pages/PostOverview';
// import Profile from './pages/Profile';

function App() {
  return (
    <div className='app-bg'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          {/* <Route exact path="/posts" element={<PostOverview />}></Route>
          <Route exact path="/myprofile" element={<Profile />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
