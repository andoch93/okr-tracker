import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Section } from '@components/Layout/Section';
import classes from '@components/About/about.css';

export function About(): React.ReactElement {
  return (
    <Section>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab ad omnis quia cum distinctio, esse culpa quam
            ipsa aliquam dolor tempore ratione. Laudantium, consequatur! Deleniti velit vero hic architecto?
          </p>
        </Col>
      </Row>
    </Section>
  );
}
