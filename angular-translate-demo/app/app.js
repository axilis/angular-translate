var app = angular.module('translateApp', ['ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
.config(function ($translateProvider) {
	var translations = {
		'en': {
			'TITLE': 'Welcome to the demo',
			'DESCRIPTION': 'This is the angular-translate demo.',
			'ENTER_NAME': 'Enter your name',
			'WELCOME_NAME': 'Welcome {{name}}',
			'LANG': {
				'EN': 'English',
				'HR': 'Croatian',
			}
		},
		'hr': {
			'TITLE': 'Dobro došli na demo',
			'DESCRIPTION': 'Ovo je angular-translate demo.',
			'ENTER_NAME': 'Unesite svoje ime',
			'WELCOME_NAME': 'Dobro došli {{name}}',
			'LANG': {
				'EN': 'Engleski',
				'HR': 'Hrvatski',
			}
		}
	};

	for (lang in translations) {
		$translateProvider
			.translations(lang, translations[lang]);
	}
	$translateProvider
		.preferredLanguage('en')
		.fallbackLanguage('en');
})
.run(function ($translate) {

})
.controller('HomeController', function ($scope, $translate) {
	//$translate('TITLE').then(function (title) {
	//	$scope.title = title;
	//});
	//$translate('DESCRIPTION').then(function (description) {
	//	$scope.description = description;
	//});

	$scope.name = "";

	$scope.changeLanguage = function (lang) {
		$translate.use(lang);
	};
});