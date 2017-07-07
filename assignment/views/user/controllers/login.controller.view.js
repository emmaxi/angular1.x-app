/**
 * Created by Emma on 7/3/17.
 */
(function () {
    angular
        // need to match ng-app near <html> tag in html file
        .module('WAM')
        .controller('loginController', loginController);


    function loginController($location, userService) {

        // bound this variable to the instance of this controller, this mechanism will avoid using $scope
        var model = this;

        //event handlers
        model.login = login;


        function login(username, password) {
            var found = userService.findUserByCredential(username, password);

            if (found !== null) {
                $location.url('/user/' + found._id);
            } else {
                model.message = "Sorry, " + username + " not found, please try it again";
            }
        }
    }

})();
