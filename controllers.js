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

	// Ejemplo funcion.
	var getJesi = function () {			
		return [
			'Omar',
			'Lorena',
		];
	};

	// Controlador principal.
	function UthhController($scope, uthhService){
		var vm = this;
		vm.lista = {};

		// Definición de listas.
		vm.lista = {
			'krescruz': getRepositorios(),
			'Jesi': getJesi()
		};

	};
})();
