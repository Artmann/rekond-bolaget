import React from 'react';
import styled from 'styled-components';

import ParallaxBackground from '../components/parallax-background';
import Pricing, { Product } from '../components/pricing/pricing';
import { CenteredSection } from '../components/section';

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
  const products: Product[] = [
    {
      guarantee: '1 års garanti',
      name: 'Ceramic Pro Sport',
      price: '2.995:-',
      protections: ['UV skydd', 'Högglans', 'Super hydrofobisk']
    },
    {
      includes: ['Polering med nanopolish', '1 lager Ceramic PRO Light', 'Ceramic PRO Rain på vindruta och främre rutor'],
      guarantee: '2 års garanti',
      name: 'Ceramic Pro Brons',
      price: '4.375:-',
      protections: ['Reportålighet +', 'UV skydd', 'Super hydrofobisk']
    },
    {
      includes: [
        'Polering med Nanopolish',
        '1 lager Ceramic Pro 9H',
        '1 lager Ceramic Pro Light',
        'Ceramic Pro Rain främre rutor'
      ],
      isPreferred: true,
      guarantee: '3 års garanti',
      name: 'Ceramic Pro Silver',
      price: '6.000:-',
      protections: ['Repor +++', 'UV Strålning', 'Kemikalier']
    },
    {
      includes: [
        'Polering med Nanopolish',
        '4 lager Ceramic PRO 9H',
        '2 extra lager Ceramic PRO 9H på fronten',
        '2 lager Ceramic PRO Light',
        'Ceramic PRO på all plast utvändigt',
        'Ceramic PRO Rain på alla rutor',
        '2 lager Ceramic PRO 9H/Strong på fälgar',
        'Ceramic PRO Plast/Textil/Läder invändigt'
      ],
      guarantee: 'Livstids garanti',
      name: 'Ceramic Pro Platinum',
      price: '16.875:-',
      protections: ['Repor ++', 'UV Strålning', 'Kemikalier']
    },
  ];

  return (
    <Container>
      <ParallaxBackground />

      <Content>

        <CenteredSection style={{ flexDirection: 'column' }}>
          <Logo alt="Rekondbolaget" src="/images/logo.webp" />
          <TagLine>WHEN QUALITY MATTERS</TagLine>
        </CenteredSection>

        <CenteredSection style={{ flexDirection: 'column' }}>
          <Pricing products={ products } />
        </CenteredSection>

      </Content>

    </Container>
  );
}
