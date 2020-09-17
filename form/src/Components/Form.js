import React from 'react'




// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

function Form(props){

    const{values, update, submit} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value} =evt.target
        update (name, value)
        console.log(value)
      }
    

    return(
        <div className = 'container'>
            <h1>Onboarding New User</h1>
            
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input 
                name = 'name' 
                type = 'text'
                onChange = {onChange}
                value = {values.name}
                />
                <label htmlFor='email'>Email</label>
                <input 
                name = 'email' 
                type = 'text'
                onChange = {onChange}
                value = {values.email}
                />
                <label htmlFor ='password'>Password</label>
                <input 
                name = 'password' 
                type = 'password'
                onChange = {onChange}
                value = {values.password}
                />
                <label htmlFor ='agreeToTerms'>I agree to the terms of service</label>
                <input 
                name = 'termsAgreement' 
                type = 'checkbox'
                />
                <button>Submit</button>
            </form>
        </div>

    )

}

export default Form