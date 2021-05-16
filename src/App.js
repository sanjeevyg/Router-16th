import './App.css';
import { Route, Redirect, Switch} from 'react-router-dom';
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
      <Switch>

      <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />} />
      <Route exact path='/about' render={(routerProps) => <About {...routerProps} />} />
      <Route exact path='/about/:id' render={(routerProps) => <About {...routerProps} />} />
      {/* <Route path='/contact' render={(routerrProps) => <Contact {...routerrProps} />} /> */}
      <Route path='/contact' component={Contact} />
      <PrivateRoute path='/profile' component={About}/>
      </Switch>
    </div>
  );
}

function PrivateRoute({component: Component, ...props}) {
  return localStorage.token 
    ? <Route {...props} render={(routerProps) => <Component {...routerProps} {...props}/>} /> :
    <Redirect to='/login'/>
}
 
export default App;
