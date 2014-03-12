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

    $scope.createProduct = function() {
        console.log($scope.formData);
        return productData.createProduct($scope.formData);
    };

  //   $scope.clearProduct = function() {
  //       $scope.formData.newProductName = '';
  //       $scope.formData.newProductPrice = '';
  //       return $scope.formData.newProductDescription = '';
  // };

};
