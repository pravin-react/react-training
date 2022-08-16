import React from "react";
class Child extends React.Component {
    componentWillUnmount() {
        this.setState({
            data: null
          })
    }
    render() {
      return (
        <h1>Component Unmounted</h1>
      );
    }
  }
class Lifecycle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Ready to mount!'
    }
  }

  componentWillMount(){
     alert('Hi, Are you Ready for mount?');
  }

  componentDidMount(){
    setTimeout(() => {
        
        this.setState({
          data: 'Our Component mounted!'
        })
      }, 1000)
  }
  
  componentDidUpdate(){
    setTimeout(() => {
        this.setState({
            data: 'Component Updated!'
          })
    }, 2000)
  }


  render() {
    return(
      <div>
      <h1>{this.state.data}</h1>
      <p id="update"></p>
      <button onClick={() => this.setState({ data: null })}>
         Delete
      </button>
      {this.state.data ? null : <Child />}
    </div>
    )
  }
}


export default Lifecycle;

  