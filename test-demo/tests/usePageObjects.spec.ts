import {test, expect} from '@playwright/test';
import {NavigationPage} from '../pages/navigation.page';


test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard');
});

test('navigate to form layouts page',{tag: "@regression"} , async ({page}) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.DatePickerPage();
  navigateTo.

});
