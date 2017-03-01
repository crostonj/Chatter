var express = require('express');
var chatRouter = express.Router();

module.exports = router =
    function () {
        var chatService = require('../Services/rootService')();
        var chatController = require('../Controllers/chatController')(chatService);
        chatRouter.use(chatController.middleware);

        return {
            route: route = function () {
                chatRouter.route('/')
                    .get(function (req, res) {
                         res.render('chat');
                    });

                return chatRouter;

            }
        }
    }