"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPlugin = void 0;
const client_1 = require("@notionhq/client");
const scully_1 = require("@scullyio/scully");
const NOTION_API_KEY = 'secret_xN0PT7GvplhmiNyi0OKFroC53znO2Kx7Me8XAVH3voW';
// Initializing a client
const notion = new client_1.Client({
    auth: NOTION_API_KEY || process.env.NOTION_TOKEN,
});
exports.myPlugin = 'myPlugin';
const myFunctionPlugin = async () => {
    const myPage = await notion.databases.query({
        database_id: "9f8faea997034fa7ada69d1c3185e266",
    });
    myPage.results.map(page => {
        const keys = Object.keys(page.properties);
        keys.map(key => {
            const property = page.properties[key];
            const value = getNotionValue(property.type, property);
            console.log(value);
        });
    });
};
const getNotionValue = (type, element) => {
    switch (type) {
        case 'checkbox':
            return Boolean(element['checkbox']);
        case 'title':
            return element['title'][0]['plain_text'];
    }
};
const validator = async () => [];
scully_1.registerPlugin('allDone', exports.myPlugin, myFunctionPlugin, validator);
//# sourceMappingURL=plugin.js.map