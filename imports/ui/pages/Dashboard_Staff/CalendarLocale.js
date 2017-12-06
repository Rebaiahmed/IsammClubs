import React, { Component } from 'react';
import { Header, Navigation,Drawer,Icon, Grid ,Cell,FABButton,Dialog,
DialogTitle,DialogContent, DialogActions,Button,Textfield,Card,CardText,CardActions,CardTitle } from 'react-mdl';
import BigCalendar from 'react-big-calendar';
//import { DatePicker } from 'react-mdl-datepicker';
//import TimePicker from '{universe:react-clock-picker}';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaterialDateTimePicker from 'material-datetime-picker';
import TimePicker from 'rc-time-picker';
import { Meteor } from 'meteor/meteor';
import { addReservation } from '../../../api/Reservations/methods';
BigCalendar.momentLocalizer(moment);
import { withTracker } from 'meteor/react-meteor-data';

import Reservations from '../../../api/Reservations/reservations.js';
// App component - represents the whole app
export default class CalendarLocale extends Component {



  constructor(props) {
    super(props);
    this.state ={
      description :'',
      booking : [],
      startDate: new Date(),
          Time :new Date()

    }

//*****************************//
    this.onDatePicked = this.onDatePicked.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
   this.handleCloseDialog = this.handleCloseDialog.bind(this);
   this.handleDescription  = this.handleDescription.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleTime = this.handleTime.bind(this);

}





//******************************************//
componentDidMount()
{

}
//*******************************//

ComponentWillMount()
{

/*  if(Meteor.isClient) {
  window.fbAsyncInit = function() {
      FB.init({
        appId      : '2040572272841194',
        status     : true,
        xfbml      : true,
        version    : 'v2.5'
      });
    };*/









    const subscription = Meteor.subscribe('Reservations.list');
    console.log("subscription");
    if (subscription.ready()) {
      const events = Reservations.find().fetch();
      console.log("events" + events);

    }
}


//********************************//
onDatePicked(date) {
  alert(date);
}

//********************************************//
handleOpenDialog() {
   this.setState({
     openDialog: true
   });
 }
//*************************************************//
 handleCloseDialog() {
   this.setState({
     openDialog: false
   });
 }

//***************************************//
handleDescription  (event) {
   this.setState({description: event.target.value});
 }


 //***************************************//
 handleTime  (event) {
    this.setState({Time: event.target.value});
  }

//*******************************************//
handleChange(event) {
  console.log("dat"+ event.target.value);
    this.setState({
      startDate: event.target.value
    });
  }

  //********************************//









AddBooking(event)
{
event.preventDefault();
const  {startDate , description, Time} = this.state ;
let uid = Meteor.userId() ;
console.log("clicked" + startDate + " " + description + " " + Time
+" uid" + uid);

console.log(Reservations.find({}).fetch());

let data ={StartDate:startDate, Time:Time,description:description,
ClubId:uid}


console.log(data);

console.log(Reservations);
/*addReservation.call(data,(error, response) => {

if(error){
  console.log("ee" + error);
}else{
  console.log("response");
}

})*/


Reservations.insert(data)



console.log("inserted");
}




  render() {
    const  {booking}  = this.state ;
    return (
      <div>
        <h3> local Booking  </h3>


<Grid className="demo-grid-1">



  <Cell col={8}>
  <BigCalendar
   events={booking}
   startAccessor='startDate'
   endAccessor='endDate'
 />
  </Cell>

<br/>
<br/>
<br/>






  <Cell col={2}>

  <FABButton onClick={this.handleOpenDialog}  colored>
      <Icon name="add" />
  </FABButton>

<Dialog open={this.state.openDialog}>
           <DialogTitle> <Icon name="note_add" /></DialogTitle>
           <DialogContent>

<Grid>
<div className="mdl-textfield mdl-js-textfield">
  <input className="mdl-textfield__input" type="date" id="fname"
  value={this.state.startDate} onChange={this.handleChange} />
  <label className="mdl-textfield__label" htmlFor="fname">Day</label>
</div>

</Grid>


<Grid>
<div className="mdl-textfield mdl-js-textfield">
  <input className="mdl-textfield__input" type="time" id="fname"
  value={this.state.Time} onChange={this.handleTime} />
  <label className="mdl-textfield__label" htmlFor="fname">Time</label>
</div>

</Grid>


           <Textfield
  value={this.state.description} onChange={this.handleDescription }
   label="Content..."
   floatingLabel
   rows={3}
    style={{width: '200px'}}
              />



           </DialogContent>
           <DialogActions>
             <Button raised colored onClick={(event) => this.AddBooking(event)}>Publish To Facebook</Button>
             <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
           </DialogActions>
</Dialog>

  </Cell>

</Grid>


<Grid className="demo-grid-2">



  </Grid>


      </div>
    );
  }
}
