const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

/* Create */
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

/* Read */
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

/* Update */
router.put("/:id", async (req, res) => {
  try {
    console.log("Updating:", req.params.id, req.body);
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Delete */
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
module.exports = router;
