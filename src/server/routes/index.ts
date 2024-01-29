import { Router } from "express";
import { ContactsController } from "./../controllers";
const router = Router();

router.get("/", (req, res) => {
  return res.send("Tryhard!");
});

router.post("/contacts", ContactsController.create);

export { router };
