import {loginPage} from "../support/pages/loginPage";


it('Login', ()=>{
    loginPage.openPage('http://test.operf.io/#sign-in')
    loginPage.typeEmail('tezt911+3000@gmail.com')
    loginPage.clickNext()
    loginPage.enterPassword('Operf@123')
    loginPage.clickSignIn()
});

