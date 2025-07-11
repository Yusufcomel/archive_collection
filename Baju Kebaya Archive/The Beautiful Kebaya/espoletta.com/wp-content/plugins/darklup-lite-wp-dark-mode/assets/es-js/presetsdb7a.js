// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dPZjE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 11509;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f1e0f10d7d62eec6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jEUkE":[function(require,module,exports) {
let excludeSelectors = [];
excludeSelectors = [
    "#adminmenuwrap",
    "#adminmenuwrap *"
];
let applyBgOverlay = false;
if (DarklupJs.apply_bg_overlay == "yes") applyBgOverlay = true;
// console.log("free dynamic presets 5");
// console.log("free dynamic presets 2");
class Darkluplite {
    constructor(){
        this.setRequiredVariables();
        if (this.isGutenburg) {
            this.htmlElement.style.display = "block";
            return;
        }
        this.getAllElements();
        this.applyDarklupDarkModeToAll();
        if (this.isWpAdmin) this.dashboardDarkMode();
        else this.frontEndDarkMode();
        this.htmlElement.style.display = "block";
    }
    dashboardDarkMode() {
        this.dashboardWindowOnLoad();
        this.dashboardDarkModeSwitchEvent();
        this.windowOnLoaded();
    }
    frontEndDarkMode() {
        this.prevWindowOnLoad();
        this.prevDarkModeSwitchEvent();
        this.prevHandleKeyShortcut();
        this.windowOnLoaded();
        this.prevHandleOSDark();
    }
    setRequiredVariables() {
        this.allElements = [];
        this.allAnchors = [];
        this.allButtons = [];
        this.allInputs = [];
        this.allImages = [];
        this.allInlineSvgs = [];
        this.elementsWithText = [];
        this.elementsWithRealBgColor = [];
        this.elementsWithRealBorder = [];
        this.elementsWithBgImage = [];
        this.elementsWithAlphaBg = [];
        this.elementsWithBoxShadow = [];
        this.isWpAdmin = false;
        this.isGutenburg = false;
        this.maxArea = 0;
        this.htmlElement = document.querySelector("html");
        this.switcherCheckbox = document.querySelector(".switch-trigger");
        this.switcherCheckboxes = document.querySelectorAll(".switch-trigger");
        this.switchTrigger = ".switch-trigger";
        this.switchWrapper = document.querySelector(".darkluplite-mode-switcher");
        this.switchWrapper2 = document.querySelector("#wp-admin-bar-darkluplite-admin-switch");
        this.switchWrapper3 = document.querySelector(".darkluplite-menu-switch");
        this.switchWrappers = [
            this.switchWrapper,
            this.switchWrapper2,
            this.switchWrapper3
        ];
        this.floatingSwitch = this.switchWrapper?.querySelector(".switch-trigger");
        this.adminSwitch = this.switchWrapper2?.querySelector(".switch-trigger");
        this.menuSwitch = this.switchWrapper3?.querySelector(".switch-trigger");
        this.switches = [
            this.floatingSwitch,
            this.adminSwitch,
            this.menuSwitch
        ];
        this.darkEnabledClass = "darkluplite-dark-mode-enabled";
        this.adminDarkEnabledClass = "darkluplite-admin-dark-mode-enabled";
        // Set Body Width And Primary BG
        let bodyElement = document.querySelector("body");
        if (bodyElement.classList.contains("wp-admin")) this.isWpAdmin = true;
        if (bodyElement.classList.contains("block-editor-page")) this.isGutenburg = true;
        if (bodyElement.classList.contains("site-editor-php")) this.isGutenburg = true;
        this.bodyWidth = this.getElementWidth(bodyElement);
        let bodyBg = this.hasBgColor(bodyElement);
        let htmlBg = this.hasBgColor(this.htmlElement);
        if (bodyBg) this.primaryBg = bodyBg;
        else if (htmlBg) this.primaryBg = htmlBg;
        else {
            this.primaryBg = "rgb(255, 255, 255)";
            bodyElement.classList.add("darkluplite--bg");
        }
    }
    getAllElements() {
        let excludes, selectAll;
        excludes = [
            "head",
            "meta",
            "link",
            "title",
            "style",
            "script",
            ".darkluplite-mode-switcher",
            ".darkluplite-mode-switcher *",
            ".darkluplite-menu-switch",
            ".darkluplite-menu-switch *",
            ".darkluplite-switch-preview-inner",
            ".darkluplite-switch-preview-inner *",
            ".darkluplite-admin-settings-area .on-off-toggle",
            ".darkluplite-admin-settings-area .on-off-toggle *",
            ".wp-core-ui .darkluplite-section-title .button",
            ".darklup-pro-ribbon",
            ".wpc-color-picker--input",
            ".wpc-color-picker--input *",
            ".darklup-single-popup-wrapper .darklup-single-popup",
            "iframe",
            // ".darkluplite-settings-area",
            // '.darkluplite-dark-ignore',
            // "a",
            // "a *",
            // "input",
            // "button",
            // "button *",
            // "select",
            // "textarea",
            // "svg",
            // "img",
            // "i",
            "video",
            "mark",
            "code",
            "pre",
            "ins",
            "option",
            "progress",
            "iframe",
            ".mejs-iframe-overlay",
            "svg *",
            "path",
            "canvas",
            // '.elementor-element-overlay',
            // '.elementor-background-overlay',
            "#wpadminbar",
            "#wpadminbar *",
            "#wpadminbar a",
            "noscript"
        ];
        if (excludeSelectors.length > 0) excludes = [
            ...excludeSelectors,
            ...excludes
        ];
        selectAll = this.excludeAndSelect(excludes, "html, html *");
        this.allElements = document.querySelectorAll(selectAll);
    }
    dashboardWindowOnLoad() {
        let adminDarkMode = this.isAdminDarkModeEnabled();
        if (adminDarkMode) this.enableAdminDarkMode();
        this.elementsWithRealBgColor.forEach((element)=>{
            this.applyBgColor(element);
        });
    }
    prevWindowOnLoad() {
        if (this.isActiveDarkMode()) this.enableDarkMode();
        this.elementsWithRealBgColor.forEach((element)=>{
            this.applyBgColor(element);
        });
    }
    isActiveDarkMode() {
        let darkModeActivity = false;
        let lightOnDefaultDarkMode = localStorage.getItem("lightOnDefaultDarkMode");
        let lightOnOSDarkChecked = localStorage.getItem("lightOnOSDarkChecked");
        let lightOnTimeBasedDarkMode = localStorage.getItem("lightOnTimeBasedDarkMode");
        let defaultDarkMode = false;
        if (typeof isDefaultDarkModeEnabled !== "undefined") defaultDarkMode = isDefaultDarkModeEnabled;
        let OSDarkMode = false;
        if (typeof isOSDarkModeEnabled !== "undefined") OSDarkMode = isOSDarkModeEnabled;
        let darkMode = this.isDarkModeEnabled();
        if (darkMode) darkModeActivity = true;
        else if (defaultDarkMode && !lightOnDefaultDarkMode) darkModeActivity = true;
        else if (OSDarkMode && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !lightOnOSDarkChecked) darkModeActivity = true;
        else if (this.isActiveTimeBasedDarkMode() && !lightOnTimeBasedDarkMode) darkModeActivity = true;
        return darkModeActivity;
    }
    getUserTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        let time = hours + ":" + minutes;
        return time;
    // console.log(time);
    }
    isActiveTimeBasedDarkMode() {
        let darkModeActivity = false;
        if (frontendObject.time_based_mode_active == "yes") {
            let startTime = this.createDateObject(frontendObject.time_based_mode_start_time);
            let endTime = this.createDateObject(frontendObject.time_based_mode_end_time);
            let currentTime = new Date();
            // console.log(currentTime, startTime, endTime);
            currentTime = Date.parse(currentTime) / 1000;
            startTime = Date.parse(startTime) / 1000;
            endTime = Date.parse(endTime) / 1000;
            if (startTime > endTime) {
                if (currentTime <= endTime) darkModeActivity = true;
                endTime += 86400;
            }
            if (currentTime >= startTime && currentTime <= endTime) darkModeActivity = true;
        // console.log(currentTime, startTime, endTime, darkModeActivity);
        }
        return darkModeActivity;
    }
    createDateObject(timeString) {
        // Split the time string into hour and minute components
        var parts = timeString.split(":");
        var hours = parseInt(parts[0]);
        var minutes = parseInt(parts[1]);
        // Create a new Date object with today's date and the specified time
        var now = new Date();
        var dateObject = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        return dateObject;
    }
    dashboardDarkModeSwitchEvent() {
        this.switchWrappers.forEach((s)=>{
            s?.addEventListener("click", (e)=>{
                if (e.target.classList.contains("switch-trigger")) {
                    let thisTrigger = e.target;
                    if (thisTrigger.checked) this.activateAdminDarkMode();
                    else this.deactivateAdminDarkMode();
                }
            });
        });
    }
    prevDarkModeSwitchEvent() {
        this.switchWrappers.forEach((s)=>{
            s?.addEventListener("click", (e)=>{
                if (e.target.classList.contains("switch-trigger")) {
                    // this.htmlElement.classList.toggle(this.darkEnabledClass);
                    let thisTrigger = e.target;
                    if (thisTrigger.checked) {
                        this.activateDarkMode();
                        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) localStorage.removeItem("lightOnOSDarkChecked");
                        if (this.switchWrapper.contains(thisTrigger)) {
                            if (this.menuSwitch) this.menuSwitch.checked = true;
                        } else if (this.floatingSwitch) this.floatingSwitch.checked = true;
                    // if (this.switchWrapper.contains(thisTrigger)) {
                    //   if (this.adminSwitch) this.adminSwitch.checked = true;
                    // } else {
                    //   if (this.floatingSwitch) this.floatingSwitch.checked = true;
                    // }
                    } else {
                        this.deactivateDarkMode();
                        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) localStorage.setItem("lightOnOSDarkChecked", true);
                        if (isDefaultDarkModeEnabled) localStorage.setItem("lightOnDefaultDarkMode", true);
                        // if (frontendObject.timeBasedMode) {
                        if (frontendObject.time_based_mode_active) localStorage.setItem("lightOnTimeBasedDarkMode", true);
                        if (this.switchWrapper.contains(thisTrigger)) {
                            if (this.menuSwitch) this.menuSwitch.checked = false;
                        } else if (this.floatingSwitch) this.floatingSwitch.checked = false;
                    // if (this.switchWrapper.contains(thisTrigger)) {
                    //   if (this.adminSwitch) this.adminSwitch.checked = false;
                    // } else {
                    //   if (this.floatingSwitch) this.floatingSwitch.checked = false;
                    // }
                    }
                }
            });
        });
    }
    prevHandleOSDark() {
        if (typeof isOSDarkModeEnabled !== "undefined") {
            if (isOSDarkModeEnabled) {
                let lightOnOSDarkChecked = localStorage.getItem("lightOnOSDarkChecked");
                window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
                    const newColorScheme = e.matches ? "dark" : "light";
                    if (newColorScheme === "dark") {
                        if (!lightOnOSDarkChecked) this.enableDarkMode();
                    } else this.disableDarkMode();
                });
            }
        }
    }
    prevHandleKeyShortcut() {
        if (isKeyShortDarkModeEnabled) {
            let ctrlDown = false;
            document.addEventListener("keydown", (e)=>{
                if (e.which === 17) ctrlDown = true;
            });
            document.addEventListener("keyup", (e)=>{
                if (e.which === 17) ctrlDown = false;
            });
            document.addEventListener("keydown", (event)=>{
                if (ctrlDown && event.altKey && event.which === 68) {
                    let darkMode = this.isDarkModeEnabled();
                    if (darkMode) this.deactivateDarkMode();
                    else this.activateDarkMode();
                }
            });
        }
    }
    activateDarkMode() {
        this.saveDarkModeStatus();
        this.enableDarkMode();
    }
    deactivateDarkMode() {
        this.removeDarkModeStatus();
        this.disableDarkMode();
    }
    activateAdminDarkMode() {
        this.saveAdminDarkModeStatus();
        this.enableAdminDarkMode();
    }
    deactivateAdminDarkMode() {
        this.removeAdminDarkModeStatus();
        this.disableAdminDarkMode();
    }
    saveDarkModeStatus() {
        localStorage.setItem("darklupModeEnabled", this.darkEnabledClass);
        localStorage.setItem("triggerCheked", "checked");
    }
    removeDarkModeStatus() {
        localStorage.removeItem("darklupModeEnabled");
        localStorage.removeItem("triggerCheked");
    }
    saveAdminDarkModeStatus() {
        localStorage.setItem("adminDarklupModeEnabled", this.darkEnabledClass);
        localStorage.setItem("adminTriggerChecked", "checked");
    }
    removeAdminDarkModeStatus() {
        localStorage.removeItem("adminDarklupModeEnabled");
        localStorage.removeItem("adminTriggerChecked");
    }
    enableDarkMode() {
        this.htmlElement.classList.add(this.darkEnabledClass);
        this.applyDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = true;
        });
    }
    disableDarkMode() {
        this.htmlElement.classList.remove(this.darkEnabledClass);
        this.resetDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = false;
        });
    }
    enableAdminDarkMode() {
        this.htmlElement.classList.add(this.adminDarkEnabledClass);
        this.applyDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = true;
        });
        let darkIcon = document.querySelectorAll(".admin-dark-icon");
        let lightIcon = document.querySelectorAll(".admin-light-icon");
        darkIcon.forEach((i)=>{
            i.style.display = "block";
        });
        lightIcon.forEach((i)=>{
            i.style.display = "none";
        });
    }
    disableAdminDarkMode() {
        this.htmlElement.classList.remove(this.adminDarkEnabledClass);
        this.resetDynamicStyles();
        this.switches.forEach((s)=>{
            if (s) s.checked = false;
        });
        let darkIcon = document.querySelectorAll(".admin-dark-icon");
        let lightIcon = document.querySelectorAll(".admin-light-icon");
        darkIcon.forEach((i)=>{
            i.style.display = "none";
        });
        lightIcon.forEach((i)=>{
            i.style.display = "block";
        });
    }
    // removed, may need for dashboard support
    dynamicSwitchStyle() {
        if (this.isWpAdmin) {
            let adminDarkMode = this.isAdminDarkModeEnabled();
            if (adminDarkMode) this.applyDynamicStyles();
            else this.resetDynamicStyles();
        } else {
            let darkMode = this.isDarkModeEnabled();
            if (darkMode) this.applyDynamicStyles();
            else this.resetDynamicStyles();
        }
    }
    documentOnReady() {
        // this.prevWindowOnLoad();
        document.addEventListener("DOMContentLoaded", function() {});
    }
    windowOnLoaded() {
        // Window On Load
        window.addEventListener("load", ()=>{
            // this.prevWindowOnLoad();
            this.handleDynamicContents();
        });
    }
    applyDarklupDarkModeToAll() {
        for (let element of this.allElements){
            let tag = element.tagName?.toLowerCase();
            if (tag == "a") {
                let bgColor = this.hasBgColor(element);
                if (!bgColor) element.classList.add("darkluplite--link");
            } else if (tag == "button") element.classList.add("darkluplite--btn");
            else if (tag == "img") element.classList.add("darkluplite--img");
            else if (tag == "svg") element.classList.add("darkluplite--inline-svg");
            else if (tag == "input" || tag == "textarea" || tag == "select") element.classList.add("darkluplite--input");
            else if (tag == "del") element.classList.add("darkluplite--text");
            else {
                element.classList.add("wpc--darkluplite-element");
                this.handleCommonElement(element);
            }
            this.handleBoxShadow(element);
        }
    }
    handleCommonElement(element) {
        let BgImage, bgColor;
        // For BG Image and Color
        BgImage = this.hasBgImage(element);
        if (BgImage) this.elementsWithBgImage.push(element);
        // For BG Color
        bgColor = this.hasBgColor(element);
        if (bgColor) {
            // console.log(bgColor);
            if (this.hasAlphaBgColor(element)) {
                this.elementsWithAlphaBg.push(element);
                element.classList.add("darkluplite--alpha-bg");
            } else this.elementsWithRealBgColor.push(element);
        }
        /************************************************************ */ // For Text
        if (this.hasOwnText(element)) {
            this.elementsWithText.push(element);
            element.classList.add("darkluplite--text");
        }
        let sudoElements = [
            "after",
            "before"
        ];
        sudoElements.forEach((e)=>{
            let sudoStyle = window.getComputedStyle(element, `:${e}`);
            if (sudoStyle.content !== "none") element.classList.add(`darkluplite--text-${e}`);
        });
        /************************************************************ */ // For border Color
        if (this.hasBorderWidth(element)) {
            this.elementsWithRealBorder.push(element);
            element.classList.add("darkluplite--border");
        }
    }
    handleBoxShadow(element) {
        let boxShadow = getComputedStyle(element).boxShadow;
        if (boxShadow !== "none") {
            this.elementsWithBoxShadow.push(element);
            element.classList.add("wpc--darkluplite-box-shadow");
            let bgColor = this.hasBgColor(element);
            if (!bgColor) element.classList.add("wpc--darkluplite-non-bg-box-shadow");
        }
    }
    applyBoxShadow(e) {
        let boxShadow = getComputedStyle(e).boxShadow;
        let newShadow = this.replaceRgbColorValue(boxShadow);
        if (newShadow) {
            e.dataset.boxshadow = boxShadow;
            e.style.setProperty("box-shadow", newShadow, "important");
        }
    }
    handleOsDarkMode() {
        if (isOSDarkModeEnabled) {
            let WpcFrontEndSwitcherClicked = localStorage.getItem("WpcFrontEndSwitcherClicked");
            if (!WpcFrontEndSwitcherClicked) window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
                const newColorScheme = e.matches ? "dark" : "light";
                if (newColorScheme === "dark") this.applyDynamicStyles();
                else this.resetDynamicStyles();
            });
        }
    }
    applyDarkModeToDynamicElement(element) {
        let tag = element.tagName?.toLowerCase();
        if (tag == "a") element.classList.add("darkluplite--link");
        else if (tag == "button") element.classList.add("darkluplite--btn");
        else if (tag == "img") element.classList.add("darkluplite--img");
        else if (tag == "svg") element.classList.add("darkluplite--inline-svg");
        else if (tag == "input" || tag == "textarea" || tag == "select") element.classList.add("darkluplite--input");
        else if (tag == "del") element.classList.add("darkluplite--text");
        else {
            if (this.hasOwnText(element)) element.classList.add("darkluplite--text");
            element.classList.add("wpc--darkluplite--observed");
        }
    }
    getElementArea(element) {
        let area = 0;
        let dimensions = element.getBoundingClientRect();
        if (dimensions) area = dimensions.width * dimensions.height;
        return area;
    }
    activateSwitches() {
        if (this.isWpAdmin) {
            let adminDarkMode = this.isAdminDarkModeEnabled();
            if (adminDarkMode) this.switches.forEach((s)=>{
                if (s) s.checked = true;
            });
        } else if (this.isActiveDarkMode()) this.switches.forEach((s)=>{
            if (s) s.checked = true;
        });
    }
    getElementWidth(element) {
        // this.activateSwitches();
        this.htmlElement.style.display = "block";
        let width = 0;
        let dimensions = element?.getBoundingClientRect();
        if (dimensions) width = dimensions.width;
        this.htmlElement.style.display = "none";
        // console.log(width);
        return width;
    }
    getParentBg(element) {
        let parentBg = "primary";
        const closeBg = element.closest(".darkluplite--bg-applied");
        if (closeBg) {
            if (closeBg.classList.contains("darkluplite--bg")) parentBg = "primary";
            else if (closeBg.classList.contains("darkluplite--secondary-bg")) parentBg = "secondary";
            else if (closeBg.classList.contains("darkluplite--tertiary-bg")) parentBg = "tertiary";
        }
        return parentBg;
    }
    parentHasTertiary(element) {
        let hasTertiary = false;
        let closeBg = element.closest(".darkluplite--bg-applied");
        if (closeBg) {
            if (closeBg.classList.contains("darkluplite--tertiary-bg")) hasTertiary = true;
        }
        return hasTertiary;
    }
    hasBorderWidth(e) {
        let borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth;
        let style = window.getComputedStyle(e);
        borderTopWidth = parseFloat(style.getPropertyValue("border-top-width"));
        borderRightWidth = parseFloat(style.getPropertyValue("border-right-width"));
        borderBottomWidth = parseFloat(style.getPropertyValue("border-bottom-width"));
        borderLeftWidth = parseFloat(style.getPropertyValue("border-left-width"));
        if (borderTopWidth > 0 || borderRightWidth > 0 || borderBottomWidth > 0 || borderLeftWidth > 0) return true;
        else return false;
    }
    hasBgColor(e) {
        let style = window.getComputedStyle(e);
        let bgColor = style.getPropertyValue("background-color");
        let isRealBgColor = bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent" && bgColor !== "inherit";
        if (isRealBgColor) {
            if (bgColor.includes("rgba")) {
                let alphaValue;
                alphaValue = this.getRgbaAlpha(bgColor);
                if (alphaValue && alphaValue == 0) return false;
            }
            return bgColor;
        } else return false;
    }
    hasOwnText(e) {
        let txtVal;
        txtVal = e.childNodes[0]?.nodeValue?.trim();
        if (!txtVal) txtVal = e.childNodes[e.childNodes.length - 1]?.nodeValue?.trim();
        if (txtVal !== "" && typeof txtVal !== "undefined" && txtVal !== "inherit") return true;
        else return false;
    }
    getRgbaAlpha(color) {
        let alphaValue = false;
        let rgbaMatch = color.match(/rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3}),? ?([\d\.]*)?\)/);
        if (rgbaMatch) alphaValue = rgbaMatch[4] ? rgbaMatch[4] : false;
        return alphaValue;
    }
    hasAlphaBgColor(e) {
        let style = window.getComputedStyle(e);
        let bgColor = style.getPropertyValue("background-color");
        let rgbaMatch = bgColor.match(/rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3}),? ?([\d\.]*)?\)/);
        let alphaValue = false;
        if (rgbaMatch) alphaValue = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : false;
        return alphaValue;
    }
    OpApplyBgColor(e) {
        let elementWidth = this.getElementWidth(e);
        let bgColor = this.hasBgColor(e);
        if (bgColor) {
            let alphaValue = this.hasAlphaBgColor(e);
            if (alphaValue) e.classList.add("darkluplite--alpha-bg");
            else if (elementWidth == this.bodyWidth) {
                if (bgColor == this.primaryBg) e.classList.add("darkluplite--bg");
                else e.classList.add("darkluplite--secondary-bg");
                e.classList.add("darkluplite--bg-applied");
            } else if (this.bodyWidth > elementWidth && elementWidth > 0) {
                if (this.parentHasTertiary(e)) e.classList.add("darkluplite--secondary-bg");
                else e.classList.add("darkluplite--tertiary-bg");
                e.classList.add("darkluplite--bg-applied");
            } else {
                e.classList.add("darkluplite--bg");
                e.classList.add("darkluplite--bg-applied");
            }
        }
    }
    getBgColor(e) {
        let style = window.getComputedStyle(e);
        let appliedBgColor = style.getPropertyValue("background-color");
        return appliedBgColor;
    }
    applyBgColor(e) {
        let elementWidth = this.getElementWidth(e);
        // console.log(elementWidth);
        let bgColor = this.hasBgColor(e);
        if (bgColor) {
            let alphaValue = this.hasAlphaBgColor(e);
            if (alphaValue) e.classList.add("darkluplite--alpha-bg");
            else if (elementWidth == this.bodyWidth) {
                if (bgColor == this.primaryBg) e.classList.add("darkluplite--bg");
                else e.classList.add("darkluplite--secondary-bg");
                e.classList.add("darkluplite--bg-applied");
            } else if (this.bodyWidth > elementWidth && elementWidth > 0) {
                let parentBg = this.getParentBg(e);
                if (parentBg == "primary" || parentBg == "secondary") e.classList.add("darkluplite--tertiary-bg");
                else // e.classList.add("darkluplite--secondary-bg");
                e.classList.add("darkluplite--bg");
                e.classList.add("darkluplite--bg-applied");
            } else {
                // e.classList.add("darkluplite--bg");
                e.classList.add("darkluplite--bg-applied");
                e.classList.add("darkluplite--tertiary-bg");
            }
        }
    }
    applyAlphaBgColor(e) {
        let alphaValue = this.hasAlphaBgColor(e);
        if (alphaValue) {
            let newBg = DarklupJs.secondary_bg;
            let style = window.getComputedStyle(e);
            let bgColor = style.getPropertyValue("background-color");
            e.dataset.alphabg = bgColor;
            let alphaBg = newBg.replace(")", `, ${alphaValue})`).replace("rgb", "rgba");
            e.style.backgroundColor = alphaBg;
        }
    }
    hasBgImage(e) {
        // let bgImage = getComputedStyle(e).getPropertyValue("background-image");
        let bgImage = getComputedStyle(e).backgroundImage;
        if (bgImage !== "none" && (bgImage.includes("linear-gradient") || bgImage.includes("url"))) return bgImage;
        else return false;
    }
    applyBgImage(element) {
        let BgImage = this.hasBgImage(element);
        if (BgImage) {
            if (BgImage.includes("linear-gradient") && BgImage.includes("url")) element.classList.add("darkluplite-bg-gradient--image");
            else if (BgImage.includes("url")) {
                element.classList.add("darkluplite-bg--image");
                if (!this.alreadyHasOverlay(element)) {
                    if (applyBgOverlay) {
                        let imgGrad = `linear-gradient(rgba(0, 0, 0, ${DarklupJs.bg_image_dark_opacity}), rgba(0, 0, 0,${DarklupJs.bg_image_dark_opacity}))`;
                        let imgOverlay = `${imgGrad}, ${BgImage}`;
                        element.style.setProperty("background-image", imgOverlay);
                    }
                }
                this.addDarkenClassToChild(element);
            } else if (BgImage.includes("linear-gradient")) {
                element.classList.add("darkluplite-bg-gradient");
                this.applyGradientBgImage(element);
                this.addDarkenClassToChild(element);
            }
            element.dataset.lightbg = BgImage;
        }
    }
    alreadyHasOverlay(element) {
        let hasOverlay = false;
        if (element.classList.contains("darkluplite-under-darken-bg")) hasOverlay = true;
        let overlay = element.querySelector(":scope > .elementor-background-overlay");
        if (overlay) {
            let overlayBgImage = this.hasBgImage(overlay);
            let overlayBgColor = this.hasBgColor(overlay);
            if (overlayBgImage) hasOverlay = true;
            else if (overlayBgColor) hasOverlay = true;
        }
        return hasOverlay;
    }
    replaceRgbColorValue(currentStr) {
        let newColor1 = DarklupJs.primary_bg;
        let newColor2 = DarklupJs.secondary_bg;
        let newColor3 = DarklupJs.tertiary_bg;
        let newColors = [
            newColor1,
            newColor2,
            newColor3
        ];
        let newStr = "";
        const colorRegexMatch = /rgba?\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*(,\s*[0-9\.]+)?\)/g;
        const rgbaMatches = currentStr.match(colorRegexMatch);
        newColors.forEach((color, i)=>{
            if (!rgbaMatches[i]) return;
            if (color.includes("rgba")) {
                if (rgbaMatches[i]) {
                    newStr = currentStr?.replace(rgbaMatches[i], color);
                    currentStr = newStr;
                }
            } else if (color.includes("rgb") && rgbaMatches[i].includes("rgb") && !rgbaMatches[i].includes("rgba")) {
                if (rgbaMatches[i]) {
                    newStr = currentStr?.replace(rgbaMatches[i], color);
                    currentStr = newStr;
                }
            } else if (color.includes("rgb") && rgbaMatches[i].includes("rgba")) {
                let lastCommaPosition = rgbaMatches[i].lastIndexOf(",");
                let alphaStr = rgbaMatches[i].slice(lastCommaPosition);
                color = color.replace("rgb(", "rgba(").replace(")", alphaStr);
                newStr = currentStr?.replace(rgbaMatches[i], color);
                currentStr = newStr;
            }
        });
        return newStr;
    // console.log(newStr);
    }
    applyGradientBgImage(element) {
        let currentBg = getComputedStyle(element).getPropertyValue("background-image");
        // console.log(`Current Gradient ${currentBg}`);
        if (currentBg !== "none" && currentBg.includes("linear-gradient")) {
            // let newColors = ['rgba(23, 24, 25)', 'rgba(26, 27, 28)'];
            // let newColors = ['rgba(23, 24, 25, 0.5)', 'rgba(26, 27, 28, 0.6)'];
            let newColor1 = DarklupJs.primary_bg;
            let newColor2 = DarklupJs.secondary_bg;
            let newColors = [
                newColor1,
                newColor2
            ];
            let newGradient;
            newGradient = `linear-gradient(${DarklupJs.primary_bg}, ${DarklupJs.secondary_bg})`;
            // newGradient = `linear-gradient(${DarklupJs.primary_bg_rgba}, ${DarklupJs.secondary_bg_rgba})`;
            const colorRegexMatch = /rgba?\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*(,\s*[0-9\.]+)?\)/g;
            const rgbaMatches = currentBg.match(colorRegexMatch);
            newColors.forEach((color, i)=>{
                if (color.includes("rgba")) {
                    if (rgbaMatches[i]) {
                        newGradient = currentBg?.replace(rgbaMatches[i], color);
                        currentBg = newGradient;
                    }
                } else if (color.includes("rgb") && rgbaMatches[i].includes("rgb") && !rgbaMatches[i].includes("rgba")) {
                    if (rgbaMatches[i]) {
                        newGradient = currentBg?.replace(rgbaMatches[i], color);
                        currentBg = newGradient;
                    }
                } else if (color.includes("rgb") && rgbaMatches[i].includes("rgba")) {
                    let lastCommaPosition = rgbaMatches[i].lastIndexOf(",");
                    let alphaStr = rgbaMatches[i].slice(lastCommaPosition);
                    color = color.replace("rgb(", "rgba(").replace(")", alphaStr);
                    newGradient = currentBg?.replace(rgbaMatches[i], color);
                    currentBg = newGradient;
                }
            });
            if (rgbaMatches) {
                if (newGradient) element.style.backgroundImage = newGradient;
            }
        // console.log(`newGradient ${newGradient}`);
        }
    }
    addDarkenClassToChild(element) {
        let darkenChild = element.querySelectorAll(`*`);
        if (darkenChild) darkenChild.forEach((e)=>{
            e.classList.add("darkluplite-under-darken-bg");
        });
    }
    resetBgImage(e) {
        e.style.backgroundImage = e.dataset.lightbg;
    }
    resetAlphaBgColor(e) {
        e.style.backgroundColor = e.dataset.alphabg;
    }
    resetBoxShadow(e) {
        e.style.boxShadow = e.dataset.boxshadow;
    }
    excludeAndSelect(excludes = [], selector = "html *") {
        excludes.forEach(function(exclude) {
            selector += `:not(${exclude})`;
        });
        return selector;
    }
    isDarkModeEnabled() {
        let darkMode = localStorage.getItem("darklupModeEnabled");
        let getTriggerChecked = localStorage.getItem("triggerCheked");
        if (darkMode && getTriggerChecked) return true;
        else return false;
    }
    isAdminDarkModeEnabled() {
        let darkMode = localStorage.getItem("adminDarklupModeEnabled");
        let getTriggerChecked = localStorage.getItem("adminTriggerChecked");
        if (darkMode && getTriggerChecked) return true;
        else return false;
    }
    applyDynamicStyles() {
        this.elementsWithBgImage?.forEach((element)=>this.applyBgImage(element));
        this.elementsWithAlphaBg?.forEach((element)=>this.applyAlphaBgColor(element));
        this.elementsWithBoxShadow?.forEach((element)=>this.applyBoxShadow(element));
    }
    resetDynamicStyles() {
        this.elementsWithBgImage?.forEach((element)=>this.resetBgImage(element));
        this.elementsWithAlphaBg?.forEach((element)=>this.resetAlphaBgColor(element));
        this.elementsWithBoxShadow?.forEach((element)=>this.resetBoxShadow(element));
    }
    // Initializes the mutation observer for dynamically added elements
    handleDynamicContents() {
        const observerConfig = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        const parentElement = document.querySelector("body");
        const newObserver = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                mutation.addedNodes.forEach((node)=>{
                    if (!(node instanceof HTMLElement)) return;
                    node.classList?.add("wpc-darklup-observer--node");
                    this.applyDarkModeToDynamicElement(node);
                    const childNodes = node.querySelectorAll("*");
                    childNodes.forEach((childNode)=>{
                        if (childNode.nodeType === Node.ELEMENT_NODE) this.applyDarkModeToDynamicElement(childNode);
                    });
                });
            });
        });
        newObserver.observe(parentElement.parentNode, observerConfig);
    }
}
// Document on Ready
document.addEventListener("DOMContentLoaded", function() {
    let darkluplite = new Darkluplite();
});
// Window On Load
window.addEventListener("load", function() {
// let darkluplite = new Darkluplite();
}); // console.log(`Hi Mahbub, your darkup calculation is complete`);

},{}]},["dPZjE","jEUkE"], "jEUkE", "parcelRequire633e")

//# sourceMappingURL=presets.js.map
