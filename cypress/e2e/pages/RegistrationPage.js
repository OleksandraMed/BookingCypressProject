export class RegistrationPage{

    emailAddressField = '#username'
    continueWithEmailButton = 'button[type="submit"]'

enterEmailAddress(emailAddress){
    cy.get(this.emailAddressField)
    .should('exist')           
    .and('be.visible')         
    .type(emailAddress);

    cy.log("after enreting email")
    cy.get(this.emailAddressField) 
  .should('have.value', emailAddress); 
}
    clickOnContinueWithEmail(){
    cy.get(this.continueWithEmailButton).click()

}




}