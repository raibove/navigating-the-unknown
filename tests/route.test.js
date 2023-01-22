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
    expect(wrapper.text()).toEqual("Oops, Looks like you've stumbled upon a item that currently does not exist. But don't worry, there are plenty of other cool items to choose from in the Anythink marketplace. Take a look around and find something new!");
  });
});
