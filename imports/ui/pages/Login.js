import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import handleLogin from '../../modules/login';

import { Header, Navigation,Drawer , Card , CardText, CardTitle,Button,
CardActions,Icon ,Textfield ,Snackbar} from 'react-mdl';



class Login extends React.Component {



  constructor(props) {
    super(props);
    this.state ={
      email :'',
      password :'',
      isSnackbarActive: false,
      errorMsg : '',
    }


//***************************//
this.handleEmail= this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
this.SignUp = this.SignUp.bind(this);
  }

  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }


//***********************************//


handleEmail(event) {
   this.setState({email: event.target.value});
 }

//*******************************//



handlePassword(event) {
   this.setState({password: event.target.value});
 }




//****************Msg Error******************//
handleShowSnackbar() {
    this.setState({
      isSnackbarActive: true,
      btnBgColor: '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16)
    });
  }


  //******************************//
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }



  //*************************//
  handleClickActionSnackbar() {
    this.setState({
      btnBgColor: ''
    });
  }




//*******GoSignUp**********************//

SignUp(event)
{
console.log("clicked");
  this.props.history.push("/signup");
}


//*********SIGN IN FUNCTION******************//
SignIn(event)
{
  event.preventDefault();
console.log("clicked");
let email = this.state.email ;
let password = this.state.password ;
console.log("email" + email + "pass" + password);


if(email =='' || password =='')
{
    this.setState({errorMsg : 'Incorrect Email or password..'}) ;
    this.handleShowSnackbar()
}else{

  Meteor.loginWithPassword(email, password, (error) => {

    console.log(error);
    if (error) {
      console.log("error" + error.reason);
      this.setState({errorMsg : error.reason}) ;
      this.handleShowSnackbar()
    } else {
      this.setState({errorMsg : 'Success Login '}) ;
      this.handleShowSnackbar()

    }


  });

}




}



  render() {
 const { btnBgColor, isSnackbarActive,errorMsg } = this.state;

    return (
      <div>
      <br/>
      <br/>
      <br/>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{ height: '176px'}}>Login</CardTitle>

          <CardText>
          <Textfield
value={this.state.email} onChange={this.handleEmail}
label="Email..."
floatingLabel
style={{width: '200px'}}
/>

           </CardText>


           <CardText>
           <Textfield
value={this.state.password} onChange={this.handlePassword}
 label="Password..."
 floatingLabel
 style={{width: '200px'}}
 />
          </CardText>


          <CardActions border>
            <Button raised colored onClick={(event) => this.SignIn(event)}>Sign-In <Icon name="add" /></Button>
          </CardActions>

          <CardActions border>
          <CardText> You Dont have Account ? </CardText>
            <Button raised accent onClick={(event) => this.SignUp(event)}> Create Account</Button>
          </CardActions>



          <Snackbar
                   active={isSnackbarActive}
                   onClick={this.handleClickActionSnackbar}
                   onTimeout={this.handleTimeoutSnackbar}
                   action="Undo">{errorMsg }.</Snackbar>




      </Card>

      </div>
    );
  }
}

export default Login;
