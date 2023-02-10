import React from 'react';
import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <ul className='p-0'>
        <HeroList publisher='DC Comics'/>
      </ul>
    </>
  );
};
