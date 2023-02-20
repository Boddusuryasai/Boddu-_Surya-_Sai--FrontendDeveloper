import { render, screen, cleanup} from '@testing-library/react';
import {FilterForm} from '../FilterForm';



test('should render FilterForm component', () => {    
    render(<FilterForm/>)
    const typeElement = screen.getByTestId('form_id')
    expect(typeElement).toBeInTheDocument();
})