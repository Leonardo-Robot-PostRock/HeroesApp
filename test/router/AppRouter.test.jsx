import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <AppRouter />', () => {
	test('debe de mostrar el login si no está autenticado', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getAllByText('Login').length).toBe(2);
	});

	test('debe de mostrar el componente de Marvel si está autenticado', () => {
		const contextValue = {
			logged: true,
			user: {
				id: 'ABC123',
				name: 'Leonardo Puebla',
			},
		};

		render(
			<MemoryRouter initialEntries={['/login']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
	});
});
