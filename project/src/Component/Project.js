import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import data from "./data";

const Project = () => {
  const [index, setindex] = useState("");

  const [sub, setSub] = useState(true);

  useEffect(() => {
    setindex(data);
  }, [index]);

  return (
    <>
      {data.map((element, id) => {
        return (
          <CardGroup key={id}>
            <Card>
              <Card.Title className="hover-underline-animation">
                {element.name}
              </Card.Title>
              <Card.Img variant="top" src={element.image} className="image" />
              <Card.Body>
                <Card.Text>{element.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {sub ? (
                  <Button
                    variant="outline-danger ms-3"
                    onClick={() => {
                      setSub(false);
                    }}
                  >
                    Subscribe
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={(e) => {
                      setSub(true);
                    }}
                  >
                    Subscribed
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </CardGroup>
          // <Card key={id}  className="card">
          //   <Card.Header className="hover-underline-animation" mb={4}>
          //     <h3>{element.name}</h3>
          //   </Card.Header>
          //   <Card.Body>
          //     <Card.Img className="image" variant="top" src={element.image} />
          //     <Card.Text>{element.text}</Card.Text>

          //   </Card.Body>
          // </Card>
        );
      })}
    </>
  );
};

export default Project;
