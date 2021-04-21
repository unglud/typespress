import { Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();
router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="post">
  <div><label for="">Email</label> <input type="text" name="email"/></div>
  <div><label for="">Password</label> <input type="password" name="password"/></div>
  <button>Submit</button>
</form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
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
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div><div>You are logged in</div><a href="/logout">Logout</a></div>`);
  } else {
    res.send(`
    <div><div>You are not logged in</div><a href="/login">Login</a></div>`);
  }
});

export { router };
