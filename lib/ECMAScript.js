// Slightly hacked version of http://html5index.org/json/ECMAScript.json to
// avoid an XmlHttpRequest just for the demo

window.jsSchema = {
 'name': 'ECMAScript',
 'description': 'Generated Tue May 20 23:40:17 CEST 2014 by the html5index.org generator.',
 'definitions': {
  'Array': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'length': {
     'type': 'number',
    },
    'concat': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'items',
       'type': 'object',
      },
     ],
    },
    'every': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'arg',
       'type': 'object',
      },
     ],
    },
    'join': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'separator',
       'type': 'string',
      },
     ],
    },
    'lastIndexOf': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'object',
     },
     'parameter' : [
     ],
    },
    'push': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
     'parameter' : [
      {
       'name': 'items',
       'type': 'object',
      },
     ],
    },
    'reduce': {
     'type': 'function',
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'returns': {
      'type': 'array',
     },
     'parameter' : [
     ],
    },
    'shift': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
     'parameter' : [
     ],
    },
    'slice': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'array',
     },
     'parameter' : [
      {
       'name': 'compareFn',
       'type': 'object',
       '$ref': '#descriptions/Function',
      },
     ],
    },
    'splice': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
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
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'unshift': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
     'parameter' : [
      {
       'name': 'items',
       'type': 'object',
      },
     ],
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
  },
  'Boolean': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'toString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'valueOf': {
     'type': 'function',
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
     ],
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
  },
  'Date': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'getDate': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getDay': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getFullYear': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getHours': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getMilliseconds': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getMinutes': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getMonth': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getSeconds': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getTime': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getTimezoneOffset': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCDate': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCDay': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCFullYear': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCHours': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCMilliseconds': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCMinutes': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCMonth': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'getUTCSeconds': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'now': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
      '$ref': '#descriptions/Date',
     },
     'parameter' : [
     ],
    },
    'setDate': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'date',
       'type': 'number',
      },
     ],
    },
    'setFullYear': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'ms',
       'type': 'number',
      },
     ],
    },
    'setMinutes': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'time',
       'type': 'number',
      },
     ],
    },
    'setUTCDate': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'date',
       'type': 'number',
      },
     ],
    },
    'setUTCFullYear': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'ms',
       'type': 'number',
      },
     ],
    },
    'setUTCMinutes': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toISOString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toJSON': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'key',
       'type': 'object',
      },
     ],
    },
    'toLocaleDateString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toLocaleString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toLocaleTimeString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toTimeString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toUTCString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'UTC': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
      '$ref': '#descriptions/Date',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
   },
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
    'apply': {
     'type': 'function',
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
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
  },
  'JSON': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'parse': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
     'parameter' : [
      {
       'name': 'json',
       'type': 'string',
      },
     ],
    },
    'stringify': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'string',
     },
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
    'abs': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'acos': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'asin': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'atan': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'atan2': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'cos': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'exp': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'floor': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'log': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'max': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'values',
       'type': 'number',
      },
     ],
    },
    'min': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'values',
       'type': 'number',
      },
     ],
    },
    'pow': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
    },
    'round': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'sin': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'sqrt': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'x',
       'type': 'number',
      },
     ],
    },
    'tan': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'number',
     },
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
    'toExponential': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'fractionDigits',
       'type': 'number',
      },
     ],
    },
    'toFixed': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'fractionDigits',
       'type': 'number',
      },
     ],
    },
    'toLocaleString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toPrecision': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'precision',
       'type': 'number',
      },
     ],
    },
    'toString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'radix',
       'optional': true,
       'type': 'number',
      },
     ],
    },
    'valueOf': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
     ],
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
  },
  'Object': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'create': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'getOwnPropertyDescriptor': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
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
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
      '$ref': '#descriptions/string[]',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'getPrototypeOf': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'hasOwnProperty': {
     'type': 'function',
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'property',
       'type': 'string',
      },
     ],
    },
    'isExtensible': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'isFrozen': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'isPrototypeOf': {
     'type': 'function',
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'isSealed': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'keys': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
      '$ref': '#descriptions/string[]',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'preventExtensions': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'propertyIsEnumerable': {
     'type': 'function',
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 'p',
       'type': 'string',
      },
     ],
    },
    'seal': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'object',
     },
     'parameter' : [
      {
       'name': 'o',
       'type': 'object',
      },
     ],
    },
    'toLocaleString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'valueOf': {
     'type': 'function',
     'returns': {
      'type': 'object',
     },
     'parameter' : [
     ],
    },
   },
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
    'test': {
     'type': 'function',
     'returns': {
      'type': 'boolean',
     },
     'parameter' : [
      {
       'name': 's',
       'type': 'string',
      },
     ],
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
  },
  'String': {
   'type': 'object',
   'library': 'ECMAScript',
   'properties': {
    'length': {
     'type': 'number',
    },
    'charAt': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'pos',
       'type': 'number',
      },
     ],
    },
    'charCodeAt': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'pos',
       'type': 'number',
      },
     ],
    },
    'concat': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'strings',
       'type': 'string',
      },
     ],
    },
    'fromCharCode': {
     'type': 'function',
     'static': true,
     'returns': {
      'type': 'string',
     },
     'parameter' : [
      {
       'name': 'chars',
       'type': 'number',
      },
     ],
    },
    'indexOf': {
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'that',
       'type': 'string',
      },
     ],
    },
    'match': {
     'type': 'function',
     'returns': {
      'type': 'array',
     },
     'parameter' : [
      {
       'name': 'regexp',
       'type': 'object',
      },
     ],
    },
    'replace': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
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
     'type': 'function',
     'returns': {
      'type': 'number',
     },
     'parameter' : [
      {
       'name': 'regexp',
       'type': 'object',
      },
     ],
    },
    'slice': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
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
     'type': 'function',
     'returns': {
      'type': 'string',
     },
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
     'type': 'function',
     'returns': {
      'type': 'string',
     },
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
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toLocaleUpperCase': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toLowerCase': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toString': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'toUpperCase': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'trim': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
    },
    'valueOf': {
     'type': 'function',
     'returns': {
      'type': 'string',
     },
     'parameter' : [
     ],
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
  },
 },
 'globals': {
  'Infinity': {
   'type': 'number',
  },
  'NaN': {
   'type': 'number',
  },
  'undefined': {
   'type': 'object',
  },
  'decodeURI': {
   'type': 'function',
   'returns': {
    'type': 'string',
   },
   'parameter' : [
    {
     'name': 'encodedURI',
     'type': 'string',
    },
   ],
  },
  'decodeURIComponent': {
   'type': 'function',
   'returns': {
    'type': 'string',
   },
   'parameter' : [
    {
     'name': 'encodedURIComponent',
     'type': 'string',
    },
   ],
  },
  'encodeURI': {
   'type': 'function',
   'returns': {
    'type': 'string',
   },
   'parameter' : [
    {
     'name': 'uri',
     'type': 'string',
    },
   ],
  },
  'encodeURIComponent': {
   'type': 'function',
   'returns': {
    'type': 'string',
   },
   'parameter' : [
    {
     'name': 'uriComponent',
     'type': 'string',
    },
   ],
  },
  'eval': {
   'type': 'function',
   'returns': {
    'type': 'object',
   },
   'parameter' : [
    {
     'name': 'x',
     'type': 'string',
    },
   ],
  },
  'isFinite': {
   'type': 'function',
   'returns': {
    'type': 'boolean',
   },
   'parameter' : [
    {
     'name': 'n',
     'type': 'object',
     '$ref': '#descriptions/double',
    },
   ],
  },
  'isNaN': {
   'type': 'function',
   'returns': {
    'type': 'boolean',
   },
   'parameter' : [
    {
     'name': 'n',
     'type': 'object',
     '$ref': '#descriptions/double',
    },
   ],
  },
  'parseFloat': {
   'type': 'function',
   'returns': {
    'type': 'object',
    '$ref': '#descriptions/double',
   },
   'parameter' : [
    {
     'name': 's',
     'type': 'string',
    },
   ],
  },
  'parseInt': {
   'type': 'function',
   'returns': {
    'type': 'number',
   },
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
}
