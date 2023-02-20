import { render, screen, cleanup} from '@testing-library/react';
import {Grid} from '../Grid';



test('should render Main component', () => {    
    render(<Grid/>)
    const typeElement = screen.getByTestId('Grid_id')
    expect(typeElement).toBeInTheDocument();
})