
describe('New user app', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001')
    })

    const nameInput = () => cy.get('input[name = "name"]')

   it('checking to see if it works', ()=> {
       expect(1+2).to.equal(3)
   })

   it('typing in name', () =>{
        nameInput()
        .should('have.value', "")
        .type("Gabby")
        .should('have.value', "Gabby")
   })
})

