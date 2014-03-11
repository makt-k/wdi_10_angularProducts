var IndexCtrl = function($scope, $location, $http){
    $scope.data = productData;
    productData.loadProducts();

    $scope.viewPost = function(productId){
        $location.url('/product/' + productId);
    };

    $scope.navNewProduct = function(){
        $location.url('/product/new');
    };
};
