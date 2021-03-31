import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Section } from '@components/Layout/Section';
import classes from '@components/Feature/feature.css';

export function Feature(): React.ReactElement {
  return (
    <Section>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h3 className="h4">Feature</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, earum! Totam ut rerum beatae necessitatibus in
            mollitia quos voluptates iste? Rem sequi eius accusantium, excepturi harum ipsam voluptas atque cupiditate!
          </p>
        </Col>
        <Col xs lg="5" className="justify-content-md-center">
          <div className={classes.box}></div>
        </Col>
      </Row>
    </Section>
  );
}
