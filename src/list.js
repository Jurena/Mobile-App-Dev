import React from 'react'; 

//items are passed as porps to the list component
//from the main app component

const List = props => (
    <ul>
    {
        props.items.map(item =><li key={item.toString()}><input type="checkbox"/>{item}</li>) 
    } 
    </ul>
);



export default List; 



/*
import React from 'react'; 

const MyComponent=(props) => (
    <div>hi {props.name}!</div>
); 

export default MyComponent; 
*/
