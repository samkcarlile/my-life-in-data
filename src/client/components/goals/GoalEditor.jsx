import React, { useState } from 'react';
import { Dropdown, Card, Button } from 'semantic-ui-react';

export default function GoalEditor(props) {
    
const [saveOptionSelected, saveOptions] = useState('');

  const goalOptions = [
    { key: 1, text: 'drink more water', value: 1},
    { key: 2, text: 'run more', value: 2 },
    { key: 3, text: 'walk more', value: 3 },
    { key: 4, text: 'eat less', value: 4 },
    { key: 5, text: 'eat more', value: 5 },
    { key: 6, text: 'sleep more', value: 6 },
    { key: 7, text: 'sleep less', value: 7 },
    { key: 8, text: 'smoke less', value: 8 },
  ];

  
const saveData = () => {
    console.log(saveOptionSelected)
// when Button 'Save' is clicked we need to save the data selected and have access to it in GoalsList.jsx
}

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <div>
            <label>Title</label>
          </div>
          <div>
            <Dropdown
              placeholder="I want to"
              clearable
              options={goalOptions}
              selection
              onChange={(e) => saveOptions(e.target.placeholder)}
            />
          </div>
          <div>
            <Dropdown
              placeholder="unit"
              clearable
              options={goalOptions}
              selection
            />
          </div>
          <div>
            <Button.Group>
              <Button type="button" onClick={console.log("save the data selected to props???")}>
                Save
              </Button>
            </Button.Group>
          </div>
        </Card.Header>
      </Card.Content>
    </Card>
  );
}