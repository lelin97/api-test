import { Router } from "express";
import { ContactsController } from "./../controllers";
const router = Router();

router.get("/", (req, res) => {
  return res.send("Tryhard!");
});

router.get(
  "/contacts",
  ContactsController.getAllValidation,
  ContactsController.getAllUsers
);

router.get(
  "/contacts/:id",
  ContactsController.getByIdValidation,
  ContactsController.getById
);

router.post(
  "/contacts",
  ContactsController.createValidation,
  ContactsController.create
);

router.put(
  "/contacts/:id",
  ContactsController.updateByIdValidation,
  ContactsController.updateById
);

router.delete(
  "/contacts/:id",
  ContactsController.deleteByIdValidation,
  ContactsController.deleteById
);

export { router };
