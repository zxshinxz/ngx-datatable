import { DataTableColumnDirective } from '../components/columns';
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param  {string} str
 * @return {string} camel case string
 */
export declare function camelCaseLocal(str: string): string;
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 *
 * @export
 * @param {any} str
 * @returns string
 */
export declare function deCamelCaseLocal(str: string): string;
/**
 * Sets the column defaults
 *
 * @export
 * @param {any[]} columns
 * @returns
 */
export declare function setColumnDefaults(columns: any[]): void;
/**
 * Translates templates definitions to objects
 *
 * @export
 * @param {DataTableColumnDirective[]} templates
 * @returns {any[]}
 */
export declare function translateTemplates(templates: DataTableColumnDirective[]): any[];
