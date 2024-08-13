import { Button } from "react-bootstrap";
import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import blog from "../ObjectData/ObjectData";

const ObjectChildrenComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          {blog.map((value, idx) => {
            return (
                <ProductItems pitems={value} key={idx}/>
            )
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ObjectChildrenComponent;

function ProductItems({ pitems }) {
  return (
    <div className="mb-4 col-lg-3 md-6">
      <Card>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>{pitems.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
