import { Request, Response } from "express";
import { bodyValidator, controller, get, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
  <form method="post">
  <div><label for="">Email</label> <input type="text" name="email"/></div>
  <div><label for="">Password</label> <input type="password" name="password"/></div>
  <button>Submit</button>
</form>
  `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
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

  @get("/loout")
  getLoout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
