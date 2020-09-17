import React from 'react'

function NewUser(props){
    const {details} = props

        if(!details){
            return <h3> Working on finding new user info ...</h3>
        }
        
        return(
            <div className = 'newUser'>
                <h2>{details.name}</h2>
                <p>{details.email}</p>
            </div>
         )
    }

export default NewUser