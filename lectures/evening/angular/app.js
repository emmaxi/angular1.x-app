/**
 * Created by Emma on 7/1/17.
 */
(function() { //IIFE = Immediately Invoked Fucntion Expression
    //don't forget ,[]
    angular
        .module("BlogApp",[])
        // makes view talks to its controller
        .controller("BlogPostListController", BlogPostListController);

    // controller part, $scope dai biao suo you zai div zhong de data
    function BlogPostListController($scope, $http) {
        $scope.hello = 'hello world';
        $scope.post={title:'this is the default title',
                     body:'this is the default body'};
        $scope.posts = [];

        function init() {
            findAllPosts();
        }
        init();

        function findAllPosts() {
            //Ajax async is doing by browser, since javascript is single thread, so it asks browser to do this for it
            $http.get('/api/post')
                .then(function(response) {
                    $scope.posts = response.data;
                });
        }


        // event handlers
        $scope.addPost = addPost;
        $scope.deletePost = deletePost;
        $scope.selectPost = selectPost;
        $scope.updatePost = updatePost;

        function addPost(post) {
            var newPost = {
                title: post.title,
                body: post.body
            };
            $scope.posts.push(newPost);
            console.log($scope.posts);
        }

        function deletePost(index) {
            // $scope.posts.splice(index, 1);
            $http.delete('/api/post/' + index)
                .then(findAllPosts);

        };

        function selectPost(index) {
            // angular.copy did deep copy
            $scope.post = angular.copy($scope.posts[index]);
            $scope.index = index;
        };

        function updatePost(post) {
            $scope.posts[$scope.index] = angular.copy(post);
        };
    }

})();