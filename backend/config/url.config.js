const backendBaseUrl = process.env.BASE_URL

module.exports = {
    base: {
        backend: backendBaseUrl,
    },
    public: {
        upload: `${backendBaseUrl}/uploads`,
    }
}
