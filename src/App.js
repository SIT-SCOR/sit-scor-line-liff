import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Feedback from './components/Feedback';
import EditInfo from './components/EditInfo';
import ConfirmFeedback from './components/ConfirmFeedback';
import ConfirmEdit from './components/ConfirmEdit'
import CheckScore from './components/CheckScore'
import CheckScoreResult from './components/CheckScoreResult'

function App() {
  return (
    <BrowserRouter basename={'/sit-scor-line-liff'}>
      <Switch>
        <Route exact path="/CheckScore" component={CheckScore} />
        <Route exact path="/CheckScoreResult" component={CheckScoreResult} />
        <Route exact path="/ConfirmEdit" component={ConfirmEdit} />
        <Route exact path="/ConfirmFeedback" component={ConfirmFeedback} />
        <Route exact path="/EditInfo" component={EditInfo} />
        <Route exact path="/Feedback" component={Feedback} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
