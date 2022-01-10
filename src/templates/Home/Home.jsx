import React from 'react';
import { useRef } from 'react';
import { Header, Main, Footer } from '../../components';

export const Home = () => {
  const myRef = useRef([]);
  return (
    <>
      <Header myRef={myRef} />
      <Main myRef={myRef} />
      <Footer />
    </>
  );
};
