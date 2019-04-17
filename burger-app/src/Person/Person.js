import React, { Component } from 'react';

export class Person extends Component {

    
    
    render(props){
    return(
           <div className = "grid-container" >
            <div className="card">
                <div className="bg-img">
                    <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>{this.props.name}</h4>
                    <p>{this.props.name} is {this.props.age} years old.</p> <button value={this.props.id}>Readmore</button> </div>
            </div>
           </div>
            )
}
// const Person = (props) => {
//     return (
//         <div className="grid-container">
//             <div className="card">
//                 <div className="bg-img"></div>
//                 <div className="content">
//                     <h4>{props.name}</h4>
//                     <p>{props.name} is {props.age} years old.</p> <button value={props.id}>Readmore</button> </div>
//             </div>
//         </div>
//     )
// }
}