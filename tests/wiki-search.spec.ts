import { test, expect } from '@playwright/test';
import { detailsData } from '../testData/details.data';

test.beforeEach(async ({ page }) => {
  
});

test.describe('Wiki page details', () => {
  detailsData.forEach( data => {
    test(`Timestamp check for '${data.title}'`, async ({ request }) => {
      // action
      const req = await request.get(`/core/v1/wikipedia/en/page/${data.title.replace(' ', '_')}/bare`)
      .then(async (res) => {
        expect(res).toBeOK()
       
        const body = await res.json()
        expect(new Date(body.latest.timestamp) > new Date(data.minTimestamp)).toBeTruthy()
      });
    });
  });
});