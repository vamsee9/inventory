module.exports = {
    mongoURI: process.env.ATLAS_URI || "mongodb+srv://vamsi:vamsi123@cluster0.wzstr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    sessionSecret: process.env.SESSION_SECRET || "SECRET_WORD"
};