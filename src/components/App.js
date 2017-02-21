import React , { Component } from 'react';
import TextInputComponent from './TextInputComponent';
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextInputComponent name="keyboard" />
            </div>
        ) 
    }
}

