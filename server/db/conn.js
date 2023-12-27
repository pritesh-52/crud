const moongoose = require("mongoose");
const DB = "mongodb+srv://priteshbhatiya52:uM5M8YaV61ytlmKS@cluster0.gfohlpd.mongodb.net/CRUD?retryWrites=true&w=majority"
moongoose.connect(DB).then(() => {
    console.log("Connection Start")
})
    .catch((e) => {
        console.log(e);
    })