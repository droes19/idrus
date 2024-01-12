import*as n from"@angular/core";import{forwardRef as u,EventEmitter as g,PLATFORM_ID as c}from"@angular/core";import{isPlatformBrowser as p,DOCUMENT as m,CommonModule as y}from"@angular/common";import{DomHandler as a}from"primeng/dom";import{NG_VALIDATORS as C}from"@angular/forms";var v={provide:C,useExisting:u(()=>E),multi:!0},f={pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},d={TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46},h={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35},E=(()=>{class l{document;platformId;el;pValidateOnly;set pattern(t){this._pattern=t,t instanceof RegExp?this.regex=t:t in f?this.regex=f[t]:this.regex=/./}get pattern(){return this._pattern}ngModelChange=new g;regex=/./;_pattern;isAndroid;lastValue;constructor(t,e,i){this.document=t,this.platformId=e,this.el=i,p(this.platformId)?this.isAndroid=a.isAndroid():this.isAndroid=!1}isNavKeyPress(t){let e=t.keyCode;return e=a.getBrowser().safari&&h[e]||e,e>=33&&e<=40||e==d.RETURN||e==d.TAB||e==d.ESC}isSpecialKey(t){let e=t.keyCode||t.charCode;return e==9||e==13||e==27||e==16||e==17||e>=18&&e<=20||a.getBrowser().opera&&!t.shiftKey&&(e==8||e>=33&&e<=35||e>=36&&e<=39||e>=44&&e<=45)}getKey(t){let e=t.keyCode||t.charCode;return a.getBrowser().safari&&h[e]||e}getCharCode(t){return t.charCode||t.keyCode||t.which}findDelta(t,e){let i="";for(let r=0;r<t.length;r++)t.substr(0,r)+t.substr(r+t.length-e.length)===e&&(i=t.substr(r,t.length-e.length));return i}isValidChar(t){return this.regex.test(t)}isValidString(t){for(let e=0;e<t.length;e++)if(!this.isValidChar(t.substr(e,1)))return!1;return!0}onInput(t){if(this.isAndroid&&!this.pValidateOnly){let e=this.el.nativeElement.value,i=this.lastValue||"",r=this.findDelta(e,i),s=this.findDelta(i,e);r.length>1||!r&&!s?this.isValidString(e)||(this.el.nativeElement.value=i,this.ngModelChange.emit(i)):s||this.isValidChar(r)||(this.el.nativeElement.value=i,this.ngModelChange.emit(i)),e=this.el.nativeElement.value,this.isValidString(e)&&(this.lastValue=e)}}onKeyPress(t){if(this.isAndroid||this.pValidateOnly)return;let e=a.getBrowser(),i=this.getKey(t);if(e.mozilla&&(t.ctrlKey||t.altKey))return;if(i==17||i==18||i==13)return;let r=this.getCharCode(t),s=String.fromCharCode(r),o=!0;!e.mozilla&&(this.isSpecialKey(t)||!s)||(o=this.regex.test(s),o||t.preventDefault())}onPaste(t){let e=t.clipboardData||this.document.defaultView.clipboardData.getData("text");if(e){let i=e.getData("text");for(let r of i.toString())if(!this.regex.test(r)){t.preventDefault();return}}}validate(t){if(this.pValidateOnly){let e=this.el.nativeElement.value;if(e&&!this.regex.test(e))return{validatePattern:!1}}}static ɵfac=function(e){return new(e||l)(n.ɵɵdirectiveInject(m),n.ɵɵdirectiveInject(c),n.ɵɵdirectiveInject(n.ElementRef))};static ɵdir=n.ɵɵdefineDirective({type:l,selectors:[["","pKeyFilter",""]],hostAttrs:[1,"p-element"],hostBindings:function(e,i){e&1&&n.ɵɵlistener("input",function(s){return i.onInput(s)})("keypress",function(s){return i.onKeyPress(s)})("paste",function(s){return i.onPaste(s)})},inputs:{pValidateOnly:"pValidateOnly",pattern:["pKeyFilter","pattern"]},outputs:{ngModelChange:"ngModelChange"},features:[n.ɵɵProvidersFeature([v])]})}return l})(),w=(()=>{class l{static ɵfac=function(e){return new(e||l)};static ɵmod=n.ɵɵdefineNgModule({type:l});static ɵinj=n.ɵɵdefineInjector({imports:[y]})}return l})();export{v as KEYFILTER_VALIDATOR,E as KeyFilter,w as KeyFilterModule};