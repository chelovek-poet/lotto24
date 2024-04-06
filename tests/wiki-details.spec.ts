import { test, expect } from '@playwright/test';
import { searchData } from '../testData/search.data';

test.beforeEach(async ({ page }) => {
  
});

test.describe('Wiki search', () => {
  searchData.forEach( data => {
    test(`Search for '${data.suggest}' (limit:${data.limit})`, async ({ request }) => {
      // action
      const req = await request.get(`/core/v1/wikipedia/en/search/page?q=${data.suggest}&limit=${data.limit}`)
      .then(async (res) => {
        expect(res).toBeOK()

        const body = await res.json()
        if(data.valid) {
          expect(body.pages).toContainEqual(expect.objectContaining({ title: data.target_title }))
        } else {
          expect(body.pages).not.toContainEqual(expect.objectContaining({ title: data.target_title }))
        }
      });
    });
  });
});