// lib/utils.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ProfilePic from "./ProfilePic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105}, 
    {id: 4, name: "coconut", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}];
  const vegetables = [{id: 6, name: "potato", calories: 110}, 
    {id: 7, name: "celery", calories: 15}, 
    {id: 8, name: "carrot", calories: 25}, 
    {id: 9, name: "corn", calories: 63}, 
    {id: 10, name: "broccoli", calories: 50}];

  return(
    <>
    <Header/>
    <Card/>
    <Card/>
    <hr></hr>
    <div><p><ProfilePic/></p><p><Button/></p></div>
    <hr></hr>
    <MyComponent/>
    <hr></hr>
    <Counter/>
    <hr></hr>
    <Student name="John" age={25} isStudent={true}/>
    <Student name="Bob" age={14} isStudent={false}/>
    <hr></hr>
    {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
    {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>}
    {/* <UserGreeting isLoggedIn={true} username="John"/> */}
    <Footer></Footer>
    </>
  );
}

export default App
