import React,{ Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './profile.css'
const validator = require("validator");
// import validate from './validateInfo';
// import useForm from './useForm';
// import ScriptTag from 'react-script-tag';

toast.configure()


export default class addCustomer extends Component{

  

  constructor(props){
     super(props);
     this.state={
         FirstName:"",
         LastName:"",
         Address:"",
         Email:"",
         Password:"",
         Role:""

     }
  }

  handleInputChange = (e) =>{      
       const{name,value} =e.target;

       this.setState({
         ...this.state,
          [name]:value
       })
      
  }

  onSubmit =(e) =>{
    e.preventDefault();

    const{FirstName, LastName, Address, Email, Password, Role} = this.state;

    const data ={
         FirstName:FirstName,
         LastName:LastName,
         Address:Address,
         Email:Email,
         Password:Password,
         Role:Role
    }

    console.log(data)

    if (validator.isEmail(Email)) {  
      axios.post("/customer/add",data).then((res) =>{
        if(res.data.success){
          // alert("Added Successfully!")
          toast.success('Added Success',{position:toast.POSITION.TOP_CENTER})
           this.setState({
                FirstName:"",
                LastName:"",
                Address:"",
                Email:"",
                Password:"",
                Role:""
           }
           )
          }
      });  
      }
      else {  
        toast.warning('Please enter a valid email',{position:toast.POSITION.TOP_CENTER}) }

            
      
    
     
  }
  
   
  
render() {

  return(

    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal text-white">Registration Area</h1>
        <form className="needs-validation" noValidate>
           <div className="form-group"  style={{marginBottom:'15px'}}>
             <h4>         
             <label style={{marginBottom:'5px'}} className="text-white"> First Name </label>
             </h4>
             <input type="text" 
             title="Please enter first name"
             className="form-control"
             name="FirstName"
             placeholder="Enter First Name"
             pattern="[a-zA-Z]*" 
             onInvalid="alert(' Your Name Is Invalid ');"
             noValidate
             required
             value={this.state.FirstName}
             onChange={this.handleInputChange}/>
             </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <h4>
                <label style={{marginBotton:'5px'}}className="text-white">Last Name</label>
                </h4>
                <input type ="text"
                className="form-control"
                name="LastName"
                placeholder="Enter Last Name"
                pattern="[a-zA-Z]*" 
                oninvalid="alert(' Your Name Is Invalid ');"
                noValidate
                required
                value={this.state.LastName}
                onChange={this.handleInputChange}/>
            </div>
            
            <div className="form-group" style={{marginBotton:'15px'}}>
                <h4>
                <label style={{marginBotton:'5px'}}className="text-white">Address</label>
                </h4>
                <input type="text"
                className="form-control"
                name="Address"
                placeholder="Enter Address"
                noValidate
                required
                value={this.state.Address}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <h4>
                <label style={{marginBotton:'5px'}}className="text-white">Email</label>
                </h4>
                <input type="email"
                className="form-control"
                name="Email"
                placeholder="Enter Email"
                noValidate
                required
                pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                oninvalid="alert(' Your Email Is Invalid ');" 
                inputMode="email" 
                value={this.state.Email}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <h4>
                <label style={{marginBotton:'5px'}}className="text-white">Password</label>
                </h4>
                <input type="password" 
                className="form-control"
                name="Password"
                placeholder="Enter Password"
                oninvalid="alert(' Your Password Is Invalid ');"
               
                minlength="8"
                
                required
                value={this.state.Password}
                onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <h4>
                <label style={{marginBotton:'5px'}}className="text-white">Role</label>
                </h4>
                <input type ="text"
                className="form-control"
                name="Role"
                placeholder="Enter Role (Admin, Employee, Customer)"
                noValidate
                required
                value={this.state.Role}
                onChange={this.handleInputChange}/>
            </div>
            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
             &nbsp; REGISTER
            </button>
              
         </form>
         </div>
        
    )
  }
}

