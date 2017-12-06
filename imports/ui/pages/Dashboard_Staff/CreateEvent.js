import React, { Component } from 'react';
import { Header, Navigation,Drawer,Icon, Grid ,Cell,FABButton,Dialog,
DialogTitle,DialogContent, DialogActions,Button,Textfield } from 'react-mdl';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
// App component - represents the whole app
export default class CreateEvent extends Component {




  constructor(props) {
    super(props);
    this.state ={
      link :'',
      events : [
         {
             start: '2015-07-20',
             end: '2015-07-02',
             eventClasses: 'optionalEvent',
             title: 'test event',
             description: 'This is a test description of an event',
         },
         {
             start: '2015-07-19',
             end: '2015-07-25',
             title: 'test event',
             description: 'This is a test description of an event',
             data: 'you can add what ever random data you may want to use later',
         }
     ]

    }

//*****************************//
    this.onDatePicked = this.onDatePicked.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
   this.handleCloseDialog = this.handleCloseDialog.bind(this);
   this.handleLink = this.handleLink.bind(this);
}



//******************************************//
componentDidMount()
{

}


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




console.log('Username: ' + Meteor.user().username);




    const subscription = Meteor.subscribe('Events.list');
    if (subscription.ready()) {
      /*const events = Events.find().fetch();
      console.log("events" + events);*/

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
handleLink(event) {
   this.setState({link: event.target.value});
 }


//************AddEvent ********************//

AddEvent(event)
{
event.preventDefault();
/*graph.setAccessToken('ffa387a6ddd2f8e4f6277f98d5f62309');
var options = {
    timeout:  3000
  , pool:     { maxSockets:  Infinity }
  , headers:  { connection:  "keep-alive" }
};

graph
  .setOptions(options)
  .get("zuck", function(err, res) {
    console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
  });*/
}





  render() {
    const  {events}  = this.state ;
    return (
      <div>
        <h3> CreateEvent  </h3>


<Grid className="demo-grid-1">
  <Cell col={8}>
  <BigCalendar
   events={events}
   startAccessor='startDate'
   endAccessor='endDate'
 />
  </Cell>



  <Cell col={4}>

  <FABButton onClick={this.handleOpenDialog}  colored>
      <Icon name="add" />
  </FABButton>

<Dialog open={this.state.openDialog}>
           <DialogTitle>Add Facebook Event Link <Icon name="note_add" /></DialogTitle>
           <DialogContent>


           <Textfield
  value={this.state.link} onChange={this.handleLink }
   label="link..."
   floatingLabel
   style={{width: '200px'}}
              />
           </DialogContent>
           <DialogActions>
             <Button type='button' onClick={(event) => this.AddEvent(event)}>Confirm</Button>
             <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
           </DialogActions>
</Dialog>

  </Cell>

</Grid>





      </div>
    );
  }
}
