function Form(props) {
  function handleInput(e) {
    // if(e.target.value.trim()){ // One way to change, another way is to change in App.js updateName() function using ternary operator. 
      props.onInput(e.target.value)
    // }else {
    //   props.onInput('Guest')
    // }
    
  }
  return (
  <form action="">
    <label htmlFor="user_name">Enter your name: </label> 
    <input id="user_name" onInput={handleInput}/>
  </form>
  )
}

export default Form;