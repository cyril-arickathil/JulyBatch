import { test, expect } from "@playwright/test";


test('add users', async ({request})=>
{
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'morpheus',
      job: 'leader'
    }
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);

  const responseBody = JSON.parse(await response.text());
  console.log(responseBody);
  expect(responseBody.name).toBe('morpheus');
  expect(responseBody.job).toBe('leader');
})

