
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !! DONT MODIFY THIS FILE. It exists for legacy reasons. See ./javascript/site/*.js instead.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// console.log calls wont fatal-error when it doesn't exist
// TODO: put this in the weebly editor js

if (!window.console) {
	window.console = {};
}

if (!window.console.log) {
	window.console.log = function(){};
	window.console.warn = window.console.log;
	window.console.error = window.console.log;
	window.console.info = window.console.log;
}



// -----------------------------------------------------------------------------------------------------
// Copied and pasted from libraries/jquery_utils.js!!!!!!
// -----------------------------------------------------------------------------------------------------


Weebly = _W = window.Weebly || {};

Weebly.jQuery = jQuery.noConflict(true); // relinquish control of `$` and `jQuery` and save reference

// FOR EDITOR: make plain-old `jQuery` available again
// FOR PUBLISHED SITES: if a different version of jQuery wasn't previously defined,
//    make it available for end-developer convenience
jQuery = window.jQuery || Weebly.jQuery;




(function($) {


	$.fn.up = function(selector) { // note: doesn't support index argument
		return this.eq(0).parent().closest(selector || '*');
	};


	$.fn.down = function(selector) { // note: doesn't support index argument
		if (!selector) {
			return this.eq(0).children(':first');
		}
		return this.eq(0).find(selector || '*').eq(0);
	};


	var idCounter = 1;

	$.fn.identify = function() {
		var id = this.attr('id');
		if (!id && this.length) {
			do {
				id = 'anonymous_element_' + idCounter++;
			}
			while ($('#' + id).length);
			this.attr('id', id);
		}
		return id;
	};

	/**
	 * HTML5 Placeholder polyfill
	 */
	$.fn.placeholder = function() {
        if (!('placeholder' in document.createElement('input'))) {
			var $el,
			    placeholder;

			this.each(function(i, el) {
				placeholder = el.getAttribute('placeholder');
				if (placeholder && el.nodeName.toLowerCase() === 'input') {
					$el = $(el).on({
						'focus': function(ev) {
							if (el.value === placeholder) {
								$(el).removeClass('wsite-placeholder');
								el.value = '';
							}
						},
						'blur': function(ev) {
							if (!el.value.length) {
								el.value = placeholder;
								el.className += ' wsite-placeholder';
							}
						}
					});

					// Initialize Input
					el.className += ' wsite-placeholder';
					el.value = placeholder;
				}
			});
        }
	};

	// we need the Prototype document.observe('dom:loaded') to work because slideshow JS relies on it
	// and often slideshow HTML/JS is cached in blog post HTML
	if (!document.observe) {
		document.observe = function(eventName, callback) {
			if (eventName == 'dom:loaded') {
				$(document).ready(callback);
			}
		};
	}


})(Weebly.jQuery);


Weebly.evalJSON = function(json) { // not related to jQuery, but Prototype had it, so keep it here for now
	// adapted from https://github.com/sstephenson/prototype/blob/master/src/prototype/lang/string.js
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	if (cx.test(json)) {
		json = json.replace(cx, function(a) {
			return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		});
	}
	try {
		return JSON.parse(json);
	}
	catch (e) {
		throw new SyntaxError('Badly formed JSON string: ' + json);
	}
};



// -----------------------------------------------------------------------------------------------------
// General Initializations
// -----------------------------------------------------------------------------------------------------
// !!!!! FYI: this is now in ./javascript/site/general.js


(function($) {

	/**
	 * Initialize the full/mobile version chooser when the url changes
	 */
	var initializeVersion = function() {
		var updateLinks = function() {
			var fullLink = $('.wsite-view-link-full');
			var mobileLink = $('.wsite-view-link-mobile');

			var windowhref = window.location.href || '';

			if (windowhref.indexOf('?') > -1) {
				windowhref += '&';
			} else {
				windowhref += '?';
			}

			fullLink.attr('href', windowhref + 'view=full');
			mobileLink.attr('href', windowhref + 'view=mobile');
		};

		updateLinks();

		var history = window.History;
		if (!history || !history.enabled) {
			return;
		}
		History.Adapter.bind(window, 'statechange', updateLinks);
	};

	$(document).ready(initializeVersion);
})(Weebly.jQuery);


// -----------------------------------------------------------------------------------------------------
// Comments
// -----------------------------------------------------------------------------------------------------
// !!!!! FYI: this is now in ./javascript/site/comments.js


(function($) {


	window.blogCommentDisplayForm = function(url, wrapperId, commentId) {
		var wrapper = $('#' + wrapperId);
		var isOpen = wrapper.data('isReplyFormOpen') || false;
		var replyButton = wrapper.prev('.reply-comment').find('span').first();
		var cancelText = _W.utl('html.weebly.images.common.utilities-jq_1');

		if (wrapper.data('locked')) return;
		wrapper.data('locked', true);

		var replyText = wrapper.data('replyText');
		if (!replyText) {
			replyText = replyButton.html();
			wrapper.data('replyText', replyText);
		}

		var iframe = $('#' + wrapperId + ' iframe');
		if (!iframe.length) {
			iframe = $('<iframe src="' + url + '" frameborder="0" allowtransparency="true" scrolling="no"></iframe>');
			$('#' + wrapperId + ' > div > div').first().append(iframe);
		}

		if (isOpen) {
			replyButton.html(replyText);
			wrapper.data('isReplyFormOpen', false);
			wrapper.down().hide('slide', {
				wrapper: wrapper,
				direction: 'up',
				duration: 1000,
				complete: function() {
					wrapper.data('locked', false);
				}
			});
		}
		else {
			replyButton.html(cancelText);
			wrapper.data('isReplyFormOpen', true);
			wrapper.down().show('slide', {
				wrapper: wrapper,
				direction: 'up',
				duration: 1000,
				complete: function() {
					wrapper.data('locked', false);
				}
			});
		}

		return false;
	};


})(Weebly.jQuery);




// -----------------------------------------------------------------------------------------------------
// Form Submission
// -----------------------------------------------------------------------------------------------------
// !!!!! FYI: this is now in ./javascript/site/form.js


(function(Weebly, $) {


	var stylePrefix = window.STYLE_PREFIX || 'weebly';
	var currentlyFocusedFormElement = null;


	function updateForm() {

		if (window.location.href.match(/posted=(.*)$/)) {
			var posted = Weebly.evalJSON(
				decodeURIComponent(window.location.href.match(/posted=(.*)$/)[1].replace(/\+/g, ' '))
			);
			$('form').each(function(i, formNode) {
				var form = $(formNode);
				$.each(posted, function(key, value) {
					if (typeof value === 'object') {
						$.each(value, function(subKey, subValue) {
							form.find('input').each(function(i, inputNode) {
								if (
									inputNode.name.replace(/_u\d*/, '') == key + '[' + subKey + ']'
									|| inputNode.name == key + '[' + subKey + ']'
								) {
									if (inputNode.type === 'checkbox') {
										inputNode.checked = 1;
									}
									else {
										inputNode.value = subValue;
									}
								}
							});
						});
					}
					else {
						form.find('input,textarea,select,button').each(function(i, inputNode) {
							if (
								inputNode.name.replace(/_u\d*/, '') == key
								|| inputNode.name == key
							) {
								var realName = inputNode.name;
								if (formNode[realName][0] && formNode[realName][0].type === 'radio') {
									form.find('radio[name=' + realName + ']').each(function(i, radioNode) {
										if (radioNode.value == value) {
											radioNode.checked = true;
										}
									});
								}
								else {
									inputNode.value = value;
								}
							}
						});
					}
				});
			});
		}

		if (window.location.href.match(/form-errors=(.*?)&/) && window.location.href.match(/ucfid%22%3A%22(.*?)%/) ) {
			var errors = window.location.href.match(/form\-errors=(.*?)&/)[1].split(',');
			var ucfid = window.location.href.match(/ucfid%22%3A%22(.*?)%/)[1];
			var form = $('#form-' + ucfid);
			$.each(errors, function(i, field) {
				field = decodeURIComponent(field);
				form.find('input,textarea,select,button').each(function(i, inputNode) {
					if (
						inputNode.name.replace(/_u\d*/, '') == field
						|| inputNode.name.replace(/.*_u/, '_u') == field
						|| inputNode.name.replace(/\[.*\]$/, '') == field
					) {
						$(inputNode)
							.addClass('form-input-error')
							.up('.' + stylePrefix + '-form-field')
								.addClass('form-field-error');
					}
				});
			});
			$('#' + ucfid + '-form-parent').after('<div>Please correct the highlighted fields</div>');
		}

		if (window.location.href.match(/success\=1/) && window.location.href.match(/ucfid\=(.*)/)) {
			var ucfid = window.location.href.match(/ucfid\=(.*?)&/)[1];
			var form = $('#form-'+ucfid);
			var confText = 'Your data was successfully submitted.';
			var textMatch = window.location.href.match(/text=(.*?)&/);
			if (textMatch) {
				confText = decodeURIComponent(textMatch[1].replace(/\+/g, ' '));
			}
			form.html('<div>' + confText + '</div>');
		}

	}


	function listenToResponse() {

		function receiveMessage(message) {
			var sameOrigin = message.origin == location.protocol + location.port + '//' + location.hostname;
			if (!sameOrigin)
				return; // could be facebook or something?
			var response = Weebly.evalJSON(message.data);
			switch (response.action) {
				case "finished" :
					var ucfid = response.data.ucfid;
					var form = $("#form-" + ucfid);
					form.hide();
					var msgElm = $('#' + ucfid + '-msg');
					if (!msgElm.length) {
						msgElm = $('<div id="'+ucfid+'-msg"/>')
							.insertAfter(form);
					}
					msgElm.html(response.data.message);
					msgElm.effect('highlight', {}, 2000);
					$('body').animate({
						scrollTop: msgElm.offset().top
					}, {
						easing: 'easeOutQuart',
						duration: 2000
					});
					return;
				case "redirect" :
					window.location = response.data.location;
					return;
				case "error" :
					var errors = response.data['error-fields'];
					var ucfid = response.data.ucfid;
					var form = $("#form-" + ucfid);
					form.find('input,textarea,select,button')
						.filter('.form-input-error')
						.each(function(i, inputNode) {
							$(inputNode)
								.removeClass('form-input-error')
								.up('.' + stylePrefix + '-form-field')
								.removeClass('form-field-error');
						});
					$.each(errors, function(i, field) {
						form.find('input,textarea,select,button')
							.each(function(i, inputNode) {
								if (
									inputNode.name.replace(/_u\d*/, '') == field
									|| inputNode.name.replace(/.*_u/, '_u') == field
									|| inputNode.name.replace(/\[.*\]$/, '') == field
								) {
									$(inputNode)
										.addClass('form-input-error')
										.up('.' + stylePrefix + '-form-field')
											.addClass('form-field-error');
								}
							});
					});
					var msgElm = $('#' + ucfid + '-msg');
					if (!msgElm.length) {
						msgElm = $('<div id="' + ucfid + '-msg"/>').insertAfter(form);
					}
					msgElm.html(response.data.message);
					return;
			}
		}

		$('form').each(function(i, formNode) {
			var form = $(formNode);
			var formAction = form.attr('action') || '';
			if (formAction.match(/formSubmit\.php$/)) {

				formAction = formAction.replace(
					/(.*)\/formSubmit\.php$/,
					window.location.protocol + "//" + window.location.host +"/ajax/apps/formSubmitAjax.php"
				);
				form.attr('action', formAction);

				form.attr('accept-charset', 'UTF-8');
				var name = form.attr('id') + "-target";
				var iframe = $('<iframe name="' + name + '"/>')
					.hide()
					.attr('id', name)
					.insertAfter(form);
				var iframeNode = iframe[0];
				form.attr('target', iframeNode.id);

				if (!window.postMessage) {
					iframe.on('load', function() {
						try {
							var location = (iframeNode.contentDocument || iframeNode.contentWindow.document).location.href;
							var data = (iframeNode.contentDocument || iframeNode.contentWindow.document).body.firstChild.nodeValue;
							if (location != "about:blank") {
								receiveMessage({
									data: data,
									source: iframeNode.contentWindow
								});
							}
						}
						catch(e) {}
					});
				}
			}
		});

		if (window.postMessage) {
			$(window).on('message', function(event) {
				try{
					receiveMessage(event.originalEvent);
				} catch(e) {
					//console.log(e);
				}
			});
		}

	}


	function showFieldInstructions(msg, pointTo) {

		removeFieldInstructions();
		var target = $(pointTo);
		target.identify();
		var image = false;
		var el =
			$("<div/>", {
				'class': 'instructions-container',
				'id': target.attr('id') + '-instructions'
			})
			.html(msg)
			.appendTo('body')
			.on('click', function() {
				el.hide().remove();
			});

		currentVisibleError = el.identify();

		var elWidth = el.outerWidth();
		var elHeight = el.outerHeight();
		var targetWidth = target.outerWidth();
		var targetHeight = target.outerHeight();
		var targetOffset = target.offset();
		el.css({
			top: targetOffset.top + targetHeight/2 - elHeight/2,
			left: targetOffset.left + targetWidth + 20
		});

		//set arrow position
		var imageTop  = Math.floor(elHeight/2) - 10;
		var imageLeft = '-13';
		el.append(
			'<img' +
			' src="http://www.weebly.com/images/error_arrow_left.gif"' +
			' style="position: absolute; left:'+ imageLeft + 'px; top:' + imageTop + 'px;"' +
			'/>'
		);
	}


	function handlerRemoveFieldInstructions(event) {
		var el = $(event.target);
		if (
			!el.hasClass(stylePrefix + '-form-field') &&
			!el.up('.' + stylePrefix + '-form-field').length
		) {
			$(document).off('mousemove', handlerRemoveFieldInstructions);
			removeFieldInstructions();
		}
	}


	function removeFieldInstructions() {
		$('.instructions-container').each(function(i, node) {
			var inputID = node.id.replace('-instructions', '');
			if (
				!currentlyFocusedFormElement ||
				$('#' + inputID).up('.' + stylePrefix + '-form-field').identify() != currentlyFocusedFormElement
			) {
				$(node).remove();
			}
		});
	}


	function fieldInstructionsHandler() {
		// Mouse hover is preventing clicks
		if ('ontouchstart' in document.documentElement) {
			return;
		}

		$('.' + stylePrefix + '-form-instructions').each(function(i, elNode) {
			var el = $(elNode);
			if (el.html()) {

				// Escape special characters for jQuery
				var instructions = elNode.id.replace('instructions', 'input').replace(/(#|;|&|,|\.|\+|\*|~|\'|\:|\"|\!|\^|\$|[|]|\(|\)|\=|\>|\||\/|\?|\s)/g, '\\$1'),
				    pointTo = $('#' + instructions);

				// select inputs
				if (!pointTo.length) {
					pointTo = el.up('.' + stylePrefix + '-form-field').down('.form-select');
				}
				// radio/checkbox inputs
				if (!pointTo.length) {
					pointTo = el.up('.' + stylePrefix + '-form-field').down('.' + stylePrefix + '-form-label');
				}
				var container = pointTo.up('.' + stylePrefix + '-form-field');
				if (
					pointTo.up('.' + stylePrefix + '-form-input-container').length &&
					pointTo.up('.' + stylePrefix + '-form-input-container').hasClass(stylePrefix + '-form-left')
				) {
					pointTo = pointTo.up('.' + stylePrefix + '-form-input-container').next('.' + stylePrefix + '-form-right');
				}
				container.on('mouseover', function(event) {
					if ($(this).hasClass(stylePrefix + '-form-field')) {
						if (!container.down('.instructions-container').length) {
							showFieldInstructions(el.html(), pointTo);
						}
						$(document).on('mousemove', handlerRemoveFieldInstructions);
					}
				});
			}
		});
	}


	function setWeeblyApproved() {
		$("input[name=" + stylePrefix + "_approved]").val('weebly');
		$(document)
			.off('mousedown', setWeeblyApproved)
			.off('keydown', setWeeblyApproved);
	}


	$(document)
		.ready(updateForm)
		.ready(fieldInstructionsHandler)
		.ready(listenToResponse)
		.on('mousedown', setWeeblyApproved)
		.on('keydown', setWeeblyApproved)
		.on('click', function(event) {
			var el = $(event.target);
			var up = el.up('.' + stylePrefix + '-form-field');
			if (el.hasClass(stylePrefix + '-form-field')) {
				up = el;
			}
			if (up.length) {
				currentlyFocusedFormElement = up.identify();
			}
			else{
				currentlyFocusedFormElement = null;
			}
			removeFieldInstructions();
		});

})(Weebly, Weebly.jQuery);



// -----------------------------------------------------------------------------------------------------
// Search Header and Element
// -----------------------------------------------------------------------------------------------------
// !!!!! FYI: this is now in ./javascript/site/search.js


(function($) {

	/**
	 * Set up handlers for our search field. We have to do this because
	 * the 'submit' / 'search' button isn't a button but a span. Which
	 * makes it easier to stylize, but harder to convert into a button.
	 */
	function listenToSearchSubmit() {
		// Header search form
		// ------------------
		$('#wsite-header-search-form').on('click', 'span.wsite-search-button', function(ev) {
			$(ev.delegateTarget).submit();
		}).on('submit', function(ev) {
			// Disable search from Theme Previews
			return !window.document.body.className.match(/wsite-page-theme_browser\/preview/);
		});

		// Search element
		// ------------------
		$('form.wsite-search-element-form')
			.on('click', 'span.wsite-search-element-submit', function(ev) {
				$(ev.delegateTarget).submit();
			})
			.on('submit', function() {
				// Disable search from Theme Previews
				return !window.document.body.className.match(/wsite-page-theme_browser\/preview/);
			});
	}

	$(document).ready(listenToSearchSubmit);

})(Weebly.jQuery);



// -----------------------------------------------------------------------------------------------------
// Fancybox
// -----------------------------------------------------------------------------------------------------
// !!!!! FYI: this is now in ./javascript/site/fancybox.js


(function($) {

	$(document).ready(function() {

		$('a[rel=lightbox]') // ...standalone lightbox <a>'s
			.removeAttr('rel') // don't group them by rel (fancybox will want to)
			.add('a[rel^="lightbox["]') // ...select gallery <a>'s too
				.addClass('w-fancybox');

		if ($.fn.fancybox) { // mobile doesn't have fancybox. uses photoswipe instead

			// it's best to use a global selector to initialize fancybox so that it can use event delegation internally.
			// PS- fancybox's same event delegation is buggy when used like this:
			// $('.whatever').removeClass('whatever').fancybox()
			$('.w-fancybox')
				.fancybox({
					prevEffect: 'none',
					nextEffect: 'none',
					padding: 10,
					helpers: {
						title: {
							type: 'inside'
						},
						thumbs: {
							width: 50,
							height: 50
						}
					}
				});

			window.lightboxLoaded = true;

		}

	});

})(Weebly.jQuery);




// -----------------------------------------------------------------------------------------------------
// PhotoSwipe
// -----------------------------------------------------------------------------------------------------
// !!!!! FYI: this is now in ./javascript/site/photoswipe.js


(function($) {


	var callbacks = [];
	var insertedTags = false;
	var isTouch = 'ontouchstart' in document.documentElement;


	window.whenPhotoSwipeLoaded = function(callback) {
		// TODO: could jqueryify this
		if (window.Code && window.Code.PhotoSwipe) {
			callback();
		}else{
			callbacks.push(callback);
			if (!insertedTags) {
				insertedTags = true;
				var head = document.getElementsByTagName('head')[0];
				var script = document.createElement('script');
				var cssLink = document.createElement('link');
				script.type = 'text/javascript';
				script.async = true;
				script.src = STATIC_BASE + "weebly/libraries/photoswipe/code.photoswipe-3.0.4-custom.min.js";
				cssLink.setAttribute('rel', 'stylesheet');
				cssLink.setAttribute('type', 'text/css');
				cssLink.setAttribute('href', STATIC_BASE + "weebly/libraries/photoswipe/photoswipe.css");
				head.insertBefore(cssLink, head.firstChild);
				head.insertBefore(script, head.firstChild);
			}
		}
	};


	window._photoSwipeLoaded = function() { // called by the photoswipe JS file
		for (var i=0; i<callbacks.length; i++) {
			callbacks[i]();
		}
	};


	function initPhotoSwipeAnchors(anchorNodes) {
		// kill lightbox onclick
		$(anchorNodes)
			.removeClass('w-fancybox')
			.attr('onclick', '')
			.off('click');
		whenPhotoSwipeLoaded(function() {
			Code.PhotoSwipe.attach(
				anchorNodes,
				{
					captionAndToolbarFlipPosition: true,
					captionAndToolbarAutoHideDelay: 0, // always show
					loop: false
				}
			);
		});
	}


	if (isTouch && !$.fn.fancybox) {
		$(document).ready(function() {
			var anchorGroups = {};
			$('a.w-fancybox').each(function(i, anchorNode) {
				var match = ($(anchorNode).attr('rel') || '').match(/^lightbox\[(.*)\]/);
				if (match) {
					var groupName = match[1];
					anchorGroups[groupName] = anchorGroups[groupName] || [];
					anchorGroups[groupName].push(anchorNode);
				}else{
					initPhotoSwipeAnchors([ anchorNode ]);
				}
			});
			$.each(anchorGroups, function(name, anchorNodes) {
				initPhotoSwipeAnchors(anchorNodes);
			});
		});
	}


})(Weebly.jQuery);

(function() {
	var stylePrefix = window.STYLE_PREFIX || 'weebly';

	var isThemeCSSLoaded = function() {
		for (var i=0; i<document.styleSheets.length; i++) {
			try {
				if (document.styleSheets[i].title == stylePrefix+'-theme-css') {
					var sheet = document.styleSheets[i];
					var rules = sheet.cssRules || sheet.rules;
					return rules && rules.length > 0;
				}
			}
			catch (err) {}
		}
		return false;
	}

	var whenThemeCSSLoaded = function(callback) {
		if (isThemeCSSLoaded()) {
			callback();
		}else{
			var intervalID = setInterval(function() {
				if (isThemeCSSLoaded()) {
					clearInterval(intervalID);
					callback();
				}
			}, 200);
		}
	}

	if (!window.whenThemeCSSLoaded) {
		window.whenThemeCSSLoaded = whenThemeCSSLoaded;
	}
}());



// !!!!!!!!!!!!!! FYI: this is now in ./javascript/vendor/fastclick.js

/// FAST CLICK

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.7
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
	case 'select':
		return true;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	if (this.deviceIsIOS && targetElement.setSelectionRange) {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	// If the touch has moved, cancel the click tracking
	if (this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the allowlist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	if ((/Chrome\/[0-9]+/).test(navigator.userAgent)) {

		// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && metaViewport.content.indexOf('user-scalable=no') !== -1) {
				return true;
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}


//// END FASTCLICK
