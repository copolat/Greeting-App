import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Guest',
      newUser: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      newUser: e.target.value,
      userName: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.userName}</h1>
        <label htmlFor="user_name">Enter your name: </label> 
        <input id="user_name" type="text" onChange={this.handleChange} value={this.state.newUser}/>
        </div>
    )
  }
}
export default App;
