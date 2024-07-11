const ApiClient = require("./api-client");
const Formatter = require("./formatter");
const Parser = require("./parser");

const contentTypeXml = "text/xml; charset=utf-8";

module.exports = class CalculatorWsClient {
  static url = `http://www.dneonline.com/calculator.asmx`;
  static soapActionAdd = "http://tempuri.org/Add";
  static xmlns = "http://tempuri.org/";

  static async add(a, b) {
    try {
      const payload = { Add: { intA: a, intB: b } };
      const headers = {
        "Content-Type": contentTypeXml,
        SOAPAction: this.soapActionAdd,
      };
      const body = Formatter.convertJsonToSoapRequest(payload, this.xmlns);
      const xmlResponse = await ApiClient.post(this.url, body, headers);
      const response = await Parser.convertXMLToJSON(xmlResponse.data);
      console.log("RESPUESTA OBTENIDA DE CALCULATOR WS", JSON.stringify(response));
    } catch (err) {
      console.log(err);
      throw new Error(
        `Error calling SOAP WS ${this.soapActionAdd}: ${JSON.stringify(err)}`
      );
    }
  }
};
