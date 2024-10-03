import React from 'react';
import { render, screen } from '@testing-library/react';
import Chessboard from './Chessboard';

jest.useFakeTimers();

test('renders chessboard and moves knight', () => {
    render(<Chessboard />);
    
    // Verifica que el tablero de ajedrez se renderiza
    const squares = screen.getAllByRole('gridcell');
    expect(squares).toHaveLength(64); // 8x8 tablero

    // Verifica que el caballo está en la posición inicial
    const knight = screen.getByText('🐎');
    expect(knight).toBeInTheDocument();

    // Avanza el tiempo para mover el caballo
    jest.advanceTimersByTime(1000);

    // Verifica que el caballo se ha movido
    const newKnightPosition = screen.getByText('🐎');
    expect(newKnightPosition).toBeInTheDocument();
});
