var express = require('express');
var rootRouter = express.Router();

module.exports = router =
    function () {
        var rootService = require('../Services/rootService')();
        var rootController = require('../Controllers/rootController')(rootService);
        rootRouter.use(rootController.middleware);

        return {
            route: route = function () {
                rootRouter.route('/')
                    .get(function (req, res) {
                        res.render('index');
                    });

                return rootRouter;
            }
        }
    }