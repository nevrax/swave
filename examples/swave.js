!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),o=i(2),a=function(){function t(t,e){void 0===e&&(e={}),this.hostElement=t,this.config=new n.default(e),this.loadConfig(),this.loadAudio()}return t.prototype.loadAudio=function(){this.audioCtx=new AudioContext,this.audioSource=this.audioCtx.createMediaElementSource(this.audio),this.gainNode=this.audioCtx.createGain(),this.analyserNode=this.audioCtx.createAnalyser(),this.setAudioNode(this.gainNode,null,this.analyserNode),this.setAudioNode(this.analyserNode,this.gainNode,null)},t.prototype.setAudioNode=function(t,e,i){e?e.connect(t):this.audioSource.connect(t),i?t.connect(i):t.connect(this.audioCtx.destination)},t.prototype.loadConfig=function(){this.audio=new Audio(this.config.audioUrl),this.audio.crossOrigin=this.config.crossOrigin,this.audio.controls=this.config.showControls,this.audio.autoplay=this.config.autoPlay},t.prototype.play=function(){this.audio.play(),this.config.enableVisualization&&this.enableVisualization()},t.prototype.stop=function(){this.audio.pause(),this.audio.currentTime=0},t.prototype.pause=function(){this.audio.pause()},t.prototype.setVolume=function(t){this.gainNode&&(t>1&&(t=1),t<.1&&(t=.1),this.gainNode.gain.value=t*t)},t.prototype.enableVisualization=function(){this.visualizer||(this.visualizer=new o.default(this.hostElement,this.analyserNode))},t.prototype.disableVisualization=function(){this.visualizer&&(this.visualizer.destroyCanvas(),this.visualizer=null)},t.prototype.getDuration=function(){return this.audio?this.audio.duration:null},t.prototype.setCurrentTime=function(t){t<=this.audio.duration&&(this.audio.currentTime=t)},t.prototype.getCurrentTime=function(){return this.audio?this.audio.currentTime:null},t.prototype.changeAudio=function(t){t!==this.audio.currentSrc&&(this.audio.src=t)},t}();e.default=a,window.Swave=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t){for(var e in this.showControls=!1,this.autoPlay=!1,this.enableVisualization=!0,this.audioUrl="",this.crossOrigin="anonymous",t)for(var i in this)e===i&&(this[i]=t[e])}}();e.default=n},function(t,e,i){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,i){var n=t.call(this,e)||this;return n.analyserNode=i,n.animate(),n}return o(e,t),e.prototype.animate=function(){var t=this,e=this.canvas.clientWidth,i=this.canvas.clientHeight;this.analyserNode.fftSize=256;var n=this.analyserNode.frequencyBinCount,o=new Uint8Array(n);this.ctx.clearRect(0,0,e,i);!function a(){requestAnimationFrame(a);t.analyserNode.getByteFrequencyData(o),t.ctx.fillStyle="rgb(255, 255, 255)",t.ctx.fillRect(0,0,e,i);for(var r,s=e/n*2.5,u=0,c=0;c<n;c++)r=o[c],t.ctx.fillStyle="rgb("+(r+100)+",15,156)",t.ctx.fillRect(u,i-r/2,s,r/2),u+=s+1}()},e.prototype.removeVisualizations=function(){this.destroyCanvas()},e}(i(3).default);e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.hostElement=t,this.canvas=document.createElement("canvas"),t.appendChild(this.canvas),this.canvas.id="swave-canvas",this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight,this.ctx=this.canvas.getContext("2d")}return t.prototype.destroyCanvas=function(){this.hostElement.removeChild(this.canvas)},t}();e.default=n}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNvbmZpZ18xIiwidmlzdWFsaXplcl8xIiwiU3dhdmUiLCJob3N0RWxlbWVudCIsImNvbmZpZyIsInRoaXMiLCJkZWZhdWx0IiwibG9hZENvbmZpZyIsImxvYWRBdWRpbyIsImF1ZGlvQ3R4IiwiQXVkaW9Db250ZXh0IiwiYXVkaW9Tb3VyY2UiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhdWRpbyIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsImFuYWx5c2VyTm9kZSIsImNyZWF0ZUFuYWx5c2VyIiwic2V0QXVkaW9Ob2RlIiwibm9kZSIsInByZXZpb3VzTm9kZSIsIm5leHROb2RlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiQXVkaW8iLCJhdWRpb1VybCIsImNyb3NzT3JpZ2luIiwiY29udHJvbHMiLCJzaG93Q29udHJvbHMiLCJhdXRvcGxheSIsImF1dG9QbGF5IiwicGxheSIsImVuYWJsZVZpc3VhbGl6YXRpb24iLCJzdG9wIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInNldFZvbHVtZSIsInZvbHVtZSIsImdhaW4iLCJ2aXN1YWxpemVyIiwiZGlzYWJsZVZpc3VhbGl6YXRpb24iLCJkZXN0cm95Q2FudmFzIiwiZ2V0RHVyYXRpb24iLCJkdXJhdGlvbiIsInNldEN1cnJlbnRUaW1lIiwidGltZSIsImdldEN1cnJlbnRUaW1lIiwiY2hhbmdlQXVkaW8iLCJjdXJyZW50U3JjIiwic3JjIiwid2luZG93IiwiQ29uZmlnIiwiZnJvbU9iaiIsIm93blByb3BlcnR5IiwiVmlzdWFsaXplciIsIl9zdXBlciIsIl90aGlzIiwiYW5pbWF0ZSIsIl9fZXh0ZW5kcyIsIldJRFRIIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJIRUlHSFQiLCJjbGllbnRIZWlnaHQiLCJmZnRTaXplIiwiYnVmZmVyTGVuZ3RoQWx0IiwiZnJlcXVlbmN5QmluQ291bnQiLCJkYXRhQXJyYXlBbHQiLCJVaW50OEFycmF5IiwiY3R4IiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiYXJIZWlnaHQiLCJiYXJXaWR0aCIsIngiLCJyZW1vdmVWaXN1YWxpemF0aW9ucyIsIkNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsImdldENvbnRleHQiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLEdBQUEsQ0FDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxRQUFBLElBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcs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Q2pCRSxLQUFLdUQsT0FBU3FCLFNBQVNDLGNBQWMsVUFDckMvRSxFQUFZZ0YsWUFBWTlFLEtBQUt1RCxRQUM3QnZELEtBQUt1RCxPQUFPd0IsR0FBSyxlQUNqQi9FLEtBQUt1RCxPQUFPeUIsTUFBUWxGLEVBQVkwRCxZQUNoQ3hELEtBQUt1RCxPQUFPMEIsT0FBUW5GLEVBQVk0RCxhQUNoQzFELEtBQUtnRSxJQUFNaEUsS0FBS3VELE9BQU8yQixXQUFXLE1BTTFDLE9BSFdQLEVBQUFwRixVQUFBNkMsY0FBUCxXQUNJcEMsS0FBS0YsWUFBWXFGLFlBQVluRixLQUFLdUQsU0FFMUNvQixFQWhCQSIsImZpbGUiOiJzd2F2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBWaXN1YWxpemVyIGZyb20gJy4vdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3YXZlIHtcblxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWc7XG4gICAgcHJpdmF0ZSBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBwcml2YXRlIGF1ZGlvQ3R4OiBBdWRpb0NvbnRleHQ7XG4gICAgcHJpdmF0ZSBhdWRpb1NvdXJjZTogTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xuICAgIHByaXZhdGUgZ2Fpbk5vZGU6IEdhaW5Ob2RlO1xuICAgIHByaXZhdGUgYW5hbHlzZXJOb2RlOiBBbmFseXNlck5vZGU7XG4gICAgcHJpdmF0ZSB2aXN1YWxpemVyOiBWaXN1YWxpemVyO1xuXG4gICAgY29uc3RydWN0b3IgKGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudCA9IGhvc3RFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5sb2FkQ29uZmlnKCk7XG4gICAgICAgIHRoaXMubG9hZEF1ZGlvKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQXVkaW8gKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICB0aGlzLmF1ZGlvU291cmNlID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UodGhpcy5hdWRpbylcbiAgICAgICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyTm9kZSA9IHRoaXMuYXVkaW9DdHguY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgdGhpcy5zZXRBdWRpb05vZGUodGhpcy5nYWluTm9kZSwgbnVsbCwgdGhpcy5hbmFseXNlck5vZGUpO1xuICAgICAgICB0aGlzLnNldEF1ZGlvTm9kZSh0aGlzLmFuYWx5c2VyTm9kZSwgdGhpcy5nYWluTm9kZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRBdWRpb05vZGUgKG5vZGU6IEFuYWx5c2VyTm9kZSB8IEdhaW5Ob2RlLCBwcmV2aW91c05vZGU/OiBBbmFseXNlck5vZGUgfCBHYWluTm9kZSwgbmV4dE5vZGU/OiBBbmFseXNlck5vZGUgfCBHYWluTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUuY29ubmVjdChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UuY29ubmVjdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuY29ubmVjdChuZXh0Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRDb25maWcgKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKHRoaXMuY29uZmlnLmF1ZGlvVXJsKTtcbiAgICAgICAgdGhpcy5hdWRpby5jcm9zc09yaWdpbiA9IHRoaXMuY29uZmlnLmNyb3NzT3JpZ2luO1xuICAgICAgICB0aGlzLmF1ZGlvLmNvbnRyb2xzID0gdGhpcy5jb25maWcuc2hvd0NvbnRyb2xzO1xuICAgICAgICB0aGlzLmF1ZGlvLmF1dG9wbGF5ID0gdGhpcy5jb25maWcuYXV0b1BsYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXkgKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZVZpc3VhbGl6YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlVmlzdWFsaXphdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AgKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXVzZSAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Vm9sdW1lICh2b2x1bWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5nYWluTm9kZSkge1xuICAgICAgICAgICAgaWYgKHZvbHVtZSA+IDEpIHtcbiAgICAgICAgICAgICAgICB2b2x1bWUgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZvbHVtZSA8IDAuMSkge1xuICAgICAgICAgICAgICAgIHZvbHVtZSA9IDAuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZSAqIHZvbHVtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVWaXN1YWxpemF0aW9uICgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc3VhbGl6ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlzdWFsaXplciA9IG5ldyBWaXN1YWxpemVyKHRoaXMuaG9zdEVsZW1lbnQsIHRoaXMuYW5hbHlzZXJOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlVmlzdWFsaXphdGlvbiAoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZpc3VhbGl6ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlzdWFsaXplci5kZXN0cm95Q2FudmFzKCk7XG4gICAgICAgICAgICB0aGlzLnZpc3VhbGl6ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldER1cmF0aW9uICgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8uZHVyYXRpb24gOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDdXJyZW50VGltZSAodGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aW1lIDw9IHRoaXMuYXVkaW8uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEN1cnJlbnRUaW1lICgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8uY3VycmVudFRpbWUgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VBdWRpbyhhdWRpb1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChhdWRpb1VybCAhPT0gdGhpcy5hdWRpby5jdXJyZW50U3JjKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnNyYyA9IGF1ZGlvVXJsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcbndpbmRvdy5Td2F2ZSA9IFN3YXZlO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnIHtcbiAgICBwdWJsaWMgc2hvd0NvbnRyb2xzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGF1dG9QbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGVuYWJsZVZpc3VhbGl6YXRpb246IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBhdWRpb1VybDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGNyb3NzT3JpZ2luOiBzdHJpbmcgPSAnYW5vbnltb3VzJztcblxuICAgIGNvbnN0cnVjdG9yIChmcm9tT2JqOiBhbnkpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gZnJvbU9iaikge1xuICAgICAgICAgICAgZm9yKGxldCBvd25Qcm9wZXJ0eSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYocHJvcGVydHkgPT09IG93blByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3duUHJvcGVydHldID0gZnJvbU9ialtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vY2FudmFzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpc3VhbGl6ZXIgZXh0ZW5kcyBDYW52YXMge1xuXG4gICAgY29uc3RydWN0b3IgKGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgcHJpdmF0ZSBhbmFseXNlck5vZGU6IEFuYWx5c2VyTm9kZSkge1xuICAgICAgICBzdXBlcihob3N0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbmltYXRlKCkge1xuICAgICAgICBjb25zdCBXSURUSCA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBIRUlHSFQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMuYW5hbHlzZXJOb2RlLmZmdFNpemUgPSAyNTY7XG4gICAgICAgIGxldCBidWZmZXJMZW5ndGhBbHQgPSB0aGlzLmFuYWx5c2VyTm9kZS5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICAgICAgbGV0IGRhdGFBcnJheUFsdCA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aEFsdCk7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuICAgICAgICBsZXQgZHJhdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkcmF3VmlzdWFsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlck5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5QWx0KTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigyNTUsIDI1NSwgMjU1KSc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcblxuICAgICAgICAgICAgbGV0IGJhcldpZHRoID0gKFdJRFRIIC8gYnVmZmVyTGVuZ3RoQWx0KSAqIDIuNTtcbiAgICAgICAgICAgIGxldCBiYXJIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgeCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyTGVuZ3RoQWx0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYXJIZWlnaHQgPSBkYXRhQXJyYXlBbHRbaV07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiKCcgKyAoYmFySGVpZ2h0ICsgMTAwKSArICcsMTUsMTU2KSc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgSEVJR0hUIC0gYmFySGVpZ2h0IC8gMiwgYmFyV2lkdGgsIGJhckhlaWdodCAvIDIpO1xuXG4gICAgICAgICAgICAgICAgeCArPSBiYXJXaWR0aCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVWaXN1YWxpemF0aW9ucyAoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUNhbnZhcygpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcm90ZWN0ZWQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBob3N0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMuY2FudmFzLmlkID0gJ3N3YXZlLWNhbnZhcyc7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gaG9zdEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodD0gaG9zdEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3lDYW52YXMgKCkge1xuICAgICAgICB0aGlzLmhvc3RFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuY2FudmFzKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==