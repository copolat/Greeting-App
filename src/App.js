import React from 'react'
import Form from './components/Form'
import GreetingMessage from './components/GreetingMessage'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Guest',
      newUser: ''
    }
    this.updateName = this.updateName.bind(this);
  }
  updateName(name) {
    this.setState({
      userName: name.trim() ? name : 'Guest'
    })
  }
  render() {
    return (
      <div>
        <GreetingMessage name={this.state.userName}/>
        <Form onInput={this.updateName}/>
        </div>
    )
  }
}
export default App;
