import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import axios from 'axios'

// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.
const initialFormValues = {

  name: '',
  email: '',
  password: '',
  termsAgreement: false,
}


function App() {

  const [user, setUser] =useState([])
  const [form, setForm] =useState(initialFormValues)
  const update = (formName, formValue) => {
    setForm({...form, [formName]: formValue})
  }
  const submit= () => {
    const newUser ={
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
    }
    setForm(initialFormValues)
    setUser([...user, newUser])
  }

  return (
    <div className="App">
      <Form
      values={form}
      update={update}
      submit={submit}
      />
    </div>
  );
}

export default App;
