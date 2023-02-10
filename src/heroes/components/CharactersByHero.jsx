import React from 'react';

export const CharactersByHero = ({ alter_ego, characters }) => {
  return <>{alter_ego !== characters ? <p>{characters}</p> : <></>}</>;
};
