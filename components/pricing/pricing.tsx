import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface Product {
  guarantee: string;
  name: string;
  price: string;
  protections: string[];

  includes?: string[];
  isPreferred?: boolean;
}
interface PricingProps {
  products: Product[];
}
interface CardProps {
  product: Product;
}
interface ListProps {
  title: string;
  items?: string[];
}
interface StyledCardProps {
  focus: boolean;
}

const smallShadow = 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);';
const strongShadow = 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;
const StyledCard = styled.div<StyledCardProps>`
  background: #EDF2F7;
  border: ${ props => props.focus ? 'solid 1px #E2E8F0' : '' };
  ${ props => props.focus ? strongShadow : smallShadow }
  display: flex;
  flex-direction: column;
  height: ${ props => props.focus ? '36rem': '30rem' };
  justify-content: space-between;
  padding: 1rem 2.5rem;
`;
const Name = styled.h2`
  font-size: 0.9rem;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;
const Price = styled.div`
  color: #2D3748;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;
const Header = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
`;
const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
`;
const ListItem = styled.li`
  color: #2D3748;
  font-size: 0.8rem;
  display: flex;
  margin-bottom: 0.75rem;
  position: relative;
`;
const ListIcon = styled.img`
  display: block;
  margin-top: 2px;
  margin-right: 0.5rem;
  width: 8px;
  height: 8px;
`;
const ListText = styled.div`
  width: 8rem;
`;
const Guarantee = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

function List({ title, items }: ListProps): ReactElement {
  if (!items) {
    return null;
  }

  return (
    <div>
      <Header>{ title }</Header>
      <StyledList>
        { items.map((p, index) => {
            return (
              <ListItem key={ index }>
                <ListIcon src="/images/check.png" />
                <ListText>{ p }</ListText>
              </ListItem>
            );
          })
        }
      </StyledList>
    </div>
  );
}

function Card({ product }: CardProps): ReactElement {
  return (
    <StyledCard focus={ !!product.isPreferred }>
      <div>
        <Name>{ product.name }</Name>
        <Price>{ product.price }</Price>

        <List title="Egenskaper" items={ product.protections } />
        <List title="Paketet inkluderar" items={ product.includes } />
      </div>
      <Guarantee>{ product.guarantee }</Guarantee>
    </StyledCard>
  );
}

export default function Pricing({ products }: PricingProps): ReactElement {
  return (
    <Container>
      { products.map(p => <Card product={ p } key={ p.name } />) }
    </Container>
  );
}
