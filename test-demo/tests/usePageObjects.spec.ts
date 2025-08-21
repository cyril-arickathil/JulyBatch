import {test, expect} from '@playwright/test';
import {NavigationPage} from '../pages/navigation.page';
import { FormLayoutsPage } from '../pages/formLayouts.page';


test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard');
});

test('navigate to form layouts page',{tag: "@regression"} , async ({page}) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.DatePickerPage();
  await navigateTo.smartTablePage();

});

test('form submit', async ({page})=>
{
 const navigateTo = new NavigationPage(page);
 const onFormLayoutsPage = new FormLayoutsPage(page);

 await navigateTo.formLayoutsPage();
 await onFormLayoutsPage.submitUsingTheGridForm('user@test.com', 'secretPassword', 'Option 2');
 await onFormLayoutsPage.submitUsingInlineForm('firstname lastname', 'user@test.com', true)

 onFormLayoutsPage.submitUsingTheGridForm('someemail', 'somePAss')
})
