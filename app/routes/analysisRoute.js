module.exports = (app) => {
    app.get('teste', (req, res) => {
        console.log(app);
    })
}