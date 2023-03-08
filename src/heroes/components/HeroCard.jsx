import React from 'react';
import { Link } from 'react-router-dom';
import { CharactersByHero } from './';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col-7 col-sm-6 col-md-10 col-lg-7 col-xl-6 col-xxl-7">
      <div className="card col-12">
        <div className="row no-gutters">
          <div className="col-12 col-md-6 animate__animated animate__fadeIn">
            <img src={heroImageUrl} className="card-img h-100 obj-fit-cover" alt={superhero} />
          </div>
          <div className="col-sm-10 col-md-6">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero alter_ego={alter_ego} characters={characters} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
