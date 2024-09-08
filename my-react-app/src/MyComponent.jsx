import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
      setName("Joe");
    }

    const incrementAge = () => {
      setAge(age + 1);
    }

    const toggleEmployment = () => {
      setIsEmployed(!isEmployed);
    }

    return(
      <div>
          <p>Name: {name}</p>
          <button onClick={updateName}>Set Name</button>

          <p>Age: {age}</p>
          <button onClick={incrementAge}>Set Age</button>
          
          <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
          <button onClick={toggleEmployment}>Employed?</button>
      </div>
    );
}

export default MyComponent