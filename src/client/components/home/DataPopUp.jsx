import React from 'react';
import { Modal } from 'semantic-ui-react';



export default function DataPopUp({ isOpen, onClose }) {

  return (
    <Modal
      closeOnDimmerClick={true}
      onClose={onClose}
      open={isOpen}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  );
}