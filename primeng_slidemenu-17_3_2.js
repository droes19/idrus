var H=Object.defineProperty,N=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var S=(s,o,t)=>o in s?H(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,p=(s,o)=>{for(var t in o||={})B.call(o,t)&&S(s,t,o[t]);if(w)for(var t of w(o))Z.call(o,t)&&S(s,t,o[t]);return s},h=(s,o)=>N(s,z(o));import{style as k,animate as L,transition as M,trigger as W}from"@angular/animations";import*as u from"@angular/common";import{DOCUMENT as D,isPlatformBrowser as P,CommonModule as Q}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as _,forwardRef as j,signal as y,effect as q,PLATFORM_ID as G}from"@angular/core";import*as g from"@angular/router";import{RouterModule as T}from"@angular/router";import*as b from"primeng/api";import{PrimeTemplate as U,SharedModule as E}from"primeng/api";import{DomHandler as c}from"primeng/dom";import{AngleRightIcon as A}from"primeng/icons/angleright";import*as O from"primeng/ripple";import{RippleModule as Y}from"primeng/ripple";import*as F from"primeng/tooltip";import{TooltipModule as V}from"primeng/tooltip";import{ObjectUtils as m,UniqueComponentId as J,ZIndexUtils as v}from"primeng/utils";import{CaretLeftIcon as K}from"primeng/icons/caretleft";var X=["sublist"];function ee(s,o){if(s&1&&e.ɵɵelement(0,"li",5),s&2){let t=e.ɵɵnextContext().$implicit,i=e.ɵɵnextContext();e.ɵɵstyleMap(i.getItemProp(t,"style")),e.ɵɵproperty("id",i.getItemId(t))("ngClass",i.getSeparatorItemClass(t)),e.ɵɵattribute("data-pc-section","separator")}}function te(s,o){if(s&1&&e.ɵɵelement(0,"span",18),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"icon"))("ngStyle",i.getItemProp(t,"iconStyle")),e.ɵɵattribute("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function ie(s,o){if(s&1&&(e.ɵɵelementStart(0,"span",19),e.ɵɵtext(1),e.ɵɵelementEnd()),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵattribute("data-pc-section","label"),e.ɵɵadvance(1),e.ɵɵtextInterpolate1(" ",i.getItemLabel(t)," ")}}function ne(s,o){if(s&1&&e.ɵɵelement(0,"span",20),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",i.getItemLabel(t),e.ɵɵsanitizeHtml),e.ɵɵattribute("data-pc-section","label")}}function se(s,o){if(s&1&&(e.ɵɵelementStart(0,"span",21),e.ɵɵtext(1),e.ɵɵelementEnd()),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(i.getItemProp(t,"badge"))}}function ae(s,o){s&1&&e.ɵɵelement(0,"AngleRightIcon",24),s&2&&(e.ɵɵproperty("styleClass","p-submenu-icon"),e.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function oe(s,o){}function re(s,o){s&1&&e.ɵɵtemplate(0,oe,0,0,"ng-template"),s&2&&e.ɵɵproperty("data-pc-section","submenuicon")("aria-hidden",!0)}function le(s,o){if(s&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,ae,1,3,"AngleRightIcon",22)(2,re,1,2,null,23),e.ɵɵelementContainerEnd()),s&2){let t=e.ɵɵnextContext(4);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.slideMenu.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.slideMenu.submenuIconTemplate)}}var R=s=>({"p-menuitem-link":!0,"p-disabled":s});function de(s,o){if(s&1&&(e.ɵɵelementStart(0,"a",12),e.ɵɵtemplate(1,te,1,5,"span",13)(2,ie,2,2,"span",14)(3,ne,1,2,"ng-template",null,15,e.ɵɵtemplateRefExtractor)(5,se,2,2,"span",16)(6,le,3,2,"ng-container",17),e.ɵɵelementEnd()),s&2){let t=e.ɵɵreference(4),i=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("target",n.getItemProp(i,"target"))("ngClass",e.ɵɵpureFunction1(12,R,n.getItemProp(i,"disabled"))),e.ɵɵattribute("href",n.getItemProp(i,"url"),e.ɵɵsanitizeUrl)("aria-hidden",!0)("data-automationid",n.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.getItemProp(i,"icon")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.getItemProp(i,"escape"))("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.getItemProp(i,"badge")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemGroup(i))}}function ce(s,o){if(s&1&&e.ɵɵelement(0,"span",18),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"icon"))("ngStyle",i.getItemProp(t,"iconStyle")),e.ɵɵattribute("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function me(s,o){if(s&1&&(e.ɵɵelementStart(0,"span",19),e.ɵɵtext(1),e.ɵɵelementEnd()),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵattribute("data-pc-section","label"),e.ɵɵadvance(1),e.ɵɵtextInterpolate1(" ",i.getItemLabel(t)," ")}}function ue(s,o){if(s&1&&e.ɵɵelement(0,"span",20),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",i.getItemLabel(t),e.ɵɵsanitizeHtml),e.ɵɵattribute("data-pc-section","label")}}function pe(s,o){if(s&1&&(e.ɵɵelementStart(0,"span",21),e.ɵɵtext(1),e.ɵɵelementEnd()),s&2){let t=e.ɵɵnextContext(3).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngClass",i.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(i.getItemProp(t,"badge"))}}function he(s,o){s&1&&e.ɵɵelement(0,"AngleRightIcon",24),s&2&&(e.ɵɵproperty("styleClass","p-submenu-icon"),e.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function Ie(s,o){}function fe(s,o){s&1&&e.ɵɵtemplate(0,Ie,0,0,"ng-template"),s&2&&e.ɵɵproperty("data-pc-section","submenuicon")("aria-hidden",!0)}function _e(s,o){if(s&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,he,1,3,"AngleRightIcon",22)(2,fe,1,2,null,23),e.ɵɵelementContainerEnd()),s&2){let t=e.ɵɵnextContext(4);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.slideMenu.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.slideMenu.submenuIconTemplate)}}var ge=()=>({exact:!1});function be(s,o){if(s&1&&(e.ɵɵelementStart(0,"a",25),e.ɵɵtemplate(1,ce,1,5,"span",13)(2,me,2,2,"span",14)(3,ue,1,2,"ng-template",null,15,e.ɵɵtemplateRefExtractor)(5,pe,2,2,"span",16)(6,_e,3,2,"ng-container",17),e.ɵɵelementEnd()),s&2){let t=e.ɵɵreference(4),i=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||e.ɵɵpureFunction0(21,ge))("target",n.getItemProp(i,"target"))("ngClass",e.ɵɵpureFunction1(22,R,n.getItemProp(i,"disabled")))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),e.ɵɵattribute("data-automationid",n.getItemProp(i,"automationId"))("tabindex",-1)("aria-hidden",!0)("data-pc-section","action"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.getItemProp(i,"icon")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.getItemProp(i,"escape"))("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.getItemProp(i,"badge")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemGroup(i))}}function ye(s,o){if(s&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"p-slideMenuSub",26),e.ɵɵlistener("itemClick",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext(3);return e.ɵɵresetView(a.itemClick.emit(n))})("itemMouseEnter",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext(3);return e.ɵɵresetView(a.itemMouseEnter.emit(n))}),e.ɵɵelementEnd()}if(s&2){let t=e.ɵɵnextContext(2).$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("items",t.items)("autoDisplay",i.autoDisplay)("menuId",i.menuId)("activeItemPath",i.activeItemPath)("focusedItemId",i.focusedItemId)("level",i.level+1)("menuWidth",i.menuWidth)}}function ve(s,o){if(s&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"li",6,7)(2,"div",8),e.ɵɵlistener("click",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext().$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.onItemClick(n,a))})("mouseenter",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext().$implicit,r=e.ɵɵnextContext();return e.ɵɵresetView(r.itemMouseEnter.emit({originalEvent:n,processedItem:a}))}),e.ɵɵtemplate(3,de,7,14,"a",9)(4,be,7,24,"a",10),e.ɵɵelementEnd(),e.ɵɵtemplate(5,ye,1,7,"p-slideMenuSub",11),e.ɵɵelementEnd()}if(s&2){let t=e.ɵɵnextContext(),i=t.$implicit,n=t.index,a=e.ɵɵnextContext();e.ɵɵclassMap(a.getItemProp(i,"styleClass")),e.ɵɵproperty("id",a.getItemId(i))("ngStyle",a.getItemProp(i,"style"))("ngClass",a.getItemClass(i))("tooltipOptions",a.getItemProp(i,"tooltipOptions")),e.ɵɵattribute("data-pc-section","menuitem")("data-p-highlight",a.isItemActive(i))("data-p-focused",a.isItemFocused(i))("data-p-disabled",a.isItemDisabled(i))("aria-label",a.getItemLabel(i))("aria-disabled",a.isItemDisabled(i)||void 0)("aria-haspopup",a.isItemGroup(i)&&!a.getItemProp(i,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(i)?a.isItemActive(i):void 0)("aria-level",a.level+1)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(n)),e.ɵɵadvance(2),e.ɵɵattribute("data-pc-section","content"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!a.getItemProp(i,"routerLink")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.getItemProp(i,"routerLink")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.isItemVisible(i)&&a.isItemGroup(i))}}function xe(s,o){if(s&1&&e.ɵɵtemplate(0,ee,1,5,"li",3)(1,ve,6,21,"li",4),s&2){let t=o.$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("ngIf",i.isItemVisible(t)&&i.getItemProp(t,"separator")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",i.isItemVisible(t)&&!i.getItemProp(t,"separator"))}}var Ce=(s,o,t)=>({"p-submenu-list":s,"p-slidemenu-root-list":o,"p-active-submenu":t}),we=["rootmenu"],Se=["container"],ke=["backward"],Le=["slideMenuContent"],Me=()=>({"vertical-align":"middle"});function Pe(s,o){s&1&&e.ɵɵelement(0,"CaretLeftIcon",12),s&2&&e.ɵɵproperty("styleClass","p-slidemenu-backward-icon")("ngStyle",e.ɵɵpureFunction0(2,Me))}function Te(s,o){}function Ee(s,o){s&1&&e.ɵɵtemplate(0,Te,0,0,"ng-template")}var Ve=s=>({"p-slidemenu p-component":!0,"p-slidemenu-overlay":s}),De=(s,o)=>({showTransitionParams:s,hideTransitionParams:o}),Ae=s=>({value:"visible",params:s});function Oe(s,o){if(s&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",1,2),e.ɵɵlistener("click",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onOverlayClick(n))})("@overlayAnimation.start",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onOverlayAnimationEnd(n))}),e.ɵɵelementStart(2,"div",3)(3,"div",4,5),e.ɵɵlistener("focus",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵreference(4),r=e.ɵɵnextContext();return e.ɵɵresetView(r.logFocus(n,a))}),e.ɵɵelementStart(5,"p-slideMenuSub",6,7),e.ɵɵlistener("itemClick",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onItemClick(n))})("menuFocus",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onMenuFocus(n))})("menuKeydown",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onKeyDown(n))})("itemMouseEnter",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onItemMouseEnter(n))}),e.ɵɵelementEnd()(),e.ɵɵelementStart(7,"a",8,9),e.ɵɵlistener("click",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.goBack(n))})("keydown",function(n){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext();return e.ɵɵresetView(a.onNavigationKeyDown(n))}),e.ɵɵtemplate(9,Pe,1,3,"CaretLeftIcon",10)(10,Ee,1,0,null,11),e.ɵɵelementStart(11,"span"),e.ɵɵtext(12),e.ɵɵelementEnd()()()()}if(s&2){let t=e.ɵɵnextContext();e.ɵɵclassMap(t.styleClass),e.ɵɵproperty("id",t.id)("ngClass",e.ɵɵpureFunction1(34,Ve,t.popup))("ngStyle",t.style)("@overlayAnimation",e.ɵɵpureFunction1(39,Ae,e.ɵɵpureFunction2(36,De,t.showTransitionOptions,t.hideTransitionOptions)))("@.disabled",t.popup!==!0),e.ɵɵattribute("data-pc-section","root")("data-pc-name","slidemenu"),e.ɵɵadvance(2),e.ɵɵstyleProp("height",t.left?t.viewportHeight+"px":"auto")("width",t.menuWidth+"px"),e.ɵɵadvance(3),e.ɵɵproperty("root",!0)("items",t.processedItems)("menuId",t.id)("tabindex",t.disabled?-1:t.tabindex)("ariaLabel",t.ariaLabel)("ariaLabelledBy",t.ariaLabelledBy)("baseZIndex",t.baseZIndex)("autoZIndex",t.autoZIndex)("autoDisplay",t.autoDisplay)("menuWidth",t.menuWidth)("popup",t.popup)("effectDuration",t.effectDuration)("easing",t.easing)("focusedItemId",t.focused?t.focusedItemId:void 0)("activeItemPath",t.activeItemPath()),e.ɵɵadvance(2),e.ɵɵstyleProp("display",t.left?"block":"none"),e.ɵɵattribute("data-pc-section","navigation"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.backIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.backIconTemplate),e.ɵɵadvance(2),e.ɵɵtextInterpolate(t.backLabel)}}var Fe=(()=>{class s{document;el;renderer;cd;slideMenu;items;menuWidth;root=!1;easing="ease-out";effectDuration;autoDisplay;autoZIndex=!0;baseZIndex=0;popup;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;tabindex=0;itemClick=new _;itemMouseEnter=new _;menuFocus=new _;menuBlur=new _;menuKeydown=new _;sublistViewChild;get isActive(){return-this.slideMenu.left==this.level*this.menuWidth}constructor(t,i,n,a,r){this.document=t,this.el=i,this.renderer=n,this.cd=a,this.slideMenu=r}getItemProp(t,i,n=null){return t&&t.item?m.getItemValue(t.item[i],n):void 0}getItemId(t){return t.item&&t.item?.id?t.item.id:`${this.menuId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemClass(t){return h(p({},this.getItemProp(t,"class")),{"p-menuitem":!0,"p-menuitem-active":this.isItemActive(t),"p-focus":this.isItemFocused(t),"p-disabled":this.isItemDisabled(t)})}getItemLabel(t){return this.getItemProp(t,"label")}getSeparatorItemClass(t){return h(p({},this.getItemProp(t,"class")),{"p-menuitem-separator":!0})}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemActive(t){if(this.activeItemPath)return this.activeItemPath.some(i=>i.key===t.key)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return m.isNotEmpty(t.items)}onItemClick(t,i){this.getItemProp(i,"command",{originalEvent:t,item:i.item}),this.itemClick.emit({originalEvent:t,processedItem:i,isFocus:!0}),t.preventDefault()}onMenuKeyDown(t){this.menuKeydown.emit(t)}static ɵfac=function(i){return new(i||s)(e.ɵɵdirectiveInject(D),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(j(()=>Ke)))};static ɵcmp=e.ɵɵdefineComponent({type:s,selectors:[["p-slideMenuSub"]],viewQuery:function(i,n){if(i&1&&e.ɵɵviewQuery(X,7),i&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(n.sublistViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{items:"items",menuWidth:"menuWidth",root:"root",easing:"easing",effectDuration:"effectDuration",autoDisplay:"autoDisplay",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",popup:"popup",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:"level",focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",tabindex:"tabindex"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},decls:3,vars:24,consts:[["role","menu",3,"ngClass","id","tabindex","keydown","focusin"],["sublist",""],["ngFor","",3,"ngForOf"],["role","separator",3,"id","style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"id","ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"id","ngClass"],["role","menuitem","pTooltip","",3,"id","ngStyle","ngClass","tooltipOptions"],["listItem",""],[1,"p-menuitem-content",3,"click","mouseenter"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-submenu",3,"items","autoDisplay","menuId","activeItemPath","focusedItemId","level","menuWidth","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[1,"p-submenu",3,"items","autoDisplay","menuId","activeItemPath","focusedItemId","level","menuWidth","itemClick","itemMouseEnter"]],template:function(i,n){i&1&&(e.ɵɵelementStart(0,"ul",0,1),e.ɵɵlistener("keydown",function(r){return n.menuKeydown.emit(r)})("focusin",function(r){return n.menuFocus.emit(r)}),e.ɵɵtemplate(2,xe,2,2,"ng-template",2),e.ɵɵelementEnd()),i&2&&(e.ɵɵstyleProp("width",n.menuWidth,"px")("left",n.root?n.slideMenu.left:n.slideMenu.menuWidth,"px")("transition-property",n.root?"left":"none")("transition-duration",n.effectDuration+"ms")("transition-timing-function",n.easing),e.ɵɵproperty("ngClass",e.ɵɵpureFunction3(20,Ce,!n.root,n.root,n.isActive))("id",n.menuId+"_list")("tabindex",n.tabindex),e.ɵɵattribute("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("aria-aria-activedescendant",n.focusedItemId)("aria-orientation","vertical")("data-pc-section","menu")("data-pc-state",n.isActive?"active":"inactive"),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",n.items))},dependencies:()=>[u.NgClass,u.NgForOf,u.NgIf,u.NgTemplateOutlet,u.NgStyle,g.RouterLink,g.RouterLinkActive,O.Ripple,F.Tooltip,A,s],encapsulation:2})}return s})(),Ke=(()=>{class s{document;platformId;el;renderer;cd;config;overlayService;set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}menuWidth=190;viewportHeight=180;effectDuration=250;easing="ease-out";backLabel="Back";disabled=!1;tabindex=0;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";id;ariaLabel;ariaLabelledBy;onShow=new _;onHide=new _;templates;rootmenu;containerViewChild;set backward(t){this.backwardViewChild=t}slideMenuContentViewChild;submenuIconTemplate;backIconTemplate;outsideClickListener;resizeListener;transitionEndListener;transitionStartListener;backwardViewChild;transition=!1;left=0;animating=!1;target;visible;relativeAlign;window;focused=!1;activeItemPath=y([]);focusedItemInfo=y({index:-1,level:0,parentKey:""});searchValue="";searchTimeout;_processedItems;_model;container;itemClick=!1;get visibleItems(){let t=this.activeItemPath().find(i=>i.key===this.focusedItemInfo().parentKey);return t?t.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t.item&&t.item?.id?t.item.id:t.index!==-1?`${this.id}${m.isNotEmpty(t.parentKey)?"_"+t.parentKey:""}_${t.index}`:null}constructor(t,i,n,a,r,d,l){this.document=t,this.platformId=i,this.el=n,this.renderer=a,this.cd=r,this.config=d,this.overlayService=l,this.window=this.document.defaultView,q(()=>{let I=this.activeItemPath();this.popup&&(m.isNotEmpty(I)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))})}documentFocusListener;ngOnInit(){this.id=this.id||J()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"backicon":this.backIconTemplate=t.template;break;case"submenuicon":this.submenuIconTemplate=t.template;break}})}createProcessedItems(t,i=0,n={},a=""){let r=[];return t&&t.forEach((d,l)=>{let I=(a!==""?a+"_":"")+l,f={item:d,index:l,level:i,key:I,parent:n,parentKey:a};f.items=this.createProcessedItems(d.items,i+1,f,I),r.push(f)}),r}getItemProp(t,i){return t?m.getItemValue(t[i]):void 0}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isProcessedItemGroup(t){return t&&m.isNotEmpty(t.items)}isSelected(t){return this.activeItemPath().some(i=>i.key===t.key)}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&m.isNotEmpty(t.items)}onOverlayClick(t){this.popup&&this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}goBack(t){this.animate("left"),t.stopPropagation(),t.preventDefault()}onItemClick(t){if(!this.transition){this.itemClick||(this.itemClick=!0,this.onMenuFocus());let{originalEvent:i,processedItem:n}=t,a=this.isProcessedItemGroup(n),r=this.focusedItemInfo();a?(this.focusedItemInfo.set(h(p({},r),{index:-1,level:r.level+1,parentKey:n.key,item:n.item})),this.animate("right")):(this.onItemChange(t),this.popup&&this.hide())}}onItemMouseEnter(t){this.onItemChange(t)}onKeyDown(t){if(!this.transition){let i=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&m.isPrintableCharacter(t.key)&&this.searchItems(t,t.key);break}}}onNavigationKeyDown(t){switch(t.code){case"Enter":case"Space":this.onArrowLeftKey(t);let i=this.focusedItemInfo();this.focusedItemInfo.set(h(p({},i),{index:-1,item:null}));break;default:break}}animate(t){switch(t){case"right":this.left-=this.menuWidth;break;case"left":this.left+=this.menuWidth;break;default:break}this.animating=!0,setTimeout(()=>this.animating=!1,this.effectDuration)}onArrowDownKey(t){let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}onArrowRightKey(t){let i=this.focusedItemInfo();i.index===-1&&(i.index=0);let n=this.visibleItems[this.focusedItemInfo().index];if(this.isProccessedItemGroup(n)){let{index:r,level:d,key:l,item:I}=n;this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:0,level:d,parentKey:l}),this.searchValue="",this.animate("right")}t.preventDefault()}onArrowUpKey(t){if(t.altKey){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:t,processedItem:i})}this.popup&&this.hide(t,!0),t.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}}onArrowLeftKey(t){let i=this.focusedItemInfo();i.index===-1&&(i.index=0);let n=this.visibleItems[i.index],a=this.activeItemPath().find(l=>l.key===n.parentKey);if(!m.isEmpty(n.parent)){let{level:l,index:I,parentKey:f}=a;this.focusedItemInfo.set({index:I,level:l,parentKey:f,item:a.item}),this.searchValue=""}let d=this.activeItemPath().filter(l=>l.parentKey!==i.parentKey);this.activeItemPath.set(d),a&&this.animate("left"),t.preventDefault()}onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()}onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}onEscapeKey(t){if(this.popup){this.hide(t,!0);let i=this.focusedItemInfo();this.focusedItemInfo.set(h(p({},i),{index:this.findLastFocusedItemIndex(),item:null})),t.preventDefault()}}onTabKey(t){this.backwardViewChild.nativeElement.style.display!=="none"&&this.backwardViewChild.nativeElement.focus(),this.popup&&!this.containerViewChild.nativeElement.contains(t.target)&&this.hide(),t.preventDefault()}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];if(this.isProccessedItemGroup(i))this.onArrowRightKey(t);else{let a=c.findSingle(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),r=a&&c.findSingle(a,"a[data-pc-section=\"action\"]");r?r.click():a&&a.click();let d=this.focusedItemInfo();this.focusedItemInfo.set(h(p({},d),{index:i.index,item:i.item}))}}t.preventDefault()}onItemChange(t){let{processedItem:i,isFocus:n}=t;if(m.isEmpty(i))return;let{index:a,key:r,level:d,parentKey:l,items:I,item:f}=i,$=m.isNotEmpty(I),x=this.activeItemPath().filter(C=>C.parentKey!==l&&C.parentKey!==r);$&&x.push(i),this.focusedItemInfo.set({index:a,level:d,parentKey:l,item:f}),this.activeItemPath.set(x),n&&c.focus(this.rootmenu.sublistViewChild.nativeElement)}onMenuFocus(){this.focused=!0,this.bindOutsideClickListener(),this.bindTransitionListeners(),!this.left&&this.focusedItemInfo().level>0&&this.focusedItemInfo.set({index:0,level:0,parentKey:"",item:this.findVisibleItem(0).item}),this.focusedItemInfo().index===-1&&this.left<0&&this.focusedItemInfo.set(h(p({},this.focusedItemInfo()),{index:0})),this.focusedItemInfo().index===-1&&!this.left&&this.focusedItemInfo.set({index:0,level:0,parentKey:"",item:this.findVisibleItem(0).item})}onMenuBlur(){this.focused=!1,this.popup&&this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.popup||this.focusedItemInfo.set(h(p({},this.focusedItemInfo()),{index:-1,item:null})),this.searchValue="",!this.popup&&this.unbindOutsideClickListener()}activeLevel=y(0);bindTransitionListeners(){this.transitionStartListener||(this.transitionStartListener=this.renderer.listen(this.rootmenu.sublistViewChild.nativeElement,"transitionstart",t=>{this.transition=!0,t.preventDefault()})),this.transitionEndListener||(this.transitionEndListener=this.renderer.listen(this.rootmenu.sublistViewChild.nativeElement,"transitionend",t=>{let i=c.findSingle(this.rootmenu.el.nativeElement,"ul[data-pc-state=\"active\"]"),n=c.getAttribute(i.firstElementChild,"aria-level")-1;if(this.activeLevel.set(n),!this.left)this.rootmenu.sublistViewChild.nativeElement.focus();else{let a=c.getAttribute(i.firstElementChild,"aria-level")-1;if(this.activeLevel.set(a),this.focusedItemInfo().level>this.activeLevel()){let r=this.activeItemPath().slice(0,this.activeItemPath().length-1),d=r[r.length-1];this.focusedItemInfo.set({index:-1,level:this.activeLevel(),parentKey:d.key}),this.activeItemPath.set(r)}}this.transition=!1,t.preventDefault()}))}unbindTransitionListeners(){this.transitionEndListener&&(this.transitionEndListener(),this.transitionEndListener=null),this.transitionStartListener&&(this.transitionStartListener(),this.transitionStartListener=null)}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.popup&&(this.container=t.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),c.focus(this.rootmenu.sublistViewChild.nativeElement),this.scrollInView());break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}alignOverlay(){this.relativeAlign?c.relativePosition(this.container,this.target):c.absolutePosition(this.container,this.target)}onOverlayAnimationEnd(t){switch(t.toState){case"void":v.clear(t.element);break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.containerViewChild.nativeElement):c.appendChild(this.container,this.appendTo))}restoreOverlayAppend(){this.containerViewChild&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&v.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(t,i){this.popup&&(this.onHide.emit({}),this.visible=!1),i&&c.focus(this.target||this.rootmenu.sublistViewChild.nativeElement)}toggle(t){this.visible?this.hide(t,!0):this.show(t)}show(t,i){this.popup&&(this.visible=!0,this.target=t.currentTarget),this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.popup||i&&c.focus(this.rootmenu.sublistViewChild.nativeElement),this.cd.markForCheck()}searchItems(t,i){this.searchValue=(this.searchValue||"")+i;let n=-1,a=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(a=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(t,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}findVisibleItem(t){return m.isNotEmpty(this.visibleItems)?this.visibleItems[t]:null}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return m.findLastIndex(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let i=t>0?m.findLastIndex(this.visibleItems.slice(0,t),n=>this.isValidItem(n)):-1;return i>-1?i:t}findNextItemIndex(t){let i=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+t+1:t}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}changeFocusedItemIndex(t,i){this.focusedItemInfo().index!==i&&(this.focusedItemInfo.set(h(p({},this.focusedItemInfo()),{index:i})),this.scrollInView())}scrollInView(t=-1){let i=t!==-1?`${this.id}_${t}`:this.focusedItemId,n=c.findSingle(this.rootmenu.el.nativeElement,`li[id="${i}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}bindResizeListener(){P(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{c.isTouchDevice()||this.hide(t,!0)})))}bindOutsideClickListener(){P(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{let i=this.containerViewChild&&!this.containerViewChild.nativeElement.contains(t.target),n=this.popup?!(this.target&&(this.target===t.target||this.target.contains(t.target))):!0;this.popup?i&&n&&(this.onMenuBlur(),this.hide()):i&&n&&this.focused&&this.onMenuBlur()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onOverlayHide(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.left=0,this.cd.destroyed||(this.target=null),this.container&&(this.container=null)}ngOnDestroy(){this.popup&&(this.container&&this.autoZIndex&&v.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.unbindTransitionListeners()}static ɵfac=function(i){return new(i||s)(e.ɵɵdirectiveInject(D),e.ɵɵdirectiveInject(G),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(b.PrimeNGConfig),e.ɵɵdirectiveInject(b.OverlayService))};static ɵcmp=e.ɵɵdefineComponent({type:s,selectors:[["p-slideMenu"]],contentQueries:function(i,n,a){if(i&1&&e.ɵɵcontentQuery(a,U,4),i&2){let r;e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(e.ɵɵviewQuery(we,5),e.ɵɵviewQuery(Se,5),e.ɵɵviewQuery(ke,5),e.ɵɵviewQuery(Le,5)),i&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(n.rootmenu=a.first),e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(n.containerViewChild=a.first),e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(n.backward=a.first),e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(n.slideMenuContentViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",menuWidth:"menuWidth",viewportHeight:"viewportHeight",effectDuration:"effectDuration",easing:"easing",backLabel:"backLabel",disabled:"disabled",tabindex:"tabindex",popup:"popup",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",autoDisplay:"autoDisplay",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onShow:"onShow",onHide:"onHide"},decls:1,vars:1,consts:[[3,"id","ngClass","class","ngStyle","click",4,"ngIf"],[3,"id","ngClass","ngStyle","click"],["container",""],[1,"p-slidemenu-wrapper"],[1,"p-slidemenu-content",3,"focus"],["slideMenuContent",""],[3,"root","items","menuId","tabindex","ariaLabel","ariaLabelledBy","baseZIndex","autoZIndex","autoDisplay","menuWidth","popup","effectDuration","easing","focusedItemId","activeItemPath","itemClick","menuFocus","menuKeydown","itemMouseEnter"],["rootmenu",""],["tabindex","0",1,"p-slidemenu-backward","p-menuitem-link",3,"click","keydown"],["backward",""],[3,"styleClass","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle"]],template:function(i,n){i&1&&e.ɵɵtemplate(0,Oe,13,41,"div",0),i&2&&e.ɵɵproperty("ngIf",!n.popup||n.visible)},dependencies:()=>[u.NgClass,u.NgIf,u.NgTemplateOutlet,u.NgStyle,K,Fe],styles:[`@layer primeng{.p-slidemenu .p-slidemenu-root-list{position:relative;top:0}.p-slidemenu-overlay{position:absolute;top:0;left:0}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu ul{margin:0;padding:0;list-style:none}.p-slidemenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative;height:100%}.p-slidemenu .p-menuitem-link:not(.p-slidemenu-backward){cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-slidemenu .p-menuitem-text{line-height:1}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-slidemenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-slidemenu .p-menuitem-active>p-slidemenusub>.p-submenu-list{display:block;left:100%;top:0}.p-slidemenu .p-menuitem-active>.p-menuitem-content>.p-submenu>.p-submenu-list{display:block}.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active),.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-menuitem-content>.p-submenu>.p-submenu-list{display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}.p-slidemenu-backward{position:absolute;bottom:0;width:100%;cursor:pointer;display:none}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}}
`],encapsulation:2,data:{animation:[W("overlayAnimation",[M(":enter",[k({opacity:0,transform:"scaleY(0.8)"}),L("{{showTransitionParams}}")]),M(":leave",[L("{{hideTransitionParams}}",k({opacity:0}))])])]},changeDetection:0})}return s})(),at=(()=>{class s{static ɵfac=function(i){return new(i||s)};static ɵmod=e.ɵɵdefineNgModule({type:s});static ɵinj=e.ɵɵdefineInjector({imports:[Q,T,Y,V,A,E,K,T,V,E]})}return s})();export{Ke as SlideMenu,at as SlideMenuModule,Fe as SlideMenuSub};