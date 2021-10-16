import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Feedback from './components/Feedback';
import EditInfo from './components/EditInfo';

function App() {
  return (
    <BrowserRouter basename={'/sit-scor-line-liff'}>
      <Switch>
        <Route exact path="/EditInfo" component={EditInfo} />
        <Route exact path="/Feedback" component={Feedback} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
