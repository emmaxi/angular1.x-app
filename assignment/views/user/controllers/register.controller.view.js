/**
 * Created by Emma on 7/3/17.
 */
(function () {
    angular
        // need to match ng-app near <html> tag in html file
        .module('WAM')
        .controller('registerController', registerController);


    function registerController($location, userService) {

        // bound this variable to the instance of this controller, this mechanism will avoid using $scope
        var model = this;

        //event handlers
        model.register = register;


        function register(username, password, password2) {
            if (username === null || username === '' || typeof username === 'undefined') {
                model.error = 'username is required';
                return;
            }

            if(password !== password2 || password === null || typeof password === 'undefined'){
                model.error="password must match";
                return;
            }

            var found = userService.findUserByUsername(username);

            if (found !== null) {
                model.error = "Sorry, that username is taken";
            } else {
                var newUser = {
                    username: username,
                    password: password
                };
                newUser = userService.createUser(newUser);
                $location.url('/user/' + newUser._id);
            }
        }
    }

})();
