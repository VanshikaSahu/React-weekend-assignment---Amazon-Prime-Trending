import React, {Component, useState} from "react";
import  slides  from '../data'
import '../styles/App.css';

const App = (props) => {
  const[index, setIndex] = useState(0); 
  
  const nextSlide = () =>{
    if(index<props.slides.length-1){
      setIndex(index+1);
    }
  }

  const prevSlide = () =>{
    index>0 && setIndex(index-1);
    //can use and operator to render statements.

  }

  const restart = ()=>{
    setIndex(0);
  }

  return (
    <>
    <div className="App">
      <h1 data-testid="title"> {props.slides[index].title} </h1>
      <p data-testid="text" > {props.slides[index].text}</p>
      <button disabled = {index===slides.length-1 ? true:false}  onClick = {nextSlide} data-testid="button-next">next</button>
      <button disabled = {index===0?true:false}  onClick = {prevSlide} data-testid="button-prev">prev</button>
      <button disabled = {index===0?true:false} onClick = {restart} data-testid="button-restart">restart</button>
    </div>
    </>
  )
}

export default App;

