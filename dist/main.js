!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e,t,r){var n=document.querySelector(".slider-track"),o=document.querySelectorAll("div.slider-track > div, div.slider-track > img"),c=new Map,i=0;return o.forEach((function(e,t){c.set(t,e.offsetWidth)})),c.forEach((function(e){i+=e})),"btnPrev"===r?(0===e?e=Array.from(c).pop()[0]:e--,t+=c.get(e)):(e===Array.from(c).pop()[0]?e=0:e++,t-=c.get(e)),n.style.transform="translateX(".concat(t,"px)"),n.addEventListener("transitionstart",(function(){"btnPrev"===r?0===e?Array.from(c).pop()[0]:e+1:e===Array.from(c).pop()[0]?0:e-1,o.item(e).style.position="relative",o.item(e).style.left="".concat(-i*Math.ceil(t/i),"px")})),[e,t]},o=function(e){var t,r,o=document.querySelector(".btn-next"),c=document.querySelector(".btn-prev"),i=document.querySelector(".btn-play"),u=document.querySelector(".btn-pause"),a=0,l=0;o.addEventListener("click",(function(){t=n(a,l,"btnNext"),a=t[0],l=t[1]})),c.addEventListener("click",(function(){t=n(a,l,"btnPrev"),a=t[0],l=t[1]})),i.addEventListener("click",(function(){r=setInterval((function(){t=n(a,l,"btnNext"),a=t[0],l=t[1]}),e)})),u.addEventListener("click",(function(){clearInterval(r)}))};t.default=o;o(2e3)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIk5hdmlnYXRpb24iLCJwb3NpdGlvbiIsImRpc3BsYWNlbWVudCIsImVsZW1lbnQiLCJ0cmFjayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW1zV2lkdGhNYXAiLCJNYXAiLCJzdW1XaWR0aCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJzZXQiLCJvZmZzZXRXaWR0aCIsIkFycmF5IiwiZnJvbSIsInBvcCIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlZnQiLCJNYXRoIiwiY2VpbCIsIlNsaWRlckpzIiwidGltZXIiLCJ0ZW1wIiwicGxheWVyIiwiYnRuTmV4dCIsImJ0blByZXYiLCJidG5QbGF5IiwiYnRuUGF1c2UiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJF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QUF1Q1osRUFBV2EsS0FBS0MsS0FBS3ZCLEVBQWFTLEdBQXpFLFNBRUQsQ0FBQ1YsRUFBVUMsSUM1QmhCd0IsRUFBVyxTQUFDQyxHQUNkLElBSW9DQyxFQUFNQyxFQUpwQ0MsRUFBVXpCLFNBQVNDLGNBQWMsYUFDakN5QixFQUFVMUIsU0FBU0MsY0FBYyxhQUNqQzBCLEVBQVUzQixTQUFTQyxjQUFjLGFBQ2pDMkIsRUFBVzVCLFNBQVNDLGNBQWMsY0FDcENMLEVBQVcsRUFBR0MsRUFBZSxFQUVqQzRCLEVBQVFSLGlCQUFpQixTQUFTLFdBQzlCTSxFQUFPNUIsRUFBV0MsRUFBVUMsRUFBYyxXQUMxQ0QsRUFBVzJCLEVBQUssR0FDaEIxQixFQUFlMEIsRUFBSyxNQUV4QkcsRUFBUVQsaUJBQWlCLFNBQVMsV0FDOUJNLEVBQU81QixFQUFXQyxFQUFVQyxFQUFjLFdBQzFDRCxFQUFXMkIsRUFBSyxHQUNoQjFCLEVBQWUwQixFQUFLLE1BRXhCSSxFQUFRVixpQkFBaUIsU0FBUyxXQUM5Qk8sRUFBU0ssYUFBWSxXQUNqQk4sRUFBTzVCLEVBQVdDLEVBQVVDLEVBQWMsV0FDMUNELEVBQVcyQixFQUFLLEdBQ2hCMUIsRUFBZTBCLEVBQUssS0FDckJELE1BRVBNLEVBQVNYLGlCQUFpQixTQUFTLFdBQy9CYSxjQUFjTixPQUdQSCxZQUNmQSxFQUFTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBOYXZpZ2F0aW9uID0gKHBvc2l0aW9uLCBkaXNwbGFjZW1lbnQsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBsZXQgcmVwbGFjZVBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXRyYWNrJylcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5zbGlkZXItdHJhY2sgPiBkaXYsIGRpdi5zbGlkZXItdHJhY2sgPiBpbWcnKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1zV2lkdGhNYXAgPSBuZXcgTWFwKClcclxuICAgICAgICBsZXQgc3VtV2lkdGggPSAwXHJcbiAgICBcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtc1dpZHRoTWFwLnNldChpbmRleCwgaXRlbS5vZmZzZXRXaWR0aClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGl0ZW1zV2lkdGhNYXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBzdW1XaWR0aCArPSBpdGVtXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihlbGVtZW50ID09PSAnYnRuUHJldicpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPT09IDAgPyBwb3NpdGlvbiA9IEFycmF5LmZyb20oaXRlbXNXaWR0aE1hcCkucG9wKClbMF0gOiBwb3NpdGlvbi0tXHJcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudCArPSBpdGVtc1dpZHRoTWFwLmdldChwb3NpdGlvbilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9PT0gQXJyYXkuZnJvbShpdGVtc1dpZHRoTWFwKS5wb3AoKVswXSA/IHBvc2l0aW9uID0gMCA6IHBvc2l0aW9uKytcclxuICAgICAgICAgICAgZGlzcGxhY2VtZW50IC09IGl0ZW1zV2lkdGhNYXAuZ2V0KHBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFjay5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2Rpc3BsYWNlbWVudH1weClgXHJcbiAgICAgICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihlbGVtZW50ID09PSAnYnRuUHJldicpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID09PSAwID8gcmVwbGFjZVBvc2l0aW9uID0gQXJyYXkuZnJvbShpdGVtc1dpZHRoTWFwKS5wb3AoKVswXSA6IHJlcGxhY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgMVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPT09IEFycmF5LmZyb20oaXRlbXNXaWR0aE1hcCkucG9wKClbMF0gPyByZXBsYWNlUG9zaXRpb24gPSAwIDogcmVwbGFjZVBvc2l0aW9uID0gcG9zaXRpb24gLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbXMuaXRlbShwb3NpdGlvbikuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgIGl0ZW1zLml0ZW0ocG9zaXRpb24pLnN0eWxlLmxlZnQgPSBgJHstKHN1bVdpZHRoICogTWF0aC5jZWlsKGRpc3BsYWNlbWVudC9zdW1XaWR0aCkpfXB4YFxyXG4gICAgICAgIH0pXHJcbiAgICByZXR1cm4gW3Bvc2l0aW9uLCBkaXNwbGFjZW1lbnRdXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiIsIiBpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nXHJcblxyXG5jb25zdCBTbGlkZXJKcyA9ICh0aW1lcikgPT4ge1xyXG4gICAgY29uc3QgYnRuTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbmV4dCcpXHJcbiAgICBjb25zdCBidG5QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wcmV2JylcclxuICAgIGNvbnN0IGJ0blBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBsYXknKVxyXG4gICAgY29uc3QgYnRuUGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhdXNlJylcclxuICAgIGxldCBwb3NpdGlvbiA9IDAsIGRpc3BsYWNlbWVudCA9IDAsIHRlbXAsIHBsYXllclxyXG5cclxuICAgIGJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0ZW1wID0gTmF2aWdhdGlvbihwb3NpdGlvbiwgZGlzcGxhY2VtZW50LCAnYnRuTmV4dCcpXHJcbiAgICAgICAgcG9zaXRpb24gPSB0ZW1wWzBdXHJcbiAgICAgICAgZGlzcGxhY2VtZW50ID0gdGVtcFsxXVxyXG4gICAgfSlcclxuICAgIGJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0ZW1wID0gTmF2aWdhdGlvbihwb3NpdGlvbiwgZGlzcGxhY2VtZW50LCAnYnRuUHJldicpXHJcbiAgICAgICAgcG9zaXRpb24gPSB0ZW1wWzBdXHJcbiAgICAgICAgZGlzcGxhY2VtZW50ID0gdGVtcFsxXVxyXG4gICAgfSlcclxuICAgIGJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyID0gc2V0SW50ZXJ2YWwoKCkgPT57XHJcbiAgICAgICAgICAgIHRlbXAgPSBOYXZpZ2F0aW9uKHBvc2l0aW9uLCBkaXNwbGFjZW1lbnQsICdidG5OZXh0JylcclxuICAgICAgICAgICAgcG9zaXRpb24gPSB0ZW1wWzBdXHJcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudCA9IHRlbXBbMV1cclxuICAgICAgICB9LCB0aW1lcilcclxuICAgIH0pXHJcbiAgICBidG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKHBsYXllcilcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVySnNcclxuU2xpZGVySnMoMjAwMCkiXSwic291cmNlUm9vdCI6IiJ9