import React from 'react'




// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

function Form(props){

    const{values, submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} =evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change (name, valueToUse)
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
                checked = {values.termsAgreement}
                onChange = {onChange}
                />
                <div className = 'submitForm'>
                    <button disabled={disabled}>Submit</button>

                    <div className = 'errors'>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                   </div>
                </div>
            </form>
        </div>

    )

}

export default Form