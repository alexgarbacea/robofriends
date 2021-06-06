import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError : false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true});
    }

    render(){
        return this.state.hasError ?//IF ELSE
             <h1>Oops...</h1>:
        (
            this.props.children
        );
    }
}

export default ErrorBoundry;