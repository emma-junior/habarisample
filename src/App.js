import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Sidebar from './sidebar';
import Register from './register'
import Explore from './explore'
import Faq from './faq'
import User from './user'
import Signup from './signup'
import End from './end'


function App() {
  return (
    <>
      <Router>
        <Route path='/'>
          <Home />  
          <Sidebar />
          <Register />
          <Explore />
          <Faq />
          <User />
          <Signup />
          <End />
        </Route>
      </Router>     
    </>
  );
}

export default App;
