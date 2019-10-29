import React, {Component} from 'react';


class Subscriptions extends Component{

    constructor(props){
        super(props);

    this.state ={
        email: ''
    }
    }

    saveSubscription = (email) => {
        const URL_EMAIL = 'http://localhost:3004/subcriptions'; 

        fetch(URL_EMAIL,{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-type' : 'application/json'
            },
            body:JSON.stringify({email})
        }).then((res)=>
             res.json())
        .then(()=>{
            this.setState({
                email:''
            })
        })
      
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        const regex=/\S+@\S+\.\S+/;
 
        if(regex.test(email)){
            this.saveSubscription(email)
        }
        else{
            alert('pls enter valid email');
        }
    }

    onChangeInput = (event) => {
       this.setState({
           email: event.target.value
       })
        
    }

    render() {
        return(
            <div className="subscribe-panel">
               <h3> Subscribe to US </h3>
               <form onSubmit = {this.handleSubmit}>
                  <input 
                  type="text" 
                  placeholder="youremail@email.com" 
                  value={this.state.email}
                  onChange = {this.onChangeInput} />
               </form>
               <small>
                   fhshfk sbvkjsf  bvnsvf avbdvjhsv vsdjcsh  djhshfsjv
               </small>
            </div>
        )
    }

}

export default Subscriptions