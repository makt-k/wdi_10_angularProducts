// to get data from the backend
angular.module('StoreFront').factory('productData',['$http', function($http){
    // Init the product data with heading
    var productData = {products: [
        { name: "Loading Products", description: "", price: '' }
    ]};
    // method to get all the products.

    productData.loadProducts = function(callback){
        $http.get('./products.json').success(function(data){
            callback(data);
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };
    // method to get one product by id.
    productData.loadProduct = function(productId, callback){
        $http.get('products/' + productId + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded product ' + productId);
            })
            .error(function(){
                console.log('Failed to load product ' + productId);
            });
    };

    productData.createProduct = function(newProduct){
        var data = {
            new_product: {
                name: newProduct.newProductName,
                description: newProduct.newProductDescription,
                price: newProduct.newProductPrice,
        }};
     $http.post('./products.json', data).success(function(data) {
            productData.products.push(data);
            return console.log(data);
        }).error(function() {
            return console.error('Failed to create new post.');
        });
        return true;
    };

    return productData;
}]);
