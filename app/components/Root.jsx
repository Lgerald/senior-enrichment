import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
//import EditCampus from './EditCampus'
//import EditStudents from './EditStudents'
import home from './home'
import Navbar from './navbar'
import store, { fetchStudents, fetchCampuses } from '../store';


 
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
        <div className="all">
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
