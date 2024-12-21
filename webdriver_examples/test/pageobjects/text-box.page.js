import { $ } from '@wdio/globals'

class TextBoxPage {

    get inputFullName () {
        return $('#userName');
    }

    get inputEmail () {
        return $('#userEmail');
    }

    get inputCurrentAddress () {
        return $('(//*[@id="currentAddress"])[1]');
    }

    get inputPermanentAddress () {
        return $('(//*[@id="permanentAddress"])[1]');
    }

    get btnSubmit () {
        return $('button[id="submit"]');
    }

    get pageTitle(){
        return $('//*[@id="app"]/div/div/div/div[2]/h1');
    }

    get resFullName () {
        return $('#name');
    }

    get resEmail () {
        return $('#email');
    }

    get resCurrentAddress () {
        return $('(//*[@id="currentAddress"])[2]');
    }

    get resPermanentAddress () {
        return $('(//*[@id="permanentAddress"])[2]');
    }

    async fill_form(fullname, email, caddress, paddress){

        await this.inputFullName.setValue(fullname)
        await this.inputEmail.setValue(email)
        await this.inputCurrentAddress.setValue(caddress)
        await this.inputPermanentAddress.setValue(paddress)
    }

    async click_submit_btn(){
        await this.btnSubmit.click()
    }

}
export default new TextBoxPage();