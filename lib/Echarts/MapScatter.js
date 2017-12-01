"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_echartsForReact=require("echarts-for-react"),_echartsForReact2=_interopRequireDefault(_echartsForReact),_Basic2=require("./Basic"),_Basic3=_interopRequireDefault(_Basic2);require("../assets/echarts/map/china");var MapScatter=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,_Basic3.default),_createClass(t,[{key:"getOption",value:function(e){var t=e.dataConfig,r=e.mapConfig,o=e.geoCoordMap,a=e.onTooltipFormat,n={tooltip:{enterable:!0,trigger:"item"},legend:{orient:"vertical",y:"bottom",x:"right",data:[],textStyle:{color:this.fontColor}},geo:{map:"china",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:r&&r.areaColor?r.areaColor:"#f3f3f3",borderColor:r&&r.borderColor?r.borderColor:"#C0B796",borderWidth:r&&r.borderWidth?r.borderWidth:1},emphasis:{areaColor:r&&r.hoverColor?r.hoverColor:"rgba(243,243,243,.5)"}}},series:[]};return a&&(n.tooltip.formatter=function(e){return a(e)}),t.title&&(n.title={text:t.title.text,subtext:t.title.subtext,textStyle:{color:this.titleColor,fontSize:this.titleSize}}),t.options.forEach(function(e,r){n.legend.data.push(e.name),n.series.push({name:e.name,type:e.type,coordinateSystem:"geo",data:function(e){for(var t=[],r=0;r<e.length;r++){var a=o[e[r].name];a&&t.push({name:e[r].name,value:a.concat(e[r].value)})}return t}(e.data),rippleEffect:{brushType:"stroke"},symbol:e.symbol,symbolSize:function(e){var o=7*e[2]/function(e){var t=[];return e.forEach(function(e){var r=[];e.data.forEach(function(e){r.push(e.value)});var o=Math.max.apply(Math,r)-Math.min.apply(Math,r);t.push(o)}),t}(t.options)[r];return o>15?15:o<8?8:o},itemStyle:{normal:{color:e.color},emphasis:{borderColor:"#fff",borderWidth:1}}})}),n}},{key:"render",value:function(){return _react2.default.createElement(_echartsForReact2.default,{option:this.getOption(this.props),notMerge:!0,lazyUpdate:!1,style:this.props.style||{height:250,width:"100%"},onEvents:this.props.onEvents})}}]),t}();exports.default=MapScatter,MapScatter.propTypes={title:_propTypes2.default.object,geoCoordMap:_propTypes2.default.object,mapConfig:_propTypes2.default.shape({areaColor:_propTypes2.default.string,hoverColor:_propTypes2.default.string,borderWidth:_propTypes2.default.number,borderColor:_propTypes2.default.string}),dataConfig:_propTypes2.default.shape({name:_propTypes2.default.string,symbol:_propTypes2.default.string,color:_propTypes2.default.string,data:_propTypes2.default.array}).isRequired,style:_propTypes2.default.object,onTooltipFormat:_propTypes2.default.func,onEvents:_propTypes2.default.object};