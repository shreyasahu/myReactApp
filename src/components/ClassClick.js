import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler()
    {
        console.log('clicked the button')
    }

    render() {
        return (
            <div>
                <button onClick ={this.clickHandler}>click here please</button>
            </div>
        )
    }
}

export default ClassClick
