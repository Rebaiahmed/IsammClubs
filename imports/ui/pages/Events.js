import React, { Component } from 'react';
import { Grid , Cell,Textfield , Button , Content , Header ,CardText
,CardActions , Menu , MenuItem , IconButton, Icon,Card , CardTitle , List , ListItem , ListItemAction , ListItemContent} from 'react-mdl';
import classNames from 'classnames';

import { Meteor } from 'meteor/meteor';

import Event from '../components/Event' ;
// App component - represents the whole app
export default class Events extends Component {



constructor(props)
{

super(props);
this.state ={
  events :[]
}

}




//************************//


componentWillMount()
{
    /*const subscription = Meteor.subscribe('documents.list');
      const documents = Documents.find().fetch();*/
      //seet state of odcuments***********..
}



//*******************SortByDate*****************//


SortByDate()
{
  ///here weill get data sorted by date ************//
  /*
  const subscription = Meteor.subscribe('documents.list');
    const documents = Documents.find().fetch();*/
}



//*********SearchBYName**************//
SearchBYName()
{


}


//********Add Event to Calendar

AddToCalendar()
{


}












  render() {
    return (
<div>







       <Grid className="demo-grid-1">
       <Header  title="Rechercher un Évenment" scroll>
                        <Textfield
                            value=""
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
       </Header>
      </Grid>




      <Grid className="demo-grid-3">
    <Cell col={4} tablet={8}>
    <List style={{width: '300px'}}>
      <ListItem>
        <ListItemContent avatar="person">Catégorie</ListItemContent>
        <ListItemAction>
          <a href="#"><Icon name="star" /></a>
        </ListItemAction>
      </ListItem>
      <ListItem>
        <ListItemContent avatar="person">Date</ListItemContent>
        <ListItemAction>
          <a href="#"><Icon name="star" /></a>
        </ListItemAction>
      </ListItem>
      <ListItem>
        <ListItemContent avatar="person">Type D evenemnt </ListItemContent>
        <ListItemAction>
          <a href="#"><Icon name="star" /></a>
        </ListItemAction>
      </ListItem>
    </List>


    </Cell>
        <Cell col={8} tablet={6}>

         <Event />



        </Cell>

       </Grid>








    </div>
    );
  }
}
