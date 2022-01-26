// Type definitions for Ical.js
// Project: https://github.com/mozilla-comm/ical.js/
// Definitions by: Demian Caldelas <https://github.com/denik1981>
// Api Reference: https://mozilla-comm.github.io/ical.js/api/

/* =================== USAGE ===================

    import {Component} from "ical.js"
    import type {JCALComponent} from 'ical.js'
    
    const jcal:JCALComponent = [
        "myjcalcomponent"
       // ... 
        ]

    const jcalComponent = new Component(jcal)

 =============================================== */

/** 
/* According to the JCal Specification -  https://tools.ietf.org/id/draft-kewisch-et-al-icalendar-in-json-01.html
/* Examples at https://tools.ietf.org/id/draft-kewisch-et-al-icalendar-in-json-01.html#rfc.appendix.B.1
*/

type JCALComponentName = string;

type JCALPropertyName = string;
type JCALPropertyParams = { [key: string]: string };
type JCALPropertyType = string;
type JCALPropertyValue = string | string[];

type JCALProperty = [JCALPropertyName, JCALPropertyParams, JCALPropertyType, JCALPropertyValue];
type JCALComponent = [JCALComponentName, JCALProperty[], JCALComponent[]];

/**
 * Represents the BINARY value type, which contains extra methods for encoding and decoding
 */

export class Binary {
    constructor(str: string);
    /**
     * The type name, to be used in the jCal object
     */
    readonly icaltype: 'binary';
    /**
     * Creates a binary value from the given string
     */
    static fromString(str: string): Binary;
    /**
     * Base64 decode the current value
     */
    decodeValue(): string;
    /**
     * Encodes the passed parameter with base64 and sets the internal value to the result
     */
    setEncodedValue(str: string): void;
    /**
     * The string representation of this value
     */
    toString(): string;
}

/**
 * Wraps a jCal component, adding convenience methods to add, remove and update subcomponents and properties
 */

type ICALline = `A`;
export type ICALBuffer = `${ICALline}${ICALline}`;
export class Component {
    constructor(jcal: JCALComponent | string);
    constructor(jcal: JCALComponent | string, parent: Component);
    /**
     * Create an ICAL.Component by parsing the passed iCalendar string.
     */

    static fromString(ical: ICALBuffer): Component;
}
