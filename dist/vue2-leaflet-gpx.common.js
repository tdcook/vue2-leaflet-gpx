module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0205":
/***/ (function(module, exports) {

module.exports = require("vue2-leaflet");

/***/ }),

/***/ "860c":
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = require("leaflet-gpx");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa4767ee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/LGpx.vue?vue&type=template&id=32841b1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/LGpx.vue?vue&type=template&id=32841b1a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external {"root":"L","commonjs2":"leaflet","commonjs":"leaflet"}
var external_root_L_commonjs2_leaflet_commonjs_leaflet_ = __webpack_require__("860c");
var external_root_L_commonjs2_leaflet_commonjs_leaflet_default = /*#__PURE__*/__webpack_require__.n(external_root_L_commonjs2_leaflet_commonjs_leaflet_);

// EXTERNAL MODULE: external "leaflet-gpx"
var external_leaflet_gpx_ = __webpack_require__("d53b");

// EXTERNAL MODULE: external "vue2-leaflet"
var external_vue2_leaflet_ = __webpack_require__("0205");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/LGpx.vue?vue&type=script&lang=ts&




var LGpx = external_vue_default.a.extend({
    props: {
        gpxFile: {
            type: String,
        },
        gpxOptions: {
            type: Object,
            default: function () { return ({ async: true }); },
        },
        visible: {
            type: Boolean,
            default: true,
        },
    },
    watch: {
        visible: function (newValue) {
            if (newValue) {
                this.parentContainer.addLayer(this);
            }
            else {
                this.parentContainer.removeLayer(this);
            }
        },
        gpxFile: function () {
            this.setup();
        },
        gpxOptions: function () {
            this.setup();
        },
    },
    data: function () {
        return {
            ready: false,
            mapObject: null,
            parentContainer: null,
        };
    },
    mounted: function () {
        this.setup();
    },
    beforeDestroy: function () {
        this.parentContainer.removeLayer(this);
    },
    methods: {
        setup: function () {
            if (this.mapObject) {
                this.parentContainer.removeLayer(this);
                // @ts-ignore
                external_root_L_commonjs2_leaflet_commonjs_leaflet_default.a.DomEvent.off(this.mapObject, this.$listeners);
            }
            this.mapObject = new external_root_L_commonjs2_leaflet_commonjs_leaflet_default.a.GPX(this.$props.gpxFile, this.$props.gpxOptions)
                .on('loaded', this.gpxLoaded)
                .on('addpoint', this.addpoint)
                .on('addline', this.addline);
            // @ts-ignore
            external_root_L_commonjs2_leaflet_commonjs_leaflet_default.a.DomEvent.on(this.mapObject, this.$listeners);
            this.ready = true;
            this.parentContainer = Object(external_vue2_leaflet_["findRealParent"])(this.$parent);
            this.parentContainer.addLayer(this);
        },
        gpxLoaded: function (loadedEvent) {
            this.$emit('gpx-loaded', loadedEvent);
        },
        addpoint: function (addPointEvent) {
            this.$emit('addpoint', addPointEvent);
        },
        addline: function (addLineEvent) {
            this.$emit('addline', addLineEvent);
        },
    },
});
/* harmony default export */ var LGpxvue_type_script_lang_ts_ = (LGpx);

// CONCATENATED MODULE: ./src/LGpx.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_LGpxvue_type_script_lang_ts_ = (LGpxvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/LGpx.vue





/* normalize component */

var component = normalizeComponent(
  src_LGpxvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "LGpx.vue"
/* harmony default export */ var src_LGpx = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_LGpx);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vue2-leaflet-gpx.common.js.map