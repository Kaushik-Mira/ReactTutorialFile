import { Component } from "react";
import { Button } from "react-bootstrap";

class HandleClickClassComponents extends Component {

    handleClick = () => {
        alert("Button was clicked");
    }

    render() {
        return (
            <Button className="m-4" onClick={this.handleClick}>Click Me</Button>
        )
    }
}

export default HandleClickClassComponents;