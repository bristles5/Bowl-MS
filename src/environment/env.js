module.exports = {
    PORT: process.env.PORT || 3000,
    URI: process.env.URI || `mongodb+srv://Admin:${encodeURIComponent(process.env.MONGO_PASSWORD_DEV)}@cluster0-stht6.mongodb.net/test?retryWrites=true&w=majority`
}