import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MovieList from '../MovieList';

jest.mock('axios');

const movies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
];

test('renders movie titles', async () => {
  axios.get.mockResolvedValueOnce({
    data: { movies },
  });

  render(<MovieList onMovieClick={() => {}} />);

  expect(await screen.findByText('Movie 1')).toBeInTheDocument();
  expect(await screen.findByText('Movie 2')).toBeInTheDocument();
});
