import { DataTableColumnDirective } from '../components/columns';

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param  {string} str
 * @return {string} camel case string
 */
export function camelCaseLocal(str: string): string {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
  // put a space before an uppercase letter
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');

  // Lower case first character and some other stuff
  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();

  // uppercase characters preceded by a space or number
  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function(a, b, c) {
    return b.trim() + c.toUpperCase();
  });

  return str;
}

/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 *
 * @export
 * @param {any} str
 * @returns string
 */
export function deCamelCaseLocal(str: string): string {
  return str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());
}


/**
 * Sets the column defaults
 * 
 * @export
 * @param {any[]} columns
 * @returns
 */
export function setColumnDefaults(columns: any[]) {
  if(!columns) return;

  for(let column of columns) {
    if(!column.$$id) {
      column.$$id = ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
    }

    // translate name => prop
    if(!column.prop && column.name) {
      column.prop = camelCaseLocal(column.name);
    }

    // format props if no name passed
    if(column.prop && !column.name) {
      column.name = deCamelCaseLocal(column.prop);
    }

    if(!column.hasOwnProperty('resizeable')) {
      column.resizeable = true;
    }

    if(!column.hasOwnProperty('sortable')) {
      column.sortable = true;
    }

    if(!column.hasOwnProperty('draggable')) {
      column.draggable = true;
    }

    if(!column.hasOwnProperty('canAutoResize')) {
      column.canAutoResize = true;
    }

    if(!column.hasOwnProperty('width')) {
      column.width = 150;
    }
  }
}

/**
 * Translates templates definitions to objects
 * 
 * @export
 * @param {DataTableColumnDirective[]} templates
 * @returns {any[]}
 */
export function translateTemplates(templates: DataTableColumnDirective[]): any[] {
  let result: any[] = [];

  for(const temp of templates) {
    let col: any = {};

    const props = Object.getOwnPropertyNames(temp);
    for(const prop of props) {
      col[prop] = temp[prop];
    }

    if(temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }

    if(temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }

    result.push(col);
  }

  return result;
}
