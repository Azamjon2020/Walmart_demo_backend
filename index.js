require("dotenv/config");
const mongoose = require("mongoose");
const express = require("express");
const products = require("./routes/products");
const carts = require("./routes/carts");
const furniture = require("./routes/furniture");
const bevarage = require("./routes/bevarage");
const tecnology = require("./routes/tecnology");
const user = require("./routes/user");
const admin = require("./routes/signIn");
const app = express();
const cors = require("cors");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDBga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.error("MongoDBga ulanish vaqtida xato ro'y berdi...", err);
  });

app.use(cors());
app.use(express.json());

app.use("/allProduct", carts);
app.use("/allProduct", furniture);
app.use("/allProduct", bevarage);
app.use("/allProduct", tecnology);
app.use("/create", products);
app.use("/admin", admin);
app.use("/user", user);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}chi portni eshitishni boshladim...  dd`);
});
