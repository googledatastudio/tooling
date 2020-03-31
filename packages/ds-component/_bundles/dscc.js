(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dscc", [], factory);
	else if(typeof exports === 'object')
		exports["dscc"] = factory();
	else
		root["dscc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
// Make all exported types available to external users.
__export(__webpack_require__(/*! ./types */ "./src/types.ts"));
/**
 * Returns the width (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myWidth = dscc.getWidth();
 * console.log('My width is: ', myWidth);
 * ```
 */
exports.getWidth = function () { return document.body.clientWidth; };
/**
 * Returns the height (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myHeight = dscc.getHeight();
 * console.log('My height is: ', myHeight);
 * ```
 */
exports.getHeight = function () { return document.documentElement.clientHeight; };
/**
 * Returns the componentId of the vis. Component ids uniquely identify a vis to
 * Data Studio.
 *
 * Usage:
 * ```
 * var myComponentId = dscc.getComponentId();
 * console.log('My componentId is: ', myComponentId);
 * ```
 */
exports.getComponentId = function () {
    var params = new URLSearchParams(window.location.search);
    if (params.get('dscId') !== null) {
        return params.get('dscId');
    }
    else {
        throw new Error('dscId must be in the query parameters. ' +
            'This is a bug in ds-component, please file a bug: ' +
            'https://github.com/googledatastudio/ds-component/issues/new');
    }
};
/**
 * Returns the fields indexed by their Data Studio id.
 */
var fieldsById = function (message) {
    return message.fields.reduce(function (acc, field) {
        acc[field.id] = field;
        return acc;
    }, {});
};
/**
 * Zips two arrays together into a new array. Uses the length of the shortest
 * array.
 *
 * Usage:
 * ```
 * const a = [1, 2, 3];
 * const b = ['a', 'b', 'c', 'd'];
 * const zipped = zip2(a, b);
 * expect(zipped).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
 * ```
 */
var zip2 = function (t, u) {
    if (t.length < u.length) {
        return t.map(function (tEntry, idx) { return [tEntry, u[idx]]; });
    }
    else {
        return u.map(function (uEntry, idx) { return [t[idx], uEntry]; });
    }
};
// `.sort` isn't stable, but if you compare items, and when they are equal use
// the original index, it is then stable.
var stableSort = function (arr, compare) {
    return arr
        .map(function (item, index) { return ({ item: item, index: index }); })
        .sort(function (a, b) { return compare(a.item, b.item) || a.index - b.index; })
        .map(function (_a) {
        var item = _a.item;
        return item;
    });
};
var dimensionOrMetric = function (cde) {
    return cde.type === types_1.ConfigDataElementType.DIMENSION ||
        cde.type === types_1.ConfigDataElementType.METRIC;
};
var toNum = function (cdet) {
    return cdet === types_1.ConfigDataElementType.DIMENSION ? -1 : 1;
};
var flattenConfigIds = function (message) {
    var dimnsAndMets = [];
    message.config.data.forEach(function (configData) {
        configData.elements
            .filter(dimensionOrMetric)
            .forEach(function (configDataElement) {
            dimnsAndMets.push(configDataElement);
        });
    });
    var sorted = stableSort(dimnsAndMets, function (a, b) { return toNum(a.type) - toNum(b.type); });
    var configIds = [];
    sorted.forEach(function (configDataElement) {
        configDataElement.value.forEach(function () { return configIds.push(configDataElement.id); });
    });
    return configIds;
};
/**
 * Joins a single table row with the matching `ConfigId`
 */
var joinObjectRow = function (configIds) { return function (row) {
    var objectRow = {};
    zip2(row, configIds).forEach(function (_a) {
        var rowVal = _a[0], configId = _a[1];
        if (objectRow[configId] === undefined) {
            objectRow[configId] = [];
        }
        objectRow[configId].push(rowVal);
    }, {});
    return objectRow;
}; };
/**
 * Formats tables into the `ObjectTables` format.
 */
var objectFormatTable = function (message) {
    var _a;
    var configIds = flattenConfigIds(message);
    var objectTables = (_a = {}, _a[types_1.TableType.DEFAULT] = [], _a);
    message.dataResponse.tables.forEach(function (table) {
        var objectRows = table.rows.map(joinObjectRow(configIds));
        if (table.id === types_1.TableType.DEFAULT) {
            objectTables[table.id] = objectRows;
        }
        else {
            var current = objectTables[table.id];
            if (current === undefined) {
                objectTables[table.id] = [];
            }
            objectTables[table.id] = objectTables[table.id].concat(objectRows);
        }
    });
    return objectTables;
};
/**
 * Formats tables into the `Tables` format.
 */
var tableFormatTable = function (message) {
    var _a;
    var fieldsBy = exports.fieldsByConfigId(message);
    var configIds = flattenConfigIds(message);
    var configIdIdx = {};
    var headers = configIds.map(function (configId) {
        if (configIdIdx[configId] === undefined) {
            configIdIdx[configId] = 0;
        }
        else {
            configIdIdx[configId]++;
        }
        var idx = configIdIdx[configId];
        var field = fieldsBy[configId][idx];
        var heading = __assign(__assign({}, field), { configId: configId });
        return heading;
    });
    var tableTables = (_a = {},
        _a[types_1.TableType.DEFAULT] = { headers: [], rows: [] },
        _a);
    message.dataResponse.tables.forEach(function (table) {
        tableTables[table.id] = {
            headers: headers,
            rows: table.rows,
        };
    });
    return tableTables;
};
/**
 * Returns the fields indexed by their config id. Since many fields can be in
 * the same `METRIC`/`DIMENSION` selection, `configId` is mapped to `Field[]`.
 */
exports.fieldsByConfigId = function (message) {
    var fieldsByDSId = fieldsById(message);
    var fieldsBy = {};
    message.config.data.forEach(function (configData) {
        configData.elements
            .filter(dimensionOrMetric)
            .forEach(function (configDataElement) {
            fieldsBy[configDataElement.id] = configDataElement.value.map(function (dsId) { return fieldsByDSId[dsId]; });
        });
    });
    return fieldsBy;
};
/**
 * Flattens the style entries into a single object. `styleId`s should be unique.
 */
var flattenStyle = function (message) {
    var styleById = {};
    (message.config.style || []).forEach(function (styleEntry) {
        styleEntry.elements.forEach(function (configStyleElement) {
            if (styleById[configStyleElement.id] !== undefined) {
                throw new Error("styleIds must be unique. Your styleId: '" + configStyleElement.id + "' is used more than once.");
            }
            styleById[configStyleElement.id] = {
                value: configStyleElement.value,
                defaultValue: configStyleElement.defaultValue,
            };
        });
    }, {});
    return styleById;
};
var themeStyle = function (message) {
    return message.config.themeStyle;
};
var mapInteractionTypes = function (dsInteraction) {
    switch (dsInteraction) {
        case types_1.DSInteractionType.FILTER:
            return types_1.InteractionType.FILTER;
    }
};
var transformDSInteraction = function (message) {
    var dsInteractions = message.config.interactions;
    // TODO - remove once interactions are live.
    if (dsInteractions === undefined) {
        return {};
    }
    return dsInteractions.reduce(function (acc, dsInteraction) {
        var interactions = dsInteraction.supportedActions.map(mapInteractionTypes);
        var value = {
            type: mapInteractionTypes(dsInteraction.value.type),
            data: dsInteraction.value.data,
        };
        acc[dsInteraction.id] = {
            value: value,
            supportedActions: interactions,
        };
        return acc;
    }, {});
};
/**
 * The transform to use for data in a Table format. i.e. `[[1, 2, 3], [4, 5, 6]]`
 */
exports.tableTransform = function (message) { return ({
    tables: tableFormatTable(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
}); };
/**
 * The transform to use for data in an object format. i.e. `[{name: 'john', views: 3}, {name: 'suzie', views: 5}]`
 */
exports.objectTransform = function (message) { return ({
    tables: objectFormatTable(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
}); };
/**
 * Check if the transform is likely the identity function
 * This is not a supported implementation path
 * Avoid this if at all possible - please use either objectTransform or tableTransform
 */
var isProbablyIdentityFunction = function (transform) {
    var isIdentity = false;
    if (transform('identity') === 'identity') {
        isIdentity = true;
        console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.");
    }
    return isIdentity;
};
var isValidTransform = function (transform) {
    var isValid = false;
    if (transform === exports.tableTransform ||
        transform === exports.objectTransform) {
        isValid = true;
    }
    else if (isProbablyIdentityFunction(transform)) {
        isValid = true;
    }
    return isValid;
};
/*
 * Subscribes to messages from Data Studio. Calls `cb` for every new
 * [[MessageType.RENDER]] message. Returns a function that will unsubscribe
 * `callback` from further invocations.
 *
 * Usage - tableTransform:
 * ```
 * var unsubscribe = dscc.subscribeToData(function(message) {
 *   console.log(message.tables)
 *   console.log(message.fields)
 *   console.log(message.style)
 * }, {transform: dscc.tableTransform});
 *
 * setTimeout(function() {
 *   unsubscribe();
 * }, 3000)
 * ```

 * Usage - objectTransform:
 * ```
 * var unsubscribe = dscc.subscribeToData(function(message) {
 *   console.log(message.tables)
 *   console.log(message.fields)
 *   console.log(message.style)
 * }, {transform: dscc.objectTransform});
 *
 * setTimeout(function() {
 *   unsubscribe();
 * }, 3000)
 * ```
 */
exports.subscribeToData = function (cb, options) {
    if (isValidTransform(options.transform)) {
        var onMessage_1 = function (message) {
            if (message.data.type === types_1.MessageType.RENDER) {
                cb(options.transform(message.data));
            }
            else {
                console.error("MessageType: " + message.data.type + " is not supported by this version of the library.");
            }
        };
        window.addEventListener('message', onMessage_1);
        var componentId = exports.getComponentId();
        // Tell DataStudio that the viz is ready to get events.
        var vizReadyMessage = {
            componentId: componentId,
            type: types_1.ToDSMessageType.VIZ_READY,
        };
        window.parent.postMessage(vizReadyMessage, '*');
        return function () { return window.removeEventListener('message', onMessage_1); };
    }
    else {
        throw new Error("Only the built in transform functions are supported.");
    }
};
/*
 * Does the thing that interactions should do.
 */
exports.sendInteraction = function (actionId, interaction, data) {
    var componentId = exports.getComponentId();
    var interactionMessage = {
        type: types_1.ToDSMessageType.INTERACTION,
        id: actionId,
        data: data,
        componentId: componentId,
    };
    window.parent.postMessage(interactionMessage, '*');
};
/*
 * Clears an interaction
 */
exports.clearInteraction = function (actionId, interaction) {
    exports.sendInteraction(actionId, interaction, undefined);
};


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConceptType;
(function (ConceptType) {
    ConceptType["METRIC"] = "METRIC";
    ConceptType["DIMENSION"] = "DIMENSION";
})(ConceptType = exports.ConceptType || (exports.ConceptType = {}));
var MessageType;
(function (MessageType) {
    MessageType["RENDER"] = "RENDER";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var FieldType;
(function (FieldType) {
    FieldType["YEAR"] = "YEAR";
    FieldType["YEAR_QUARTER"] = "YEAR_QUARTER";
    FieldType["YEAR_MONTH"] = "YEAR_MONTH";
    FieldType["YEAR_WEEK"] = "YEAR_WEEK";
    FieldType["YEAR_MONTH_DAY"] = "YEAR_MONTH_DAY";
    FieldType["YEAR_MONTH_DAY_HOUR"] = "YEAR_MONTH_DAY_HOUR";
    FieldType["QUARTER"] = "QUARTER";
    FieldType["MONTH"] = "MONTH";
    FieldType["WEEK"] = "WEEK";
    FieldType["MONTH_DAY"] = "MONTH_DAY";
    FieldType["DAY_OF_WEEK"] = "DAY_OF_WEEK";
    FieldType["DAY"] = "DAY";
    FieldType["HOUR"] = "HOUR";
    FieldType["MINUTE"] = "MINUTE";
    FieldType["DURATION"] = "DURATION";
    FieldType["COUNTRY"] = "COUNTRY";
    FieldType["COUNTRY_CODE"] = "COUNTRY_CODE";
    FieldType["CONTINENT"] = "CONTINENT";
    FieldType["CONTINENT_CODE"] = "CONTINENT_CODE";
    FieldType["SUB_CONTINENT"] = "SUB_CONTINENT";
    FieldType["SUB_CONTINENT_CODE"] = "SUB_CONTINENT_CODE";
    FieldType["REGION"] = "REGION";
    FieldType["REGION_CODE"] = "REGION_CODE";
    FieldType["CITY"] = "CITY";
    FieldType["CITY_CODE"] = "CITY_CODE";
    FieldType["METRO_CODE"] = "METRO_CODE";
    FieldType["LATITUDE_LONGITUDE"] = "LATITUDE_LONGITUDE";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["PERCENT"] = "PERCENT";
    FieldType["TEXT"] = "TEXT";
    FieldType["BOOLEAN"] = "BOOLEAN";
    FieldType["URL"] = "URL";
    FieldType["IMAGE"] = "IMAGE";
    FieldType["CURRENCY_AED"] = "CURRENCY_AED";
    FieldType["CURRENCY_ALL"] = "CURRENCY_ALL";
    FieldType["CURRENCY_ARS"] = "CURRENCY_ARS";
    FieldType["CURRENCY_AUD"] = "CURRENCY_AUD";
    FieldType["CURRENCY_BDT"] = "CURRENCY_BDT";
    FieldType["CURRENCY_BGN"] = "CURRENCY_BGN";
    FieldType["CURRENCY_BOB"] = "CURRENCY_BOB";
    FieldType["CURRENCY_BRL"] = "CURRENCY_BRL";
    FieldType["CURRENCY_CAD"] = "CURRENCY_CAD";
    FieldType["CURRENCY_CDF"] = "CURRENCY_CDF";
    FieldType["CURRENCY_CHF"] = "CURRENCY_CHF";
    FieldType["CURRENCY_CLP"] = "CURRENCY_CLP";
    FieldType["CURRENCY_CNY"] = "CURRENCY_CNY";
    FieldType["CURRENCY_COP"] = "CURRENCY_COP";
    FieldType["CURRENCY_CRC"] = "CURRENCY_CRC";
    FieldType["CURRENCY_CZK"] = "CURRENCY_CZK";
    FieldType["CURRENCY_DKK"] = "CURRENCY_DKK";
    FieldType["CURRENCY_DOP"] = "CURRENCY_DOP";
    FieldType["CURRENCY_EGP"] = "CURRENCY_EGP";
    FieldType["CURRENCY_ETB"] = "CURRENCY_ETB";
    FieldType["CURRENCY_EUR"] = "CURRENCY_EUR";
    FieldType["CURRENCY_GBP"] = "CURRENCY_GBP";
    FieldType["CURRENCY_HKD"] = "CURRENCY_HKD";
    FieldType["CURRENCY_HRK"] = "CURRENCY_HRK";
    FieldType["CURRENCY_HUF"] = "CURRENCY_HUF";
    FieldType["CURRENCY_IDR"] = "CURRENCY_IDR";
    FieldType["CURRENCY_ILS"] = "CURRENCY_ILS";
    FieldType["CURRENCY_INR"] = "CURRENCY_INR";
    FieldType["CURRENCY_IRR"] = "CURRENCY_IRR";
    FieldType["CURRENCY_ISK"] = "CURRENCY_ISK";
    FieldType["CURRENCY_JMD"] = "CURRENCY_JMD";
    FieldType["CURRENCY_JPY"] = "CURRENCY_JPY";
    FieldType["CURRENCY_KRW"] = "CURRENCY_KRW";
    FieldType["CURRENCY_LKR"] = "CURRENCY_LKR";
    FieldType["CURRENCY_LTL"] = "CURRENCY_LTL";
    FieldType["CURRENCY_MNT"] = "CURRENCY_MNT";
    FieldType["CURRENCY_MVR"] = "CURRENCY_MVR";
    FieldType["CURRENCY_MXN"] = "CURRENCY_MXN";
    FieldType["CURRENCY_MYR"] = "CURRENCY_MYR";
    FieldType["CURRENCY_NOK"] = "CURRENCY_NOK";
    FieldType["CURRENCY_NZD"] = "CURRENCY_NZD";
    FieldType["CURRENCY_PAB"] = "CURRENCY_PAB";
    FieldType["CURRENCY_PEN"] = "CURRENCY_PEN";
    FieldType["CURRENCY_PHP"] = "CURRENCY_PHP";
    FieldType["CURRENCY_PKR"] = "CURRENCY_PKR";
    FieldType["CURRENCY_PLN"] = "CURRENCY_PLN";
    FieldType["CURRENCY_RON"] = "CURRENCY_RON";
    FieldType["CURRENCY_RSD"] = "CURRENCY_RSD";
    FieldType["CURRENCY_RUB"] = "CURRENCY_RUB";
    FieldType["CURRENCY_SAR"] = "CURRENCY_SAR";
    FieldType["CURRENCY_SEK"] = "CURRENCY_SEK";
    FieldType["CURRENCY_SGD"] = "CURRENCY_SGD";
    FieldType["CURRENCY_THB"] = "CURRENCY_THB";
    FieldType["CURRENCY_TRY"] = "CURRENCY_TRY";
    FieldType["CURRENCY_TWD"] = "CURRENCY_TWD";
    FieldType["CURRENCY_TZS"] = "CURRENCY_TZS";
    FieldType["CURRENCY_UAH"] = "CURRENCY_UAH";
    FieldType["CURRENCY_USD"] = "CURRENCY_USD";
    FieldType["CURRENCY_UYU"] = "CURRENCY_UYU";
    FieldType["CURRENCY_VEF"] = "CURRENCY_VEF";
    FieldType["CURRENCY_VND"] = "CURRENCY_VND";
    FieldType["CURRENCY_YER"] = "CURRENCY_YER";
    FieldType["CURRENCY_ZAR"] = "CURRENCY_ZAR";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var TableType;
(function (TableType) {
    TableType["DEFAULT"] = "DEFAULT";
    TableType["COMPARISON"] = "COMPARISON";
    TableType["SUMMARY"] = "SUMMARY";
})(TableType = exports.TableType || (exports.TableType = {}));
var ConfigDataElementType;
(function (ConfigDataElementType) {
    /**
     * Renders a metric field element.
     */
    ConfigDataElementType["METRIC"] = "METRIC";
    /**
     * Renders a dimension field element.
     */
    ConfigDataElementType["DIMENSION"] = "DIMENSION";
    /**
     * Renders a dropdown that affects the maximum number of results returned.
     */
    ConfigDataElementType["MAX_RESULTS"] = "MAX_RESULTS";
})(ConfigDataElementType = exports.ConfigDataElementType || (exports.ConfigDataElementType = {}));
var ConfigStyleElementType;
(function (ConfigStyleElementType) {
    /**
     * Renders a text input box.
     */
    ConfigStyleElementType["TEXTINPUT"] = "TEXTINPUT";
    /**
     * A single select dropdown.
     */
    ConfigStyleElementType["SELECT_SINGLE"] = "SELECT_SINGLE";
    /**
     * Renders a checkbox.
     *
     * Default value: `false`
     */
    ConfigStyleElementType["CHECKBOX"] = "CHECKBOX";
    /**
     * Renders the font color selector.
     *
     * Acceptable default values: HEX color value. E.g. `"#888888"`.
     *
     * Default value: `"#000"`.
     */
    ConfigStyleElementType["FONT_COLOR"] = "FONT_COLOR";
    /**
     * Renders the font size selector.
     *
     * Default value: `"14px"`.
     */
    ConfigStyleElementType["FONT_SIZE"] = "FONT_SIZE";
    /**
     * Renders the font family selector.
     *
     * Default value: `""`
     */
    ConfigStyleElementType["FONT_FAMILY"] = "FONT_FAMILY";
    /**
     * Renders a fill color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["FILL_COLOR"] = "FILL_COLOR";
    /**
     * Renders a border color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["BORDER_COLOR"] = "BORDER_COLOR";
    /**
     * Renders an axis color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["AXIS_COLOR"] = "AXIS_COLOR";
    /**
     * Renders a grid color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["GRID_COLOR"] = "GRID_COLOR";
    /**
     * Renders an opacity selector.
     */
    ConfigStyleElementType["OPACITY"] = "OPACITY";
    /**
     * Renders a line weight picker.
     */
    ConfigStyleElementType["LINE_WEIGHT"] = "LINE_WEIGHT";
    /**
     * Renders a line style picker.
     *
     * Acceptable default values: `"solid"`, `"dashed"`, `"dotted"`, or `"double"`.
     */
    ConfigStyleElementType["LINE_STYLE"] = "LINE_STYLE";
    /**
     * Renders a border radius selector.
     */
    ConfigStyleElementType["BORDER_RADIUS"] = "BORDER_RADIUS";
    /**
     * Renders an interval selector.
     */
    ConfigStyleElementType["INTERVAL"] = "INTERVAL";
    /**
     * Renders a radio select with pre-defined values.
     */
    ConfigStyleElementType["SELECT_RADIO"] = "SELECT_RADIO";
})(ConfigStyleElementType = exports.ConfigStyleElementType || (exports.ConfigStyleElementType = {}));
var DSInteractionType;
(function (DSInteractionType) {
    DSInteractionType["FILTER"] = "FILTER";
})(DSInteractionType = exports.DSInteractionType || (exports.DSInteractionType = {}));
var ToDSMessageType;
(function (ToDSMessageType) {
    ToDSMessageType["VIZ_READY"] = "vizReady";
    ToDSMessageType["INTERACTION"] = "vizAction";
})(ToDSMessageType = exports.ToDSMessageType || (exports.ToDSMessageType = {}));
var InteractionType;
(function (InteractionType) {
    InteractionType["FILTER"] = "FILTER";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBQ0YsbUVBeUNpQjtBQUVqQix1REFBdUQ7QUFDdkQsK0RBQXdCO0FBRXhCOzs7Ozs7OztHQVFHO0FBQ1UsZ0JBQVEsR0FBRyxjQUFjLGVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUF6QixD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QUZELFdBQVksZUFBZTtJQUN6QixvQ0FBaUI7QUFDbkIsQ0FBQyxFQUZXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRTFCIiwiZmlsZSI6ImRzY2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRzY2NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHNjY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkc2NjXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIVxuICBAbGljZW5zZVxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7XG4gIENsZWFySW50ZXJhY3Rpb24sXG4gIENvbmZpZ0RhdGEsXG4gIENvbmZpZ0RhdGFFbGVtZW50LFxuICBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbixcbiAgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMsXG4gIENvbmZpZ0RhdGFFbGVtZW50VHlwZSxcbiAgQ29uZmlnSWQsXG4gIENvbmZpZ1N0eWxlLFxuICBDb25maWdTdHlsZUVsZW1lbnQsXG4gIERTSW50ZXJhY3Rpb25EYXRhLFxuICBEU0ludGVyYWN0aW9uVHlwZSxcbiAgRFNSb3dWYWx1ZSxcbiAgRmllbGQsXG4gIEZpZWxkSWQsXG4gIEZpZWxkc0J5Q29uZmlnSWQsXG4gIEZpZWxkc0J5SWQsXG4gIEludGVyYWN0aW9uLFxuICBJbnRlcmFjdGlvbk1lc3NhZ2UsXG4gIEludGVyYWN0aW9uc0J5SWQsXG4gIEludGVyYWN0aW9uVHlwZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE9iamVjdFJvdyxcbiAgT2JqZWN0VGFibGVzLFxuICBPYmplY3RUcmFuc2Zvcm0sXG4gIFBhcnNlZEltYWdlLFxuICBQb3N0TWVzc2FnZSxcbiAgUm93LFxuICBSb3dIZWFkaW5nLFxuICBTZW5kSW50ZXJhY3Rpb24sXG4gIFN0eWxlQnlJZCxcbiAgU3Vic2NyaXB0aW9uc09wdGlvbnMsXG4gIFRhYmxlLFxuICBUYWJsZUZvcm1hdCxcbiAgVGFibGVzLFxuICBUYWJsZVRyYW5zZm9ybSxcbiAgVGFibGVUeXBlLFxuICBUaGVtZVN0eWxlLFxuICBUb0RTTWVzc2FnZVR5cGUsXG4gIFZpelJlYWR5TWVzc2FnZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIE1ha2UgYWxsIGV4cG9ydGVkIHR5cGVzIGF2YWlsYWJsZSB0byBleHRlcm5hbCB1c2Vycy5cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHdpZHRoIChpbiBwaXhlbHMpIG9mIHRoZSB2aXMncyBpZnJhbWUuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteVdpZHRoID0gZHNjYy5nZXRXaWR0aCgpO1xuICogY29uc29sZS5sb2coJ015IHdpZHRoIGlzOiAnLCBteVdpZHRoKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0V2lkdGggPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaGVpZ2h0IChpbiBwaXhlbHMpIG9mIHRoZSB2aXMncyBpZnJhbWUuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteUhlaWdodCA9IGRzY2MuZ2V0SGVpZ2h0KCk7XG4gKiBjb25zb2xlLmxvZygnTXkgaGVpZ2h0IGlzOiAnLCBteUhlaWdodCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhlaWdodCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb21wb25lbnRJZCBvZiB0aGUgdmlzLiBDb21wb25lbnQgaWRzIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdmlzIHRvXG4gKiBEYXRhIFN0dWRpby5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15Q29tcG9uZW50SWQgPSBkc2NjLmdldENvbXBvbmVudElkKCk7XG4gKiBjb25zb2xlLmxvZygnTXkgY29tcG9uZW50SWQgaXM6ICcsIG15Q29tcG9uZW50SWQpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRJZCA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBpZiAocGFyYW1zLmdldCgnZHNjSWQnKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBwYXJhbXMuZ2V0KCdkc2NJZCcpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdkc2NJZCBtdXN0IGJlIGluIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLiAnICtcbiAgICAgICAgJ1RoaXMgaXMgYSBidWcgaW4gZHMtY29tcG9uZW50LCBwbGVhc2UgZmlsZSBhIGJ1ZzogJyArXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlZGF0YXN0dWRpby9kcy1jb21wb25lbnQvaXNzdWVzL25ldydcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpZWxkcyBpbmRleGVkIGJ5IHRoZWlyIERhdGEgU3R1ZGlvIGlkLlxuICovXG5jb25zdCBmaWVsZHNCeUlkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUlkID0+XG4gIG1lc3NhZ2UuZmllbGRzLnJlZHVjZSgoYWNjOiBGaWVsZHNCeUlkLCBmaWVsZDogRmllbGQpID0+IHtcbiAgICBhY2NbZmllbGQuaWRdID0gZmllbGQ7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIFppcHMgdHdvIGFycmF5cyB0b2dldGhlciBpbnRvIGEgbmV3IGFycmF5LiBVc2VzIHRoZSBsZW5ndGggb2YgdGhlIHNob3J0ZXN0XG4gKiBhcnJheS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogY29uc3QgYSA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IGIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXTtcbiAqIGNvbnN0IHppcHBlZCA9IHppcDIoYSwgYik7XG4gKiBleHBlY3QoemlwcGVkKS50b0VxdWFsKFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXSk7XG4gKiBgYGBcbiAqL1xuY29uc3QgemlwMiA9IDxULCBVPih0OiBUW10sIHU6IFVbXSk6IEFycmF5PFtULCBVXT4gPT4ge1xuICBpZiAodC5sZW5ndGggPCB1Lmxlbmd0aCkge1xuICAgIHJldHVybiB0Lm1hcCgodEVudHJ5OiBULCBpZHg6IG51bWJlcik6IFtULCBVXSA9PiBbdEVudHJ5LCB1W2lkeF1dKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdS5tYXAoKHVFbnRyeTogVSwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RbaWR4XSwgdUVudHJ5XSk7XG4gIH1cbn07XG5cbi8vIGAuc29ydGAgaXNuJ3Qgc3RhYmxlLCBidXQgaWYgeW91IGNvbXBhcmUgaXRlbXMsIGFuZCB3aGVuIHRoZXkgYXJlIGVxdWFsIHVzZVxuLy8gdGhlIG9yaWdpbmFsIGluZGV4LCBpdCBpcyB0aGVuIHN0YWJsZS5cbmNvbnN0IHN0YWJsZVNvcnQgPSA8VD4oYXJyOiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiBudW1iZXIpOiBUW10gPT5cbiAgYXJyXG4gICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7aXRlbSwgaW5kZXh9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLml0ZW0sIGIuaXRlbSkgfHwgYS5pbmRleCAtIGIuaW5kZXgpXG4gICAgLm1hcCgoe2l0ZW19KSA9PiBpdGVtKTtcblxuY29uc3QgZGltZW5zaW9uT3JNZXRyaWMgPSAoY2RlOiBDb25maWdEYXRhRWxlbWVudCk6IGJvb2xlYW4gPT5cbiAgY2RlLnR5cGUgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT04gfHxcbiAgY2RlLnR5cGUgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NRVRSSUM7XG5cbmNvbnN0IHRvTnVtID0gKGNkZXQ6IENvbmZpZ0RhdGFFbGVtZW50VHlwZSkgPT5cbiAgY2RldCA9PT0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlLkRJTUVOU0lPTiA/IC0xIDogMTtcblxuLyoqXG4gKiBGbGF0dGVucyB0aGUgY29uZmlnSWRzIGZyb20gYSBtZXNzYWdlIGludG8gYSBzaW5nbGUgYXJyYXkuIFRoZSBjb25maWcgSWRzXG4gKiB3aWxsIGJlIHJlcGVhdGVkIGZvciB0aGUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9ucy4gaS5lLiBmb3IgYSBgTUVUUklDYFxuICogbmFtZWQgYFwibWV0cmljc1wiYCBvZiBge21pbjogMiwgbWF4OjN9YCwgdGhlIHZhbHVlIG1ldHJpY3Mgd2lsbCBiZSByZXBlYXRlZCAyXG4gKiB0byAzIHRpbWVzIGRlcGVuZGluZyBvbiB3aGF0IHZhbHVlcyB0aGUgdXNlciBzZWxlY3RzLlxuICpcbiAqIE5vdGU6IHRoaXMgaXMgcmVseWluZyBvbiB0aGUgZmFjdCB0aGF0IHRoZSBwb3N0TWVzc2FnZSBmcm9tIERhdGFTdHVkaW8gaGFzXG4gKiB0aGUgZmllbGRzIHNvcnRlZCB0byBiZSBkaW1lbnNpb25zLCBmb2xsb3dlZCBieSBtZXRyaWNzLlxuICovXG50eXBlIENvbmZpZ0RhdGFDb25jZXB0ID0gQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMgfCBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbjtcblxuY29uc3QgZmxhdHRlbkNvbmZpZ0lkcyA9IChtZXNzYWdlOiBNZXNzYWdlKTogQ29uZmlnSWRbXSA9PiB7XG4gIGNvbnN0IGRpbW5zQW5kTWV0czogQ29uZmlnRGF0YUNvbmNlcHRbXSA9IFtdO1xuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBkaW1uc0FuZE1ldHMucHVzaChjb25maWdEYXRhRWxlbWVudCk7XG4gICAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHNvcnRlZCA9IHN0YWJsZVNvcnQoXG4gICAgZGltbnNBbmRNZXRzLFxuICAgIChhLCBiKSA9PiB0b051bShhLnR5cGUpIC0gdG9OdW0oYi50eXBlKVxuICApO1xuICBjb25zdCBjb25maWdJZHM6IENvbmZpZ0lkW10gPSBbXTtcbiAgc29ydGVkLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50KSA9PiB7XG4gICAgY29uZmlnRGF0YUVsZW1lbnQudmFsdWUuZm9yRWFjaCgoKSA9PiBjb25maWdJZHMucHVzaChjb25maWdEYXRhRWxlbWVudC5pZCkpO1xuICB9KTtcbiAgcmV0dXJuIGNvbmZpZ0lkcztcbn07XG5cbi8qKlxuICogSm9pbnMgYSBzaW5nbGUgdGFibGUgcm93IHdpdGggdGhlIG1hdGNoaW5nIGBDb25maWdJZGBcbiAqL1xuY29uc3Qgam9pbk9iamVjdFJvdyA9IChjb25maWdJZHM6IENvbmZpZ0lkW10pID0+IChyb3c6IFJvdyk6IE9iamVjdFJvdyA9PiB7XG4gIGNvbnN0IG9iamVjdFJvdzogT2JqZWN0Um93ID0ge307XG5cbiAgemlwMihyb3csIGNvbmZpZ0lkcykuZm9yRWFjaCgoW3Jvd1ZhbCwgY29uZmlnSWRdOiBbRFNSb3dWYWx1ZSwgQ29uZmlnSWRdKSA9PiB7XG4gICAgaWYgKG9iamVjdFJvd1tjb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqZWN0Um93W2NvbmZpZ0lkXSA9IFtdO1xuICAgIH1cbiAgICBvYmplY3RSb3dbY29uZmlnSWRdLnB1c2gocm93VmFsKTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBvYmplY3RSb3c7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBPYmplY3RUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3Qgb2JqZWN0Rm9ybWF0VGFibGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IE9iamVjdFRhYmxlcyA9PiB7XG4gIGNvbnN0IGNvbmZpZ0lkcyA9IGZsYXR0ZW5Db25maWdJZHMobWVzc2FnZSk7XG4gIGNvbnN0IG9iamVjdFRhYmxlczogT2JqZWN0VGFibGVzID0ge1tUYWJsZVR5cGUuREVGQVVMVF06IFtdfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0Um93czogT2JqZWN0Um93W10gPSB0YWJsZS5yb3dzLm1hcChqb2luT2JqZWN0Um93KGNvbmZpZ0lkcykpO1xuICAgIGlmICh0YWJsZS5pZCA9PT0gVGFibGVUeXBlLkRFRkFVTFQpIHtcbiAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBvYmplY3RSb3dzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gb2JqZWN0VGFibGVzW3RhYmxlLmlkXTtcbiAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IFtdO1xuICAgICAgfVxuICAgICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IG9iamVjdFRhYmxlc1t0YWJsZS5pZF0uY29uY2F0KG9iamVjdFJvd3MpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmplY3RUYWJsZXM7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3QgdGFibGVGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGFibGVzID0+IHtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZElkeCA9IHt9O1xuICBjb25zdCBoZWFkZXJzOiBSb3dIZWFkaW5nW10gPSBjb25maWdJZHMubWFwKFxuICAgIChjb25maWdJZDogc3RyaW5nKTogUm93SGVhZGluZyA9PiB7XG4gICAgICBpZiAoY29uZmlnSWRJZHhbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnSWRJZHhbY29uZmlnSWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgaWR4ID0gY29uZmlnSWRJZHhbY29uZmlnSWRdO1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNCeVtjb25maWdJZF1baWR4XTtcbiAgICAgIGNvbnN0IGhlYWRpbmc6IFJvd0hlYWRpbmcgPSB7Li4uZmllbGQsIGNvbmZpZ0lkfTtcbiAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGFibGVUYWJsZXM6IFRhYmxlcyA9IHtcbiAgICBbVGFibGVUeXBlLkRFRkFVTFRdOiB7aGVhZGVyczogW10sIHJvd3M6IFtdfSxcbiAgfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgdGFibGVUYWJsZXNbdGFibGUuaWRdID0ge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJvd3M6IHRhYmxlLnJvd3MsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlVGFibGVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBjb25maWcgaWQuIFNpbmNlIG1hbnkgZmllbGRzIGNhbiBiZSBpblxuICogdGhlIHNhbWUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9uLCBgY29uZmlnSWRgIGlzIG1hcHBlZCB0byBgRmllbGRbXWAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWVsZHNCeUNvbmZpZ0lkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUNvbmZpZ0lkID0+IHtcbiAgY29uc3QgZmllbGRzQnlEU0lkID0gZmllbGRzQnlJZChtZXNzYWdlKTtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSB7fTtcblxuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBmaWVsZHNCeVtjb25maWdEYXRhRWxlbWVudC5pZF0gPSBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5tYXAoXG4gICAgICAgICAgKGRzSWQ6IEZpZWxkSWQpOiBGaWVsZCA9PiBmaWVsZHNCeURTSWRbZHNJZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZmllbGRzQnk7XG59O1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBzdHlsZSBlbnRyaWVzIGludG8gYSBzaW5nbGUgb2JqZWN0LiBgc3R5bGVJZGBzIHNob3VsZCBiZSB1bmlxdWUuXG4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogU3R5bGVCeUlkID0+IHtcbiAgY29uc3Qgc3R5bGVCeUlkOiBTdHlsZUJ5SWQgPSB7fTtcbiAgKG1lc3NhZ2UuY29uZmlnLnN0eWxlIHx8IFtdKS5mb3JFYWNoKChzdHlsZUVudHJ5OiBDb25maWdTdHlsZSkgPT4ge1xuICAgIHN0eWxlRW50cnkuZWxlbWVudHMuZm9yRWFjaCgoY29uZmlnU3R5bGVFbGVtZW50OiBDb25maWdTdHlsZUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgc3R5bGVJZHMgbXVzdCBiZSB1bmlxdWUuIFlvdXIgc3R5bGVJZDogJyR7Y29uZmlnU3R5bGVFbGVtZW50LmlkfScgaXMgdXNlZCBtb3JlIHRoYW4gb25jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSA9IHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1N0eWxlRWxlbWVudC52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWdTdHlsZUVsZW1lbnQuZGVmYXVsdFZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZUJ5SWQ7XG59O1xuXG5jb25zdCB0aGVtZVN0eWxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBUaGVtZVN0eWxlID0+IHtcbiAgcmV0dXJuIG1lc3NhZ2UuY29uZmlnLnRoZW1lU3R5bGU7XG59O1xuXG5jb25zdCBtYXBJbnRlcmFjdGlvblR5cGVzID0gKFxuICBkc0ludGVyYWN0aW9uOiBEU0ludGVyYWN0aW9uVHlwZVxuKTogSW50ZXJhY3Rpb25UeXBlID0+IHtcbiAgc3dpdGNoIChkc0ludGVyYWN0aW9uKSB7XG4gICAgY2FzZSBEU0ludGVyYWN0aW9uVHlwZS5GSUxURVI6XG4gICAgICByZXR1cm4gSW50ZXJhY3Rpb25UeXBlLkZJTFRFUjtcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtRFNJbnRlcmFjdGlvbiA9IChtZXNzYWdlOiBNZXNzYWdlKTogSW50ZXJhY3Rpb25zQnlJZCA9PiB7XG4gIGNvbnN0IGRzSW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdID0gbWVzc2FnZS5jb25maWcuaW50ZXJhY3Rpb25zO1xuICAvLyBUT0RPIC0gcmVtb3ZlIG9uY2UgaW50ZXJhY3Rpb25zIGFyZSBsaXZlLlxuICBpZiAoZHNJbnRlcmFjdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gZHNJbnRlcmFjdGlvbnMucmVkdWNlKFxuICAgIChhY2M6IEludGVyYWN0aW9uc0J5SWQsIGRzSW50ZXJhY3Rpb246IERTSW50ZXJhY3Rpb25EYXRhKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnMgPSBkc0ludGVyYWN0aW9uLnN1cHBvcnRlZEFjdGlvbnMubWFwKFxuICAgICAgICBtYXBJbnRlcmFjdGlvblR5cGVzXG4gICAgICApO1xuICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgIHR5cGU6IG1hcEludGVyYWN0aW9uVHlwZXMoZHNJbnRlcmFjdGlvbi52YWx1ZS50eXBlKSxcbiAgICAgICAgZGF0YTogZHNJbnRlcmFjdGlvbi52YWx1ZS5kYXRhLFxuICAgICAgfTtcbiAgICAgIGFjY1tkc0ludGVyYWN0aW9uLmlkXSA9IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHN1cHBvcnRlZEFjdGlvbnM6IGludGVyYWN0aW9ucyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYSBUYWJsZSBmb3JtYXQuIGkuZS4gYFtbMSwgMiwgM10sIFs0LCA1LCA2XV1gXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZVRyYW5zZm9ybTogVGFibGVUcmFuc2Zvcm0gPSAoXG4gIG1lc3NhZ2U6IE1lc3NhZ2Vcbik6IFRhYmxlRm9ybWF0ID0+ICh7XG4gIHRhYmxlczogdGFibGVGb3JtYXRUYWJsZShtZXNzYWdlKSxcbiAgZmllbGRzOiBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpLFxuICBzdHlsZTogZmxhdHRlblN0eWxlKG1lc3NhZ2UpLFxuICB0aGVtZTogdGhlbWVTdHlsZShtZXNzYWdlKSxcbiAgaW50ZXJhY3Rpb25zOiB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uKG1lc3NhZ2UpLFxufSk7XG5cbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYW4gb2JqZWN0IGZvcm1hdC4gaS5lLiBgW3tuYW1lOiAnam9obicsIHZpZXdzOiAzfSwge25hbWU6ICdzdXppZScsIHZpZXdzOiA1fV1gXG4gKi9cbmV4cG9ydCBjb25zdCBvYmplY3RUcmFuc2Zvcm06IE9iamVjdFRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiAoe1xuICB0YWJsZXM6IG9iamVjdEZvcm1hdFRhYmxlKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG59KTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdHJhbnNmb3JtIGlzIGxpa2VseSB0aGUgaWRlbnRpdHkgZnVuY3Rpb25cbiAqIFRoaXMgaXMgbm90IGEgc3VwcG9ydGVkIGltcGxlbWVudGF0aW9uIHBhdGhcbiAqIEF2b2lkIHRoaXMgaWYgYXQgYWxsIHBvc3NpYmxlIC0gcGxlYXNlIHVzZSBlaXRoZXIgb2JqZWN0VHJhbnNmb3JtIG9yIHRhYmxlVHJhbnNmb3JtXG4gKi9cbmNvbnN0IGlzUHJvYmFibHlJZGVudGl0eUZ1bmN0aW9uID0gKHRyYW5zZm9ybSk6IGJvb2xlYW4gPT4ge1xuICBsZXQgaXNJZGVudGl0eTogYm9vbGVhbiA9IGZhbHNlO1xuICBpZiAodHJhbnNmb3JtKCdpZGVudGl0eScpID09PSAnaWRlbnRpdHknKSB7XG4gICAgaXNJZGVudGl0eSA9IHRydWU7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFRoaXMgaXMgYW4gdW5zdXBwb3J0ZWQgZGF0YSBmb3JtYXQuIFBsZWFzZSB1c2Ugb25lIG9mIHRoZSBzdXBwb3J0ZWQgdHJhbnNmb3JtczpcbiAgICAgICBkc2NjLm9iamVjdEZvcm1hdCBvciBkc2NjLnRhYmxlRm9ybWF0LmBcbiAgICApO1xuICB9XG4gIHJldHVybiBpc0lkZW50aXR5O1xufTtcblxuY29uc3QgaXNWYWxpZFRyYW5zZm9ybSA9ICh0cmFuc2Zvcm0pOiBib29sZWFuID0+IHtcbiAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcbiAgaWYgKFxuICAgICh0cmFuc2Zvcm0gYXMgYW55KSA9PT0gdGFibGVUcmFuc2Zvcm0gfHxcbiAgICAodHJhbnNmb3JtIGFzIGFueSkgPT09IG9iamVjdFRyYW5zZm9ybVxuICApIHtcbiAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc1Byb2JhYmx5SWRlbnRpdHlGdW5jdGlvbih0cmFuc2Zvcm0pKSB7XG4gICAgaXNWYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzVmFsaWQ7XG59O1xuLypcbiAqIFN1YnNjcmliZXMgdG8gbWVzc2FnZXMgZnJvbSBEYXRhIFN0dWRpby4gQ2FsbHMgYGNiYCBmb3IgZXZlcnkgbmV3XG4gKiBbW01lc3NhZ2VUeXBlLlJFTkRFUl1dIG1lc3NhZ2UuIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdW5zdWJzY3JpYmVcbiAqIGBjYWxsYmFja2AgZnJvbSBmdXJ0aGVyIGludm9jYXRpb25zLlxuICpcbiAqIFVzYWdlIC0gdGFibGVUcmFuc2Zvcm06XG4gKiBgYGBcbiAqIHZhciB1bnN1YnNjcmliZSA9IGRzY2Muc3Vic2NyaWJlVG9EYXRhKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS50YWJsZXMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuZmllbGRzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnN0eWxlKVxuICogfSwge3RyYW5zZm9ybTogZHNjYy50YWJsZVRyYW5zZm9ybX0pO1xuICpcbiAqIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgIHVuc3Vic2NyaWJlKCk7XG4gKiB9LCAzMDAwKVxuICogYGBgXG5cbiAqIFVzYWdlIC0gb2JqZWN0VHJhbnNmb3JtOlxuICogYGBgXG4gKiB2YXIgdW5zdWJzY3JpYmUgPSBkc2NjLnN1YnNjcmliZVRvRGF0YShmdW5jdGlvbihtZXNzYWdlKSB7XG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UudGFibGVzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLmZpZWxkcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5zdHlsZSlcbiAqIH0sIHt0cmFuc2Zvcm06IGRzY2Mub2JqZWN0VHJhbnNmb3JtfSk7XG4gKlxuICogc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgdW5zdWJzY3JpYmUoKTtcbiAqIH0sIDMwMDApXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVRvRGF0YSA9IDxUPihcbiAgY2I6IChjb21wb25lbnREYXRhOiBUKSA9PiB2b2lkLFxuICBvcHRpb25zOiBTdWJzY3JpcHRpb25zT3B0aW9uczxUPlxuKTogKCgpID0+IHZvaWQpID0+IHtcbiAgaWYgKGlzVmFsaWRUcmFuc2Zvcm0ob3B0aW9ucy50cmFuc2Zvcm0pKSB7XG4gICAgY29uc3Qgb25NZXNzYWdlID0gKG1lc3NhZ2U6IFBvc3RNZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS5kYXRhLnR5cGUgPT09IE1lc3NhZ2VUeXBlLlJFTkRFUikge1xuICAgICAgICBjYihvcHRpb25zLnRyYW5zZm9ybShtZXNzYWdlLmRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYE1lc3NhZ2VUeXBlOiAke21lc3NhZ2UuZGF0YS50eXBlfSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgdmVyc2lvbiBvZiB0aGUgbGlicmFyeS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBnZXRDb21wb25lbnRJZCgpO1xuICAgIC8vIFRlbGwgRGF0YVN0dWRpbyB0aGF0IHRoZSB2aXogaXMgcmVhZHkgdG8gZ2V0IGV2ZW50cy5cbiAgICBjb25zdCB2aXpSZWFkeU1lc3NhZ2U6IFZpelJlYWR5TWVzc2FnZSA9IHtcbiAgICAgIGNvbXBvbmVudElkLFxuICAgICAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLlZJWl9SRUFEWSxcbiAgICB9O1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uodml6UmVhZHlNZXNzYWdlLCAnKicpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBPbmx5IHRoZSBidWlsdCBpbiB0cmFuc2Zvcm0gZnVuY3Rpb25zIGFyZSBzdXBwb3J0ZWQuYCk7XG4gIH1cbn07XG5cbi8qXG4gKiBEb2VzIHRoZSB0aGluZyB0aGF0IGludGVyYWN0aW9ucyBzaG91bGQgZG8uXG4gKi9cbmV4cG9ydCBjb25zdCBzZW5kSW50ZXJhY3Rpb246IFNlbmRJbnRlcmFjdGlvbiA9IChcbiAgYWN0aW9uSWQsXG4gIGludGVyYWN0aW9uLFxuICBkYXRhXG4pID0+IHtcbiAgY29uc3QgY29tcG9uZW50SWQgPSBnZXRDb21wb25lbnRJZCgpO1xuICBjb25zdCBpbnRlcmFjdGlvbk1lc3NhZ2U6IEludGVyYWN0aW9uTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuSU5URVJBQ1RJT04sXG4gICAgaWQ6IGFjdGlvbklkLFxuICAgIGRhdGEsXG4gICAgY29tcG9uZW50SWQsXG4gIH07XG4gIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoaW50ZXJhY3Rpb25NZXNzYWdlLCAnKicpO1xufTtcblxuLypcbiAqIENsZWFycyBhbiBpbnRlcmFjdGlvblxuICovXG5cbmV4cG9ydCBjb25zdCBjbGVhckludGVyYWN0aW9uOiBDbGVhckludGVyYWN0aW9uID0gKGFjdGlvbklkLCBpbnRlcmFjdGlvbikgPT4ge1xuICBzZW5kSW50ZXJhY3Rpb24oYWN0aW9uSWQsIGludGVyYWN0aW9uLCB1bmRlZmluZWQpO1xufTtcbiIsIi8qIVxuICBAbGljZW5zZVxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y2xlYXJJbnRlcmFjdGlvbn0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdE1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlRXZlbnQge1xuICBkYXRhOiBNZXNzYWdlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2UgdHlwZS5cbiAgICovXG4gIHR5cGU6IE1lc3NhZ2VUeXBlO1xuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbmZpZzogQ29uZmlnO1xuICAvKipcbiAgICogQSBsaXN0IG9mIGFsbCB1c2VyIHNlbGVjdGVkIGZpZWxkcy5cbiAgICovXG4gIGZpZWxkczogRmllbGRbXTtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRhdGEgY29uZmlnIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkYXRhUmVzcG9uc2U6IERhdGFSZXNwb25zZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAvKipcbiAgICogVGhlIGRhdGEgY29uZmlnIGRlZmluZWQgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkYXRhOiBDb25maWdEYXRhW107XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudHMgcmVxdWlyZWQgYW5kIHN1cHBvcnRlZCBieSB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgc3R5bGU6IENvbmZpZ1N0eWxlW107XG4gIHRoZW1lU3R5bGU/OiBDb25maWdUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IERTSW50ZXJhY3Rpb25EYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBmaWVsZC5cbiAgICovXG4gIGlkOiBGaWVsZElkO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgbmFtZSBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdXNlci1mcmllbmRseSBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCB0eXBlLlxuICAgKi9cbiAgdHlwZTogRmllbGRUeXBlO1xuICAvKipcbiAgICogVGhlIGZpZWxkIGNvbmNlcHQuXG4gICAqL1xuICBjb25jZXB0OiBDb25jZXB0VHlwZTtcbn1cblxuZXhwb3J0IGVudW0gQ29uY2VwdFR5cGUge1xuICBNRVRSSUMgPSAnTUVUUklDJyxcbiAgRElNRU5TSU9OID0gJ0RJTUVOU0lPTicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHRhYmxlcyBmb3IgdGhlIGN1cnJlbnQgZGF0YSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgdGFibGVzOiBUYWJsZVtdO1xufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIFJFTkRFUiA9ICdSRU5ERVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBkYXRhIHNlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhSWQ7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBkYXRhIHNlY3Rpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudHMgdG8gcmVuZGVyLlxuICAgKi9cbiAgZWxlbWVudHM6IENvbmZpZ0RhdGFFbGVtZW50W107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0eWxlIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgc3R5bGUgc2VjdGlvbi5cbiAgICovXG4gIGlkOiBDb25maWdTdHlsZUlkO1xuICAvKipcbiAgICogVGhlIGhlYWRpbmcgZm9yIHRoZSBzdHlsZSBzZWN0aW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBlbGVtZW50cyB0byByZW5kZXIuXG4gICAqL1xuICBlbGVtZW50czogQ29uZmlnU3R5bGVFbGVtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGhlbWVTdHlsZSB7XG4gIHRoZW1lRmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50Rm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lQWNjZW50Rm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUluY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRGVjcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVHcmlkQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lU2VyaWVzQ29sb3I6IEFycmF5PHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICAgIHNlcmllc1JlZjogU2VyaWVzUmVmSW5kZXg7XG4gIH0+O1xufVxuXG5pbnRlcmZhY2UgVGhlbWVSZWZJbmRleCB7XG4gIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgU2VyaWVzUmVmSW5kZXgge1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lU3R5bGUge1xuICB0aGVtZUZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZURlY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgICBzZXJpZXNSZWY6IFNlcmllc1JlZkluZGV4O1xuICB9Pjtcbn1cblxuZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcbiAgWUVBUiA9ICdZRUFSJyxcbiAgWUVBUl9RVUFSVEVSID0gJ1lFQVJfUVVBUlRFUicsXG4gIFlFQVJfTU9OVEggPSAnWUVBUl9NT05USCcsXG4gIFlFQVJfV0VFSyA9ICdZRUFSX1dFRUsnLFxuICBZRUFSX01PTlRIX0RBWSA9ICdZRUFSX01PTlRIX0RBWScsXG4gIFlFQVJfTU9OVEhfREFZX0hPVVIgPSAnWUVBUl9NT05USF9EQVlfSE9VUicsXG4gIFFVQVJURVIgPSAnUVVBUlRFUicsXG4gIE1PTlRIID0gJ01PTlRIJyxcbiAgV0VFSyA9ICdXRUVLJyxcbiAgTU9OVEhfREFZID0gJ01PTlRIX0RBWScsXG4gIERBWV9PRl9XRUVLID0gJ0RBWV9PRl9XRUVLJyxcbiAgREFZID0gJ0RBWScsXG4gIEhPVVIgPSAnSE9VUicsXG4gIE1JTlVURSA9ICdNSU5VVEUnLFxuICBEVVJBVElPTiA9ICdEVVJBVElPTicsXG4gIENPVU5UUlkgPSAnQ09VTlRSWScsXG4gIENPVU5UUllfQ09ERSA9ICdDT1VOVFJZX0NPREUnLFxuICBDT05USU5FTlQgPSAnQ09OVElORU5UJyxcbiAgQ09OVElORU5UX0NPREUgPSAnQ09OVElORU5UX0NPREUnLFxuICBTVUJfQ09OVElORU5UID0gJ1NVQl9DT05USU5FTlQnLFxuICBTVUJfQ09OVElORU5UX0NPREUgPSAnU1VCX0NPTlRJTkVOVF9DT0RFJyxcbiAgUkVHSU9OID0gJ1JFR0lPTicsXG4gIFJFR0lPTl9DT0RFID0gJ1JFR0lPTl9DT0RFJyxcbiAgQ0lUWSA9ICdDSVRZJyxcbiAgQ0lUWV9DT0RFID0gJ0NJVFlfQ09ERScsXG4gIE1FVFJPX0NPREUgPSAnTUVUUk9fQ09ERScsXG4gIExBVElUVURFX0xPTkdJVFVERSA9ICdMQVRJVFVERV9MT05HSVRVREUnLFxuICBOVU1CRVIgPSAnTlVNQkVSJyxcbiAgUEVSQ0VOVCA9ICdQRVJDRU5UJyxcbiAgVEVYVCA9ICdURVhUJyxcbiAgQk9PTEVBTiA9ICdCT09MRUFOJyxcbiAgVVJMID0gJ1VSTCcsXG4gIElNQUdFID0gJ0lNQUdFJyxcbiAgQ1VSUkVOQ1lfQUVEID0gJ0NVUlJFTkNZX0FFRCcsXG4gIENVUlJFTkNZX0FMTCA9ICdDVVJSRU5DWV9BTEwnLFxuICBDVVJSRU5DWV9BUlMgPSAnQ1VSUkVOQ1lfQVJTJyxcbiAgQ1VSUkVOQ1lfQVVEID0gJ0NVUlJFTkNZX0FVRCcsXG4gIENVUlJFTkNZX0JEVCA9ICdDVVJSRU5DWV9CRFQnLFxuICBDVVJSRU5DWV9CR04gPSAnQ1VSUkVOQ1lfQkdOJyxcbiAgQ1VSUkVOQ1lfQk9CID0gJ0NVUlJFTkNZX0JPQicsXG4gIENVUlJFTkNZX0JSTCA9ICdDVVJSRU5DWV9CUkwnLFxuICBDVVJSRU5DWV9DQUQgPSAnQ1VSUkVOQ1lfQ0FEJyxcbiAgQ1VSUkVOQ1lfQ0RGID0gJ0NVUlJFTkNZX0NERicsXG4gIENVUlJFTkNZX0NIRiA9ICdDVVJSRU5DWV9DSEYnLFxuICBDVVJSRU5DWV9DTFAgPSAnQ1VSUkVOQ1lfQ0xQJyxcbiAgQ1VSUkVOQ1lfQ05ZID0gJ0NVUlJFTkNZX0NOWScsXG4gIENVUlJFTkNZX0NPUCA9ICdDVVJSRU5DWV9DT1AnLFxuICBDVVJSRU5DWV9DUkMgPSAnQ1VSUkVOQ1lfQ1JDJyxcbiAgQ1VSUkVOQ1lfQ1pLID0gJ0NVUlJFTkNZX0NaSycsXG4gIENVUlJFTkNZX0RLSyA9ICdDVVJSRU5DWV9ES0snLFxuICBDVVJSRU5DWV9ET1AgPSAnQ1VSUkVOQ1lfRE9QJyxcbiAgQ1VSUkVOQ1lfRUdQID0gJ0NVUlJFTkNZX0VHUCcsXG4gIENVUlJFTkNZX0VUQiA9ICdDVVJSRU5DWV9FVEInLFxuICBDVVJSRU5DWV9FVVIgPSAnQ1VSUkVOQ1lfRVVSJyxcbiAgQ1VSUkVOQ1lfR0JQID0gJ0NVUlJFTkNZX0dCUCcsXG4gIENVUlJFTkNZX0hLRCA9ICdDVVJSRU5DWV9IS0QnLFxuICBDVVJSRU5DWV9IUksgPSAnQ1VSUkVOQ1lfSFJLJyxcbiAgQ1VSUkVOQ1lfSFVGID0gJ0NVUlJFTkNZX0hVRicsXG4gIENVUlJFTkNZX0lEUiA9ICdDVVJSRU5DWV9JRFInLFxuICBDVVJSRU5DWV9JTFMgPSAnQ1VSUkVOQ1lfSUxTJyxcbiAgQ1VSUkVOQ1lfSU5SID0gJ0NVUlJFTkNZX0lOUicsXG4gIENVUlJFTkNZX0lSUiA9ICdDVVJSRU5DWV9JUlInLFxuICBDVVJSRU5DWV9JU0sgPSAnQ1VSUkVOQ1lfSVNLJyxcbiAgQ1VSUkVOQ1lfSk1EID0gJ0NVUlJFTkNZX0pNRCcsXG4gIENVUlJFTkNZX0pQWSA9ICdDVVJSRU5DWV9KUFknLFxuICBDVVJSRU5DWV9LUlcgPSAnQ1VSUkVOQ1lfS1JXJyxcbiAgQ1VSUkVOQ1lfTEtSID0gJ0NVUlJFTkNZX0xLUicsXG4gIENVUlJFTkNZX0xUTCA9ICdDVVJSRU5DWV9MVEwnLFxuICBDVVJSRU5DWV9NTlQgPSAnQ1VSUkVOQ1lfTU5UJyxcbiAgQ1VSUkVOQ1lfTVZSID0gJ0NVUlJFTkNZX01WUicsXG4gIENVUlJFTkNZX01YTiA9ICdDVVJSRU5DWV9NWE4nLFxuICBDVVJSRU5DWV9NWVIgPSAnQ1VSUkVOQ1lfTVlSJyxcbiAgQ1VSUkVOQ1lfTk9LID0gJ0NVUlJFTkNZX05PSycsXG4gIENVUlJFTkNZX05aRCA9ICdDVVJSRU5DWV9OWkQnLFxuICBDVVJSRU5DWV9QQUIgPSAnQ1VSUkVOQ1lfUEFCJyxcbiAgQ1VSUkVOQ1lfUEVOID0gJ0NVUlJFTkNZX1BFTicsXG4gIENVUlJFTkNZX1BIUCA9ICdDVVJSRU5DWV9QSFAnLFxuICBDVVJSRU5DWV9QS1IgPSAnQ1VSUkVOQ1lfUEtSJyxcbiAgQ1VSUkVOQ1lfUExOID0gJ0NVUlJFTkNZX1BMTicsXG4gIENVUlJFTkNZX1JPTiA9ICdDVVJSRU5DWV9ST04nLFxuICBDVVJSRU5DWV9SU0QgPSAnQ1VSUkVOQ1lfUlNEJyxcbiAgQ1VSUkVOQ1lfUlVCID0gJ0NVUlJFTkNZX1JVQicsXG4gIENVUlJFTkNZX1NBUiA9ICdDVVJSRU5DWV9TQVInLFxuICBDVVJSRU5DWV9TRUsgPSAnQ1VSUkVOQ1lfU0VLJyxcbiAgQ1VSUkVOQ1lfU0dEID0gJ0NVUlJFTkNZX1NHRCcsXG4gIENVUlJFTkNZX1RIQiA9ICdDVVJSRU5DWV9USEInLFxuICBDVVJSRU5DWV9UUlkgPSAnQ1VSUkVOQ1lfVFJZJyxcbiAgQ1VSUkVOQ1lfVFdEID0gJ0NVUlJFTkNZX1RXRCcsXG4gIENVUlJFTkNZX1RaUyA9ICdDVVJSRU5DWV9UWlMnLFxuICBDVVJSRU5DWV9VQUggPSAnQ1VSUkVOQ1lfVUFIJyxcbiAgQ1VSUkVOQ1lfVVNEID0gJ0NVUlJFTkNZX1VTRCcsXG4gIENVUlJFTkNZX1VZVSA9ICdDVVJSRU5DWV9VWVUnLFxuICBDVVJSRU5DWV9WRUYgPSAnQ1VSUkVOQ1lfVkVGJyxcbiAgQ1VSUkVOQ1lfVk5EID0gJ0NVUlJFTkNZX1ZORCcsXG4gIENVUlJFTkNZX1lFUiA9ICdDVVJSRU5DWV9ZRVInLFxuICBDVVJSRU5DWV9aQVIgPSAnQ1VSUkVOQ1lfWkFSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFibGUuXG4gICAqL1xuICBpZDogVGFibGVUeXBlO1xuICAvKipcbiAgICogVGhlIFtbRmllbGRJZF1dcyBvZiB0aGUgZmllbGRzIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgZmllbGRzOiBGaWVsZElkW107XG4gIC8qKlxuICAgKiBUaGUgcm93cyBvZiBkYXRhIFZhbHVlcy5cbiAgICovXG4gIHJvd3M6IERTUm93W107XG59XG5cbi8qKlxuICogQSByb3cgb2YgdmFsdWVzLlxuICpcbiAqIFRoZSBvcmRlciBvZiB2YWx1ZXMgY29ycmVzcG9uZHMgdG8gdGhlIG9yZGVyIG9mIHRoZSBmaWVsZHMgb2YgYWxsIGRhdGEgZWxlbWVudCBmaWVsZCBvYmplY3RzLlxuICovXG5cbmV4cG9ydCB0eXBlIERTUm93ID0gRFNSb3dWYWx1ZVtdO1xuLyoqXG4gKiBBIHZhbHVlIGZvciBhbiBlbnRyeSBpbiBhIERTUm93LlxuICovXG5leHBvcnQgdHlwZSBEU1Jvd1ZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudE1ldHJpYyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1FVFJJQztcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgbWV0cmljLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgbWV0cmljLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgTWV0cmljLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtaW4/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG1ldHJpY3Mgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1heD86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIFtbRmllbGRJZF1dcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIHZhbHVlOiBGaWVsZElkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb24ge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT047XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGRpbWVuc2lvbi5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIGRpbWVuc2lvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIERpbWVuc2lvbi5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWluPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaW1lbnNpb25zIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtYXg/OiBudW1iZXI7XG4gICAgc3VwcG9ydGVkVHlwZXM/OiBBcnJheTwnVElNRScgfCAnR0VPJyB8ICdERUZBVUxUJz47XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50TWF4UmVzdWx0cyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1BWF9SRVNVTFRTO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBtYXggcmVzdWx0cy5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIG1heCByZXN1bHRzLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgTWF4IFJlc3VsdHMuXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MuXG4gICAgICovXG4gICAgbWF4OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFFbGVtZW50ID1cbiAgfCBDb25maWdEYXRhRWxlbWVudE1heFJlc3VsdHNcbiAgfCBDb25maWdEYXRhRWxlbWVudE1ldHJpY1xuICB8IENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uO1xuXG4vLyBUT0RPOiB0aGlzIHNob3VsZCBldmVudHVhbGx5IGFsd2F5cyBiZSBhIHZhbHVlXG5leHBvcnQgdHlwZSBDb25maWdTdHlsZVZhbHVlID0gc3RyaW5nIHwge30gfCBib29sZWFuIHwge2NvbG9yOiBzdHJpbmd9O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0eWxlRWxlbWVudCB7XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ1N0eWxlRWxlbWVudFR5cGU7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdTdHlsZUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgbGFiZWwgdGV4dCBmb3IgYSBgQ0hFQ0tCT1hgIGVsZW1lbnQgYW5kIHRoZSB0b29sdGlwIHRleHQgZm9yIG90aGVyIGVsZW1lbnRzLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogSW52YWxpZCB2YWx1ZXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBDb25maWdTdHlsZVZhbHVlO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqL1xuICB2YWx1ZTogQ29uZmlnU3R5bGVWYWx1ZTtcbn1cbmV4cG9ydCBlbnVtIFRhYmxlVHlwZSB7XG4gIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gIENPTVBBUklTT04gPSAnQ09NUEFSSVNPTicsXG4gIFNVTU1BUlkgPSAnU1VNTUFSWScsXG59XG5cbmV4cG9ydCBlbnVtIENvbmZpZ0RhdGFFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbWV0cmljIGZpZWxkIGVsZW1lbnQuXG4gICAqL1xuICBNRVRSSUMgPSAnTUVUUklDJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBkaW1lbnNpb24gZmllbGQgZWxlbWVudC5cbiAgICovXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxuICAvKipcbiAgICogUmVuZGVycyBhIGRyb3Bkb3duIHRoYXQgYWZmZWN0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyByZXR1cm5lZC5cbiAgICovXG4gIE1BWF9SRVNVTFRTID0gJ01BWF9SRVNVTFRTJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uZmlnU3R5bGVFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgdGV4dCBpbnB1dCBib3guXG4gICAqL1xuICBURVhUSU5QVVQgPSAnVEVYVElOUFVUJyxcbiAgLyoqXG4gICAqIEEgc2luZ2xlIHNlbGVjdCBkcm9wZG93bi5cbiAgICovXG4gIFNFTEVDVF9TSU5HTEUgPSAnU0VMRUNUX1NJTkdMRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgY2hlY2tib3guXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBmYWxzZWBcbiAgICovXG4gIENIRUNLQk9YID0gJ0NIRUNLQk9YJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS4gRS5nLiBgXCIjODg4ODg4XCJgLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCIjMDAwXCJgLlxuICAgKi9cbiAgRk9OVF9DT0xPUiA9ICdGT05UX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgc2l6ZSBzZWxlY3Rvci5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiMTRweFwiYC5cbiAgICovXG4gIEZPTlRfU0laRSA9ICdGT05UX1NJWkUnLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBmYW1pbHkgc2VsZWN0b3IuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIlwiYFxuICAgKi9cbiAgRk9OVF9GQU1JTFkgPSAnRk9OVF9GQU1JTFknLFxuICAvKipcbiAgICogUmVuZGVycyBhIGZpbGwgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEZJTExfQ09MT1IgPSAnRklMTF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYm9yZGVyIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBCT1JERVJfQ09MT1IgPSAnQk9SREVSX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gYXhpcyBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgQVhJU19DT0xPUiA9ICdBWElTX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBncmlkIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBHUklEX0NPTE9SID0gJ0dSSURfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBvcGFjaXR5IHNlbGVjdG9yLlxuICAgKi9cbiAgT1BBQ0lUWSA9ICdPUEFDSVRZJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBsaW5lIHdlaWdodCBwaWNrZXIuXG4gICAqL1xuICBMSU5FX1dFSUdIVCA9ICdMSU5FX1dFSUdIVCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbGluZSBzdHlsZSBwaWNrZXIuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IGBcInNvbGlkXCJgLCBgXCJkYXNoZWRcImAsIGBcImRvdHRlZFwiYCwgb3IgYFwiZG91YmxlXCJgLlxuICAgKi9cbiAgTElORV9TVFlMRSA9ICdMSU5FX1NUWUxFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBib3JkZXIgcmFkaXVzIHNlbGVjdG9yLlxuICAgKi9cbiAgQk9SREVSX1JBRElVUyA9ICdCT1JERVJfUkFESVVTJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gaW50ZXJ2YWwgc2VsZWN0b3IuXG4gICAqL1xuICBJTlRFUlZBTCA9ICdJTlRFUlZBTCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgcmFkaW8gc2VsZWN0IHdpdGggcHJlLWRlZmluZWQgdmFsdWVzLlxuICAgKi9cbiAgU0VMRUNUX1JBRElPID0gJ1NFTEVDVF9SQURJTycsXG59XG5cbmV4cG9ydCB0eXBlIERTSW50ZXJhY3Rpb25EYXRhID0gRFNJbnRlcmFjdGlvbkZpbHRlckRhdGE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNJbnRlcmFjdGlvbkZpbHRlckRhdGEge1xuICBzdXBwb3J0ZWRBY3Rpb25zOiBEU0ludGVyYWN0aW9uVHlwZVtdO1xuICBpZDogSW50ZXJhY3Rpb25JZDtcbiAgdmFsdWU6IERTSW50ZXJhY3Rpb25GaWx0ZXJWYWx1ZTtcbn1cblxuZXhwb3J0IGVudW0gRFNJbnRlcmFjdGlvblR5cGUge1xuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEU0ludGVyYWN0aW9uRmlsdGVyVmFsdWUge1xuICB0eXBlOiBEU0ludGVyYWN0aW9uVHlwZTtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xufVxuXG4vLyBBbGlhc2VzXG5leHBvcnQgdHlwZSBGaWVsZElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YUlkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFFbGVtZW50SWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdTdHlsZUVsZW1lbnRJZCA9IHN0cmluZztcblxuLy8gQ3VzdG9tIHR5cGVzIGZvciBMaWJyYXJ5XG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZEltYWdlIHtcbiAgb3JpZ2luYWxVcmw6IHN0cmluZztcbiAgcHJveGllZFVybD86IHN0cmluZztcbiAgYWx0VGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHNCeUlkIHtcbiAgLy8gQW4gaW5kZXhlZCBUeXBlIGNhbm5vdCBiZSBhIHR5cGUgYWxpYXMgOihcbiAgW2ZpZWxkSWQ6IHN0cmluZ106IEZpZWxkO1xufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRSb3cgPSBQYXJzZWRSb3dWYWx1ZVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0J5Q29uZmlnSWQge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IFBhcnNlZFJvdztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXNCeVR5cGUge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBSb3dCeUNvbmZpZ0lkW107XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl06IFJvd0J5Q29uZmlnSWRbXTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXTogUm93QnlDb25maWdJZFtdO1xufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRSb3dWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBQYXJzZWRJbWFnZTtcblxuZXhwb3J0IHR5cGUgUm93SGVhZGluZyA9IEZpZWxkICYge2NvbmZpZ0lkOiBzdHJpbmd9O1xuZXhwb3J0IHR5cGUgUm93RW50cnkgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuZXhwb3J0IHR5cGUgUm93ID0gUm93RW50cnlbXTtcblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHNCeUNvbmZpZ0lkIHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBGaWVsZFtdO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRoZW1lID0gYW55O1xuZXhwb3J0IHR5cGUgU3R5bGVFbnRyeSA9IGFueTtcbmV4cG9ydCB0eXBlIFN0eWxlVmFsdWUgPSBTdHlsZVRoZW1lIHwgU3R5bGVFbnRyeTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUJ5SWQge1xuICBbc3R5bGVJZDogc3RyaW5nXTogU3R5bGVWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZURhdGEge1xuICBoZWFkZXJzOiBSb3dIZWFkaW5nW107XG4gIHJvd3M6IFJvd1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlcyB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IFRhYmxlRGF0YTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IFRhYmxlRGF0YTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXT86IFRhYmxlRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBUYWJsZXM7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG59XG5cbmV4cG9ydCB0eXBlIFRhYmxlVHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IFRhYmxlRm9ybWF0O1xuXG5leHBvcnQgdHlwZSBDb25maWdJZCA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpcHRpb25zT3B0aW9uczxUPiB7XG4gIHRyYW5zZm9ybTogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0Um93IHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBSb3dFbnRyeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFRhYmxlcyB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IE9iamVjdFJvd1tdO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dPzogT2JqZWN0Um93W107XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV0/OiBPYmplY3RSb3dbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RGb3JtYXQge1xuICBmaWVsZHM6IEZpZWxkc0J5Q29uZmlnSWQ7XG4gIHN0eWxlOiBTdHlsZUJ5SWQ7XG4gIHRhYmxlczogT2JqZWN0VGFibGVzO1xuICB0aGVtZTogVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbnNCeUlkO1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnRJZCA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IE9iamVjdEZvcm1hdDtcblxuZXhwb3J0IGVudW0gVG9EU01lc3NhZ2VUeXBlIHtcbiAgVklaX1JFQURZID0gJ3ZpelJlYWR5JyxcbiAgSU5URVJBQ1RJT04gPSAndml6QWN0aW9uJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXpSZWFkeU1lc3NhZ2Uge1xuICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuVklaX1JFQURZO1xuICBjb21wb25lbnRJZDogQ29tcG9uZW50SWQ7XG59XG5cbi8vIEludGVyYWN0aW9uIFR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uTWVzc2FnZSB7XG4gIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5JTlRFUkFDVElPTjtcbiAgaWQ6IEludGVyYWN0aW9uSWQ7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbiAgY29tcG9uZW50SWQ6IENvbXBvbmVudElkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbmRJbnRlcmFjdGlvbiB7XG4gIC8vIFRPRE8gLSByZW1vdmUgdGhpcyBvbmNlIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgaW50ZXJhY3Rpb24gdHlwZS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNhbGxhYmxlLXR5cGVzXG4gIChcbiAgICBhY3Rpb25JZDogSW50ZXJhY3Rpb25JZCxcbiAgICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlLkZJTFRFUixcbiAgICBkYXRhOiBGaWx0ZXJJbnRlcmFjdGlvbkRhdGFcbiAgKTogdm9pZDtcbiAgLy8gVE9ETyAtIFdoZW4gdGhlcmUgYXJlIG1vcmUgSW50ZXJhY3Rpb24gdHlwZXMsIHRoZSBuZXcgb25lcyBzaG91bGQgYmUgYWRkZWQgaGVyZSB3aXRoIHRoZWlyIG93biBzaWduYXR1cmUuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJJbnRlcmFjdGlvbiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjYWxsYWJsZS10eXBlc1xuICAoXG4gICAgYWN0aW9uSWQ6IEludGVyYWN0aW9uSWQsXG4gICAgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uVHlwZS5GSUxURVIsXG4gICAgZGF0YTogdW5kZWZpbmVkXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbmNlcHRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZpbHRlclBhcmFtVmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckludGVyYWN0aW9uRGF0YSB7XG4gIGNvbmNlcHRzOiBDb25jZXB0SWRbXTtcbiAgdmFsdWVzOiBGaWx0ZXJQYXJhbVZhbHVlW11bXTtcbn1cblxuZXhwb3J0IGVudW0gSW50ZXJhY3Rpb25UeXBlIHtcbiAgRklMVEVSID0gJ0ZJTFRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25WYWx1ZSB7XG4gIHR5cGU6IEludGVyYWN0aW9uVHlwZTtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xufVxuXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvbkRhdGEgPSBGaWx0ZXJJbnRlcmFjdGlvbkRhdGE7XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb24ge1xuICBzdXBwb3J0ZWRBY3Rpb25zOiBJbnRlcmFjdGlvblR5cGVbXTtcbiAgdmFsdWU6IEludGVyYWN0aW9uVmFsdWUgfCB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbnNCeUlkIHtcbiAgW2ludGVyYWN0aW9uSWQ6IHN0cmluZ106IEludGVyYWN0aW9uO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==