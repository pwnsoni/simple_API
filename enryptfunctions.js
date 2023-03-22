require('dotenv').config()
const crypto = require("crypto");

const algorithm = process.env.ALGO; 
const initVector = Buffer.from(process.env.INIT_VECTOR, "hex");
const Securitykey = Buffer.from(process.env.SECURITY_KEY, "hex");


const _encrptyFunctions = {
    encrypt: (message) => {
        const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
        let encryptedData = cipher.update(message, "utf-8", "hex");
        encryptedData += cipher.final("hex");
        return encryptedData
    },

    decrypt: (encryptedData) => {
        const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector)
        let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
        decryptedData += decipher.final("utf8");
        return decryptedData
    }
}

const objEnryptFunctions = {
    encryptobject: (obj) => {
        obj.fullName = _encrptyFunctions.encrypt(obj.fullName)
        obj.mobile = _encrptyFunctions.encrypt(obj.mobile)
        obj.email = _encrptyFunctions.encrypt(obj.email)
        return obj
    },
    decryptObjects: (objs) => {
        objs.forEach(obj => {
            obj.fullName = _encrptyFunctions.decrypt(obj.fullName)
            obj.mobile = _encrptyFunctions.decrypt(obj.mobile)
            obj.email = _encrptyFunctions.decrypt(obj.email)
        });
        return objs
    }
}


module.exports = objEnryptFunctions


