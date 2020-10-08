import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import { Form } from 'semantic-ui-react';
import Login from './Login.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { JsonWebTokenError } from 'jsonwebtoken';

configure({ adapter: new Adapter() });

describe('Login Component', () => {
  describe('Login Component Characteristics', () => {
    let shallowWrapper;

    const mockSignup = jest.fn();
    const mockSubmit = jest.fn();

    const props = {
      onSignupClick: mockSignup,
      onSubmit: mockSubmit,
    };

    beforeAll(() => {
      shallowWrapper = shallow(<Login {...props} />);
    });

    it('Should have two inputs', () => {
      expect(shallowWrapper.find('input').length).toEqual(2);
    });
    it('Should have two inputs', () => {
      expect(shallowWrapper.find('input').length).not.toEqual(1);
    });
    it('Should have a form', () => {
      expect(shallowWrapper.find(Form).length).toEqual(1);
    });

    it('Should have an input with a type of text', () => {
      expect(
        shallowWrapper.find('input').filterWhere((item) => {
          return item.prop('type') === 'text';
        }).length
      ).toEqual(1);
    });
  });
});
