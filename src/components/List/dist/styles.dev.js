"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: '30px'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    loading: {
      height: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      padding: '25px'
    },
    marginBottom: {
      marginBottom: '30px'
    },
    list: {
      height: '75vh',
      overflow: 'auto'
    }
  };
});

exports["default"] = _default;
//# sourceMappingURL=styles.dev.js.map
