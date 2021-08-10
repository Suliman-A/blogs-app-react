import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetils from './components/BlogDetails';
import NotFound from './components/NotFound';
import Update from './components/Update';

function App() {
  //const title = 'Welcome to app component';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{ title }</h1> */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetils />
            </Route>
            <Route path='/update/:id'>
              <Update />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
