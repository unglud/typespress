import { Request, Response, Router } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Hi There</h1>
</div>
  `);
});

export { router };
