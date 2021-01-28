"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var isObjectEmpty = function (obj) { return Object.keys(obj).length === 0; };
var camelCase = function (str) { return str.toLowerCase().replace(/(\_\w)/g, function (c) { return c[1].toUpperCase(); }); };
var responser = function (request, response, next) {
    var _loop_1 = function (status_1, code) {
        if (status_1 == 'getStatusText' || status_1 == 'getStatusCode')
            return "continue";
        var success = ['1', '2'].includes(String(code).charAt(0));
        response['send_' + camelCase(status_1)] = function (message, content) {
            var hasContent = content && !isObjectEmpty(content);
            this.status(code).json({
                status: status_1,
                code: code,
                success: success,
                message: message,
                data: hasContent && success ? content : undefined,
                errors: hasContent && !success ? content : undefined,
            });
        };
    };
    for (var _i = 0, _a = Object.entries(http_status_codes_1.default); _i < _a.length; _i++) {
        var _b = _a[_i], status_1 = _b[0], code = _b[1];
        _loop_1(status_1, code);
    }
    next();
};
exports.default = responser;
