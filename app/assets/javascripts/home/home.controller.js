function HomeController() {
    var vm = this;
    vm.name = 'Savannah';
}

angular
    .module('app')
    .controller('HomeController', HomeController)
