export class CreateAccountPasswordPage{

    enterPasswordField = '#new_password'
    confirmPasswordField = '#confirmed_password'
    createAccountButton = 'button[type="submit"]'
    captchaElement = '#px-captcha'

    enterPassword(password) {
        cy.get(this.enterPasswordField)
            .should('exist')           
            .and('be.visible')         
            .and('be.enabled')         
            .clear()                   
            .type(password); 
    }

    enterConfirmPassword(password) {
        cy.get(this.confirmPasswordField)
            .should('exist')           
            .and('be.visible')         
            .and('be.enabled')         
            .clear()                   
            .type(password); 
    }
    clickOnCreateAccountButton(){
        cy.get(this.createAccountButton)
        .should('be.visible')
        .should('be.enabled')
        .click();
    }

    verifyCaptchaIsPresent(){
        cy.get(this.captchaElement).should('exist');
    }

    }