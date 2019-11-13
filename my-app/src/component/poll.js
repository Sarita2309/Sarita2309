import React,{ Component } from 'react'

const URL_Team='http://localhost:3004/teams'

class Poll extends Component{

    constructor(props){
        super(props);

        this.state ={
            PollTeams:''
        }
    }

    componentDidMount(){
        fetch(URL_Team, {method: 'GET'})
        .then (response => response.json())
        .then (json =>{
            this.setState({ PollTeams: json})
        })
    }


    renderPoll(){
       
        if(this.state.PollTeams){
            return this.state.PollTeams.map((item, position)=>{
                return(
                    <div className="poll_item" key={item.id}>
                        <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                             
                        <div>{item.count} Votes</div>
                    </div>
                )
            })
        }
    } 

 
    render(){
        return(
            <div className="home_Poll">
                <h2>Who will be the next Champion?</h2>
                <div className="poll_container">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }

}

export default Poll;