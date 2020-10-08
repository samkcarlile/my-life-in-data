import React, { useState } from 'react';
import { Modal, Input, Button, Icon } from 'semantic-ui-react';

export default function DataPopUp({ metric = {}, isOpen, onSubmit }) {
  const [value, setValue] = useState(0);

  return (
    <Modal onClose={onSubmit} open={isOpen} size="mini" dimmer="inverted">
      <Modal.Header>{metric.name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Input
            action={
              <Button
                onClick={() => onSubmit(value)}
                icon
                color={metric.graphColor}
                labelPosition="right"
              >
                Record
                <Icon name="right arrow" />
              </Button>
            }
            type="number"
            onChange={(e) => setValue(e.target.value)}
          ></Input>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
