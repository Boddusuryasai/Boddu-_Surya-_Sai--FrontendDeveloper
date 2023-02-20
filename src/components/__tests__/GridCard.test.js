import { render, screen, cleanup} from '@testing-library/react';
import { GridCard } from '../GridCard';




test('should render Main component', () => {    
    render(<GridCard/>)
    const typeElement = screen.getByTestId('Gridcard_id')
    expect(typeElement).toBeInTheDocument();
})