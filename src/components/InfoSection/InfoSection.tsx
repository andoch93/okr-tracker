import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import { Section } from '@components/Layout/Section';
import { InfoCard } from '@components/Layout/InfoCard';

export function InfoSection(): React.ReactElement {
  return (
    <Section>
      <Row className="justify-content-center">
        <Col>
          <h1>Info Section</h1>
          <CardDeck>
            <InfoCard title="Card Title" text="Card Text" />
            <InfoCard title="Card Title" text="Card Text" />
            <InfoCard title="Card Title" text="Card Text" />
          </CardDeck>
        </Col>
      </Row>
    </Section>
  );
}
