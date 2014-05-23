/*
	Astral 2.5 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

skel.init({
	prefix: 'css/style',
	pollOnce: true,
	resetCSS: true,
	useOrientation: false,
	breakpoints: {
		'mobile': {
			range: '-480',
			lockViewport: true,
			containers: 'fluid',
			grid: {
				collapse: true,
				gutters: 10
			}
		},
		'desktop': {
			range: '481-',
			containers: 1200,
		},
	}
});

jQuery(window).load(function() {

	/*********************************************************************************/
	/* Settings                                                                      */
	/*********************************************************************************/

		var settings = {
			resizeSpeed:	600,		// Speed to resize panel
			fadeSpeed:		300,		// Speed to fade in/out
			sizeFactor:		11.5,		// Size factor
			sizeMin:		15,			// Minimum point size
			sizeMax:		20			// Maximum point size
		};

	/*********************************************************************************/
	/* Vars                                                                          */
	/*********************************************************************************/

		var	_wrapper = jQuery('#wrapper');
		var isTouch = !!('ontouchstart' in window),
			isLegacyIE = (navigator.userAgent.match(/MSIE ([0-9]+)\./) && RegExp.$1 <= 9);
		
		if (isTouch)
		{
			settings.fadeSpeed = 0;
			settings.resizeSpeed = 0;
		}
		
	/*********************************************************************************/
	/* Main (Desktop)                                                                */
	/*********************************************************************************/

		if ( isLegacyIE || skel.isActive('desktop'))
		{
			_wrapper.fadeTo(400, 1.0);
		}

});