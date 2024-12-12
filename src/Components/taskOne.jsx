/*Task 1: Code Correction

The current implementation of the user profile component has a bug in state management. Analyze and correct the code to ensure the user's name is 
displayed correctly.
Code Example:

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Incorrect function
    changeName() {
        this.state.name = 'Charlie';
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
} */
import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this)
    }
        
    changeName() {
        this.setState({name: "Charlie"})
    }
    
    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile