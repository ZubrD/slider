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
})({"2rAXy":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"fNmB3"}],"fNmB3":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"1CJiQ"}],"1CJiQ":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"hTbRF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0a2b2423683e1096";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
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
            removeErrorOverlay();
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
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
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
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
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

},{}],"c1VqH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialButtonPosition = initialButtonPosition;
exports.setStructure = setStructure;
exports.sliderInit = sliderInit;
exports.sliderPositioning = sliderPositioning;
var _model = require("../js/model.js");
var _listeners = require("../js/listeners.js");
var _scale = require("../js/scale.js");
var _config = require("../js/config.js");
window.onload = sliderInit();
function sliderInit() {
    var runnerNumber = _config.configObj.runner_number;
    var min = _config.configObj.min;
    var max = _config.configObj.max;
    var step = 1;
    var discrete = _config.configObj.discrete;
    var orientation = _config.configObj.orientation;
    var scaleArrs = _scale.makeScale(min, max, step);
    /* Массив значений шкалы */ var scaleArr = scaleArrs[0];
    var iteration = scaleArrs[1];
    var iterationsArr = scaleArrs[2];
    var elements = document.querySelectorAll('.zdslider');
    if (elements.length != 0) {
        /* Создание структуры слайдера */ setStructure(runnerNumber, min, max, discrete, orientation, scaleArr, iteration, iterationsArr);
        /* Первоначальное размещение слайдера */ sliderPositioning(runnerNumber, orientation);
    }
    var numberOfSliders = document.querySelectorAll('.zdslider-panel');
    numberOfSliders.forEach(function(elem) {
        /* Слушатель переключателей */ elem.addEventListener('click', _listeners.allChecksListener);
    });
}
/* Структура слайдера */ function setStructure(runners, min, max, discrete, orientation, scaleArr, iteration, iterationsArr) {
    var elements = document.querySelectorAll('.zdslider');
    /* Счётчик количества слайдеров для создания атрибутов */ var counter = 1;
    /*  Счётчик цикла для определенияя номера ranger в массиве */ var i = 0;
    elements.forEach(function(elem) {
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') elem.classList.add('zdslider-vert');
        var ranger = new _model.Ranger(orientation);
        ranger.appendTo(elem);
        var interval = new _model.Interval(orientation);
        var rangerDiv = document.querySelectorAll('.ranger')[i];
        interval.appendTo(rangerDiv);
        if (runners === 2) {
            var button_1 = new _model.Button(orientation);
            var button_2 = new _model.Button(orientation);
            button_1.setAttribute('data-type', 'btn-first');
            button_2.setAttribute('data-type', 'btn-second');
            button_1.appendTo(rangerDiv);
            button_2.appendTo(rangerDiv);
        } else {
            var _button_ = new _model.Button(orientation);
            _button_.setAttribute('data-type', 'btn-first');
            _button_.appendTo(rangerDiv);
        }
        var division = new _model.Division(orientation);
        scaleArr.forEach(function(el) {
            var span = new _model.DivisionSpan(orientation);
            span.appendTo(division);
        });
        division.appendTo(elem);
        var scale = new _model.Scale(orientation);
        scaleArr.forEach(function(el) {
            var span = new _model.ScaleSpan(orientation);
            span.appendTo(scale);
            span.inner_HTML(el);
        });
        scale.appendTo(elem);
        /* Слой для обмена данными между Моделью и Контроллером, Моделью и Представлением */ var settings = new _model.Settings();
        settings.setAttribute('data-inst', counter);
        settings.setAttribute('data-runners', runners);
        settings.setAttribute('data-min', min);
        settings.setAttribute('data-max', max);
        settings.setAttribute('data-discrete', discrete);
        settings.setAttribute('data-orientation', orientation);
        settings.setAttribute('data-tip', 'no');
        /* Для дискретного перемещения */ settings.setAttribute('data-scale_length', scaleArr.length);
        /* Координаты первого бегуна */ settings.setAttribute('data-btn1_coord', 0);
        /* Координаты второго бегуна */ settings.setAttribute('data-btn2_coord', rangerDiv.offsetWidth);
        settings.setAttribute('data-width', String(rangerDiv.offsetWidth));
        settings.setAttribute('data-height', String(rangerDiv.offsetHeight));
        var button_1_div = document.querySelectorAll('[data-type="btn-first"]')[i];
        settings.setAttribute('data-button_width', String(button_1_div.offsetWidth));
        settings.appendTo(elem.parentNode);
        var panel = new _model.Panel();
        panel.appendTo(elem.parentNode);
        var confInputMin = document.querySelectorAll('.zdslider-panel__min')[i];
        confInputMin.setAttribute('data-min', String(min));
        confInputMin.setAttribute('data-max', String(max));
        confInputMin.value = String(min);
        confInputMin.addEventListener('change', _listeners.changeMinListener);
        var confInputMax = document.querySelectorAll('.zdslider-panel__max')[i];
        confInputMax.setAttribute('data-min', String(min));
        confInputMax.setAttribute('data-max', String(max));
        confInputMax.value = String(max);
        confInputMax.addEventListener('change', _listeners.changeMaxListener);
        var confInputStep = document.querySelectorAll('.zdslider-panel__step')[i];
        confInputStep.setAttribute('data-steps', String(iterationsArr));
        confInputStep.setAttribute('data-iteration', String(iteration));
        confInputStep.setAttribute('data-current', String(iteration));
        if (iterationsArr.length !== 0) {
            confInputStep.setAttribute('max', String(iterationsArr[0]));
            confInputStep.setAttribute('min', String(iterationsArr[iterationsArr.length - 1]));
        } else /* Если интервалов для шкалы нет, то делаю инпут неактивным */ confInputStep.disabled = true;
        confInputStep.value = confInputStep.dataset.iteration;
        confInputStep.addEventListener('input', _listeners.changeStepListener);
        counter += 1;
        i += 1;
    });
}
/* Первоначальное размещение слайдера */ function sliderPositioning(runners, orientation) {
    var elements = document.querySelectorAll('.zdslider');
    var i = 0;
    elements.forEach(function(elem) {
        var ranger = document.querySelectorAll('.ranger')[i];
        var interval = document.querySelectorAll('.ranger__interval')[i];
        var button1 = document.querySelectorAll('[data-type="btn-first"]')[i];
        var config = document.querySelectorAll('.zdslider-config')[i];
        if (orientation === 'horizontal') interval.style.width = config.dataset.width + 'px';
        else if (orientation === 'vertical') /* 5 - это ширина риски шкалы */ interval.style.height = Number(config.dataset.height) - 5 + 'px';
        if (runners === 1) {
            if (orientation == 'horizontal') {
                button1.style.marginLeft = Number(config.dataset.width) - Number(config.dataset.button_width) + 2 + 'px';
                initialButtonPosition(i, runners);
            } else if (orientation == 'vertical') button1.style.marginTop = "0px";
        }
        if (runners === 2) {
            if (orientation === 'horizontal') {
                button1.style.marginLeft = '0px';
                var button2 = document.querySelectorAll('[data-type="btn-second"]')[i];
                button2.style.marginLeft = Number(config.dataset.width) - Number(config.dataset.button_width) + 'px';
                /* Исходные позиции бегунов сохраняю в конфиге */ initialButtonPosition(i, runners);
            } else if (orientation === 'vertical') {
                button1.style.marginTop = config.dataset.height + 'px';
                var _button = document.querySelectorAll('[data-type="btn-second"]')[i];
                _button.style.marginTop = "0px";
            }
        }
        i += 1;
    });
}
function initialButtonPosition(i, runners) {
    var config = document.querySelectorAll('.zdslider-config')[i];
    var btn1 = document.querySelectorAll('[data-type="btn-first"]')[i];
    var initBtn1Pos = _scale.getCoords(btn1);
    config.dataset.btn1_init_pos = String(initBtn1Pos.left);
    if (runners === 2) {
        var btn2 = document.querySelectorAll('[data-type="btn-second"]')[i];
        var initBtn2Pos = _scale.getCoords(btn2);
        config.dataset.btn2_init_pos = initBtn2Pos.left;
    }
}

},{"../js/model.js":"6Yfb5","../js/listeners.js":"2B2lc","../js/scale.js":"cJo0M","../js/config.js":"beA2m"}],"6Yfb5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Settings = exports.ScaleSpan = exports.Scale = exports.Ranger = exports.Panel = exports.Interval = exports.DivisionSpan = exports.Division = exports.Button = void 0;
var _mouse = require("../js/mouse.js");
var _mouseVert = require("../js/mouseVert.js");
var _mouseClick = require("../js/mouseClick.js");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Button_instances, _Button_setup, _Division_instances, _Division_setup, _Panel_instances, _Panel_setup;
var Ranger = /*#__PURE__*/ function() {
    function Ranger1(orientation) {
        _classCallCheck(this, Ranger1);
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger');
        this.$el.setAttribute('data-type', 'ranger');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert');
    }
    _createClass(Ranger1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        }
    ]);
    return Ranger1;
}();
exports.Ranger = Ranger;
var Interval = /*#__PURE__*/ function() {
    function Interval1(orientation) {
        _classCallCheck(this, Interval1);
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger__interval');
        this.$el.setAttribute('data-type', 'interval');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert__interval');
    }
    _createClass(Interval1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        }
    ]);
    return Interval1;
}();
exports.Interval = Interval;
var Button = /*#__PURE__*/ function() {
    function Button1(orientation) {
        _classCallCheck(this, Button1);
        _Button_instances.add(this);
        this.$el = document.createElement('button');
        this.$el.classList.add('ranger__button');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert__button');
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_setup).call(this);
    }
    _createClass(Button1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        },
        {
            key: "setAttribute",
            value: function setAttribute(attr, number) {
                this.$el.setAttribute(attr, number);
            }
        },
        {
            key: "clickHandler",
            value: function clickHandler(event) {
                var elem = event.target;
                var type = elem.dataset.type;
                var config_dataset = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
                var orientation = config_dataset.dataset.orientation;
                if (orientation === 'horizontal') {
                    if (type === 'btn-first') _mouse.mouseDownBtnFirst(event);
                    if (type === 'btn-second') _mouse.mouseDownBtnSecond(event);
                }
                if (orientation === 'vertical') {
                    if (type === 'btn-first') _mouseVert.mouseVertDownBtnFirst(event);
                    if (type === 'btn-second') _mouseVert.mouseVertDownBtnSecond(event);
                }
            }
        }
    ]);
    return Button1;
}();
exports.Button = Button;
_Button_instances = new WeakSet(), _Button_setup = function _Button_setup1() {
    /* Только для местных функций */ this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('mousedown', this.clickHandler);
};
var Scale = /*#__PURE__*/ function() {
    function Scale1(orientation) {
        _classCallCheck(this, Scale1);
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger__scale');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert__scale');
    }
    _createClass(Scale1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        },
        {
            key: "appendChild",
            value: function appendChild(child) {
                this.$el.appendChild(child);
            }
        }
    ]);
    return Scale1;
}();
exports.Scale = Scale;
var ScaleSpan = /*#__PURE__*/ function() {
    function ScaleSpan1(orientation) {
        _classCallCheck(this, ScaleSpan1);
        this.$el = document.createElement('span');
        this.$el.classList.add('ranger__scale-span');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert__scale-span');
    }
    _createClass(ScaleSpan1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        },
        {
            key: "inner_HTML",
            value: function inner_HTML(child) {
                this.$el.innerHTML = child;
            }
        }
    ]);
    return ScaleSpan1;
}();
exports.ScaleSpan = ScaleSpan;
var Division = /*#__PURE__*/ function() {
    function Division1(orientation) {
        _classCallCheck(this, Division1);
        _Division_instances.add(this);
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger__scale-division');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert__scale-division');
        __classPrivateFieldGet(this, _Division_instances, "m", _Division_setup).call(this);
    }
    _createClass(Division1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        },
        {
            key: "appendChild",
            value: function appendChild(child) {
                this.$el.appendChild(child);
            }
        },
        {
            key: "clickHandler",
            value: function clickHandler(event) {
                _mouseClick.clickMouse(event);
            }
        }
    ]);
    return Division1;
}();
exports.Division = Division;
_Division_instances = new WeakSet(), _Division_setup = function _Division_setup1() {
    /* Только для местных функций */ this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
};
var DivisionSpan = /*#__PURE__*/ function() {
    function DivisionSpan1(orientation) {
        _classCallCheck(this, DivisionSpan1);
        this.$el = document.createElement('span');
        this.$el.classList.add('ranger__scale-division-span');
        if (orientation === 'horizontal') ;
        else if (orientation === 'vertical') this.$el.classList.add('ranger-vert__scale-division-span');
    }
    _createClass(DivisionSpan1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        }
    ]);
    return DivisionSpan1;
}();
exports.DivisionSpan = DivisionSpan;
var Panel = /*#__PURE__*/ function() {
    function Panel1() {
        _classCallCheck(this, Panel1);
        _Panel_instances.add(this);
        this.$panel = document.createElement('div');
        this.$panel.classList.add('zdslider-panel');
        this.$runCheckbox = document.createElement('input');
        this.$runCheckbox.classList.add('zdslider-panel__check-runners');
        this.$runCheckbox.setAttribute('type', 'checkbox');
        this.$runCheckbox.setAttribute('data-run', 'run');
        this.$discreteCheckbox = document.createElement('input');
        this.$discreteCheckbox.classList.add('zdslider-panel__check-discrete');
        this.$discreteCheckbox.setAttribute('type', 'checkbox');
        this.$discreteCheckbox.setAttribute('data-discrete', 'discrete');
        this.$tipCheckbox = document.createElement('input');
        this.$tipCheckbox.classList.add('zdslider-panel__check-tip');
        this.$tipCheckbox.setAttribute('type', 'checkbox');
        this.$tipCheckbox.setAttribute('data-tip', 'tip');
        this.$orientCheckbox = document.createElement('input');
        this.$orientCheckbox.classList.add('zdslider-panel__check-orient');
        this.$orientCheckbox.setAttribute('type', 'checkbox');
        this.$orientCheckbox.setAttribute('data-orient', 'orient');
        this.$minNumber = document.createElement('input');
        this.$minNumber.classList.add('zdslider-panel__min');
        this.$minNumber.setAttribute('type', 'number');
        this.$maxNumber = document.createElement('input');
        this.$maxNumber.classList.add('zdslider-panel__max');
        this.$maxNumber.setAttribute('type', 'number');
        this.$stepNumber = document.createElement('input');
        this.$stepNumber.classList.add('zdslider-panel__step');
        this.$stepNumber.setAttribute('type', 'number');
        this.$stepNumber.setAttribute('onkeydown', 'return false');
        this.$runLabel = document.createElement('label');
        this.$runLabel.innerHTML = '1 Бегун';
        this.$discreteLabel = document.createElement('label');
        this.$discreteLabel.innerHTML = 'Дискретный';
        this.$tipLabel = document.createElement('label');
        this.$tipLabel.innerHTML = 'Ярлык';
        this.$orientLabel = document.createElement('label');
        this.$orientLabel.innerHTML = 'Вертикальный';
        this.$minLable = document.createElement('label');
        this.$minLable.innerHTML = 'Минимум';
        this.$maxLabel = document.createElement('label');
        this.$maxLabel.innerHTML = 'Максимум';
        this.$stepLabel = document.createElement('label');
        this.$stepLabel.innerHTML = 'Шаг';
        this.$panel.appendChild(this.$runCheckbox);
        this.$panel.appendChild(this.$runLabel);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$discreteCheckbox);
        this.$panel.appendChild(this.$discreteLabel);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$tipCheckbox);
        this.$panel.appendChild(this.$tipLabel);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$orientCheckbox);
        this.$panel.appendChild(this.$orientLabel);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$minNumber);
        this.$panel.appendChild(this.$minLable);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$maxNumber);
        this.$panel.appendChild(this.$maxLabel);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$stepNumber);
        this.$panel.appendChild(this.$stepLabel);
        this.$panel.appendChild(document.createElement('br'));
        __classPrivateFieldGet(this, _Panel_instances, "m", _Panel_setup).call(this);
    }
    _createClass(Panel1, [
        {
            key: "clickHandler",
            value: function clickHandler(event) {
                var elem = event.target;
                var run = elem.dataset.run;
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$panel);
            }
        }
    ]);
    return Panel1;
}();
exports.Panel = Panel;
_Panel_instances = new WeakSet(), _Panel_setup = function _Panel_setup1() {
    /* Только для местных функций */ this.clickHandler = this.clickHandler.bind(this);
    this.$panel.addEventListener('click', this.clickHandler);
};
var Settings = /*#__PURE__*/ function() {
    function Settings1() {
        _classCallCheck(this, Settings1);
        this.$el = document.createElement('div');
        this.$el.classList.add('zdslider-config');
    }
    _createClass(Settings1, [
        {
            key: "appendTo",
            value: function appendTo(parent) {
                parent.appendChild(this.$el);
            }
        },
        {
            key: "setAttribute",
            value: function setAttribute(attr, number) {
                this.$el.setAttribute(attr, number);
            }
        }
    ]);
    return Settings1;
}();
exports.Settings = Settings;

},{"../js/mouse.js":"1tMu9","../js/mouseVert.js":"kviwi","../js/mouseClick.js":"9fVyp"}],"1tMu9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.discreteArray = discreteArray;
exports.mouseDownBtnFirst = mouseDownBtnFirst;
exports.mouseDownBtnFirstDouble = mouseDownBtnFirstDouble;
exports.mouseDownBtnFirstSingle = mouseDownBtnFirstSingle;
exports.mouseDownBtnSecond = mouseDownBtnSecond;
exports.resetBtnCoord = resetBtnCoord;
var _scale = require("../js/scale.js");
var _tipToggler = require("../js/tipToggler.js");
function mouseDownBtnFirst(event) {
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var runnerNumber = Number(config.dataset.runners);
    if (runnerNumber === 1) /* если один бегун */ mouseDownBtnFirstSingle(event);
    else if (runnerNumber === 2) /* первый бегун (левый) если бегунов два */ mouseDownBtnFirstDouble(event);
}
function mouseDownBtnSecond(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseDownBtnSecond');
    /* Для надписи над бегуном */ var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var slerNumber = Number(config.dataset.inst);
    var sler = document.querySelectorAll('.ranger')[slerNumber - 1];
    var interval = sler.querySelector('.ranger__interval');
    var btn1 = sler.querySelector('[data-type="btn-first"]');
    var btn2 = sler.querySelector('[data-type="btn-second"]');
    var discreteStatus = config.dataset.discrete;
    /* Для дискретного перемещения */ var interval_number = Number(config.dataset.scale_length) - 1;
    var slerCoords = _scale.getCoords(sler);
    var btn1Coords = _scale.getCoords(btn1);
    var btn2Coords = _scale.getCoords(btn2);
    var shiftX1 = event.pageX - btn1Coords.left;
    var shiftX2 = event.pageX - btn2Coords.left;
    document.onmousemove = function(event1) {
        var left2 = event1.pageX - shiftX2 - slerCoords.left;
        var right2 = sler.offsetWidth - btn2.offsetWidth;
        /* Тестирование */ if (localStorage.test) left2 = Number(localStorage.left2_1);
        if (left2 < 0) left2 = 0;
        /* Тестирование */ if (localStorage.test) {
            left2 = Number(localStorage.left2_2);
            right2 = Number(localStorage.right2_1);
        }
        if (left2 > right2) left2 = right2;
        btn2.style.marginLeft = left2 + 'px';
        config.dataset.btn2_coord = String(left2);
        /* Дублирую, чтобы бегуны не выпадали за пределы слайдера при изменении ширины окна */ config.dataset.btn2_init_pos = String(left2);
        shiftX1 = event1.pageX - btn1Coords.left;
        var left1 = event1.pageX - shiftX1 - slerCoords.left;
        var right1 = sler.offsetWidth - btn1.offsetWidth;
        /* Тестирование */ if (localStorage.test) left1 = Number(localStorage.left1_1);
        if (left1 < 0) left1 = 0;
        /* Тестирование */ if (localStorage.test) {
            left1 = Number(localStorage.left1_2);
            right1 = Number(localStorage.right1_1);
        }
        if (left1 > right1) left1 = right1;
        var discretArr = discreteArray(interval_number, right1);
        var range = discretArr[1] - discretArr[0];
        var integ = Math.floor(left2);
        if (discreteStatus === 'yes') discretArr.forEach(function(num) {
            if (integ >= num - range / 2 && integ < num + range / 2) {
                /* Тестирование */ if (localStorage.test) {
                    num = localStorage.num_1;
                    left1 = localStorage.left1_1;
                }
                if (num < left1) {
                    interval.style.width = left1 - num + 'px';
                    interval.style.marginLeft = num + 'px';
                }
                /* Тестирование */ if (localStorage.test) {
                    num = localStorage.num_2;
                    left1 = localStorage.left1_2;
                }
                if (num >= left1) {
                    interval.style.width = num - left1 + 'px';
                    interval.style.marginLeft = left1 + 'px';
                }
                btn2.style.marginLeft = num + 'px';
                config.dataset.btn2_coord = String(num);
                config.dataset.btn2_init_pos = String(num);
                /* Передача значения в конфиг */ config.dataset.btn2_tip = _tipToggler.forTip(elem, num);
                /* Значение над бегуном */ btn2.dataset.tip = config.dataset.btn2_tip;
            }
        });
        else if (discreteStatus === 'no') {
            /* Передача значения в конфиг */ config.dataset.btn2_tip = _tipToggler.forTip(elem, left2);
            /* Значение над бегуном */ btn2.dataset.tip = config.dataset.btn2_tip;
            /* Тестирование */ if (localStorage.test) {
                left1 = localStorage.left1_1;
                left2 = localStorage.left2_1;
            }
            if (left1 > left2) {
                interval.style.width = left1 - left2 + 'px';
                interval.style.marginLeft = left2 + 'px';
            } else {
                interval.style.width = left2 - left1 + 'px';
                interval.style.marginLeft = left1 + 'px';
            }
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}
function mouseDownBtnFirstSingle(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseDownBtnFirstSingle');
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var slerNumber = Number(config.dataset.inst);
    var sler = document.querySelectorAll('.ranger')[slerNumber - 1];
    var interval = sler.querySelector('.ranger__interval');
    var btn1 = sler.querySelector('[data-type="btn-first"]');
    var discreteStatus = config.dataset.discrete;
    /* Для дискретного перемещения */ var intervalNumber = Number(config.dataset.scale_length) - 1;
    var slerCoords = _scale.getCoords(sler);
    var btn1Coords = _scale.getCoords(btn1);
    /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */ /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка */ var shiftX1 = event.pageX - btn1Coords.left;
    document.onmousemove = function(event1) {
        var left1 = event1.pageX - shiftX1 - slerCoords.left;
        var right1 = sler.offsetWidth - btn1.offsetWidth;
        if (discreteStatus === 'yes') {
            /* Тестирование */ if (localStorage.test) left1 = localStorage.left1_1;
            if (left1 < 0) left1 = 0;
            /* Тестирование */ if (localStorage.test) {
                left1 = Number(localStorage.left1_2);
                right1 = Number(localStorage.right1_1);
            }
            if (left1 > right1) left1 = right1;
            var discretArr = discreteArray(intervalNumber, right1);
            var range = discretArr[1] - discretArr[0];
            var integ = Math.floor(left1);
            discretArr.forEach(function(num) {
                if (integ < num + range / 2 && integ > num - range / 2) {
                    btn1.style.marginLeft = num + 'px';
                    interval.style.width = num + 'px';
                    config.dataset.btn1_coord = String(num);
                    /* Дублирую, чтобы бегуны не выпадали за пределы слайдера при изменении ширины окна */ config.dataset.btn1_init_pos = String(num);
                    /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(elem, num);
                    /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
                }
            });
        } else if (discreteStatus === 'no') {
            /* Тестирование */ if (localStorage.test) left1 = Number(localStorage.left1_1);
            if (left1 < 0) left1 = 0;
            /* Тестирование */ if (localStorage.test) {
                left1 = Number(localStorage.left1_2);
                right1 = Number(localStorage.right1_1);
            }
            if (left1 > right1) left1 = right1;
            btn1.style.marginLeft = left1 + 'px';
            interval.style.width = left1 + 'px';
            config.dataset.btn1_coord = String(left1);
            config.dataset.btn1_init_pos = String(left1);
            /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(elem, left1);
            /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}
function mouseDownBtnFirstDouble(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseDownBtnFirstDouble');
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var slerNumber = Number(config.dataset.inst);
    var sler = document.querySelectorAll('.ranger')[slerNumber - 1];
    var interval = sler.querySelector('.ranger__interval');
    var btn1 = sler.querySelector('[data-type="btn-first"]');
    var btn2 = sler.querySelector('[data-type="btn-second"]');
    var discreteStatus = config.dataset.discrete;
    /* Для дискретного перемещения */ var intervalNumber = Number(config.dataset.scale_length) - 1;
    var slerCoords = _scale.getCoords(sler);
    var btn1Coords = _scale.getCoords(btn1);
    var btn2Coords = _scale.getCoords(btn2);
    /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */ /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка */ var shiftX1 = event.pageX - btn1Coords.left;
    var shiftX2 = event.pageX - btn2Coords.left;
    document.onmousemove = function(event1) {
        var left1 = event1.pageX - shiftX1 - slerCoords.left;
        var right1 = sler.offsetWidth - btn1.offsetWidth;
        shiftX2 = event1.pageX - btn2Coords.left;
        var left2 = event1.pageX - shiftX2 - slerCoords.left;
        var right2 = sler.offsetWidth;
        /* Тестирование */ if (localStorage.test) left1 = localStorage.left1_1;
        if (left1 < 0) left1 = 0;
        /* Тестирование */ if (localStorage.test) left1 = localStorage.left1_2;
        if (left1 > right1) left1 = right1;
        var discretArr = discreteArray(intervalNumber, right1);
        var range = discretArr[1] - discretArr[0];
        var integ = Math.floor(left1);
        if (discreteStatus === 'yes') {
            /* Счётчик для перехода по массиву подписей */ var counter = 0;
            discretArr.forEach(function(num) {
                /* Тестирование */ if (localStorage.test) {
                    integ = localStorage.integ;
                    num = localStorage.num;
                    range = localStorage.range;
                }
                if (integ < num + range / 2 && integ > num - range / 2) {
                    /* Тестирование */ if (localStorage.test) {
                        num = Number(localStorage.num_2);
                        left2 = Number(localStorage.left2);
                    }
                    if (num > left2) {
                        interval.style.width = num - left2 + 'px';
                        interval.style.marginLeft = left2 + 'px';
                    }
                    /* Тестирование */ if (localStorage.test) {
                        num = Number(localStorage.num);
                        left2 = Number(localStorage.left2);
                    }
                    if (num <= left2) {
                        interval.style.width = left2 - num + 'px';
                        interval.style.marginLeft = num + 'px';
                    }
                    btn1.style.marginLeft = num + 'px';
                    config.dataset.btn1_coord = String(num);
                    config.dataset.btn1_init_pos = String(num);
                    /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(elem, num);
                    /* Извлечение из конфига значения над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
                }
                counter += 1;
            });
        } else if (discreteStatus === 'no') {
            btn1.style.marginLeft = left1 + 'px';
            config.dataset.btn1_coord = String(left1);
            config.dataset.btn1_init_pos = String(left1);
            /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(elem, left1);
            /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
            shiftX2 = event1.pageX - btn2Coords.left;
            var _left = event1.pageX - shiftX2 - slerCoords.left;
            var _right = sler.offsetWidth;
            /* Тестирование */ if (localStorage.test) _left = Number(localStorage.left2_1);
            if (_left < 0) _left = 0;
            /* Тестирование */ if (localStorage.test) {
                _left = Number(localStorage.left2_2);
                _right = Number(localStorage.right2_1);
            }
            if (_left > _right) _left = _right;
            /* Тестирование */ if (localStorage.test) {
                left1 = Number(localStorage.left1_1);
                _left = Number(localStorage.left2_3);
            }
            if (left1 > _left) {
                interval.style.width = left1 - _left + 'px';
                interval.style.marginLeft = _left + 'px';
            } else {
                interval.style.width = _left - left1 + 'px';
                interval.style.marginLeft = left1 + 'px';
            }
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}
function discreteArray(intervalNumber, length) {
    /* FIXME Если не указать абсолютное значение, бегун будет колебаться??? */ var interv = length / intervalNumber;
    var discretArr = [];
    var arrCount = 0;
    discretArr.push(0);
    /* Это не итератор, поэтому не меняю на forEach */ for(var i = 0; i < intervalNumber; i++){
        arrCount = arrCount + interv;
        discretArr.push(arrCount);
    }
    return discretArr;
}
function resetBtnCoord(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Это resetBtnCoord');
    var elem = event.target;
    var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
    var ranger = elem.parentNode.parentNode.querySelector('.ranger');
    var orientation = config.dataset.orientation;
    config.dataset.btn1_coord = String(0);
    if (orientation === 'horizontal') {
        config.dataset.btn2_coord = String(ranger.offsetWidth);
        config.dataset.btn2_init_pos = String(ranger.offsetWidth);
    } else if (orientation === 'vertical') config.dataset.btn2_coord = String(ranger.offsetHeight);
}

},{"../js/scale.js":"cJo0M","../js/tipToggler.js":"gy6Bw"}],"cJo0M":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCoords = getCoords;
exports.makeScale = makeScale;
exports.modifyScaleInput = modifyScaleInput;
exports.reScale = reScale;
var _model = require("../js/model.js");
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
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
            it = it.call(o);
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
                if (!normalCompletion && it["return"] != null) it["return"]();
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
/* Получение координат элементов слайдера */ function getCoords(elem) {
    var coords = elem.getBoundingClientRect();
    return {
        top: coords.top,
        left: coords.left
    };
}
/* Массив значений для шкалы по умолчанию */ function makeScale(min, max, step) {
    var stepArr = [];
    var dividersArr = [];
    /* Массив размера шага */ var iterationArr = [];
    /* Член массива размеров шага */ var iter = 0;
    var maximus = 0;
    var iteration = 0;
    var item = 0;
    if (step > 0) {
        var range = max - min;
        /* Получаю массив делителей без остатка */ for(var i = 2; i < range / 2 + 1; i++){
            if (range % i) ;
            else dividersArr.push(i);
        }
        if (dividersArr.length > 0) {
            /* Определяю наибольшее количество интервалов меньше 10 */ var _iterator = _createForOfIteratorHelper(dividersArr), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var el = _step.value;
                    if (el < 10) {
                        maximus = el;
                        iter = range / maximus;
                        /* Массив размеров шага шкалы */ iterationArr.push(iter);
                    } else break;
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
        } else {
            stepArr = [
                min,
                max
            ];
            return [
                stepArr,
                iteration,
                iterationArr
            ];
        }
        /* Иначе iteration = Infinity */ if (maximus === 0) {
            stepArr = [
                min,
                max
            ];
            return [
                stepArr,
                iteration,
                iterationArr
            ];
        }
        iteration = range / maximus;
        /* Переопределение - этот участок кода применяется при изменении размера шага через панель */ if (step > 1) {
            iteration = step;
            maximus = range / iteration;
        }
        item = min;
        stepArr.push(min);
        /* Массив значений шкалы */ for(var _i = 0; _i < maximus; _i++){
            item = item + iteration;
            stepArr.push(item);
        }
    } else stepArr = [
        min,
        max
    ];
    return [
        stepArr,
        iteration,
        iterationArr
    ];
}
function reScale(scaleArr, currentInst) {
    var parents = document.querySelectorAll('.zdslider');
    parents.forEach(function(parent) {
        var config = parent.parentNode.querySelector('.zdslider-config');
        if (Number(config.dataset.inst) == currentInst) {
            var currentRanger = parent.querySelector('.ranger');
            var currentScale = parent.querySelector('.ranger__scale');
            var currentDivision = parent.querySelector('.ranger__scale-division');
            var orientation = config.dataset.orientation;
            currentScale.remove();
            currentDivision.remove();
            /* Для дискретного перемещения */ config.dataset.scale_length = String(scaleArr.length);
            var division = new _model.Division(orientation);
            division.appendTo(parent);
            scaleArr.forEach(function(el) {
                var span = new _model.DivisionSpan(orientation);
                span.appendTo(division);
            });
            var scale = new _model.Scale(orientation);
            scale.appendTo(parent);
            scaleArr.forEach(function(el) {
                var span = new _model.ScaleSpan(orientation);
                span.appendTo(scale);
                span.inner_HTML(el);
            });
        }
    });
}
/* Изменение инпута переключения шага  */ function modifyScaleInput(parent, iteration, iterationsArr) {
    var confInputStep = parent.querySelector('.zdslider-panel__step');
    confInputStep.setAttribute('data-steps', String(iterationsArr));
    confInputStep.setAttribute('data-iteration', String(iteration));
    confInputStep.setAttribute('data-current', String(iteration));
    if (iterationsArr.length !== 0) {
        confInputStep.disabled = false;
        confInputStep.setAttribute('max', String(iterationsArr[0]));
        confInputStep.setAttribute('min', String(iterationsArr[iterationsArr.length - 1]));
    } else /* Если интервалов для шкалы нет, то делаю инпут неактивным */ confInputStep.disabled = true;
    confInputStep.value = confInputStep.dataset.iteration;
}

},{"../js/model.js":"6Yfb5"}],"gy6Bw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forTip = forTip;
exports.hideTip = hideTip;
exports.reValueTip = reValueTip;
exports.showTip = showTip;
function showTip(elem, orientation) {
    var parent = elem.parentNode.parentNode.querySelector('.zdslider');
    var parentRanger = parent.querySelector('.ranger');
    var buttons = parentRanger.querySelectorAll('.ranger__button');
    buttons.forEach(function(elem1) {
        if (orientation === 'horizontal') elem1.classList.add('ranger__button-tip');
        else if (orientation === 'vertical') elem1.classList.add('ranger-vert__button-tip');
    });
}
function hideTip(elem) {
    var parent = elem.parentNode.parentNode.querySelector('.zdslider');
    var tip = elem.parentNode.querySelector('.zdslider-panel__check-tip');
    /* Сбрасываю флаг надписи */ tip.checked = false;
    var parentRanger = parent.querySelector('.ranger');
    var buttons = parentRanger.querySelectorAll('.ranger__button');
    /* Удаляю стили ярлыков */ buttons.forEach(function(elem1) {
        elem1.classList.remove('ranger__button-tip');
        elem1.classList.remove('ranger-vert__button-tip');
    });
}
function forTip(target, coord) {
    var config = target.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var configMin = Number(config.dataset.min);
    var configMax = Number(config.dataset.max);
    var rangerHeight = Number(config.dataset.height);
    var rangerWidth = Number(config.dataset.width);
    var orientation = config.dataset.orientation;
    if (orientation === 'horizontal') return Math.round((configMax - configMin) / (rangerWidth - 12) * coord) + configMin;
    else if (orientation === 'vertical') return Math.round((configMax - configMin) / rangerHeight * coord) + configMin;
}
function reValueTip(element) {
    /* Изменение значения атрибута tip  при изменении min, max в панели */ var parent = element.parentNode.parentNode;
    var zdslider = parent.querySelector('.zdslider');
    var input = parent.querySelector('.zdslider-panel__check-tip');
    input.checked = false;
    var buttons = zdslider.querySelectorAll('.ranger__button');
    buttons.forEach(function(elem) {
        elem.dataset.tip = '';
    });
    hideTip(element);
}

},{}],"kviwi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mouseVertDownBtnFirst = mouseVertDownBtnFirst;
exports.mouseVertDownBtnSecond = mouseVertDownBtnSecond;
var _scale = require("../js/scale.js");
var _tipToggler = require("../js/tipToggler.js");
var _mouse = require("../js/mouse.js");
function mouseVertDownBtnFirst(event) {
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var runner_number = Number(config.dataset.runners);
    if (runner_number === 1) /* если один бегун */ mouseVertDownBtnFirstSingle(event);
    else if (runner_number === 2) /* первый бегун (левый) если бегунов два */ mouseVertDownBtnFirstDouble(event);
}
function mouseVertDownBtnSecond(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseVertDownBtnSecond');
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var slerNumber = Number(config.dataset.inst);
    var sler = document.querySelectorAll('.ranger')[slerNumber - 1];
    var interval = sler.querySelector('.ranger__interval');
    var btn1 = sler.querySelector('[data-type="btn-first"]');
    var btn2 = sler.querySelector('[data-type="btn-second"]');
    var discreteStatus = config.dataset.discrete;
    /* Для дискретного перемещения */ var intervalNumber = Number(config.dataset.scale_length) - 1;
    var slerCoords = _scale.getCoords(sler);
    var btn1Coords = _scale.getCoords(btn1);
    var btn2Coords = _scale.getCoords(btn2);
    var shiftY1 = event.pageY - btn1Coords.top;
    var shiftY2 = event.pageY - btn2Coords.top;
    document.onmousemove = function(event1) {
        var top2 = event1.pageY - shiftY2 - slerCoords.top;
        var down2 = sler.offsetHeight;
        /* Тестирование */ if (localStorage.test) top2 = Number(localStorage.top2_3);
        if (top2 < 0) top2 = 0;
        /* Тестирование */ if (localStorage.test) {
            top2 = Number(localStorage.top2_4);
            down2 = Number(localStorage.down2_4);
        }
        if (top2 > down2) top2 = down2;
        btn2.style.marginTop = top2 + 'px';
        shiftY1 = event1.pageY - btn1Coords.top;
        var top1 = event1.pageY - shiftY1 - slerCoords.top;
        var down1 = sler.offsetHeight;
        /* Тестирование */ if (localStorage.test) top1 = Number(localStorage.top1_3);
        if (top1 < 0) top1 = 0;
        /* Тестирование */ if (localStorage.test) {
            top1 = Number(localStorage.top1_4);
            down1 = Number(localStorage.down1_4);
        }
        if (top1 > down1) top1 = down1;
        var discretArr = _mouse.discreteArray(intervalNumber, down2);
        var range = discretArr[1] - discretArr[0];
        var integ = Math.floor(top2);
        if (discreteStatus === 'yes') discretArr.forEach(function(num) {
            /* Тестирование */ if (localStorage.test) {
                integ = Number(localStorage.integ);
                num = Number(localStorage.num);
                range = Number(localStorage.range);
            }
            if (integ >= num - range / 2 && integ < num + range / 2) {
                /* Тестирование */ if (localStorage.test) {
                    num = Number(localStorage.num1_1);
                    top1 = Number(localStorage.top1_1);
                }
                if (num < top1) {
                    interval.style.height = top1 - num + 'px';
                    interval.style.marginTop = num + 'px';
                }
                /* Тестирование */ if (localStorage.test) {
                    num = Number(localStorage.num1_2);
                    top1 = Number(localStorage.top1_2);
                }
                if (num >= top1) {
                    interval.style.height = num - top1 + 'px';
                    interval.style.marginTop = top1 + 'px';
                }
                btn2.style.marginTop = num + 'px';
                var coords = sler.offsetHeight - num;
                config.dataset.btn2_coord = String(coords);
                /* Передача значения в конфиг */ config.dataset.btn2_tip = String(_tipToggler.forTip(elem, coords));
                /* Значение над бегуном */ btn2.dataset.tip = config.dataset.btn2_tip;
            }
        });
        else if (discreteStatus === 'no') {
            /* Тестирование */ if (localStorage.test) {
                top1 = Number(localStorage.top1_1);
                top2 = Number(localStorage.top2_1);
            }
            if (top1 > top2) {
                interval.style.height = top1 - top2 + 'px';
                interval.style.marginTop = top2 + 'px';
            }
            /* Тестирование */ if (localStorage.test) {
                top1 = Number(localStorage.top1_2);
                top2 = Number(localStorage.top2_2);
            }
            if (top1 <= top2) {
                interval.style.height = top2 - top1 + 'px';
                interval.style.marginTop = top1 + 'px';
            }
            var coords = sler.offsetHeight - top2;
            config.dataset.btn2_coord = String(coords);
            /* Передача значения в конфиг */ config.dataset.btn2_tip = String(_tipToggler.forTip(elem, coords));
            /* Значение над бегуном */ btn2.dataset.tip = config.dataset.btn2_tip;
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}
function mouseVertDownBtnFirstSingle(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseVertDownBtnFirstSingle');
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var slerNumber = Number(config.dataset.inst);
    var sler = document.querySelectorAll('.ranger')[slerNumber - 1];
    var interval = sler.querySelector('.ranger__interval');
    var btn1 = sler.querySelector('[data-type="btn-first"]');
    var discreteStatus = config.dataset.discrete;
    /* Для дискретного перемещения */ var intervalNumber = Number(config.dataset.scale_length) - 1;
    var slerCoords = _scale.getCoords(sler);
    var btn1Coords = _scale.getCoords(btn1);
    /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */ /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка */ var shiftY1 = event.pageY - btn1Coords.top;
    document.onmousemove = function(event1) {
        var top1 = event1.pageY - shiftY1 - slerCoords.top;
        var down1 = sler.offsetHeight;
        if (discreteStatus === 'yes') {
            /* Тестирование */ if (localStorage.test) top1 = Number(localStorage.top1_1);
            if (top1 < 0) top1 = 0;
            /* Тестирование */ if (localStorage.test) {
                top1 = Number(localStorage.top1_2);
                down1 = Number(localStorage.down1_2);
            }
            if (top1 > down1) top1 = down1;
            var discretArr = _mouse.discreteArray(intervalNumber, down1);
            var range = discretArr[1] - discretArr[0];
            var integ = Math.floor(top1);
            discretArr.forEach(function(num) {
                /* Тестрование */ if (localStorage.test) {
                    integ = Number(localStorage.integ);
                    num = Number(localStorage.num);
                    range = Number(localStorage.range);
                }
                if (integ < num + range / 2 && integ > num - range / 2) {
                    btn1.style.marginTop = num + 'px';
                    interval.style.marginTop = num + 'px';
                    interval.style.height = sler.offsetHeight - num + 'px';
                    /* Инвертирование значения */ var coords = sler.offsetHeight - num;
                    config.dataset.btn1_coord = String(coords);
                    /* Передача значения в конфиг */ config.dataset.btn1_tip = String(_tipToggler.forTip(elem, coords));
                    /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
                }
            });
        } else if (discreteStatus === 'no') {
            /* Тестрование */ if (localStorage.test) top1 = Number(localStorage.top1_1);
            if (top1 < 0) top1 = 0;
            /* Тестрование */ if (localStorage.test) {
                top1 = Number(localStorage.top1_2);
                down1 = Number(localStorage.down1_2);
            }
            if (top1 > down1) top1 = down1;
            btn1.style.marginTop = top1 + 'px';
            interval.style.marginTop = top1 + 'px';
            interval.style.height = sler.offsetHeight - top1 + 'px';
            /* Инвертирование значения */ var coords = sler.offsetHeight - top1;
            config.dataset.btn1_coord = String(coords);
            /* Передача значения в конфиг */ config.dataset.btn1_tip = String(_tipToggler.forTip(elem, coords));
            /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}
function mouseVertDownBtnFirstDouble(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseVertDownBtnFirstDouble');
    var elem = event.target;
    var config = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    var slerNumber = Number(config.dataset.inst);
    var sler = document.querySelectorAll('.ranger')[slerNumber - 1];
    var interval = sler.querySelector('.ranger__interval');
    var btn1 = sler.querySelector('[data-type="btn-first"]');
    var btn2 = sler.querySelector('[data-type="btn-second"]');
    var discreteStatus = config.dataset.discrete;
    var intervalNumber = Number(config.dataset.scale_length) - 1;
    /* Для дискретного перемещения */ var slerCoords = _scale.getCoords(sler);
    var btn1Coords = _scale.getCoords(btn1);
    var btn2Coords = _scale.getCoords(btn2);
    /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */ /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка */ var shiftY1 = event.pageY - btn1Coords.top;
    var shiftY2 = event.pageY - btn2Coords.top;
    document.onmousemove = function(event1) {
        var top1 = event1.pageY - shiftY1 - slerCoords.top;
        var down1 = sler.offsetHeight;
        shiftY2 = event1.pageY - btn2Coords.top;
        var top2 = event1.pageY - shiftY2 - slerCoords.top;
        var down2 = sler.offsetHeight;
        /* Тестирование */ if (localStorage.test) top1 = Number(localStorage.top1_1);
        if (top1 < 0) top1 = 0;
        /* Тестирование */ if (localStorage.test) {
            top1 = Number(localStorage.top1_2);
            down1 = Number(localStorage.down1_2);
        }
        if (top1 > down1) top1 = down1;
        var discretArr = _mouse.discreteArray(intervalNumber, down1);
        var range = discretArr[1] - discretArr[0];
        var integ = Math.floor(top1);
        if (discreteStatus === 'yes') {
            var counter = 0;
            discretArr.forEach(function(num) {
                /* Тестирование */ if (localStorage.test) {
                    integ = Number(localStorage.integ);
                    num = Number(localStorage.num);
                    range = Number(localStorage.range);
                }
                if (integ < num + range / 2 && integ > num - range / 2) {
                    /* Тестирование */ if (localStorage.test) {
                        num = Number(localStorage.num1_1);
                        top2 = Number(localStorage.top2_1);
                    }
                    if (num > top2) {
                        interval.style.height = num - top2 + 'px';
                        interval.style.marginTop = top2 + 'px';
                    }
                    /* Тестирование */ if (localStorage.test) {
                        num = Number(localStorage.num1_2);
                        top2 = Number(localStorage.top2_2);
                    }
                    if (num <= top2) {
                        interval.style.height = top2 - num + 'px';
                        interval.style.marginTop = num + 'px';
                    }
                    btn1.style.marginTop = num + 'px';
                    var coords = sler.offsetHeight - num;
                    config.dataset.btn1_coord = String(coords);
                    /* Передача значения в конфиг */ config.dataset.btn1_tip = String(_tipToggler.forTip(elem, coords));
                    /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
                }
                counter += 1;
            });
        } else if (discreteStatus === 'no') {
            btn1.style.marginTop = top1 + 'px';
            shiftY2 = event1.pageY - btn2Coords.top;
            var _top = event1.pageY - shiftY2 - slerCoords.top;
            var _down = sler.offsetHeight;
            /* Тестирование */ if (localStorage.test) _top = Number(localStorage.top2_1);
            if (_top < 0) _top = 0;
            /* Тестирование */ if (localStorage.test) {
                _top = Number(localStorage.top2_2);
                _down = Number(localStorage.down2_2);
            }
            if (_top > _down) _top = _down;
            /* Тестирование */ if (localStorage.test) {
                top1 = Number(localStorage.top1_3);
                _top = Number(localStorage.top2_3);
            }
            if (top1 > _top) {
                interval.style.height = top1 - _top + 'px';
                interval.style.marginTop = _top + 'px';
            }
            /* Тестирование */ if (localStorage.test) {
                top1 = Number(localStorage.top1_4);
                _top = Number(localStorage.top2_4);
            }
            if (top1 <= _top) {
                interval.style.height = _top - top1 + 'px';
                interval.style.marginTop = top1 + 'px';
            }
            var coords = sler.offsetHeight - top1;
            config.dataset.btn1_coord = String(coords);
            /* Передача значения в конфиг */ config.dataset.btn1_tip = String(_tipToggler.forTip(elem, coords));
            /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}

},{"../js/scale.js":"cJo0M","../js/tipToggler.js":"gy6Bw","../js/mouse.js":"1tMu9"}],"9fVyp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clickMouse = clickMouse;
var _scale = require("../js/scale.js");
var _tipToggler = require("../js/tipToggler.js");
function clickMouse(event) {
    /* TODO Убирать нельзя - это для тестирования !!! */ console.log('Вызов из mouseClick');
    var elem = event.target;
    var division = elem.parentNode.parentNode.querySelector('.ranger__scale-division');
    /* FIXIT Если клик на риску то ничего не произойдёт */ /* Этот блок только если клик был на .ranger__scale-division */ if (event.target === division) {
        var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
        var buttonsNumber = Number(config.dataset.runners);
        var orientation = config.dataset.orientation;
        var btn1 = elem.parentNode.querySelector('[data-type="btn-first"]');
        var btn2 = elem.parentNode.querySelector('[data-type="btn-second"]');
        var interval = elem.parentNode.querySelector('.ranger__interval');
        var target = elem.parentNode.querySelector('.ranger__button');
        var divisionLeft, divisionTop, numberForTip;
        if (orientation === 'horizontal') {
            var divisionCoord = _scale.getCoords(division);
            /* Половина ширины бегуна, чтобы выставить его по центру клика */ var halfWidth = btn1.offsetWidth / 2;
            var clientX = event.clientX;
            var pageX = event.pageX;
            /* Тестирование */ if (localStorage.test) {
                clientX = Number(localStorage.client_1);
                pageX = Number(localStorage.page_1);
            }
            /* Если левый край слайдера выходит за пределы страницы при увеличении масштаба */ if (clientX < pageX) divisionLeft = event.pageX - event.clientX + divisionCoord.left;
            /* Тестирование */ if (localStorage.test) {
                clientX = Number(localStorage.client_2);
                pageX = Number(localStorage.page_2);
            }
            if (clientX >= pageX) divisionLeft = divisionCoord.left;
            var left = event.pageX - divisionLeft - halfWidth;
            var right = division.offsetWidth - btn1.offsetWidth;
            /* Тестирование */ if (localStorage.test) left = Number(localStorage.left_1);
            /* Чтобы бегун не выходил за границу слева */ if (left < 0) left = 0;
            /* Тестирование */ if (localStorage.test) {
                left = Number(localStorage.left_2);
                right = Number(localStorage.right_2);
            }
            /* Чтобы бегун не выходил за границу справа */ if (left > right) left = right;
            if (buttonsNumber === 1) {
                btn1.style.marginLeft = left + 'px';
                interval.style.width = left + 'px';
                /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(target, left);
                /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
            } else if (buttonsNumber === 2) {
                var left1 = Number(config.dataset.btn1_coord);
                var left2 = Number(config.dataset.btn2_coord);
                var division_offsetWidth = division.offsetWidth;
                /* Тестирование */ if (localStorage.test) {
                    left = Number(localStorage.left_3);
                    division_offsetWidth = Number(localStorage.division_3);
                }
                if (left < division_offsetWidth / 2) {
                    left1 = left;
                    /* Передача текущей координаты в конфиг */ config.dataset.btn1_coord = String(left);
                    btn1.style.marginLeft = left1 + 'px';
                    /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(target, left);
                    /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
                }
                /* Тестирование */ if (localStorage.test) {
                    left = Number(localStorage.left_4);
                    division_offsetWidth = Number(localStorage.division_4);
                }
                if (left >= division_offsetWidth / 2) {
                    left2 = left;
                    config.dataset.btn2_coord = String(left);
                    btn2.style.marginLeft = left2 + 'px';
                    /* Передача значения в конфиг */ config.dataset.btn2_tip = _tipToggler.forTip(target, left);
                    /* Значение над бегуном */ btn2.dataset.tip = config.dataset.btn2_tip;
                }
                interval.style.width = left2 - left1 + 'px';
                interval.style.marginLeft = left1 + 'px';
            }
        } else if (orientation === 'vertical') {
            var division_coord = _scale.getCoords(division);
            var clientY = event.clientY;
            var pageY = event.pageY;
            /* Тестирование */ if (localStorage.test) {
                clientY = Number(localStorage.client_1);
                pageY = Number(localStorage.page_1);
            }
            /* Если верхний край слайдера выходит за пределы страницы при увеличении масштаба */ if (clientY < pageY) divisionTop = event.pageY - event.clientY + division_coord.top;
            /* Тестирование */ if (localStorage.test) {
                clientY = Number(localStorage.client_2);
                pageY = Number(localStorage.page_2);
            }
            if (clientY >= pageY) divisionTop = division_coord.top;
            var top = event.pageY - divisionTop;
            var bottom = division.offsetHeight;
            /* Тестирование */ if (localStorage.test) top = Number(localStorage.top_1);
            /* Чтобы бегун не выходил за границу сверху */ if (top < 0) top = 0;
            /* Тестирование */ if (localStorage.test) {
                top = Number(localStorage.top_2);
                bottom = Number(localStorage.bottom_2);
            }
            /* Чтобы бегун не выходил за границу снизу */ if (top > bottom) top = bottom;
            if (buttonsNumber === 1) {
                btn1.style.marginTop = top + 'px';
                interval.style.marginTop = top + 'px';
                interval.style.height = division.offsetHeight - top + 'px';
                numberForTip = division.offsetHeight - top;
                /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(target, numberForTip);
                /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
            } else if (buttonsNumber === 2) {
                var top1 = Number(config.dataset.btn1_coord);
                var top2 = Number(config.dataset.btn2_coord);
                var divisionOffsetHeight = division.offsetHeight;
                /* Тестирование */ if (localStorage.test) {
                    top = Number(localStorage.top_3);
                    divisionOffsetHeight = Number(localStorage.division_3);
                }
                if (top > divisionOffsetHeight / 2) {
                    top1 = top;
                    /* Передача текущей координаты в конфиг */ config.dataset.btn1_coord = String(division.offsetHeight - top);
                    btn1.style.marginTop = top1 + 'px';
                    numberForTip = division.offsetHeight - top;
                    /* Передача значения в конфиг */ config.dataset.btn1_tip = _tipToggler.forTip(target, numberForTip);
                    /* Значение над бегуном */ btn1.dataset.tip = config.dataset.btn1_tip;
                }
                /* Тестирование */ if (localStorage.test) {
                    top = Number(localStorage.top_4);
                    divisionOffsetHeight = Number(localStorage.division_4);
                }
                if (top < divisionOffsetHeight / 2) {
                    top2 = top;
                    config.dataset.btn2_coord = String(division.offsetHeight - top);
                    btn2.style.marginTop = top2 + 'px';
                    numberForTip = division.offsetHeight - top;
                    /* Передача значения в конфиг */ config.dataset.btn2_tip = _tipToggler.forTip(target, numberForTip);
                    /* Значение над бегуном */ btn2.dataset.tip = config.dataset.btn2_tip;
                }
                /* Проще и правильнее взять из модели */ top1 = Number(config.dataset.btn1_coord);
                top2 = Number(config.dataset.btn2_coord);
                interval.style.height = top2 - top1 + 'px';
                interval.style.marginTop = division.offsetHeight - top2 + 'px';
            }
        }
    }
}

},{"../js/scale.js":"cJo0M","../js/tipToggler.js":"gy6Bw"}],"2B2lc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.allChecksListener = allChecksListener;
exports.changeMaxListener = changeMaxListener;
exports.changeMinListener = changeMinListener;
exports.changeStepListener = changeStepListener;
var _scale = require("../js/scale.js");
var _runnerToggler = require("./runnerToggler.js");
var _tipToggler = require("../js/tipToggler.js");
var _orientToggler = require("../js/orientToggler.js");
var _mouse = require("../js/mouse.js");
/* Переключение количества ползунков через панель */ function allChecksListener(event) {
    /* HTMLInputElement - т.к. метода checked нет для HTMLElement */ var elem = event.target;
    var run = elem.dataset.run;
    var discrete = elem.dataset.discrete;
    var tip = elem.dataset.tip;
    var orient = elem.dataset.orient;
    var ranger = elem.parentNode.parentNode.querySelector('.ranger');
    var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
    /* Извлечение из конфига флага ориентации */ var orientation = config.dataset.orientation;
    /* Извлечение из конфига номера экземпляра слайдера */ var instant = config.dataset.inst;
    if (run && elem.checked) {
        _runnerToggler.oneRunner(elem);
        /* Скрываю надписи */ _tipToggler.hideTip(elem);
        _mouse.resetBtnCoord(event);
    } else if (run && !elem.checked) {
        _runnerToggler.twoRunners(elem, instant);
        _tipToggler.hideTip(elem);
        _mouse.resetBtnCoord(event);
    }
    /* Дискретный / плавный ход */ if (discrete && elem.checked) config.dataset.discrete = 'yes';
    else if (discrete && !elem.checked) config.dataset.discrete = 'no';
    /* Подписи к бегунам */ if (tip && elem.checked) {
        var element = event.target;
        _tipToggler.showTip(element, orientation);
    } else if (tip && !elem.checked) _tipToggler.hideTip(elem, orientation);
    /* Смена ориентации */ if (orient && elem.checked) {
        /* Передача в конфиг флага ориентации */ config.dataset.orientation = 'vertical';
        /* Извлечение из конфига флага ориентации */ orientation = config.dataset.orientation;
        _orientToggler.orientationToggler(elem, orientation);
        _mouse.resetBtnCoord(event);
    } else if (orient && elem.checked === false) {
        config.dataset.orientation = 'horizontal';
        orientation = config.dataset.orientation;
        _orientToggler.orientationToggler(elem, orientation);
        _mouse.resetBtnCoord(event);
    }
}
function changeMinListener(event) {
    var elem = event.target;
    var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
    var parent = elem.parentNode;
    var min = Number(elem.value);
    var maxInput = parent.querySelector('.zdslider-panel__max');
    var max = Number(maxInput.value);
    /* Указал произвольный шаг */ var step = 1;
    var newScaleArr = _scale.makeScale(min, max, step);
    /* Передаю в конфиг */ config.dataset.min = String(min);
    config.dataset.max = String(max);
    _tipToggler.reValueTip(elem);
    var iteration = newScaleArr[1];
    var iterationsArr = newScaleArr[2];
    _scale.modifyScaleInput(parent, iteration, iterationsArr);
    /* ВНИМАНИЕ!!!! Здесь определил числовое значение как строку */ var currentInst = config.dataset.inst;
    /* Ограничитель, чтобы max не превышал min */ maxInput.setAttribute('min', String(min));
    /* Перестроение шкалы по новому значению min */ _scale.reScale(newScaleArr[0], currentInst);
}
function changeMaxListener(event) {
    var elem = event.target;
    var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
    var parent = elem.parentNode;
    var minInput = parent.querySelector('.zdslider-panel__min');
    var min = Number(minInput.value);
    var max = Number(elem.value);
    /* Указал произвольный шаг */ var step = 1;
    /* получение массивов */ var newScaleArr = _scale.makeScale(min, max, step);
    /* Передаю в конфиг */ config.dataset.min = String(min);
    config.dataset.max = String(max);
    _tipToggler.reValueTip(elem);
    var iteration = newScaleArr[1];
    var iterationsArr = newScaleArr[2];
    _scale.modifyScaleInput(parent, iteration, iterationsArr);
    var currentInst = config.dataset.inst;
    /* Ограничитель, чтобы min не превышал max */ minInput.setAttribute('max', String(max));
    /* Перестроение шкалы по новому значению min */ _scale.reScale(newScaleArr[0], currentInst);
}
function changeStepListener(event) {
    var elem = event.target;
    var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
    var parent = elem.parentNode;
    var minInput = parent.querySelector('.zdslider-panel__min');
    var maxInput = parent.querySelector('.zdslider-panel__max');
    var min = Number(minInput.value);
    var max = Number(maxInput.value);
    var val = Number(elem.value);
    var current = Number(elem.dataset.current);
    var arr = elem.dataset.steps.split(',');
    var arrNumber = arr.map(parseFloat);
    /* Индекс текущего шага шкалы в массиве */ var currentIndex = arrNumber.indexOf(current);
    if (localStorage.test) {
        current = Number(localStorage.current_1);
        val = Number(localStorage.val_1);
    }
    if (current < val) {
        elem.dataset.current = String(arrNumber[currentIndex - 1]);
        elem.value = String(arrNumber[currentIndex - 1]);
    }
    if (localStorage.test) {
        current = Number(localStorage.current_2);
        val = Number(localStorage.val_2);
    }
    if (current > val) {
        elem.dataset.current = String(arrNumber[currentIndex + 1]);
        elem.value = String(arrNumber[currentIndex + 1]);
    }
    var currentInst = config.dataset.inst;
    /* val после изменения на значение из массива */ var step = Number(elem.value);
    var newScaleArr = _scale.makeScale(min, max, step);
    /* Перестроение шкалы по новому значению шага */ _scale.reScale(newScaleArr[0], currentInst);
}
/* Сдвиг бегунов при изменении размера окна */ window.addEventListener('resize', function() {
    var config = document.body.querySelector('.zdslider-config');
    var ranger = document.body.querySelector('.ranger');
    var interval = document.body.querySelector('.ranger__interval');
    var btn1 = document.body.querySelector('[data-type="btn-first"]');
    var btn2 = document.body.querySelector('[data-type="btn-second"]');
    var btn1InitPos = config.dataset.btn1_init_pos;
    var btn2InitPos = config.dataset.btn2_init_pos;
    if (ranger.offsetWidth == Number(btn2InitPos) || ranger.offsetWidth < Number(btn2InitPos) || ranger.offsetWidth == Number(btn1InitPos) || ranger.offsetWidth < Number(btn1InitPos)) {
        config.dataset.btn2_init_pos = String(ranger.offsetWidth - btn2.offsetWidth);
        btn1.style.marginLeft = "0px";
        btn2.style.marginLeft = config.dataset.btn2_init_pos + 'px';
        interval.style.marginLeft = "0px";
        interval.style.width = config.dataset.btn2_init_pos + 'px';
        console.log(btn1InitPos);
    }
});

},{"../js/scale.js":"cJo0M","./runnerToggler.js":"jeNwH","../js/tipToggler.js":"gy6Bw","../js/orientToggler.js":"1sov8","../js/mouse.js":"1tMu9"}],"jeNwH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oneRunner = oneRunner;
exports.twoRunners = twoRunners;
var _model = require("../js/model.js");
function oneRunner(elem) {
    var _a, _b;
    var config = (_b = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.zdslider-config');
    var orientation = config.dataset.orientation;
    var ranger = elem.parentNode.parentNode.querySelector('.ranger');
    var interval = ranger.querySelector('.ranger__interval');
    var button1 = ranger.querySelector('[data-type="btn-first"]');
    var button2 = ranger.querySelector('[data-type="btn-second"]');
    config.dataset.runners = '1';
    /* Обнуляю надпись над бегуном */ button1.setAttribute('data-tip', '');
    button2.remove();
    if (orientation == 'horizontal') {
        interval.style.width = ranger.offsetWidth + 'px';
        interval.style.marginLeft = '0px';
        button1.style.marginLeft = ranger.offsetWidth - button1.offsetWidth + 'px';
    } else if (orientation == 'vertical') {
        interval.style.width = "5px";
        interval.style.height = ranger.offsetHeight + 'px';
        interval.style.marginTop = "0px";
        button1.style.marginTop = "0px";
    }
}
function twoRunners(elem, inst) {
    var _a, _b;
    var config = (_b = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.zdslider-config');
    var orientation = config.dataset.orientation;
    var ranger = elem.parentNode.parentNode.querySelector('.ranger');
    config.dataset.runners = '2';
    var button1 = ranger.querySelector('[data-type="btn-first"]');
    /* Обнуляю надпись над бегуном */ button1.setAttribute('data-tip', '');
    var secondButton = new _model.Button();
    secondButton.setAttribute('data-type', 'btn-second');
    secondButton.setAttribute('data-inst', inst);
    /* Обнуляю надпись над бегуном */ secondButton.setAttribute('data-tip', '');
    secondButton.appendTo(ranger);
    var button2 = ranger.querySelector('[data-type="btn-second"]');
    var interval = ranger.querySelector('.ranger__interval');
    if (orientation == 'horizontal') {
        interval.style.width = ranger.offsetWidth + 'px';
        button1.style.marginLeft = '0px';
        button2.style.marginLeft = ranger.offsetWidth - button1.offsetWidth + 'px';
    } else if (orientation == 'vertical') {
        interval.style.width = "5px";
        interval.style.height = ranger.offsetHeight + 'px';
        interval.style.marginTop = "0px";
        button1.style.marginTop = ranger.offsetHeight + 'px';
        button2.classList.add('ranger-vert__button');
        button2.style.marginTop = "0px";
    }
}

},{"../js/model.js":"6Yfb5"}],"1sov8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.orientationToggler = orientationToggler;
var _tipToggler = require("../js/tipToggler.js");
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
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
            it = it.call(o);
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
                if (!normalCompletion && it["return"] != null) it["return"]();
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
function orientationToggler(elem, orientation) {
    var zdslider = elem.parentNode.parentNode.querySelector('.zdslider');
    var ranger = zdslider.querySelector('.ranger');
    var rangerInterval = zdslider.querySelector('.ranger__interval');
    var rangerScale = zdslider.querySelector('.ranger__scale');
    var rangerScaleDivision = zdslider.querySelector('.ranger__scale-division');
    var rangerScaleDivisionSpans = zdslider.querySelectorAll('.ranger__scale-division-span');
    var rangerButtons = zdslider.querySelectorAll('.ranger__button');
    var config = elem.parentNode.parentNode.querySelector('.zdslider-config');
    /* Сброс флага ярлыка */ _tipToggler.hideTip(elem);
    if (orientation === 'vertical') {
        zdslider.classList.add('zdslider-vert');
        ranger.classList.add('ranger-vert');
        rangerInterval.classList.add('ranger-vert__interval');
        rangerScale.classList.add('ranger-vert__scale');
        rangerScaleDivision.classList.add('ranger-vert__scale-division');
        rangerInterval.style.height = ranger.offsetHeight + 'px';
        rangerInterval.style.width = "5px";
        rangerInterval.style.marginLeft = "0px";
        config.dataset.width = String(ranger.offsetWidth);
        config.dataset.height = String(ranger.offsetHeight);
        rangerScaleDivisionSpans.forEach(function(elem1) {
            elem1.classList.add('ranger-vert__scale-division-span');
        });
        var _iterator = _createForOfIteratorHelper(rangerButtons), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _elem = _step.value;
                _elem.classList.add('ranger-vert__button');
                /* Сброс значений ярлыков */ _elem.dataset.tip = '';
                /* Количество бегунов */ if (rangerButtons.length === 1) {
                    _elem.style.marginTop = "0px";
                    _elem.style.marginLeft = "0px";
                } else if (rangerButtons.length === 2) {
                    if (_elem.dataset.type === 'btn-first') {
                        _elem.style.marginTop = ranger.offsetHeight + 'px';
                        _elem.style.marginLeft = "0px";
                    } else if (_elem.dataset.type === 'btn-second') {
                        _elem.style.marginTop = "0px";
                        _elem.style.marginLeft = "0px";
                    }
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    } else if (orientation === 'horizontal') {
        zdslider.classList.remove('zdslider-vert');
        ranger.classList.remove('ranger-vert');
        rangerInterval.classList.remove('ranger-vert__interval');
        rangerScale.classList.remove('ranger-vert__scale');
        rangerScaleDivision.classList.remove('ranger-vert__scale-division');
        /* Переопределение стиля интервала после определения класса */ rangerInterval.style.width = ranger.offsetWidth + 'px';
        rangerInterval.style.height = "5px";
        rangerInterval.style.marginTop = "0px";
        config.dataset.width = String(ranger.offsetWidth);
        config.dataset.height = String(ranger.offsetHeight);
        rangerScaleDivisionSpans.forEach(function(elem1) {
            elem1.classList.remove('ranger-vert__scale-division-span');
        });
        rangerButtons.forEach(function(elem1) {
            elem1.classList.remove('ranger-vert__button');
            elem1.classList.remove('ranger-vert__button-tip');
            elem1.dataset.tip = '';
            /* Сброс значений ярлыков. Новые значения из панели */ if (rangerButtons.length === 1) {
                elem1.style.marginLeft = ranger.offsetWidth - elem1.offsetWidth + 2 + 'px';
                elem1.style.marginTop = "0px";
            } else if (rangerButtons.length === 2) {
                if (elem1.dataset.type === 'btn-first') {
                    elem1.style.marginLeft = "0px";
                    elem1.style.marginTop = "0px";
                } else if (elem1.dataset.type === 'btn-second') {
                    elem1.style.marginLeft = ranger.offsetWidth - elem1.offsetWidth + 'px';
                    elem1.style.marginTop = "0px";
                }
            }
        });
    }
}

},{"../js/tipToggler.js":"gy6Bw"}],"beA2m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configObj = void 0;
var configObj = {
    runner_number: 2,
    min: 12,
    max: 150,
    discrete: 'no',
    orientation: 'horizontal'
};
exports.configObj = configObj;

},{}]},["2rAXy","hTbRF","c1VqH"], "c1VqH", "parcelRequire69db")

//# sourceMappingURL=index.683e1096.js.map
