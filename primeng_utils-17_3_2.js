var m=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(f,t,e)=>t in f?m(f,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[t]=e,d=(f,t)=>{for(var e in t||={})x.call(t,e)&&g(f,e,t[e]);if(h)for(var e of h(t))E.call(t,e)&&g(f,e,t[e]);return f};var o=class f{static equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),s=Array.isArray(e),r,i,u;if(n&&s){if(i=t.length,i!=e.length)return!1;for(r=i;r--!==0;)if(!this.equalsByValue(t[r],e[r]))return!1;return!0}if(n!=s)return!1;var l=this.isDate(t),a=this.isDate(e);if(l!=a)return!1;if(l&&a)return t.getTime()==e.getTime();var p=t instanceof RegExp,y=e instanceof RegExp;if(p!=y)return!1;if(p&&y)return t.toString()==e.toString();var c=Object.keys(t);if(i=c.length,i!==Object.keys(e).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[r]))return!1;for(r=i;r--!==0;)if(u=c[r],!this.equalsByValue(t[u],e[u]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let n=e.split("."),s=t;for(let r=0,i=n.length;r<i;++r){if(s==null)return null;s=s[n[r]]}return s}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,n){let s;t&&e!==n&&(n>=t.length&&(n%=t.length,e%=t.length),t.splice(n,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,n,s){if(n.length>0){let r=!1;for(let i=0;i<n.length;i++)if(this.findIndexInList(n[i],s)>e){n.splice(i,0,t),r=!0;break}r||n.push(t)}else n.push(t)}static findIndexInList(t,e){let n=-1;if(e){for(let s=0;s<e.length;s++)if(e[s]==t){n=s;break}}return n}static contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(/\p{Diacritic}/gu,"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,n,s=1){let r=-1,i=this.isEmpty(t),u=this.isEmpty(e);return i&&u?r=0:i?r=s:u?r=-s:typeof t=="string"&&typeof e=="string"?r=t.localeCompare(e,n,{numeric:!0}):r=t<e?-1:t>e?1:0,r}static sort(t,e,n=1,s,r=1){let i=f.compare(t,e,s,n),u=n;return(f.isEmpty(t)||f.isEmpty(e))&&(u=r===1?n:r),u*i}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return d(d({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}static findLast(t,e){let n;if(this.isNotEmpty(t))try{n=t.findLast(e)}catch{n=[...t].reverse().find(e)}return n}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),s=Array.isArray(e),r,i,u;if(n&&s){if(i=t.length,i!=e.length)return!1;for(r=i;r--!==0;)if(!this.deepEquals(t[r],e[r]))return!1;return!0}if(n!=s)return!1;var l=t instanceof Date,a=e instanceof Date;if(l!=a)return!1;if(l&&a)return t.getTime()==e.getTime();var p=t instanceof RegExp,y=e instanceof RegExp;if(p!=y)return!1;if(p&&y)return t.toString()==e.toString();var c=Object.keys(t);if(i=c.length,i!==Object.keys(e).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[r]))return!1;for(r=i;r--!==0;)if(u=c[r],!this.deepEquals(t[u],e[u]))return!1;return!0}return t!==t&&e!==e}},I=0;function q(f="pn_id_"){return I++,`${f}${I}`}function D(){let f=[],t=(r,i)=>{let u=f.length>0?f[f.length-1]:{key:r,value:i},l=u.value+(u.key===r?0:i)+2;return f.push({key:r,value:l}),l},e=r=>{f=f.filter(i=>i.value!==r)},n=()=>f.length>0?f[f.length-1].value:0,s=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:s,set:(r,i,u)=>{i&&(i.style.zIndex=String(t(r,u)))},clear:r=>{r&&(e(s(r)),r.style.zIndex="")},getCurrent:()=>n()}}var A=D();export{o as ObjectUtils,q as UniqueComponentId,A as ZIndexUtils};