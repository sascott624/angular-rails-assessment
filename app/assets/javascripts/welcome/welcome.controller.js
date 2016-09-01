function WelcomeController() {
    var welcome = this;
    welcome.name = 'Savannah';
}

angular
    .module('app')
    .controller('WelcomeController', WelcomeController)
