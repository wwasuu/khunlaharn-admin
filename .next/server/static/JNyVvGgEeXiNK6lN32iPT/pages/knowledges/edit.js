module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);




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




var TabPane = antd__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane;

var Gallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Gallery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
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
              return _services__WEBPACK_IMPORTED_MODULE_5__[/* MediaAPI */ "e"].get();

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleUpload",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(files) {
        var formData, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                formData = new FormData();
                files.map(function (file) {
                  formData.append('myfiles', file);
                });
                _context2.next = 5;
                return _services__WEBPACK_IMPORTED_MODULE_5__[/* FileAPI */ "d"].upload(formData);

              case 5:
                res = _context2.sent;

                _this._getMedia();

                _this.setState({
                  selectedImage: res.data.media
                });

                _this._onAccept();

                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_selectImage", function (id) {
      if (_this.props.galleryType !== 'FEATURED_IMAGE') {
        if (_this.state.selectedImage.find(function (x) {
          return x.id === id;
        })) {
          _this.setState({
            selectedImage: _toConsumableArray(_this.state.selectedImage.filter(function (x) {
              return x.id !== id;
            }))
          });

          return;
        }

        _this.setState({
          selectedImage: _toConsumableArray(_this.state.selectedImage).concat([_this.state.images.find(function (x) {
            return x.id === id;
          })])
        });
      } else {
        _this.setState({
          selectedImage: [_this.state.images.find(function (x) {
            return x.id === id;
          })]
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onCancel", function () {
      _this.setState({
        selectedImage: []
      });

      _this.props.closeGallery();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onAccept", function () {
      _this.props.setImages(_this.state.selectedImage);

      _this.setState({
        selectedImage: []
      });

      _this.props.closeGallery();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderSelectedIcon", function (id) {
      return _this.state.selectedImage.find(function (x) {
        return x.id === id;
      }) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        className: "selected _pst-asl _cl-positive _fs-4 _t-0px _r-0px",
        type: "check-square"
      }) : null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderFooter", function () {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "\u0E15\u0E01\u0E25\u0E07"));
    });

    return _this;
  }

  _createClass(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._getMedia();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isShowGallery = _this$props.isShowGallery,
          closeGallery = _this$props.closeGallery,
          galleryType = _this$props.galleryType;
      var images = this.state.images;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        visible: isShowGallery,
        onCancel: this._onCancel,
        onOk: this._onAccept,
        cancelText: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
        okText: "\u0E15\u0E01\u0E25\u0E07",
        width: 760
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
        defaultActiveKey: "1"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
        tab: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "jsx-2401385551"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          type: "picture"
        }), "Gallery"),
        key: "1"
      }, images.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2401385551" + " " + "gallery"
      }, images.map(function (x) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: x.id,
          onClick: function onClick() {
            return _this2._selectImage(x.id);
          },
          className: "jsx-2401385551" + " " + "_pst-rlt _cs-pt"
        }, _this2._renderSelectedIcon(x.id), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          width: "100%",
          src: "".concat(x.media_url),
          className: "jsx-2401385551"
        }));
      })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2401385551" + " " + "gallery"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
        tab: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "jsx-2401385551"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          type: "upload"
        }), "Upload"),
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2401385551" + " " + "dropzone"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4___default.a, {
        multiple: galleryType === 'IMAGE' ? true : false,
        onDrop: this._handleUpload,
        className: "_w-100pct _h-256px _bdcl-warning-hover _bdcl-gray-300 _bdw-1px _dp-f _alit-ct _jtfct-ct _bdrd-4px",
        style: {
          borderStyle: 'dashed'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2401385551" + " " + "_tal-ct"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_mgbt-8px",
        icon: "upload"
      }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-2401385551" + " " + "_fw-600"
      }, "\u0E02\u0E19\u0E32\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2mb")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2401385551",
        css: [".gallery.jsx-2401385551{min-height:360px;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:8px;}", ".gallery.jsx-2401385551>div.jsx-2401385551>img.jsx-2401385551{border-radius:4px;height:120px;object-fit:cover;}"]
      }));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 37 */
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _components_modal_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_9__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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








var FormItem = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea;

var EditArticles =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditArticles, _React$Component);

  function EditArticles() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditArticles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditArticles)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      article: null,
      isShowGallery: false,
      isLoading: false,
      errorFeaturedImage: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getArticle",
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
              return _services__WEBPACK_IMPORTED_MODULE_8__[/* ArticleAPI */ "a"].getById(_this.props.router.query.id);

            case 3:
              res = _context.sent;

              _this.setState({
                article: _objectSpread({}, res.data.article, {
                  status: res.data.article.status === 1 ? true : false,
                  highlight: res.data.article.highlight === 1 ? true : false
                }),
                images: res.data.article.media,
                featuredImage: res.data.article.featured_image_id ? {
                  media_url: res.data.article.featured_image,
                  id: res.data.article.featured_image_id
                } : null
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit", function (e) {
      e.preventDefault();

      _this.setState({
        isLoading: true
      });

      _this.props.form.validateFields(function (err, data) {
        if (err) {
          _this.setState({
            isLoading: false
          });

          return;
        }

        if (!_this.state.featuredImage) {
          _this.setState({
            isLoading: false,
            errorFeaturedImage: true
          });

          return;
        } else {
          _this.setState({
            isLoading: false,
            errorFeaturedImage: false
          });
        }

        _this._storeArticle(data);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_storeArticle",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var payload, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                payload = _objectSpread({}, data, {
                  read_type: 'knowledge',
                  status: _this.state.article.status ? 1 : 0,
                  highlight: _this.state.article.highlight ? 1 : 0,
                  id: _this.state.article.id
                });

                if (_this.state.featuredImage) {
                  payload.featured_image = "".concat(_this.state.featuredImage.id);
                }

                if (_this.state.images.length) {
                  payload.media_id = _this.state.images.map(function (x) {
                    return x.id;
                  }).join(',');
                }

                _context2.next = 6;
                return _services__WEBPACK_IMPORTED_MODULE_8__[/* ArticleAPI */ "a"].edit(payload);

              case 6:
                res = _context2.sent;
                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
                  pathname: '/knowledges'
                });
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
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_changeStatus", function () {
      _this.setState({
        article: _objectSpread({}, _this.state.article, {
          status: !_this.state.article.status
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_changeHighlight", function () {
      _this.setState({
        article: _objectSpread({}, _this.state.article, {
          highlight: !_this.state.article.highlight
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_openGallery", function (type) {
      _this.setState({
        galleryType: type,
        isShowGallery: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_closeGallery", function () {
      _this.setState({
        isShowGallery: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_setImages", function (images) {
      if (_this.state.galleryType === 'FEATURED_IMAGE') {
        if (images.length) {
          _this.setState({
            featuredImage: images[0],
            galleryType: ''
          });
        }
      } else {
        _this.setState({
          images: _toConsumableArray(_this.state.images).concat(_toConsumableArray(images)),
          galleryType: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_removeSelectedImage", function (e) {
      e.stopPropagation();
      var index = parseInt(e.currentTarget.attributes['data-id'].value);

      _this.setState({
        images: _this.state.images.filter(function (x, i) {
          return i !== index;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_removeFeaturedImage", function (e) {
      e.stopPropagation();

      _this.setState({
        featuredImage: null
      });
    });

    return _this;
  }

  _createClass(EditArticles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._getArticle();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state = this.state,
          isShowGallery = _this$state.isShowGallery,
          isLoading = _this$state.isLoading,
          article = _this$state.article,
          galleryType = _this$state.galleryType,
          images = _this$state.images,
          featuredImage = _this$state.featuredImage;

      if (!article) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_common_Layout__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "_bgcl-white"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "_dp-f _jtfct-spbtw _pdh-16px _pdv-12px _cl-white",
        style: {
          backgroundColor: '#001529'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "_fs-4"
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        loading: isLoading,
        icon: "save",
        className: "_mgr-8px",
        form: "form",
        key: "submit",
        htmlType: "submit"
      }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/knowledges"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: "close"
      }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "_pd-16px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        id: "form",
        onSubmit: this._handleSubmit,
        className: "login-form _pdr-8px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07",
        colon: false
      }, getFieldDecorator('title_th', {
        initialValue: article.title_th,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "Title",
        colon: false
      }, getFieldDecorator('title_en', {
        initialValue: article.title_en,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
        colon: false
      }, getFieldDecorator('description_th', {
        initialValue: article.description_th,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextArea, {
        rows: 4
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "Content",
        colon: false
      }, getFieldDecorator('description_en', {
        initialValue: article.description_en,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextArea, {
        rows: 4
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "URL Video (Youtube only)",
        colon: false
      }, getFieldDecorator('video_url', {
        initialValue: article.video_url
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E35\u0E22\u0E19",
        colon: false
      }, getFieldDecorator('author_th', {
        initialValue: article.author_th,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "Author",
        colon: false
      }, getFieldDecorator('author_en', {
        initialValue: article.author_en,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48",
        colon: false
      }, getFieldDecorator('place_th', {
        initialValue: article.place_th,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormItem, {
        label: "Place",
        colon: false
      }, getFieldDecorator('place_en', {
        initialValue: article.place_en,
        rules: [{
          required: true
        }]
      })(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "_pdl-8px"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-row ant-form-item ant-form-item-no-colon"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-form-item-label"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-1533010284"
      }, "Status ", article.status)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        checked: article.status,
        onChange: this._changeStatus
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-row ant-form-item ant-form-item-no-colon"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-form-item-label"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-1533010284"
      }, "Highlight")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        checked: article.highlight,
        onChange: this._changeHighlight
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-row ant-form-item ant-form-item-no-colon"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-form-item-label"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-1533010284"
      }, "Featured")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1533010284" + " " + "_h-256px _bgcl-gray-200 _mgbt-12px _bdrd-4px _dp-f _fdrt-cl _alit-ct _jtfct-ct"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2._openGallery('FEATURED_IMAGE');
        },
        className: "jsx-1533010284" + " " + "ant-upload ant-upload-drag".concat(this.state.errorFeaturedImage ? ' -error' : '')
      }, featuredImage ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "_h-256px _pd-12px _pst-asl"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "close-circle",
        className: "_fs-5 _cl-accent _pst-asl _t-16px _r-16px",
        onClick: this._removeFeaturedImage
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        width: "100%",
        height: "100%",
        style: {
          objectFit: 'cover'
        },
        src: "".concat(featuredImage.media_url),
        className: "jsx-1533010284" + " " + "_bdrd-4px"
      })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1533010284" + " " + "ant-upload ant-upload-btn"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-upload-drag-container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_mgbt-8px",
        icon: "picture"
      }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-1533010284" + " " + "_fw-600"
      }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49 1 \u0E20\u0E32\u0E1E")))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1533010284",
        css: [".form.jsx-1533010284{display:grid;grid-template-columns:70% 30%;}", ".selected-gallery.jsx-1533010284{display:grid;min-height:360px;display:grid;grid-template-columns:repeat(6,1fr);grid-gap:8px;}", ".selected-gallery.jsx-1533010284>div.jsx-1533010284>img.jsx-1533010284{border-radius:4px;height:120px;object-fit:cover;}", ".ant-upload.ant-upload-drag.-error.jsx-1533010284{border:1px solid red !important;}"]
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-form-item-label"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-1533010284"
      }, "Gallery")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1533010284" + " " + "_bgcl-gray-200 _mgbt-12px _bdrd-4px _dp-f _fdrt-cl _alit-ct _jtfct-ct"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2._openGallery('IMAGE');
        },
        className: "jsx-1533010284" + " " + "_h-256px ant-upload ant-upload-drag _ovf-sc"
      }, images.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "selected-gallery _pd-24px"
      }, images.map(function (x, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: "".concat(x.id, "-").concat(i),
          className: "jsx-1533010284" + " " + "_pst-rlt"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          type: "close-circle",
          className: "_pst-asl _t-4px _r-4px _fs-5 _cl-accent",
          "data-id": i,
          onClick: _this2._removeSelectedImage
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          width: "100%",
          src: "".concat(x.media_url),
          className: "jsx-1533010284"
        }));
      })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1533010284" + " " + "ant-upload ant-upload-btn"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1533010284" + " " + "ant-upload-drag-container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "_mgbt-8px",
        icon: "picture"
      }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E")))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_modal_gallery__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        isShowGallery: isShowGallery,
        closeGallery: this._closeGallery,
        setImages: this._setImages,
        galleryType: galleryType
      }));
    }
  }]);

  return EditArticles;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create()(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(EditArticles)));

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("ansi-colors");

/***/ })
/******/ ]);