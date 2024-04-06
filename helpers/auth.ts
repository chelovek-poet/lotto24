import { Page, BrowserContext, request } from "playwright-core"
import { usersData } from "../testData/users.data"

export default class Auth {
  public page: Page
  public browserContext: BrowserContext
  
  constructor (page: Page, browserContext: BrowserContext) {
    this.page = page
    this.browserContext = browserContext
  }
  
  async login (user: string, context: BrowserContext) {
    await context.clearCookies()
    const req = await request.newContext({
      baseURL: 'https://meta.wikimedia.org/',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'accept': "*/*",
      },
    })
  
    await req.post('/w/rest.php/oauth2/access_token', { data: {
      ...usersData[user],
      grant_type: 'client_credentials',
    } }).then(async (res) => {
      try {
        const token = await res.json()
        await context.addCookies([
          {
            name: "accessToken",
            value: token.accessToken,
            url: "https://www.lotto24.de",
          },
        ])
      } catch (error) {
        console.log(`Failed to login: ${error}`)
      }
    })
  } 
}

export { Auth }