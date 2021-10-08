import React,{ Component } from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';
import "./profile.css";



export default class CustomerDetails extends Component{
    constructor(props){
        super(props);

        this.state={
           customers:{}
        }
    }
    
  componentDidMount(){
     const id = this.props.match.params.id;

    axios.get(`/customer/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
              customers:res.data.post
           });
            console.log(this.state.customers);
        }
     });
    } 
  render() {
      const{FirstName, LastName, Address, Email, Role} = this.state.customers;
    return(


      <div class="page-content page-container" id="page-content">
          
    <div class="padding">
        <div class="row container d-flex justify-content-center"  ref={(el) => (this.componentRef = el)}>
            <div class="col-xxl-10 col-md-20">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 class="f-w-800">User Details</h6>
                                <p>{FirstName} {LastName}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h3 class="m-b-20 p-b-5 b-b-default f-w-1200">Information :</h3>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Full Name</p>
                                        <h5 class="text-muted f-w-400">{FirstName} {LastName}</h5>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Address</p>
                                        <h5 class="text-muted f-w-400">{Address}</h5>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Role</p>
                                        <h5 class="text-muted f-w-400">{Role}</h5>
                                    </div>
                                </div>
                                <h3 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contact Details :</h3>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Full Name</p>
                                        <h5 class="text-muted f-w-400">{FirstName} {LastName}</h5>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h5 class="text-muted f-w-400">{Email}</h5>
                                    </div>
                                </div>
                                
                                <br/>
                                
                                <ReactToPrint
                          trigger={() => <button className="generateReport1 btn btn-warning" type="button"><i class="fa fa-download" aria-hidden="true"></i> Generate Report
                          </button>}
                          content={() => this.componentRef}/>

                          &nbsp;&nbsp;&nbsp;
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                         

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    )
    }
  }
