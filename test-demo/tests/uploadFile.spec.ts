import { test, expect } from "@playwright/test";

test('upload file', async ({page})=>
{
  await page.goto("https://the-internet.herokuapp.com/upload");

  //<input type="file" id="fileInput" name="file">
  await page.setInputFiles('#file-upload','tests/uploadFiles/Preview.png' )
  //multiple files
  await page.setInputFiles('#file-upload', ['tests/uploadFiles/Preview.png', 'tests/uploadFiles/sample-1mb.docx'] )
})

test('download file', async ({page})=>
{
  await page.goto("https://the-internet.herokuapp.com/download");
  const downloadLink = page.locator('a', {hasText: 'DummyFile.txt'});

  //wait for the download to start
  const [ download ] = await Promise.all(
    [
      page.waitForEvent('download'), //waits for the download to start
      downloadLink.click(), //triggers the download
    ]
  )
  await download.saveAs('tests/downloadFiles/'+download.suggestedFilename());
})

// page.on events
//page events
//download event
// new tabs
//new windows

//handle this events  ? 
//page.waitForEvent('download')


//see and event , before u action on that event