import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';//USE {} TO DESTRUCTURE (ex{robots, cats}) NOT FOR DEFAULT


class App extends Component {//CLASS, not CONST/VAR/LET
    constructor(){
        super();//!
        this.state = {
            robots: [],//if local, robots: robots
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(
            users => {
                this.setState({ robots: users });
            }
        );
        
    }

    onSearchChange = (event) => {//Random named function-CATCHES EVENT CHANGES
        this.setState({searchfield: event.target.value});
    }

    render() {
        const{robots,searchfield} = this.state;//Clean upcode with reference

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })

        return !robots.length ?//IF ELSE
            <h1 class="f1 tc">Loading robots...</h1> :
        (   
            <div class="tc">
                <h1 class="f1 tc"><strong>ROBOFRIENDS</strong></h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ErrorBoundry>
                    <Scroll>
                        <CardList robots={filteredRobots/*!!!*/} />
                    </Scroll>
                </ErrorBoundry>
            </div>
        );
        
    }
}

export default App;