import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from "./components/App";
import {store} from "./store";
import { Provider } from "react-redux";

describe('404 Page', () => {
  test('renders 404 message', () => {
    const wrapper = mount(
      <Provider store={store}>
      <MemoryRouter initialEntries={['/product']}>
        <App />
      </MemoryRouter>
      </Provider>
    );
    expect(wrapper.text()).toMatch(/page not found/i);
  });
});
