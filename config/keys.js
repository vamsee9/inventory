module.exports = {
    mongoURI: process.env.ATLAS_URI || "Your MonogdbURI",
    sessionSecret: process.env.SESSION_SECRET || "SECRET_WORD"
};
