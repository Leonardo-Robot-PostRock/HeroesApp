import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
	const navigate = useNavigate();

	const { user, logout } = useContext(AuthContext);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
		logout();
	};
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-top mb-30 animate__animated animate__slideInDown'>
			<Link className='navbar-brand' to='/'>
				<img
					src='../../../public/dc-marvel.png'
					alt='dc y marvel'
					className='logo animate__animated animate__wobble'
				/>
			</Link>
			<div className='d-flex'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
			</div>
			<div
				className='collapse navbar-collapse animate__animated animate__jello'
				id='navbarNav'
			>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							`nav-link  text-end ${isActive ? 'active' : ''} `
						}
						to='/marvel'
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-link text-end ${isActive ? 'active' : ''} `
						}
						to='/dc'
					>
						DC
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`nav-link text-end ${isActive ? 'active' : ''} `
						}
						to='/search'
					>
						Search
					</NavLink>
				</div>

				<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
					<ul className='navbar-nav ml-auto'>
						<span className='nav-item nav-link text-primary text-end'>
							{user?.name}
						</span>

						<button
							className='nav-item nav-link btn text-end'
							onClick={onLogout}
						>
							Logout
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};
