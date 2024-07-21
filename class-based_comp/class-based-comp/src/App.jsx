import React from "react"
import Comp from "./components/Comp"

class App extends React.Component {
  state = {
    name: 'anshu',
    age: 20,
    count: 0
  }
  inc = () =>{
     this.setState({count: this.state.count+1})
  }
  prevs = () =>{
     this.setState((prevState)=>({count: prevState.count+1}))
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>++</button>
        <button onClick={this.prevs}>prev--</button>
        <Comp name={'Akshay'}></Comp>
      </>
    )
  }
}
export default App