var R=Object.defineProperty,B=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var T=(n,o,t)=>o in n?R(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,b=(n,o)=>{for(var t in o||={})H.call(o,t)&&T(n,t,o[t]);if(S)for(var t of S(o))N.call(o,t)&&T(n,t,o[t]);return n},x=(n,o)=>B(n,$(o));import*as l from"@angular/common";import{isPlatformBrowser as P,DOCUMENT as j,CommonModule as z}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as I,signal as v,effect as Z,PLATFORM_ID as G}from"@angular/core";import*as y from"@angular/router";import{RouterModule as k}from"@angular/router";import*as E from"primeng/api";import{PrimeTemplate as Q,SharedModule as L}from"primeng/api";import{DomHandler as p}from"primeng/dom";import{AngleDownIcon as F}from"primeng/icons/angledown";import{AngleRightIcon as A}from"primeng/icons/angleright";import{BarsIcon as D}from"primeng/icons/bars";import*as K from"primeng/ripple";import{RippleModule as q}from"primeng/ripple";import*as V from"primeng/tooltip";import{TooltipModule as M}from"primeng/tooltip";import{ObjectUtils as m,UniqueComponentId as U,ZIndexUtils as w}from"primeng/utils";import{Subject as W,interval as J}from"rxjs";import{debounce as X,filter as Y}from"rxjs/operators";var ee=["menubar"];function te(n,o){if(n&1&&e.ɵɵelement(0,"li",5),n&2){let t=e.ɵɵnextContext().$implicit,i=e.ɵɵnextContext();e.ɵɵstyleMap(i.getItemProp(t,"style")),e.ɵɵproperty("ngClass",i.getSeparatorItemClass(t)),e.ɵɵattribute("id",i.getItemId(t))("data-pc-section","separator")}}function ie(n,o){if(n&1&&e.ɵɵelement(0,"span",18),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"icon"))("ngStyle",i.getItemProp(t,"iconStyle")),e.ɵɵattribute("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function ne(n,o){if(n&1&&(e.ɵɵelementStart(0,"span",19),e.ɵɵtext(1),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵattribute("data-pc-section","label"),e.ɵɵadvance(1),e.ɵɵtextInterpolate1(" ",i.getItemLabel(t)," ")}}function se(n,o){if(n&1&&e.ɵɵelement(0,"span",20),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",i.getItemLabel(t),e.ɵɵsanitizeHtml),e.ɵɵattribute("data-pc-section","label")}}function ae(n,o){if(n&1&&(e.ɵɵelementStart(0,"span",21),e.ɵɵtext(1),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(i.getItemProp(t,"badge"))}}function oe(n,o){n&1&&e.ɵɵelement(0,"AngleDownIcon",24),n&2&&(e.ɵɵproperty("styleClass","p-submenu-icon"),e.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function re(n,o){n&1&&e.ɵɵelement(0,"AngleRightIcon",24),n&2&&(e.ɵɵproperty("styleClass","p-submenu-icon"),e.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function me(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,oe,1,3,"AngleDownIcon",23)(2,re,1,3,"AngleRightIcon",23),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(6);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.root),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.root)}}function le(n,o){}function ce(n,o){n&1&&e.ɵɵtemplate(0,le,0,0,"ng-template"),n&2&&e.ɵɵproperty("data-pc-section","submenuicon")("aria-hidden",!0)}function ue(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,me,3,2,"ng-container",9)(2,ce,1,2,null,22),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(5);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.submenuIconTemplate)}}var O=n=>({"p-menuitem-link":!0,"p-disabled":n});function pe(n,o){if(n&1&&(e.ɵɵelementStart(0,"a",13),e.ɵɵtemplate(1,ie,1,5,"span",14)(2,ne,2,2,"span",15)(3,se,1,2,"ng-template",null,16,e.ɵɵtemplateRefExtractor)(5,ae,2,2,"span",17)(6,ue,3,2,"ng-container",9),e.ɵɵelementEnd()),n&2){let t=e.ɵɵreference(4),i=e.ɵɵnextContext(3).$implicit,s=e.ɵɵnextContext();e.ɵɵproperty("target",s.getItemProp(i,"target"))("ngClass",e.ɵɵpureFunction1(12,O,s.getItemProp(i,"disabled"))),e.ɵɵattribute("href",s.getItemProp(i,"url"),e.ɵɵsanitizeUrl)("aria-hidden",!0)("data-automationid",s.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.getItemProp(i,"icon")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.getItemProp(i,"escape"))("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",s.getItemProp(i,"badge")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.isItemGroup(i))}}function de(n,o){if(n&1&&e.ɵɵelement(0,"span",18),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"icon"))("ngStyle",i.getItemProp(t,"iconStyle")),e.ɵɵattribute("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function _e(n,o){if(n&1&&(e.ɵɵelementStart(0,"span",19),e.ɵɵtext(1),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(i.getItemLabel(t))}}function Ie(n,o){if(n&1&&e.ɵɵelement(0,"span",20),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",i.getItemLabel(t),e.ɵɵsanitizeHtml),e.ɵɵattribute("data-pc-section","label")}}function fe(n,o){if(n&1&&(e.ɵɵelementStart(0,"span",21),e.ɵɵtext(1),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext(4).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(i.getItemProp(t,"badge"))}}function he(n,o){n&1&&e.ɵɵelement(0,"AngleDownIcon",24),n&2&&(e.ɵɵproperty("styleClass","p-submenu-icon"),e.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function ge(n,o){n&1&&e.ɵɵelement(0,"AngleRightIcon",24),n&2&&(e.ɵɵproperty("styleClass","p-submenu-icon"),e.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function be(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,he,1,3,"AngleDownIcon",23)(2,ge,1,3,"AngleRightIcon",23),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(6);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.root),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.root)}}function xe(n,o){}function ye(n,o){n&1&&e.ɵɵtemplate(0,xe,0,0,"ng-template"),n&2&&e.ɵɵproperty("data-pc-section","submenuicon")("aria-hidden",!0)}function ve(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,be,3,2,"ng-container",9)(2,ye,1,2,null,22),e.ɵɵelementContainerEnd()),n&2){e.ɵɵnextContext(5);let t=e.ɵɵreference(1);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.submenuIconTemplate)}}var Ce=()=>({exact:!1});function Se(n,o){if(n&1&&(e.ɵɵelementStart(0,"a",25),e.ɵɵtemplate(1,de,1,5,"span",14)(2,_e,2,1,"span",15)(3,Ie,1,2,"ng-template",null,26,e.ɵɵtemplateRefExtractor)(5,fe,2,2,"span",17)(6,ve,3,2,"ng-container",9),e.ɵɵelementEnd()),n&2){let t=e.ɵɵreference(4),i=e.ɵɵnextContext(3).$implicit,s=e.ɵɵnextContext();e.ɵɵproperty("routerLink",s.getItemProp(i,"routerLink"))("queryParams",s.getItemProp(i,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",s.getItemProp(i,"routerLinkActiveOptions")||e.ɵɵpureFunction0(21,Ce))("target",s.getItemProp(i,"target"))("ngClass",e.ɵɵpureFunction1(22,O,s.getItemProp(i,"disabled")))("fragment",s.getItemProp(i,"fragment"))("queryParamsHandling",s.getItemProp(i,"queryParamsHandling"))("preserveFragment",s.getItemProp(i,"preserveFragment"))("skipLocationChange",s.getItemProp(i,"skipLocationChange"))("replaceUrl",s.getItemProp(i,"replaceUrl"))("state",s.getItemProp(i,"state")),e.ɵɵattribute("data-automationid",s.getItemProp(i,"automationId"))("tabindex",-1)("aria-hidden",!0)("data-pc-section","action"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.getItemProp(i,"icon")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.getItemProp(i,"escape"))("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",s.getItemProp(i,"badge")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.isItemGroup(i))}}function Te(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,pe,7,14,"a",11)(2,Se,7,24,"a",12),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(2).$implicit,i=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!i.getItemProp(t,"routerLink")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",i.getItemProp(t,"routerLink"))}}function Pe(n,o){}function ke(n,o){n&1&&e.ɵɵtemplate(0,Pe,0,0,"ng-template")}var Le=n=>({$implicit:n});function Me(n,o){if(n&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,ke,1,0,null,27),e.ɵɵelementContainerEnd()),n&2){let t=e.ɵɵnextContext(2).$implicit,i=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",e.ɵɵpureFunction1(2,Le,t.item))}}function we(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"p-menubarSub",28),e.ɵɵlistener("itemClick",function(s){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext(3);return e.ɵɵresetView(a.itemClick.emit(s))})("itemMouseEnter",function(s){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext(3);return e.ɵɵresetView(a.onItemMouseEnter(s))}),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext(2).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("itemTemplate",i.itemTemplate)("items",t.items)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("menuId",i.menuId)("activeItemPath",i.activeItemPath)("focusedItemId",i.focusedItemId)("level",i.level+1)}}function Ee(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"li",6,7)(2,"div",8),e.ɵɵlistener("click",function(s){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext().$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.onItemClick(s,a))})("mouseenter",function(s){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext().$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.onItemMouseEnter({$event:s,processedItem:a}))}),e.ɵɵtemplate(3,Te,3,2,"ng-container",9)(4,Me,2,4,"ng-container",9),e.ɵɵelementEnd(),e.ɵɵtemplate(5,we,1,8,"p-menubarSub",10),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext(),i=t.$implicit,s=t.index,a=e.ɵɵnextContext();e.ɵɵclassMap(a.getItemProp(i,"styleClass")),e.ɵɵproperty("ngStyle",a.getItemProp(i,"style"))("ngClass",a.getItemClass(i))("tooltipOptions",a.getItemProp(i,"tooltipOptions")),e.ɵɵattribute("id",a.getItemId(i))("data-pc-section","menuitem")("data-p-highlight",a.isItemActive(i))("data-p-focused",a.isItemFocused(i))("data-p-disabled",a.isItemDisabled(i))("aria-label",a.getItemLabel(i))("aria-disabled",a.isItemDisabled(i)||void 0)("aria-haspopup",a.isItemGroup(i)&&!a.getItemProp(i,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(i)?a.isItemActive(i):void 0)("aria-level",a.level+1)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(s)),e.ɵɵadvance(2),e.ɵɵattribute("data-pc-section","content"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!a.itemTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.itemTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.isItemVisible(i)&&a.isItemGroup(i))}}function Fe(n,o){if(n&1&&e.ɵɵtemplate(0,te,1,5,"li",3)(1,Ee,6,21,"li",4),n&2){let t=o.$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngIf",i.isItemVisible(t)&&i.getItemProp(t,"separator")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",i.isItemVisible(t)&&!i.getItemProp(t,"separator"))}}var Ae=(n,o)=>({"p-submenu-list":n,"p-menubar-root-list":o}),De=["menubutton"],Ke=["rootmenu"];function Ve(n,o){n&1&&e.ɵɵelementContainer(0)}function Oe(n,o){if(n&1&&(e.ɵɵelementStart(0,"div",7),e.ɵɵtemplate(1,Ve,1,0,"ng-container",8),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.startTemplate)}}function Re(n,o){n&1&&e.ɵɵelement(0,"BarsIcon")}function Be(n,o){}function $e(n,o){n&1&&e.ɵɵtemplate(0,Be,0,0,"ng-template")}function He(n,o){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"a",9,10),e.ɵɵlistener("click",function(s){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.menuButtonClick(s))})("keydown",function(s){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.menuButtonKeydown(s))}),e.ɵɵtemplate(2,Re,1,0,"BarsIcon",11)(3,$e,1,0,null,8),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext();e.ɵɵattribute("aria-haspopup",!!(t.model.length&&t.model.length>0))("aria-expanded",t.mobileActive)("aria-controls",t.id)("aria-label",t.config.translation.aria.navigation)("data-pc-section","button"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.menuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.menuIconTemplate)}}function Ne(n,o){n&1&&e.ɵɵelementContainer(0)}function je(n,o){if(n&1&&(e.ɵɵelementStart(0,"div",12),e.ɵɵtemplate(1,Ne,1,0,"ng-container",8),e.ɵɵelementEnd()),n&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.endTemplate)}}function ze(n,o){n&1&&(e.ɵɵelementStart(0,"div",12),e.ɵɵprojection(1),e.ɵɵelementEnd())}var Ze=n=>({"p-menubar p-component":!0,"p-menubar-mobile-active":n}),Ge=["*"],C=(()=>{class n{autoHide;autoHideDelay;mouseLeaves=new W;mouseLeft$=this.mouseLeaves.pipe(X(()=>J(this.autoHideDelay)),Y(t=>this.autoHide&&t));static ɵfac=function(i){return new(i||n)};static ɵprov=e.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}return n})(),Qe=(()=>{class n{el;renderer;cd;menubarService;items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;submenuIconTemplate;itemClick=new I;itemMouseEnter=new I;menuFocus=new I;menuBlur=new I;menuKeydown=new I;menubarViewChild;mouseLeaveSubscriber;constructor(t,i,s,a){this.el=t,this.renderer=i,this.cd=s,this.menubarService=a}ngOnInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(t,i){this.getItemProp(i,"command",{originalEvent:t,item:i.item}),this.itemClick.emit({originalEvent:t,processedItem:i,isFocus:!0})}getItemProp(t,i,s=null){return t&&t.item?m.getItemValue(t.item[i],s):void 0}getItemId(t){return t.item&&t.item?.id?t.item.id:`${this.menuId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemClass(t){return x(b({},this.getItemProp(t,"class")),{"p-menuitem":!0,"p-highlight":this.isItemActive(t),"p-menuitem-active":this.isItemActive(t),"p-focus":this.isItemFocused(t),"p-disabled":this.isItemDisabled(t)})}getItemLabel(t){return this.getItemProp(t,"label")}getSeparatorItemClass(t){return x(b({},this.getItemProp(t,"class")),{"p-menuitem-separator":!0})}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemActive(t){if(this.activeItemPath)return this.activeItemPath.some(i=>i.key===t.key)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return m.isNotEmpty(t.items)}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(t){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:i,processedItem:s}=t;this.itemMouseEnter.emit({originalEvent:i,processedItem:s})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static ɵfac=function(i){return new(i||n)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(C))};static ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["p-menubarSub"]],viewQuery:function(i,s){if(i&1&&e.ɵɵviewQuery(ee,7),i&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(s.menubarViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{items:"items",itemTemplate:"itemTemplate",root:"root",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",mobileActive:"mobileActive",autoDisplay:"autoDisplay",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:"level",focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",submenuIconTemplate:"submenuIconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},decls:3,vars:11,consts:[["role","menubar",3,"ngClass","tabindex","focus","blur","keydown"],["menubar",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],["listItem",""],[1,"p-menuitem-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["htmlRouteLabel",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","itemClick","itemMouseEnter"]],template:function(i,s){i&1&&(e.ɵɵelementStart(0,"ul",0,1),e.ɵɵlistener("focus",function(r){return s.menuFocus.emit(r)})("blur",function(r){return s.menuBlur.emit(r)})("keydown",function(r){return s.menuKeydown.emit(r)}),e.ɵɵtemplate(2,Fe,2,2,"ng-template",2),e.ɵɵelementEnd()),i&2&&(e.ɵɵproperty("ngClass",e.ɵɵpureFunction2(8,Ae,!s.root,s.root))("tabindex",0),e.ɵɵattribute("data-pc-section","menu")("aria-label",s.ariaLabel)("aria-labelledBy",s.ariaLabelledBy)("id",s.menuId)("aria-activedescendant",s.focusedItemId),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",s.items))},dependencies:()=>[l.NgClass,l.NgForOf,l.NgIf,l.NgTemplateOutlet,l.NgStyle,y.RouterLink,y.RouterLinkActive,K.Ripple,V.Tooltip,F,A,n],encapsulation:2})}return n})(),gt=(()=>{class n{document;platformId;el;renderer;cd;config;menubarService;set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new I;onBlur=new I;templates;menubutton;rootmenu;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;mobileActive;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=v([]);number=v(0);focusedItemInfo=v({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;get visibleItems(){let t=this.activeItemPath().find(i=>i.key===this.focusedItemInfo().parentKey);return t?t.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t.item&&t.item?.id?t.item.id:t.index!==-1?`${this.id}${m.isNotEmpty(t.parentKey)?"_"+t.parentKey:""}_${t.index}`:null}constructor(t,i,s,a,r,d,c){this.document=t,this.platformId=i,this.el=s,this.renderer=a,this.cd=r,this.config=d,this.menubarService=c,Z(()=>{let u=this.activeItemPath();m.isNotEmpty(u)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||U()}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this.startTemplate=t.template;break;case"end":this.endTemplate=t.template;break;case"menuicon":this.menuIconTemplate=t.template;break;case"submenuicon":this.submenuIconTemplate=t.template;break;case"item":this.itemTemplate=t.template;break;default:this.itemTemplate=t.template;break}})}createProcessedItems(t,i=0,s={},a=""){let r=[];return t&&t.forEach((d,c)=>{let u=(a!==""?a+"_":"")+c,_={item:d,index:c,level:i,key:u,parent:s,parentKey:a};_.items=this.createProcessedItems(d.items,i+1,_,u),r.push(_)}),r}getItemProp(t,i){return t?m.getItemValue(t[i]):void 0}menuButtonClick(t){this.toggle(t)}menuButtonKeydown(t){(t.code==="Enter"||t.code==="Space")&&this.menuButtonClick(t)}onItemClick(t){let{originalEvent:i,processedItem:s}=t,a=this.isProcessedItemGroup(s),r=m.isEmpty(s.parent);if(this.isSelected(s)){let{index:c,key:u,level:_,parentKey:h,item:g}=s;this.activeItemPath.set(this.activeItemPath().filter(f=>u!==f.key&&u.startsWith(f.key))),this.focusedItemInfo.set({index:c,level:_,parentKey:h,item:g}),this.dirty=!r,p.focus(this.rootmenu.menubarViewChild.nativeElement)}else if(a)this.onItemChange(t);else{let c=r?s:this.activeItemPath().find(u=>u.parentKey==="");this.hide(i),this.changeFocusedItemIndex(i,c?c.index:-1),this.mobileActive=!1,p.focus(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(t){p.isTouchDevice()||this.mobileActive||this.onItemChange(t)}changeFocusedItemIndex(t,i){let s=this.findVisibleItem(i);if(this.focusedItemInfo().index!==i){let a=this.focusedItemInfo();this.focusedItemInfo.set(x(b({},a),{item:s.item,index:i})),this.scrollInView()}}scrollInView(t=-1){let i=t!==-1?`${this.id}_${t}`:this.focusedItemId,s=p.findSingle(this.rootmenu.el.nativeElement,`li[id="${i}"]`);s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(t){let{processedItem:i,isFocus:s}=t;if(m.isEmpty(i))return;let{index:a,key:r,level:d,parentKey:c,items:u,item:_}=i,h=m.isNotEmpty(u),g=this.activeItemPath().filter(f=>f.parentKey!==c&&f.parentKey!==r);h&&g.push(i),this.focusedItemInfo.set({index:a,level:d,parentKey:c,item:_}),this.activeItemPath.set(g),h&&(this.dirty=!0),s&&p.focus(this.rootmenu.menubarViewChild.nativeElement)}toggle(t){this.mobileActive?(this.mobileActive=!1,w.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,w.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.cd.markForCheck(),this.bindOutsideClickListener(),t.preventDefault()}hide(t,i){this.mobileActive&&setTimeout(()=>{p.focus(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),i&&p.focus(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let t=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:t?.item}),p.focus(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(t){this.focused=!0;let i=this.findVisibleItem(this.findFirstFocusedItemIndex()),s=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:i?.item};this.focusedItemInfo.set(s),this.onFocus.emit(t)}onMenuBlur(t){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(t)}onKeyDown(t){let i=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&m.isPrintableCharacter(t.key)&&this.searchItems(t,t.key);break}}findVisibleItem(t){return m.isNotEmpty(this.visibleItems)?this.visibleItems[t]:null}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}isProcessedItemGroup(t){return t&&m.isNotEmpty(t.items)}isSelected(t){return this.activeItemPath().some(i=>i.key===t.key)}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&m.isNotEmpty(t.items)}searchItems(t,i){this.searchValue=(this.searchValue||"")+i;let s=-1,a=!1;return this.focusedItemInfo().index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):s+this.focusedItemInfo().index):s=this.visibleItems.findIndex(r=>this.isItemMatched(r)),s!==-1&&(a=!0),s===-1&&this.focusedItemInfo().index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(t,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}onArrowDownKey(t){let i=this.visibleItems[this.focusedItemInfo().index];if(i?m.isEmpty(i.parent):null)this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:t,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item}),this.onArrowRightKey(t));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,a),t.preventDefault()}}onArrowRightKey(t){let i=this.visibleItems[this.focusedItemInfo().index];if(i?this.activeItemPath().find(a=>a.key===i.parentKey):null)this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:t,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item}),this.onArrowDownKey(t));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,a),t.preventDefault()}}onArrowUpKey(t){let i=this.visibleItems[this.focusedItemInfo().index];if(m.isEmpty(i.parent)){if(this.isProccessedItemGroup(i)){this.onItemChange({originalEvent:t,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(t,r)}}else{let a=this.activeItemPath().find(r=>r.key===i.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:a?a.parentKey:"",item:i.item}),this.searchValue="",this.onArrowLeftKey(t);let r=this.activeItemPath().filter(d=>d.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,r)}}t.preventDefault()}onArrowLeftKey(t){let i=this.visibleItems[this.focusedItemInfo().index],s=i?this.activeItemPath().find(a=>a.key===i.parentKey):null;if(s){this.onItemChange({originalEvent:t,processedItem:s});let a=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),t.preventDefault()}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,a),t.preventDefault()}}onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()}onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}onEscapeKey(t){this.hide(t,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),t.preventDefault()}onTabKey(t){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:t,processedItem:i})}this.hide()}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let i=p.findSingle(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),s=i&&p.findSingle(i,"a[data-pc-section=\"action\"]");s?s.click():i&&i.click();let a=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(a)&&(this.focusedItemInfo().index=this.findFirstFocusedItemIndex())}t.preventDefault()}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return m.findLastIndex(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let i=t>0?m.findLastIndex(this.visibleItems.slice(0,t),s=>this.isValidItem(s)):-1;return i>-1?i:t}findNextItemIndex(t){let i=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(s=>this.isValidItem(s)):-1;return i>-1?i+t+1:t}bindResizeListener(){P(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{p.isTouchDevice()||this.hide(t,!0),this.mobileActive=!1})))}bindOutsideClickListener(){P(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{let i=this.rootmenu.el.nativeElement!==t.target&&!this.rootmenu.el.nativeElement.contains(t.target),s=this.mobileActive&&this.menubutton.nativeElement!==t.target&&!this.menubutton.nativeElement.contains(t.target);i&&(s?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener()}static ɵfac=function(i){return new(i||n)(e.ɵɵdirectiveInject(j),e.ɵɵdirectiveInject(G),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(E.PrimeNGConfig),e.ɵɵdirectiveInject(C))};static ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["p-menubar"]],contentQueries:function(i,s,a){if(i&1&&e.ɵɵcontentQuery(a,Q,4),i&2){let r;e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(s.templates=r)}},viewQuery:function(i,s){if(i&1&&(e.ɵɵviewQuery(De,5),e.ɵɵviewQuery(Ke,5)),i&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(s.menubutton=a.first),e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(s.rootmenu=a.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",autoDisplay:"autoDisplay",autoHide:"autoHide",autoHideDelay:"autoHideDelay",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[e.ɵɵProvidersFeature([C])],ngContentSelectors:Ge,decls:8,vars:25,consts:[[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuIconTemplate","activeItemPath","itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter"],["rootmenu",""],["class","p-menubar-end",4,"ngIf","ngIfElse"],["legacy",""],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],["menubutton",""],[4,"ngIf"],[1,"p-menubar-end"]],template:function(i,s){if(i&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"div",0),e.ɵɵtemplate(1,Oe,2,1,"div",1)(2,He,4,7,"a",2),e.ɵɵelementStart(3,"p-menubarSub",3,4),e.ɵɵlistener("itemClick",function(r){return s.onItemClick(r)})("menuFocus",function(r){return s.onMenuFocus(r)})("menuBlur",function(r){return s.onMenuBlur(r)})("menuKeydown",function(r){return s.onKeyDown(r)})("itemMouseEnter",function(r){return s.onItemMouseEnter(r)}),e.ɵɵelementEnd(),e.ɵɵtemplate(5,je,2,1,"div",5)(6,ze,2,0,"ng-template",null,6,e.ɵɵtemplateRefExtractor),e.ɵɵelementEnd()),i&2){let a=e.ɵɵreference(7);e.ɵɵclassMap(s.styleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(23,Ze,s.mobileActive))("ngStyle",s.style),e.ɵɵattribute("data-pc-section","root")("data-pc-name","menubar"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.startTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",s.model&&s.model.length>0),e.ɵɵadvance(1),e.ɵɵproperty("items",s.processedItems)("itemTemplate",s.itemTemplate)("menuId",s.id)("root",!0)("baseZIndex",s.baseZIndex)("autoZIndex",s.autoZIndex)("mobileActive",s.mobileActive)("autoDisplay",s.autoDisplay)("ariaLabel",s.ariaLabel)("ariaLabelledBy",s.ariaLabelledBy)("focusedItemId",s.focused?s.focusedItemId:void 0)("submenuIconTemplate",s.submenuIconTemplate)("activeItemPath",s.activeItemPath()),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",s.endTemplate)("ngIfElse",a)}},dependencies:()=>[l.NgClass,l.NgIf,l.NgTemplateOutlet,l.NgStyle,D,Qe],styles:[`@layer primeng{.p-menubar{display:flex;align-items:center}.p-menubar ul{margin:0;padding:0;list-style:none}.p-menubar .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:2}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-menubar .p-menubar-root-list .p-icon-wrapper,.p-menubar .p-submenu-list .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{margin-left:auto;align-self:center}.p-menubar-button{display:none;cursor:pointer;align-items:center;justify-content:center}}
`],encapsulation:2,changeDetection:0})}return n})(),bt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=e.ɵɵdefineNgModule({type:n});static ɵinj=e.ɵɵdefineInjector({imports:[z,k,q,M,L,D,F,A,k,M,L]})}return n})();export{gt as Menubar,bt as MenubarModule,C as MenubarService,Qe as MenubarSub};