import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import axios from 'axios'
import schema from './validation/formSchema'
import * as yup from 'yup'
import NewUser from './Components/NewUser'

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
 const initialFormErrors = {
  
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [form, setForm] =useState(initialFormValues)
  const [disabled, setDisabled]= useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [user, setUser] = useState(initialUsers)
  

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     setUser(res.data)
  //     console.log(res.data)
  //   })
  //   .catch(err =>{
  //     console.log(err)
  //   })
  //   console.log(user)
  // }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res =>{
      setUser([...user, res.data])
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>{

    })
  }

  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setForm ({
      ...form,
      [name]: value
    })
    }
  
  const submit= () => {
    const newUser ={
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
  }
  setForm(initialFormValues)
  postNewUser(newUser)
}

// useEffect(() =>{
//   getUsers()
// }, [])

  useEffect(()=>{
    schema.isValid(form)
    .then(valid =>{
      setDisabled(!valid)
    })
  }, [form])

  return (
    <div className="App">
      <Form
      values={form}
      submit={submit}
      change={inputChange}
      disabled = {disabled}
      errors = {formErrors}
      />

    {
      user.map(users =>{
        return(
          <NewUser key = {users.id} details={users}/>
        )
      })
    }
    </div>
    
  );
}


export default App;
