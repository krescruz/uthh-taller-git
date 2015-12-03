(function(){
	angular
	.module('uthhApp')
	.factory("UthhService", UthhService);

	function UthhService($http){
		var URL_BASE = "https://uthh-conf-api.herokuapp.com/api/";

		var getEquipos = function(){
			return $http.get(URL_BASE + 'equipos/');
		};

		return {
			'getEquipos': getEquipos
		};
	};
})();
