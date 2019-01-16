import React, { Component } from "react";
import { Container } from "../../components/Grid";
import API from "../../utils/API";

class Signup extends Component {

    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // event.preventDefault();
        //I want to send information through the body, but it keeps putting the info in the URL
        console.log(`record being created for ${this.state.username} via the submit button`)

        API.createUser({
            username: this.state.username,
            password: this.state.password
        });

        this.setState({
            username: "",
            password: ""
        })
    }



    render() {
        return (
            <Container fluid>
                <div>sign up page</div>
                <form>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="username (email)"
                        type="text"
                    />
                    <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                    <button
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}>
                        Submit</button>

                </form>




            </Container>
        );
    };

}

export default Signup;
