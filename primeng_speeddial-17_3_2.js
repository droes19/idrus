var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(o,l,e)=>l in o?S(o,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[l]=e,g=(o,l)=>{for(var e in l||={})O.call(l,e)&&h(o,e,l[e]);if(f)for(var e of f(l))T.call(l,e)&&h(o,e,l[e]);return o};import*as p from"@angular/common";import{isPlatformBrowser as _,DOCUMENT as E,CommonModule as L}from"@angular/common";import*as t from"@angular/core";import{EventEmitter as u,signal as A,PLATFORM_ID as P}from"@angular/core";import*as I from"@angular/router";import{RouterModule as b}from"@angular/router";import{PrimeTemplate as N,SharedModule as M}from"primeng/api";import*as k from"primeng/button";import{ButtonModule as y}from"primeng/button";import{DomHandler as r}from"primeng/dom";import{PlusIcon as v}from"primeng/icons/plus";import*as w from"primeng/ripple";import{RippleModule as F}from"primeng/ripple";import*as x from"primeng/tooltip";import{TooltipModule as C}from"primeng/tooltip";import{UniqueComponentId as R}from"primeng/utils";import{asapScheduler as V}from"rxjs";var $=["container"],q=["list"];function B(o,l){o&1&&t.ɵɵelement(0,"PlusIcon")}function H(o,l){o&1&&t.ɵɵelementContainer(0)}function K(o,l){if(o&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,H,1,0,"ng-container",8),t.ɵɵelementContainerEnd()),o&2){let e=t.ɵɵnextContext();t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.buttonTemplate)}}function U(o,l){if(o&1&&t.ɵɵelement(0,"span",14),o&2){let e=t.ɵɵnextContext(2).$implicit;t.ɵɵproperty("ngClass",e.icon)}}var D=o=>({"p-disabled":o}),j=()=>({exact:!1});function Q(o,l){if(o&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"a",12),t.ɵɵlistener("click",function(i){t.ɵɵrestoreView(e);let s=t.ɵɵnextContext().$implicit,a=t.ɵɵnextContext();return t.ɵɵresetView(a.onItemClick(i,s))})("keydown.enter",function(i){t.ɵɵrestoreView(e);let s=t.ɵɵnextContext(),a=s.$implicit,c=s.index,d=t.ɵɵnextContext();return t.ɵɵresetView(d.onItemClick(i,a,c))}),t.ɵɵtemplate(1,U,1,1,"span",13),t.ɵɵelementEnd()}if(o&2){let e=t.ɵɵnextContext().$implicit,n=t.ɵɵnextContext();t.ɵɵproperty("routerLink",e.routerLink)("queryParams",e.queryParams)("ngClass",t.ɵɵpureFunction1(15,D,e.disabled))("routerLinkActiveOptions",e.routerLinkActiveOptions||t.ɵɵpureFunction0(17,j))("fragment",e.fragment)("queryParamsHandling",e.queryParamsHandling)("preserveFragment",e.preserveFragment)("skipLocationChange",e.skipLocationChange)("replaceUrl",e.replaceUrl)("state",e.state),t.ɵɵattribute("target",e.target)("tabindex",e.disabled||n.readonly||!n.visible?null:e.tabindex?e.tabindex:"0")("aria-label",e.label)("data-pc-section","action"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.icon)}}function z(o,l){if(o&1&&t.ɵɵelement(0,"span",14),o&2){let e=t.ɵɵnextContext(3).$implicit;t.ɵɵproperty("ngClass",e.icon)}}function W(o,l){if(o&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"a",16),t.ɵɵlistener("click",function(i){t.ɵɵrestoreView(e);let s=t.ɵɵnextContext(2).$implicit,a=t.ɵɵnextContext();return t.ɵɵresetView(a.onItemClick(i,s))})("keydown.enter",function(i){t.ɵɵrestoreView(e);let s=t.ɵɵnextContext(2),a=s.$implicit,c=s.index,d=t.ɵɵnextContext();return t.ɵɵresetView(d.onItemClick(i,a,c))}),t.ɵɵtemplate(1,z,1,1,"span",13),t.ɵɵelementEnd()}if(o&2){let e=t.ɵɵnextContext(2),n=e.$implicit,i=e.index,s=t.ɵɵnextContext();t.ɵɵproperty("ngClass",t.ɵɵpureFunction1(7,D,n.disabled)),t.ɵɵattribute("href",n.url||null,t.ɵɵsanitizeUrl)("target",n.target)("data-pc-section","action")("aria-label",n.label)("tabindex",n.disabled||i!==s.activeIndex&&s.readonly||!s.visible?null:n.tabindex?n.tabindex:"0"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.icon)}}function G(o,l){if(o&1&&t.ɵɵtemplate(0,W,2,9,"a",15),o&2){let e=t.ɵɵnextContext(2);t.ɵɵproperty("ngIf",e._visible)}}var J=(o,l)=>({"p-hidden":o,"p-focus":l});function X(o,l){if(o&1&&(t.ɵɵelementStart(0,"li",9),t.ɵɵtemplate(1,Q,2,18,"a",10)(2,G,1,1,"ng-template",null,11,t.ɵɵtemplateRefExtractor),t.ɵɵelementEnd()),o&2){let e=l.$implicit,n=l.index,i=t.ɵɵreference(3),s=t.ɵɵnextContext();t.ɵɵproperty("ngStyle",s.getItemStyle(n))("tooltipOptions",e.tooltipOptions)("ngClass",t.ɵɵpureFunction2(8,J,e.visible===!1,s.focusedOptionId==s.id+"_"+n))("id",s.id+"_"+n),t.ɵɵattribute("aria-controls",s.id+"_item")("data-pc-section","menuitem"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",s._visible&&s.isClickableRouterLink(e))("ngIfElse",i)}}var Y=o=>({"p-speeddial-mask":!0,"p-speeddial-mask-visible":o});function Z(o,l){if(o&1&&t.ɵɵelement(0,"div",0),o&2){let e=t.ɵɵnextContext();t.ɵɵclassMap(e.maskClassName),t.ɵɵproperty("ngClass",t.ɵɵpureFunction1(4,Y,e.visible))("ngStyle",e.maskStyle)}}var Ie=(()=>{class o{platformId;el;cd;document;renderer;id;model=null;get visible(){return this._visible}set visible(e){this._visible=e,this._visible?this.bindDocumentClickListener():this.unbindDocumentClickListener()}style;className;direction="up";transitionDelay=30;type="linear";radius=0;mask=!1;disabled=!1;hideOnClickOutside=!0;buttonStyle;buttonClassName;maskStyle;maskClassName;showIcon;hideIcon;rotateAnimation=!0;ariaLabel;ariaLabelledBy;onVisibleChange=new u;visibleChange=new u;onClick=new u;onShow=new u;onHide=new u;container;list;templates;buttonTemplate;isItemClicked=!1;_visible=!1;documentClickListener;focusedOptionIndex=A(null);focused=!1;get focusedOptionId(){return this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null}constructor(e,n,i,s,a){this.platformId=e,this.el=n,this.cd=i,this.document=s,this.renderer=a}ngOnInit(){this.id=this.id||R()}ngAfterViewInit(){if(_(this.platformId)&&this.type!=="linear"){let e=r.findSingle(this.container?.nativeElement,".p-speeddial-button"),n=r.findSingle(this.list?.nativeElement,".p-speeddial-item");if(e&&n){let i=Math.abs(e.offsetWidth-n.offsetWidth),s=Math.abs(e.offsetHeight-n.offsetHeight);this.list?.nativeElement.style.setProperty("--item-diff-x",`${i/2}px`),this.list?.nativeElement.style.setProperty("--item-diff-y",`${s/2}px`)}}}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"button":this.buttonTemplate=e.template;break}})}show(){this.onVisibleChange.emit(!0),this.visibleChange.emit(!0),this._visible=!0,this.onShow.emit(),this.bindDocumentClickListener(),this.cd.markForCheck()}hide(){this.onVisibleChange.emit(!1),this.visibleChange.emit(!1),this._visible=!1,this.onHide.emit(),this.unbindDocumentClickListener(),this.cd.markForCheck()}onButtonClick(e){this.visible?this.hide():this.show(),this.onClick.emit(e),this.isItemClicked=!0}onItemClick(e,n){n.command&&n.command({originalEvent:e,item:n}),this.hide(),this.isItemClicked=!0}onKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;default:break}}onFocus(e){this.focused=!0}onBlur(e){this.focused=!1,V.schedule(()=>this.focusedOptionIndex.set(-1))}onArrowUp(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)}onArrowDown(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)}onArrowLeft(e){let n=["left","up-right","down-left"],i=["right","up-left","down-right"];n.includes(this.direction)?this.navigateNextItem(e):i.includes(this.direction)?this.navigatePrevItem(e):this.navigatePrevItem(e)}onArrowRight(e){let n=["left","up-right","down-left"],i=["right","up-left","down-right"];n.includes(this.direction)?this.navigatePrevItem(e):i.includes(this.direction)?this.navigateNextItem(e):this.navigateNextItem(e)}onEndKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigatePrevItem(e)}onHomeKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigateNextItem(e)}onEnterKey(e){let i=[...r.find(this.container.nativeElement,"[data-pc-section=\"menuitem\"]")].findIndex(a=>a.id===this.focusedOptionIndex);this.onItemClick(e,this.model[i]),this.onBlur(e);let s=r.findSingle(this.container.nativeElement,"button");s&&r.focus(s)}onEscapeKey(e){this.hide();let n=r.findSingle(this.container.nativeElement,"button");n&&r.focus(n)}onTogglerKeydown(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey(e);break;default:break}}onTogglerArrowUp(e){this.focused=!0,r.focus(this.list.nativeElement),this.show(),this.navigatePrevItem(e),e.preventDefault()}onTogglerArrowDown(e){this.focused=!0,r.focus(this.list.nativeElement),this.show(),this.navigateNextItem(e),e.preventDefault()}navigateNextItem(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}navigatePrevItem(e){let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}findPrevOptionIndex(e){let i=[...r.find(this.container.nativeElement,"[data-pc-section=\"menuitem\"]")].filter(c=>!r.hasClass(r.findSingle(c,"a"),"p-disabled")),s=e===-1?i[i.length-1].id:e,a=i.findIndex(c=>c.getAttribute("id")===s);return a=e===-1?i.length-1:a-1,a}findNextOptionIndex(e){let i=[...r.find(this.container.nativeElement,"[data-pc-section=\"menuitem\"]")].filter(c=>!r.hasClass(r.findSingle(c,"a"),"p-disabled")),s=e===-1?i[0].id:e,a=i.findIndex(c=>c.getAttribute("id")===s);return a=e===-1?0:a+1,a}changeFocusedOptionIndex(e){let i=[...r.find(this.container.nativeElement,"[data-pc-section=\"menuitem\"]")].filter(s=>!r.hasClass(r.findSingle(s,"a"),"p-disabled"));i[e]&&this.focusedOptionIndex.set(i[e].getAttribute("id"))}calculatePointStyle(e){let n=this.type;if(n!=="linear"){let i=this.model.length,s=this.radius||i*20;if(n==="circle"){let a=2*Math.PI/i;return{left:`calc(${s*Math.cos(a*e)}px + var(--item-diff-x, 0px))`,top:`calc(${s*Math.sin(a*e)}px + var(--item-diff-y, 0px))`}}else if(n==="semi-circle"){let a=this.direction,c=Math.PI/(i-1),d=`calc(${s*Math.cos(c*e)}px + var(--item-diff-x, 0px))`,m=`calc(${s*Math.sin(c*e)}px + var(--item-diff-y, 0px))`;if(a==="up")return{left:d,bottom:m};if(a==="down")return{left:d,top:m};if(a==="left")return{right:m,top:d};if(a==="right")return{left:m,top:d}}else if(n==="quarter-circle"){let a=this.direction,c=Math.PI/(2*(i-1)),d=`calc(${s*Math.cos(c*e)}px + var(--item-diff-x, 0px))`,m=`calc(${s*Math.sin(c*e)}px + var(--item-diff-y, 0px))`;if(a==="up-left")return{right:d,bottom:m};if(a==="up-right")return{left:d,bottom:m};if(a==="down-left")return{right:m,top:d};if(a==="down-right")return{left:m,top:d}}}return{}}calculateTransitionDelay(e){let n=this.model.length;return(this.visible?e:n-e-1)*this.transitionDelay}containerClass(){return{[`p-speeddial p-component p-speeddial-${this.type}`]:!0,[`p-speeddial-direction-${this.direction}`]:this.type!=="circle","p-speeddial-opened":this.visible,"p-disabled":this.disabled}}buttonClass(){return{"p-speeddial-button p-button-rounded":!0,"p-speeddial-rotate":this.rotateAnimation&&!this.hideIcon,[this.buttonClassName]:!0}}get buttonIconClass(){return!this.visible&&this.showIcon||!this.hideIcon?this.showIcon:this.hideIcon}getItemStyle(e){let n=this.calculateTransitionDelay(e),i=this.calculatePointStyle(e);return g({transitionDelay:`${n}ms`},i)}isClickableRouterLink(e){return e.routerLink&&!this.disabled&&!e.disabled}isOutsideClicked(e){return this.container&&!(this.container.nativeElement.isSameNode(e.target)||this.container.nativeElement.contains(e.target)||this.isItemClicked)}bindDocumentClickListener(){_(this.platformId)&&!this.documentClickListener&&this.hideOnClickOutside&&(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{this.visible&&this.isOutsideClicked(e)&&this.hide(),this.isItemClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}ngOnDestroy(){this.unbindDocumentClickListener()}static ɵfac=function(n){return new(n||o)(t.ɵɵdirectiveInject(P),t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(E),t.ɵɵdirectiveInject(t.Renderer2))};static ɵcmp=t.ɵɵdefineComponent({type:o,selectors:[["p-speedDial"]],contentQueries:function(n,i,s){if(n&1&&t.ɵɵcontentQuery(s,N,4),n&2){let a;t.ɵɵqueryRefresh(a=t.ɵɵloadQuery())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(t.ɵɵviewQuery($,5),t.ɵɵviewQuery(q,5)),n&2){let s;t.ɵɵqueryRefresh(s=t.ɵɵloadQuery())&&(i.container=s.first),t.ɵɵqueryRefresh(s=t.ɵɵloadQuery())&&(i.list=s.first)}},hostAttrs:[1,"p-element"],inputs:{id:"id",model:"model",visible:"visible",style:"style",className:"className",direction:"direction",transitionDelay:"transitionDelay",type:"type",radius:"radius",mask:"mask",disabled:"disabled",hideOnClickOutside:"hideOnClickOutside",buttonStyle:"buttonStyle",buttonClassName:"buttonClassName",maskStyle:"maskStyle",maskClassName:"maskClassName",showIcon:"showIcon",hideIcon:"hideIcon",rotateAnimation:"rotateAnimation",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onVisibleChange:"onVisibleChange",visibleChange:"visibleChange",onClick:"onClick",onShow:"onShow",onHide:"onHide"},decls:9,vars:25,consts:[[3,"ngClass","ngStyle"],["container",""],["pRipple","","pButton","",1,"p-button-icon-only",3,"icon","ngClass","disabled","click","keydown"],[4,"ngIf"],["role","menu",1,"p-speeddial-list",3,"id","tabindex","focus","focusout","keydown"],["list",""],["class","p-speeddial-item","pTooltip","","role","menuitem",3,"ngStyle","tooltipOptions","ngClass","id",4,"ngFor","ngForOf"],[3,"ngClass","class","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet"],["pTooltip","","role","menuitem",1,"p-speeddial-item",3,"ngStyle","tooltipOptions","ngClass","id"],["pRipple","","class","p-speeddial-action","role","menuitem",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter",4,"ngIf","ngIfElse"],["elseBlock",""],["pRipple","","role","menuitem",1,"p-speeddial-action",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter"],["class","p-speeddial-action-icon",3,"ngClass",4,"ngIf"],[1,"p-speeddial-action-icon",3,"ngClass"],["class","p-speeddial-action","role","menuitem","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],["role","menuitem","pRipple","",1,"p-speeddial-action",3,"ngClass","click","keydown.enter"]],template:function(n,i){n&1&&(t.ɵɵelementStart(0,"div",0,1)(2,"button",2),t.ɵɵlistener("click",function(a){return i.onButtonClick(a)})("keydown",function(a){return i.onTogglerKeydown(a)}),t.ɵɵtemplate(3,B,1,0,"PlusIcon",3)(4,K,2,1,"ng-container",3),t.ɵɵelementEnd(),t.ɵɵelementStart(5,"ul",4,5),t.ɵɵlistener("focus",function(a){return i.onFocus(a)})("focusout",function(a){return i.onBlur(a)})("keydown",function(a){return i.onKeyDown(a)}),t.ɵɵtemplate(7,X,4,11,"li",6),t.ɵɵelementEnd()(),t.ɵɵtemplate(8,Z,1,6,"div",7)),n&2&&(t.ɵɵclassMap(i.className),t.ɵɵproperty("ngClass",i.containerClass())("ngStyle",i.style),t.ɵɵattribute("data-pc-name","speeddial")("data-pc-section","root"),t.ɵɵadvance(2),t.ɵɵstyleMap(i.buttonStyle),t.ɵɵproperty("icon",i.buttonIconClass)("ngClass",i.buttonClass())("disabled",i.disabled),t.ɵɵattribute("aria-expanded",i.visible)("aria-haspopup",!0)("aria-controls",i.id+"_list")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("data-pc-name","button"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!i.showIcon&&!i.buttonTemplate),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",i.buttonTemplate),t.ɵɵadvance(1),t.ɵɵproperty("id",i.id+"_list")("tabindex",-1),t.ɵɵattribute("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("data-pc-section","menu"),t.ɵɵadvance(2),t.ɵɵproperty("ngForOf",i.model),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",i.mask&&i.visible))},dependencies:()=>[p.NgClass,p.NgForOf,p.NgIf,p.NgTemplateOutlet,p.NgStyle,k.ButtonDirective,w.Ripple,x.Tooltip,I.RouterLink,v],styles:[`@layer primeng{.p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}}
`],encapsulation:2,changeDetection:0})}return o})(),ke=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=t.ɵɵdefineNgModule({type:o});static ɵinj=t.ɵɵdefineInjector({imports:[L,y,F,C,b,v,M,y,C,b]})}return o})();export{Ie as SpeedDial,ke as SpeedDialModule};