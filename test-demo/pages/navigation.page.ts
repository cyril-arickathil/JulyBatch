import {Page} from '@playwright/test';

export class NavigationPage 
  {
    readonly page: Page;

    constructor(page: Page) 
    {
      this.page = page;
    }
    async formLayoutsPage()
    {
      await this.page.getByText('Forms').click();
      await this.page.getByText('Form Layouts').click();
    }
    async DatePickerPage()
    {
      this.selectMenu('Forms');
      await this.page.getByText('Datepicker').click();
    }
    async ToolTipPage()
    {
      await this.page.getByText('Modal & Overlays').click();
      await this.page.getByText('Tooltip').click();
    }
//accessibility
    private async selectMenu(menuItem: string) //Forms
    {
      const menu = this.page.getByTitle(menuItem);
      const isExpanded = await menu.getAttribute('aria-expanded');
      if (isExpanded === 'false') 
      {
        await menu.click();
      }
    }
  }