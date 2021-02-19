import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import classes from './header.css';

// interface Singers {
//   name: string;
//   band: string;
//   born: number;
// }

type Singers = {
  name: string;
  band: string;
  born: number;
}

const singers: Singers[] = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
];

export function Header(): React.ReactElement {
  return (
    <header>
      Header
      <Navbar bg="light" expand="lg" className="bg-light justify-content-around">
        <Navbar.Brand>Light Theme</Navbar.Brand>
        <Image className={`${classes.circle1} ${classes.circleBase}`} data-testid="image-placeholder"></Image>
      </Navbar>
    </header>
  );
}
