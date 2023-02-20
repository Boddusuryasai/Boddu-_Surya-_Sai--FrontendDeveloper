import { render, screen, cleanup} from '@testing-library/react';
import {Main} from '../Main';



test('should render Main component', () => {    
    render(<Main/>)
    const typeElement = screen.getByTestId('Main-id')
    expect(typeElement).toBeInTheDocument();
})