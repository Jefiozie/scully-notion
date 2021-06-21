
import { Client } from "@notionhq/client";
import { PropertyValue } from "@notionhq/client/build/src/api-types";
import { registerPlugin } from '@scullyio/scully';


const NOTION_API_KEY = process.env.NOTION_TOKEN;

// Initializing a client
const notion = new Client({
  auth: NOTION_API_KEY
})
export const myPlugin = 'myPlugin';

const myFunctionPlugin = async () => {
  const myPage = await notion.databases.query({
    database_id: "9f8faea997034fa7ada69d1c3185e266",
  });
  myPage.results.map(page => {
    const keys = Object.keys(page.properties);
    keys.map(key => {
      const property = page.properties[key];
      const value = getNotionValue(property.type, property);
      console.log(value)
    })
  })

}

const getNotionValue = (type: string, element: PropertyValue) => {
  switch (type) {
    case 'checkbox':
      return Boolean(element['checkbox']);
    case 'title':
      return element['title'][0]['plain_text'];
  }
}
const validator = async () => [];

registerPlugin('allDone', myPlugin, myFunctionPlugin, validator);

