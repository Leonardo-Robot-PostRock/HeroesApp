import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
	beforeEach(() => jest.clearAllMocks());

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

	test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
				<SearchPage />
			</MemoryRouter>
		);
		const input = screen.getByRole('textbox');
		expect(input.value).toBe('batman123');

		const alert = screen.getByLabelText('alert-danger');

		expect(alert.style.display).toBe('');
	});

	test('debe de llamar el navigate a la pantalla nueva', () => {
		const inputValue = 'superman';

		render(
			<MemoryRouter initialEntries={['/search']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, {
			target: { name: 'searchText', value: inputValue },
		});

		const form = screen.getByRole('form');
		fireEvent.submit(form);

		expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
	});
});
