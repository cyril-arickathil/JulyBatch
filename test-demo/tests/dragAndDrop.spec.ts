import { test, expect } from '@playwright/test';

test('drag and drop example', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
  
//locate the iframe
  const frame1 = page.frameLocator('[rel-title="Photo Manager"] iframe');
  const frame2 = page.frameLocator('[rel-title="Open New Window"] iframe');



  frame2.locator('text=New Browser Tab').click();
  // Locate the draggable element
 // const draggable = frame.getByRole('listitem', {name: 'High Tatras 2' });
 const draggable = frame.locator('li', {hasText: 'High Tatras 2' });

  
  // Locate the drop target
  const dropTarget = frame.locator('#trash');  //id of the drop target
  
  // Perform drag and drop action
  await draggable.dragTo(dropTarget);
  
  // Verify the drop was successful
//  await expect(dropTarget).toContainText('Dropped!');
});