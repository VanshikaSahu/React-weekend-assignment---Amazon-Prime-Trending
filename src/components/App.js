import React, { useState} from "react";
import  slides  from '../data'
import '../styles/App.css';

const App = (props) => {

  const [currSlides, setCurrSlides] = useState(0)

  const clickPrev=()=>{
  
       currSlides >0 && setCurrSlides(currSlides-1);
       }
  
  
  const clickNext=()=>{
       currSlides <props.slides.length-1 && setCurrSlides(currSlides+1);
       }
  
  const clickRestart = () => {
      setCurrSlides(0);
  }     


  return (
    
    <>
     <div className="App">
      <div className="carousel">
            <h1 data-testid="title">{props.slides[currSlides].title}</h1>
            <p data-testid="text">{props.slides[currSlides].text}</p>
        </div>
        <button onClick={clickPrev} disabled={currSlides===0?true:false} data-testid="button-prev" >Prev</button>
        <button onClick={clickNext} disabled={currSlides===slides.length-1?true:false} data-testid="button-next">Next</button>
        <button onClick={clickRestart} disabled={currSlides===0?true:false} data-testid="button-restart">Restart</button>
    </div> 
    
    </>
  )
}


export default App;

