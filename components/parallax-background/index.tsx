import React, { ReactElement, useState, useLayoutEffect, useRef, MutableRefObject, RefObject } from 'react';
import styled from 'styled-components';

interface ParallaxBackgroundProps {}
interface BackgroundProps {
  index: number;
  url: string;
}
interface ContainerProps {
  height: string;
};

const backgrounds = [ 'bg1.webp', 'bg2.webp', 'bg3.webp' ];
const Background = styled.div<BackgroundProps>`
  background-color: #fff;
  background-image: url(images/${ props => props.url });
  background-position: 50%;
  background-size: cover;
  bottom: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${ props => -100 + props.index };
`;
const Container = styled.div<ContainerProps>`
  left: 0;
  height: ${ props => props.height };
  position: fixed;
  right: 0;
  top: 0;
  z-index: -200;
`;

function getMaxScroll(): number {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight;
}

function ease(t: number): number {
  if (t < 0.2) {
    return 0;
  }

  const value = t < 0.5 ? 4 * t * t * t : (t - 1) * ( 2 * t - 2) * (2 * t - 2) + 1;

  return Math.max(Math.min(value, 1), 0)
}

function updateOpacity(scrollProgression: number, index: number, ref: MutableRefObject<HTMLDivElement>, length: number): void {
  const stepSize = 1 / length;
  const shouldRender = scrollProgression >= index * stepSize;
  const relativeProgression = Math.max(Math.min(scrollProgression - index * stepSize, 1), 0);
  const step = relativeProgression / stepSize;
  const value = index === 0 ? 1 : ease(step);
  const opacity = shouldRender ? Math.round(value * 100) / 100 : 0;

  ref.current.style.opacity = opacity.toString();
}

export default function ParallaxBackground({}: ParallaxBackgroundProps): ReactElement {
  const backgroundRefs = backgrounds.map(bg => useRef<HTMLDivElement>(null));
  const [ height, setHeight ] = useState('100vh');

  useLayoutEffect(() => {
    const onScrollHandler = (): void => {
      const maxScroll = getMaxScroll();
      const scrollProgression = maxScroll > 0  && window.scrollY > 100 ? window.scrollY / maxScroll : 0;

      for (let i = 0; i < backgroundRefs.length; i++) {
        requestAnimationFrame(() => {
          updateOpacity(scrollProgression, i, backgroundRefs[i], backgrounds.length);
        });
      }
    };

    window.addEventListener('scroll', onScrollHandler);

    onScrollHandler();

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <Container height={ height } >
      { backgrounds.map((url: string, index: number) => {
          return <Background
            index={ index }
            key={ index }
            ref={ backgroundRefs[index] }
            url={ url }
            />;
        })
      }
    </Container>
  )
}
