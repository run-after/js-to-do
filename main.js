!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={projects:[]};var a=function(e){return{title:e,tasks:[]}};var i={taskFactory:function(e,t,n,r){return{name:e,dueDate:t,priority:n,description:r}}};var o={addTask:{createNew:(e,t,n,a)=>{let o=document.querySelector(".selected").getAttribute("data-index");r.projects[o].tasks.push(i.taskFactory(e,t,n,a))}}};var u=(e,t)=>{const n=r.projects[e];document.querySelector(`[data-task-index="${t}"]`).remove(),n.tasks.splice(t,1,null)};function s(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){s(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e){s(1,arguments);var t=c(e);return!isNaN(t)}var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var h={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function p(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var w,b={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof l[e]?l[e]:1===t?l[e].one:l[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:h,formatRelative:function(e,t,n,r){return f[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(w={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(w.matchPattern);if(!a)return null;var i=a[0],o=n.match(w.parsePattern);if(!o)return null;var u=w.valueCallback?w.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){s(2,arguments);var n=c(e).getTime(),r=v(t);return new Date(n+r)}function C(e,t){s(2,arguments);var n=v(t);return y(e,-n)}function T(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var x={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):T(n+1,2)},d:function(e,t){return T(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return T(e.getUTCHours()%12||12,t.length)},H:function(e,t){return T(e.getUTCHours(),t.length)},m:function(e,t){return T(e.getUTCMinutes(),t.length)},s:function(e,t){return T(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),t.length)}};function M(e){s(1,arguments);var t=1,n=c(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function k(e){s(1,arguments);var t=c(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=M(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=M(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function E(e){s(1,arguments);var t=k(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=M(n);return r}function P(e,t){s(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:v(a),o=null==n.weekStartsOn?i:v(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=c(e),d=u.getUTCDay(),l=(d<o?7:0)+d-o;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function S(e,t){s(1,arguments);var n=c(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:v(o),d=null==a.firstWeekContainsDate?u:v(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,d),l.setUTCHours(0,0,0,0);var m=P(l,t),h=new Date(0);h.setUTCFullYear(r,0,d),h.setUTCHours(0,0,0,0);var f=P(h,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function D(e,t){s(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:v(a),o=null==n.firstWeekContainsDate?i:v(n.firstWeekContainsDate),u=S(e,t),c=new Date(0);c.setUTCFullYear(u,0,o),c.setUTCHours(0,0,0,0);var d=P(c,t);return d}var L="midnight",j="noon",U="morning",q="afternoon",O="evening",W="night";function Y(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+T(i,2)}function N(e,t){return e%60==0?(e>0?"-":"+")+T(Math.abs(e)/60,2):A(e,t)}function A(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}var H={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return x.y(e,t)},Y:function(e,t,n,r){var a=S(e,r),i=a>0?a:1-a;return"YY"===t?T(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):T(i,t.length)},R:function(e,t){return T(k(e),t.length)},u:function(e,t){return T(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return x.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){s(1,arguments);var n=c(e),r=P(n,t).getTime()-D(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):T(a,t.length)},I:function(e,t,n){var r=function(e){s(1,arguments);var t=c(e),n=M(t).getTime()-E(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):T(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):x.d(e,t)},D:function(e,t,n){var r=function(e){s(1,arguments);var t=c(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):T(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return T(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return T(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return T(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?j:0===a?L:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?O:a>=12?q:a>=4?U:W,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return x.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):x.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):T(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):T(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):x.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):x.s(e,t)},S:function(e,t){return x.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return N(a);case"XXXX":case"XX":return A(a);case"XXXXX":case"XXX":default:return A(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return N(a);case"xxxx":case"xx":return A(a);case"xxxxx":case"xxx":default:return A(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(a,":");case"OOOO":default:return"GMT"+A(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(a,":");case"zzzz":default:return"GMT"+A(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return T(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return T((r._originalDate||e).getTime(),t.length)}};function X(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function z(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var B={p:z,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return X(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",X(a,t)).replace("{{time}}",z(i,t))}};function F(e){return e.getTime()%6e4}function G(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+F(t))%6e4:F(t))}var Q=["D","DD"],R=["YY","YYYY"];function _(e){return-1!==Q.indexOf(e)}function V(e){return-1!==R.indexOf(e)}function I(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,Z=/''/g,ee=/[a-zA-Z]/;function te(e){return e.match(K)[1].replace(Z,"'")}var ne={addTaskToDOM:{addListener:()=>{const e=document.querySelector(".add-task-btn"),t=document.querySelector(".last-task");e.addEventListener("click",()=>{const e=document.querySelector(".project"),n=document.createElement("div");n.classList.add("task"),e.insertBefore(n,t);const r=document.createElement("form");r.setAttribute("method","get"),r.setAttribute("action",""),r.setAttribute("name","add-task");const a=document.createElement("input");a.type="text",a.name="name",a.id="name",a.placeholder="Name";const i=document.createElement("input");i.type="date",i.name="dueDate",i.id="dueDate",i.placeholder="Date due";const u=document.createElement("div");u.classList.add("priority"),u.textContent="Priority:";const l=document.createElement("br");u.appendChild(l);const m=document.createElement("input");m.type="radio",m.checked="checked",m.name="priority",m.id="low",m.value="Low";const h=document.createElement("label");h.setAttribute("for","priority"),h.textContent="Low";const f=document.createElement("input");f.type="radio",f.name="priority",f.id="med",f.value="Medium";const g=document.createElement("label");g.setAttribute("for","priority"),g.textContent="Med";const p=document.createElement("input");p.type="radio",p.name="priority",p.id="high",p.value="High";const w=document.createElement("label");w.setAttribute("for","priority"),w.textContent="High";const y=document.createElement("input");y.type="text",y.name="description",y.id="description",y.placeholder="description";const T=document.createElement("button");T.classList.add("submit"),T.type="button",T.textContent="submit",n.appendChild(r),r.appendChild(a),r.appendChild(i),u.appendChild(h),u.appendChild(m),u.appendChild(g),u.appendChild(f),u.appendChild(w),u.appendChild(p),r.appendChild(u),r.appendChild(y),r.appendChild(T),T.addEventListener("click",()=>{const e=document.getElementById("name").value;let t=document.getElementById("dueDate").value;t=function(e,t,n){s(2,arguments);var r=String(t),a=n||{},i=a.locale||b,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:v(o),l=null==a.firstWeekContainsDate?u:v(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=i.options&&i.options.weekStartsOn,h=null==m?0:v(m),f=null==a.weekStartsOn?h:v(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=c(e);if(!d(g))throw new RangeError("Invalid time value");var p=G(g),w=C(g,p),y={firstWeekContainsDate:l,weekStartsOn:f,locale:i,_originalDate:g},T=r.match($).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,i.formatLong,y):e})).join("").match(J).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return te(n);var o=H[r];if(o)return!a.useAdditionalWeekYearTokens&&V(n)&&I(n,t,e),!a.useAdditionalDayOfYearTokens&&_(n)&&I(n,t,e),o(w,n,i.localize,y);if(r.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}(Date.parse(t),"PPPP");let n=document.querySelectorAll("input[name='priority']");for(const e of n)e.checked&&(n=e.value);const r=document.getElementById("description").value;if(e&&t&&r){o.addTask.createNew(e,t,n,r);let a=document.querySelector(".selected").getAttribute("data-index");re.projectView(a)}})})},listExistingTasks:(e,t,n)=>{if(e){const r=document.querySelector(".project"),a=document.createElement("div"),i=document.createElement("div");i.textContent="X",i.classList="delete",i.style.position="absolute",a.classList.add("task"),a.setAttribute("data-task-index",t),a.setAttribute("data-project-index",n);const o=document.createElement("div");o.classList.add("name"),o.textContent=e.name,a.appendChild(i),a.appendChild(o);const s=document.createElement("div");s.classList.add("dueDate"),s.textContent="Due on: "+e.dueDate,a.appendChild(s);const c=document.createElement("div");c.classList.add("priority"),c.textContent="Priority: "+e.priority,"Low"==e.priority?a.style.background="rgb(127, 191, 63)":"Medium"==e.priority?a.style.background="rgb(255, 252, 117)":a.style.background="rgb(255, 112, 114)",a.appendChild(c);const d=document.createElement("div");d.classList.add("description"),d.textContent="Description: "+e.description,a.appendChild(d),r.appendChild(a),i.addEventListener("click",e=>{const t=e.target.parentElement.getAttribute("data-task-index");u(n,t)})}}}};var re={projectView:e=>{const t=r.projects[e].tasks,n=document.querySelector(".container");n.innerHTML="";const a=document.createElement("div");a.classList.add("project"),n.appendChild(a);const i=(t,n)=>{ne.addTaskToDOM.listExistingTasks(t,n,e)};t.length>0&&t.forEach(i);const o=document.createElement("div");o.classList.add("task"),o.classList.add("last-task"),a.appendChild(o);const u=document.createElement("button");u.classList.add("add-task-btn"),u.textContent="+",o.appendChild(u),ne.addTaskToDOM.addListener()}};var ae=e=>{document.querySelector(`[data-index="${e}"]`).remove(),r.projects.splice(e,1,null);const t=document.querySelector(".selected");t&&t.classList.remove("selected");const n=document.querySelector(".project-tabs").firstElementChild;n.classList.add("selected");const a=n.getAttribute("data-index");a?re.projectView(a):ie.addProject.createProjectTab()};var ie={addProject:(()=>{const e=()=>{const e=document.querySelector(".last-tab"),t=document.querySelector(".project-tabs"),a=document.createElement("div");a.classList.add("tab");document.querySelector(".selected").classList.remove("selected"),a.classList.add("selected");const i=r.projects.length;a.setAttribute("data-index",i);const o=prompt("New project name?");a.textContent=o;const u=document.createElement("button");u.classList.add("delete"),u.textContent="X",a.appendChild(u),t.insertBefore(a,e),n(o),re.projectView(i),a.addEventListener("click",e=>{if(e.target.classList.contains("tab")){let t=e.target.dataset.index;document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected"),re.projectView(t)}}),u.addEventListener("click",e=>{let t=e.target.parentElement.getAttribute("data-index");ae(t)})},t=void document.querySelector(".add-project-btn").addEventListener("click",e),n=e=>{let t=a(e);r.projects.push(t)};return{addListener:t,createProject:n,createProjectTab:e}})()};(()=>{const e=document.querySelector(".last-tab"),t=document.querySelector(".project-tabs"),n=document.createElement("div");n.classList.add("tab"),n.classList.add("selected");const i=r.projects.length;n.setAttribute("data-index",i);n.textContent="General";const o=document.createElement("button");o.classList.add("delete"),o.textContent="X",n.appendChild(o),t.insertBefore(n,e),(e=>{let t=a(e);r.projects.push(t)})("General"),re.projectView(i),n.addEventListener("click",e=>{if(e.target.classList.contains("tab")){document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected");const t=e.target.dataset.index;re.projectView(t)}}),o.addEventListener("click",e=>{let t=e.target.parentElement.getAttribute("data-index");ae(t)})})()}]);