const express = require("express");
const router = express.Router();

let messages = [
    {
        text: "What's up, guys?",
        user: "Josh",
        added: new Date(),
    },
    {
        text: "hiiiiii",
        user: "Noemi",
        added: new Date(),
    },
    {
        text: "sup",
        user: "Jordan",
        added: new Date(),
    },
];

router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Message Board", messages: messages });
});
router.post("/new", (request, response) => {
    messages.push({
        text: request.body.textInput,
        user: "anonymous",
        added: new Date(),
    });
    response.redirect("/");
});
module.exports = router;
