import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers';

export const HeroPage = () => {

  const {id} = useParams();

  const hero = getHeroesById(id);

  if(!hero){
    return <Navigate to="/marvel"/>
  }
  
  return (
    <h1>Hero</h1>
  )
}
