const authCheck = require('../middlewares/authMiddleware')
const siteRoute = require('./site')
const accountRoute = require('./account')

function route(app) {
    app.use('/auth', accountRoute)
    app.use('/',authCheck.checkLogin, siteRoute)
    
}

module.exports = route