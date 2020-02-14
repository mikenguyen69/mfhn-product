import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LinkDetail from './Link/LinkDetail';
import firebase, {FirebaseContext} from "../firebase";
import CreateLink from './Link/CreateLink';

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
   this.setState({loading: true});
  }

  render() {
    const { error } = this.state;
    const { user } = this.props;
    
    if (error) {
      return (
        <div>
          Sorry, but the hook news list is unavailable right now
        </div>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
          <FirebaseContext.Provider value={{user, firebase}}>
            <Route exact path="/" render={() => <Redirect to="/create" /> } /> 
            <Route exact path="/create" component={CreateLink} /> 
            <Route exact path="/link/:linkId" component={LinkDetail} /> 
          </FirebaseContext.Provider>        
      </Router>
    );
  }
}

export default App;
