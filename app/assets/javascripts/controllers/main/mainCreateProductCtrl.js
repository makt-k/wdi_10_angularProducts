var CreateProductCtrl = function($scope, $location, $http, productData){
    $scope.data = {};

    productData.loadProducts(function(data){
        $scope.data.products = data.products;
    });

    $scope.formData = {
        newProductName: '',
        newProductPrice: '',
        newProductDescription: ''
    };
    $scope.navNewProduct = function(){
        $location.url('/products/new');
    };
this.CreatePostCtrl.$inject = ['$scope', '$location', 'productData'];
};
