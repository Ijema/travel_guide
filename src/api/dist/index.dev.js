"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlacesData = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _Map = _interopRequireDefault(require("../components/Map/Map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// To make API calls import axios
// The code is copied from rapid restuarant endpoint - javascript-axios (Start)
var URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

var getPlacesData = function getPlacesData(_ref) {
  var latitude, longitude, bounds, _ref2, data;

  return regeneratorRuntime.async(function getPlacesData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          latitude = _ref.latitude, longitude = _ref.longitude, bounds = _ref.bounds;
          // export const getPlacesData = async (sw, ne) => {
          alert(bounds._se.lat);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(URL, {
            params: {
              bl_latitude: bounds._se.lat,
              tr_latitude: bounds._ne.lng,
              bl_longitude: bounds._ne.lat,
              tr_longitude: bounds._sw.lng
            },
            headers: {
              'X-RapidAPI-Key': '217058c330msha2b1e9f0fae9ea5p139614jsna097a965ae28',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }, []));

        case 5:
          _ref2 = _context.sent;
          data = _ref2.data.data;
          return _context.abrupt("return", data);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
};

exports.getPlacesData = getPlacesData;
//# sourceMappingURL=index.dev.js.map
