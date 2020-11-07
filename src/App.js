import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import FooterComponent from './components/footer/footer.component';
import NavBarComponent from './components/nav-bar/nav-bar.component';
import Home from './components/pages/home/home';

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
