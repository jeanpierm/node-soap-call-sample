const { json_to_xml } = require("jsontoxml");
const { parseString } = require("xml2js");
const { promisify } = require("node:util");

const promisfiedParseString = promisify(parseString);

module.exports = class Parser {
  static parseJSONBodyToXML(jsonArgument) {
    return json_to_xml(jsonArgument, { html: true });
  }

  static async convertXMLToJSON(xmlMessage) {
    return promisfiedParseString(xmlMessage, {
      trim: true,
      explicitArray: false,
      explicitRoot: false,
    });
  }
};
