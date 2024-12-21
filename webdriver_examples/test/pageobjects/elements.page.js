import { $, browser } from '@wdio/globals'

class ElementsPage {

    get menuTextBox() {
        return $('//*[@id="item-0"]/span');
    }

    async click_textBox_menu(menuTextBox) {
        await this.menuTextBox.click(menuTextBox)
    }

    open() {
        return browser.url('https://demoqa.com/elements')
    }

}
export default new ElementsPage();