import React, { useState } from 'react';

function App() {
  const [formFields, setFormFields] = useState([
    { type: '', value: '' }
  ]);

  const handleChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const addField = () => {
    let object = { type: '', value: '' }
    setFormFields([...formFields, object])
  }

  const removeField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dynamic Forms in React</h3>
      {formFields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            name="type"
            placeholder="Type Type"
            style={{ margin: "5px" }}
            onChange={event => handleChange(event, index)}
            value={field.type}
          />
          <input
            type="text"
            name="value"
            placeholder="Type value"
            style={{ margin: "5px" }}
            onChange={event => handleChange(event, index)}
            value={field.value}
          />
          <button type="button" onClick={() => removeField(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
