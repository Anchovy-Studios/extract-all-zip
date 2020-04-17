const { join } = require('path');
const fs = require('fs');
const { readdirSync, statSync } = require('fs');
const extractZip = require('extract-zip');

class ExtractException {
    constructor(message, errObj) {
        this.errObj = errObj;
        this.message = message;
        this.toString = function () {
            return this.message + (this.errObj == null ? '' : "\n" + this.errObj);
        };
    }
}
 
const extractFile = async function main (source, target) {
    try {
        await extractZip(source, { dir: target })
    } catch (err) {
        throw new ExtractException('Failed in extracting ' + source, err);
    }
}

const getAllFiles = (dir, extn, files, result, regex) => {
    files = files || readdirSync(dir);
    result = result || [];
    regex = regex || new RegExp(`\\${extn}$`)

    for (let i = 0; i < files.length; i++) {
        let file = join(dir, files[i]);
        if (statSync(file).isDirectory()) {
            try {
                result = getAllFiles(file, extn, readdirSync(file), result, regex);
            } catch (error) {
                continue;
            }
        } else {
            if (regex.test(file)) {
                result.push(file);
            }
        }
    }
    return result;
}

const extract = async function(path) {
    if (fs.existsSync(path)) {
        const files = getAllFiles(path, '.zip');
        for (let i = 0; i < files.length; i++) {
            await extractFile(files[i], files[i].substring(0, files[i].lastIndexOf(".")))
        }
        return files;
	} else {
        throw new ExtractException("Path not exists!", null);
    }
}

module.exports.extract = extract;