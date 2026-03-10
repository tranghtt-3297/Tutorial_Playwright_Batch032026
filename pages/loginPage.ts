export class LoginPage {

  async gotoLoginPage(): Promise<void> {
    console.log("Go to the login page");
  }

  async login(username: string, password: string): Promise<void> {
    console.log(`Log in with username: ${username} and password: ${password}`);
  }

}