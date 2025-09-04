import { test , expect } from '../fixtures/page.fixtures';

test('test using fixtures', async({ page, navigateTo, onFormLayoutsPage, onDatePickerPage })=>
{
  await navigateTo.smartTableMenuItem.click();

   await navigateTo.formLayoutsPage();
 await onFormLayoutsPage.submitUsingTheGridForm('randomEmail', 'randomPassword', 'Option 2');
 await onFormLayoutsPage.submitUsingInlineForm('firstname lastname', 'user@test.com', true);
 await page.screenshot({path: 'screenshots/formsubmit.png'});


 await navigateTo.DatePickerPage();
await onDatePickerPage.selectCommonDatePickerDateFromToday(3);
})


test('test using fixtures - date picker', async({ navigateTo, onDatePickerPage })=>
{
  await navigateTo.DatePickerPage();
await onDatePickerPage.selectCommonDatePickerDateFromToday(3);
})