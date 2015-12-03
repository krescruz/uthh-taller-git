(function(){
	angular
	.module('uthhApp')
	.controller("UthhController", UthhController);

	UthhController.$inject = ['$scope', 'UthhService'];

	// Ejemplo funcion.
	var getRepositorios = function () {			
		return [
			'Git',
			'Gitub',
		];
	};

	// Controlador principal.
	function UthhController($scope, uthhService){
		var vm = this;
		vm.lista = {};

		// Definición de listas.
		vm.lista = {
			'git': getRepositorios()
		};

	};
})();
