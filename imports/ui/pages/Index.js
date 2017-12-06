import React from 'react';
import { Jumbotron } from 'react-bootstrap';


import { Card , CardTitle , CardText, CardActions, Button,CardMenu , IconButton } from 'react-mdl';


const Index = () => (
<div>
<br />
<br />
<br />
<br />
  <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
      Home desciption this is ISAMM CLUBS APPLICATION ETC ....
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

</div>
);

export default Index;
