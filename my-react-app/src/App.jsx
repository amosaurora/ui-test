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
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
    <Header/>
    <Card/>
    <Card/>
    <Food/>
    <Student name="John" age={25} isStudent={true}/>
    <Student name="Bob" age={14} isStudent={false}/>
    <Button/>
    <UserGreeting isLoggedIn={true} username="John"/>
    <Footer></Footer>
    </>
  );
}

export default App
