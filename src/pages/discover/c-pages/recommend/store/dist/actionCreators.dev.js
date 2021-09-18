"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewAlbumsAction = exports.getHotRecommendAction = exports.getTopBannerAction = void 0;

var actionTypes = _interopRequireWildcard(require("./constants"));

var _recommend = require("@/services/recommend");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var changeTopBannerAction = function changeTopBannerAction(res) {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
  };
};

var changeHotRecommendAction = function changeHotRecommendAction(res) {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
  };
};

var changeNewAlbumsAction = function changeNewAlbumsAction(res) {
  return {
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
  };
};

var getTopBannerAction = function getTopBannerAction() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _recommend.getTopBanners)());

          case 2:
            res = _context.sent;
            dispatch(changeTopBannerAction(res));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getTopBannerAction = getTopBannerAction;

var getHotRecommendAction = function getHotRecommendAction(limit) {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap((0, _recommend.getHotRecommends)(limit));

          case 2:
            res = _context2.sent;
            dispatch(changeHotRecommendAction(res));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.getHotRecommendAction = getHotRecommendAction;

var getNewAlbumsAction = function getNewAlbumsAction(limit) {
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap((0, _recommend.getNewAlbums)(limit));

          case 2:
            res = _context3.sent;
            dispatch(changeNewAlbumsAction(res));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.getNewAlbumsAction = getNewAlbumsAction;