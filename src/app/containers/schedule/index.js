// Third party utils
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';

//Global styles
import '../../../globals/calendarStyle.css'

class Schedule extends React.Component {

  constructor(props) {
    super(props);
     
    this.schedulings = JSON.parse(window.localStorage.getItem('schedule')) || [];
    let calendarValues = [];

   if (this.schedulings.length > -1) {
        calendarValues = this.schedulings.map((x) => {
          return ({
            uid: x.uid,
            start: moment(x.datetime),
            end: moment(x.datetime).add(x.duration, 'hours'),
            value: `Marcado por ${x.client_name} com a ${x.professional_name} - ${x.service_name}`
          })
        })
    } 

    this.state = {
      lastUid: 4,
      selectedIntervals: calendarValues
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const  schedule  = this.schedulings;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }
    schedule.splice(schedule.findIndex(e => e.uid === event.uid),1);

    // FIXME: Move along with further data storage logic to logic middleware
    window.localStorage.setItem('schedule', JSON.stringify(schedule));
  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
  }

  render() {
    return <WeekCalendar
      startTime = {moment({h: 10, m: 0})}
      endTime = {moment({h: 21, m: 0})}
      numberOfDays= {14}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
    />
  }
}

  const mapStateToProps = state => ({
    //
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    //
  }, dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Schedule)