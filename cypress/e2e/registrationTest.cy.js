import { CreateAccountPasswordPage } from "./pages/CreateAccountPasswordPage" 
import {RegistrationPage} from "./pages/RegistrationPage" 

const testData = require('../fixtures/data.json');
const createPasswordPage = new CreateAccountPasswordPage()
const registrationPage = new RegistrationPage()

beforeEach(function(){
    cy.log('Navigatin to booking.com Create Account Page')
    cy.visit(testData.urls.registration)
})

describe('User Registration on Booking.com', () => {
    it('Registration of new user with valid email', ()=>{
        registrationPage.enterEmailAddress(testData.user.email);
        registrationPage.clickOnContinueWithEmail()
        createPasswordPage.enterPassword(testData.user.password)
        createPasswordPage.enterConfirmPassword(testData.user.password)
        createPasswordPage.clickOnCreateAccountButton()
        createPasswordPage.verifyCaptchaIsPresent()
        assert.fail(true)
    })
})