import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export function Header(): React.ReactElement {
  return (
    <header>
      Header
      <Navbar bg="light" expand="lg" className="bg-light justify-content-around">
        <Navbar.Brand>Dark Theme</Navbar.Brand>
        <Image data-testid="image-placeholder"></Image>
      </Navbar>
    </header>
  );
}
