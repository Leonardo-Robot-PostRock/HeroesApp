import React from 'react';
import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <ul className='p-0'>{<HeroList publisher="Marvel Comics" />}</ul>
    </>
  );
};
