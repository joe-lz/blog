module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../../" + ({}[chunkId]||chunkId) + "." + {"24":"31fa55ff7acfa6f566c0","25":"4d21791f8336b9e812cb","26":"93bdbfef0b3e740562f6"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("H18U");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "68mg":
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "E60B":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"uploader": "Upload_uploader__no7Tl",
	"assets_body": "Upload_assets_body__3fvwk",
	"assets_upload": "Upload_assets_upload__CWA0E",
	"assets_imgitem": "Upload_assets_imgitem__1GGix",
	"assets_imgitem_content": "Upload_assets_imgitem_content__2uRRp"
};

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "H18U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "leancloud-storage"
var external_leancloud_storage_ = __webpack_require__("jhyn");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/pages/admin/blog/index.module.scss
var index_module = __webpack_require__("pV7K");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./src/components/admin/Layout/index.js
var Layout = __webpack_require__("jhxP");

// EXTERNAL MODULE: ./src/components/admin/TopicItem/index.module.scss
var TopicItem_index_module = __webpack_require__("kslH");
var TopicItem_index_module_default = /*#__PURE__*/__webpack_require__.n(TopicItem_index_module);

// EXTERNAL MODULE: ./src/components/admin/Upload/index.js
var Upload = __webpack_require__("uYGA");

// EXTERNAL MODULE: ./src/service/topics.js
var topics = __webpack_require__("PXNo");

// CONCATENATED MODULE: ./src/components/admin/TopicItem/index.js
var __jsx = external_react_default.a.createElement;









function AdminHome(props) {
  const {
    0: uploadShow,
    1: setuploadShow
  } = Object(external_react_["useState"])(false);
  const {
    0: title,
    1: settitle
  } = Object(external_react_["useState"])('');
  const {
    0: desc,
    1: setdesc
  } = Object(external_react_["useState"])('');
  const {
    0: list,
    1: setlist
  } = Object(external_react_["useState"])([]);

  const update = async (item, params = {}) => {
    await Object(topics["c" /* updateTopic */])({
      topicItem: item,
      params
    });
    setuploadShow(false);
    external_antd_["notification"].success({
      message: '更新成功' // description: "请输入用户名、密码",

    });
    props.onChange();
  };

  return __jsx("div", {
    className: TopicItem_index_module_default.a.item
  }, __jsx("div", {
    className: TopicItem_index_module_default.a.item_img,
    onClick: () => {
      setuploadShow(true);
    },
    style: {
      backgroundImage: `url(${props.item.attributes.url})`
    }
  }, props.item.attributes.url ? '' : '上传'), __jsx("div", {
    className: TopicItem_index_module_default.a.item_right
  }, __jsx("p", {
    className: TopicItem_index_module_default.a.title
  }, props.item.attributes.title), __jsx("p", {
    className: TopicItem_index_module_default.a.desc
  }, props.item.attributes.desc), __jsx(external_antd_["Button"], {
    className: TopicItem_index_module_default.a.btn,
    size: "small",
    type: "primary",
    onClick: () => {
      update(props.item, {
        status: props.item.attributes.status === 1 ? 2 : 1
      });
    }
  }, props.item.attributes.status === 1 ? '上线' : '下线')), __jsx(external_antd_["Modal"], {
    width: 900,
    visible: uploadShow,
    onCancel: () => {
      setuploadShow(false);
    },
    onOk: () => {},
    okText: "\u4FDD\u5B58",
    cancelText: "\u53D6\u6D88",
    bodyStyle: {
      padding: 0,
      maxHeight: 600,
      overflowY: 'scroll',
      position: 'relative'
    },
    footer: null
  }, uploadShow && __jsx(Upload["a" /* default */], {
    onChoose: async ({
      url
    }) => {
      update(props.item, {
        url
      });
    }
  })));
}

/* harmony default export */ var TopicItem = (AdminHome);
// CONCATENATED MODULE: ./src/pages/admin/blog/topics.js
var topics_jsx = external_react_default.a.createElement;










function topics_AdminHome() {
  const {
    0: modalShow,
    1: setmodalShow
  } = Object(external_react_["useState"])(false);
  const {
    0: title,
    1: settitle
  } = Object(external_react_["useState"])('');
  const {
    0: desc,
    1: setdesc
  } = Object(external_react_["useState"])('');
  const {
    0: list,
    1: setlist
  } = Object(external_react_["useState"])([]);
  const {
    0: status,
    1: setstatus
  } = Object(external_react_["useState"])(1);

  const handleCreate = async () => {
    if (list.length > 20) {
      external_antd_["notification"].error({
        message: '话题不能超过20个' // description: "请输入用户名、密码",

      });
      return;
    }

    if (!title) {
      external_antd_["notification"].error({
        message: '请输入标题' // description: "请输入用户名、密码",

      });
      return;
    }

    await Object(topics["a" /* createTopics */])({
      title,
      desc
    });
    setmodalShow(false);
    getlist({
      status
    });
    external_antd_["notification"].success({
      message: '操作成功' // description: "请输入用户名、密码",

    });
  };

  const getlist = async (params = {}) => {
    const res = await Object(topics["b" /* getTopicList */])(params);
    setlist(res);
  };

  const handleNavChange = async params => {
    setstatus(params.status);
  };

  Object(external_react_["useEffect"])(() => {
    getlist({
      status
    });
  }, [status]);
  return topics_jsx(Layout["a" /* default */], null, topics_jsx("p", {
    className: "_admin_body_section_title"
  }, "\u8BDD\u9898\u8BBE\u7F6E"), topics_jsx("div", {
    className: index_module_default.a.topics
  }, topics_jsx("div", {
    className: "_admin_body_section_block"
  }, topics_jsx("div", {
    className: "_admin_body_section_block_nav"
  }, topics_jsx("span", {
    className: status === 1 ? '_admin_body_section_block_nav_item_active' : '_admin_body_section_block_nav_item',
    onClick: () => {
      handleNavChange({
        status: 1
      });
    }
  }, "\u672A\u4E0A\u7EBF"), topics_jsx("span", {
    className: status === 2 ? '_admin_body_section_block_nav_item_active' : '_admin_body_section_block_nav_item',
    onClick: () => {
      handleNavChange({
        status: 2
      });
    }
  }, "\u5DF2\u4E0A\u7EBF"))), list && list.length > 0 && topics_jsx("div", {
    className: "_admin_body_section_block",
    style: {
      padding: 30
    }
  }, topics_jsx("div", {
    className: index_module_default.a.list
  }, list.map(obj => {
    return topics_jsx(TopicItem, {
      key: obj.id,
      item: obj,
      onChange: () => {
        getlist({
          status
        });
      }
    });
  }))), topics_jsx(external_antd_["Button"], {
    type: "primary",
    size: "large",
    onClick: () => {
      setmodalShow(true);
    }
  }, "+ \u65B0\u5EFA\u8BDD\u9898"), topics_jsx(external_antd_["Modal"], {
    title: "\u521B\u5EFA\u8BDD\u9898",
    width: 500,
    visible: modalShow,
    onCancel: () => {
      setmodalShow(false);
    },
    onOk: () => {
      handleCreate();
    },
    okText: "\u4FDD\u5B58",
    cancelText: "\u53D6\u6D88"
  }, topics_jsx("div", null, topics_jsx(external_antd_["Form"], {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 19
    },
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: () => {},
    onFinishFailed: () => {}
  }, topics_jsx(external_antd_["Form"].Item, {
    label: "\u8BDD\u9898\u540D\u79F0",
    name: "title",
    rules: [{
      required: true,
      message: '请输入话题名称'
    }]
  }, topics_jsx(external_antd_["Input"], {
    value: title,
    onChange: e => {
      settitle(e.target.value);
    }
  })), topics_jsx(external_antd_["Form"].Item, {
    label: "\u8BDD\u9898\u63CF\u8FF0",
    name: "desc",
    rules: [{
      required: false,
      message: '请输入话题描述'
    }]
  }, topics_jsx(external_antd_["Input"], {
    value: desc,
    onChange: e => {
      setdesc(e.target.value);
    }
  })))))));
}

/* harmony default export */ var blog_topics = __webpack_exports__["default"] = (topics_AdminHome);

/***/ }),

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PXNo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTopicList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateTopic; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createTopics = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const topicObject = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object('CMS_Topics');
    topicObject.set('status', 1);
    Object.keys(params).map(keyname => {
      topicObject.set(keyname, params[keyname]);
    }); // 将对象保存到云端

    topicObject.save().then(todo => {
      resolve(todo);
    }, error => {
      reject(err);
    });
  });
};
const getTopicList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Topics');
    query.descending('createdAt');
    query.limit(50);
    Object.keys(params).map(keyname => {
      query.equalTo(keyname, params[keyname]);
    });
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const updateTopic = ({
  topicItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map(keyname => {
      topicItem.set(keyname, params[keyname]);
    });
    topicItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};

/***/ }),

/***/ "Qk2m":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__3k3Im",
	"body": "Layout_body__1jffz",
	"footer_content": "Layout_footer_content__2w_tK",
	"logo": "Layout_logo__x1539",
	"copyright": "Layout_copyright__1o4l6"
};

/***/ }),

/***/ "Ruh/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateProfile; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createProfile = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const profileObject = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object("CMS_Profile");
    profileObject.set("logo", "https://static.ccrgt.com/images/42bc258e-d183-49d5-aea4-6eb5914647e3.png");
    profileObject.set("title", "oh my blog");
    profileObject.set("github", "https://github.com/joe-lz/oh-my-blog");
    profileObject.set("copyright", "Copyright © 1998 - 2020 oh my blog. All Rights Reserved");
    profileObject.set("allowAComment", true);
    profileObject.set("allowBComment", true);
    profileObject.set("showBlog", true);
    profileObject.set("blogName", "沸点"); // 将对象保存到云端

    profileObject.save().then(todo => {
      resolve(todo);
    }, error => {
      reject(err);
    });
  });
};
const getProfileList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_Profile");
    query.descending("createdAt");
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const updateProfile = ({
  profileItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map(keyname => {
      if (keyname === "views" || keyname === "views_uv") {
        profileItem.increment(keyname, params[keyname]);
      } else {
        profileItem.set(keyname, params[keyname]);
      }
    });
    profileItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};

/***/ }),

/***/ "WxHd":
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "X0j1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAssetsList; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createAssets = params => {
  return new Promise((resolve, reject) => {
    const file = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.File("avatar.jpg", params.e); // file.set('status', 1)
    // file.set('user', AV.User.current())

    file.save().then(async file => {
      console.log(`文件保存完成。objectId：${file.id}`);
      resolve(file);
    }, error => {
      // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
      reject(error);
    });
  });
};
const getAssetsList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("_File");
    query.descending('createdAt');
    query.limit(50);
    Object.keys(params).map(keyname => {
      query.equalTo(keyname, params[keyname]);
    });
    query.equalTo('metaData.owner', leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().id);
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "jhxP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Qk2m");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_service_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ruh/");
/* harmony import */ var src_service_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mhur");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Nav = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "vwdz")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("vwdz")],
    modules: ['src/components/admin/Nav']
  }
});
const Login = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, "2Ts+")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("2Ts+")],
    modules: ['src/components/admin/Login']
  }
});
const BodyContent = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "zt1u")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("zt1u")],
    modules: ['src/components/admin/BodyContent']
  }
});


Components.defaultProps = {
  onChange: () => {},
  hideSidebar: false,
  bodyStyle: {}
};

function Components(props) {
  const {
    0: curUser,
    1: setcurUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(leancloud_storage__WEBPACK_IMPORTED_MODULE_3___default.a.User.current());
  const {
    0: userinfo,
    1: setuserinfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: profile,
    1: setprofile
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null); // 获取博客设置资料

  const getProfile = () => {
    Object(src_service_profile__WEBPACK_IMPORTED_MODULE_7__[/* getProfileList */ "b"])().then(res => {
      if (res) {
        setprofile(res);
      } else {
        Object(src_service_profile__WEBPACK_IMPORTED_MODULE_7__[/* createProfile */ "a"])().then(resCreate => {
          setprofile(resCreate);
        });
      }
    });
  }; // 获取当前用户资料


  const fetchUserInfo = async () => {
    const res_userinfo = await Object(src_service_user__WEBPACK_IMPORTED_MODULE_8__[/* getMyUserInfo */ "b"])();

    if (res_userinfo) {
      setuserinfo(res_userinfo);
    } else {
      // 创建userinfo
      const userinfoObj = new leancloud_storage__WEBPACK_IMPORTED_MODULE_3___default.a.Object('CMS_UserInfo');
      userinfoObj.set('user', curUser);
      userinfoObj.set('nickname', curUser.toJSON().username);
      userinfoObj.set('priority', 1); // 权限等级 默认：1 未授权

      userinfoObj.set('shortid', shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate()); // shortid
      // 将对象保存到云端

      userinfoObj.save().then(todo => {
        // 成功保存之后，执行其他逻辑
        fetchUserInfo();
      }, error => {// 异常处理
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getProfile();

    if (curUser) {
      fetchUserInfo();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.onChange && props.onChange({
      curUser,
      profile,
      userinfo
    });
  }, [curUser, profile, userinfo]);
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "\u7BA1\u7406\u540E\u53F0")), __jsx(Nav, {
    type: "login",
    curUser: curUser,
    userinfo: userinfo,
    profile: profile
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.body,
    style: props.bodyStyle
  }, !curUser && __jsx(Login, {
    profile: profile
  }), curUser && __jsx(BodyContent, {
    priority: userinfo ? userinfo.toJSON().priority : 0,
    userinfo: userinfo,
    hideSidebar: props.hideSidebar
  }, props.children)));
}

/* harmony default export */ __webpack_exports__["a"] = (Components);

/***/ }),

/***/ "jhyn":
/***/ (function(module, exports) {

module.exports = require("leancloud-storage");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kslH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "TopicItem_item__11l1Z",
	"item_img": "TopicItem_item_img__3VXts",
	"item_right": "TopicItem_item_right__3fkCA",
	"btn": "TopicItem_btn__1dEYX",
	"title": "TopicItem_title__1S9k3",
	"desc": "TopicItem_desc__1GBEI"
};

/***/ }),

/***/ "mhur":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMyUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUserInfo; });
/* unused harmony export getUserInfoById */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUserInfo; });
/* unused harmony export userFollow */
/* unused harmony export userUnFollow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return userFolloweeList; });
/* unused harmony export userFolloweeNumber */
/* unused harmony export userFollowerNumber */
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


const getMyUserInfo = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_UserInfo");
    const curUser = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current();
    query.equalTo("user", curUser);
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const createUserInfo = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建userinfo
    const curUser = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current();
    const userinfoObj = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object("CMS_UserInfo");
    userinfoObj.set("user", curUser);
    userinfoObj.set("nickname", curUser.toJSON().username);
    userinfoObj.set("priority", 1); // 权限等级 默认：1 未授权

    userinfoObj.set("shortid", shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate()); // shortid
    // 将对象保存到云端

    userinfoObj.save().then(todo => {
      resolve(todo);
    }, error => {
      // 异常处理
      reeject(error);
    });
  });
};
const getUserInfoById = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_UserInfo");
    query.get(params.id).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const updateUserInfo = ({
  userinfoItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map(keyname => {
      userinfoItem.set(keyname, params[keyname]);
    });
    userinfoItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
}; // 关注

const userFollow = ({
  userid
}) => {
  return new Promise((resolve, reject) => {
    var query = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().followeeQuery(); // query.include('followee')

    query.count().then(number => {
      if (number > 50) {
        reject("超过最大关注人数(50人)");
      } else {
        leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().follow(userid).then(res => {
          resolve(res);
        }, error => {
          // 异常处理
          reject("关注失败");
        });
      }
    });
  });
}; // 取消关注

const userUnFollow = ({
  userid
}) => {
  return new Promise((resolve, reject) => {
    leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().unfollow(userid).then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
}; // 获取我关注的用户列表

const userFolloweeList = () => {
  return new Promise((resolve, reject) => {
    if (!leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current()) {
      reject([]);
    } else {
      var query = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().followeeQuery();
      query.include("followee");
      query.find().then(followees => {
        //关注的用户列表 followees
        resolve(followees);
      });
    }
  });
}; // 获取用户关注数

const userFolloweeNumber = ({
  userItem
}) => {
  return new Promise((resolve, reject) => {
    var query = userItem.followeeQuery();
    query.count().then(number => {
      resolve(number);
    });
  });
}; // 获取用户粉丝数

const userFollowerNumber = ({
  userItem
}) => {
  return new Promise((resolve, reject) => {
    var query = userItem.followerQuery();
    query.count().then(number => {
      resolve(number);
    });
  });
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "pV7K":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "blog_list__2qSdA"
};

/***/ }),

/***/ "uYGA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("WxHd");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("E60B");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_service_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("X0j1");
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;











function Components(props) {
  const {
    0: imageLists,
    1: setimageLists
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const {
    0: imageListsTrash,
    1: setimageListsTrash
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);

  const beforeUpload = async file => {
    const isLt1M = file.size / 1024 / 1024 < 1;

    if (!isLt1M) {
      // message.error(file.name + "图片大小超出1Mno限制，请修改后重新上传", 0.8);
      antd__WEBPACK_IMPORTED_MODULE_6__["notification"].error({
        message: `图片大小超出1M限制，请修改后重新上传` // description: leanerrors[error.code] ? leanerrors[error.code].msg : "",

      });
      return isLt1M;
    }

    await Object(src_service_assets__WEBPACK_IMPORTED_MODULE_9__[/* createAssets */ "a"])({
      e: file
    });
    const res = await Object(src_service_assets__WEBPACK_IMPORTED_MODULE_9__[/* getAssetsList */ "b"])();
    setimageLists(res);
  };

  const handleChange = () => {}; // 删除图片
  // const handleDel = async (file) => {
  //   file.destroy();
  //   // 获取图片列表
  //   const res = await getAssetsList();
  //   setimageLists(res);
  // };


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    async function fetchData() {
      // 获取图片列表
      const res = await Object(src_service_assets__WEBPACK_IMPORTED_MODULE_9__[/* getAssetsList */ "b"])();
      setimageLists(res);
    }

    fetchData();
  }, []);
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.assets,
    style: props.onChoose ? {
      height: 600,
      overflow: 'hidden',
      overflowY: 'scroll'
    } : {}
  }, __jsx("div", {
    className: "_admin_body_section_block",
    style: props.onChoose ? {
      marginBottom: 0,
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 10000,
      width: '100%'
    } : {}
  }, __jsx("div", {
    className: "_admin_body_section_block_nav"
  }, __jsx("span", {
    className: "_admin_body_section_block_nav_item_active"
  }, "\u5168\u90E8"))), __jsx("div", {
    className: "_admin_body_section_block",
    style: props.onChoose ? {
      boxShadow: 'none'
    } : {}
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.assets_body,
    style: props.onChoose ? {
      paddingTop: 60
    } : {}
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.assets_imgitem
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Upload"], {
    name: "avatar",
    listType: "picture-card",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.uploader,
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    accept: "image/png, image/jpeg, image/jpg"
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.assets_upload
  }, "\u4E0A\u4F20"))), imageLists.map(obj => {
    return __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.assets_imgitem,
      key: obj.id,
      style: {
        backgroundImage: `url(${obj.attributes.url})`
      }
    }, __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.assets_imgitem_content
    }, props.onChoose ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      shape: "round",
      type: "primary",
      onClick: () => {
        props.onChoose({
          url: obj.attributes.url
        });
      }
    }, "\u9009\u62E9\u56FE\u7247") : __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__["CopyToClipboard"], {
      text: obj.attributes.url,
      onCopy: () => {
        antd__WEBPACK_IMPORTED_MODULE_6__["notification"].success({
          message: '复制成功' // description: "请输入用户名、密码",

        });
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      shape: "round"
    }, "\u590D\u5236\u56FE\u7247url"))));
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (Components);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });