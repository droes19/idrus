var R=Object.defineProperty,H=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var S=(s,o,e)=>o in s?R(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,b=(s,o)=>{for(var e in o||={})B.call(o,e)&&S(s,e,o[e]);if(w)for(var e of w(o))z.call(o,e)&&S(s,e,o[e]);return s},x=(s,o)=>H(s,$(o));import{style as P,animate as M,transition as k,trigger as Z}from"@angular/animations";import*as d from"@angular/common";import{isPlatformBrowser as L,DOCUMENT as N,CommonModule as j}from"@angular/common";import*as t from"@angular/core";import{EventEmitter as I,forwardRef as G,signal as C,effect as Q,PLATFORM_ID as q}from"@angular/core";import*as y from"@angular/router";import{RouterModule as E}from"@angular/router";import*as v from"primeng/api";import{PrimeTemplate as U,SharedModule as V}from"primeng/api";import{DomHandler as l,ConnectedOverlayScrollHandler as W}from"primeng/dom";import{AngleRightIcon as F}from"primeng/icons/angleright";import*as A from"primeng/ripple";import{RippleModule as Y}from"primeng/ripple";import*as D from"primeng/tooltip";import{TooltipModule as O}from"primeng/tooltip";import{ObjectUtils as c,UniqueComponentId as J,ZIndexUtils as T}from"primeng/utils";var X=["sublist"];function ee(s,o){if(s&1&&t.ɵɵelement(0,"li",5),s&2){let e=t.ɵɵnextContext().$implicit,i=t.ɵɵnextContext();t.ɵɵstyleMap(i.getItemProp(e,"style")),t.ɵɵproperty("ngClass",i.getSeparatorItemClass(e)),t.ɵɵattribute("id",i.getItemId(e))("data-pc-section","separator")}}function te(s,o){if(s&1&&t.ɵɵelement(0,"span",18),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),t.ɵɵattribute("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function ie(s,o){if(s&1&&(t.ɵɵelementStart(0,"span",19),t.ɵɵtext(1),t.ɵɵelementEnd()),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵattribute("data-pc-section","label"),t.ɵɵadvance(1),t.ɵɵtextInterpolate1(" ",i.getItemLabel(e)," ")}}function ne(s,o){if(s&1&&t.ɵɵelement(0,"span",20),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("innerHTML",i.getItemLabel(e),t.ɵɵsanitizeHtml),t.ɵɵattribute("data-pc-section","label")}}function se(s,o){if(s&1&&(t.ɵɵelementStart(0,"span",21),t.ɵɵtext(1),t.ɵɵelementEnd()),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("ngClass",i.getItemProp(e,"badgeStyleClass")),t.ɵɵadvance(1),t.ɵɵtextInterpolate(i.getItemProp(e,"badge"))}}function re(s,o){s&1&&t.ɵɵelement(0,"AngleRightIcon",24),s&2&&(t.ɵɵproperty("styleClass","p-submenu-icon"),t.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function oe(s,o){}function ae(s,o){s&1&&t.ɵɵtemplate(0,oe,0,0,"ng-template"),s&2&&t.ɵɵproperty("data-pc-section","submenuicon")("aria-hidden",!0)}function le(s,o){if(s&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,re,1,3,"AngleRightIcon",22)(2,ae,1,2,null,23),t.ɵɵelementContainerEnd()),s&2){let e=t.ɵɵnextContext(5);t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!e.tieredMenu.submenuIconTemplate),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.tieredMenu.submenuIconTemplate)}}var K=s=>({"p-menuitem-link":!0,"p-disabled":s});function me(s,o){if(s&1&&(t.ɵɵelementStart(0,"a",13),t.ɵɵtemplate(1,te,1,5,"span",14)(2,ie,2,2,"span",15)(3,ne,1,2,"ng-template",null,16,t.ɵɵtemplateRefExtractor)(5,se,2,2,"span",17)(6,le,3,2,"ng-container",9),t.ɵɵelementEnd()),s&2){let e=t.ɵɵreference(4),i=t.ɵɵnextContext(3).$implicit,n=t.ɵɵnextContext();t.ɵɵproperty("target",n.getItemProp(i,"target"))("ngClass",t.ɵɵpureFunction1(12,K,n.getItemProp(i,"disabled"))),t.ɵɵattribute("href",n.getItemProp(i,"url"),t.ɵɵsanitizeUrl)("aria-hidden",!0)("data-automationid",n.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.getItemProp(i,"icon")),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),t.ɵɵadvance(3),t.ɵɵproperty("ngIf",n.getItemProp(i,"badge")),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.isItemGroup(i))}}function ce(s,o){if(s&1&&t.ɵɵelement(0,"span",18),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),t.ɵɵattribute("data-pc-section","icon")("aria-hidden",!0)("tabindex",-1)}}function de(s,o){if(s&1&&(t.ɵɵelementStart(0,"span",19),t.ɵɵtext(1),t.ɵɵelementEnd()),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵattribute("data-pc-section","label"),t.ɵɵadvance(1),t.ɵɵtextInterpolate1(" ",i.getItemLabel(e)," ")}}function ue(s,o){if(s&1&&t.ɵɵelement(0,"span",20),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("innerHTML",i.getItemLabel(e),t.ɵɵsanitizeHtml),t.ɵɵattribute("data-pc-section","label")}}function pe(s,o){if(s&1&&(t.ɵɵelementStart(0,"span",21),t.ɵɵtext(1),t.ɵɵelementEnd()),s&2){let e=t.ɵɵnextContext(4).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("ngClass",i.getItemProp(e,"badgeStyleClass")),t.ɵɵadvance(1),t.ɵɵtextInterpolate(i.getItemProp(e,"badge"))}}function _e(s,o){s&1&&t.ɵɵelement(0,"AngleRightIcon",24),s&2&&(t.ɵɵproperty("styleClass","p-submenu-icon"),t.ɵɵattribute("data-pc-section","submenuicon")("aria-hidden",!0))}function Ie(s,o){}function he(s,o){s&1&&t.ɵɵtemplate(0,Ie,0,0,"ng-template"),s&2&&t.ɵɵproperty("data-pc-section","submenuicon")("aria-hidden",!0)}function fe(s,o){if(s&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,_e,1,3,"AngleRightIcon",22)(2,he,1,2,null,23),t.ɵɵelementContainerEnd()),s&2){let e=t.ɵɵnextContext(5);t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!e.tieredMenu.submenuIconTemplate),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.tieredMenu.submenuIconTemplate)}}var ge=()=>({exact:!1});function be(s,o){if(s&1&&(t.ɵɵelementStart(0,"a",25),t.ɵɵtemplate(1,ce,1,5,"span",14)(2,de,2,2,"span",15)(3,ue,1,2,"ng-template",null,16,t.ɵɵtemplateRefExtractor)(5,pe,2,2,"span",17)(6,fe,3,2,"ng-container",9),t.ɵɵelementEnd()),s&2){let e=t.ɵɵreference(4),i=t.ɵɵnextContext(3).$implicit,n=t.ɵɵnextContext();t.ɵɵproperty("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||t.ɵɵpureFunction0(21,ge))("target",n.getItemProp(i,"target"))("ngClass",t.ɵɵpureFunction1(22,K,n.getItemProp(i,"disabled")))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),t.ɵɵattribute("data-automationid",n.getItemProp(i,"automationId"))("tabindex",-1)("aria-hidden",!0)("data-pc-section","action"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.getItemProp(i,"icon")),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),t.ɵɵadvance(3),t.ɵɵproperty("ngIf",n.getItemProp(i,"badge")),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",n.isItemGroup(i))}}function xe(s,o){if(s&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,me,7,14,"a",11)(2,be,7,24,"a",12),t.ɵɵelementContainerEnd()),s&2){let e=t.ɵɵnextContext(2).$implicit,i=t.ɵɵnextContext();t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!i.getItemProp(e,"routerLink")),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",i.getItemProp(e,"routerLink"))}}function ye(s,o){}function ve(s,o){s&1&&t.ɵɵtemplate(0,ye,0,0,"ng-template")}var Ce=(s,o)=>({$implicit:s,hasSubmenu:o});function Te(s,o){if(s&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,ve,1,0,null,26),t.ɵɵelementContainerEnd()),s&2){let e=t.ɵɵnextContext(2).$implicit,i=t.ɵɵnextContext();t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",t.ɵɵpureFunction2(2,Ce,e.item,i.getItemProp(e,"items")))}}function we(s,o){if(s&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"p-tieredMenuSub",27),t.ɵɵlistener("itemClick",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext(3);return t.ɵɵresetView(r.itemClick.emit(n))})("itemMouseEnter",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext(3);return t.ɵɵresetView(r.onItemMouseEnter(n))}),t.ɵɵelementEnd()}if(s&2){let e=t.ɵɵnextContext(2).$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("items",e.items)("itemTemplate",i.itemTemplate)("autoDisplay",i.autoDisplay)("menuId",i.menuId)("activeItemPath",i.activeItemPath)("focusedItemId",i.focusedItemId)("ariaLabelledBy",i.getItemId(e))("level",i.level+1)}}function Se(s,o){if(s&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"li",6,7)(2,"div",8),t.ɵɵlistener("click",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext().$implicit,a=t.ɵɵnextContext();return t.ɵɵresetView(a.onItemClick(n,r))})("mouseenter",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext().$implicit,a=t.ɵɵnextContext();return t.ɵɵresetView(a.onItemMouseEnter({$event:n,processedItem:r}))}),t.ɵɵtemplate(3,xe,3,2,"ng-container",9)(4,Te,2,5,"ng-container",9),t.ɵɵelementEnd(),t.ɵɵtemplate(5,we,1,8,"p-tieredMenuSub",10),t.ɵɵelementEnd()}if(s&2){let e=t.ɵɵnextContext(),i=e.$implicit,n=e.index,r=t.ɵɵnextContext();t.ɵɵclassMap(r.getItemProp(i,"styleClass")),t.ɵɵproperty("ngStyle",r.getItemProp(i,"style"))("ngClass",r.getItemClass(i))("tooltipOptions",r.getItemProp(i,"tooltipOptions")),t.ɵɵattribute("id",r.getItemId(i))("data-pc-section","menuitem")("data-p-highlight",r.isItemActive(i))("data-p-focused",r.isItemFocused(i))("data-p-disabled",r.isItemDisabled(i))("aria-label",r.getItemLabel(i))("aria-disabled",r.isItemDisabled(i)||void 0)("aria-haspopup",r.isItemGroup(i)&&!r.getItemProp(i,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(i)?r.isItemActive(i):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(n)),t.ɵɵadvance(2),t.ɵɵattribute("data-pc-section","content"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!r.itemTemplate),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",r.itemTemplate),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",r.isItemVisible(i)&&r.isItemGroup(i))}}function Pe(s,o){if(s&1&&t.ɵɵtemplate(0,ee,1,5,"li",3)(1,Se,6,21,"li",4),s&2){let e=o.$implicit,i=t.ɵɵnextContext();t.ɵɵproperty("ngIf",i.isItemVisible(e)&&i.getItemProp(e,"separator")),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",i.isItemVisible(e)&&!i.getItemProp(e,"separator"))}}var Me=(s,o)=>({"p-submenu-list":s,"p-tieredmenu-root-list":o}),ke=["rootmenu"],Le=["container"],Ee=s=>({"p-tieredmenu p-component":!0,"p-tieredmenu-overlay":s}),Ve=(s,o)=>({showTransitionParams:s,hideTransitionParams:o}),Oe=s=>({value:"visible",params:s});function Fe(s,o){if(s&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"div",1,2),t.ɵɵlistener("click",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onOverlayClick(n))})("@overlayAnimation.start",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onOverlayAnimationEnd(n))}),t.ɵɵelementStart(2,"p-tieredMenuSub",3,4),t.ɵɵlistener("itemClick",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onItemClick(n))})("menuFocus",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onMenuFocus(n))})("menuBlur",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onMenuBlur(n))})("menuKeydown",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onKeyDown(n))})("itemMouseEnter",function(n){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext();return t.ɵɵresetView(r.onItemMouseEnter(n))}),t.ɵɵelementEnd()()}if(s&2){let e=t.ɵɵnextContext();t.ɵɵclassMap(e.styleClass),t.ɵɵproperty("id",e.id)("ngClass",t.ɵɵpureFunction1(22,Ee,e.popup))("ngStyle",e.style)("@overlayAnimation",t.ɵɵpureFunction1(27,Oe,t.ɵɵpureFunction2(24,Ve,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),t.ɵɵattribute("data-pc-section","root")("data-pc-name","tieredmenu"),t.ɵɵadvance(2),t.ɵɵproperty("root",!0)("items",e.processedItems)("itemTemplate",e.itemTemplate)("menuId",e.id)("tabindex",e.disabled?-1:e.tabindex)("ariaLabel",e.ariaLabel)("ariaLabelledBy",e.ariaLabelledBy)("baseZIndex",e.baseZIndex)("autoZIndex",e.autoZIndex)("autoDisplay",e.autoDisplay)("popup",e.popup)("focusedItemId",e.focused?e.focusedItemId:void 0)("activeItemPath",e.activeItemPath())}}var Ae=(()=>{class s{el;renderer;cd;tieredMenu;items;itemTemplate;root=!1;autoDisplay;autoZIndex=!0;baseZIndex=0;popup;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;tabindex=0;itemClick=new I;itemMouseEnter=new I;menuFocus=new I;menuBlur=new I;menuKeydown=new I;sublistViewChild;constructor(e,i,n,r){this.el=e,this.renderer=i,this.cd=n,this.tieredMenu=r}positionSubmenu(){let e=this.sublistViewChild&&this.sublistViewChild.nativeElement;if(e){let i=e.parentElement.parentElement,n=l.getOffset(i),r=l.getViewport(),a=e.offsetParent?e.offsetWidth:l.getHiddenElementOuterWidth(e),m=l.getOuterWidth(i.children[0]);parseInt(n.left,10)+m+a>r.width-l.calculateScrollbarWidth()&&l.addClass(e,"p-submenu-list-flipped")}}getItemProp(e,i,n=null){return e&&e.item?c.getItemValue(e.item[i],n):void 0}getItemId(e){return e.item?.id??`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemClass(e){return x(b({},this.getItemProp(e,"class")),{"p-menuitem":!0,"p-highlight":this.isItemActive(e),"p-menuitem-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return x(b({},this.getItemProp(e,"class")),{"p-menuitem-separator":!0})}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(i=>i.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return c.isNotEmpty(e.items)}onItemMouseEnter(e){if(this.autoDisplay){let{event:i,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}}onItemClick(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemClick.emit({originalEvent:e,processedItem:i,isFocus:!0})}static ɵfac=function(i){return new(i||s)(t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(t.Renderer2),t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(G(()=>De)))};static ɵcmp=t.ɵɵdefineComponent({type:s,selectors:[["p-tieredMenuSub"]],viewQuery:function(i,n){if(i&1&&t.ɵɵviewQuery(X,7),i&2){let r;t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(n.sublistViewChild=r.first)}},hostAttrs:[1,"p-element"],inputs:{items:"items",itemTemplate:"itemTemplate",root:"root",autoDisplay:"autoDisplay",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",popup:"popup",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:"level",focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",tabindex:"tabindex"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},decls:3,vars:12,consts:[["role","menu",3,"ngClass","id","tabindex","keydown","focus","blur"],["sublist",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],["listItem",""],[1,"p-menuitem-content",3,"click","mouseenter"],[4,"ngIf"],[3,"items","itemTemplate","autoDisplay","menuId","activeItemPath","focusedItemId","ariaLabelledBy","level","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"items","itemTemplate","autoDisplay","menuId","activeItemPath","focusedItemId","ariaLabelledBy","level","itemClick","itemMouseEnter"]],template:function(i,n){i&1&&(t.ɵɵelementStart(0,"ul",0,1),t.ɵɵlistener("keydown",function(a){return n.menuKeydown.emit(a)})("focus",function(a){return n.menuFocus.emit(a)})("blur",function(a){return n.menuBlur.emit(a)}),t.ɵɵtemplate(2,Pe,2,2,"ng-template",2),t.ɵɵelementEnd()),i&2&&(t.ɵɵproperty("ngClass",t.ɵɵpureFunction2(9,Me,!n.root,n.root))("id",n.menuId+"_list")("tabindex",n.tabindex),t.ɵɵattribute("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("aria-activedescendant",n.focusedItemId)("aria-orientation","vertical")("data-pc-section","menu"),t.ɵɵadvance(2),t.ɵɵproperty("ngForOf",n.items))},dependencies:()=>[d.NgClass,d.NgForOf,d.NgIf,d.NgTemplateOutlet,d.NgStyle,y.RouterLink,y.RouterLinkActive,A.Ripple,D.Tooltip,F,s],encapsulation:2})}return s})(),De=(()=>{class s{document;platformId;el;renderer;cd;config;overlayService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";id;ariaLabel;ariaLabelledBy;disabled=!1;tabindex=0;onShow=new I;onHide=new I;templates;rootmenu;containerViewChild;submenuIconTemplate;itemTemplate;container;outsideClickListener;resizeListener;scrollHandler;target;relatedTarget;visible;relativeAlign;window;dirty=!1;focused=!1;activeItemPath=C([]);number=C(0);focusedItemInfo=C({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;get visibleItems(){let e=this.activeItemPath().find(i=>i.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item?.id?e.item.id:e.index!==-1?`${this.id}${c.isNotEmpty(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,i,n,r,a,m,u){this.document=e,this.platformId=i,this.el=n,this.renderer=r,this.cd=a,this.config=m,this.overlayService=u,this.window=this.document.defaultView,Q(()=>{let p=this.activeItemPath();c.isNotEmpty(p)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){this.id=this.id||J()}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"submenuicon":this.submenuIconTemplate=e.template;break;case"item":this.itemTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}createProcessedItems(e,i=0,n={},r=""){let a=[];return e&&e.forEach((m,u)=>{let p=(r!==""?r+"_":"")+u,_={item:m,index:u,level:i,key:p,parent:n,parentKey:r};_.items=this.createProcessedItems(m.items,i+1,_,p),a.push(_)}),a}getItemProp(e,i){return e?c.getItemValue(e[i]):void 0}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isProcessedItemGroup(e){return e&&c.isNotEmpty(e.items)}isSelected(e){return this.activeItemPath().some(i=>i.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&c.isNotEmpty(e.items)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}onItemClick(e){let{originalEvent:i,processedItem:n}=e,r=this.isProcessedItemGroup(n),a=c.isEmpty(n.parent);if(this.isSelected(n)){let{index:u,key:p,level:_,parentKey:f,item:g}=n;this.activeItemPath.set(this.activeItemPath().filter(h=>p!==h.key&&p.startsWith(h.key))),this.focusedItemInfo.set({index:u,level:_,parentKey:f,item:g}),this.dirty=!0,l.focus(this.rootmenu.sublistViewChild.nativeElement)}else if(r)this.onItemChange(e);else{let u=a?n:this.activeItemPath().find(p=>p.parentKey==="");this.hide(i),this.changeFocusedItemIndex(i,u?u.index:-1),l.focus(this.rootmenu.sublistViewChild.nativeElement)}}onItemMouseEnter(e){l.isTouchDevice()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay}):this.dirty&&this.onItemChange(e)}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&c.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}}onArrowDownKey(e){let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}onArrowRightKey(e){let i=this.visibleItems[this.focusedItemInfo().index],n=this.isProccessedItemGroup(i),r=i.item;n&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:r}),this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}onArrowUpKey(e){if(e.altKey){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.popup&&this.hide(e,!0),e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowLeftKey(e){let i=this.visibleItems[this.focusedItemInfo().index],n=this.activeItemPath().find(m=>m.key===i.parentKey);c.isEmpty(i.parent)||(this.focusedItemInfo.set({index:-1,parentKey:n?n.parentKey:"",item:i.item}),this.searchValue="",this.onArrowDownKey(e));let a=this.activeItemPath().filter(m=>m.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),e.preventDefault()}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let i=l.findSingle(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&l.findSingle(i,"a[data-pc-section=\"action\"]");n?n.click():i&&i.click();let r=this.visibleItems[this.focusedItemInfo().index];if(!this.popup){let a=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(a)&&(this.focusedItemInfo().index=this.findFirstFocusedItemIndex())}}e.preventDefault()}onItemChange(e){let{processedItem:i,isFocus:n}=e;if(c.isEmpty(i))return;let{index:r,key:a,level:m,parentKey:u,items:p,item:_}=i,f=c.isNotEmpty(p),g=this.activeItemPath().filter(h=>h.parentKey!==u&&h.parentKey!==a);f&&g.push(i),this.focusedItemInfo.set({index:r,level:m,parentKey:u,item:_}),this.activeItemPath.set(g),f&&(this.dirty=!0),n&&l.focus(this.rootmenu.sublistViewChild.nativeElement)}onMenuFocus(e){this.focused=!0;let i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:this.visibleItems[this.findFirstFocusedItemIndex()]?.item};this.focusedItemInfo.set(i)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),l.focus(this.rootmenu.sublistViewChild.nativeElement),this.scrollInView());break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}alignOverlay(){this.relativeAlign?l.relativePosition(this.container,this.target):l.absolutePosition(this.container,this.target)}onOverlayAnimationEnd(e){switch(e.toState){case"void":T.clear(e.element);break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):l.appendChild(this.container,this.appendTo))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&T.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(e,i){this.popup&&(this.onHide.emit({}),this.visible=!1),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),i&&l.focus(this.relatedTarget||this.target||this.rootmenu.sublistViewChild.nativeElement),this.dirty=!1}toggle(e){this.visible?this.hide(e,!0):this.show(e)}show(e,i){this.popup&&(this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null,this.relativeAlign=e?.relativeAlign||null),this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),i&&l.focus(this.rootmenu.sublistViewChild.nativeElement),this.cd.markForCheck()}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,r=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(r=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return c.findLastIndex(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let i=e>0?c.findLastIndex(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return i>-1?i:e}findNextItemIndex(e){let i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+e+1:e}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}changeFocusedItemIndex(e,i){if(this.focusedItemInfo().index!==i){let n=this.focusedItemInfo();this.focusedItemInfo.set(x(b({},n),{item:this.visibleItems[i].item,index:i})),this.scrollInView()}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=l.findSingle(this.rootmenu.el.nativeElement,`li[id="${i}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new W(this.target,e=>{this.visible&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}bindResizeListener(){L(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{l.isTouchDevice()||this.hide(e,!0)})))}bindOutsideClickListener(){L(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let i=this.containerViewChild&&!this.containerViewChild.nativeElement.contains(e.target),n=this.popup?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;i&&n&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onOverlayHide(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&T.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide())}static ɵfac=function(i){return new(i||s)(t.ɵɵdirectiveInject(N),t.ɵɵdirectiveInject(q),t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(t.Renderer2),t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(v.PrimeNGConfig),t.ɵɵdirectiveInject(v.OverlayService))};static ɵcmp=t.ɵɵdefineComponent({type:s,selectors:[["p-tieredMenu"]],contentQueries:function(i,n,r){if(i&1&&t.ɵɵcontentQuery(r,U,4),i&2){let a;t.ɵɵqueryRefresh(a=t.ɵɵloadQuery())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(t.ɵɵviewQuery(ke,5),t.ɵɵviewQuery(Le,5)),i&2){let r;t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(n.rootmenu=r.first),t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(n.containerViewChild=r.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",popup:"popup",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",autoDisplay:"autoDisplay",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",tabindex:"tabindex"},outputs:{onShow:"onShow",onHide:"onHide"},decls:1,vars:1,consts:[[3,"id","ngClass","class","ngStyle","click",4,"ngIf"],[3,"id","ngClass","ngStyle","click"],["container",""],[3,"root","items","itemTemplate","menuId","tabindex","ariaLabel","ariaLabelledBy","baseZIndex","autoZIndex","autoDisplay","popup","focusedItemId","activeItemPath","itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter"],["rootmenu",""]],template:function(i,n){i&1&&t.ɵɵtemplate(0,Fe,4,29,"div",0),i&2&&t.ɵɵproperty("ngIf",!n.popup||n.visible)},dependencies:[d.NgClass,d.NgIf,d.NgStyle,Ae],styles:[`@layer primeng{.p-tieredmenu-overlay{position:absolute;top:0;left:0}.p-tieredmenu ul{margin:0;padding:0;list-style:none}.p-tieredmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-tieredmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-tieredmenu .p-menuitem-text{line-height:1}.p-tieredmenu .p-menuitem{position:relative}.p-tieredmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-tieredmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list{display:block;left:100%;top:0}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list.p-submenu-list-flipped{left:-100%}}
`],encapsulation:2,data:{animation:[Z("overlayAnimation",[k(":enter",[P({opacity:0,transform:"scaleY(0.8)"}),M("{{showTransitionParams}}")]),k(":leave",[M("{{hideTransitionParams}}",P({opacity:0}))])])]},changeDetection:0})}return s})(),nt=(()=>{class s{static ɵfac=function(i){return new(i||s)};static ɵmod=t.ɵɵdefineNgModule({type:s});static ɵinj=t.ɵɵdefineInjector({imports:[j,E,Y,O,F,V,E,O,V]})}return s})();export{De as TieredMenu,nt as TieredMenuModule,Ae as TieredMenuSub};