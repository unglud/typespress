import { Request, Response } from "express";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin (req: Request, res: Response): void {
    res.send(`
  <form method="post">
  <div><label for="">Email</label> <input type="text" name="email"/></div>
  <div><label for="">Password</label> <input type="password" name="password"/></div>
  <button>Submit</button>
</form>
  `);
  }
}
