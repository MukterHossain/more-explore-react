import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './bookStor'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  const books =[
    {id:1, name: 'Physics', Price:100},
    {id:2, name: 'Math', Price:200},
    {id:3, name: 'Chemistry', Price:150},
    {id:4, name: 'Biology', Price:250},
  ]
  


  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const singers = [
    {id:1, name: 'D. Mahfuzur Rahman', age: 68},
    {id:2, name: 'Eva Rahman', age: 38},
    {id:3, name: 'Shuvro Dev', age: 52},
    {id:4, name: 'Pritom', age: 28},
  ]

  return (
    <>
  
    <BookStore books={books}></BookStore>

      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <Actor name="Bappa Raz"></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }


      {/* <Todo task="Learn React"></Todo>
      <Todo task="Learn More"></Todo>
      <Todo task="Core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

    {/* <Device name="Laptop" price="55"></Device>
    <Device name="Mobile" price="17"></Device>
    <Device name="watch" price="3"></Device>
    <Person></Person>
    <Student grade="7" score="99"></Student>
    <Student grade={22} score="54"></Student>
    <Student></Student>
    <Developer></Developer> */}

    </>
  )
}
function Device(props){
  console.log(props)
  return <h2>This is device: {props.name} Price: {props.price}</h2>
}
function Person(){
  const age = 25;
  const money = 20;
  const person ={name: 'Shakib', age:12}
  return <h3>I am a {person.name} with age:{age + money}</h3>
}


const {grade, score} = {grade: '7', score: '99'} //destructuring 
function Student({grade=1, score=0}){
  console.log(grade, score)
  return (
   <div className="student">
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle ={
    margin:'20px',
    padding: '20px',
    border:'2px solid purple',
    borderRadius:'10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
    </div>
  )
}













export default App
