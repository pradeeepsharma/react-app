import React, {Component} from "react";

export class UserInput extends Component{
    render(){
        return (
            <input type="text" onChange={this.props.inputHandler}/>
        );
    }
}

