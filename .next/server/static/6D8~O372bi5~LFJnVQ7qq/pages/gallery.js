module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./config/index.js
var URL_API = 'http://35.247.158.50:5000';
// CONCATENATED MODULE: ./services/auth.js



var auth_signin = function signin(email, password) {
  return external_axios_default.a.post("".concat(URL_API, "/login"), {
    email: email,
    password: password,
    grant_type: 'password'
  });
};

/* harmony default export */ var auth = ({
  signin: auth_signin
});
// CONCATENATED MODULE: ./services/article.js



var config = function config() {
  var auth = JSON.parse(localStorage.getItem('auth'));
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(auth.accessToken)
    }
  };
};

var article_get = function get(read_type) {
  return external_axios_default.a.get("".concat(URL_API, "/api/articles?read_type=").concat(read_type), config());
};

var article_getById = function getById(id) {
  return external_axios_default.a.get("".concat(URL_API, "/api/article/").concat(id), config());
};

var article_create = function create(data) {
  return external_axios_default.a.post("".concat(URL_API, "/api/articles"), data, config());
};

var article_edit = function edit(data) {
  return external_axios_default.a.put("".concat(URL_API, "/api/articles"), data, config());
};

var article_remove = function remove(id) {
  return external_axios_default.a.delete("".concat(URL_API, "/api/article/").concat(id), config());
};

/* harmony default export */ var article = ({
  get: article_get,
  getById: article_getById,
  create: article_create,
  edit: article_edit,
  remove: article_remove
});
// CONCATENATED MODULE: ./services/event.js



var event_config = function config() {
  var auth = JSON.parse(localStorage.getItem('auth'));
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(auth.accessToken)
    }
  };
};

var event_get = function get() {
  return external_axios_default.a.get("".concat(URL_API, "/api/events"), event_config());
};

var event_getById = function getById(id) {
  return external_axios_default.a.get("".concat(URL_API, "/api/event/").concat(id), event_config());
};

var event_create = function create(data) {
  return external_axios_default.a.post("".concat(URL_API, "/api/events"), data, event_config());
};

var event_edit = function edit(data) {
  return external_axios_default.a.put("".concat(URL_API, "/api/events"), data, event_config());
};

var event_remove = function remove(id) {
  return external_axios_default.a.delete("".concat(URL_API, "/api/event/").concat(id), event_config());
};

/* harmony default export */ var services_event = ({
  get: event_get,
  getById: event_getById,
  create: event_create,
  edit: event_edit,
  remove: event_remove
});
// CONCATENATED MODULE: ./services/file.js



var file_config = function config() {
  var auth = JSON.parse(localStorage.getItem('auth'));
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': "Bearer ".concat(auth.accessToken)
    }
  };
};

var file_upload = function upload(file) {
  return external_axios_default.a.post("".concat(URL_API, "/api/upload"), file, file_config());
};

/* harmony default export */ var services_file = ({
  upload: file_upload
});
// CONCATENATED MODULE: ./services/media.js



var media_config = function config() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var auth = JSON.parse(localStorage.getItem('auth'));
  var config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(auth.accessToken)
    }
  };

  if (data !== null) {
    config.data = data;
  }

  return config;
};

var media_get = function get() {
  return external_axios_default.a.get("".concat(URL_API, "/api/media"), media_config());
};

var media_remove = function remove(data) {
  return external_axios_default.a.delete("".concat(URL_API, "/api/media"), media_config(data));
};

/* harmony default export */ var media = ({
  get: media_get,
  remove: media_remove
});
// CONCATENATED MODULE: ./services/index.js
/* concated harmony reexport AuthAPI */__webpack_require__.d(__webpack_exports__, "b", function() { return auth; });
/* concated harmony reexport ArticleAPI */__webpack_require__.d(__webpack_exports__, "a", function() { return article; });
/* concated harmony reexport EventAPI */__webpack_require__.d(__webpack_exports__, "c", function() { return services_event; });
/* concated harmony reexport FileAPI */__webpack_require__.d(__webpack_exports__, "d", function() { return services_file; });
/* concated harmony reexport MediaAPI */__webpack_require__.d(__webpack_exports__, "e", function() { return media; });






/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var biomatic_dist_biomatic_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var biomatic_dist_biomatic_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(biomatic_dist_biomatic_min_css__WEBPACK_IMPORTED_MODULE_7__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider;
var SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;

var MainLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedKeys: [],
      auth: {
        username: null,
        token: null
      }
    });

    return _this;
  }

  _createClass(MainLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var auth = JSON.parse(localStorage.getItem('auth'));

      if (!auth) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: '/signin'
        });
        return;
      }

      if (auth.expiredIn <= moment__WEBPACK_IMPORTED_MODULE_5___default()()) {
        this._logout();

        return;
      }

      this.setState({
        auth: auth
      });
    }
  }, {
    key: "_logout",
    value: function _logout() {
      localStorage.removeItem('auth');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: '/signin'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          selectedKeys = _this$state.selectedKeys,
          auth = _this$state.auth;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
        style: {
          minHeight: '100vh'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sider, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-584042066" + " " + "logo"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-584042066" + " " + "_dp-f _fdrt-cl _jtfct-ct _alit-ct _fw-600 _pdv-32px _pdh-16px"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-584042066" + " " + "_fs-5 _mgbt-12px _cl-warning username"
      }, auth.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        icon: "logout",
        block: true,
        className: "_bgcl-gray-200",
        onClick: this._logout
      }, "Logout")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        selectedKeys: selectedKeys,
        defaultSelectedKeys: ['/'],
        mode: "inline"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-584042066"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "notification"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-584042066"
      }, "\u0E02\u0E48\u0E32\u0E27")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "/knowledges"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/knowledges"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-584042066"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "read"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-584042066"
      }, "\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "/events"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/events"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-584042066"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "trophy"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-584042066"
      }, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "/gallery"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/gallery"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-584042066"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "picture"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-584042066"
      }, "\u0E04\u0E25\u0E31\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        className: "_pd-16px"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
        className: "_tal-ct"
      }, "Khulaharn Admin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2636039892",
        css: [".username.jsx-584042066{width:160px;white-space:nowrap;text-overflow:ellipsis;overflow-y:hidden;}"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3342895375",
        css: [".ant-layout-sider{background-color:#fff;}", ".ant-switch-checked{background-color:#f5b83d !important;}", ".ant-pagination-item-active{border-color:#f5b83d !important;}", ".ant-pagination-item-active>a{color:#f5b83d !important;}", ".ant-menu-item-selected{background-color:#f5b83d !important;}", ".ant-menu-item-selected>a{color:#fff;}", ".ant-menu-item:after{border:none !important;}", ".ant-menu-item-selected>a:hover{color:#fff !important;}", ".ant-menu-item>a:hover{color:#f5b83d;}", ".ant-btn:hover,.ant-btn:focus{color:#f5b83d;border-color:#f5b83d !important;}", ".ant-input:hover,.ant-input:focus{border-color:#f5b83d !important;box-shadow:0 0 0 2px rgba(245,184,61,0.2);}", ".ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover{border-color:#f5b83d !important;}", ".ant-btn-primary{border-color:#f5b83d !important;background-color:#f5b83d !important;color:#fff !important;}", ".ant-btn-primary:hover{color:#fff !important;}", "a{color:rgba(0,0,0,0.65) !important;}", ".ant-tabs-nav .ant-tabs-tab:hover{color:#f5b83d !important;}", ".ant-tabs-nav .ant-tabs-tab-active{color:#f5b83d !important;}", ".ant-tabs-ink-bar{background-color:#f5b83d !important;}", ".ant-select-selection:hover{border-color:#f5b83d !important;}", ".ant-select-open .ant-select-selection,.ant-select-focused .ant-select-selection{border-color:#f5b83d !important;box-shadow:0 0 0 2px rgba(245,184,61,0.2);}", ".ant-calendar-selected-date .ant-calendar-date,.ant-calendar-selected-start-date .ant-calendar-date,.ant-calendar-selected-end-date .ant-calendar-date{background-color:#f5b83d !important;}", ".ant-calendar-today .ant-calendar-date{border-color:#f5b83d !important;color:#f5b83d !important;}", ".ant-calendar-selected-day .ant-calendar-date,.ant-calendar-date:hover{background-color:rgba(245,184,61,0.2);}", ".ant-calendar .ant-calendar-ok-btn{border-color:#f5b83d !important;background-color:#f5b83d !important;color:#fff !important;}"]
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var pathname = '';

      if (props.router.pathname === '/' || props.router.pathname === '/articles/add') {
        pathname = '/';
      }

      if (props.router.pathname === '/knowledges' || props.router.pathname === '/knowledges/add') {
        pathname = '/knowledges';
      }

      if (props.router.pathname === '/events' || props.router.pathname === '/events/add') {
        pathname = '/events';
      }

      if (props.router.pathname === '/gallery') {
        pathname = '/gallery';
      }

      return {
        selectedKeys: [pathname]
      };
    }
  }]);

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(MainLayout));

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var News =
/*#__PURE__*/
function (_React$Component) {
  _inherits(News, _React$Component);

  function News() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, News);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(News)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isShowUpload: false,
      selectedImage: [],
      images: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getMedia",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services__WEBPACK_IMPORTED_MODULE_6__[/* MediaAPI */ "e"].get();

            case 3:
              res = _context.sent;

              _this.setState({
                images: res.data.media ? res.data.media : []
              });

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_removeMedia",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var ids, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (_this.state.selectedImage.length) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              ids = _this.state.selectedImage.join(',');
              _context2.next = 6;
              return _services__WEBPACK_IMPORTED_MODULE_6__[/* MediaAPI */ "e"].remove({
                media_ids: ids
              });

            case 6:
              res = _context2.sent;

              _this._getMedia();

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 10]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hadleUpload",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(files) {
        var formData, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                formData = new FormData();
                files.map(function (file) {
                  formData.append('myfiles', file);
                });
                _context3.next = 5;
                return _services__WEBPACK_IMPORTED_MODULE_6__[/* FileAPI */ "d"].upload(formData);

              case 5:
                res = _context3.sent;

                _this._getMedia();

                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_toggleShowUpload", function () {
      _this.setState({
        isShowUpload: !_this.state.isShowUpload
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_selectImage", function (index) {
      if (_this.state.selectedImage.indexOf(index) >= 0) {
        _this.setState({
          selectedImage: _toConsumableArray(_this.state.selectedImage.filter(function (x) {
            return x !== index;
          }))
        });

        return;
      }

      _this.setState({
        selectedImage: _toConsumableArray(_this.state.selectedImage).concat([index])
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_clearSelectedImage", function () {
      _this.setState({
        selectedImage: []
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderSelectedIcon", function (index) {
      return _this.state.selectedImage.indexOf(index) >= 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        className: "selected _pst-asl _cl-positive _fs-4 _t-0px _r-0px",
        type: "check-square"
      }) : null;
    });

    return _this;
  }

  _createClass(News, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._getMedia();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isShowUpload = _this$state.isShowUpload,
          selectedImage = _this$state.selectedImage,
          images = _this$state.images;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "_bgcl-white"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-black _bgcl-gray-300"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "_fs-4"
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E25\u0E31\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4196647678" + " " + "_pd-16px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4196647678" + " " + "_dp-f _fdrt-cl _alit-fst _mgbt-12px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_w-128px",
        onClick: this._toggleShowUpload
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E")), selectedImage.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4196647678" + " " + "_dp-f _mgbt-12px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_w-128px _mgr-8px",
        onClick: this._clearSelectedImage
      }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_w-128px _bgcl-accent _cl-white _bdcl-accent",
        onClick: this._removeMedia
      }, "\u0E25\u0E1A\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01")), isShowUpload && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4196647678" + " " + "dropzone _mgbt-12px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onDrop: this._hadleUpload,
        className: "_w-100pct _h-256px _bdcl-warning-hover _bdcl-gray-300 _bdw-1px _dp-f _alit-ct _jtfct-ct _bdrd-4px",
        style: {
          borderStyle: 'dashed'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4196647678" + " " + "_tal-ct"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_mgbt-8px",
        icon: "upload"
      }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-4196647678" + " " + "_fw-600"
      }, "\u0E02\u0E19\u0E32\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2mb")))), images.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4196647678" + " " + "gallery"
      }, images.map(function (x) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: x.id,
          onClick: function onClick() {
            return _this2._selectImage(x.id);
          },
          className: "jsx-4196647678" + " " + "_pst-rlt _cs-pt"
        }, _this2._renderSelectedIcon(x.id), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          width: "100%",
          src: "".concat(x.media_url),
          className: "jsx-4196647678"
        }));
      })) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "4196647678",
        css: [".gallery.jsx-4196647678{min-height:360px;display:grid;grid-template-columns:repeat(6,1fr);grid-gap:8px;}", ".gallery.jsx-4196647678>div.jsx-4196647678>img.jsx-4196647678{border-radius:4px;width:100%;height:128px;object-fit:cover;}"]
      }))));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })
/******/ ]);