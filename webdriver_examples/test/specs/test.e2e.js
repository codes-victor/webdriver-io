import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import ElementsPage from '../pageobjects/elements.page.js'
import TextBoxPage from '../pageobjects/text-box.page.js'
// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()
        
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//         await browser.pause(6000)
//     })
// })


describe('Text box page fill form', () => {
    it('should fill the form', async () => {
        ElementsPage.open()

       
        await ElementsPage.click_textBox_menu()
        await browser.pause(1000)

        await TextBoxPage.pageTitle.waitForDisplayed({timeout: 10000})
        
        await expect(TextBoxPage.pageTitle).toHaveText('Text Box')
        
        await TextBoxPage.fill_form('Victor M', 'vfm@email.com', 'rua 1', 'rua 2')

        await browser.scroll(0, 500)
        await browser.pause(3000)
        await TextBoxPage.btnSubmit.waitForDisplayed({timeout: 10000})

        await TextBoxPage.click_submit_btn()
        
    })
})

