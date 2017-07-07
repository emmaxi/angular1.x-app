/**
 * Created by Emma on 7/4/17.
 */
(function(){
    angular
        .module('WAM')
        .factory('userService', userService);

    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        // make the functions public
        var api = {
            findUserById: findUserById,
            findUserByCredential: findUserByCredential,
            findUserByUsername: findUserByUsername,
            createUser:createUser
        };
        return api;

        function findUserById(userId) {
            for (var u in users) {
                if (users[u]._id === userId) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByCredential(username, password){
            for(var u in users) {
                var user = users[u];
                if (user.username === username &&
                    user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            var user = users.find(function(user) {
                return user.username === username;
            });
            if(typeof user === 'undefined') {
                return null;
            } else {
                return user;
            }
        }

        function createUser(user) {
            user._id = (new Date()).getTime() + "";
            user.created = new Date();
            users.push(user);
            return user;
        }
    }
})();