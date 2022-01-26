import { Binary, Component } from 'ical.js';
import type { JCALComponent, JCALComponentName } from 'ical.js';
import type { JCALProperty, JCALPropertyName, JCALPropertyParams, JCALPropertyType, JCALPropertyValue } from 'ical.js';

// Ical.Binary
const binary = new Binary('binary');
const BinaryFromString = Binary.fromString('binary');
const binaryICalType = binary.icaltype;
const binaryToString = binary.toString();
const binaryDecodeValue = binary.decodeValue();
const binarySetEncodeValue = binary.setEncodedValue('binary');

//JCALcomponent, JCALProperty
//According to jcal spec- https://tools.ietf.org/id/draft-kewisch-et-al-icalendar-in-json-01.html

// From https://tools.ietf.org/id/draft-kewisch-et-al-icalendar-in-json-01.html#rfc.section.3.5
const jcalProperties: JCALProperty[] = [
    [
        'attendee',
        {
            partstat: 'ACCEPTED',
            rsvp: 'TRUE',
            role: 'REQ-PARTICIPANT',
        },
        'cal-address',
        'mailto:jsmith@example.org',
    ],
    ['summary', {}, 'text', 'Meeting'],
];

// From https://tools.ietf.org/id/draft-kewisch-et-al-icalendar-in-json-01.html#rfc.appendix.B.1.2
const jcalComponent1: JCALComponent = [
    'vcalendar',
    [
        ['calscale', {}, 'text', 'GREGORIAN'],
        ['prodid', {}, 'text', '-//Example Inc.//Example Calendar//EN'],
        ['version', {}, 'text', '2.0'],
    ],
    [
        [
            'vevent',
            [
                ['dtstamp', {}, 'date-time', '2008-02-05T19:12:24Z'],
                ['dtstart', {}, 'date', '2008-10-06'],
                ['summary', {}, 'text', 'Planning meeting'],
                ['uid', {}, 'text', '4088E990AD89CB3DBB484909'],
            ],
            [],
        ],
    ],
];

// From https://tools.ietf.org/id/draft-kewisch-et-al-icalendar-in-json-01.html#rfc.appendix.B.2.2
const jcalComponent2: JCALComponent = [
    'vcalendar',
    [
        ['prodid', {}, 'text', '-//Example Corp.//Example Client//EN'],
        ['version', {}, 'text', '2.0'],
    ],
    [
        [
            'vtimezone',
            [
                ['last-modified', {}, 'date-time', '2004-01-10T03:28:45Z'],
                ['tzid', {}, 'text', 'US/Eastern'],
            ],
            [
                [
                    'daylight',
                    [
                        ['dtstart', {}, 'date-time', '2000-04-04T02:00:00'],
                        ['rrule', {}, 'recur', 'FREQ=YEARLY;BYDAY=1SU;BYMONTH=4'],
                        ['tzname', {}, 'text', 'EDT'],
                        ['tzoffsetfrom', {}, 'utc-offset', '-05:00'],
                        ['tzoffsetto', {}, 'utc-offset', '-04:00'],
                    ],
                    [],
                ],
                [
                    'standard',
                    [
                        ['dtstart', {}, 'date-time', '2000-10-26T02:00:00'],
                        ['rrule', {}, 'recur', 'FREQ=YEARLY;BYDAY=1SU;BYMONTH=10'],
                        ['tzname', {}, 'text', 'EST'],
                        ['tzoffsetfrom', {}, 'utc-offset', '-04:00'],
                        ['tzoffsetto', {}, 'utc-offset', '-05:00'],
                    ],
                    [],
                ],
            ],
        ],
        [
            'vevent',
            [
                ['dtstamp', {}, 'date-time', '2006-02-06T00:11:21Z'],
                ['dtstart', { tzid: 'US/Eastern' }, 'date-time', '2006-01-02T12:00:00'],
                ['duration', {}, 'duration', 'PT1H'],
                ['rrule', {}, 'recur', 'FREQ=DAILY;COUNT=5'],
                ['rdate', { tzid: 'US/Eastern' }, 'period', '2006-01-02T15:00:00/PT2H'],
                ['summary', {}, 'text', 'Event #2'],
                ['description', {}, 'text', 'We are having a meeting all this week at 12 pm for one hour'],
                ['uid', {}, 'text', '00959BC664CA650E933C892C@example.com'],
            ],
            [],
        ],
        [
            'vevent',
            [
                ['dtstamp', {}, 'date-time', '2006-02-06T00:11:21Z'],
                ['dtstart', { tzid: 'US/Eastern' }, 'date-time', '2006-01-02T14:00:00'],
                ['duration', {}, 'duration', 'PT1H'],
                ['recurrence-id', { tzid: 'US/Eastern' }, 'date-time', '2006-01-04T12:00:00'],
                ['summary', {}, 'text', 'Event #2'],
                ['uid', {}, 'text', '00959BC664CA650E933C892C@example.com'],
            ],
            [],
        ],
    ],
];

// Ical.Component
const component1 = new Component('component'); // @jcal as string
const component2 = new Component(jcalComponent1); // @jcal as JCALComponent
const component3 = new Component('component', jcalComponent2); // @jcal as string with parent component
const component4 = new Component(jcalComponent1, jcalComponent2); // @jcal as JCALComponent with parent component
