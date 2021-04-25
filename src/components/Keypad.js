// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

prompt = () => {
    console.log('Entering password...')
}

    render() {
        return (
            <div>
                <input onKeyUp={this.prompt} type="password" />
            </div>
        )
    }
}
