import React from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Header, Navigation,Drawer , Button , Dialog , DialogTitle,DialogContent, DialogActions,
CardText, Textfield ,Snackbar  } from 'react-mdl';

import { Accounts } from 'meteor/accounts-base';


class  PublicNavigation extends React.Component  {


constructor(props) {
    super(props);
     this.state = {
       email :'',
       password :'',
           errorMsg : '',
     };
this.handleOpenDialog = this.handleOpenDialog.bind(this);
this.handleCloseDialog = this.handleCloseDialog.bind(this);
this.handleEmail= this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.SignIn = this.SignIn.bind(this);
this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);





  }




  handleEmail(event) {
     this.setState({email: event.target.value});
   }

  //*******************************//



  handlePassword(event) {
     this.setState({password: event.target.value});
   }



//********************************//


  handleOpenDialog() {
   this.setState({
     openDialog: true
   });
 }


 //*****************************//

 handleCloseDialog() {
   this.setState({
     openDialog: false
   });
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













//**************************************************//
//*********SIGN IN FUNCTION******************//
SignIn(event)
{


  let user ={ email :'j2i@gmail.com' , password : 'ahmedrebai', firstName :'ClubJ2i', lastName :'ISAMM'}


  event.preventDefault();
console.log("clicked");
let email = this.state.email ;
let password = this.state.password ;
console.log("email" + email + "pass" + password);


if(email =='' || password =='')
{
    //this.setState({errorMsg : 'Incorrect Email or password..'}) ;
    this.handleShowSnackbar()
}else{

  Meteor.loginWithPassword(email, password, (error) => {

    console.log(error);
    if (error) {
      console.log("error" + error.reason);
    this.handleShowSnackbar();
    } else {

     console.log("ok it's ok");
     this.props.history.push("/signup");
    }


  });

}




}












  render() {

 const { btnBgColor, isSnackbarActive,errorMsg } = this.state;

return (

  <div>
  <Header title={<span><span style={{ color: '#ddd' }}> </span><strong>ISAMM CLUBS</strong></span>}>
         <Navigation>
             <a href="#"><NavLink to ="/"> Home  </NavLink> </a>
             <a href="#"><NavLink to ="/clubs"> Clubs  </NavLink>  </a>
             <a href="#"> <NavLink to ="/events"> Events </NavLink>  </a>
             <a href="#"> <Button raised accent onClick={this.handleOpenDialog}>SingIn</Button> </a>
         </Navigation>
     </Header>

     <Dialog open={this.state.openDialog}>
       <DialogTitle>Login </DialogTitle>
       <DialogContent>
         <p>Enter Your Email and Password</p>


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
type="password"
floatingLabel
style={{width: '200px'}}
/>
         </CardText>


       </DialogContent>
       <DialogActions>
         <Button type='button' raised colored onClick={this.SignIn}>Sign in</Button>
         <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
       </DialogActions>
     </Dialog>



     <Snackbar
              active={isSnackbarActive}
              onClick={this.handleClickActionSnackbar}
              onTimeout={this.handleTimeoutSnackbar}
              action="Undo">Email Or Password Invalid.</Snackbar>
  </div>

)}


}

export default PublicNavigation;
