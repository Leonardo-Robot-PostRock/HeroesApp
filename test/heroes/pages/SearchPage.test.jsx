import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

describe('Pruebas en <SearchPage />', () => {
	test('debe de mostrarse correctamente con valores por defecto', () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);

		expect(container).toMatchSnapshot();
		// screen.debug();
	});

	test('debe de mostrar a Batman y el input con el valor del queryString', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('batman');

		const { src } = screen.getByRole('img');
		expect(src).toContain('/heroes/dc-batman.jpg');

		const alert = screen.getByLabelText('alert-danger');

		console.log(alert.style.display);
		expect(alert.style.display).toBe('none');

		// screen.debug();
	});
});
