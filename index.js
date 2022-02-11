const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")
dotenv.config()
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongodb Connected")
  })
  .catch((err) => console.log(err))

app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running!")
})
