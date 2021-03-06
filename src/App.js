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
import CheckTasks from './components/CheckTasks'
import CheckTasksResult from './components/CheckTasksResult'
import Verify from './components/Verify'
import ConfirmVerify from './components/ConfirmVerify';

function App() {
  return (
    <BrowserRouter basename={'/sit-scor-line-liff'}>
      <Switch>
        <Route exact path="/CheckScore" component={CheckScore} />
        <Route exact path="/CheckScoreResult" component={CheckScoreResult} />
        <Route exact path="/CheckTasks" component={CheckTasks} />
        <Route exact path="/CheckTasksResult" component={CheckTasksResult} />
        <Route exact path="/ConfirmEdit" component={ConfirmEdit} />
        <Route exact path="/ConfirmFeedback" component={ConfirmFeedback} />
        <Route exact path="/ConfirmVerify" component={ConfirmVerify} />
        <Route exact path="/EditInfo" component={EditInfo} />
        <Route exact path="/Feedback" component={Feedback} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Verify" component={Verify} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
