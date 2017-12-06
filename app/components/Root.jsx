import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import home from './home'

/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */
 
export default class root extends Component {
  constructor() {
    super()
    this.state = {}

  }

  render() {
 
    return (
    <div>
        <Router>
          <switch>
            <Route path="/" component={home} />
            <Route exact path="/campus" component={AllCampuses}/>
            <Route path="/campus/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/students/:studentId" component={SingleStudent} />
          </switch>
        </Router>
    </div>
    )
  }
}
