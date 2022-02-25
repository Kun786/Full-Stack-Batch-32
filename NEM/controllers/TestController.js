const TestController = (req, res) => {
    res.json({
        Message:'You have reached the controller'
    })
}

module.exports = { TestController }