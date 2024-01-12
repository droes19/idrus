import{style as p,state as h,animate as m,transition as y,trigger as T}from"@angular/animations";import*as l from"@angular/common";import{isPlatformBrowser as u,DOCUMENT as x,CommonModule as I}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as v,PLATFORM_ID as O}from"@angular/core";import*as d from"primeng/api";import{PrimeTemplate as S,SharedModule as _}from"primeng/api";import{DomHandler as a,ConnectedOverlayScrollHandler as L}from"primeng/dom";import{TimesIcon as b}from"primeng/icons/times";import*as g from"primeng/ripple";import{RippleModule as P}from"primeng/ripple";import{ZIndexUtils as f}from"primeng/utils";function V(n,s){n&1&&e.ɵɵelementContainer(0)}function D(n,s){n&1&&e.ɵɵelement(0,"TimesIcon",8),n&2&&e.ɵɵproperty("styleClass","p-overlaypanel-close-icon")}function E(n,s){}function R(n,s){n&1&&e.ɵɵtemplate(0,E,0,0,"ng-template")}function H(n,s){if(n&1&&(e.ɵɵelementStart(0,"span",9),e.ɵɵtemplate(1,R,1,0,null,3),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(3);e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.closeIconTemplate)}}function z(n,s){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"button",5),e.ɵɵlistener("click",function(o){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext(2);return e.ɵɵresetView(r.onCloseClick(o))})("keydown.enter",function(){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(2);return e.ɵɵresetView(o.hide())}),e.ɵɵtemplate(1,D,1,1,"TimesIcon",6)(2,H,2,1,"span",7),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext(2);e.ɵɵattribute("aria-label",t.ariaCloseLabel),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.closeIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.closeIconTemplate)}}var A=(n,s)=>({showTransitionParams:n,hideTransitionParams:s}),j=(n,s)=>({value:n,params:s});function M(n,s){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",1),e.ɵɵlistener("click",function(o){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext();return e.ɵɵresetView(r.onOverlayClick(o))})("@animation.start",function(o){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext();return e.ɵɵresetView(r.onAnimationStart(o))})("@animation.done",function(o){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext();return e.ɵɵresetView(r.onAnimationEnd(o))}),e.ɵɵelementStart(1,"div",2),e.ɵɵlistener("click",function(o){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext();return e.ɵɵresetView(r.onContentClick(o))})("mousedown",function(o){e.ɵɵrestoreView(t);let r=e.ɵɵnextContext();return e.ɵɵresetView(r.onContentClick(o))}),e.ɵɵprojection(2),e.ɵɵtemplate(3,V,1,0,"ng-container",3),e.ɵɵelementEnd(),e.ɵɵtemplate(4,z,3,3,"button",4),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext();e.ɵɵclassMap(t.styleClass),e.ɵɵproperty("ngClass","p-overlaypanel p-component")("ngStyle",t.style)("@animation",e.ɵɵpureFunction2(13,j,t.overlayVisible?"open":"close",e.ɵɵpureFunction2(10,A,t.showTransitionOptions,t.hideTransitionOptions))),e.ɵɵattribute("aria-modal",t.overlayVisible)("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),e.ɵɵadvance(3),e.ɵɵproperty("ngTemplateOutlet",t.contentTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.showCloseIcon)}}var Z=["*"],oe=(()=>{class n{document;platformId;el;renderer;cd;zone;config;overlayService;ariaLabel;ariaLabelledBy;dismissable=!0;showCloseIcon;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new v;onHide=new v;templates;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;closeIconTemplate;destroyCallback;overlayEventListener;overlaySubscription;constructor(t,i,o,r,c,C,w,k){this.document=t,this.platformId=i,this.el=o,this.renderer=r,this.cd=c,this.zone=C,this.config=w,this.overlayService=k}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"closeicon":this.closeIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}this.cd.markForCheck()})}bindDocumentClickListener(){if(u(this.platformId)&&!this.documentClickListener&&this.dismissable){let t=a.isIOS()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,t,o=>{!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,i)&&(this.destroyCallback=()=>{this.show(null,i||t.currentTarget||t.target)}),this.hide()):this.show(t,i))}show(t,i){i&&t&&t.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(t){let i=t.target;this.selfClick=t.offsetX<i.clientWidth&&t.offsetY<i.clientHeight}hasTargetChanged(t,i){return this.target!=null&&this.target!==(i||t.currentTarget||t.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):a.appendChild(this.container,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&f.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),a.absolutePosition(this.container,this.target);let t=a.getOffset(this.container),i=a.getOffset(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;t.left<i.left&&(r=i.left-t.left-parseFloat(o)*2),this.container?.style.setProperty("--overlayArrowLeft",`${r}px`),t.top<i.top&&(a.addClass(this.container,"p-overlaypanel-flipped"),this.showCloseIcon&&this.renderer.setStyle(this.container,"margin-top","-30px"))}onAnimationStart(t){t.toState==="open"&&(this.container=t.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&f.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let t=a.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(t){this.hide(),t.preventDefault()}onEscapeKeydown(t){this.hide()}onWindowResize(){this.overlayVisible&&!a.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){if(u(this.platformId)&&!this.documentResizeListener){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){u(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new L(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&f.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static ɵfac=function(i){return new(i||n)(e.ɵɵdirectiveInject(x),e.ɵɵdirectiveInject(O),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(e.NgZone),e.ɵɵdirectiveInject(d.PrimeNGConfig),e.ɵɵdirectiveInject(d.OverlayService))};static ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["p-overlayPanel"]],contentQueries:function(i,o,r){if(i&1&&e.ɵɵcontentQuery(r,S,4),i&2){let c;e.ɵɵqueryRefresh(c=e.ɵɵloadQuery())&&(o.templates=c)}},hostAttrs:[1,"p-element"],hostBindings:function(i,o){i&1&&e.ɵɵlistener("keydown.escape",function(c){return o.onEscapeKeydown(c)},!1,e.ɵɵresolveDocument)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:"dismissable",showCloseIcon:"showCloseIcon",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:"autoZIndex",ariaCloseLabel:"ariaCloseLabel",baseZIndex:"baseZIndex",focusOnShow:"focusOnShow",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},ngContentSelectors:Z,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"ngClass","ngStyle","click"],[1,"p-overlaypanel-content",3,"click","mousedown"],[4,"ngTemplateOutlet"],["type","button","class","p-overlaypanel-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],["type","button","pRipple","",1,"p-overlaypanel-close","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-overlaypanel-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-overlaypanel-close-icon"]],template:function(i,o){i&1&&(e.ɵɵprojectionDef(),e.ɵɵtemplate(0,M,5,16,"div",0)),i&2&&e.ɵɵproperty("ngIf",o.render)},dependencies:()=>[l.NgClass,l.NgIf,l.NgTemplateOutlet,l.NgStyle,g.Ripple,b],styles:[`@layer primeng{.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}}
`],encapsulation:2,data:{animation:[T("animation",[h("void",p({transform:"scaleY(0.8)",opacity:0})),h("close",p({opacity:0})),h("open",p({transform:"translateY(0)",opacity:1})),y("void => open",m("{{showTransitionParams}}")),y("open => close",m("{{hideTransitionParams}}"))])]},changeDetection:0})}return n})(),re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=e.ɵɵdefineNgModule({type:n});static ɵinj=e.ɵɵdefineInjector({imports:[I,P,_,b,_]})}return n})();export{oe as OverlayPanel,re as OverlayPanelModule};