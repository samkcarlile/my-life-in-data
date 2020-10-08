import React from 'react';
// // import { Sidebar, Menu, Item, Icon } from 'semantic-ui-react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

export default function TaskBar() {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} inverted vertical visible width="thin">
        <Menu.Item as="a">Water</Menu.Item>
        <Menu.Item as="a">Hours Slept</Menu.Item>
        <Menu.Item as="a">Tacos Eaten</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
