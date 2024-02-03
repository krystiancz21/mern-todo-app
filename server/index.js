require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const tasksRouters = require("./routes/tasks")

const port = process.env.PORT || 3001
const connection = require('./db')
const { syncIndexes } = require('mongoose')

//middleware
app.use(express.json())
app.use(cors())
connection()

// routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/tasks", tasksRouters)

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))

// powiązanie servera z klientem bez uzywania szablonow
// uwiezytelnianie oparty na tokenach 
// jest też metoda uzywania ciasteczek (sesji)
// w ciasteczkach mozna przechowywac Id sesji 

// katalogi login itd pliki: syncIndexes.jsx; styles.modules.css

// lokalne magazyny danych local i session storage