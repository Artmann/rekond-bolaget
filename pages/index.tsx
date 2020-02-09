import React, { Fragment } from 'react';
import ParallaxBackground from './components/parallax-background';
import styled from 'styled-components';

const Foo = styled.div`
  height: 3000px;
`;

export default function Home() {
  return (
    <Fragment>
      <ParallaxBackground />
      <Foo>
        Hello World
      </Foo>
    </Fragment>
  );
}
