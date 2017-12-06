import React, { Component } from 'react';

import { Grid , Cell,Textfield , Button , Content , Header ,CardText
,CardActions , Menu , MenuItem , IconButton, Icon,Card , CardTitle} from 'react-mdl';

// App component - represents the whole app
export default class Event extends Component {



  render() {
    return (
      <Grid component="section" className="section--center" shadow={0} noSpacing>
                 <Cell component="header" col={3} tablet={2} phone={4} >
                     <Icon name="play_circle_filled" />
                 </Cell>
                 <Cell component={Card} col={9} tablet={6} phone={4}>
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}></CardTitle>
                     <CardText>
                         <h4>Nom de l Evenment </h4>
                        Description event ici sllslslslsll
                     </CardText>

                     <CardText>
                      <span> Place   <Icon name="event" /> </span>
                     </CardText>
                     <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                     <Button raised colored style={{color: '#fff'}}>Add to Calendar</Button>
          <div className="mdl-layout-spacer"></div>
                 <Icon name="event" />
                     </CardActions>
                 </Cell>
                 <IconButton name="more_vert" id="btn1" ripple />
                 <Menu target="btn1" align="right" valign="bottom">
                     <MenuItem>Lorem</MenuItem>
                     <MenuItem disabled>Ipsum</MenuItem>
                     <MenuItem>Dolor</MenuItem>
                 </Menu>
             </Grid>
    );
  }
}
