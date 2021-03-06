/**
 * Created by Emma on 7/4/17.
 */
(function() {
    angular
        .module('WAM')
        .service('websiteService', websiteService);

    function websiteService() {

        // tie to "this" makes this function to be public, otherwise, that function will be private
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.findWebsiteById = findWebsiteById;
        this.deleteWebsite = deleteWebsite;
        this.createWebsite = createWebsite;

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        function findAllWebsitesForUser(userId) {
            var results = [];
            for(var v in websites) {
                if(websites[v].developerId === userId) {
                    websites[v].created = new Date();
                    websites[v].accessed = new Date();
                    results.push(websites[v]);
                }
            }
            return results;
        }

        function findWebsiteById(websiteId) {
            return websites.find(function(website) {
                if(website._id === websiteId) {
                    return website;
                }
            });
        }

        function deleteWebsite(websiteId) {
            var website = findWebsiteById(websiteId);
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }

        function createWebsite(website) {
            website._id = (new Date()).getTime() + "";
            websites.push(website);
        }
    }
})();
