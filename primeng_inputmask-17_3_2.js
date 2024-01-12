import*as o from"@angular/common";import{isPlatformBrowser as f,DOCUMENT as C,CommonModule as k}from"@angular/common";import*as n from"@angular/core";import{forwardRef as v,EventEmitter as u,PLATFORM_ID as _}from"@angular/core";import{NG_VALUE_ACCESSOR as w}from"@angular/forms";import{PrimeTemplate as b,SharedModule as I}from"primeng/api";import*as c from"primeng/autofocus";import{AutoFocusModule as y}from"primeng/autofocus";import{DomHandler as p}from"primeng/dom";import{TimesIcon as m}from"primeng/icons/times";import*as g from"primeng/inputtext";import{InputTextModule as M}from"primeng/inputtext";var V=["input"];function E(l,h){if(l&1){let t=n.ɵɵgetCurrentView();n.ɵɵelementStart(0,"TimesIcon",5),n.ɵɵlistener("click",function(){n.ɵɵrestoreView(t);let e=n.ɵɵnextContext(2);return n.ɵɵresetView(e.clear())}),n.ɵɵelementEnd()}l&2&&(n.ɵɵproperty("styleClass","p-inputmask-clear-icon"),n.ɵɵattribute("data-pc-section","clearIcon"))}function T(l,h){}function P(l,h){l&1&&n.ɵɵtemplate(0,T,0,0,"ng-template")}function B(l,h){if(l&1){let t=n.ɵɵgetCurrentView();n.ɵɵelementStart(0,"span",6),n.ɵɵlistener("click",function(){n.ɵɵrestoreView(t);let e=n.ɵɵnextContext(2);return n.ɵɵresetView(e.clear())}),n.ɵɵtemplate(1,P,1,0,null,7),n.ɵɵelementEnd()}if(l&2){let t=n.ɵɵnextContext(2);n.ɵɵattribute("data-pc-section","clearIcon"),n.ɵɵadvance(1),n.ɵɵproperty("ngTemplateOutlet",t.clearIconTemplate)}}function N(l,h){if(l&1&&(n.ɵɵelementContainerStart(0),n.ɵɵtemplate(1,E,1,2,"TimesIcon",3)(2,B,2,2,"span",4),n.ɵɵelementContainerEnd()),l&2){let t=n.ɵɵnextContext();n.ɵɵadvance(1),n.ɵɵproperty("ngIf",!t.clearIconTemplate),n.ɵɵadvance(1),n.ɵɵproperty("ngIf",t.clearIconTemplate)}}var R={provide:w,useExisting:v(()=>S),multi:!0},S=(()=>{class l{document;platformId;el;cd;type="text";slotChar="_";autoClear=!0;showClear=!1;style;inputId;styleClass;placeholder;size;maxlength;tabindex;title;ariaLabel;ariaLabelledBy;ariaRequired;disabled;readonly;unmask;name;required;characterPattern="[A-Za-z]";autoFocus;autocomplete;keepBuffer=!1;get mask(){return this._mask}set mask(t){this._mask=t,this.initMask(),this.writeValue(""),this.onModelChange(this.value)}onComplete=new u;onFocus=new u;onBlur=new u;onInput=new u;onKeydown=new u;onClear=new u;inputViewChild;templates;clearIconTemplate;value;_mask;onModelChange=()=>{};onModelTouched=()=>{};input;filled;defs;tests;partialPosition;firstNonMaskPos;lastRequiredNonMaskPos;len;oldVal;buffer;defaultBuffer;focusText;caretTimeoutId;androidChrome=!0;focused;constructor(t,i,e,s){this.document=t,this.platformId=i,this.el=e,this.cd=s}ngOnInit(){if(f(this.platformId)){let t=navigator.userAgent;this.androidChrome=/chrome/i.test(t)&&/android/i.test(t)}this.initMask()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"clearicon":this.clearIconTemplate=t.template;break}})}initMask(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:this.characterPattern,"*":`${this.characterPattern}|[0-9]`};let t=this.mask.split("");for(let i=0;i<t.length;i++){let e=t[i];e=="?"?(this.len--,this.partialPosition=i):this.defs[e]?(this.tests.push(new RegExp(this.defs[e])),this.firstNonMaskPos===null&&(this.firstNonMaskPos=this.tests.length-1),i<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null)}this.buffer=[];for(let i=0;i<t.length;i++){let e=t[i];e!="?"&&(this.defs[e]?this.buffer.push(this.getPlaceholder(i)):this.buffer.push(e))}this.defaultBuffer=this.buffer.join("")}writeValue(t){this.value=t,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.value==null||this.value==null?this.inputViewChild.nativeElement.value="":this.inputViewChild.nativeElement.value=this.value,this.checkVal(),this.focusText=this.inputViewChild.nativeElement.value,this.updateFilledState())}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}caret(t,i){let e,s,a;if(!(!this.inputViewChild?.nativeElement.offsetParent||this.inputViewChild.nativeElement!==this.inputViewChild.nativeElement.ownerDocument.activeElement))if(typeof t=="number")s=t,a=typeof i=="number"?i:s,this.inputViewChild.nativeElement.setSelectionRange?this.inputViewChild.nativeElement.setSelectionRange(s,a):this.inputViewChild.nativeElement.createTextRange&&(e=this.inputViewChild.nativeElement.createTextRange(),e.collapse(!0),e.moveEnd("character",a),e.moveStart("character",s),e.select());else return this.inputViewChild.nativeElement.setSelectionRange?(s=this.inputViewChild.nativeElement.selectionStart,a=this.inputViewChild.nativeElement.selectionEnd):this.document&&this.document.selection.createRange&&(e=this.document.createRange(),s=0-e.duplicate().moveStart("character",-1e5),a=s+e.text.length),{begin:s,end:a}}isCompleted(){let t;for(let i=this.firstNonMaskPos;i<=this.lastRequiredNonMaskPos;i++)if(this.tests[i]&&this.buffer[i]===this.getPlaceholder(i))return!1;return!0}getPlaceholder(t){return t<this.slotChar.length?this.slotChar.charAt(t):this.slotChar.charAt(0)}seekNext(t){for(;++t<this.len&&!this.tests[t];);return t}seekPrev(t){for(;--t>=0&&!this.tests[t];);return t}shiftL(t,i){let e,s;if(!(t<0)){for(e=t,s=this.seekNext(i);e<this.len;e++)if(this.tests[e]){if(s<this.len&&this.tests[e].test(this.buffer[s]))this.buffer[e]=this.buffer[s],this.buffer[s]=this.getPlaceholder(s);else break;s=this.seekNext(s)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}}shiftR(t){let i,e,s,a;for(i=t,e=this.getPlaceholder(t);i<this.len;i++)if(this.tests[i])if(s=this.seekNext(i),a=this.buffer[i],this.buffer[i]=e,s<this.len&&this.tests[s].test(a))e=a;else break}handleAndroidInput(t){var i=this.inputViewChild?.nativeElement.value,e=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>i.length){for(this.checkVal(!0);e.begin>0&&!this.tests[e.begin-1];)e.begin--;if(e.begin===0)for(;e.begin<this.firstNonMaskPos&&!this.tests[e.begin];)e.begin++;setTimeout(()=>{this.caret(e.begin,e.begin),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}else{for(this.checkVal(!0);e.begin<this.len&&!this.tests[e.begin];)e.begin++;setTimeout(()=>{this.caret(e.begin,e.begin),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}}onInputBlur(t){if(this.focused=!1,this.onModelTouched(),this.keepBuffer||this.checkVal(),this.updateFilledState(),this.onBlur.emit(t),this.inputViewChild?.nativeElement.value!=this.focusText||this.inputViewChild?.nativeElement.value!=this.value){this.updateModel(t);let i=this.document.createEvent("HTMLEvents");i.initEvent("change",!0,!1),this.inputViewChild?.nativeElement.dispatchEvent(i)}}onInputKeydown(t){if(this.readonly)return;let i=t.which||t.keyCode,e,s,a,r;f(this.platformId)&&(r=/iphone/i.test(p.getUserAgent())),this.oldVal=this.inputViewChild?.nativeElement.value,this.onKeydown.emit(t),i===8||i===46||r&&i===127?(e=this.caret(),s=e.begin,a=e.end,a-s===0&&(s=i!==46?this.seekPrev(s):a=this.seekNext(s-1),a=i===46?this.seekNext(a):a),this.clearBuffer(s,a),this.keepBuffer?this.shiftL(s,a-2):this.shiftL(s,a-1),this.updateModel(t),this.onInput.emit(t),t.preventDefault()):i===13?(this.onInputBlur(t),this.updateModel(t)):i===27&&(this.inputViewChild.nativeElement.value=this.focusText,this.caret(0,this.checkVal()),this.updateModel(t),t.preventDefault())}onKeyPress(t){if(!this.readonly){var i=t.which||t.keyCode,e=this.caret(),s,a,r,d;t.ctrlKey||t.altKey||t.metaKey||i<32||i>34&&i<41||(i&&i!==13&&(e.end-e.begin!==0&&(this.clearBuffer(e.begin,e.end),this.shiftL(e.begin,e.end-1)),s=this.seekNext(e.begin-1),s<this.len&&(a=String.fromCharCode(i),this.tests[s].test(a)&&(this.shiftR(s),this.buffer[s]=a,this.writeBuffer(),r=this.seekNext(s),p.isClient()&&/android/i.test(p.getUserAgent())?setTimeout(()=>{this.caret(r)},0):this.caret(r),e.begin<=this.lastRequiredNonMaskPos&&(d=this.isCompleted()),this.onInput.emit(t))),t.preventDefault()),this.updateModel(t),this.updateFilledState(),d&&this.onComplete.emit())}}clearBuffer(t,i){if(!this.keepBuffer){let e;for(e=t;e<i&&e<this.len;e++)this.tests[e]&&(this.buffer[e]=this.getPlaceholder(e))}}writeBuffer(){this.inputViewChild.nativeElement.value=this.buffer.join("")}checkVal(t){let i=this.inputViewChild?.nativeElement.value,e=-1,s,a,r;for(s=0,r=0;s<this.len;s++)if(this.tests[s]){for(this.buffer[s]=this.getPlaceholder(s);r++<i.length;)if(a=i.charAt(r-1),this.tests[s].test(a)){this.keepBuffer||(this.buffer[s]=a),e=s;break}if(r>i.length){this.clearBuffer(s+1,this.len);break}}else this.buffer[s]===i.charAt(r)&&r++,s<this.partialPosition&&(e=s);return t?this.writeBuffer():e+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.inputViewChild?.nativeElement.value&&(this.inputViewChild.nativeElement.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.inputViewChild.nativeElement.value=this.inputViewChild?.nativeElement.value.substring(0,e+1)),this.partialPosition?s:this.firstNonMaskPos}onInputFocus(t){if(this.readonly)return;this.focused=!0,clearTimeout(this.caretTimeoutId);let i;this.focusText=this.inputViewChild?.nativeElement.value,i=this.keepBuffer?this.inputViewChild?.nativeElement.value.length:this.checkVal(),this.caretTimeoutId=setTimeout(()=>{this.inputViewChild?.nativeElement===this.inputViewChild?.nativeElement.ownerDocument.activeElement&&(this.writeBuffer(),i==this.mask?.replace("?","").length?this.caret(0,i):this.caret(i))},10),this.onFocus.emit(t)}onInputChange(t){this.androidChrome?this.handleAndroidInput(t):this.handleInputChange(t),this.onInput.emit(t)}handleInputChange(t){this.readonly||setTimeout(()=>{var i=this.checkVal(!0);this.caret(i),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}getUnmaskedValue(){let t=[];for(let i=0;i<this.buffer.length;i++){let e=this.buffer[i];this.tests[i]&&e!=this.getPlaceholder(i)&&t.push(e)}return t.join("")}updateModel(t){let i=this.unmask?this.getUnmaskedValue():t.target.value;(i!==null||i!==void 0)&&(this.value=i,this.onModelChange(this.value))}updateFilledState(){this.filled=this.inputViewChild?.nativeElement&&this.inputViewChild.nativeElement.value!=""}focus(){this.inputViewChild?.nativeElement.focus()}clear(){this.inputViewChild.nativeElement.value="",this.value=null,this.onModelChange(this.value),this.onClear.emit()}static ɵfac=function(i){return new(i||l)(n.ɵɵdirectiveInject(C),n.ɵɵdirectiveInject(_),n.ɵɵdirectiveInject(n.ElementRef),n.ɵɵdirectiveInject(n.ChangeDetectorRef))};static ɵcmp=n.ɵɵdefineComponent({type:l,selectors:[["p-inputMask"]],contentQueries:function(i,e,s){if(i&1&&n.ɵɵcontentQuery(s,b,4),i&2){let a;n.ɵɵqueryRefresh(a=n.ɵɵloadQuery())&&(e.templates=a)}},viewQuery:function(i,e){if(i&1&&n.ɵɵviewQuery(V,7),i&2){let s;n.ɵɵqueryRefresh(s=n.ɵɵloadQuery())&&(e.inputViewChild=s.first)}},hostAttrs:[1,"p-element"],hostVars:6,hostBindings:function(i,e){i&2&&n.ɵɵclassProp("p-inputwrapper-filled",e.filled)("p-inputwrapper-focus",e.focused)("p-inputmask-clearable",e.showClear&&!e.disabled)},inputs:{type:"type",slotChar:"slotChar",autoClear:"autoClear",showClear:"showClear",style:"style",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",size:"size",maxlength:"maxlength",tabindex:"tabindex",title:"title",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",ariaRequired:"ariaRequired",disabled:"disabled",readonly:"readonly",unmask:"unmask",name:"name",required:"required",characterPattern:"characterPattern",autoFocus:"autoFocus",autocomplete:"autocomplete",keepBuffer:"keepBuffer",mask:"mask"},outputs:{onComplete:"onComplete",onFocus:"onFocus",onBlur:"onBlur",onInput:"onInput",onKeydown:"onKeydown",onClear:"onClear"},features:[n.ɵɵProvidersFeature([R])],decls:3,vars:21,consts:[["pInputText","","pAutoFocus","",1,"p-inputmask",3,"ngStyle","ngClass","disabled","readonly","autofocus","focus","blur","keydown","keypress","input","paste"],["input",""],[4,"ngIf"],[3,"styleClass","click",4,"ngIf"],["class","p-inputmask-clear-icon",3,"click",4,"ngIf"],[3,"styleClass","click"],[1,"p-inputmask-clear-icon",3,"click"],[4,"ngTemplateOutlet"]],template:function(i,e){i&1&&(n.ɵɵelementStart(0,"input",0,1),n.ɵɵlistener("focus",function(a){return e.onInputFocus(a)})("blur",function(a){return e.onInputBlur(a)})("keydown",function(a){return e.onInputKeydown(a)})("keypress",function(a){return e.onKeyPress(a)})("input",function(a){return e.onInputChange(a)})("paste",function(a){return e.handleInputChange(a)}),n.ɵɵelementEnd(),n.ɵɵtemplate(2,N,3,2,"ng-container",2)),i&2&&(n.ɵɵproperty("ngStyle",e.style)("ngClass",e.styleClass)("disabled",e.disabled)("readonly",e.readonly)("autofocus",e.autoFocus),n.ɵɵattribute("id",e.inputId)("type",e.type)("name",e.name)("placeholder",e.placeholder)("title",e.title)("size",e.size)("autocomplete",e.autocomplete)("maxlength",e.maxlength)("tabindex",e.tabindex)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy)("aria-required",e.ariaRequired)("required",e.required)("data-pc-name","inputmask")("data-pc-section","root"),n.ɵɵadvance(2),n.ɵɵproperty("ngIf",e.value!=null&&e.filled&&e.showClear&&!e.disabled))},dependencies:()=>[o.NgClass,o.NgIf,o.NgTemplateOutlet,o.NgStyle,g.InputText,c.AutoFocus,m],styles:[`@layer primeng{.p-inputmask-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputmask-clearable{position:relative}}
`],encapsulation:2,changeDetection:0})}return l})(),X=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=n.ɵɵdefineNgModule({type:l});static ɵinj=n.ɵɵdefineInjector({imports:[k,M,y,m,I]})}return l})();export{R as INPUTMASK_VALUE_ACCESSOR,S as InputMask,X as InputMaskModule};