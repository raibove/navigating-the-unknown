import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from "./components/App";
import {store} from "./store";
import { Provider } from "react-redux";

describe('404 Page', () => {
  test('renders 404 message', () => {
    render(
      <Provider store={store}>
      <MemoryRouter initialEntries={['/product']}>
        <App />
      </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
