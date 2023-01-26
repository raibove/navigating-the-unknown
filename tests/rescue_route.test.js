import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import {store} from "./store";
import { Provider } from "react-redux";
import App from "./components/App";

describe('404 Page', () => {
    test('Return Home text exist on 404 page', ()=>{
      const {getByText} = render(
        <Provider store={store}>
        <MemoryRouter initialEntries={['/product']}>
          <App />
        </MemoryRouter>
        </Provider>
      );

      const homeLink = getByText(/return home/i);
      expect(homeLink).toBeInTheDocument()
    })

    test('home link redirects to home page', () => {
      const {getByText} = render(
        <Provider store={store}>
        <MemoryRouter initialEntries={['/product']}>
          <App />
        </MemoryRouter>
        </Provider>
      );

      const homeLink = getByText(/return home/i);
      
      expect(homeLink.getAttribute("href")).toBe("/");
    });
  });
  