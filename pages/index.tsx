import React from 'react';
import ParallaxBackground from './components/parallax-background';
import styled from 'styled-components';
import { CenteredSection } from './components/section';

const Container = styled.div`
  color: #4A5568;
  font-family: Lato, sans-serif;
  font-size: 16px;
`;
const Content = styled.div`
  opacity: 1;
  width: 100%;
  z-index: 100;
`;
const Logo = styled.img`
  display: block;
  margin-bottom: 1rem;
`;
const TagLine = styled.p`
  color: #2D3748;
  font-size: 1.25rem;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

export default function Home() {
  return (
    <Container>
      <ParallaxBackground />

      <Content>

        <CenteredSection style={{ flexDirection: 'column' }}>
          <Logo alt="Rekondbolaget" src="/images/logo.webp" />
          <TagLine>WHEN QUALITY MATTERS</TagLine>
        </CenteredSection>

      </Content>

    </Container>
  );
}
