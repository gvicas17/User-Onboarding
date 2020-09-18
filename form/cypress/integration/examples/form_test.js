
describe('New user app', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001')
    })

    const nameInput = () => cy.get('input[name = "name"]')
    const emailInput = () => cy.get('input[name = "email"]')
    const passwordInput = () => cy.get ('input[name="password"]')

   it('checking to see if it works', ()=> {
       expect(1+2).to.equal(3)
   })

   it('typing in name', () =>{
        nameInput()
        .should('have.value', "")
        .type("Gabby")
        .should('have.value', "Gabby")
   })
   it('typing in email', ()=>{
    emailInput()
        .should ('have.value', '')
        .type("gabbyvicas@gmail.com")
        .should('have.value', "gabbyvicas@gmail.com")
   })
   it('adding password', () =>{
       passwordInput()
       .should('have.value', "")
       .type("password")
       .should('have.value', "password")
   })
})

