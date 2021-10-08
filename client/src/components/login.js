import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './tlogin.css'
import '../css/login.css'

toast.configure()



export default class Login extends Component {

    constructor(props) {
  
        super(props);
        this.userLoginSubmit = this.userLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
  
        this.state = {
          Email: "",
          Password: "",
          //token: "",
          open: false
        }
      }
  
      async userLoginSubmit(e) {
        e.preventDefault()
        const userData = {
          Email: this.state.Email,
          Password: this.state.Password,
         // id: this.state.id
        }
  
        
        await axios.post("customer/login",userData)
  
        .then((res) => {
          this.setState({
            token: res.data.token
          })
          localStorage.setItem("Authorization", res.data.token)
          window.location = "/profile"
          console.log(res.data.token);
          //alert("loging successfull");
          toast.success('Login Success',{position:toast.POSITION.TOP_CENTER})
        })
        .catch((err) => {
          console.log(err)
          this.setState({open: true})
          //("Invalid Email or Password")
          toast.error('Invalid Email or Password',{position:toast.POSITION.TOP_CENTER})
        })
      }
      handleClose(reason) {
        if (reason === 'clickaway') {
           return;
        }
        this.setState({open: false})
     };


    render() {

        return (
          <div class="login-form">
    
          <form className="submit-form" onSubmit={this.userLoginSubmit}>
           <div class="avatar">
             <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar"/>
           </div>
               <h2 class="text-center">Member Login</h2>   
               <div class="form-group">
               <input
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Enter Email"
                    class="form-control"
                    autoComplete="off"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={e => this.setState({Email: e.target.value})}
                    required/>
               </div>
               <br/>
           <div class="form-group">
           <input
              type="text"
              name="Password"
              class="form-control"
              placeholder="Enter Password"
              id="Password"
              autoComplete="off"
              onChange={e => this.setState({Password: e.target.value})}
              required
            />
               </div>     
               <br/>   
               <div class="form-group">
                   <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
               </div>
           <div class="bottom-action clearfix">
                   <label class="float-left form-check-label">
                     <input type="checkbox"/> Remember me</label>
                   <a href="#" class="float-right">Forgot Password?</a>
               </div>
           </form>
           <p class="text-center small">Don't have an account? <a href="#">Sign up here!</a></p>
       </div>
        )
    }
}
