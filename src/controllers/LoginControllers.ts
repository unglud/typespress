import { Request, Response } from "express";

@controller('/')
class LoginControllers {
  @get('/login')
  getLogin (req: Request, res: Response): void {
    const { email, password } = req.body;

    if (
      email &&
      password &&
      email === "hi@higher.com" &&
      password === "password"
    ) {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }
}
