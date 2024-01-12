import{style as f,state as u,animate as d,transition as _,trigger as I}from"@angular/animations";import*as s from"@angular/common";import{DOCUMENT as E,CommonModule as w}from"@angular/common";import*as t from"@angular/core";import{EventEmitter as h}from"@angular/core";import*as p from"primeng/api";import{TranslationKeys as g,PrimeTemplate as L,SharedModule as b}from"primeng/api";import*as v from"primeng/button";import{ButtonModule as S}from"primeng/button";import{DomHandler as a,ConnectedOverlayScrollHandler as j}from"primeng/dom";import{ZIndexUtils as C}from"primeng/utils";function k(i,r){i&1&&t.ɵɵelementContainer(0)}var x=i=>({$implicit:i});function P(i,r){if(i&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,k,1,0,"ng-container",4),t.ɵɵelementContainerEnd()),i&2){let e=t.ɵɵnextContext(2);t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",t.ɵɵpureFunction1(2,x,e.confirmation))}}function O(i,r){i&1&&t.ɵɵelementContainer(0)}function D(i,r){if(i&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,O,1,0,"ng-container",4),t.ɵɵelementContainerEnd()),i&2){let e=t.ɵɵnextContext(3);t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",t.ɵɵpureFunction1(2,x,e.confirmation))}}function R(i,r){if(i&1&&t.ɵɵelement(0,"i",12),i&2){let e=t.ɵɵnextContext(4);t.ɵɵclassMap(e.confirmation==null?null:e.confirmation.icon),t.ɵɵproperty("ngClass","p-confirm-popup-icon")}}function M(i,r){if(i&1&&(t.ɵɵtemplate(0,R,1,3,"i",10),t.ɵɵelementStart(1,"span",11),t.ɵɵtext(2),t.ɵɵelementEnd()),i&2){let e=t.ɵɵnextContext(3);t.ɵɵproperty("ngIf",e.confirmation==null?null:e.confirmation.icon),t.ɵɵadvance(2),t.ɵɵtextInterpolate(e.confirmation==null?null:e.confirmation.message)}}function V(i,r){if(i&1&&t.ɵɵelement(0,"i"),i&2){let e=t.ɵɵnextContext(4);t.ɵɵclassMap(e.confirmation==null?null:e.confirmation.rejectIcon)}}function z(i,r){}function B(i,r){i&1&&t.ɵɵtemplate(0,z,0,0,"ng-template",null,16,t.ɵɵtemplateRefExtractor)}function F(i,r){if(i&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"button",13),t.ɵɵlistener("click",function(){t.ɵɵrestoreView(e);let o=t.ɵɵnextContext(3);return t.ɵɵresetView(o.reject())}),t.ɵɵtemplate(1,V,1,2,"i",14)(2,B,2,0,null,15),t.ɵɵelementEnd()}if(i&2){let e=t.ɵɵnextContext(3);t.ɵɵclassMap((e.confirmation==null?null:e.confirmation.rejectButtonStyleClass)||"p-button-text"),t.ɵɵproperty("label",e.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),t.ɵɵattribute("aria-label",e.rejectButtonLabel),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.confirmation==null?null:e.confirmation.rejectIcon)("ngIfElse",e.rejecticon),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.rejectIconTemplate)}}function H(i,r){if(i&1&&t.ɵɵelement(0,"i"),i&2){let e=t.ɵɵnextContext(4);t.ɵɵclassMap(e.confirmation==null?null:e.confirmation.acceptIcon)}}function A(i,r){}function Z(i,r){i&1&&t.ɵɵtemplate(0,A,0,0,"ng-template",null,17,t.ɵɵtemplateRefExtractor)}function N(i,r){if(i&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"button",13),t.ɵɵlistener("click",function(){t.ɵɵrestoreView(e);let o=t.ɵɵnextContext(3);return t.ɵɵresetView(o.accept())}),t.ɵɵtemplate(1,H,1,2,"i",14)(2,Z,2,0,null,15),t.ɵɵelementEnd()}if(i&2){let e=t.ɵɵnextContext(3);t.ɵɵclassMap(e.confirmation==null?null:e.confirmation.acceptButtonStyleClass),t.ɵɵproperty("label",e.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),t.ɵɵattribute("aria-label",e.acceptButtonLabel),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.confirmation==null?null:e.confirmation.acceptIcon)("ngIfElse",e.accepticon),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.acceptIconTemplate)}}function Q(i,r){if(i&1&&(t.ɵɵelementStart(0,"div",5,6),t.ɵɵtemplate(2,D,2,4,"ng-container",2)(3,M,3,2,"ng-template",null,7,t.ɵɵtemplateRefExtractor),t.ɵɵelementEnd(),t.ɵɵelementStart(5,"div",8),t.ɵɵtemplate(6,F,3,8,"button",9)(7,N,3,8,"button",9),t.ɵɵelementEnd()),i&2){let e=t.ɵɵreference(4),n=t.ɵɵnextContext(2);t.ɵɵadvance(2),t.ɵɵproperty("ngIf",n.contentTemplate)("ngIfElse",e),t.ɵɵadvance(4),t.ɵɵproperty("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}var K=(i,r)=>({showTransitionParams:i,hideTransitionParams:r}),$=i=>({value:"open",params:i});function q(i,r){if(i&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"div",1),t.ɵɵlistener("click",function(o){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext();return t.ɵɵresetView(c.onOverlayClick(o))})("@animation.start",function(o){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext();return t.ɵɵresetView(c.onAnimationStart(o))})("@animation.done",function(o){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext();return t.ɵɵresetView(c.onAnimationEnd(o))}),t.ɵɵtemplate(1,P,2,4,"ng-container",2)(2,Q,8,4,"ng-template",null,3,t.ɵɵtemplateRefExtractor),t.ɵɵelementEnd()}if(i&2){let e=t.ɵɵreference(3),n=t.ɵɵnextContext();t.ɵɵclassMap(n.styleClass),t.ɵɵproperty("ngClass","p-confirm-popup p-component")("ngStyle",n.style)("@animation",t.ɵɵpureFunction1(10,$,t.ɵɵpureFunction2(7,K,n.showTransitionOptions,n.hideTransitionOptions))),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.headlessTemplate)("ngIfElse",e)}}var lt=(()=>{class i{el;confirmationService;renderer;cd;config;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}templates;container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;constructor(e,n,o,c,l,y,T){this.el=e,this.confirmationService=n,this.renderer=o,this.cd=c,this.config=l,this.overlayService=y,this.document=T,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(m=>{if(!m){this.hide();return}m.key===this.key&&(this.confirmation=m,this.confirmation.accept&&(this.confirmation.acceptEvent=new h,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new h,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"rejecticon":this.rejectIconTemplate=e.template;break;case"accepticon":this.acceptIconTemplate=e.template;break;case"headless":this.headlessTemplate=e.template;break}})}onEscapeKeydown(e){this.confirmation&&this.confirmation.closeOnEscape&&this.reject()}onAnimationStart(e){if(e.toState==="open"){this.container=e.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy();break}}getElementToFocus(){switch(this.defaultFocus){case"accept":return a.findSingle(this.container,".p-confirm-popup-accept");case"reject":return a.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&C.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;a.absolutePosition(this.container,this.confirmation?.target);let e=a.getOffset(this.container),n=a.getOffset(this.confirmation?.target),o=0;e.left<n.left&&(o=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${o}px`),e.top<n.top&&a.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=a.isIOS()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,o=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let c=this.confirmation.target;this.container!==o.target&&!this.container?.contains(o.target)&&c!==o.target&&!c.contains(o.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!a.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new j(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&C.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(g.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(g.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static ɵfac=function(n){return new(n||i)(t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(p.ConfirmationService),t.ɵɵdirectiveInject(t.Renderer2),t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(p.PrimeNGConfig),t.ɵɵdirectiveInject(p.OverlayService),t.ɵɵdirectiveInject(E))};static ɵcmp=t.ɵɵdefineComponent({type:i,selectors:[["p-confirmPopup"]],contentQueries:function(n,o,c){if(n&1&&t.ɵɵcontentQuery(c,L,4),n&2){let l;t.ɵɵqueryRefresh(l=t.ɵɵloadQuery())&&(o.templates=l)}},hostAttrs:[1,"p-element"],hostBindings:function(n,o){n&1&&t.ɵɵlistener("keydown.escape",function(l){return o.onEscapeKeydown(l)},!1,t.ɵɵresolveDocument)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"ngClass","ngStyle","click"],[4,"ngIf","ngIfElse"],["notHeadless",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirm-popup-content"],["content",""],["withoutContentTemplate",""],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"label","ngClass","class","click",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[3,"ngClass"],["type","button","pButton","",3,"label","ngClass","click"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["rejecticon",""],["accepticon",""]],template:function(n,o){n&1&&t.ɵɵtemplate(0,q,4,12,"div",0),n&2&&t.ɵɵproperty("ngIf",o.visible)},dependencies:[s.NgClass,s.NgIf,s.NgTemplateOutlet,s.NgStyle,v.ButtonDirective],styles:[`@layer primeng{.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}}
`],encapsulation:2,data:{animation:[I("animation",[u("void",f({transform:"scaleY(0.8)",opacity:0})),u("open",f({transform:"translateY(0)",opacity:1})),_("void => open",d("{{showTransitionParams}}")),_("open => void",d("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),pt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=t.ɵɵdefineNgModule({type:i});static ɵinj=t.ɵɵdefineInjector({imports:[w,S,b,b]})}return i})();export{lt as ConfirmPopup,pt as ConfirmPopupModule};