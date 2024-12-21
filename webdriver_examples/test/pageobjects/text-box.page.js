import { $ } from '@wdio/globals'

class TextBoxPage {

    get inputFullName () {
        return $('#userName');
    }

    get inputEmail () {
        return $('#userEmail');
    }

    get inputCurrentAddress () {
        return $('#currentAddress');
    }

    get inputPermanentAddress () {
        return $('#permanentAddress');
    }

    get btnSubmit () {
        return $('button[id="submit"]');
    }

    get pageTitle(){
        return $('//*[@id="app"]/div/div/div/div[2]/h1');
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