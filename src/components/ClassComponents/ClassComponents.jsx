import { Component } from "react";

class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return(
            <>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default ClassComponents;