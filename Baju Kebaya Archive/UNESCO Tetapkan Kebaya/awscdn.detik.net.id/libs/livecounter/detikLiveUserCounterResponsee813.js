/*
   detikLiveUserCounterResponse Object for Core-Developers
*/

// Chapter 1: Beginning
if (typeof jQuery !== 'function') {
  var warnJQueryUndefinedStr = 'detikLiveUserCounterResponse.js needs jQuery 1.1x.x to run properly!';
  console.log(warnJQueryUndefinedStr);
  throw new Error(warnJQueryUndefinedStr); // this line will stop the script
};

// Chapter 2: Load External Libraries

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.purl = factory();
    }
})(function() {

    var tag2attr = {
            a       : 'href',
            img     : 'src',
            form    : 'action',
            base    : 'href',
            script  : 'src',
            iframe  : 'src',
            link    : 'href',
            embed   : 'src',
            object  : 'data'
        },

        key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'], // keys available to query

        aliases = { 'anchor' : 'fragment' }, // aliases for backwards compatability

        parser = {
            strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        },

        isint = /^[0-9]+$/;

    function parseUri( url, strictMode ) {
        var str = decodeURI( url ),
        res   = parser[ strictMode || false ? 'strict' : 'loose' ].exec( str ),
        uri = { attr : {}, param : {}, seg : {} },
        i   = 14;

        while ( i-- ) {
            uri.attr[ key[i] ] = res[i] || '';
        }

        // build query and fragment parameters
        uri.param['query'] = parseString(uri.attr['query']);
        uri.param['fragment'] = parseString(uri.attr['fragment']);

        // split path and fragement into segments
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');

        // compile a 'base' domain attribute
        uri.attr['base'] = uri.attr.host ? (uri.attr.protocol ?  uri.attr.protocol+'://'+uri.attr.host : uri.attr.host) + (uri.attr.port ? ':'+uri.attr.port : '') : '';

        return uri;
    }

    function getAttrName( elm ) {
        var tn = elm.tagName;
        if ( typeof tn !== 'undefined' ) return tag2attr[tn.toLowerCase()];
        return tn;
    }

    function promote(parent, key) {
        if (parent[key].length === 0) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        parent[key] = t;
        return t;
    }

    function parse(parts, parent, key, val) {
        var part = parts.shift();
        if (!part) {
            if (isArray(parent[key])) {
                parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
                parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
                parent[key] = val;
            } else {
                parent[key] = [parent[key], val];
            }
        } else {
            var obj = parent[key] = parent[key] || [];
            if (']' == part) {
                if (isArray(obj)) {
                    if ('' !== val) obj.push(val);
                } else if ('object' == typeof obj) {
                    obj[keys(obj).length] = val;
                } else {
                    obj = parent[key] = [parent[key], val];
                }
            } else if (~part.indexOf(']')) {
                part = part.substr(0, part.length - 1);
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
                // key
            } else {
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            }
        }
    }

    function merge(parent, key, val) {
        if (~key.indexOf(']')) {
            var parts = key.split('[');
            parse(parts, parent, 'base', val);
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t;
            }
            if (key !== '') {
                set(parent.base, key, val);
            }
        }
        return parent;
    }

    function parseString(str) {
        return reduce(String(str).split(/&|;/), function(ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, ' '));
            } catch(e) {
                // ignore
            }
            var eql = pair.indexOf('='),
                brace = lastBraceInKey(pair),
                key = pair.substr(0, brace || eql),
                val = pair.substr(brace || eql, pair.length);

            val = val.substr(val.indexOf('=') + 1, val.length);

            if (key === '') {
                key = pair;
                val = '';
            }

            return merge(ret, key, val);
        }, { base: {} }).base;
    }

    function set(obj, key, val) {
        var v = obj[key];
        if (typeof v === 'undefined') {
            obj[key] = val;
        } else if (isArray(v)) {
            v.push(val);
        } else {
            obj[key] = [v, val];
        }
    }

    function lastBraceInKey(str) {
        var len = str.length,
            brace,
            c;
        for (var i = 0; i < len; ++i) {
            c = str[i];
            if (']' == c) brace = false;
            if ('[' == c) brace = true;
            if ('=' == c && !brace) return i;
        }
    }

    function reduce(obj, accumulator){
        var i = 0,
            l = obj.length >> 0,
            curr = arguments[2];
        while (i < l) {
            if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
            ++i;
        }
        return curr;
    }

    function isArray(vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    }

    function keys(obj) {
        var key_array = [];
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) key_array.push(prop);
        }
        return key_array;
    }

    function purl( url, strictMode ) {
        if ( arguments.length === 1 && url === true ) {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();

        return {

            data : parseUri(url, strictMode),

            // get various attributes from the URI
            attr : function( attr ) {
                attr = aliases[attr] || attr;
                return typeof attr !== 'undefined' ? this.data.attr[attr] : this.data.attr;
            },

            // return query string parameters
            param : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.query[param] : this.data.param.query;
            },

            // return fragment parameters
            fparam : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.fragment[param] : this.data.param.fragment;
            },

            // return path segments
            segment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.path;
                } else {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];
                }
            },

            // return fragment segments
            fsegment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.fragment;
                } else {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];
                }
            }

        };

    }

    purl.jQuery = function($){
        if ($ != null) {
            $.fn.url = function( strictMode ) {
                var url = '';
                if ( this.length ) {
                    url = $(this).attr( getAttrName(this[0]) ) || '';
                }
                return purl( url, strictMode );
            };

            $.url = purl;
        }
    };

    purl.jQuery(window.jQuery);

    return purl;

});

;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

// Chapter 3: detikLiveUserCounterResponse Context as ctx
var detikLiveUserCounterResponse = {};

(function(ctx) {

  ctx.headerInfo = '[detikLiveUserCounterResponse]';
  ctx.version    = 'v1.13';

  ctx.baseDomain = function() {
    result = '';
    var hostname = window.location.hostname;
    var perdots = hostname.split('.');
    if (perdots.length >= 3) {
      result = '.' + perdots[1] + '.' + perdots[2];
    } else {
      result = '.' + hostname;
   }
    return result;
  }

  ctx.config = {
    enableConsoleLog: false,
    timeInterval: 30000,
    channel: 'counterview',
    domain: window.location.hostname,
    user: '',
    trackerid: '',
    enableGetCounter: true,
    getCounterUrl: 'https://parsley.detik.com/dtnct',
    getCounterReadOnlyUrl: 'https://parsley.detik.com/dtnctv',
    successCallback: null,
    errorCallback: null,
    enableTheTracker: false,
    theTrackerUrl: 'https://cdn.detik.net.id/loganalysistracker/thetracker-detik-v3.min.js',
    persistentMode: true,
    userPrefix: 'gen_',
    mobilePrefix: 'genm_',
    dtmaCookieName: '__dtma',
    dtklucCookieName: 'dtklucx',
    dtklucCookieAttribute: { domain: ctx.baseDomain(), path: '/', expires: 365 }, // satuan expires adalah Hari
    dtklucCookieAttributeRead: { domain: ctx.baseDomain(), path: '/' },
    dtklucDbgCookieName: 'dtklucdbg',
    dtklucDbgCookieAttributeRead: { domain: ctx.baseDomain(), path: '/' },    
    startDelay: 6000,
    startDelayForResponse: 1000, // parent
    startDelayForRequest: 2000, // embed
    readOnly: false,
    requestWinPostMsg: true,
    responseWinPostMsg: true,
    requestWinPostData: { dtklucreq: 1 },
    responseWinPostData: { dtklucuser: null, dtkluctrackerid: null, dtklucdomain: null, dtklucchannel: null },
    requestWinPostTargetWindow: '*',
    responseWinPostTargetWindow: '*',
    winPostDataRewriteUserId: true,
    winPostDataRewriteTrackerId: true,
    winPostDataRewriteDomain: true,
    winPostDataRewriteChannel: false,
    waitingResponseWinPostMsg: 6000,
    ajaxSetupCache: false,
    ajaxSetupASync: true,
    noHit: true,
    sendJsUrl: false,
    bodyLogger: false,
    scriptMarker: 'detikLiveUserCounter',
    mobileIdAvoidingMarker: 'ADVERTISING_IDENTIFIER_PLAIN'
  };

  ctx.inputConfig = {};

  ctx.vars = {
    timeIntervalHandler: null,
    getCounterData: null,
    isTheTrackerHasBeenLoaded: false,
    startDelayNow: false,
    messageAddListenerLock: false,
    dataWinPostMsgIsOK: false,
    haltedRequestWinPostMsg: false,
    firstStart: false,
    playIsSent: false,
    playIsOccur: false,
    mobileId: '',
    mobileType: '',
    mobileLat: '',
    scriptSrcUrl: null,
    isMobileMacrosExist: false
  };

  ctx.log = function(txtLog, txtVal) {
    if (ctx.config.enableConsoleLog === true) {
      try {
        if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
          console.log(ctx.headerInfo + ' ' + txtLog);
          if (ctx.config.bodyLogger === true) {
            var nodeP = document.createElement('p');
            var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog);
            nodeP.appendChild(textNodeP);
            document.body.appendChild(nodeP);
          }
        } else {
          console.log(ctx.headerInfo + ' ' + txtLog, txtVal);
          if (ctx.config.bodyLogger === true) {
            var nodeP = document.createElement('p');
            var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog + ' , ' + JSON.stringify(txtVal));
            nodeP.appendChild(textNodeP);
            document.body.appendChild(nodeP);
          }
        }
      } catch (ex) {
      }
    }
  };

  ctx.logx = function(txtLog, txtVal) {
    try {
      if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
        console.log(ctx.headerInfo + ' ' + txtLog);
        if (ctx.config.bodyLogger === true) {
          var nodeP = document.createElement('p');
          var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog);
          nodeP.appendChild(textNodeP);
          document.body.appendChild(nodeP);
        }
      } else {
        console.log(ctx.headerInfo + ' ' + txtLog, txtVal);
        if (ctx.config.bodyLogger === true) {
          var nodeP = document.createElement('p');
          var textNodeP = document.createTextNode(ctx.headerInfo + ' ' + txtLog + ' , ' + JSON.stringify(txtVal));
          nodeP.appendChild(textNodeP);
          document.body.appendChild(nodeP);
        }
      }
    } catch (ex) {
    }
  };

  ctx.uniqueId = function (prefix) {
    // https://gist.github.com/gordonbrander/2230317
    // NOTE: This format of 8 chars, followed by 3 groups of 4 chars, followed by 12 chars
    //       is known as a UUID and is defined in RFC4122 and is a standard for generating unique IDs.
    //       This function DOES NOT implement this standard. It simply outputs a string
    //       that looks similar. The standard is found here: https://www.ietf.org/rfc/rfc4122.txt
    if (prefix === null) {
      prefix = '_';
    }
    function chr4(){
      return Math.random().toString(16).slice(-4);
    }
    return prefix + chr4() + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() + chr4() + chr4();
  };

  ctx.getScriptSrc = function() {
    var result = null;
    $.each($('script'), function(i, v) {
      if (v.src.indexOf(ctx.config.scriptMarker) !== -1) {
        result = v.src;
      };
    });
    return result;
  };

  ctx.getMobileMacros = function() {
    try {
      if (ctx.vars.scriptSrcUrl !== null) {
        //ctx.log('re-announcement, version is', ctx.version);
        var mobileIdCheck = $.url(ctx.vars.scriptSrcUrl).param('mobileid');
        var mobileIdCheck2 = $.url(ctx.vars.scriptSrcUrl).fparam('mobileid');
        if ( ((typeof mobileIdCheck) === 'string') && (mobileIdCheck !== '') && (mobileIdCheck.indexOf(ctx.config.mobileIdAvoidingMarker) === -1 ) ) {
          ctx.vars.mobileId   = mobileIdCheck;
          ctx.vars.mobileType = $.url(ctx.vars.scriptSrcUrl).param('mobiletype');
          ctx.vars.mobileLat  = $.url(ctx.vars.scriptSrcUrl).param('mobilelat');
          ctx.config.user     = ctx.config.mobilePrefix + MD5(ctx.vars.mobileId + ';' + ctx.vars.mobileType + ';' + ctx.vars.mobileLat);
          ctx.vars.isMobileMacrosExist = true;
          ctx.log('getMobileMacros param mobileid is', ctx.vars.mobileId);
          ctx.log('getMobileMacros param mobiletype is', ctx.vars.mobileType);
          ctx.log('getMobileMacros param mobilelat is', ctx.vars.mobileLat);
          ctx.log('getMobileMacros param user is', ctx.config.user);
        } else if ( ((typeof mobileIdCheck2) === 'string') && (mobileIdCheck2 !== '') && (mobileIdCheck2.indexOf(ctx.config.mobileIdAvoidingMarker) === -1 ) ) {
          ctx.vars.mobileId   = mobileIdCheck2;
          ctx.vars.mobileType = $.url(ctx.vars.scriptSrcUrl).fparam('mobiletype');
          ctx.vars.mobileLat  = $.url(ctx.vars.scriptSrcUrl).fparam('mobilelat');
          ctx.config.user     = ctx.config.mobilePrefix + MD5(ctx.vars.mobileId + ';' + ctx.vars.mobileType + ';' + ctx.vars.mobileLat);
          ctx.vars.isMobileMacrosExist = true;
          ctx.log('getMobileMacros fparam mobileid is', ctx.vars.mobileId);
          ctx.log('getMobileMacros fparam mobiletype is', ctx.vars.mobileType);
          ctx.log('getMobileMacros fparam mobilelat is', ctx.vars.mobileLat);
          ctx.log('getMobileMacros fparam user is', ctx.config.user);
        }
      }
    } catch (ex) {
    };
  };

  ctx.configProcess = function() {
    $.each(ctx.config, function (idx, val) {
      if (((typeof ctx.inputConfig) !== 'undefined') && (ctx.inputConfig !== null)) {
        if ((typeof ctx.inputConfig[idx]) !== 'undefined') {
          ctx.config[idx] = ctx.inputConfig[idx];
        }
      }
    });
    //ctx.log('configProcess config is', ctx.config);
  };

  ctx.readBodyLoggerMarker = function() {
    try {
      if (ctx.vars.scriptSrcUrl !== null) {
        var bodyLogger = $.url(ctx.vars.scriptSrcUrl).param('bodylogger');
        var bodyLogger2 = $.url(ctx.vars.scriptSrcUrl).fparam('bodylogger');
        if ( (typeof bodyLogger === 'string') && (bodyLogger === 'true') ) {
          ctx.config.bodyLogger = true;
          ctx.log('readBodyLoggerMarker param got the mark, we work as Body Logger now', null);
        } else if ( (typeof bodyLogger2 === 'string') && (bodyLogger2 === 'true') ) {
          ctx.config.bodyLogger = true;
          ctx.log('readBodyLoggerMarker fparam got the mark, we work as Body Logger now', null);
        }
      }
    } catch (ex) {
    }
  }

  ctx.setConfig = function(config) {
    if ($.type(config) === 'object') {
      ctx.log('setConfig is working', null);
      ctx.vars.scriptSrcUrl = ctx.getScriptSrc();
      ctx.readBodyLoggerMarker();
      ctx.inputConfig = config;
      ctx.configProcess();
      ctx.config.user = ctx.uniqueId(ctx.config.userPrefix);
      ctx.getMobileMacros();
      if (ctx.config.requestWinPostMsg === true) {
        ctx.config.startDelay = ctx.config.startDelayForRequest;
      }
      if (ctx.config.responseWinPostMsg === true) {
        ctx.config.startDelay = ctx.config.startDelayForResponse;
      }
    }
  };

  ctx.getScriptTemplate = function(gsUrl, gsNextFunction, gsStatusOK) {
    $.ajaxSetup( { async: true , cache: true } );
    $.getScript(gsUrl, function() {
      if ((typeof gsStatusOK) === 'function') {
        gsStatusOK();
      }
      if ((typeof gsNextFunction) === 'function') {
        gsNextFunction();
      }
      $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
    }).fail(function() {
      ctx.log('calls failed', gsUrl);
      if ((typeof gsStatusOK) === 'function') {
        gsStatusOK();
      }
      $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
      if ((typeof gsNextFunction) === 'function') {
        gsNextFunction();
      }
    });
  };

  ctx.gsTheTracker = function() {
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.log('gsTheTracker lib caller', null);
      ctx.getScriptTemplate(ctx.config.theTrackerUrl, ctx.start2, null);
    }
  };

  ctx.start2 = function() {
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.vars.isTheTrackerHasBeenLoaded = true;
      ctx.log('start2 is working', null);
      var metas = document.getElementsByTagName("meta");
      try {
        detikTracker.call(null, metas);
        ctx.log('start2 detikTracker call is running', null);
        var dtma = Cookies.get(ctx.config.dtmaCookieName, ctx.config.dtklucCookieAttributeRead);
        if ((typeof dtma === 'string') && (dtma !== '')) {
          ctx.config.trackerid = dtma;
          ctx.log('start2 got __dtma', ctx.config.trackerid);
          ctx.start1();
        } else {
          if (ctx.config.persistentMode === true) {
            ctx.start1();
          } else {
            ctx.log('start2 didnt get __dtma, halted', null);
          }
        }
      } catch (error) {
        ctx.log('start2 detikTracker call got an error', null);
        if (ctx.config.persistentMode === true) {
          ctx.start1();
        } else {
          ctx.log('start2 didnt get __dtma, halted', null);
        }
      }
    }
  };

  ctx.start1 = function() {
    if (ctx.config.noHit === false) {
      if (ctx.vars.timeIntervalHandler === null) {
        ctx.log('start1 is working', null);
        var domain2 = '';
        try {
          if ((document.referrer !== null) && (document.referrer !== undefined)) {
            var referrer = document.referrer;
            domain2 = (new URL(referrer)).hostname;
          }
        } catch (ex) {
        }
        var embedUrl = '';
        if (ctx.config.sendJsUrl === true) {
          embedUrl = '&url=' + encodeURIComponent(window.location);
        }
        ctx.vars.getCounterData = 
          'chanel=' + encodeURIComponent(ctx.config.channel) + 
          '&user=' + encodeURIComponent(ctx.config.user) +
          '&trackerid=' + encodeURIComponent(ctx.config.trackerid) +
          '&domain=' + encodeURIComponent(ctx.config.domain) +
          '&domain2=' + encodeURIComponent(domain2) + 
          embedUrl;
        //ctx.log('getCounterData', ctx.vars.getCounterData);
        ctx.getCounter(); // first encounter !
        if ((ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
          ctx.getCounter(); // sent immediately play event
        }
        ctx.vars.timeIntervalHandler = setInterval(function() {
          ctx.getCounter();
          if ((ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
            ctx.getCounter(); // sent immediately play event
          }
        }, ctx.config.timeInterval);
      }
    } else {
      ctx.log('start1 uses noHit, only responseWinPostMsg (if it is true) will run in message listener', null);
    }
  };

  ctx.start0 = function() {
    // get dtkluc if failed then use generated userid
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.log('start0 load theTracker to create __dtma', null);
      ctx.gsTheTracker();
    } else {
      ctx.log('start0 read __dtma as trackerid', null);
      var dtma = Cookies.get(ctx.config.dtmaCookieName, ctx.config.dtklucCookieAttributeRead);
      if ((typeof dtma === 'string') && (dtma !== '')) {
        ctx.config.trackerid = dtma;
        ctx.log('start0 got __dtma, trackerid value is', ctx.config.trackerid);
      }
      ctx.log('start0 read dtkluc', null);
      var dtkluc = Cookies.get(ctx.config.dtklucCookieName, ctx.config.dtklucCookieAttributeRead);
      if ((typeof dtkluc === 'string') && (dtkluc !== '')) {
        ctx.config.user = dtkluc;
        ctx.log('start0 got dtkluc, user value is', ctx.config.user);
        if (ctx.config.requestWinPostMsg === true) {
          // get ctx.config.user and ctx.config.domain from parent iframe
          ctx.requestWinPostMsg();
        } else {
          ctx.start1();
        }
      } else {
        ctx.log('start0 unable to read dtkluc, user value is', ctx.config.user);
        Cookies.set(ctx.config.dtklucCookieName, ctx.config.user, ctx.config.dtklucCookieAttribute);
        if (ctx.config.requestWinPostMsg === true) {
          // get ctx.config.user and ctx.config.domain from parent iframe
          ctx.requestWinPostMsg();
        } else {
          ctx.start1();
        }
      }
    }
  };

  ctx.start = function() {
    ctx.logx('start is working, version is', ctx.version);
    // read dbg sign
    var dbgSign = Cookies.get(ctx.config.dtklucDbgCookieName, ctx.config.dtklucDbgCookieAttributeRead);
    if (dbgSign === '1') {
      ctx.config.enableConsoleLog = true;
    }
    // end read dbg sign
    if (ctx.vars.startDelayNow === false) {
      ctx.vars.startDelayNow = true;
      ctx.log('start uses startDelay', ctx.config.startDelay);
      setTimeout(function() {
        ctx.vars.startDelayNow = false;
        ctx.log('start uses startDelay is over', null);
        ctx.log('start config is', ctx.config);
        ctx.messageAddListenerInit();
        ctx.start0();
      }, ctx.config.startDelay);
    } else {
      ctx.log('start said that startDelay is busy!', null);
    }
  };

  ctx.messageAddListenerInit = function() {
    if (ctx.vars.messageAddListenerLock === false) {
      ctx.log('messageAddListenerInit is working', null);
      ctx.vars.messageAddListenerLock = true;
      if (ctx.config.requestWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          if (ctx.vars.haltedRequestWinPostMsg === false) {
            ctx.log('messageAddListenerInit requestWinPostMsg window listener is working', null);
            var responseData = event.data;
            if ((ctx.config.winPostDataRewriteUserId === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucuser')) ) {
              ctx.config.user = responseData.dtklucuser;
              ctx.vars.dataWinPostMsgIsOK = true;
              ctx.vars.haltedRequestWinPostMsg = true;
            }
            if ((ctx.config.winPostDataRewriteTrackerId === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtkluctrackerid')) ) {
              ctx.config.trackerid = responseData.dtkluctrackerid;
            }
            if ((ctx.config.winPostDataRewriteDomain === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucdomain')) ) {
              ctx.config.domain = responseData.dtklucdomain;
            }
            if ((ctx.config.winPostDataRewriteChannel === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucchannel')) ) {
              ctx.config.channel = responseData.dtklucchannel;
            }
            if (ctx.vars.dataWinPostMsgIsOK === true) {
              ctx.log('messageAddListenerInit requestWinPostMsg got responseData',  responseData);
              setTimeout(function() {
                ctx.start1();
              }, 0);
            }
          }
        });
      }
      if (ctx.config.responseWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          //ctx.log('messageAddListenerInit responseWinPostMsg window listener is working', null);
          var requestData = event.data;
          if ((typeof requestData === 'object') && (requestData !== null) && (requestData.hasOwnProperty('dtklucreq') === true) && (requestData.dtklucreq === 1)) {
            var responseData = ctx.config.responseWinPostData;
            responseData.dtklucuser = ctx.config.user;
            responseData.dtkluctrackerid = ctx.config.trackerid;
            responseData.dtklucdomain = ctx.config.domain;
            responseData.dtklucchannel = ctx.config.channel;
            var iframes = document.getElementsByTagName('iframe');
            ctx.log('messageAddListenerInit responseWinPostMsg iframes', iframes);
            $.each(iframes, function(idx, val) {
              try { 
                val.contentWindow.postMessage(responseData, ctx.config.responseWinPostTargetWindow);
                ctx.log('messageAddListenerInit responseWinPostMsg already sent', null);
              } catch (ex) {
                ctx.log('messageAddListenerInit responseWinPostMsg is failed!', null);
              }
            });
          }
        });
      }
    }
  };

  ctx.requestWinPostMsg = function() {
    if (ctx.config.requestWinPostMsg === true) {
      try {
        ctx.log('requestWinPostMsg is working', null);
        window.parent.postMessage(ctx.config.requestWinPostData, ctx.config.requestWinPostTargetWindow);
      } catch (ex) {
        ctx.log('requestWinPostMsg is failed!', null);
      }
      setTimeout(function() {
        if (ctx.vars.dataWinPostMsgIsOK === false) {
          ctx.log('requestWinPostMsg no-more waiting window.postMessage, get cookie now!', null);
          ctx.vars.haltedRequestWinPostMsg = true;
          ctx.start1();
        }
      }, ctx.config.waitingResponseWinPostMsg);
    }
  };

  ctx.getCounter = function() {
    if (ctx.config.enableGetCounter === true) {
      var getCounterUrl = null;
      var ajaxType = null;
      var ajaxContentType = null;
      var ajaxData = null;
      var playingData = '';
      if (ctx.vars.playIsSent === true) {
        playingData = '&event=playing';
      }
      var firstPlayData = '';
      if ((ctx.vars.firstStart === true) && (ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
        ctx.vars.playIsSent = true;
        firstPlayData = '&event=play';
      }
      var firstStartData = '';
      if (ctx.vars.firstStart === false) {
        ctx.vars.firstStart = true;
        firstStartData = '&event=start';
      }
      if (ctx.config.readOnly === true) {
        ajaxType = 'GET';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterReadOnlyUrl;
      } else {
        ajaxType = 'POST';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterUrl;
      }
      ctx.log('getCounter is working', getCounterUrl);
      ctx.log('getCounter ajaxData', ajaxData);
      $.ajaxSetup( { async: ctx.config.ajaxSetupASync , cache: ctx.config.ajaxSetupCache } );
      $.ajax({
        type: ajaxType,
        url: getCounterUrl,
        data: ajaxData,
        contentType: ajaxContentType,
        success: function(successMsg) {
          ctx.log('getCounter success-event', successMsg);
          if (typeof ctx.config.successCallback === 'function') {
            ctx.config.successCallback(successMsg);
          }
        },
        error: function(errorMsg) {
          ctx.log('getCounter error-event', errorMsg);
          if (typeof ctx.config.errorCallback === 'function') {
            ctx.config.errorCallback(errorMsg);
          }
        }
      });
    }
  };
  
  ctx.stop = function() {
    if (ctx.vars.timeIntervalHandler !== null) {
      ctx.log('stop is working', null);
      clearInterval(ctx.vars.timeIntervalHandler);
      ctx.vars.timeIntervalHandler = null;
    }
  };

  ctx.pause = function() {
    ctx.log('pause is working', null);
    ctx.config.enableGetCounter = false;
  };

  ctx.resume = function() {
    ctx.log('resume is working', null);
    ctx.config.enableGetCounter = true;
  };

  ctx.play = function() {
    ctx.log('play is working', null);
    ctx.vars.playIsOccur = true;
  };

})(detikLiveUserCounterResponse);

// for using it, please call these lines :
// detikLiveUserCounterResponse.setConfig({ .. });
// detikLiveUserCounterResponse.start();

//autorun config and start

detikLiveUserCounterResponse.setConfig({
  enableConsoleLog: false,
  requestWinPostMsg: true,  // requestWinPostMsg true and responseWinPostMsg true means PROXY
  responseWinPostMsg: true, // requestWinPostMsg true and responseWinPostMsg true means PROXY
  noHit: true
});

detikLiveUserCounterResponse.start();

