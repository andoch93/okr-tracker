import React from 'react';
import Card from 'react-bootstrap/Card';

import classes from '@components/Layout/InfoCard/infocard.css';

interface CardProps {
  title: string;
  text: string;
  subtitle?: string;
  link?: string;
}

export function InfoCard({ title, text, subtitle, link }: CardProps): React.ReactElement {
  return (
    <Card className={classes.cardStyles} data-test-id="card">
      <Card.Body>
        <Card.Title as="h5">{title}</Card.Title>
        <Card.Subtitle as="h6">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Card.Link href="#">{link}</Card.Link>
      </Card.Body>
    </Card>
  );
}
