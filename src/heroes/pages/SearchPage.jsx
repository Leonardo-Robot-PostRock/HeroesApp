import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const heroes = getHeroesByName(q);

	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length === 0;

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();
		// if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className='row justify-content-left animate__animated animate__fadeIn'>
				<div className='col-12 col-md-5'>
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit} aria-label='form'>
						<input
							type='text'
							placeholder='Search a hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>
						<button className='btn btn-outline-primary mt-2 mb-3'>
							Search
						</button>
					</form>
				</div>
				<div className='col-12 col-md-7'>
					<h4>Results</h4>
					<hr />

					<div
						className='alert alert-primary animate__animated animate__fadeIn'
						style={{ display: showSearch ? '' : 'none' }}
					>
						Search a hero
					</div>
					<div
						className='alert alert-danger animate__animated animate__shakeX'
						style={{ display: showError ? '' : 'none' }}
						aria-label='alert-danger'
					>
						No hero with <b>{q}</b>
					</div>

					{heroes.map((hero) => (
						<React.Fragment key={hero.id}>
							<div className='mb-4 d-flex justify-content-center'>
								<HeroCard {...hero} />
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	);
};
