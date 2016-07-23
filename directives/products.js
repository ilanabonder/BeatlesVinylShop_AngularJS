(function () {
    var app = angular.module('store-products',[]);
    
app.directive('productTitle', function(){
    return{
        restrict: 'E',
        templateUrl: './panels/product-title.html'
    };
});

app.directive('productDetails', function(){
    return{
        restrict: 'E',
        templateUrl: './panels/product-details.html',
    };
});

})();