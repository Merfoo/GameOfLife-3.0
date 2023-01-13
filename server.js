import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", function (req, res) {
	res.sendFile(path.resolve("./public/index.html"));
});

app.listen(port, function () {
	console.log(`Server listening on port ${port}!`);
});