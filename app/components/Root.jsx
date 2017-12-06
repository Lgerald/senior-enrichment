import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import home from './home'
import Navbar from './navbar'
import store, { fetchStudents, fetchCampuses } from '../store';

/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */
 
export default class root extends Component {
  componentDidMount () {
    const campusThunk = fetchCampuses()
    const studentThunk = fetchStudents()

    store.dispatch(campusThunk)
    store.dispatch(studentThunk)
  }

  render() {
 
    return (
    <div>
      <Router>
        <div>
           <Navbar />
              <switch>
                <Route exact path="/" component={home} />
                <Route exact path="/campus" component={AllCampuses}/>
                <Route path="/campus/:campusId" component={SingleCampus} />
                <Route exact path="/students" component={AllStudents} />
                <Route path="/students/:studentId" component={SingleStudent} />
              </switch>
        </div>
      </Router>
    </div>
    )
  }
}
