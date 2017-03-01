module.exports = rootController =
    function(rootService) {
        return {
            middleware: middleware = function(req, res, next) {
                //Secure all routes
                //if (!req.user) {
                //    res.redirect('/');
                //}
                next();
            },


            get: get = function(req, res) {
                res.render('index', rootService.getUserProfile());
            }

        };
    };