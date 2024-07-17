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
})({"aHFy6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
/* 

// INTRODUCTION TO TYPESCRIPT

// install typescript: npm install -g typescript


let age = 30;
console.log(age);
// even if this look like javascript, you won't be able to change a number into a string later.
// to run it you need to complite it first: tsc index.ts
// this will create a new file index.js

// you can your console.log in the terminal with: node index.js

let age2: number = 30;
age2 = '30'; // this will give you an error

let firstName: string = 'Mario';
let isFictional: boolean

age = 31
firstName = 'Luigi'
isFictional = true

// you can also use type inference

let planet = 'Earth'
let moon = 1
let isLarge = false

// in all this cases you see directly the type of the variable, just hovering over it

planet = 'Mars'
moon = 2
isLarge = true

// null and undefined
// when we give something a value of null we're intentionally saying that it's empty
// undefined is something unintentionally empty

let something: null 
let anotherThing: undefined

something = 10 // this will give you an error, it can be only null
anotherThing = 10 // this will give you an error, it can be only undefined

// AUTOMATE COMPILER IN TYPESCRIPT & WATCH FOR CHANGES

// install typescript: npm install -g typescript
// run tsc --init to create a tsconfig.json file
// look for "rootDir" & "outDir" and uncomment them. this specify where the compiler should look for the files and where to put the compiled files
// change in this way -> "rootDir": "./src"
// and this way -> "outDir": "./dist"
// then create a new folder src and move index.ts inside it
// create a new folder dist
// run tsc -w to watch for changes in the files and compile them automatically
// look for "rootDir" & "outDir" and uncomment them. this specify where the compiler should look for the files and where to put the compiled files
// change in this way -> "rootDir": "./src"
// and this way -> "outDir": "./dist"
// then create a new folder src and move index.ts inside it
// create a new folder dist
// run tsc -w to watch for changes in the files and compile them automatically
// don't close the terminal, name it and open a new one
// run node --watch dist/index.js to watch for changes in the compiled file and run it automatically in the terminal -> everything you console.log will be printed in the terminal
// don't close the terminal, name it and open a new one


// -----------------------------------------------------------------------------------------------------------------

// ARRAYS

let names: string[] = ['Mario', 'Luigi', 'Peach'] // if you try to add a number you will get an error
let ages: number[] = [30, 31, 32] // if you try to add a string you will get an error

names.push('Toad') // this will work
ages.push('33') // this will give you an error
ages.push(33) // this will work

let fruits = ['Apple', 'Banana', 'Orange'] // this will be an array of strings
fruits.push(10) // this will give you an error
fruits.push('peaches') // this will work

const f = fruits[3] // this will be a string

let things = [1, true, 'hello'] // this will be an array of any type you inserted so it can be a number, a boolean or a string

const t = things[2] // the value will be a string, however you can change it to a number or a boolean

//OBJECTS

let user: {firstName: string, age: number, id: number} = {firstName: 'Mario', age: 30, id: 1} // this will be an object with firstName, age and id as properties
// if you try to add a property that is not in the object you will get an error -> isFictional: true

user.firstName = 'Luigi' // this will work
user.email = 'test@gmail.com' // this will give you an error, because email is not a property of the object
user.id = 2 // this will work

let person = {name: 'Luigi', score: 35}
person.name = true // this won't work because name is a string
person.score = '35' // this won't work because score is a number
person.id = 1 // this won't work because id is not a property of the object

const score = person.score // this will be a number



// -----------------------------------------------------------------------------------------------------------------

// FUNCTIONS

function addTwoNumbers(a, b) {
    return a + b
} // as you can see you get the "a" and "b" highlighted because you have to specify the type of the parameters


function addTwoNumbers2(a: number, b: number) {
    return a + b
} // this will work

const subtrcatTwoNumbers = (a: number, b: number) :number => {
    return a - b
} // this will work

 
console.log(addTwoNumbers2(10, 20))

console.log(subtrcatTwoNumbers(10, 20))

function addAllNumbers(items: number[]) {
    const total = items.reduce((a, b) => a + b, 0)
    console.log(total)
}

addAllNumbers([10, 20, 30]) 
//:void is a type annotation used to specify that a function does not return any value.


// FUNCTION SIGNATURES

type Calculator = (numOne: number, numTwo: number) => number // this is a function signature
// when you create function signatures you can have as many arguments as you want.

function addTwoNumbers(a: number, b: number): number {
    return a + b
}

function multiplyTwoNumbers(a: number, b: number): number {
    return a * b
}

function squareNumber(num: number): number {
    return num * num
}

function joinTwoNumbers(a: number, b: number){
    return `${a}${b}` // this will be a string
}

let calcs: Calculator[] = []

calcs.push(addTwoNumbers)
calcs.push(multiplyTwoNumbers)
calcs.push(squareNumber)
calcs.push(joinTwoNumbers) // this will give you an error because joinTwoNumbers doesn't match the function signature

// FUNCTION SIGNATURES ON INTERFACES

interface HasArea {
    name: string
    calcArea: (a: number) => number
}

const shapeOne: HasArea = {
name : 'square',
calcArea:(l:number) => {
    return l *1
    }
}

console.log(shapeOne.calcArea(10))





// -----------------------------------------------------------------------------------------------------------------

//ANY TYPE

// this can be any type and change.

let age:any = 30
age = '30'
age = true

let title // this will be automatically any type

title = 10
title = '10'

let things :any [] = ['hello', 10, true]  // this will be an array of any type

function addTogether(value:any):any {
    return value + value
}

const resultOne = addTogether(10) // this will be any type
//expect -> resultOne = 20

// this functionality can be really useful when you're migrating from javascript to typescript and you don't want to specify the type of every variable
// because you won't have to change the type of every variable in your code

// -----------------------------------------------------------------------------------------------------------------

//TUPLES

//tuples is like an array but you have specify the type of every element and follow the order

let person: [string, number, boolean] = ['Mario', 30, true]
// if you try to change the type of one of the elements you will get an error

let hsla: [number,string,string,number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [10, 20]

function useCoords(): [number, number] {

    const lat = 100
    const long = 50

    return  [lat, long]
}

const [lat, long] = useCoords() // this will be a number

let user: [name: string,age: number]

user = ['Mario', 30]
console.log(user) 

// -----------------------------------------------------------------------------------------------------------------

//INTERFACES
// interfaces are used to define the structure of an object
// with interfaces you have to named them with an uppercase letter

interface Author {
    firstName: string,
    lastName: string,
    age: number,
    isFictional: boolean
}

const authorOne: Author = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 30,
    isFictional: true
}

interface Post{
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'My first post',
    body: 'This is my first post',
    tags: ['first', 'post'],
    create_at: new Date(),
    author: authorOne
}


function createPost(post: Post):void {
    console.log(`created post ${post.title} by ${post.author.firstName} ${post.author.lastName}`)
}

createPost(newPost)

let posts: Post[] = []

posts.push(newPost)



//REAUSABLE INTERFACES

interface hasQuantity{
    quantity: number
}

const something: hasQuantity = { quantity: 10 }

function printQuantity(item: hasQuantity):void {
    console.log(item.quantity)
}

const book = {
    title: 'Harry Potter',
    quantity: 20
}

printQuantity(book) // this will work

const person = {
    name: 'Mario',
    age: 30
}

printQuantity(person) // this will give you an error because person doesn't have a quantity property

printQuantity({quantity: 15}) // this will work
printQuantity({quantity: 15, name: 'Pep') // this won't work, be careful!




// Extending interfaces

interface hasformatter{
    format(): string
}

interface bill extends hasformatter{
    id: string|number,
    amount: number,
    server: string,
}

const user = {

    id: 1,
    format(): string {
        return `user ${this.id}`
    
    }
}

const bill = {
    id: 1,
    amount: 200,
    server: 'Mario',
    format(): string {
        return `Bill ${this.id} is ${this.amount} and was served by ${this.server}`
    }
}

function printFormatted(item: hasformatter): void {
    console.log(item.format())
}

printFormatted(user)
printFormatted(bill)






// -----------------------------------------------------------------------------------------------------------------

//TYPE ALIAS
// type alias are used to create a new name for a type

type Rgb = [number, number, number] 

function getRandColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRandColor()
const colorTwo = getRandColor()
console.log(colorOne, colorTwo)

type User = {
    name: string,
    score: number,
    age: number,
}

const userOne: User = {
    name: 'Mario',
    score: 75,
    age: 45,
}

function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score} and is ${user.age} years old`)
}

formatUser(userOne)
formatUser({name: 'Luigi', score: 80, age: 40})



// EXTENDING TYPE ALIASES

type Person = {
    id: string | number,
    name: string,
}

type User = Person & {
    email: string,
}

const personOne = {
    id: 1,
    name: 'Mario',
}

const personTwo :User = {
    id: '2',
    name: 'Luigi',
    email: 'lui@gmail.com'
}

const personThree = {
    email: 'ttt@gmail.com'
}

function printUser (user: User){
    console.log(user.id, user.name, user.email)
}

printUser(personOne) // this will give you an error because personOne doesn't have an email property
printUser(personTwo) // this will work
printUser(personThree) // this will give you an error because personThree doesn't have an id and name property


// -----------------------------------------------------------------------------------------------------------------

//UNIONS TYPES

let someid: number | string // this will be a number or a string

someid = 10
someid = '10'

let email: string | null    // this will be a string or null

email = null
email = 'example.gmail.com'

type Id = number | string

let anotherId : Id

anotherId = 105532
anotherId = '10fajkgjl'


function swapIdType1(id: Id) :Id {
   
    // can only use props and methods common to both number strings types
    // parseInd(id) -> not allowed


}

// TYPE GUARDS
// type guards are used to check the type of a variable

function swapIdType(id: Id) :Id {
    if(typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const idOne = swapIdType(1099)
const idTwo = swapIdType('1055')

console.log(idOne, idTwo)



// -----------------------------------------------------------------------------------------------------------------

// CLASSES

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

 

class Pizza {
	constructor(title: string, price: number) {
		this.title = title
		this.price = price
	}

	title: string
	price: number
	base: Base = 'classic'
	toppings: string[] = []

	addTopping(topping: string): void {
		this.toppings.push(topping)
	}
	removeTopping(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping)
	}
	selectBase(b: Base): void {
		this.base = b
	}
}


class Pizza {
	constructor(private title: string, private price: number) {}
    // a constrctur is a function that runs when you create a new instance of a class

	// title: string
	// price: number
	private base: Base = 'classic'
	private toppings: string[] = [] 
    // this will be private and you won't be able to access it from outside the class
    // but you can change it with the function below

    // public , instead is the default access modifier

	addTopping(topping: string): void {
		this.toppings.push(topping)
	}
	removeTopping(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping)
	}
	selectBase(b: Base): void {
		this.base = b
	}
}


// INHERITANCE

interface hasFormatter {
    format(): string
}

class MenuItem implements hasFormatter {
	constructor(private title: string, private price: number) {}

	get details(): string {
		return `${this.title} - £${this.price}`
	}

	format() {
		return `This menu item is called ${this.title} and is £${this.price}`
	}
}

class Pizza extends MenuItem {
	constructor(title: string, price: number) {
		super(title, price)
	} // by using extends you can inherit the properties and methods of another class

	private base: Base = 'classic'
	private toppings: string[] = []

	addTopping(topping: string): void {
		this.toppings.push(topping)
	}
	removeTopping(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping)
	}
	selectBase(b: Base): void {
		this.base = b
	}
}


const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)

function printFormatted(val: hasFormatter): void {
	console.log(val.format())
}

printFormatted(pizza)

// Abstract classes

// is a class that can have properties and methods and can be herited from other classes, that can never be used
// to make a new instance of that class itself

// CSV Writer project -> take objects and turn them into a downloadable csv file


// -----------------------------------------------------------------------------------------------------------------

// GENERICS

//generics are used to create reusable components wheater it is a function or a class.
// they allow us to create components that can work over a variety of types rather than a single one

function logAndReturnString(val: string): string {
	console.log(val)
	return val
}
function logAndReturnNumber(val: number): number {
	console.log(val)
	return val
}
function logAndReturnBoolean(val: boolean): boolean {
	console.log(val)
	return val
}

function logAndReturnValue<T>(val: T): T {
	console.log(val)
	return val
} // this is a generic function
// T stands for type, it represents the type of the value that we pass in
// you can call it whatever you want, but T is the convention

const resultOne = logAndReturnValue<string>('mario')
const resultTwo = logAndReturnValue<number>(25)

// example 2

function getRandomArrayValue<T>(values: T[]): T {
	const i = Math.floor(Math.random() * values.length)

	return values[i]
}

interface User {
	name: string
	score: number
}

const users: User[] = [
	{ name: 'mario', score: 100 },
	{ name: 'peach', score: 150 },
	{ name: 'wario', score: 75 },
	{ name: 'yoshi', score: 90 },
]

const randomUser = getRandomArrayValue<User>(users)
console.log(randomUser.name)



// -----------------------------------------------------------------------------------------------------------------

//-------------------
// Intersection Type
//-------------------

type Person = {
	firstName: string
	id: number
}

type User = Person & {
	email: string
}

// example with generic function

function addIdToValue<T>(val: T): T & HasID { // this is an intersection type
	const id = Math.random() 

	return { ...val, id }
}

interface Post {
	title: string
	thumbsUp: number
}

interface HasID {
	id: number
}

const post = addIdToValue<Post>({ title: 'Marmite Rules', thumbsUp: 250 })
console.log(post.id, post.title, post.thumbsUp)

*/ 
},{}]},["aHFy6","h7u1C"], "h7u1C", "parcelRequired402")

//# sourceMappingURL=index.b71e74eb.js.map
