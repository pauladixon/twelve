let mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
})

mongoose.connection.once('connected', function() {
    console.log(`mongoose connected to: ${process.env.DATABASE_URL}`)
})

module.exports = mongoose