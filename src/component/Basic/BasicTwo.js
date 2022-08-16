import React from "react";

class BasicTwo extends React.Component{
    constructor(){
        super()
        this.state={
            message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    }
    changeText(){
        this.setState({
            message:'Thanks for submiting!'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeText()} >Subimit</button>
            </div>
        )
    }

}
export default BasicTwo