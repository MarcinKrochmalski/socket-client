
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { join } = require('path');

module.exports = class Auth {

    static getAccessTokens = () => {
        const key = fs.readFileSync(join(process.cwd(), 'keys', 'jwtRS256.key'));
        return jwt.sign({ client: 'BRIDGE_API' }, key, { algorithm: 'RS256' });
    }

}