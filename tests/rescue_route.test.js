import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {store} from "./store";
import { Provider } from "react-redux";
import App from "./components/App";

describe('404 Page', () => {
    test('home link redirects to home page', () => {
      const wrapper = mount(
        <Provider store={store}>
        <MemoryRouter initialEntries={['/product']}>
          <App />
        </MemoryRouter>
        </Provider>
      );

      const homeLink = wrapper.text().includes('Return Home')
      expect(homeLink.exists()).toBe(true);
      homeLink.simulate('click', { button: 0 });

      expect(wrapper.find(App)).toHaveLength(1);

    });
  });
  