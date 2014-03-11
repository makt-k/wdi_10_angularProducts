// to get data from the backend
angular.module('StoreFront').factory('productData',['$http', function($http){
    // Init the product data with heading
    var productData = {products: [
        { name: "Loading Products", description: "",price: '' }
    ]};
    // method to get all the products.
    productData.loadProducts = function(){
        $http.get('./products.json').success(function(data){
            // assign JSON from remote service.
            productData.products = data.products;
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };
    // return the productData
    return productData;
}]);
