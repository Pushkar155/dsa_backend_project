const router = require('express').Router();
const questionsSchema = require("../schema/questions_schema");
const authenticateToken = require("../middlewares/verifyit");

router.post("/addQuestion", authenticateToken, async (req, res) => {
    const newQuestion = new questionsSchema(req.body);
    try {
        const existingQuestion = await questionsSchema.findOne({ name: req.body.name });
        if (!existingQuestion) {
            const savedQuestion = await newQuestion.save();
            res.status(200).json(savedQuestion);
        } else {
            res.status(400).json({ error: "This question already exists" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/getQuestions", authenticateToken, async (req, res) => {
    try {
        const allQuestions = await questionsSchema.find();
        res.status(200).json(allQuestions);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
