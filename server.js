
require("dotenv").config();


const { PORT, MONGODB_URI } = process.env;


const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const drinksController = require("./controllers/drinks")


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/drinks', drinksController )


app.get("/", (req, res) => {
    res.send("hello world");
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
