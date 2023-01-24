import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from "./components/App";
import {store} from "./store";
import { Provider } from "react-redux";

describe('404 Page', () => {
  test('renders 404 message for /product route', () => {
    const wrapper = mount(
      <Provider store={store}>
      <MemoryRouter initialEntries={['/product']}>
        <App />
      </MemoryRouter>
      </Provider>
    );
    expect(wrapper.text()).toMatch(/page not found/i);
  });

  test('renders 404 message for /xyz route', () => {
    const wrapper = mount(
      <Provider store={store}>
      <MemoryRouter initialEntries={['/xyz']}>
        <App />
      </MemoryRouter>
      </Provider>
    );
    expect(wrapper.text()).toMatch(/page not found/i);
  });

  test('does not render 404 message for /login route', () => {
    const wrapper = mount(
      <Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
      </Provider>
    );
    expect(wrapper.text()).not.toMatch(/page not found/i);
  });
});