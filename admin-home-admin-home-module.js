(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-home-admin-home-module"],{

/***/ "./node_modules/@factman/graph-ui/js/GraphUI.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/@factman/graph-ui/js/GraphUI.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){"use strict";class e{static downloadFile(t,e){const i=document.createElement("a");i.download=e,i.href=t,i.innerHTML=e,i.target="_blank",document.body.appendChild(i),i.click(),i.remove()}static convertToObjectURL(t,e){window.URL=window.URL||window.webkitURL;const i=new Blob([t],{type:e});return URL.createObjectURL(i)}static renderToolTips(){if(null===document.getElementById("GraphUI-toolTips-con")){const t=document.createElement("div");t.innerHTML='\n          <div id="GraphUI-toolTips-con">\n            <p id="GraphUI-toolTips-head"></p>\n            <p id="GraphUI-toolTips-text"></p>\n          </div>\n        ',document.body.appendChild(t)}}static getIncrement(t){let e=1;return t>10&&(e=1),t>100&&(e=10),t>1e3&&(e=100),t>1e4&&(e=1e3),t>1e5&&(e=1e4),t>1e6&&(e=1e5),t>1e7&&(e=1e6),e}static getDecrement(t){let e=-1;return t<-10&&(e=-1),t<-100&&(e=-10),t<-1e3&&(e=-100),t<-1e4&&(e=-1e3),t<-1e5&&(e=-1e4),t<-1e6&&(e=-1e5),t<-1e7&&(e=-1e6),e}static thousandSeparator(t){const e=t.split("."),i=e[0].length,s=i/3;let o=Math.floor(i/3);if(s>=1&&s>o||s>=1&&s===o){s===o&&(o-=1);let t=i,r=0,n="";for(let i=0;i<o;i+=1)r=t-3,n=`,${e[0].substring(r,t)}${n}`,t-=3;o>0&&(e[0]=e[0].substring(0,r)+n)}return e.join(".")}static padArray(t,e){if("object"==typeof t){if(t.length<e){const i=e-t.length;for(let e=1;e<=i;e+=1)t.push(0)}}else if("number"==typeof t||"string"==typeof t)return[t];return t}static sumArray(t){let e=0;return t.forEach(t=>{e+=t}),e}static getMaxLength(t){let e=0;return t.forEach(t=>{"object"==typeof t&&e<t.length&&(e=t.length)}),e}static parseData(t){const i=Object.keys(t),s={};i.forEach(e=>{switch(typeof t[e]){case"object":void 0!==t[e].length?s[e]=t[e]:s[e]=[0];break;case"number":s[e]=[t[e]];break;case"string":t[e].includes(",")?s[e]=t[e].split(",").map(t=>Number(t.trim())||0):s[e]=[Number(t[e])||0];break;default:s[e]=[Number(t[e])||0]}});const o=Object.values(s),r=e.getMaxLength(o);return o.map(t=>e.padArray(t,r)),s}static showToolTips(t){this.timer&&clearTimeout(this.timer);const e=t.target.getAttribute("data-label"),i=t.target.getAttribute("data-value"),s=t.target.getAttribute("data-type"),o=t.clientX,r=t.clientY,n=document.getElementById("GraphUI-toolTips-con");document.getElementById("GraphUI-toolTips-head").innerHTML=e,document.getElementById("GraphUI-toolTips-text").innerHTML=s?i:`Value: ${i}`,n.style.top=`${r+-35}px`,n.style.left=`${o+25}px`,n.style.opacity="0.7"}static hideToolTips(){this.timer=setTimeout(()=>{const t=document.getElementById("GraphUI-toolTips-con");t.style.opacity="0",t.style.left="-100px",document.getElementById("GraphUI-toolTips-head").innerHTML="",document.getElementById("GraphUI-toolTips-text").innerHTML=""},500)}static getMaxValue(t){const i=Array.apply([],t);i.sort((t,e)=>t-e);const s=e.getIncrement(i[i.length-1]);return i[i.length-1]+s}static getMinValue(t){const i=Array.apply([],t);i.sort((t,e)=>t-e);const s=e.getDecrement(i[0]);return i[0]<0?i[0]+s:0}static toPositive(t){if(t<0){const e=t.toString().replace("-","");return Number(e)}return t}}class i{constructor({elementId:t,height:i,backgroundColor:s,gridColor:o,textColor:r,lineColor:n,nodeColor:a,nodeStroke:l,precision:h,prefix:d,suffix:p,data:u,horizontalGrids:c,showHorizontalGrids:b,showVerticalGrids:g,showYAxisLabel:m,showXAxisLabel:x,showInlineLabel:w,inlineLabelColor:y,showInlineLabelValueOnly:C,enableLiveEdit:f,enableOptionDropdown:A,dropdownOptions:L,showTable:v,tableBackgroundColor:T,tableTextColor:$}={}){return this.utility=e,this.element=document.getElementById(t||"graph"),this.element?"object"!=typeof u||void 0!==u.length?(console.error('GraphUI: Invalid "data" option specified.'),Error('GraphUI: Invalid "data" option specified.')):(this.data=this.utility.parseData(u),this.height=i,this.backgroundColor=s,this.gridColor=o,this.textColor=r,this.lineColor=n,this.nodeColor=a||this.backgroundColor,this.nodeStroke=l||this.lineColor,this.precision=h,this.prefix=d,this.suffix=p,this.horizontalGrids=c,this.showHorizontalGrids=b,this.showVerticalGrids=g,this.showYAxisLabel=m,this.showXAxisLabel=x,this.showInlineLabel=w,this.showInlineLabelValueOnly=C,this.inlineLabelColor=y||this.textColor,this.enableLiveEdit=f,this.enableOptionDropdown=A,this.showTable=v,this.tableBackgroundColor=T,this.tableTextColor=$,this.yLabel={start:80,offset:5},this.xLabel={start:50,offset:30},this.node={radius:6,stroke:1.2},this.padding={top:50,bottom:50,left:90,right:20},this.canvasHeight=null,this.tableHeight=0,this.graphOptionsObject={IMAGE:{label:"Export Image",action:this.graphExport.bind(this,"IMAGE")},CSV:{label:"Export CSV",action:this.graphExport.bind(this,"CSV")},JSON:{label:"Export JSON",action:this.graphExport.bind(this,"JSON")}},this.element.style.display="flex",this.dropdownOptions=this.parseOptions(L),window.addEventListener("resize",this.render.bind(this)),this.utility.renderToolTips(),this.render(),{elementId:this.element.id,height:this.height,backgroundColor:this.backgroundColor,gridColor:this.gridColor,textColor:this.textColor,lineColor:this.lineColor,nodeColor:this.nodeColor,nodeStroke:this.nodeStroke,precision:this.precision,prefix:this.prefix,suffix:this.suffix,data:this.data,horizontalGrids:this.horizontalGrids,showHorizontalGrids:this.showHorizontalGrids,showVerticalGrids:this.showVerticalGrids,showYAxisLabel:this.showYAxisLabel,showXAxisLabel:this.showXAxisLabel,showInlineLabel:this.showInlineLabel,inlineLabelColor:this.inlineLabelColor,showInlineLabelValueOnly:this.showInlineLabelValueOnly,enableLiveEdit:this.enableLiveEdit,enableOptionDropdown:this.enableOptionDropdown,dropdownOptions:void 0===L?Object.keys(this.graphOptionsObject):L,showTable:this.showTable,tableBackgroundColor:this.tableBackgroundColor,tableTextColor:this.tableTextColor}):(console.error('GraphUI: Invalid "elementId" option specified.'),Error('GraphUI: Invalid "elementId" option specified.'))}convertToCSV(t){const e=Object.values(t),i=this.utility.getMaxLength(e),s=Object.keys(t);let o="";const r=[];if(i>1){o+='"Labels"';for(let t=1;t<=i;t+=1)o+=`,"Data ${t}"`;o+=',"Total"',e.forEach((t,e)=>{let i=`"${s[e]}"`;t.forEach(t=>{i+=`,"${this.formatValue(t)}"`}),i+=`,"${this.formatValue(this.utility.sumArray(t))}"`,r.push(i)})}else{o+='"Labels"',s.forEach(t=>{o+=`,"${t}"`});let t='"Data"';e.forEach(e=>{t+=`,"${this.formatValue(e)}"`}),r.push(t)}o+="\r\n";const n=r.join("\r\n");return o+n}exportImage(){const t=this.height,e=this.width,i=this.showTable,s=Number((1e3/(e/t)).toFixed(2));this.width=1e3,this.height=s,this.showTable=!0;const o=this.width/(this.height+this.tableHeight+this.tableHeight/4.5);this.canvasHeight=(this.width/o).toFixed(2);const r=this.render(!1),n=document.createElement("canvas"),a=n.getContext("2d"),l=new Image;n.width=this.width,n.height=this.canvasHeight,l.onload=(()=>{a.drawImage(l,0,0),n.toBlob(t=>{const e=URL.createObjectURL(t);this.utility.downloadFile(e,`Export-GraphUI-ImageFile-${(new Date).getTime()}.png`)},"image/png",100)}),l.src=`data:image/svg+xml,${encodeURIComponent(r.outerHTML)}`,this.height=t,this.width=e,this.canvasHeight=null,this.showTable=i,this.render()}exportCSV(){const t=this.convertToCSV(this.data),e=this.utility.convertToObjectURL(t,"text/csv");this.utility.downloadFile(e,`Export-GraphUI-CSVFile-${(new Date).getTime()}.csv`)}exportJSON(){const t=JSON.stringify(this.data,(t,e)=>"number"==typeof e?this.formatValue(e):e,2),e=this.utility.convertToObjectURL(t,"application/json");this.utility.downloadFile(e,`Export-GraphUI-JSONFile-${(new Date).getTime()}.json`)}graphExport(t,e){switch(t){case"IMAGE":this.exportImage();break;case"JSON":this.exportJSON();break;case"CSV":this.exportCSV();break;default:console.warn(`Invalid option '${e.target.innerHTML}' in ${this.element.id.toUpperCase()}`)}}parseOptions(t){const e=[],i=Object.keys(this.graphOptionsObject);return"string"==typeof t&&"ALL"===t.toUpperCase().trim()?Object.values(this.graphOptionsObject):"object"==typeof t?(t.forEach(t=>{const s=t.trim().split("|").map(t=>t.trim()),o=s[0].toUpperCase();if(1===s.length)i.includes(o)&&e.push(this.graphOptionsObject[o]);else if(s.length>1&&i.includes(o)){const t=Object.assign({},this.graphOptionsObject[o]);t.label=s[1],e.push(t)}}),e):Object.values(this.graphOptionsObject)}getValues(){const t=[];return Object.keys(this.data).forEach(e=>{"object"==typeof this.data[e]?t.push(this.utility.sumArray(this.data[e])):t.push(this.data[e])}),t}formatValue(t){return this.prefix+this.utility.thousandSeparator(t.toFixed(this.precision))+this.suffix}getYLabels(){const t=this.getValues(),e=this.utility.getMaxValue(t),i=this.utility.getMinValue(t),s=Number(((e-i)/this.horizontalGrids).toFixed(2));let o=i;const r={values:[],texts:[]};r.texts.push(this.formatValue(o)),r.values.push(o);for(let t=1;t<=this.horizontalGrids;t+=1)o+=s,r.values.push(o),r.texts.push(this.formatValue(o));return r}getXLabels(){return Object.keys(this.data)}getPointYAxis(t,e,i){const s=i/e*100/100*t;return t+this.padding.top-s}getPointXAxis(t,e,i){const s=i/e*100/100*t;return this.padding.left+s+this.padding.right}generateYGrids(){const t=this.getYLabels(),e=t.values.length,i=this.height-this.padding.bottom-this.padding.top,s=this.utility.getMaxValue(this.getValues()),o=this.utility.getMinValue(this.getValues()),r=o<0?this.utility.toPositive(o):o,n=document.createElement("g");n.setAttribute("class","graph-svg-group");const a=document.createElement("rect");a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("fill",this.backgroundColor),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("stroke-width","0"),n.appendChild(a);for(let o=0;o<e;o+=1){const e=this.getPointYAxis(i,s+r,t.values[o]+r);if(this.showHorizontalGrids){const t=document.createElement("line");t.setAttribute("x1",`${this.padding.left}px`),t.setAttribute("y1",`${e}px`),t.setAttribute("x2",`${this.width-this.padding.right}px`),t.setAttribute("y2",`${e}px`),t.setAttribute("stroke",`${this.gridColor}`),t.setAttribute("stroke-width","2"),n.appendChild(t)}if(this.showYAxisLabel){const i=document.createElement("text");i.setAttribute("x",`${this.yLabel.start}`),i.setAttribute("y",`${e+this.yLabel.offset}px`),i.setAttribute("fill",`${this.textColor}`),i.setAttribute("text-anchor","end"),i.innerHTML=o>0?t.texts[o]:"",n.appendChild(i)}}return n}generateXGrids(){const t=this.getXLabels(),e=t.length,i=this.width-this.padding.left-this.padding.right,s=e,o=document.createElement("g");o.setAttribute("class","graph-svg-group");for(let r=0;r<e;r+=1){const e=this.getPointXAxis(i,s,r);if(this.showVerticalGrids){const t=document.createElement("line");t.setAttribute("x1",`${e}px`),t.setAttribute("y1",`${this.padding.top}px`),t.setAttribute("x2",`${e}px`),t.setAttribute("y2",`${this.height-this.padding.bottom}px`),t.setAttribute("stroke",`${this.gridColor}`),t.setAttribute("stroke-width","2"),o.appendChild(t)}if(this.xCoords.push(e),this.showXAxisLabel){const i=document.createElement("text");i.setAttribute("x",`${e}`),i.setAttribute("y",`${this.height-this.xLabel.start+this.xLabel.offset}px`),i.setAttribute("fill",`${this.textColor}`),i.setAttribute("text-anchor","middle"),i.innerHTML=t[r],o.appendChild(i)}}return o}drawGraph(){const t=document.createElement("g");t.setAttribute("class","graph-svg-group");const e=this.getValues(),i=this.height-this.padding.bottom-this.padding.top,s=this.utility.getMaxValue(e),o=this.utility.getMinValue(e),r=o<0?this.utility.toPositive(o):o;return e.forEach((e,o)=>{const n=document.createElement("line"),a=this.getPointYAxis(i,s+r,e+r);o<1?(n.setAttribute("x1",`${this.xCoords[o]}px`),n.setAttribute("y1",`${a}px`),n.setAttribute("x2",`${this.xCoords[o]}px`),n.setAttribute("y2",`${a}px`)):(n.setAttribute("x1",`${this.xCoords[o-1]}px`),n.setAttribute("y1",`${this.yCoords[o-1]}px`),n.setAttribute("x2",`${this.xCoords[o]}px`),n.setAttribute("y2",`${a}px`)),n.setAttribute("stroke",`${this.lineColor}`),n.setAttribute("stroke-width","3"),t.appendChild(n),this.yCoords.push(a)}),t}drawNodes(t){const e=document.createElement("g");e.setAttribute("class","graph-svg-group graph-node-group");const i=this.getXLabels();return this.getValues().forEach((s,o)=>{const r=document.createElement("g");r.setAttribute("class","node-group");const n=document.createElement("line");n.setAttribute("x1",`${this.xCoords[o]}px`),n.setAttribute("y1","0px"),n.setAttribute("x2",`${this.xCoords[o]}px`),n.setAttribute("y2",`${this.height}px`),n.setAttribute("stroke",`${this.nodeStroke}`),n.setAttribute("stroke-width","0.8"),n.setAttribute("class","node-grid-v"),t&&r.appendChild(n);const a=document.createElement("line");if(a.setAttribute("x1","0px"),a.setAttribute("y1",`${this.yCoords[o]}px`),a.setAttribute("x2",`${this.width}px`),a.setAttribute("y2",`${this.yCoords[o]}px`),a.setAttribute("stroke",`${this.nodeStroke}`),a.setAttribute("stroke-width","0.8"),a.setAttribute("class","node-grid-h"),t&&r.appendChild(a),this.showInlineLabel){const t=document.createElement("text");t.setAttribute("x",`${this.xCoords[o]}px`),t.setAttribute("y",`${this.yCoords[o]-15}px`),t.setAttribute("fill",`${this.inlineLabelColor}`),0===o?t.setAttribute("text-anchor","start"):o===i.length-1?t.setAttribute("text-anchor","end"):t.setAttribute("text-anchor","middle"),t.setAttribute("class","graph-inline-label"),t.innerHTML=`${this.showInlineLabelValueOnly?"":`${i[o]}:`} ${this.formatValue(s)}`,r.appendChild(t)}const l=document.createElement("circle");l.setAttribute("cx",this.xCoords[o]),l.setAttribute("cy",this.yCoords[o]),l.setAttribute("r",this.node.radius),l.setAttribute("stroke",this.nodeStroke),l.setAttribute("fill",this.nodeColor),l.setAttribute("stroke-width",this.node.stroke),l.setAttribute("class","circle-node"),l.setAttribute("data-label",i[o]),l.setAttribute("data-value",this.formatValue(s)),r.appendChild(l),e.appendChild(r)}),e}setNodeState(t,e){"over"===t?(e.target.style.fill=this.lineColor,e.target.style.stroke=this.backgroundColor):"out"===t&&(e.target.style.fill=this.nodeColor,e.target.style.stroke=this.nodeStroke)}initToolTips(){Object.values(this.element.getElementsByClassName("circle-node")).forEach(t=>{t.addEventListener("mouseover",t=>{this.utility.showToolTips(t),this.setNodeState("over",t)}),t.addEventListener("mouseout",t=>{this.utility.hideToolTips(t),this.setNodeState("out",t)})})}generateOptionPanel(){const t=document.createElement("div"),e=document.createElement("button"),i=document.createElement("ul");return e.setAttribute("type","button"),e.setAttribute("data-label","Graph Menu"),e.setAttribute("data-value","Click to select an option."),e.setAttribute("data-type","Button"),e.addEventListener("mouseover",this.utility.showToolTips),e.addEventListener("mouseout",this.utility.hideToolTips),e.innerHTML="&Congruent;",this.dropdownOptions.forEach(t=>{const e=document.createElement("li");e.innerHTML=t.label,e.addEventListener("click",t.action),i.appendChild(e)}),t.setAttribute("class","graph-panel-options"),t.appendChild(e),this.dropdownOptions.length>=1&&t.appendChild(i),t}generateLivePanel(){const t=document.createElement("div"),e=document.createElement("button");return e.setAttribute("type","button"),e.setAttribute("data-label","Live Edit"),e.setAttribute("data-value","Click to edit graph in real time."),e.setAttribute("data-type","Button"),e.addEventListener("mouseover",this.utility.showToolTips),e.addEventListener("mouseout",this.utility.hideToolTips),e.innerHTML="&bigvee;",t.setAttribute("class","graph-panel-live"),t.appendChild(e),t}initOptionsPanel(){const t=document.createElement("div");return t.setAttribute("class","graph-panel"),t.style.width=`${this.width}px`,this.enableLiveEdit&&t.appendChild(this.generateLivePanel()),this.enableOptionDropdown&&t.appendChild(this.generateOptionPanel()),t}generateMultipleTags(t,e,i=[],s="",o="",r=!1){let n="";if("number"==typeof t)for(let a=1;a<=t;a+=1)n+=`<${e} style="${i.join("; ")}">${s}${r?this.formatValue(a):a}${o}</${e}>`;else"object"==typeof t&&t.forEach(t=>{n+=`<${e} style="${i.join("; ")}">${s}${r?this.formatValue(t):t}${o}</${e}>`});return n}generateTableHead(){const t=this.utility.getMaxLength(Object.values(this.data));let e="";return e+=t>1?`\n          <thead>\n            <tr>\n              <th style="border-color: ${this.backgroundColor}">Labels</th>\n              ${this.generateMultipleTags(t,"th",[`border-color: ${this.backgroundColor}`],"Data ")}\n              <th style="border-color: ${this.backgroundColor}">Total</th>\n            </tr>\n          </thead>\n        `:`\n          <thead>\n            <tr>\n              <th style="border-color: ${this.backgroundColor}">Labels</th>\n              ${this.generateMultipleTags(Object.keys(this.data),"th",[`border-color: ${this.backgroundColor}`])}\n            </tr>\n          </thead>\n        `}generateTableBodyRows(t,e,i){let s="";return i?t.forEach((t,i)=>{s+=`\n          <tr>\n            <th>${e[i]}</th>\n            ${this.generateMultipleTags(t,"td",[],"","",!0)}\n            <th>${this.formatValue(this.utility.sumArray(t))}</th>\n          </tr>`}):s+=`\n          <tr>\n            <th>Data</th>\n            ${this.generateMultipleTags(t.map(t=>t[0]),"td",[],"","",!0)}\n          </tr>\n        `,s}generateTableBody(){const t=this.utility.getMaxLength(Object.values(this.data)),e=Object.keys(this.data),i=Object.values(this.data);return`\n        <tbody>\n          ${this.generateTableBodyRows(i,e,t>1)}\n        </tbody>\n      `}generateTable(){return`\n        <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.canvasHeight||this.height}">\n          <style>\n            .graph-table-wrapper {\n              overflow-x: auto;\n            }\n            \n            .graph-table-wrapper > table {\n              width: 100%;\n              border-collapse: collapse;\n              font-family: Arial, Helvetica, sans-serif;\n            }\n            \n            .graph-table-wrapper > table, .graph-table-wrapper > table > thead > tr > th, .graph-table-wrapper > table > tbody > tr > th, .graph-table-wrapper > table > tbody > tr > td {\n              border-bottom: 1px solid #efefef;\n              text-align: left;\n              padding: 0.5em 1em;\n            }\n            \n            .graph-table-wrapper > table > thead > tr > th {\n              height: 25px;\n              border-width: 3px;\n            }\n            \n            .graph-table-wrapper > table > tbody > tr:nth-child(odd) {\n              background-color: rgba(0,0,0,0.1);\n            }\n          </style>\n          <foreignObject x="0" y="${this.height}" width="100%" height="100%">\n            <div class="graph-table-wrapper" xmlns="http://www.w3.org/1999/xhtml">\n              <table style="color: ${this.tableTextColor}; background-color: ${this.tableBackgroundColor}; width: ${this.width}">\n                ${this.generateTableHead()}\n                ${this.generateTableBody()}\n              </table>\n            </div>\n          </foreignObject>\n        </svg>\n      `}render(t=!0){this.element.innerHTML="",t&&(this.width=this.element.clientWidth),this.yCoords=[],this.xCoords=[];const e=new DOMParser,i=e.parseFromString(this.generateTable(),"image/svg+xml").children[0];this.element.appendChild(i),this.tableHeight=this.element.getElementsByTagName("table")[0].clientHeight,i.remove();const s=document.createElement("svg");if(s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("width",`${this.width}px`),s.setAttribute("height",`${this.canvasHeight||this.height}px`),s.appendChild(this.generateYGrids()),s.appendChild(this.generateXGrids()),s.appendChild(this.drawGraph()),s.appendChild(this.drawNodes(t)),this.showTable&&s.appendChild(i),this.graph=e.parseFromString(s.outerHTML,"image/svg+xml").children[0],(this.enableLiveEdit||this.enableOptionDropdown)&&this.element.append(this.initOptionsPanel()),this.element.appendChild(this.graph),this.showTable){const t=this.element.getElementsByTagName("svg");t[0].setAttribute("height",this.canvasHeight||`${this.height+this.tableHeight}px`),t[1].setAttribute("height",this.canvasHeight||`${this.height+this.tableHeight}px`),this.graph=this.element.lastElementChild}return this.initToolTips(),this.graph}}class s{constructor({elementId:t="graph",height:e=300,backgroundColor:s="#111",gridColor:o="rgba(255,255,255,0.1)",textColor:r="rgba(255,255,255,0.8)",lineColor:n="rgb(255,255,255)",nodeColor:a,nodeStroke:l,precision:h=1,prefix:d="",suffix:p="",data:u={},horizontalGrids:c=5,showHorizontalGrids:b=!0,showVerticalGrids:g=!1,showYAxisLabel:m=!0,showXAxisLabel:x=!0,showInlineLabel:w=!1,inlineLabelColor:y,showInlineLabelValueOnly:C=!1,enableOptionDropdown:f=!0,dropdownOptions:A="ALL",showTable:L=!0,tableBackgroundColor:v="white",tableTextColor:T="#444"}={}){return new i({elementId:t,height:e,backgroundColor:s,gridColor:o,textColor:r,lineColor:n,nodeColor:a,nodeStroke:l,precision:h,prefix:d,suffix:p,data:u,horizontalGrids:c,showHorizontalGrids:b,showVerticalGrids:g,showYAxisLabel:m,showXAxisLabel:x,showInlineLabel:w,inlineLabelColor:y,showInlineLabelValueOnly:C,enableLiveEdit:!1,enableOptionDropdown:f,dropdownOptions:A,showTable:L,tableBackgroundColor:v,tableTextColor:T})}}s.toSource=(()=>"[class GraphUI]"),s.toString=(()=>"class GraphUI { object GraphUI }"),s.prototype.toSource=s.toSource,s.prototype.toString=s.toString,void 0!==t.module&&t.module.exports?t.module.exports=s:t.GraphUI=s}(this);
//# sourceMappingURL=GraphUI.min.js.map


/***/ }),

/***/ "./src/app/admin-home/admin-home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin-home/admin-home.module.ts ***!
  \*************************************************/
/*! exports provided: AdminHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePageModule", function() { return AdminHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-home.page */ "./src/app/admin-home/admin-home.page.ts");







var routes = [
    {
        path: '',
        component: _admin_home_page__WEBPACK_IMPORTED_MODULE_6__["AdminHomePage"]
    }
];
var AdminHomePageModule = /** @class */ (function () {
    function AdminHomePageModule() {
    }
    AdminHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_home_page__WEBPACK_IMPORTED_MODULE_6__["AdminHomePage"]]
        })
    ], AdminHomePageModule);
    return AdminHomePageModule;
}());



/***/ }),

/***/ "./src/app/admin-home/admin-home.page.html":
/*!*************************************************!*\
  !*** ./src/app/admin-home/admin-home.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Dashboard\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <div id=\"cart\">\n\n    <ion-card class=\"graph\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" id=\"graph1\"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-card class=\"graph\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" id=\"graph2\"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngIf=\"orders.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"basket\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">No Pending Orders</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <!--<ion-card *ngFor=\"let item of orders\" color=\"{{item.payment ? 'success' : 'warning'}}\">-->\n      <!--<ion-grid>-->\n        <!--<ion-row>-->\n          <!--<ion-col>-->\n            <!--<ion-item lines=\"none\" routerLink=\"/admin-payment/{{item.id}}\" color=\"{{item.payment ? 'success' : 'warning'}}\">-->\n              <!--<ion-label color=\"dark\">-->\n                <!--<strong>Order ID:</strong> {{item.id}}-->\n              <!--</ion-label>-->\n              <!--<ion-badge mode=\"ios\" slot=\"end\" color=\"dark\">Qty: {{item.products.length}}</ion-badge>-->\n            <!--</ion-item>-->\n            <!--<ion-row>-->\n              <!--<ion-col>-->\n                <!--<ion-label color=\"dark\" class=\"price\">&#8358;{{currency.formatCurrency(item.total)}}</ion-label>-->\n              <!--</ion-col>-->\n              <!--<ion-col>-->\n                <!--<ion-label class=\"date\" color=\"dark\">{{item.createdAt}}</ion-label>-->\n              <!--</ion-col>-->\n            <!--</ion-row>-->\n          <!--</ion-col>-->\n        <!--</ion-row>-->\n      <!--</ion-grid>-->\n    <!--</ion-card>-->\n    <br/>\n  </div>\n  <br/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin-home/admin-home.page.scss":
/*!*************************************************!*\
  !*** ./src/app/admin-home/admin-home.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWhvbWUvYWRtaW4taG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-home/admin-home.page.ts":
/*!***********************************************!*\
  !*** ./src/app/admin-home/admin-home.page.ts ***!
  \***********************************************/
/*! exports provided: AdminHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomePage", function() { return AdminHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _factman_graph_ui_js_GraphUI_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @factman/graph-ui/js/GraphUI.min */ "./node_modules/@factman/graph-ui/js/GraphUI.min.js");
/* harmony import */ var _factman_graph_ui_js_GraphUI_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_factman_graph_ui_js_GraphUI_min__WEBPACK_IMPORTED_MODULE_5__);






var AdminHomePage = /** @class */ (function () {
    function AdminHomePage(api, router) {
        this.api = api;
        this.router = router;
        this.orders = Object.values(this.api.getOrders());
        this.form = {
            orderId: '',
        };
        this.yearData = {
            'Jan': 0,
            'Feb': 0,
            'Mar': 0,
            'Apr': 0,
            'May': 0,
            'Jun': 0,
            'Jul': 0,
            'Aug': 0,
            'Sep': 0,
            'Oct': 0,
            'Nov': 0,
            'Dec': 0,
        };
        this.monthData = {
            'Mon': 0,
            'Tue': 0,
            'Wed': 0,
            'Thu': 0,
            'Fri': 0,
            'Sat': 0,
            'Sun': 0,
        };
    }
    AdminHomePage.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.api.getCurrentUser();
        if (user !== _services_constants_service__WEBPACK_IMPORTED_MODULE_3__["PRIVILEGES"].ADMIN) {
            this.router.navigateByUrl('/home');
        }
        this.orders.forEach(function (order) {
            var date = new Date(order.createdAt);
            var year = date.getFullYear();
            var month = date.toDateString().split(' ')[1];
            var weekDay = date.toDateString().split(' ')[0];
            if (new Date().getFullYear() === year) {
                _this.yearData[month] += order.total;
                if (new Date().getMonth() === date.getMonth()) {
                    _this.monthData[weekDay] += order.total;
                }
            }
        });
        var graph1 = new _factman_graph_ui_js_GraphUI_min__WEBPACK_IMPORTED_MODULE_5__["GraphUI"]({
            elementId: 'graph1',
            data: this.yearData,
            precision: 2,
            prefix: '₦',
            showTable: false,
            dropdownOptions: ['IMAGE | Save As Image'],
        });
        var graph2 = new _factman_graph_ui_js_GraphUI_min__WEBPACK_IMPORTED_MODULE_5__["GraphUI"]({
            elementId: 'graph2',
            data: this.monthData,
            precision: 2,
            prefix: '₦',
            showTable: false,
            dropdownOptions: ['IMAGE | Save As Image'],
        });
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 2000);
    };
    AdminHomePage.prototype.logout = function () {
        this.api.logout(_services_constants_service__WEBPACK_IMPORTED_MODULE_3__["PRIVILEGES"].ADMIN);
        location.assign('/home');
    };
    AdminHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.page.html */ "./src/app/admin-home/admin-home.page.html"),
            styles: [__webpack_require__(/*! ./admin-home.page.scss */ "./src/app/admin-home/admin-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminHomePage);
    return AdminHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-home-admin-home-module.js.map