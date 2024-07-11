const Parser = require("./parser");

module.exports = class Formatter {
  static convertJsonToSoapRequest(jsonArguments, xmlns, mensajeEntradaTagName) {
    let soapBody = Parser.parseJSONBodyToXML(jsonArguments);

    if (mensajeEntradaTagName) {
      return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="${xmlns}">
          <soap:Header/>    
          <soap:Body>
            <v1:${mensajeEntradaTagName}>
              ${soapBody}
            </v1:${mensajeEntradaTagName}>
          </soap:Body>
          </soap:Envelope> `;
    }
    return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="${xmlns}">
        <soap:Header/>    
        <soap:Body>
            ${soapBody}
        </soap:Body>
        </soap:Envelope> `;
  }
};
