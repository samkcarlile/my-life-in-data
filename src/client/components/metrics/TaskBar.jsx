import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Progress, Button } from 'semantic-ui-react';

import { fetchMockPoints, fetchMockMetrics } from '../../utils/mockData';

export default function TaskBar() {
  const dummyData = ['Water', 'Hours Slept', 'Tacos Eaten'];

  // Create an array of menu items. We want one for each task
  const menuItems = dummyData.map((task, idx) => (
    <Menu.Item as="a" key={`${idx}-${task}`}>
      {task}
    </Menu.Item>
  ));

  // create a new array using a map over dummydata
  const myDailyPointsData = dummyData.map((task, idx) => (
    <div className="ui segment" key={`dailyPointsData-${idx}`}>
      <div>
        {task}
        <Progress percent={99} indicating />
        <Button onClick={() => console.log('this button feels good')}>
          Increment
        </Button>
      </div>
    </div>
  ));
  /*
    myDailyPointsData = [<div>task + progress bar </div>, <div>task</div>, <div>task</div>]
  */

  const pointsWithGraph = myDailyPointsData.map((taskProgress, idx) => 'hello');
  // map over the myDailyPointsData array
  // for each element in the array
  // we can add a progress bar

  // This function will take in an array of data points and group them by day. The returned output
  // will be an array of arrays. Each "inner array" represents 1 day. For example, it may return
  // [[X, Y], [A, B]] (note X, Y, A, and B would be objects). This means that X and Y are on the same
  // day and A and B are on the same day. But, X and Y are on a different day than A and B.
  const aggregateData = (data) => {
    // This is a function that receives a datapoint looking like this:
    // {timestamp: 1602001174963, value: 9} and returns a string in this format: "Oct062020"
    const convertToDateString = (dataPoint) => {
      const date = new Date(dataPoint.timestamp);
      const dateString = date.toDateString();
      const dateArrayWithoutDayOfWeek = dateString.split(' ').slice(1);
      const finalDateString = dateArrayWithoutDayOfWeek.join('');
      return finalDateString;
    };

    const dataGroupedByDay = {};

    data.forEach((dataPoint) => {
      const str = convertToDateString(dataPoint); // Convert current date to a string

      // If we do not have a key for the current date, make one and set its value as an empty array
      if (!dataGroupedByDay[str]) {
        dataGroupedByDay[str] = [];
      }

      // Push the current dataPoint into the corresponding array within our dataGroupedByDay object
      dataGroupedByDay[str].push(dataPoint);
    });

    return dataGroupedByDay;
  };

  return (
    <Sidebar.Pushable as={Segment}>
      {console.log(aggregateData(fetchMockPoints()))}
      <Sidebar as={Menu} inverted vertical visible width="thin">
        {menuItems}
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3">My Daily Points</Header>
          {/* <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" /> */}
          <div className="ui segments">{myDailyPointsData}</div>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
