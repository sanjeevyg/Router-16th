import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      {/* <Route path='/'>
        <Home/>
      </Route>
      <Route path='/' component={Home} /> */}
      <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />} />
      <Route path='/about' render={(routerProps) => <About {...routerProps} />} />
    </div>
  );
}
 
export default App;
