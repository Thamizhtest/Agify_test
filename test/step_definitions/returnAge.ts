import { Given, When, Then } from '@cucumber/cucumber';
import axios,{ type AxiosResponse } from 'axios';
import assert from 'assert';

let response: AxiosResponse;
let fullName: string;

const apiUrl = 'https://api.agify.io';

Given('the API is accessible', async function () {
  const healthCheck = await axios.get(apiUrl, { params: { name: 'test' } });
  if (healthCheck.status !== 200) {
    throw new Error('API is not accessible');
  }
});

When('I call the API with the name {string}', async function (name: string) {
  if (!name || name.trim() === '') {
    throw new Error('Missing name parameter:name cannot be empty');
  }
  fullName = name;
const firstName = name;
  response = await axios.get(`${apiUrl}?name=${firstName}`);
});

Then('response should return the Age>0', function () {
  const age = response.data.age;
 console.log(`Passed name: ${fullName}, API response:`, response.data);
  assert.ok(age >0);
});