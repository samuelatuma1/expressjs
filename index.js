const express = require("express")

// env_variables can be stored locally in a .env file. You can access env_variables if you require dotenv.
// env_variables can be accessed using the syntax process.env.env_var_name
require("dotenv").config()
const pass = process.env.password
