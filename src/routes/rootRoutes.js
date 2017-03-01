var express = require('express');

module.exports = router =
    function() {

        var rootRouter = express.Router();

        return {
            route: route = function() {

                var rootService = require('../Services/rootService')();
                var rootController = require('../Controllers/rootController')(rootService);
                rootRouter.use(rootController.middleware);

                rootRouter.route('/')
                    .get(rootController.get);

                return rootRouter;
            }
        };
    };