/**
 * Created by Emma on 7/3/17.
 */
(function () {
    angular
        // need to match ng-app near <html> tag in html file
        .module('WAM')
        .controller('profileController', profileController);


    // you mei you $ de qu bie shi you de hua shi framework chuang jian de,
    // mei you de shi wo men zi ji chuang jian de service
    function profileController($location, $routeParams, userService) {

        // bound this variable to the instance of this controller, this mechanism will avoid using $scope
        var model = this;

        model.userId = $routeParams['userId'];

        model.user = userService.findUserById(model.userId);

    }

})();
