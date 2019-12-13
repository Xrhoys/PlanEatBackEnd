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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/GraphQL/priorities.js":
/*!***********************************!*\
  !*** ./app/GraphQL/priorities.js ***!
  \***********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        priorities: [Priority]\n        priority(id: ID!): Priority\n    }\n    type Priority {\n        id: ID!\n        slug: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    priorities: function priorities() {
      return regeneratorRuntime.async(function priorities$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    priority: function priority(obj, args, context, info) {
      return regeneratorRuntime.async(function priority$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/GraphQL/status.js":
/*!*******************************!*\
  !*** ./app/GraphQL/status.js ***!
  \*******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allStatus: [Status]\n        status(id: ID!): Status\n    }\n    type Status {\n        id: ID!\n        slug: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    allStatus: function allStatus() {
      return regeneratorRuntime.async(function allStatus$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    status: function status(obj, args, context, info) {
      return regeneratorRuntime.async(function status$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/GraphQL/tickets.js":
/*!********************************!*\
  !*** ./app/GraphQL/tickets.js ***!
  \********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        tickets: [Ticket]\n        ticket(id: ID!): Ticket\n    }\n    type Ticket {\n        id: ID!\n        subject: String\n        priority_id: Int\n        priority: Priority\n        status_id: Int\n        status: Status\n        user_id: Int\n        user: User\n        assigned_to_user_id: Int\n        assigned_to_user: User\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    tickets: function tickets() {
      return regeneratorRuntime.async(function tickets$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["tickets"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    ticket: function ticket(obj, args, context, info) {
      return regeneratorRuntime.async(function ticket$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["tickets"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  },
  Ticket: {
    user: function user(obj, args, context, info) {
      return regeneratorRuntime.async(function user$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(obj.user_id));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    priority: function priority(obj, args, context, info) {
      return regeneratorRuntime.async(function priority$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findByPk(obj.priority_id));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    status: function status(obj, args, context, info) {
      return regeneratorRuntime.async(function status$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findByPk(obj.status_id));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    },
    assigned_to_user: function assigned_to_user(obj, args, context, info) {
      return regeneratorRuntime.async(function assigned_to_user$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(obj.assigned_to_user_id));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/GraphQL/users.js":
/*!******************************!*\
  !*** ./app/GraphQL/users.js ***!
  \******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    input UserInput {\n        email: String\n        name: String\n    }\n    extend type Query {\n        users: [User]\n        user(id: ID!): User\n        userByName(name: String): User\n    }\n    type User {\n        id: ID!\n        email: String\n        name: String\n    }\n    extend type Mutation {\n        createUser(input: UserInput): User!\n        updateUser(id: ID!, input: UserInput): User!\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    users: function users() {
      return regeneratorRuntime.async(function users$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    user: function user(obj, args, context, info) {
      return regeneratorRuntime.async(function user$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(args.id));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    userByName: function userByName(_, _ref) {
      var name;
      return regeneratorRuntime.async(function userByName$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              name = _ref.name;
              return _context3.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findOne({
                where: {
                  name: name
                }
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }
};

/***/ }),

/***/ "./app/Routes/userRoutes.js":
/*!**********************************!*\
  !*** ./app/Routes/userRoutes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        query {\n            tickets{\n                subject\n                status{\n                  slug\n                }\n                priority{\n                  slug\n                }\n                user{\n                  name\n                }\n                assigned_to_user{\n                  name\n                }\n              }\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var router = __webpack_require__(/*! express */ "express").Router();

var users = __webpack_require__(/*! ../models/users */ "./app/models/users.js");

router.route('/auth').get(function (req, res) {
  var query = gql(_templateObject()); // const username = req.body.username;
  // const password = req.body.password;
  // const newUser = new users(
  //     {
  //         id: 5,
  //         name: username,
  //         email: password
  //     }
  // )
  // Console.log(newUser);
});
module.exports = router;

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);



var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var cors = __webpack_require__(/*! cors */ "cors");

var _require = __webpack_require__(/*! apollo-server-express */ "apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var userRouter = __webpack_require__(/*! ./Routes/userRoutes */ "./app/Routes/userRoutes.js");

var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var server = new ApolloServer({
  modules: [__webpack_require__(/*! ./GraphQL/tickets */ "./app/GraphQL/tickets.js"), __webpack_require__(/*! ./GraphQL/status */ "./app/GraphQL/status.js"), __webpack_require__(/*! ./GraphQL/users */ "./app/GraphQL/users.js"), __webpack_require__(/*! ./GraphQL/priorities */ "./app/GraphQL/priorities.js")]
});
server.applyMiddleware({
  app: app
});
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.use('/', userRouter);
app.listen({
  port: 5000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:5000");
});

/***/ }),

/***/ "./app/database.js":
/*!*************************!*\
  !*** ./app/database.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

var db = {};
var sequelize = new Sequelize('7EubAIjD0y', '7EubAIjD0y', 'VJECI6l4eY', {
  host: 'remotemysql.com',
  port: '3306',
  dialect: 'mysql',
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
  operatorsAliases: false
});
var models = [__webpack_require__(/*! ./models/priorities.js */ "./app/models/priorities.js"), __webpack_require__(/*! ./models/status.js */ "./app/models/status.js"), __webpack_require__(/*! ./models/tickets.js */ "./app/models/tickets.js"), __webpack_require__(/*! ./models/users.js */ "./app/models/users.js")]; // Initialize models

models.forEach(function (model) {
  var seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
}); // Apply associations

Object.keys(db).forEach(function (key) {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/***/ }),

/***/ "./app/models/priorities.js":
/*!**********************************!*\
  !*** ./app/models/priorities.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('priorities', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'priorities',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/status.js":
/*!******************************!*\
  !*** ./app/models/status.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'status',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/tickets.js":
/*!*******************************!*\
  !*** ./app/models/tickets.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tickets', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    subject: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    priority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    assigned_to_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tickets',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/users.js":
/*!*****************************!*\
  !*** ./app/models/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyYXBoUUwvcHJpb3JpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvR3JhcGhRTC9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyYXBoUUwvdGlja2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvR3JhcGhRTC91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvUm91dGVzL3VzZXJSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9wcmlvcml0aWVzLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvc3RhdHVzLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvdGlja2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5IiwicHJpb3JpdGllcyIsImRiIiwiZmluZEFsbCIsInByaW9yaXR5Iiwib2JqIiwiYXJncyIsImNvbnRleHQiLCJpbmZvIiwiZmluZEJ5UGsiLCJpZCIsImFsbFN0YXR1cyIsInN0YXR1cyIsInRpY2tldHMiLCJ0aWNrZXQiLCJUaWNrZXQiLCJ1c2VyIiwidXNlcl9pZCIsInByaW9yaXR5X2lkIiwic3RhdHVzX2lkIiwiYXNzaWduZWRfdG9fdXNlciIsImFzc2lnbmVkX3RvX3VzZXJfaWQiLCJ1c2VycyIsInVzZXJCeU5hbWUiLCJfIiwibmFtZSIsImZpbmRPbmUiLCJ3aGVyZSIsInJvdXRlciIsInJlcXVpcmUiLCJSb3V0ZXIiLCJyb3V0ZSIsImdldCIsInJlcSIsInJlcyIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsImJvZHlQYXJzZXIiLCJjb3JzIiwiQXBvbGxvU2VydmVyIiwidXNlclJvdXRlciIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2VydmVyIiwibW9kdWxlcyIsImFwcGx5TWlkZGxld2FyZSIsInNlbmQiLCJsaXN0ZW4iLCJwb3J0IiwiY29uc29sZSIsImxvZyIsIlNlcXVlbGl6ZSIsInNlcXVlbGl6ZSIsImhvc3QiLCJkaWFsZWN0IiwiZGVmaW5lIiwiZnJlZXplVGFibGVOYW1lIiwicG9vbCIsIm1heCIsIm1pbiIsImFjcXVpcmUiLCJpZGxlIiwib3BlcmF0b3JzQWxpYXNlcyIsIm1vZGVscyIsImZvckVhY2giLCJtb2RlbCIsInNlcU1vZGVsIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFzc29jaWF0ZSIsIkRhdGFUeXBlcyIsInR5cGUiLCJJTlRFR0VSIiwiVU5TSUdORUQiLCJhbGxvd051bGwiLCJwcmltYXJ5S2V5Iiwic2x1ZyIsIlNUUklORyIsInRhYmxlTmFtZSIsInRpbWVzdGFtcHMiLCJzdWJqZWN0IiwiZW1haWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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QixFQUEwQjtBQUNoQ2xELE1BQUUsRUFBRTtBQUNIbUUsVUFBSSxFQUFFRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsRUFBbEIsRUFBc0JDLFFBRHpCO0FBRUhDLGVBQVMsRUFBRSxLQUZSO0FBR0hDLGdCQUFVLEVBQUU7QUFIVCxLQUQ0QjtBQU1oQ3hELFFBQUksRUFBRTtBQUNMb0QsVUFBSSxFQUFFRCxTQUFTLENBQUNPLE1BQVYsQ0FBaUIsR0FBakIsQ0FERDtBQUVMSCxlQUFTLEVBQUU7QUFGTixLQU4wQjtBQVVoQ08sU0FBSyxFQUFFO0FBQ05WLFVBQUksRUFBRUQsU0FBUyxDQUFDTyxNQUFWLENBQWlCLEdBQWpCLENBREE7QUFFTkgsZUFBUyxFQUFFO0FBRkw7QUFWeUIsR0FBMUIsRUFjSjtBQUNGSSxhQUFTLEVBQUUsT0FEVDtBQUVGQyxjQUFVLEVBQUU7QUFGVixHQWRJLENBQVA7QUFrQkEsQ0FuQkQsQzs7Ozs7Ozs7Ozs7QUNGQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9hcHAuanNcIik7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXHJcbmltcG9ydCAqIGFzIGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xyXG4gICAgICAgIHByaW9yaXRpZXM6IFtQcmlvcml0eV1cclxuICAgICAgICBwcmlvcml0eShpZDogSUQhKTogUHJpb3JpdHlcclxuICAgIH1cclxuICAgIHR5cGUgUHJpb3JpdHkge1xyXG4gICAgICAgIGlkOiBJRCFcclxuICAgICAgICBzbHVnOiBTdHJpbmdcclxuICAgICAgICBuYW1lOiBTdHJpbmdcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgcHJpb3JpdGllczogYXN5bmMgKCkgPT4gZGIucHJpb3JpdGllcy5maW5kQWxsKCksXHJcbiAgICAgICAgcHJpb3JpdHk6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgICAgICAgIGRiLnByaW9yaXRpZXMuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgICB9LFxyXG59XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcclxuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgICBleHRlbmQgdHlwZSBRdWVyeSB7XHJcbiAgICAgICAgYWxsU3RhdHVzOiBbU3RhdHVzXVxyXG4gICAgICAgIHN0YXR1cyhpZDogSUQhKTogU3RhdHVzXHJcbiAgICB9XHJcbiAgICB0eXBlIFN0YXR1cyB7XHJcbiAgICAgICAgaWQ6IElEIVxyXG4gICAgICAgIHNsdWc6IFN0cmluZ1xyXG4gICAgICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgICBhbGxTdGF0dXM6IGFzeW5jICgpID0+IGRiLnN0YXR1cy5maW5kQWxsKCksXHJcbiAgICAgICAgc3RhdHVzOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PiBkYi5zdGF0dXMuZmluZEJ5UGsoYXJncy5pZCksXHJcbiAgICB9LFxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xyXG4gICAgICAgIHRpY2tldHM6IFtUaWNrZXRdXHJcbiAgICAgICAgdGlja2V0KGlkOiBJRCEpOiBUaWNrZXRcclxuICAgIH1cclxuICAgIHR5cGUgVGlja2V0IHtcclxuICAgICAgICBpZDogSUQhXHJcbiAgICAgICAgc3ViamVjdDogU3RyaW5nXHJcbiAgICAgICAgcHJpb3JpdHlfaWQ6IEludFxyXG4gICAgICAgIHByaW9yaXR5OiBQcmlvcml0eVxyXG4gICAgICAgIHN0YXR1c19pZDogSW50XHJcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNcclxuICAgICAgICB1c2VyX2lkOiBJbnRcclxuICAgICAgICB1c2VyOiBVc2VyXHJcbiAgICAgICAgYXNzaWduZWRfdG9fdXNlcl9pZDogSW50XHJcbiAgICAgICAgYXNzaWduZWRfdG9fdXNlcjogVXNlclxyXG4gICAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgICBRdWVyeToge1xyXG4gICAgICAgIHRpY2tldHM6IGFzeW5jICgpID0+IGRiLnRpY2tldHMuZmluZEFsbCgpLFxyXG4gICAgICAgIHRpY2tldDogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cclxuICAgICAgICAgICAgZGIudGlja2V0cy5maW5kQnlQayhhcmdzLmlkKSxcclxuICAgIH0sXHJcbiAgICBUaWNrZXQ6IHtcclxuICAgICAgICB1c2VyOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICAgICAgICBkYi51c2Vycy5maW5kQnlQayhvYmoudXNlcl9pZCksXHJcbiAgICAgICAgcHJpb3JpdHk6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgICAgICAgIGRiLnByaW9yaXRpZXMuZmluZEJ5UGsob2JqLnByaW9yaXR5X2lkKSxcclxuICAgICAgICBzdGF0dXM6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XHJcbiAgICAgICAgICAgIGRiLnN0YXR1cy5maW5kQnlQayhvYmouc3RhdHVzX2lkKSxcclxuICAgICAgICBhc3NpZ25lZF90b191c2VyOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PlxyXG4gICAgICAgICAgICBkYi51c2Vycy5maW5kQnlQayhvYmouYXNzaWduZWRfdG9fdXNlcl9pZCksXHJcbiAgICB9LFxyXG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9kYXRhYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICAgIGlucHV0IFVzZXJJbnB1dCB7XHJcbiAgICAgICAgZW1haWw6IFN0cmluZ1xyXG4gICAgICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgfVxyXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xyXG4gICAgICAgIHVzZXJzOiBbVXNlcl1cclxuICAgICAgICB1c2VyKGlkOiBJRCEpOiBVc2VyXHJcbiAgICAgICAgdXNlckJ5TmFtZShuYW1lOiBTdHJpbmcpOiBVc2VyXHJcbiAgICB9XHJcbiAgICB0eXBlIFVzZXIge1xyXG4gICAgICAgIGlkOiBJRCFcclxuICAgICAgICBlbWFpbDogU3RyaW5nXHJcbiAgICAgICAgbmFtZTogU3RyaW5nXHJcbiAgICB9XHJcbiAgICBleHRlbmQgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICAgICAgY3JlYXRlVXNlcihpbnB1dDogVXNlcklucHV0KTogVXNlciFcclxuICAgICAgICB1cGRhdGVVc2VyKGlkOiBJRCEsIGlucHV0OiBVc2VySW5wdXQpOiBVc2VyIVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgICB1c2VyczogYXN5bmMgKCkgPT4gZGIudXNlcnMuZmluZEFsbCgpLFxyXG4gICAgICAgIHVzZXI6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+IGRiLnVzZXJzLmZpbmRCeVBrKGFyZ3MuaWQpLFxyXG4gICAgICAgIHVzZXJCeU5hbWU6IGFzeW5jIChfLCB7bmFtZX0pID0+IGRiLnVzZXJzLmZpbmRPbmUoIHt3aGVyZToge25hbWU6IG5hbWV9fSApLFxyXG4gICAgfVxyXG59IiwiY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpLlJvdXRlcigpO1xyXG5sZXQgdXNlcnMgPSByZXF1aXJlKCcuLi9tb2RlbHMvdXNlcnMnKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnL2F1dGgnKS5nZXQoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGdxbGBcclxuICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICAgIHRpY2tldHN7XHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0XHJcbiAgICAgICAgICAgICAgICBzdGF0dXN7XHJcbiAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByaW9yaXR5e1xyXG4gICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1c2Vye1xyXG4gICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25lZF90b191c2Vye1xyXG4gICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xyXG4gICAgLy8gY29uc3QgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcclxuXHJcbiAgICAvLyBjb25zdCBuZXdVc2VyID0gbmV3IHVzZXJzKFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaWQ6IDUsXHJcbiAgICAvLyAgICAgICAgIG5hbWU6IHVzZXJuYW1lLFxyXG4gICAgLy8gICAgICAgICBlbWFpbDogcGFzc3dvcmRcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyApXHJcblxyXG4gICAgLy8gQ29uc29sZS5sb2cobmV3VXNlcik7XHJcbn0pXHJcblxyXG4gbW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxuY29uc3QgeyBBcG9sbG9TZXJ2ZXIgfSA9IHJlcXVpcmUoJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcycpXHJcbmNvbnN0IHVzZXJSb3V0ZXIgPSByZXF1aXJlKCcuL1JvdXRlcy91c2VyUm91dGVzJyk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKClcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuYXBwLnVzZShjb3JzKCkpXHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICAgIG1vZHVsZXM6IFtcclxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvdGlja2V0cycpLFxyXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC9zdGF0dXMnKSxcclxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvdXNlcnMnKSxcclxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvcHJpb3JpdGllcycpLFxyXG4gICAgXVxyXG59KVxyXG5cclxuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KVxyXG5cclxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4gcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpKVxyXG5hcHAudXNlKCcvJywgdXNlclJvdXRlcilcclxuXHJcbmFwcC5saXN0ZW4oeyBwb3J0OiA1MDAwIH0sICgpID0+XHJcbiAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo1MDAwYCksXHJcbikiLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKVxyXG5cclxudmFyIGRiID0ge31cclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICAnN0V1YkFJakQweScsXHJcbiAgICAnN0V1YkFJakQweScsXHJcbiAgICAnVkpFQ0k2bDRlWScsXHJcbiAgICB7XHJcbiAgICAgICAgaG9zdDogJ3JlbW90ZW15c3FsLmNvbScsXHJcbiAgICAgICAgcG9ydDogJzMzMDYnLFxyXG4gICAgICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICAgICAgZGVmaW5lOiB7XHJcbiAgICAgICAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvb2w6IHtcclxuICAgICAgICAgICAgbWF4OiA1LFxyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgICAgICAgICBpZGxlOiAxMDAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIDxodHRwOi8vZG9jcy5zZXF1ZWxpemVqcy5jb20vbWFudWFsL3R1dG9yaWFsL3F1ZXJ5aW5nLmh0bWwjb3BlcmF0b3JzPlxyXG4gICAgICAgIG9wZXJhdG9yc0FsaWFzZXM6IGZhbHNlLFxyXG4gICAgfSxcclxuKVxyXG5cclxubGV0IG1vZGVscyA9IFtcclxuICAgIHJlcXVpcmUoJy4vbW9kZWxzL3ByaW9yaXRpZXMuanMnKSxcclxuICAgIHJlcXVpcmUoJy4vbW9kZWxzL3N0YXR1cy5qcycpLFxyXG4gICAgcmVxdWlyZSgnLi9tb2RlbHMvdGlja2V0cy5qcycpLFxyXG4gICAgcmVxdWlyZSgnLi9tb2RlbHMvdXNlcnMuanMnKSxcclxuXVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBtb2RlbHNcclxubW9kZWxzLmZvckVhY2gobW9kZWwgPT4ge1xyXG4gICAgY29uc3Qgc2VxTW9kZWwgPSBtb2RlbChzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcclxuICAgIGRiW3NlcU1vZGVsLm5hbWVdID0gc2VxTW9kZWxcclxufSlcclxuXHJcbi8vIEFwcGx5IGFzc29jaWF0aW9uc1xyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYgKCdhc3NvY2lhdGUnIGluIGRiW2tleV0pIHtcclxuICAgICAgICBkYltrZXldLmFzc29jaWF0ZShkYilcclxuICAgIH1cclxufSlcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZVxyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemVcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGIiLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3ByaW9yaXRpZXMnLCB7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDEwKS5VTlNJR05FRCxcblx0XHRcdGFsbG93TnVsbDogZmFsc2UsXG5cdFx0XHRwcmltYXJ5S2V5OiB0cnVlXG5cdFx0fSxcblx0XHRzbHVnOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDY0KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU2KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICdwcmlvcml0aWVzJyxcblx0XHR0aW1lc3RhbXBzOiBmYWxzZVxuXHR9KTtcbn07XG4iLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3N0YXR1cycsIHtcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoMTApLlVOU0lHTkVELFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZSxcblx0XHRcdHByaW1hcnlLZXk6IHRydWVcblx0XHR9LFxuXHRcdHNsdWc6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNjQpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH0sXG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORygyNTYpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH1cblx0fSwge1xuXHRcdHRhYmxlTmFtZTogJ3N0YXR1cycsXG5cdFx0dGltZXN0YW1wczogZmFsc2Vcblx0fSk7XG59O1xuIiwiLyoganNoaW50IGluZGVudDogMSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG5cdHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCd0aWNrZXRzJywge1xuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSkuVU5TSUdORUQsXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlLFxuXHRcdFx0cHJpbWFyeUtleTogdHJ1ZVxuXHRcdH0sXG5cdFx0c3ViamVjdDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORygyNTYpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH0sXG5cdFx0cHJpb3JpdHlfaWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdHN0YXR1c19pZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoNCksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHR1c2VyX2lkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHRhc3NpZ25lZF90b191c2VyX2lkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG5cdFx0XHRhbGxvd051bGw6IHRydWVcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICd0aWNrZXRzJyxcblx0XHR0aW1lc3RhbXBzOiBmYWxzZVxuXHR9KTtcbn07XG4iLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXJzJywge1xuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMCkuVU5TSUdORUQsXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlLFxuXHRcdFx0cHJpbWFyeUtleTogdHJ1ZVxuXHRcdH0sXG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORygyNTYpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH0sXG5cdFx0ZW1haWw6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU2KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICd1c2VycycsXG5cdFx0dGltZXN0YW1wczogZmFsc2Vcblx0fSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=