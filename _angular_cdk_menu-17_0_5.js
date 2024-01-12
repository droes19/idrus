var ue=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var j=(i,r,e)=>r in i?ue(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e,g=(i,r)=>{for(var e in r||={})he.call(r,e)&&j(i,e,r[e]);if(U)for(var e of U(r))le.call(r,e)&&j(i,e,r[e]);return i},W=(i,r)=>ce(i,de(r));import*as s from"@angular/core";import{InjectionToken as T,Optional as Y,SkipSelf as Q,Inject as X,inject as u,Injector as z,ViewContainerRef as ge,EventEmitter as k,NgZone as I,ElementRef as H,ChangeDetectorRef as fe,booleanAttribute as N}from"@angular/core";import{Overlay as $,OverlayConfig as q,STANDARD_DROPDOWN_BELOW_POSITIONS as J,STANDARD_DROPDOWN_ADJACENT_POSITIONS as pe,OverlayModule as me}from"@angular/cdk/overlay";import{ENTER as M,SPACE as b,UP_ARROW as ee,hasModifierKey as d,DOWN_ARROW as A,LEFT_ARROW as p,RIGHT_ARROW as m,TAB as te,ESCAPE as ie}from"@angular/cdk/keycodes";import{startWith as v,debounceTime as _e,distinctUntilChanged as ye,filter as K,takeUntil as c,mergeMap as w,mapTo as R,mergeAll as P,switchMap as ke,skipWhile as Me,skip as be}from"rxjs/operators";import{UniqueSelectionDispatcher as x}from"@angular/cdk/collections";import{Subject as l,merge as L,fromEvent as _,defer as Z,partition as ve}from"rxjs";import{TemplatePortal as Te}from"@angular/cdk/portal";import{InputModalityDetector as ne,FocusKeyManager as Ie}from"@angular/cdk/a11y";import{Directionality as C}from"@angular/cdk/bidi";import{_getEventTarget as se}from"@angular/cdk/platform";var V=(()=>{class i{static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenuGroup",""]],hostAttrs:["role","group",1,"cdk-menu-group"],exportAs:["cdkMenuGroup"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:x,useClass:x}])]})}}return i})(),O=new T("cdk-menu"),h=new T("cdk-menu-stack"),Ce={provide:h,deps:[[new Y,new Q,new X(h)]],useFactory:i=>i||new S},Oe=i=>({provide:h,deps:[[new Y,new Q,new X(h)]],useFactory:r=>r||S.inline(i)}),Se=0,S=(()=>{class i{constructor(){this.id=`${Se++}`,this._elements=[],this._close=new l,this._empty=new l,this._hasFocus=new l,this.closed=this._close,this.hasFocus=this._hasFocus.pipe(v(!1),_e(0),ye()),this.emptied=this._empty,this._inlineMenuOrientation=null}static inline(e){let t=new i;return t._inlineMenuOrientation=e,t}push(e){this._elements.push(e)}close(e,t){let{focusNextOnEmpty:n,focusParentTrigger:o}=g({},t);if(this._elements.indexOf(e)>=0){let a;do a=this._elements.pop(),this._close.next({item:a,focusParentTrigger:o});while(a!==e);this.isEmpty()&&this._empty.next(n)}}closeSubMenuOf(e){let t=!1;if(this._elements.indexOf(e)>=0)for(t=this.peek()!==e;this.peek()!==e;)this._close.next({item:this._elements.pop()});return t}closeAll(e){let{focusNextOnEmpty:t,focusParentTrigger:n}=g({},e);if(!this.isEmpty()){for(;!this.isEmpty();){let o=this._elements.pop();o&&this._close.next({item:o,focusParentTrigger:n})}this._empty.next(t)}}isEmpty(){return!this._elements.length}length(){return this._elements.length}peek(){return this._elements[this._elements.length-1]}hasInlineMenu(){return this._inlineMenuOrientation!=null}inlineMenuOrientation(){return this._inlineMenuOrientation}setHasFocus(e){this._hasFocus.next(e)}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=s.ɵɵdefineInjectable({token:i,factory:i.ɵfac})}}return i})(),D=new T("cdk-menu-trigger"),re=(()=>{class i{constructor(){this.injector=u(z),this.viewContainerRef=u(ge),this.menuStack=u(h),this.opened=new k,this.closed=new k,this.overlayRef=null,this.destroyed=new l,this.stopOutsideClicksListener=L(this.closed,this.destroyed)}ngOnDestroy(){this._destroyOverlay(),this.destroyed.next(),this.destroyed.complete()}isOpen(){return!!this.overlayRef?.hasAttached()}registerChildMenu(e){this.childMenu=e}getMenuContentPortal(){let e=this.menuTemplateRef!==this._menuPortal?.templateRef;return this.menuTemplateRef&&(!this._menuPortal||e)&&(this._menuPortal=new Te(this.menuTemplateRef,this.viewContainerRef,this.menuData,this._getChildMenuInjector())),this._menuPortal}isElementInsideMenuStack(e){for(let t=e;t;t=t?.parentElement??null)if(t.getAttribute("data-cdk-menu-stack-id")===this.menuStack.id)return!0;return!1}_destroyOverlay(){this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}_getChildMenuInjector(){return this._childMenuInjector=this._childMenuInjector||z.create({providers:[{provide:D,useValue:this},{provide:h,useValue:this.menuStack}],parent:this.injector}),this._childMenuInjector}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,hostVars:2,hostBindings:function(t,n){t&2&&s.ɵɵattribute("aria-controls",n.childMenu==null?null:n.childMenu.id)("data-cdk-menu-stack-id",n.menuStack.id)}})}}return i})();var E=new T("cdk-menu-aim"),De=3,G=5,Ee=300;function Fe(i,r){return(r.y-i.y)/(r.x-i.x)}function Ae(i,r){return i.y-r*i.x}function we(i,r,e){let{left:t,right:n,top:o,bottom:a}=i;return r*t+e>=o&&r*t+e<=a||r*n+e>=o&&r*n+e<=a||(o-e)/r>=t&&(o-e)/r<=n||(a-e)/r>=t&&(a-e)/r<=n}var Re=(()=>{class i{constructor(){this._ngZone=u(I),this._points=[],this._destroyed=new l}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}initialize(e,t){this._menu=e,this._pointerTracker=t,this._subscribeToMouseMoves()}toggle(e){this._menu.orientation==="horizontal"&&e(),this._checkConfigured();let t=!!this._timeoutId;this._points.length>1&&!t?this._isMovingToSubmenu()?this._startTimeout(e):e():t||e()}_startTimeout(e){let t=setTimeout(()=>{this._pointerTracker.activeElement&&t===this._timeoutId&&e(),this._timeoutId=null},Ee);this._timeoutId=t}_isMovingToSubmenu(){let e=this._getSubmenuBounds();if(!e)return!1;let t=0,n=this._points[this._points.length-1];for(let o=this._points.length-2;o>=0;o--){let a=this._points[o],y=Fe(n,a);we(e,y,Ae(n,y))&&t++}return t>=Math.floor(G/2)}_getSubmenuBounds(){return this._pointerTracker?.previousElement?.getMenu()?.nativeElement.getBoundingClientRect()}_checkConfigured(){}_subscribeToMouseMoves(){this._ngZone.runOutsideAngular(()=>{_(this._menu.nativeElement,"mousemove").pipe(K((e,t)=>t%De===0),c(this._destroyed)).subscribe(e=>{this._points.push({x:e.clientX,y:e.clientY}),this._points.length>G&&this._points.shift()})})}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=s.ɵɵdefineInjectable({token:i,factory:i.ɵfac})}}return i})(),it=(()=>{class i{static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkTargetMenuAim",""]],exportAs:["cdkTargetMenuAim"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:E,useClass:Re}])]})}}return i})();function oe(i,r){if(!r.isTrusted)return!1;let e=i.nativeElement,t=r.keyCode;return e.nodeName==="BUTTON"&&!e.disabled?t===M||t===b:e.nodeName==="A"?t===M:!1}var Pe=(()=>{class i extends re{constructor(){super(),this._elementRef=u(H),this._overlay=u($),this._ngZone=u(I),this._changeDetectorRef=u(fe),this._inputModalityDetector=u(ne),this._directionality=u(C,{optional:!0}),this._parentMenu=u(O,{optional:!0}),this._menuAim=u(E,{optional:!0}),this._setRole(),this._registerCloseHandler(),this._subscribeToMenuStackClosed(),this._subscribeToMouseEnter(),this._subscribeToMenuStackHasFocus(),this._setType()}toggle(){this.isOpen()?this.close():this.open()}open(){!this.isOpen()&&this.menuTemplateRef!=null&&(this.opened.next(),this.overlayRef=this.overlayRef||this._overlay.create(this._getOverlayConfig()),this.overlayRef.attach(this.getMenuContentPortal()),this._changeDetectorRef.markForCheck(),this._subscribeToOutsideClicks())}close(){this.isOpen()&&(this.closed.next(),this.overlayRef.detach(),this._changeDetectorRef.markForCheck()),this._closeSiblingTriggers()}getMenu(){return this.childMenu}_toggleOnKeydown(e){let t=this._parentMenu?.orientation==="vertical";switch(e.keyCode){case b:case M:!d(e)&&!oe(this._elementRef,e)&&(this.toggle(),this.childMenu?.focusFirstItem("keyboard"));break;case m:d(e)||this._parentMenu&&t&&this._directionality?.value!=="rtl"&&(e.preventDefault(),this.open(),this.childMenu?.focusFirstItem("keyboard"));break;case p:d(e)||this._parentMenu&&t&&this._directionality?.value==="rtl"&&(e.preventDefault(),this.open(),this.childMenu?.focusFirstItem("keyboard"));break;case A:case ee:d(e)||t||(e.preventDefault(),this.open(),e.keyCode===A?this.childMenu?.focusFirstItem("keyboard"):this.childMenu?.focusLastItem("keyboard"));break}}_handleClick(){this.toggle(),this.childMenu?.focusFirstItem("mouse")}_setHasFocus(e){this._parentMenu||this.menuStack.setHasFocus(e)}_subscribeToMouseEnter(){this._ngZone.runOutsideAngular(()=>{_(this._elementRef.nativeElement,"mouseenter").pipe(K(()=>this._inputModalityDetector.mostRecentModality!=="touch"&&!this.menuStack.isEmpty()&&!this.isOpen()),c(this.destroyed)).subscribe(()=>{let e=()=>this._ngZone.run(()=>{this._closeSiblingTriggers(),this.open()});this._menuAim?this._menuAim.toggle(e):e()})})}_closeSiblingTriggers(){this._parentMenu?!this.menuStack.closeSubMenuOf(this._parentMenu)&&this.menuStack.peek()!==this._parentMenu&&this.menuStack.closeAll():this.menuStack.closeAll()}_getOverlayConfig(){return new q({positionStrategy:this._getOverlayPositionStrategy(),scrollStrategy:this._overlay.scrollStrategies.reposition(),direction:this._directionality||void 0})}_getOverlayPositionStrategy(){return this._overlay.position().flexibleConnectedTo(this._elementRef).withLockedPosition().withGrowAfterOpen().withPositions(this._getOverlayPositions())}_getOverlayPositions(){return this.menuPosition??(!this._parentMenu||this._parentMenu.orientation==="horizontal"?J:pe)}_registerCloseHandler(){this._parentMenu||this.menuStack.closed.pipe(c(this.destroyed)).subscribe(({item:e})=>{e===this.childMenu&&this.close()})}_subscribeToOutsideClicks(){this.overlayRef&&this.overlayRef.outsidePointerEvents().pipe(c(this.stopOutsideClicksListener)).subscribe(e=>{let t=se(e),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&(this.isElementInsideMenuStack(t)?this._closeSiblingTriggers():this.menuStack.closeAll())})}_subscribeToMenuStackHasFocus(){this._parentMenu||this.menuStack.hasFocus.pipe(c(this.destroyed)).subscribe(e=>{e||this.menuStack.closeAll()})}_subscribeToMenuStackClosed(){this._parentMenu||this.menuStack.closed.subscribe(({focusParentTrigger:e})=>{e&&!this.menuStack.length()&&this._elementRef.nativeElement.focus()})}_setRole(){this._parentMenu||this._elementRef.nativeElement.setAttribute("role","button")}_setType(){let e=this._elementRef.nativeElement;e.nodeName==="BUTTON"&&!e.getAttribute("type")&&e.setAttribute("type","button")}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenuTriggerFor",""]],hostAttrs:[1,"cdk-menu-trigger"],hostVars:2,hostBindings:function(t,n){t&1&&s.ɵɵlistener("focusin",function(){return n._setHasFocus(!0)})("focusout",function(){return n._setHasFocus(!1)})("keydown",function(a){return n._toggleOnKeydown(a)})("click",function(){return n._handleClick()}),t&2&&s.ɵɵattribute("aria-haspopup",n.menuTemplateRef?"menu":null)("aria-expanded",n.menuTemplateRef==null?null:n.isOpen())},inputs:{menuTemplateRef:["cdkMenuTriggerFor","menuTemplateRef"],menuPosition:["cdkMenuPosition","menuPosition"],menuData:["cdkMenuTriggerData","menuData"]},outputs:{opened:"cdkMenuOpened",closed:"cdkMenuClosed"},exportAs:["cdkMenuTriggerFor"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:D,useExisting:i},Ce]),s.ɵɵInheritDefinitionFeature]})}}return i})(),F=(()=>{class i{get hasMenu(){return this._menuTrigger?.menuTemplateRef!=null}constructor(){this._dir=u(C,{optional:!0}),this._elementRef=u(H),this._ngZone=u(I),this._inputModalityDetector=u(ne),this._menuAim=u(E,{optional:!0}),this._menuStack=u(h),this._parentMenu=u(O,{optional:!0}),this._menuTrigger=u(Pe,{optional:!0,self:!0}),this.disabled=!1,this.triggered=new k,this._tabindex=-1,this.closeOnSpacebarTrigger=!0,this.destroyed=new l,this._setupMouseEnter(),this._setType(),this._isStandaloneItem()&&(this._tabindex=0)}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}trigger(e){let{keepOpen:t}=g({},e);!this.disabled&&!this.hasMenu&&(this.triggered.next(),t||this._menuStack.closeAll({focusParentTrigger:!0}))}isMenuOpen(){return!!this._menuTrigger?.isOpen()}getMenu(){return this._menuTrigger?.getMenu()}getMenuTrigger(){return this._menuTrigger}getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||""}_resetTabIndex(){this._isStandaloneItem()||(this._tabindex=-1)}_setTabIndex(e){this.disabled||(!e||!this._menuStack.isEmpty())&&(this._tabindex=0)}_onKeydown(e){switch(e.keyCode){case b:case M:!d(e)&&!oe(this._elementRef,e)&&this.trigger({keepOpen:e.keyCode===b&&!this.closeOnSpacebarTrigger});break;case m:d(e)||this._parentMenu&&this._isParentVertical()&&(this._dir?.value!=="rtl"?this._forwardArrowPressed(e):this._backArrowPressed(e));break;case p:d(e)||this._parentMenu&&this._isParentVertical()&&(this._dir?.value!=="rtl"?this._backArrowPressed(e):this._forwardArrowPressed(e));break}}_isStandaloneItem(){return!this._parentMenu}_backArrowPressed(e){let t=this._parentMenu;(this._menuStack.hasInlineMenu()||this._menuStack.length()>1)&&(e.preventDefault(),this._menuStack.close(t,{focusNextOnEmpty:this._menuStack.inlineMenuOrientation()==="horizontal"?1:2,focusParentTrigger:!0}))}_forwardArrowPressed(e){!this.hasMenu&&this._menuStack.inlineMenuOrientation()==="horizontal"&&(e.preventDefault(),this._menuStack.closeAll({focusNextOnEmpty:0,focusParentTrigger:!0}))}_setupMouseEnter(){if(!this._isStandaloneItem()){let e=()=>this._ngZone.run(()=>this._menuStack.closeSubMenuOf(this._parentMenu));this._ngZone.runOutsideAngular(()=>_(this._elementRef.nativeElement,"mouseenter").pipe(K(()=>this._inputModalityDetector.mostRecentModality!=="touch"&&!this._menuStack.isEmpty()&&!this.hasMenu),c(this.destroyed)).subscribe(()=>{this._menuAim?this._menuAim.toggle(e):e()}))}}_isParentVertical(){return this._parentMenu?.orientation==="vertical"}_setType(){let e=this._elementRef.nativeElement;e.nodeName==="BUTTON"&&!e.getAttribute("type")&&e.setAttribute("type","button")}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenuItem",""]],hostAttrs:["role","menuitem",1,"cdk-menu-item"],hostVars:2,hostBindings:function(t,n){t&1&&s.ɵɵlistener("blur",function(){return n._resetTabIndex()})("focus",function(){return n._setTabIndex()})("click",function(){return n.trigger()})("keydown",function(a){return n._onKeydown(a)}),t&2&&(s.ɵɵhostProperty("tabindex",n._tabindex),s.ɵɵattribute("aria-disabled",n.disabled||null))},inputs:{disabled:["cdkMenuItemDisabled","disabled",N],typeaheadLabel:["cdkMenuitemTypeaheadLabel","typeaheadLabel"]},outputs:{triggered:"cdkMenuItemTriggered"},exportAs:["cdkMenuItem"],standalone:!0,features:[s.ɵɵInputTransformsFeature]})}}return i})(),B=class{constructor(r){this._items=r,this.entered=this._getItemPointerEntries(),this.exited=this._getItemPointerExits(),this._destroyed=new l,this.entered.subscribe(e=>this.activeElement=e),this.exited.subscribe(()=>{this.previousElement=this.activeElement,this.activeElement=void 0})}destroy(){this._destroyed.next(),this._destroyed.complete()}_getItemPointerEntries(){return Z(()=>this._items.changes.pipe(v(this._items),w(r=>r.map(e=>_(e._elementRef.nativeElement,"mouseenter").pipe(R(e),c(this._items.changes)))),P()))}_getItemPointerExits(){return Z(()=>this._items.changes.pipe(v(this._items),w(r=>r.map(e=>_(e._elementRef.nativeElement,"mouseout").pipe(R(e),c(this._items.changes)))),P()))}},xe=0,ae=(()=>{class i extends V{constructor(){super(...arguments),this.nativeElement=u(H).nativeElement,this.ngZone=u(I),this.menuStack=u(h),this.menuAim=u(E,{optional:!0,self:!0}),this.dir=u(C,{optional:!0}),this.id=`cdk-menu-${xe++}`,this.orientation="vertical",this.isInline=!1,this.destroyed=new l,this._menuStackHasFocus=!1}ngAfterContentInit(){this.isInline||this.menuStack.push(this),this._setKeyManager(),this._subscribeToMenuStackHasFocus(),this._subscribeToMenuOpen(),this._subscribeToMenuStackClosed(),this._setUpPointerTracker()}ngOnDestroy(){this.keyManager?.destroy(),this.destroyed.next(),this.destroyed.complete(),this.pointerTracker?.destroy()}focusFirstItem(e="program"){this.keyManager.setFocusOrigin(e),this.keyManager.setFirstItemActive()}focusLastItem(e="program"){this.keyManager.setFocusOrigin(e),this.keyManager.setLastItemActive()}_getTabIndex(){let e=this._menuStackHasFocus?-1:0;return this.isInline?e:null}closeOpenMenu(e,t){let{focusParentTrigger:n}=g({},t),o=this.keyManager,a=this.triggerItem;e===a?.getMenuTrigger()?.getMenu()&&(a?.getMenuTrigger()?.close(),n&&(a?o.setActiveItem(a):o.setFirstItemActive()))}_setKeyManager(){this.keyManager=new Ie(this.items).withWrap().withTypeAhead().withHomeAndEnd(),this.orientation==="horizontal"?this.keyManager.withHorizontalOrientation(this.dir?.value||"ltr"):this.keyManager.withVerticalOrientation()}_subscribeToMenuOpen(){let e=L(this.items.changes,this.destroyed);this.items.changes.pipe(v(this.items),w(t=>t.filter(n=>n.hasMenu).map(n=>n.getMenuTrigger().opened.pipe(R(n),c(e)))),P(),ke(t=>(this.triggerItem=t,t.getMenuTrigger().closed)),c(this.destroyed)).subscribe(()=>this.triggerItem=void 0)}_subscribeToMenuStackClosed(){this.menuStack.closed.pipe(c(this.destroyed)).subscribe(({item:e,focusParentTrigger:t})=>this.closeOpenMenu(e,{focusParentTrigger:t}))}_subscribeToMenuStackHasFocus(){this.isInline&&this.menuStack.hasFocus.pipe(c(this.destroyed)).subscribe(e=>{this._menuStackHasFocus=e})}_setUpPointerTracker(){this.menuAim&&(this.ngZone.runOutsideAngular(()=>{this.pointerTracker=new B(this.items)}),this.menuAim.initialize(this,this.pointerTracker))}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=s.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=s.ɵɵdefineDirective({type:i,contentQueries:function(t,n,o){if(t&1&&s.ɵɵcontentQuery(o,F,5),t&2){let a;s.ɵɵqueryRefresh(a=s.ɵɵloadQuery())&&(n.items=a)}},hostAttrs:["role","menu"],hostVars:4,hostBindings:function(t,n){t&1&&s.ɵɵlistener("focus",function(){return n.focusFirstItem()})("focusin",function(){return n.menuStack.setHasFocus(!0)})("focusout",function(){return n.menuStack.setHasFocus(!1)}),t&2&&(s.ɵɵhostProperty("tabindex",n._getTabIndex())("id",n.id),s.ɵɵattribute("aria-orientation",n.orientation)("data-cdk-menu-stack-id",n.menuStack.id))},inputs:{id:"id"},features:[s.ɵɵInheritDefinitionFeature]})}}return i})(),nt=(()=>{class i extends ae{constructor(){super(),this._parentTrigger=u(D,{optional:!0}),this.closed=new k,this.orientation="vertical",this.isInline=!this._parentTrigger,this.destroyed.subscribe(this.closed),this._parentTrigger?.registerChildMenu(this)}ngAfterContentInit(){super.ngAfterContentInit(),this._subscribeToMenuStackEmptied()}ngOnDestroy(){super.ngOnDestroy(),this.closed.complete()}_handleKeyEvent(e){let t=this.keyManager;switch(e.keyCode){case p:case m:d(e)||(e.preventDefault(),t.setFocusOrigin("keyboard"),t.onKeydown(e));break;case ie:d(e)||(e.preventDefault(),this.menuStack.close(this,{focusNextOnEmpty:2,focusParentTrigger:!0}));break;case te:d(e,"altKey","metaKey","ctrlKey")||this.menuStack.closeAll({focusParentTrigger:!0});break;default:t.onKeydown(e)}}_toggleMenuFocus(e){let t=this.keyManager;switch(e){case 0:t.setFocusOrigin("keyboard"),t.setNextItemActive();break;case 1:t.setFocusOrigin("keyboard"),t.setPreviousItemActive();break;case 2:t.activeItem&&(t.setFocusOrigin("keyboard"),t.setActiveItem(t.activeItem));break}}_subscribeToMenuStackEmptied(){this.menuStack.emptied.pipe(c(this.destroyed)).subscribe(e=>this._toggleMenuFocus(e))}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenu",""]],hostAttrs:["role","menu",1,"cdk-menu"],hostVars:2,hostBindings:function(t,n){t&1&&s.ɵɵlistener("keydown",function(a){return n._handleKeyEvent(a)}),t&2&&s.ɵɵclassProp("cdk-menu-inline",n.isInline)},outputs:{closed:"closed"},exportAs:["cdkMenu"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:V,useExisting:i},{provide:O,useExisting:i},Oe("vertical")]),s.ɵɵInheritDefinitionFeature]})}}return i})(),st=(()=>{class i extends ae{constructor(){super(...arguments),this.orientation="horizontal",this.isInline=!0}ngAfterContentInit(){super.ngAfterContentInit(),this._subscribeToMenuStackEmptied()}_handleKeyEvent(e){let t=this.keyManager;switch(e.keyCode){case ee:case A:case p:case m:if(!d(e)&&(e.keyCode===p||e.keyCode===m)){e.preventDefault();let o=t.activeItem?.isMenuOpen();t.activeItem?.getMenuTrigger()?.close(),t.setFocusOrigin("keyboard"),t.onKeydown(e),o&&t.activeItem?.getMenuTrigger()?.open()}break;case ie:d(e)||(e.preventDefault(),t.activeItem?.getMenuTrigger()?.close());break;case te:d(e,"altKey","metaKey","ctrlKey")||t.activeItem?.getMenuTrigger()?.close();break;default:t.onKeydown(e)}}_toggleOpenMenu(e){let t=this.keyManager;switch(e){case 0:t.setFocusOrigin("keyboard"),t.setNextItemActive(),t.activeItem?.getMenuTrigger()?.open();break;case 1:t.setFocusOrigin("keyboard"),t.setPreviousItemActive(),t.activeItem?.getMenuTrigger()?.open();break;case 2:t.activeItem&&(t.setFocusOrigin("keyboard"),t.setActiveItem(t.activeItem));break}}_subscribeToMenuStackEmptied(){this.menuStack?.emptied.pipe(c(this.destroyed)).subscribe(e=>this._toggleOpenMenu(e))}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=s.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenuBar",""]],hostAttrs:["role","menubar",1,"cdk-menu-bar"],hostBindings:function(t,n){t&1&&s.ɵɵlistener("keydown",function(a){return n._handleKeyEvent(a)})},exportAs:["cdkMenuBar"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:V,useExisting:i},{provide:O,useExisting:i},{provide:h,useFactory:()=>S.inline("horizontal")}]),s.ɵɵInheritDefinitionFeature]})}}return i})(),f=(()=>{class i extends F{constructor(){super(...arguments),this.checked=!1,this.closeOnSpacebarTrigger=!1}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=s.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=s.ɵɵdefineDirective({type:i,hostVars:2,hostBindings:function(t,n){t&2&&s.ɵɵattribute("aria-checked",!!n.checked)("aria-disabled",n.disabled||null)},inputs:{checked:["cdkMenuItemChecked","checked",N]},features:[s.ɵɵInputTransformsFeature,s.ɵɵInheritDefinitionFeature]})}}return i})(),Be=0,rt=(()=>{class i extends f{constructor(){super(),this._selectionDispatcher=u(x),this._id=`${Be++}`,this._registerDispatcherListener()}ngOnDestroy(){super.ngOnDestroy(),this._removeDispatcherListener()}trigger(e){super.trigger(e),this.disabled||this._selectionDispatcher.notify(this._id,"")}_registerDispatcherListener(){this._removeDispatcherListener=this._selectionDispatcher.listen(e=>{this.checked=this._id===e})}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenuItemRadio",""]],hostAttrs:["role","menuitemradio"],hostVars:2,hostBindings:function(t,n){t&2&&s.ɵɵclassProp("cdk-menu-item-radio",!0)},exportAs:["cdkMenuItemRadio"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:f,useExisting:i},{provide:F,useExisting:f}]),s.ɵɵInheritDefinitionFeature]})}}return i})(),ot=(()=>{class i extends f{trigger(e){super.trigger(e),this.disabled||(this.checked=!this.checked)}static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=s.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkMenuItemCheckbox",""]],hostAttrs:["role","menuitemcheckbox"],hostVars:2,hostBindings:function(t,n){t&2&&s.ɵɵclassProp("cdk-menu-item-checkbox",!0)},exportAs:["cdkMenuItemCheckbox"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:f,useExisting:i},{provide:F,useExisting:f}]),s.ɵɵInheritDefinitionFeature]})}}return i})(),He=J.map(i=>{let r=i.overlayX==="start"?2:-2,e=i.overlayY==="top"?2:-2;return W(g({},i),{offsetX:r,offsetY:e})}),Ne=(()=>{class i{update(e){i._openContextMenuTrigger!==e&&(i._openContextMenuTrigger?.close(),i._openContextMenuTrigger=e)}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵprov=s.ɵɵdefineInjectable({token:i,factory:i.ɵfac,providedIn:"root"})}}return i})(),at=(()=>{class i extends re{constructor(){super(),this._overlay=u($),this._directionality=u(C,{optional:!0}),this._contextMenuTracker=u(Ne),this.disabled=!1,this._setMenuStackCloseListener()}open(e){this._open(null,e)}close(){this.menuStack.closeAll()}_openOnContextMenu(e){this.disabled||(e.preventDefault(),e.stopPropagation(),this._contextMenuTracker.update(this),this._open(e,{x:e.clientX,y:e.clientY}),e.button===2?this.childMenu?.focusFirstItem("mouse"):e.button===0?this.childMenu?.focusFirstItem("keyboard"):this.childMenu?.focusFirstItem("program"))}_getOverlayConfig(e){return new q({positionStrategy:this._getOverlayPositionStrategy(e),scrollStrategy:this._overlay.scrollStrategies.reposition(),direction:this._directionality||void 0})}_getOverlayPositionStrategy(e){return this._overlay.position().flexibleConnectedTo(e).withLockedPosition().withGrowAfterOpen().withPositions(this.menuPosition??He)}_setMenuStackCloseListener(){this.menuStack.closed.pipe(c(this.destroyed)).subscribe(({item:e})=>{e===this.childMenu&&this.isOpen()&&(this.closed.next(),this.overlayRef.detach())})}_subscribeToOutsideClicks(e){if(this.overlayRef){let t=this.overlayRef.outsidePointerEvents();if(e){let[n,o]=ve(t,({type:a})=>a==="auxclick");t=L(o.pipe(Me((a,y)=>e.ctrlKey&&y===0&&a.ctrlKey)),n.pipe(be(1)))}t.pipe(c(this.stopOutsideClicksListener)).subscribe(n=>{this.isElementInsideMenuStack(se(n))||this.menuStack.closeAll()})}}_open(e,t){this.disabled||(this.isOpen()?(this.menuStack.closeSubMenuOf(this.childMenu),this.overlayRef.getConfig().positionStrategy.setOrigin(t),this.overlayRef.updatePosition()):(this.opened.next(),this.overlayRef?(this.overlayRef.getConfig().positionStrategy.setOrigin(t),this.overlayRef.updatePosition()):this.overlayRef=this._overlay.create(this._getOverlayConfig(t)),this.overlayRef.attach(this.getMenuContentPortal()),this._subscribeToOutsideClicks(e)))}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=s.ɵɵdefineDirective({type:i,selectors:[["","cdkContextMenuTriggerFor",""]],hostVars:1,hostBindings:function(t,n){t&1&&s.ɵɵlistener("contextmenu",function(a){return n._openOnContextMenu(a)}),t&2&&s.ɵɵattribute("data-cdk-menu-stack-id",null)},inputs:{menuTemplateRef:["cdkContextMenuTriggerFor","menuTemplateRef"],menuPosition:["cdkContextMenuPosition","menuPosition"],menuData:["cdkContextMenuTriggerData","menuData"],disabled:["cdkContextMenuDisabled","disabled",N]},outputs:{opened:"cdkContextMenuOpened",closed:"cdkContextMenuClosed"},exportAs:["cdkContextMenuTriggerFor"],standalone:!0,features:[s.ɵɵProvidersFeature([{provide:D,useExisting:i},{provide:h,useClass:S}]),s.ɵɵInputTransformsFeature,s.ɵɵInheritDefinitionFeature]})}}return i})();var ut=(()=>{class i{static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵmod=s.ɵɵdefineNgModule({type:i})}static{this.ɵinj=s.ɵɵdefineInjector({imports:[me]})}}return i})();export{O as CDK_MENU,at as CdkContextMenuTrigger,nt as CdkMenu,st as CdkMenuBar,ae as CdkMenuBase,V as CdkMenuGroup,F as CdkMenuItem,ot as CdkMenuItemCheckbox,rt as CdkMenuItemRadio,f as CdkMenuItemSelectable,ut as CdkMenuModule,Pe as CdkMenuTrigger,re as CdkMenuTriggerBase,it as CdkTargetMenuAim,Ne as ContextMenuTracker,E as MENU_AIM,h as MENU_STACK,D as MENU_TRIGGER,S as MenuStack,Oe as PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER,Ce as PARENT_OR_NEW_MENU_STACK_PROVIDER,B as PointerFocusTracker,Re as TargetMenuAim};