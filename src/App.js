import React from 'react';
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from './SearchBox';
import "./App.css";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots:robots,
            searchfield:''
        };
    }

    onSearchChange =(event) =>{
        this.setState({searchfield:event.target.value});      
    }

   

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        console.log(filteredRobots);
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

export default App;

