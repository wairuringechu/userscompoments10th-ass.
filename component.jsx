import React,{useState} from "react";

const users=[
    {name: "John Doe", id: 1, career:'software engineer'}, 

    { name: "Jane Doe", id: 2, career: 'data scientist' }, 

    { name: "Billy Doe", id: 3, career: 'cyber security analyst' }, 

];

function Header() {
    return (
      <div>
        <h1>This is the header component</h1>
      </div>
    );
  }
  
  export default Header;

  
