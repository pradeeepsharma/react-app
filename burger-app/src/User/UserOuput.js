import React from 'react';


const UserOutput =(props)=>{

   
     return (
         <div>
            <p onClick={props.clickHandler}>sometext</p>
            <p> Paragrap2 for user :{props.name2}</p>
        </div>
     );
}

export default UserOutput;