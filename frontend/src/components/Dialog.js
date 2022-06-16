import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';


function Dialog() {
  return (
    <div>
     <Form>
        <Select defaultValue="option-2">
          <Option value="option-1" label="Option 1" />
          <Option value="option-2" label="Option 2" />
          <Option value="option-3" label="Option 3" />
          <Option value="option-4" label="Option 4" />
        </Select>
      </Form> 
    </div>
  )
}

export default Dialog
