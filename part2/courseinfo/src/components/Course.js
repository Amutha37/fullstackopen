import React from "react";

// Title component
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

// Print total
const Total = ({ parts }) => {
// Sum function
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  
return <strong>Number of exercises {sum}</strong>;
}


// Print list 
const Part = ({ part}) => <li key={part.id}>  {part.name}{part.exercises}</li>    

// Content mapping component 
const Content = ( {parts} ) => {
  
  return (
    <div>
       
         <ul>
      {parts.map((part) => (   
 <Part key={part.id} part={part} />      
      ))}
        </ul>
     
    </div>
  );
};

// Main component props from App 
const course = ({ course }) => {

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default course;
