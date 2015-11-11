var app = angular.module('translateApp', ['ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
.config(function ($translateProvider) {
	var translations = {
		'TITLE': 'Welcome to the demo',
		'DESCRIPTION': 'This is the angular-translate demo.'
	};

	$translateProvider
		.translations('en', translations)
		.preferredLanguage('en')
		.fallbackLanguage('en');
})
.run(function ($translate) {

})
.controller('HomeController', function ($scope, $translate) {
	$translate('TITLE').then(function (title) {
		$scope.title = title;
	});
	$translate('DESCRIPTION').then(function (description) {
		$scope.description = description;
	});
});