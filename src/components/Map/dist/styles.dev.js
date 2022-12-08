"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/styles");

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    paper: {
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100px'
    },
    mapContainer: {
      height: '85vh',
      width: '100%'
    },
    markerContainer: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      '&:hover': {
        zIndex: 2
      }
    },
    pointer: {
      cursor: 'pointer'
    }
  };
});
var _default = useStyles;
exports["default"] = _default;
//# sourceMappingURL=styles.dev.js.map
