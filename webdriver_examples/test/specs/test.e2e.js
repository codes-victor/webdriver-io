import { browser, expect } from '@wdio/globals'
import ElementsPage from '../pageobjects/elements.page.js'
import TextBoxPage from '../pageobjects/text-box.page.js'


describe('Text box page fill form', () => {
    it('should fill the form', async () => {
        await ElementsPage.open();
        
        await ElementsPage.click_textBox_menu();
        
        await TextBoxPage.pageTitle.waitForDisplayed({timeout: 10000});
        
        await expect(TextBoxPage.pageTitle).toHaveText('Text Box');
        
        await TextBoxPage.fill_form('Victor M', 'vfm@email.com', 'rua 1', 'rua 2');

        await browser.scroll(0, 500);
 
        await TextBoxPage.btnSubmit.waitForDisplayed({timeout: 10000});

        await TextBoxPage.click_submit_btn();

        await expect(TextBoxPage.resFullName).toHaveText('Name:Victor M');
        await expect(TextBoxPage.resEmail).toHaveText('Email:vfm@email.com');
        await expect(TextBoxPage.resCurrentAddress).toHaveText('Current Address :rua 1');
        await expect(TextBoxPage.resPermanentAddress).toHaveText('Permananet Address :rua 2');
        
    })
})



