"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinataConfig = exports.protocol = exports.host = exports.environment = exports.corsUrl = exports.ipfsPort = exports.port = void 0;
exports.port = process.env.PORT || 8000;
exports.ipfsPort = process.env.IPFS_PORT || 5000;
exports.corsUrl = process.env.CORS_URL || "*";
exports.environment = process.env.NODE_ENV || "dev"; //else prod
exports.host = process.env.HOST || "localhost";
exports.protocol = process.env.PROTOCOL || "http";
exports.pinataConfig = {
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    jwt: process.env.JWT
};
//# sourceMappingURL=config.js.map