import React from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import "./App.css";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:''
        };
    }

    onSearchChange =(event) =>{
        this.setState({searchfield:event.target.value});      
    }

    componentDidMount(){
      fetch('https://cors-anywhere.herokuapp.com/'+'http://jsonplaceholder.typicode.com/users')
        .then(response=>{
         return response.json();
        })
        .then(users =>{this.setState({robots:users});
        })
    }
   
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        console.log(filteredRobots);
        if(this.state.robots.length === 0){
          return <h1>Loading!!</h1>
        }else{
        return (
            <div className='tc'>
              <h1 className='f1' >RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              {console.log("here too!",filteredRobots)}
                <CardList robots =  {filteredRobots} />
              
            </div>
          );
        }
      }
    }

export default App;

