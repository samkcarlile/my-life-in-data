import { shallow, mount, render } from 'enzyme';
import MetricTile from './MetricTile.jsx';
import { Card, Button, Progress, Icon } from 'semantic-ui-react';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Metric Tile Component', () => {
  let shallowWrapper;
  let mountWrapper;
  const mockClick = jest.fn();

  const props = {
    metric: { name: 'Andrew', graphColor: 'pink', pointsToday: 5 },
    onClick: mockClick,
  };

  beforeAll(() => {
    shallowWrapper = shallow(<MetricTile {...props} />);
  });

  afterEach(() => {
    mockClick.mockClear();
  });

  it('Should be a Card', () => {
    expect(shallowWrapper.type()).toEqual(Card);
  });
  it('Should render a Progress component', () => {
    expect(shallowWrapper.find(Progress).length).toEqual(1);
  });
  it('Should render a Button component', () => {
    expect(shallowWrapper.find(Button).length).toEqual(1);
  });
  it("Should have an Icon whose text is 'Record", () => {
    expect(shallowWrapper.find(Button).render().text()).toMatch('Record');
  });
  it('Clicking the button should activate a callback', () => {
    shallowWrapper.find(Button).simulate('click');
    expect(mockClick.mock.calls.length).toEqual(1);
  });
  it('Hovering over the button should not activate callback', () => {
    shallowWrapper.find(Button).simulate('mouseover');
    expect(mockClick.mock.calls.length).toEqual(0);
  });
  it('Should render the color contained in the prop', () => {
    expect(shallowWrapper.prop('color')).toEqual(props.metric.graphColor);
  });
  it('Should render a Card Header', () => {
    expect(shallowWrapper.render().find('.header').text()).toEqual(
      props.metric.name
    );
  });
});
