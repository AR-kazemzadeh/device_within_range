// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hlItI":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "af83c2965d140dba";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8fvzf":[function(require,module,exports) {
var _bleuio = require("bleuio");
document.getElementById('connect').addEventListener('click', function() {
    _bleuio.at_connect();
});
/*
Functions to converts rssi to distance 
read more at 
https://iotandelectronics.wordpress.com/2016/10/07/how-to-calculate-distance-from-the-rssi-value-of-the-ble-beacon/
*/ const getDistance = (rssi)=>{
    let n = 2;
    let mp = -69;
    let theDistance = 10 ** ((mp - rssi) / (10 * n));
    return theDistance;
};
document.getElementById('scan').addEventListener('click', function() {
    var range = document.getElementById("range").value;
    var element = document.getElementById("scanning");
    element.classList.remove("d-none");
    _bleuio.at_central().then((data)=>{
        _bleuio.at_gapscan(4, false).then((dev)=>{
            //convert array string to array of object with key value
            const formated = dev.map((item)=>{
                const [id, dev, devid, none, rssi, rssival, devname] = item.split(' ');
                return {
                    id,
                    dev,
                    devid,
                    none,
                    rssi,
                    rssival,
                    devname
                };
            });
            //array list unique
            let uniqueArr = formated.filter((y)=>y.devname != undefined
            );
            //sort based on rssi value
            uniqueArr.sort((a, b)=>a.rssival > b.rssival && 1 || -1
            );
            let withDistance = uniqueArr.map((r)=>{
                if (getDistance(r.rssival) <= range) r.distance = getDistance(r.rssival).toFixed(2) + ' meter';
                return r;
            }).filter((k)=>{
                return k.distance !== undefined;
            });
            //generate output
            let mytable = `<h2>Device List</h2>
      <table class='table table-striped table-bordered'>
      <tr>
      <th></th>
      <th>Device</th>
      <th>RSSI</th>
      <th>Distance</th>
      </tr>`;
            withDistance.map((j, index)=>{
                mytable += "<tr><td>" + parseInt(index + 1) + "</td><td>" + j.devid + " - " + j.devname + "</td><td>" + j.rssival + "</td><td>" + j.distance + "</td></tr>";
            });
            mytable += "</table>";
            document.getElementById("deviceList").innerHTML = mytable;
            document.getElementById("numDev").innerHTML = withDistance.length + ' Devices Found within ' + range + ' meter';
            element.classList.add("d-none");
        });
    });
});

},{"bleuio":"iW7rf"}],"iW7rf":[function(require,module,exports) {
let port, reader, inputDone, outputDone, inputStream, outputStream, arr = [];
async function connect() {
    port = await navigator.serial.requestPort(), await port.open({
        baudRate: 9600
    });
    const t = new TextEncoderStream();
    outputDone = t.readable.pipeTo(port.writable), outputStream = t.writable;
    let e = new TextDecoderStream();
    inputDone = port.readable.pipeTo(e.writable), inputStream = e.readable.pipeThrough(new TransformStream(new LineBreakTransformer())), reader = inputStream.getReader();
}
async function disconnect() {
    return reader && (await reader.cancel(), await inputDone.catch(()=>{
    }), reader = null, inputDone = null), outputStream && (await outputStream.getWriter().close(), await outputDone, outputStream = null, outputDone = null), await port.close(), port = null, "Dongle Disconnected!";
}
function writeCmd(t) {
    const e = outputStream.getWriter();
    e.write(t), "" !== t && e.write("\r"), e.releaseLock();
}
/**
 * @at_connect
 * Connects Device
*/ exports.at_connect = async function() {
    return await connect(), "device connected";
}, exports.at_disconnect = async function() {
    return await disconnect(), "device disconnected";
}, exports.ati = ()=>port ? (writeCmd("ATI"), readLoop("ati")) : "Device not connected."
, exports.ate = function(status) {
    return writeCmd("ATE" + status), readLoop("ate");
}, exports.at_central = function() {
    return writeCmd("AT+CENTRAL"), readLoop("at_central");
}, exports.at_peripheral = function() {
    return writeCmd("AT+PERIPHERAL"), readLoop("at_peripheral");
}, exports.atr = function() {
    return writeCmd("ATR"), readLoop("atr");
}, exports.at_advstart = function() {
    return writeCmd("AT+ADVSTART"), readLoop("at_advstart");
}, exports.at_advstop = function() {
    return writeCmd("AT+ADVSTOP"), readLoop("at_advstop");
}, exports.at_advdata = (t)=>(writeCmd(t ? "AT+ADVDATA=" + t : "AT+ADVDATA"), readLoop("at_advdata"))
, exports.at_advdatai = function(t) {
    return writeCmd("AT+ADVDATAI=" + t), readLoop("at_advdatai");
}, exports.at_advresp = function(t) {
    return writeCmd(t ? "AT+ADVRESP=" + t : "AT+ADVRESP"), readLoop("at_advresp");
}, exports.at_cancelconnect = function() {
    return writeCmd("AT+CANCELCONNECT"), readLoop("at_cancelconnect");
}, exports.at_client = function() {
    return writeCmd("AT+CLIENT"), readLoop("at_client");
}, exports.at_dual = function() {
    return writeCmd("AT+DUAL"), readLoop("at_dual");
}, exports.at_enterpasskey = function(t = 123456) {
    return writeCmd("AT+ENTERPASSKEY=" + t), readLoop("at_enterpasskey");
}, exports.at_numcompa = function(t) {
    return writeCmd(t ? "AT+NUMCOMPA=" + t : "AT+NUMCOMPA"), readLoop("at_numcompa");
}, exports.at_gapiocap = function(t = 1) {
    return writeCmd("AT+GAPIOCAP=" + t), readLoop("at_gapiocap");
}, exports.at_gappair = function(t) {
    return writeCmd(t ? "AT+GAPPAIR=" + t : "AT+GAPPAIR"), readLoop("at_gappair");
}, exports.at_gapunpair = function(t) {
    return writeCmd(t ? "AT+GAPUNPAIR=" + t : "AT+GAPUNPAIR"), readLoop("at_gapunpair");
}, exports.at_gapscan = function(t = 1, e = true) {
    return writeCmd("AT+GAPSCAN=" + t), readLoop("at_gapscan", e);
}, exports.at_seclvl = function(t) {
    return writeCmd(t ? "AT+SECLVL=" + t : "AT+SECLVL"), readLoop("at_seclvl");
}, exports.at_setpasskey = function(t) {
    return writeCmd(t ? "AT+SETPASSKEY=" + t : "AT+SETPASSKEY"), readLoop("at_setpasskey");
}, exports.at_findscandata = function(t = 1, e = 5) {
    return writeCmd("AT+FINDSCANDATA=" + t), readLoop("at_findscandata", e);
}, exports.at_gapconnect = function(t) {
    return writeCmd("AT+GAPCONNECT=" + t), readLoop("at_gapconnect");
}, exports.at_gapdisconnect = function() {
    return writeCmd("AT+GAPDISCONNECT"), readLoop("at_gapdisconnect");
}, exports.at_getconn = async function() {
    return writeCmd("AT+GETCONN"), readLoop("at_getconn");
}, exports.at_getservices = function() {
    return writeCmd("AT+GETSERVICES"), readLoop("at_getservices");
}, exports.at_scantarget = function(t, e = 1) {
    return writeCmd("AT+SCANTARGET=" + t), readLoop("at_scantarget", e + 2);
}, exports.at_server = function() {
    return writeCmd("AT+SERVER"), readLoop("at_server");
}, exports.at_setnoti = function(t) {
    return writeCmd("AT+SETNOTI=" + t), readLoop("at_setnoti");
}, exports.at_spssend = function(t) {
    return writeCmd(t ? "AT+SPSSEND=" + t : "AT+SPSSEND"), readLoop("at_spssend");
}, exports.at_targetconn = function(t) {
    return writeCmd(t ? "AT+TARGETCONN=" + t : "AT+TARGETCONN"), readLoop("at_targetconn");
}, exports.at_gapstatus = function() {
    return writeCmd("AT+GAPSTATUS"), readLoop("at_gapstatus");
}, exports.at_gattcwrite = function(handle_param, msg) {
    return writeCmd("AT+GATTCWRITE=" + handle_param + " " + msg), readLoop("at_gattcwrite");
}, exports.at_gattcwriteb = function() {
    return writeCmd("AT+GATTCWRITEB=" + handle_param + " " + msg), readLoop("at_gattcwriteb");
}, exports.at_gattcread = function() {
    return writeCmd("AT+GATTCREAD=" + handle_param), readLoop("at_gattcread");
}, exports.help = function() {
    return writeCmd("--H"), readLoop("help");
}, exports.stop = function() {
    return writeCmd(""), "Process Stopped";
};
class LineBreakTransformer {
    constructor(){
        this.container = "";
    }
    transform(t, e) {
        this.container += t;
        const r = this.container.split("\r\n");
        this.container = r.pop(), r.forEach((t)=>e.enqueue(t)
        );
    }
    flush(t) {
        t.enqueue(this.container);
    }
}
async function readLoop(t, e) {
    for(arr = [];;){
        const { done: r , value: a  } = await reader.read();
        switch(a && arr.push(a), t){
            case "ati":
                if (arr.includes("Not Advertising") || arr.includes("Advertising")) return arr;
                break;
            case "ate":
                if (arr.includes("ECHO OFF") || arr.includes("ECHO ON")) return arr;
                break;
            case "at_central":
                return "Central Mode";
            case "at_peripheral":
                return "Peripheral Mode";
            case "at_advstart":
                return "Advertising";
            case "at_advstop":
                return "Advertising Stopped";
            case "at_advdata":
            case "at_advdatai":
            case "at_advresp":
                if (2 == arr.length) return arr;
                break;
            case "at_cancelconnect":
                if (arr.includes("ERROR") || arr.includes("OK")) return arr;
                break;
            case "at_client":
                return "Client";
            case "at_dual":
                return "Dual Mode";
            case "at_enterpasskey":
                if (2 == arr.length) return arr;
                break;
            case "atr":
                return "Trigger platform reset";
            case "at_findscandata":
                if (arr.length == e) {
                    const t = outputStream.getWriter();
                    return t.write(""), t.releaseLock(), arr;
                }
                break;
            case "at_gapiocap":
                if (3 == arr.length) return arr;
                break;
            case "at_gappair":
                if (arr.includes("PAIRING SUCCESS") || arr.includes("BONDING SUCCESS")) return arr;
                break;
            case "at_gapunpair":
                if (arr.includes("UNPARIED.") || 3 == arr.length) return arr;
                break;
            case "at_gapscan":
                if (e === true) arr.some(function(v) {
                    if (v.indexOf("RSSI") >= 0 && a != '') console.log(a);
                });
                if (arr.includes("SCAN COMPLETE")) return arr;
                break;
            case "at_getconn":
                if (arr.includes("No Connections found.") || 2 == arr.length) return arr;
            case "at_scantarget":
                if (arr.length == e) {
                    const t = outputStream.getWriter();
                    return t.write(""), t.releaseLock(), arr.slice(2);
                }
                break;
            case "at_setpasskey":
                if (2 == arr.length) return arr;
                break;
            case "at_gattcwrite":
                if (4 == arr.length) return arr;
                break;
            case "at_gapstatus":
                if (arr.includes("Not Advertising") || arr.includes("Advertising")) return arr;
                break;
            case "at_gattcwrite":
                if (4 == arr.length) return arr;
                break;
            case "at_gattcwriteb":
                if (4 == arr.length) return arr;
                break;
            case "at_gattcread":
                if (4 == arr.length) return arr;
                break;
            case "at_gapconnect":
                if (arr.includes("CONNECTED.") || arr.includes("DISCONNECTED.") || arr.includes("ERROR") || arr.includes("PAIRING SUCCESS")) return arr;
                break;
            case "at_getservices":
                if (arr.includes("Value received: ")) return arr;
                break;
            case "at_gapdisconnect":
                return "Disconnected.";
            case "at_numcompa":
                if (arr.includes("ERROR") || arr.includes("OK")) return arr;
                break;
            case "at_seclvl":
                if (2 == arr.length) return arr;
                break;
            case "at_server":
                return "Server";
            case "at_setnoti":
                if (20 == arr.length) return arr;
                break;
            case "at_spssend":
                if (2 == arr.length || arr.includes("[Sent]")) return arr;
            case "at_targetconn":
                if (2 == arr.length) return arr;
            case "help":
                if (arr.includes("[A] = Usable in All Roles")) return arr;
                break;
            default:
                return "Nothing!";
        }
    }
}

},{}]},["hlItI","8fvzf"], "8fvzf", "parcelRequire5b12")

//# sourceMappingURL=index.5d140dba.js.map
