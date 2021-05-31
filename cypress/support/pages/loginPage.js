export class LoginPage {

    openPage(url){
        cy.visit(url)
    }

    typeEmail(email){
        cy.get('[name="email"]')
            .type(email)
    }

    clickNext(){
        cy.get('[id="sign-in-submit-btn"]')
            .click()
    }

    enterPassword(password){
        cy.get('[id="input23"]')
            .type(password)
    }

    clickSignIn(){
        cy.get('[class="button sign-in-button primary-button"]')
            .click()
    }



}

export const loginPage = new LoginPage()
