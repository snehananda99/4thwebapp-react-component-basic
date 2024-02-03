import React from 'react'

function Homepage() {
  const tittle="Sneha Dinkar Deshmukh";
  const subtittle=" i am the winner";
  const cnc={
    title : "cnc web world",
    subtitle :"we are  learner",
    course1:"java full stack",
    course2:"mern stack",
    fee : 1500,
    array:[1,2,3,4,5]
  }
  const array =[3,4,5,6,7]

  function myfun(){
  alert("welcome to learn")
  }
  const sneha={
    FontSize:30,
    FontFace:"times new roman",
    background:'yellow'
  }
  return (
    <div>
      <h1 style={{background:'green'}}>{tittle}</h1>
      <h2 style={sneha}>{subtittle}</h2>
      <p>{cnc.course1}</p> 
      <h3>{cnc.fee }</h3>
      <p>{array}</p>
      <p>{array[3]}</p>
      <p style={sneha}>{cnc.array[3]}</p>
      <p>{cnc.array}</p>
      <p>{JSON.stringify(cnc)}</p>
      {/* <button onClick={myfun()}> submit</button>   "if we using parenthesis(()) with function 
       then without click on button message is show. after screen refresh it will direct show the message
       without click on button" */}
      <button onClick={myfun}> submit</button>
    </div> 
  )
}

export default Homepage