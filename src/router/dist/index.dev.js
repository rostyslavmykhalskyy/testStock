"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _StockMarket = _interopRequireDefault(require("../views/Stock-market.vue"));

var _Market = _interopRequireDefault(require("../views/Market.vue"));

var _Warehouse = _interopRequireDefault(require("../views/Warehouse.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Stock-market",
  component: _StockMarket["default"]
}, {
  path: "/warket",
  name: "Market",
  component: _Market["default"]
}, {
  path: "/warehouse",
  name: "Warehouse",
  component: _Warehouse["default"]
}];
var router = new _vueRouter["default"]({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;