import React from 'react';
import AppFirstPage from '../appFirstPage';
import AppSecondPage from '../appSecondPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={AppFirstPage} />
                <Route path="/additem" component={AppSecondPage}/>
            </Switch>
        </Router>
    )
}

export default App;