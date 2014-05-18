// Slightly hacked version of http://html5index.org/json/ECMAScript.json to
// avoid an XmlHttpRequest just for the demo

window.jsSchema = {
 'name': 'ECMAScript',
 'description': 'Generated Sun May 18 21:35:08 CEST 2014 by the html5index.org generator.',
 'definitions': {
  'Array': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'length': {
     'type': 'number',
    },
   },
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'params',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    {
     'parameter' : [
      {
       'name': 'size',
       'type': 'number',
      },
     ],
    },
   ],
   'operations': {
    'concat': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'items',
       'type': 'object',
      },
     ],
    },
    'every': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'thisArg',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'filter': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'thisArg',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'forEach': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'thisArg',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'indexOf': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'searchElement',
       'type': 'object',
      },
      {
       'name': 'fromIndex',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'isArray': {
     'static': true,
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'arg',
       'type': 'object',
      },
     ],
    },
    'join': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'separator',
       'type': 'string',
      },
     ],
    },
    'lastIndexOf': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'searchElement',
       'type': 'object',
      },
      {
       'name': 'fromIndex',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'map': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'thisArg',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'pop': {
     'type': 'object',
     'parameter' : [
     ],
    },
    'push': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'items',
       'type': 'object',
      },
     ],
    },
    'reduce': {
     'type': 'object',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'initialValue',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'reduceRight': {
     'type': 'object',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'initialValue',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'reverse': {
     'type': 'array',
     'parameter' : [
     ],
    },
    'shift': {
     'type': 'array',
     'parameter' : [
     ],
    },
    'slice': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'start',
       'type': 'number',
      },
      {
       'name': 'end',
       'type': 'number',
      },
     ],
    },
    'some': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'callbackfn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
      {
       'name': 'thisArg',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'sort': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'compareFn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
     ],
    },
    'splice': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'start',
       'type': 'number',
      },
      {
       'name': 'deleteCount',
       'type': 'number',
      },
      {
       'name': 'items',
       'type': 'object',
      },
     ],
    },
    'toLocaleString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'unshift': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'items',
       'type': 'object',
      },
     ],
    },
   },
  },
  'Boolean': {
   'type': 'object',
   'library': 'ECMAScript',
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'value',
       'type': 'object',
      },
     ],
    },
   ],
   'operations': {
    'toString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'valueOf': {
     'type': 'boolean',
     'parameter' : [
     ],
    },
   },
  },
  'Date': {
   'type': 'object',
   'library': 'ECMAScript',
   'constructors' : [
    {
     'parameter' : [
     ],
    },
    {
     'parameter' : [
      {
       'name': 'year',
       'type': 'number',
      },
      {
       'name': 'month',
       'type': 'number',
      },
      {
       'name': 'date',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'hours',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'minutes',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'seconds',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
   ],
   'operations': {
    'getDate': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getDay': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getFullYear': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getHours': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getMilliseconds': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getMinutes': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getMonth': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getSeconds': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getTime': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getTimezoneOffset': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCDate': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCDay': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCFullYear': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCHours': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCMilliseconds': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCMinutes': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCMonth': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'getUTCSeconds': {
     'type': 'number',
     'parameter' : [
     ],
    },
    'now': {
     'static': true,
     'type': 'object',
     '$ref': '#descriptions/Date',
     'parameter' : [
     ],
    },
    'setDate': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'date',
       'type': 'number',
      },
     ],
    },
    'setFullYear': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'year',
       'type': 'number',
      },
      {
       'name': 'month',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'date',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setHours': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'hour',
       'type': 'number',
      },
      {
       'name': 'min',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'sec',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setMilliseconds': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'ms',
       'type': 'number',
      },
     ],
    },
    'setMinutes': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'min',
       'type': 'number',
      },
      {
       'name': 'sec',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setMonth': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'month',
       'type': 'number',
      },
      {
       'name': 'date',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setSeconds': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'sec',
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setTime': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'time',
       'type': 'number',
      },
     ],
    },
    'setUTCDate': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'date',
       'type': 'number',
      },
     ],
    },
    'setUTCFullYear': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'year',
       'type': 'number',
      },
      {
       'name': 'month',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'date',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setUTCHours': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'hour',
       'type': 'number',
      },
      {
       'name': 'min',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'sec',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setUTCMilliseconds': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'ms',
       'type': 'number',
      },
     ],
    },
    'setUTCMinutes': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'min',
       'type': 'number',
      },
      {
       'name': 'sec',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setUTCMonth': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'month',
       'type': 'number',
      },
      {
       'name': 'date',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'setUTCSeconds': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'sec',
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'toDateString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toISOString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toJSON': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'key',
       'type': 'object',
      },
     ],
    },
    'toLocaleDateString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toLocaleString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toLocaleTimeString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toTimeString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toUTCString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'UTC': {
     'static': true,
     'type': 'object',
     '$ref': '#descriptions/Date',
     'parameter' : [
      {
       'name': 'year',
       'type': 'number',
      },
      {
       'name': 'month',
       'type': 'number',
      },
      {
       'name': 'date',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'hours',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'minutes',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'seconds',
       'optional': true,
       'type': 'number',
      },
      {
       'name': 'ms',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'valueOf': {
     'type': 'number',
     'parameter' : [
     ],
    },
   },
  },
  'Error': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'message': {
     'type': 'string',
    },
    'name': {
     'type': 'string',
    },
   },
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'message',
       'type': 'string',
      },
     ],
    },
   ],
  },
  'Function': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'length': {
     'type': 'number',
    },
   },
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'paramsAndBody',
       'type': 'string',
      },
     ],
    },
   ],
   'operations': {
    'apply': {
     'type': 'object',
     'parameter' : [
      {
       'name': 'thisArg',
       'type': 'object',
      },
      {
       'name': 'argArray',
       'type': 'array',
      },
     ],
    },
    'bind': {
     'type': 'object',
     'parameter' : [
      {
       'name': 'thisArg',
       'type': 'object',
      },
      {
       'name': 'args',
       'type': 'object',
      },
     ],
    },
    'call': {
     'type': 'object',
     'parameter' : [
      {
       'name': 'thisArg',
       'type': 'object',
      },
      {
       'name': 'args',
       'type': 'object',
      },
     ],
    },
    'toString': {
     'type': 'string',
     'parameter' : [
     ],
    },
   },
  },
  'JSON': {
   'type': 'object',
   'library': 'ECMAScript',
   'operations': {
    'parse': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'json',
       'type': 'string',
      },
     ],
    },
    'stringify': {
     'static': true,
     'type': 'string',
     'parameter' : [
      {
       'name': 'value',
       'type': 'object',
      },
      {
       'name': 'replacer',
       'optional': true,
       'type': 'object',
      },
      {
       'name': 'space',
       'optional': true,
       'type': 'object',
      },
     ],
    },
   },
  },
  'Math': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'E': {
     'type': 'number',
    },
    'LN10': {
     'type': 'number',
    },
    'LN2': {
     'type': 'number',
    },
    'LOG10E': {
     'type': 'number',
    },
    'LOG2E': {
     'type': 'number',
    },
    'PI': {
     'type': 'number',
    },
    'SQRT1_2': {
     'type': 'number',
    },
    'SQRT2': {
     'type': 'number',
    },
   },
   'operations': {
    'abs': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'acos': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'asin': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'atan': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'atan2': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'y',
       'type': 'number',
      },
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'ceil': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'cos': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'exp': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'floor': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'log': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'max': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'values',
       'type': 'number',
      },
     ],
    },
    'min': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'values',
       'type': 'number',
      },
     ],
    },
    'pow': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
      {
       'name': 'y',
       'type': 'number',
      },
     ],
    },
    'random': {
     'static': true,
     'type': 'number',
     'parameter' : [
     ],
    },
    'round': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'sin': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'sqrt': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'tan': {
     'static': true,
     'type': 'number',
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
   },
  },
  'Number': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'MAX_VALUE': {
     'type': 'number',
    },
    'MIN_VALUE': {
     'type': 'number',
    },
    'NaN': {
     'type': 'number',
    },
    'NEGATIVE_INFINITY': {
     'type': 'number',
    },
    'POSITIVE_INFINITY': {
     'type': 'number',
    },
   },
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'value',
       'type': 'object',
      },
     ],
    },
   ],
   'operations': {
    'toExponential': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'fractionDigits',
       'type': 'number',
      },
     ],
    },
    'toFixed': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'fractionDigits',
       'type': 'number',
      },
     ],
    },
    'toLocaleString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toPrecision': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'precision',
       'type': 'number',
      },
     ],
    },
    'toString': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'radix',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'valueOf': {
     'type': 'number',
     'parameter' : [
     ],
    },
   },
  },
  'Object': {
   'type': 'object',
   'library': 'ECMAScript',
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'value',
       'optional': true,
       'type': 'object',
      },
     ],
    },
   ],
   'operations': {
    'create': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
      {
       'name': 'properties',
       'optional': true,
       'type': 'object',
      },
     ],
    },
    'defineProperties': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
      {
       'name': 'props',
       'type': 'object',
      },
     ],
    },
    'defineProperty': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
      {
       'name': 'p',
       'type': 'string',
      },
      {
       'name': 'attrs',
       'type': 'object',
      },
     ],
    },
    'freeze': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'getOwnPropertyDescriptor': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
      {
       'name': 'p',
       'type': 'string',
      },
     ],
    },
    'getOwnPropertyNames': {
     'static': true,
     'type': 'object',
     '$ref': '#descriptions/string[]',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'getPrototypeOf': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'hasOwnProperty': {
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'property',
       'type': 'string',
      },
     ],
    },
    'isExtensible': {
     'static': true,
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'isFrozen': {
     'static': true,
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'isPrototypeOf': {
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'isSealed': {
     'static': true,
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'keys': {
     'static': true,
     'type': 'object',
     '$ref': '#descriptions/string[]',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'preventExtensions': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'propertyIsEnumerable': {
     'type': 'boolean',
     'parameter' : [
      {
       'name': 'p',
       'type': 'string',
      },
     ],
    },
    'seal': {
     'static': true,
     'type': 'object',
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'toLocaleString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'valueOf': {
     'type': 'object',
     'parameter' : [
     ],
    },
   },
  },
  'RegExp': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'global': {
     'type': 'boolean',
    },
    'ignoreCase': {
     'type': 'boolean',
    },
    'lastIndex': {
     'type': 'number',
    },
    'multiline': {
     'type': 'boolean',
    },
    'source': {
     'type': 'string',
    },
   },
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'pattern',
       'type': 'object',
      },
      {
       'name': 'flags',
       'type': 'string',
      },
     ],
    },
   ],
   'operations': {
    'test': {
     'type': 'boolean',
     'parameter' : [
      {
       'name': 's',
       'type': 'string',
      },
     ],
    },
   },
  },
  'String': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'length': {
     'type': 'number',
    },
   },
   'constructors' : [
    {
     'parameter' : [
      {
       'name': 'value',
       'type': 'object',
      },
     ],
    },
   ],
   'operations': {
    'charAt': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'pos',
       'type': 'number',
      },
     ],
    },
    'charCodeAt': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'pos',
       'type': 'number',
      },
     ],
    },
    'concat': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'strings',
       'type': 'string',
      },
     ],
    },
    'fromCharCode': {
     'static': true,
     'type': 'string',
     'parameter' : [
      {
       'name': 'chars',
       'type': 'number',
      },
     ],
    },
    'indexOf': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'searchString',
       'type': 'string',
      },
      {
       'name': 'position',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'lastIndexOf': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'searchString',
       'type': 'string',
      },
      {
       'name': 'position',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'localeCompare': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'that',
       'type': 'string',
      },
     ],
    },
    'match': {
     'type': 'array',
     'parameter' : [
      {
       'name': 'regexp',
       'type': 'object',
      },
     ],
    },
    'replace': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'searchValue',
       'type': 'string',
      },
      {
       'name': 'replaceValue',
       'type': 'string',
      },
     ],
    },
    'search': {
     'type': 'number',
     'parameter' : [
      {
       'name': 'regexp',
       'type': 'object',
      },
     ],
    },
    'slice': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'start',
       'type': 'number',
      },
      {
       'name': 'end',
       'type': 'number',
      },
     ],
    },
    'split': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'separator',
       'type': 'string',
      },
      {
       'name': 'limit',
       'type': 'number',
      },
     ],
    },
    'substring': {
     'type': 'string',
     'parameter' : [
      {
       'name': 'start',
       'type': 'number',
      },
      {
       'name': 'end',
       'type': 'number',
      },
     ],
    },
    'toLocaleLowerCase': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toLocaleUpperCase': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toLowerCase': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'toUpperCase': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'trim': {
     'type': 'string',
     'parameter' : [
     ],
    },
    'valueOf': {
     'type': 'string',
     'parameter' : [
     ],
    },
   },
  },
 },
 'globals': {
  'properties': {
   'Infinity': {
    'type': 'number',
   },
   'NaN': {
    'type': 'number',
   },
   'undefined': {
    'type': 'object',
   },
  },
  'operations': {
   'decodeURI': {
    'type': 'string',
    'parameter' : [
     {
      'name': 'encodedURI',
      'type': 'string',
     },
    ],
   },
   'decodeURIComponent': {
    'type': 'string',
    'parameter' : [
     {
      'name': 'encodedURIComponent',
      'type': 'string',
     },
    ],
   },
   'encodeURI': {
    'type': 'string',
    'parameter' : [
     {
      'name': 'uri',
      'type': 'string',
     },
    ],
   },
   'encodeURIComponent': {
    'type': 'string',
    'parameter' : [
     {
      'name': 'uriComponent',
      'type': 'string',
     },
    ],
   },
   'eval': {
    'type': 'object',
    'parameter' : [
     {
      'name': 'x',
      'type': 'string',
     },
    ],
   },
   'isFinite': {
    'type': 'boolean',
    'parameter' : [
     {
      'name': 'n',
      'type': 'object',
      '$ref': '#descriptions/double',
     },
    ],
   },
   'isNaN': {
    'type': 'boolean',
    'parameter' : [
     {
      'name': 'n',
      'type': 'object',
      '$ref': '#descriptions/double',
     },
    ],
   },
   'parseFloat': {
    'type': 'object',
    '$ref': '#descriptions/double',
    'parameter' : [
     {
      'name': 's',
      'type': 'string',
     },
    ],
   },
   'parseInt': {
    'type': 'number',
    'parameter' : [
     {
      'name': 's',
      'type': 'string',
     },
     {
      'name': 'radix',
      'type': 'number',
     },
    ],
   },
  },
 },
}