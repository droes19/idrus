import*as s from"@angular/core";import{inject as u,ElementRef as O,booleanAttribute as c,NgZone as k,ChangeDetectorRef as K,forwardRef as T}from"@angular/core";import{ActiveDescendantKeyManager as C}from"@angular/cdk/a11y";import{A as w,hasModifierKey as h,SPACE as m,ENTER as y,HOME as I,END as M,UP_ARROW as V,DOWN_ARROW as W,LEFT_ARROW as S,RIGHT_ARROW as F}from"@angular/cdk/keycodes";import{coerceArray as L}from"@angular/cdk/coercion";import{SelectionModel as R}from"@angular/cdk/collections";import{Subject as f,defer as E,merge as x,fromEvent as N}from"rxjs";import{startWith as b,switchMap as H,map as P,takeUntil as g,filter as B}from"rxjs/operators";import{NG_VALUE_ACCESSOR as j}from"@angular/forms";import{Directionality as q}from"@angular/cdk/bidi";var D=0,_=class extends R{constructor(p=!1,e,t=!0,i){super(!0,e,t,i),this.multiple=p}isMultipleSelection(){return this.multiple}select(...p){return this.multiple?super.select(...p):super.setSelection(...p)}},z=(()=>{class l{constructor(){this._generatedId=`cdk-option-${D++}`,this._disabled=!1,this.element=u(O).nativeElement,this.listbox=u(Q),this.destroyed=new f,this._clicked=new f}get id(){return this._id||this._generatedId}set id(e){this._id=e}get disabled(){return this.listbox.disabled||this._disabled}set disabled(e){this._disabled=e}get enabledTabIndex(){return this._enabledTabIndex===void 0?this.listbox.enabledTabIndex:this._enabledTabIndex}set enabledTabIndex(e){this._enabledTabIndex=e}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}isSelected(){return this.listbox.isSelected(this)}isActive(){return this.listbox.isActive(this)}toggle(){this.listbox.toggle(this)}select(){this.listbox.select(this)}deselect(){this.listbox.deselect(this)}focus(){this.element.focus()}getLabel(){return(this.typeaheadLabel??this.element.textContent?.trim())||""}setActiveStyles(){}setInactiveStyles(){}_handleFocus(){this.listbox.useActiveDescendant&&(this.listbox._setActiveOption(this),this.listbox.focus())}_getTabIndex(){return this.listbox.useActiveDescendant||this.disabled?-1:this.isActive()?this.enabledTabIndex:-1}static{this.ɵfac=function(t){return new(t||l)}}static{this.ɵdir=s.ɵɵdefineDirective({type:l,selectors:[["","cdkOption",""]],hostAttrs:["role","option",1,"cdk-option"],hostVars:6,hostBindings:function(t,i){t&1&&s.ɵɵlistener("click",function(a){return i._clicked.next(a)})("focus",function(){return i._handleFocus()}),t&2&&(s.ɵɵhostProperty("id",i.id),s.ɵɵattribute("aria-selected",i.isSelected())("tabindex",i._getTabIndex())("aria-disabled",i.disabled),s.ɵɵclassProp("cdk-option-active",i.isActive()))},inputs:{id:"id",value:["cdkOption","value"],typeaheadLabel:["cdkOptionTypeaheadLabel","typeaheadLabel"],disabled:["cdkOptionDisabled","disabled",c],enabledTabIndex:["tabindex","enabledTabIndex"]},exportAs:["cdkOption"],standalone:!0,features:[s.ɵɵInputTransformsFeature]})}}return l})(),Q=(()=>{class l{get id(){return this._id||this._generatedId}set id(e){this._id=e}get enabledTabIndex(){return this._enabledTabIndex===void 0?0:this._enabledTabIndex}set enabledTabIndex(e){this._enabledTabIndex=e}get value(){return this._invalid?[]:this.selectionModel.selected}set value(e){this._setSelection(e)}get multiple(){return this.selectionModel.multiple}set multiple(e){this.selectionModel.multiple=e,this.options&&this._updateInternalValue()}get orientation(){return this._orientation}set orientation(e){this._orientation=e==="horizontal"?"horizontal":"vertical",e==="horizontal"?this.listKeyManager?.withHorizontalOrientation(this._dir?.value||"ltr"):this.listKeyManager?.withVerticalOrientation()}get compareWith(){return this.selectionModel.compareWith}set compareWith(e){this.selectionModel.compareWith=e}get navigationWrapDisabled(){return this._navigationWrapDisabled}set navigationWrapDisabled(e){this._navigationWrapDisabled=e,this.listKeyManager?.withWrap(!this._navigationWrapDisabled)}get navigateDisabledOptions(){return this._navigateDisabledOptions}set navigateDisabledOptions(e){this._navigateDisabledOptions=e,this.listKeyManager?.skipPredicate(this._navigateDisabledOptions?this._skipNonePredicate:this._skipDisabledPredicate)}constructor(){this._generatedId=`cdk-listbox-${D++}`,this.disabled=!1,this.useActiveDescendant=!1,this._orientation="vertical",this._navigationWrapDisabled=!1,this._navigateDisabledOptions=!1,this.valueChange=new f,this.selectionModel=new _,this.destroyed=new f,this.element=u(O).nativeElement,this.ngZone=u(k),this.changeDetectorRef=u(K),this._invalid=!1,this._lastTriggered=null,this._onTouched=()=>{},this._onChange=()=>{},this._optionClicked=E(()=>this.options.changes.pipe(b(this.options),H(e=>x(...e.map(t=>t._clicked.pipe(P(i=>({option:t,event:i})))))))),this._dir=u(q,{optional:!0}),this._skipDisabledPredicate=e=>e.disabled,this._skipNonePredicate=()=>!1,this._hasFocus=!1,this._previousActiveOption=null,this._setPreviousActiveOptionAsActiveOptionOnWindowBlur()}ngAfterContentInit(){this._initKeyManager(),x(this.selectionModel.changed,this.options.changes).pipe(b(null),g(this.destroyed)).subscribe(()=>this._updateInternalValue()),this._optionClicked.pipe(B(({option:e})=>!e.disabled),g(this.destroyed)).subscribe(({option:e,event:t})=>this._handleOptionClicked(e,t))}ngOnDestroy(){this.listKeyManager?.destroy(),this.destroyed.next(),this.destroyed.complete()}toggle(e){this.toggleValue(e.value)}toggleValue(e){this._invalid&&this.selectionModel.clear(!1),this.selectionModel.toggle(e)}select(e){this.selectValue(e.value)}selectValue(e){this._invalid&&this.selectionModel.clear(!1),this.selectionModel.select(e)}deselect(e){this.deselectValue(e.value)}deselectValue(e){this._invalid&&this.selectionModel.clear(!1),this.selectionModel.deselect(e)}setAllSelected(e){e?(this._invalid&&this.selectionModel.clear(!1),this.selectionModel.select(...this.options.map(t=>t.value))):this.selectionModel.clear()}isSelected(e){return this.isValueSelected(e.value)}isActive(e){return this.listKeyManager?.activeItem===e}isValueSelected(e){return this._invalid?!1:this.selectionModel.isSelected(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}writeValue(e){this._setSelection(e),this._verifyOptionValues()}setDisabledState(e){this.disabled=e}focus(){this.element.focus()}triggerOption(e){e&&!e.disabled&&(this._lastTriggered=e,(this.multiple?this.selectionModel.toggle(e.value):this.selectionModel.select(e.value))&&(this._onChange(this.value),this.valueChange.next({value:this.value,listbox:this,option:e})))}triggerRange(e,t,i,n){if(this.disabled||e&&e.disabled)return;this._lastTriggered=e;let a=this.compareWith??Object.is,o=[...this.options].slice(Math.max(0,Math.min(t,i)),Math.min(this.options.length,Math.max(t,i)+1)).filter(r=>!r.disabled).map(r=>r.value),d=[...this.value];for(let r of o){let v=d.findIndex(A=>a(A,r));n&&v===-1?d.push(r):!n&&v!==-1&&d.splice(v,1)}this.selectionModel.setSelection(...d)&&(this._onChange(this.value),this.valueChange.next({value:this.value,listbox:this,option:e}))}_setActiveOption(e){this.listKeyManager.setActiveItem(e)}_handleFocus(){this.useActiveDescendant||(this.selectionModel.selected.length>0?this._setNextFocusToSelectedOption():this.listKeyManager.setNextItemActive(),this._focusActiveOption())}_handleKeydown(e){if(this.disabled)return;let{keyCode:t}=e,i=this.listKeyManager.activeItemIndex,n=["ctrlKey","metaKey"];if(this.multiple&&t===w&&h(e,...n)){this.triggerRange(null,0,this.options.length-1,this.options.length!==this.value.length),e.preventDefault();return}if(this.multiple&&(t===m||t===y)&&h(e,"shiftKey")){this.listKeyManager.activeItem&&this.listKeyManager.activeItemIndex!=null&&this.triggerRange(this.listKeyManager.activeItem,this._getLastTriggeredIndex()??this.listKeyManager.activeItemIndex,this.listKeyManager.activeItemIndex,!this.listKeyManager.activeItem.isSelected()),e.preventDefault();return}if(this.multiple&&t===I&&h(e,...n)&&h(e,"shiftKey")){let o=this.listKeyManager.activeItem;if(o){let d=this.listKeyManager.activeItemIndex;this.listKeyManager.setFirstItemActive(),this.triggerRange(o,d,this.listKeyManager.activeItemIndex,!o.isSelected())}e.preventDefault();return}if(this.multiple&&t===M&&h(e,...n)&&h(e,"shiftKey")){let o=this.listKeyManager.activeItem;if(o){let d=this.listKeyManager.activeItemIndex;this.listKeyManager.setLastItemActive(),this.triggerRange(o,d,this.listKeyManager.activeItemIndex,!o.isSelected())}e.preventDefault();return}if(t===m||t===y){this.triggerOption(this.listKeyManager.activeItem),e.preventDefault();return}let a=t===V||t===W||t===S||t===F||t===I||t===M;this.listKeyManager.onKeydown(e),a&&e.shiftKey&&i!==this.listKeyManager.activeItemIndex&&this.triggerOption(this.listKeyManager.activeItem)}_handleFocusIn(){this._hasFocus=!0}_handleFocusOut(e){this._previousActiveOption=this.listKeyManager.activeItem;let t=e.relatedTarget;this.element!==t&&!this.element.contains(t)&&(this._onTouched(),this._hasFocus=!1,this._setNextFocusToSelectedOption())}_getAriaActiveDescendant(){return this.useActiveDescendant?this.listKeyManager?.activeItem?.id:null}_getTabIndex(){return this.disabled?-1:this.useActiveDescendant||!this.listKeyManager.activeItem?this.enabledTabIndex:-1}_initKeyManager(){this.listKeyManager=new C(this.options).withWrap(!this._navigationWrapDisabled).withTypeAhead().withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._navigateDisabledOptions?this._skipNonePredicate:this._skipDisabledPredicate),this.orientation==="vertical"?this.listKeyManager.withVerticalOrientation():this.listKeyManager.withHorizontalOrientation(this._dir?.value||"ltr"),this.selectionModel.selected.length&&Promise.resolve().then(()=>this._setNextFocusToSelectedOption()),this.listKeyManager.change.subscribe(()=>this._focusActiveOption())}_focusActiveOption(){this.useActiveDescendant||this.listKeyManager.activeItem?.focus(),this.changeDetectorRef.markForCheck()}_setSelection(e){this._invalid&&this.selectionModel.clear(!1),this.selectionModel.setSelection(...this._coerceValue(e)),this._hasFocus||this._setNextFocusToSelectedOption()}_setNextFocusToSelectedOption(){let e=this.options?.find(t=>t.isSelected());e&&this.listKeyManager.updateActiveItem(e)}_updateInternalValue(){let e=new Map;this.selectionModel.sort((i,n)=>{let a=this._getIndexForValue(e,i),o=this._getIndexForValue(e,n);return a-o});let t=this.selectionModel.selected;this._invalid=!this.multiple&&t.length>1||!!this._getInvalidOptionValues(t).length,this.changeDetectorRef.markForCheck()}_getIndexForValue(e,t){let i=this.compareWith||Object.is;if(!e.has(t)){let n=-1;for(let a=0;a<this.options.length;a++)if(i(t,this.options.get(a).value)){n=a;break}e.set(t,n)}return e.get(t)}_handleOptionClicked(e,t){t.preventDefault(),this.listKeyManager.setActiveItem(e),t.shiftKey&&this.multiple?this.triggerRange(e,this._getLastTriggeredIndex()??this.listKeyManager.activeItemIndex,this.listKeyManager.activeItemIndex,!e.isSelected()):this.triggerOption(e)}_verifyNoOptionValueCollisions(){this.options.changes.pipe(b(this.options),g(this.destroyed)).subscribe(()=>{let e=this.compareWith??Object.is;for(let t=0;t<this.options.length;t++){let i=this.options.get(t),n=null;for(let a=t+1;a<this.options.length;a++){let o=this.options.get(a);if(e(i.value,o.value)){n=o;break}}if(n){this.compareWith?console.warn("Found multiple CdkOption representing the same value under the given compareWith function",{option1:i.element,option2:n.element,compareWith:this.compareWith}):console.warn("Found multiple CdkOption with the same value",{option1:i.element,option2:n.element});return}}})}_verifyOptionValues(){this.options}_coerceValue(e){return e==null?[]:L(e)}_getInvalidOptionValues(e){let t=this.compareWith||Object.is,i=(this.options||[]).map(n=>n.value);return e.filter(n=>!i.some(a=>t(n,a)))}_getLastTriggeredIndex(){let e=this.options.toArray().indexOf(this._lastTriggered);return e===-1?null:e}_setPreviousActiveOptionAsActiveOptionOnWindowBlur(){this.ngZone.runOutsideAngular(()=>{N(window,"blur").pipe(g(this.destroyed)).subscribe(()=>{this.element.contains(document.activeElement)&&this._previousActiveOption&&(this._setActiveOption(this._previousActiveOption),this._previousActiveOption=null)})})}static{this.ɵfac=function(t){return new(t||l)}}static{this.ɵdir=s.ɵɵdefineDirective({type:l,selectors:[["","cdkListbox",""]],contentQueries:function(t,i,n){if(t&1&&s.ɵɵcontentQuery(n,z,5),t&2){let a;s.ɵɵqueryRefresh(a=s.ɵɵloadQuery())&&(i.options=a)}},hostAttrs:["role","listbox",1,"cdk-listbox"],hostVars:6,hostBindings:function(t,i){t&1&&s.ɵɵlistener("focus",function(){return i._handleFocus()})("keydown",function(a){return i._handleKeydown(a)})("focusout",function(a){return i._handleFocusOut(a)})("focusin",function(){return i._handleFocusIn()}),t&2&&(s.ɵɵhostProperty("id",i.id),s.ɵɵattribute("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("aria-multiselectable",i.multiple)("aria-activedescendant",i._getAriaActiveDescendant())("aria-orientation",i.orientation))},inputs:{id:"id",enabledTabIndex:["tabindex","enabledTabIndex"],value:["cdkListboxValue","value"],multiple:["cdkListboxMultiple","multiple",c],disabled:["cdkListboxDisabled","disabled",c],useActiveDescendant:["cdkListboxUseActiveDescendant","useActiveDescendant",c],orientation:["cdkListboxOrientation","orientation"],compareWith:["cdkListboxCompareWith","compareWith"],navigationWrapDisabled:["cdkListboxNavigationWrapDisabled","navigationWrapDisabled",c],navigateDisabledOptions:["cdkListboxNavigatesDisabledOptions","navigateDisabledOptions",c]},outputs:{valueChange:"cdkListboxValueChange"},exportAs:["cdkListbox"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:j,useExisting:T(()=>l),multi:!0}]),s.ɵɵInputTransformsFeature]})}}return l})();var de=(()=>{class l{static{this.ɵfac=function(t){return new(t||l)}}static{this.ɵmod=s.ɵɵdefineNgModule({type:l})}static{this.ɵinj=s.ɵɵdefineInjector({})}}return l})();export{Q as CdkListbox,de as CdkListboxModule,z as CdkOption};