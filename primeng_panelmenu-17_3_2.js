import{style as f,state as I,animate as h,transition as x,trigger as S}from"@angular/animations";import*as p from"@angular/common";import{CommonModule as H}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as u,forwardRef as D,signal as g,computed as F}from"@angular/core";import*as d from"@angular/router";import{RouterModule as C}from"@angular/router";import{PrimeTemplate as O,SharedModule as P}from"primeng/api";import{DomHandler as m}from"primeng/dom";import{AngleDownIcon as E}from"primeng/icons/angledown";import{AngleRightIcon as M}from"primeng/icons/angleright";import{ChevronDownIcon as w}from"primeng/icons/chevrondown";import{ChevronRightIcon as k}from"primeng/icons/chevronright";import*as v from"primeng/tooltip";import{TooltipModule as T}from"primeng/tooltip";import{ObjectUtils as c,UniqueComponentId as V}from"primeng/utils";var $=["list"];function K(i,r){i&1&&e.ɵɵelement(0,"li",5)}function N(i,r){if(i&1&&e.ɵɵelement(0,"AngleDownIcon",20),i&2){let t=e.ɵɵnextContext(6).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function R(i,r){if(i&1&&e.ɵɵelement(0,"AngleRightIcon",20),i&2){let t=e.ɵɵnextContext(6).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function q(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,N,1,2,"AngleDownIcon",19)(2,R,1,2,"AngleRightIcon",19),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(5).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemActive(t)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.isItemActive(t))}}function U(i,r){}function Q(i,r){i&1&&e.ɵɵtemplate(0,U,0,0,"ng-template")}function z(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,q,3,2,"ng-container",8)(2,Q,1,0,null,18),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(5);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.panelMenu.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.panelMenu.submenuIconTemplate)}}function B(i,r){if(i&1&&e.ɵɵelement(0,"span",21),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function G(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",22),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"label"))}}function j(i,r){if(i&1&&e.ɵɵelement(0,"span",23),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",n.getItemProp(t,"label"),e.ɵɵsanitizeHtml)}}function W(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",24),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(4).$implicit;e.ɵɵproperty("ngClass",t.badgeStyleClass),e.ɵɵadvance(1),e.ɵɵtextInterpolate(t.badge)}}var A=i=>({"p-disabled":i});function J(i,r){if(i&1&&(e.ɵɵelementStart(0,"a",13),e.ɵɵtemplate(1,z,3,2,"ng-container",8)(2,B,1,2,"span",14)(3,G,2,1,"span",15)(4,j,1,1,"ng-template",null,16,e.ɵɵtemplateRefExtractor)(6,W,2,2,"span",17),e.ɵɵelementEnd()),i&2){let t=e.ɵɵreference(5),n=e.ɵɵnextContext(3).$implicit,a=e.ɵɵnextContext();e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(10,A,a.getItemProp(n,"disabled")))("target",a.getItemProp(n,"target")),e.ɵɵattribute("href",a.getItemProp(n,"url"),e.ɵɵsanitizeUrl)("data-pc-section","action")("tabindex",a.parentExpanded?"0":"-1"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.isItemGroup(n)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",(n.item==null?null:n.item.escape)!==!1)("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.badge)}}function X(i,r){if(i&1&&e.ɵɵelement(0,"AngleDownIcon",20),i&2){let t=e.ɵɵnextContext(6).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function Y(i,r){if(i&1&&e.ɵɵelement(0,"AngleRightIcon",20),i&2){let t=e.ɵɵnextContext(6).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("styleClass","p-submenu-icon")("ngStyle",n.getItemProp(t,"iconStyle"))}}function Z(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,X,1,2,"AngleDownIcon",19)(2,Y,1,2,"AngleRightIcon",19),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(5).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemActive(t)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.isItemActive(t))}}function ee(i,r){}function te(i,r){i&1&&e.ɵɵtemplate(0,ee,0,0,"ng-template")}function ne(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,Z,3,2,"ng-container",8)(2,te,1,0,null,18),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(5);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.panelMenu.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.panelMenu.submenuIconTemplate)}}function ie(i,r){if(i&1&&e.ɵɵelement(0,"span",21),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function ae(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",22),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"label"))}}function oe(i,r){if(i&1&&e.ɵɵelement(0,"span",23),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",n.getItemProp(t,"label"),e.ɵɵsanitizeHtml)}}function re(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",24),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",n.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"badge"))}}var L=()=>({exact:!1});function se(i,r){if(i&1&&(e.ɵɵelementStart(0,"a",25),e.ɵɵtemplate(1,ne,3,2,"ng-container",8)(2,ie,1,2,"span",14)(3,ae,2,1,"span",15)(4,oe,1,1,"ng-template",null,26,e.ɵɵtemplateRefExtractor)(6,re,2,2,"span",17),e.ɵɵelementEnd()),i&2){let t=e.ɵɵreference(5),n=e.ɵɵnextContext(3).$implicit,a=e.ɵɵnextContext();e.ɵɵproperty("routerLink",a.getItemProp(n,"routerLink"))("queryParams",a.getItemProp(n,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",a.getItemProp(n,"routerLinkActiveOptions")||e.ɵɵpureFunction0(20,L))("ngClass",e.ɵɵpureFunction1(21,A,a.getItemProp(n,"disabled")))("target",a.getItemProp(n,"target"))("fragment",a.getItemProp(n,"fragment"))("queryParamsHandling",a.getItemProp(n,"queryParamsHandling"))("preserveFragment",a.getItemProp(n,"preserveFragment"))("skipLocationChange",a.getItemProp(n,"skipLocationChange"))("replaceUrl",a.getItemProp(n,"replaceUrl"))("state",a.getItemProp(n,"state")),e.ɵɵattribute("title",a.getItemProp(n,"title"))("data-pc-section","action")("tabindex",a.parentExpanded?"0":"-1"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.isItemGroup(n)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.getItemProp(n,"escape")!==!1)("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.badge)}}function le(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,J,7,12,"a",11)(2,se,7,23,"a",12),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.getItemProp(t,"routerLink")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.getItemProp(t,"routerLink"))}}function ce(i,r){}function me(i,r){i&1&&e.ɵɵtemplate(0,ce,0,0,"ng-template")}var pe=i=>({$implicit:i});function _e(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,me,1,0,null,27),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",e.ɵɵpureFunction1(2,pe,t.item))}}function ue(i,r){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"p-panelMenuSub",28),e.ɵɵlistener("itemToggle",function(a){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(3);return e.ɵɵresetView(o.onItemToggle(a))}),e.ɵɵelementEnd()}if(i&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("id",n.getItemId(t)+"_list")("panelId",n.panelId)("items",t.items)("itemTemplate",n.itemTemplate)("transitionOptions",n.transitionOptions)("focusedItemId",n.focusedItemId)("activeItemPath",n.activeItemPath)("level",n.level+1)("parentExpanded",!!n.parentExpanded&&n.isItemExpanded(t))}}function de(i,r){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"li",6)(1,"div",7),e.ɵɵlistener("click",function(a){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext().$implicit,s=e.ɵɵnextContext();return e.ɵɵresetView(s.onItemClick(a,o))}),e.ɵɵtemplate(2,le,3,2,"ng-container",8)(3,_e,2,4,"ng-container",8),e.ɵɵelementEnd(),e.ɵɵelementStart(4,"div",9),e.ɵɵtemplate(5,ue,1,9,"p-panelMenuSub",10),e.ɵɵelementEnd()()}if(i&2){let t=e.ɵɵnextContext(),n=t.$implicit,a=t.index,o=e.ɵɵnextContext();e.ɵɵclassMap(o.getItemProp(n,"styleClass")),e.ɵɵclassProp("p-hidden",n.visible===!1)("p-focus",o.isItemFocused(n)&&!o.isItemDisabled(n)),e.ɵɵproperty("ngClass",o.getItemClass(n))("ngStyle",o.getItemProp(n,"style"))("pTooltip",o.getItemProp(n,"tooltip"))("tooltipOptions",o.getItemProp(n,"tooltipOptions")),e.ɵɵattribute("id",o.getItemId(n))("aria-label",o.getItemProp(n,"label"))("aria-expanded",o.isItemGroup(n)?o.isItemActive(n):void 0)("aria-level",o.level+1)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(a))("data-p-disabled",o.isItemDisabled(n)),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!o.itemTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",o.itemTemplate),e.ɵɵadvance(1),e.ɵɵproperty("@submenu",o.getAnimation(n)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",o.isItemVisible(n)&&o.isItemGroup(n))}}function ge(i,r){if(i&1&&e.ɵɵtemplate(0,K,1,0,"li",3)(1,de,6,21,"li",4),i&2){let t=r.$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngIf",t.separator),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.separator&&n.isItemVisible(t))}}var fe=i=>({"p-submenu-list":!0,"p-panelmenu-root-list":i}),Ie=["submenu"],he=["container"];function xe(i,r){i&1&&e.ɵɵelement(0,"ChevronDownIcon",18),i&2&&e.ɵɵproperty("styleClass","p-submenu-icon")}function ye(i,r){i&1&&e.ɵɵelement(0,"ChevronRightIcon",18),i&2&&e.ɵɵproperty("styleClass","p-submenu-icon")}function ve(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,xe,1,1,"ChevronDownIcon",17)(2,ye,1,1,"ChevronRightIcon",17),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemActive(t)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.isItemActive(t))}}function be(i,r){}function Ce(i,r){i&1&&e.ɵɵtemplate(0,be,0,0,"ng-template")}function Pe(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,ve,3,2,"ng-container",11)(2,Ce,1,0,null,16),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(4);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.submenuIconTemplate)}}function Te(i,r){if(i&1&&e.ɵɵelement(0,"span",19),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function Se(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",20),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"label"))}}function Ee(i,r){if(i&1&&e.ɵɵelement(0,"span",21),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",n.getItemProp(t,"label"),e.ɵɵsanitizeHtml)}}function Me(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",22),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",n.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"badge"))}}function we(i,r){if(i&1&&(e.ɵɵelementStart(0,"a",10),e.ɵɵtemplate(1,Pe,3,2,"ng-container",11)(2,Te,1,2,"span",12)(3,Se,2,1,"span",13)(4,Ee,1,1,"ng-template",null,14,e.ɵɵtemplateRefExtractor)(6,Me,2,2,"span",15),e.ɵɵelementEnd()),i&2){let t=e.ɵɵreference(5),n=e.ɵɵnextContext(2).$implicit,a=e.ɵɵnextContext();e.ɵɵproperty("target",a.getItemProp(n,"target")),e.ɵɵattribute("href",a.getItemProp(n,"url"),e.ɵɵsanitizeUrl)("tabindex",-1)("title",a.getItemProp(n,"title"))("data-pc-section","headeraction"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.isItemGroup(n)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.getItemProp(n,"escape")!==!1)("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",a.getItemProp(n,"badge"))}}function ke(i,r){i&1&&e.ɵɵelement(0,"ChevronDownIcon",18),i&2&&e.ɵɵproperty("styleClass","p-submenu-icon")}function Ae(i,r){i&1&&e.ɵɵelement(0,"ChevronRightIcon",18),i&2&&e.ɵɵproperty("styleClass","p-submenu-icon")}function Le(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,ke,1,1,"ChevronDownIcon",17)(2,Ae,1,1,"ChevronRightIcon",17),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(4).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemActive(t)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!n.isItemActive(t))}}function He(i,r){}function De(i,r){i&1&&e.ɵɵtemplate(0,He,0,0,"ng-template")}function Fe(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,Le,3,2,"ng-container",11)(2,De,1,0,null,16),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(4);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.submenuIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.submenuIconTemplate)}}function Oe(i,r){if(i&1&&e.ɵɵelement(0,"span",19),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.icon)("ngStyle",n.getItemProp(t,"iconStyle"))}}function Ve(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",20),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"label"))}}function $e(i,r){if(i&1&&e.ɵɵelement(0,"span",21),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",n.getItemProp(t,"label"),e.ɵɵsanitizeHtml)}}function Ke(i,r){if(i&1&&(e.ɵɵelementStart(0,"span",22),e.ɵɵtext(1),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",n.getItemProp(t,"badgeStyleClass")),e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"badge"))}}function Ne(i,r){if(i&1&&(e.ɵɵelementStart(0,"a",23),e.ɵɵtemplate(1,Fe,3,2,"ng-container",11)(2,Oe,1,2,"span",12)(3,Ve,2,1,"span",13)(4,$e,1,1,"ng-template",null,24,e.ɵɵtemplateRefExtractor)(6,Ke,2,2,"span",15),e.ɵɵelementEnd()),i&2){let t=e.ɵɵreference(5),n=e.ɵɵnextContext(2).$implicit,a=e.ɵɵnextContext();e.ɵɵproperty("routerLink",a.getItemProp(n,"routerLink"))("queryParams",a.getItemProp(n,"queryParams"))("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",a.getItemProp(n,"routerLinkActiveOptions")||e.ɵɵpureFunction0(18,L))("target",a.getItemProp(n,"target"))("fragment",a.getItemProp(n,"fragment"))("queryParamsHandling",a.getItemProp(n,"queryParamsHandling"))("preserveFragment",a.getItemProp(n,"preserveFragment"))("skipLocationChange",a.getItemProp(n,"skipLocationChange"))("replaceUrl",a.getItemProp(n,"replaceUrl"))("state",a.getItemProp(n,"state")),e.ɵɵattribute("tabindex",-1)("data-pc-section","headeraction"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.isItemGroup(n)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",a.getItemProp(n,"escape")!==!1)("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",a.getItemProp(n,"badge"))}}var Re=i=>({"p-panelmenu-expanded":i});function qe(i,r){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",25),e.ɵɵlistener("@rootItem.done",function(){e.ɵɵrestoreView(t);let a=e.ɵɵnextContext(3);return e.ɵɵresetView(a.onToggleDone())}),e.ɵɵelementStart(1,"div",26)(2,"p-panelMenuList",27),e.ɵɵlistener("headerFocus",function(a){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(3);return e.ɵɵresetView(o.updateFocusedHeader(a))}),e.ɵɵelementEnd()()()}if(i&2){let t=e.ɵɵnextContext(2),n=t.$implicit,a=t.index,o=e.ɵɵnextContext();e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(14,Re,o.isItemActive(n)))("@rootItem",o.getAnimation(n)),e.ɵɵattribute("id",o.getContentId(n,a))("aria-labelledby",o.getHeaderId(n,a))("data-pc-section","toggleablecontent"),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","menucontent"),e.ɵɵadvance(1),e.ɵɵproperty("panelId",o.getPanelId(a,n))("items",o.getItemProp(n,"items"))("itemTemplate",o.itemTemplate)("transitionOptions",o.transitionOptions)("root",!0)("activeItem",o.activeItem())("tabindex",o.tabindex)("parentExpanded",o.isItemActive(n))}}var Ue=(i,r)=>({"p-component p-panelmenu-header":!0,"p-highlight":i,"p-disabled":r});function Qe(i,r){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",4)(1,"div",5),e.ɵɵlistener("click",function(a){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(),s=o.$implicit,l=o.index,_=e.ɵɵnextContext();return e.ɵɵresetView(_.onHeaderClick(a,s,l))})("keydown",function(a){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(),s=o.$implicit,l=o.index,_=e.ɵɵnextContext();return e.ɵɵresetView(_.onHeaderKeyDown(a,s,l))}),e.ɵɵelementStart(2,"div",6),e.ɵɵtemplate(3,we,7,10,"a",7)(4,Ne,7,19,"a",8),e.ɵɵelementEnd()(),e.ɵɵtemplate(5,qe,3,16,"div",9),e.ɵɵelementEnd()}if(i&2){let t=e.ɵɵnextContext(),n=t.$implicit,a=t.index,o=e.ɵɵnextContext();e.ɵɵproperty("ngClass",o.getItemProp(n,"headerClass"))("ngStyle",o.getItemProp(n,"style")),e.ɵɵattribute("data-pc-section","panel"),e.ɵɵadvance(1),e.ɵɵclassMap(o.getItemProp(n,"styleClass")),e.ɵɵproperty("ngClass",e.ɵɵpureFunction2(21,Ue,o.isItemActive(n),o.isItemDisabled(n)))("ngStyle",o.getItemProp(n,"style"))("pTooltip",o.getItemProp(n,"tooltip"))("tabindex",0)("tooltipOptions",o.getItemProp(n,"tooltipOptions")),e.ɵɵattribute("id",o.getHeaderId(n,a))("aria-expanded",o.isItemActive(n))("aria-label",o.getItemProp(n,"label"))("aria-controls",o.getContentId(n,a))("aria-disabled",o.isItemDisabled(n))("data-p-highlight",o.isItemActive(n))("data-p-disabled",o.isItemDisabled(n))("data-pc-section","header"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!o.getItemProp(n,"routerLink")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",o.getItemProp(n,"routerLink")),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",o.isItemGroup(n))}}function ze(i,r){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,Qe,6,24,"div",3),e.ɵɵelementContainerEnd()),i&2){let t=r.$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.isItemVisible(t))}}var Be=`@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}
`,Ge=(()=>{class i{panelMenu;el;panelId;focusedItemId;items;itemTemplate;level=0;activeItemPath;root;tabindex;transitionOptions;parentExpanded;itemToggle=new u;menuFocus=new u;menuBlur=new u;menuKeyDown=new u;listViewChild;constructor(t,n){this.panelMenu=t,this.el=n}getItemId(t){return t.item?.id??`${this.panelId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemClass(t){return{"p-menuitem":!0,"p-disabled":this.isItemDisabled(t)}}getItemProp(t,n,a){return t&&t.item?c.getItemValue(t.item[n],a):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemExpanded(t){return t.expanded}isItemActive(t){return this.isItemExpanded(t)||this.activeItemPath.some(n=>n&&n.key===t.key)}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return c.isNotEmpty(t.items)}getAnimation(t){return this.isItemActive(t)?{value:"visible",params:{transitionParams:this.transitionOptions,height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemClick(t,n){this.isItemDisabled(n)||(this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.itemToggle.emit({processedItem:n,expanded:!this.isItemActive(n)}))}onItemToggle(t){this.itemToggle.emit(t)}static ɵfac=function(n){return new(n||i)(e.ɵɵdirectiveInject(D(()=>We)),e.ɵɵdirectiveInject(e.ElementRef))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-panelMenuSub"]],viewQuery:function(n,a){if(n&1&&e.ɵɵviewQuery($,5),n&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(a.listViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{panelId:"panelId",focusedItemId:"focusedItemId",items:"items",itemTemplate:"itemTemplate",level:"level",activeItemPath:"activeItemPath",root:"root",tabindex:"tabindex",transitionOptions:"transitionOptions",parentExpanded:"parentExpanded"},outputs:{itemToggle:"itemToggle",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeyDown:"menuKeyDown"},decls:3,vars:8,consts:[["role","tree",3,"ngClass","tabindex","focusin","focusout","keydown"],["list",""],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",4,"ngIf"],["role","treeitem",3,"ngClass","class","p-hidden","p-focus","ngStyle","pTooltip","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator"],["role","treeitem",3,"ngClass","ngStyle","pTooltip","tooltipOptions"],[1,"p-menuitem-content",3,"click"],[4,"ngIf"],[1,"p-toggleable-content"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle",4,"ngIf"],["class","p-menuitem-link",3,"ngClass","target",4,"ngIf"],["class","p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[1,"p-menuitem-link",3,"ngClass","target"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["htmlRouteLabel",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle"]],template:function(n,a){n&1&&(e.ɵɵelementStart(0,"ul",0,1),e.ɵɵlistener("focusin",function(s){return a.menuFocus.emit(s)})("focusout",function(s){return a.menuBlur.emit(s)})("keydown",function(s){return a.menuKeyDown.emit(s)}),e.ɵɵtemplate(2,ge,2,2,"ng-template",2),e.ɵɵelementEnd()),n&2&&(e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(6,fe,a.root))("tabindex",-1),e.ɵɵattribute("aria-activedescendant",a.focusedItemId)("data-pc-section","menu")("aria-hidden",!a.parentExpanded),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",a.items))},dependencies:()=>[p.NgClass,p.NgForOf,p.NgIf,p.NgTemplateOutlet,p.NgStyle,d.RouterLink,d.RouterLinkActive,v.Tooltip,E,M,i],encapsulation:2,data:{animation:[S("submenu",[I("hidden",f({height:"0"})),I("visible",f({height:"*"})),x("visible <=> hidden",[h("{{transitionParams}}")]),x("void => *",h(0))])]}})}return i})(),je=(()=>{class i{el;panelId;id;items;itemTemplate;parentExpanded;expanded;transitionOptions;root;tabindex;activeItem;itemToggle=new u;headerFocus=new u;subMenuViewChild;searchTimeout;searchValue;focused;focusedItem=g(null);activeItemPath=g([]);processedItems=g([]);visibleItems=F(()=>{let t=this.processedItems();return this.flatItems(t)});get focusedItemId(){let t=this.focusedItem();return t&&t.item?.id?t.item.id:c.isNotEmpty(this.focusedItem())?`${this.panelId}_${this.focusedItem().key}`:void 0}constructor(t){this.el=t}ngOnChanges(t){t&&t.items&&t.items.currentValue&&this.processedItems.set(this.createProcessedItems(t.items.currentValue||[]))}getItemProp(t,n){return t&&t.item?c.getItemValue(t.item[n]):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemActive(t){return this.activeItemPath().some(n=>n.key===t.parentKey)}isItemGroup(t){return c.isNotEmpty(t.items)}isElementInPanel(t,n){let a=t.currentTarget.closest("[data-pc-section=\"panel\"]");return a&&a.contains(n)}isItemMatched(t){return this.isValidItem(t)&&this.getItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isVisibleItem(t){return!!t&&(t.level===0||this.isItemActive(t))&&this.isItemVisible(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t)&&!t.separator}findFirstItem(){return this.visibleItems().find(t=>this.isValidItem(t))}findLastItem(){return c.findLast(this.visibleItems(),t=>this.isValidItem(t))}createProcessedItems(t,n=0,a={},o=""){let s=[];return t&&t.forEach((l,_)=>{let b=(o!==""?o+"_":"")+_,y={icon:l.icon,expanded:l.expanded,separator:l.separator,item:l,index:_,level:n,key:b,parent:a,parentKey:o};y.items=this.createProcessedItems(l.items,n+1,y,b),s.push(y)}),s}findProcessedItemByItemKey(t,n,a=0){if(n=n||this.processedItems(),n&&n.length)for(let o=0;o<n.length;o++){let s=n[o];if(this.getItemProp(s,"key")===t)return s;let l=this.findProcessedItemByItemKey(t,s.items,a+1);if(l)return l}}flatItems(t,n=[]){return t&&t.forEach(a=>{this.isVisibleItem(a)&&(n.push(a),this.flatItems(a.items,n))}),n}changeFocusedItem(t){let{originalEvent:n,processedItem:a,focusOnNext:o,selfCheck:s,allowHeaderFocus:l=!0}=t;c.isNotEmpty(this.focusedItem())&&this.focusedItem().key!==a.key?(this.focusedItem.set(a),this.scrollInView()):l&&this.headerFocus.emit({originalEvent:n,focusOnNext:o,selfCheck:s})}scrollInView(){let t=m.findSingle(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`);t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest"})}onFocus(t){if(!this.focused){this.focused=!0;let n=this.focusedItem()||(this.isElementInPanel(t,t.relatedTarget)?this.findFirstItem():this.findLastItem());t.relatedTarget!==null&&this.focusedItem.set(n)}}onBlur(t){let n=t.relatedTarget;this.focused&&!this.el.nativeElement.contains(n)&&(this.focused=!1,this.focusedItem.set(null),this.searchValue="")}onItemToggle(t){let{processedItem:n,expanded:a}=t;n.expanded=!n.expanded;let o=this.activeItemPath().filter(s=>s.parentKey!==n.parentKey);a&&o.push(n),this.activeItemPath.set(o),this.processedItems.update(s=>s.map(l=>l===n?n:l)),this.focusedItem.set(n)}onKeyDown(t){let n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&c.isPrintableCharacter(t.key)&&this.searchItems(t,t.key);break}}onArrowDownKey(t){let n=c.isNotEmpty(this.focusedItem())?this.findNextItem(this.focusedItem()):this.findFirstItem();this.changeFocusedItem({originalEvent:t,processedItem:n,focusOnNext:!0}),t.preventDefault()}onArrowUpKey(t){let n=c.isNotEmpty(this.focusedItem())?this.findPrevItem(this.focusedItem()):this.findLastItem();this.changeFocusedItem({originalEvent:t,processedItem:n,selfCheck:!0}),t.preventDefault()}onArrowLeftKey(t){if(c.isNotEmpty(this.focusedItem())){if(this.activeItemPath().some(a=>a.key===this.focusedItem().key)){let a=this.activeItemPath().filter(o=>o.key!==this.focusedItem().key);this.activeItemPath.set(a)}else{let a=c.isNotEmpty(this.focusedItem().parent)?this.focusedItem().parent:this.focusedItem();this.focusedItem.set(a)}t.preventDefault()}}onArrowRightKey(t){if(c.isNotEmpty(this.focusedItem())){if(this.isItemGroup(this.focusedItem()))if(this.activeItemPath().some(o=>o.key===this.focusedItem().key))this.onArrowDownKey(t);else{let o=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItem().parentKey);o.push(this.focusedItem()),this.activeItemPath.set(o)}t.preventDefault()}}onHomeKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),t.preventDefault()}onEndKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),t.preventDefault()}onEnterKey(t){if(c.isNotEmpty(this.focusedItem())){let n=m.findSingle(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),a=n&&(m.findSingle(n,"[data-pc-section=\"action\"]")||m.findSingle(n,"a,button"));a?a.click():n&&n.click()}t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextItem(t){let n=this.visibleItems().findIndex(o=>o.key===t.key);return(n<this.visibleItems().length-1?this.visibleItems().slice(n+1).find(o=>this.isValidItem(o)):void 0)||t}findPrevItem(t){let n=this.visibleItems().findIndex(o=>o.key===t.key);return(n>0?c.findLast(this.visibleItems().slice(0,n),o=>this.isValidItem(o)):void 0)||t}searchItems(t,n){this.searchValue=(this.searchValue||"")+n;let a=null,o=!1;if(c.isNotEmpty(this.focusedItem())){let s=this.visibleItems().findIndex(l=>l.key===this.focusedItem().key);a=this.visibleItems().slice(s).find(l=>this.isItemMatched(l)),a=c.isEmpty(a)?this.visibleItems().slice(0,s).find(l=>this.isItemMatched(l)):a}else a=this.visibleItems().find(s=>this.isItemMatched(s));return c.isNotEmpty(a)&&(o=!0),c.isEmpty(a)&&c.isEmpty(this.focusedItem())&&(a=this.findFirstItem()),c.isNotEmpty(a)&&this.changeFocusedItem({originalEvent:t,processedItem:a,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}static ɵfac=function(n){return new(n||i)(e.ɵɵdirectiveInject(e.ElementRef))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-panelMenuList"]],viewQuery:function(n,a){if(n&1&&e.ɵɵviewQuery(Ie,5),n&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(a.subMenuViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{panelId:"panelId",id:"id",items:"items",itemTemplate:"itemTemplate",parentExpanded:"parentExpanded",expanded:"expanded",transitionOptions:"transitionOptions",root:"root",tabindex:"tabindex",activeItem:"activeItem"},outputs:{itemToggle:"itemToggle",headerFocus:"headerFocus"},features:[e.ɵɵNgOnChangesFeature],decls:2,vars:10,consts:[[3,"root","id","panelId","tabindex","itemTemplate","focusedItemId","activeItemPath","transitionOptions","items","parentExpanded","itemToggle","keydown","menuFocus","menuBlur"],["submenu",""]],template:function(n,a){n&1&&(e.ɵɵelementStart(0,"p-panelMenuSub",0,1),e.ɵɵlistener("itemToggle",function(s){return a.onItemToggle(s)})("keydown",function(s){return a.onKeyDown(s)})("menuFocus",function(s){return a.onFocus(s)})("menuBlur",function(s){return a.onBlur(s)}),e.ɵɵelementEnd()),n&2&&e.ɵɵproperty("root",!0)("id",a.panelId+"_list")("panelId",a.panelId)("tabindex",a.tabindex)("itemTemplate",a.itemTemplate)("focusedItemId",a.focused?a.focusedItemId:void 0)("activeItemPath",a.activeItemPath())("transitionOptions",a.transitionOptions)("items",a.processedItems())("parentExpanded",a.parentExpanded)},dependencies:[Ge],styles:[`@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}
`],encapsulation:2,changeDetection:0})}return i})(),We=(()=>{class i{cd;model;style;styleClass;multiple=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";id;tabindex=0;templates;containerViewChild;submenuIconTemplate;itemTemplate;animating;activeItem=g(null);ngOnInit(){this.id=this.id||V()}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"submenuicon":this.submenuIconTemplate=t.template;break;case"item":this.itemTemplate=t.template;break;default:this.itemTemplate=t.template;break}})}constructor(t){this.cd=t}collapseAll(){for(let t of this.model)t.expanded&&(t.expanded=!1);this.cd.detectChanges()}onToggleDone(){this.animating=!1}changeActiveItem(t,n,a,o=!1){if(!this.isItemDisabled(n)){let s=o?n:this.activeItem&&c.equals(n,this.activeItem)?null:n;this.activeItem.set(s)}}getAnimation(t){return t.expanded?{value:"visible",params:{transitionParams:this.animating?this.transitionOptions:"0ms",height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getItemProp(t,n){return t?c.getItemValue(t[n]):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemActive(t){return t.expanded}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemGroup(t){return c.isNotEmpty(t.items)}getPanelId(t,n){return n&&n.id?n.id:`${this.id}_${t}`}getHeaderId(t,n){return t.id?t.id+"_header":`${this.getPanelId(n)}_header`}getContentId(t,n){return t.id?t.id+"_content":`${this.getPanelId(n)}_content`}updateFocusedHeader(t){let{originalEvent:n,focusOnNext:a,selfCheck:o}=t,s=n.currentTarget.closest("[data-pc-section=\"panel\"]"),l=o?m.findSingle(s,"[data-pc-section=\"header\"]"):a?this.findNextHeader(s):this.findPrevHeader(s);l?this.changeFocusedHeader(n,l):a?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)}changeFocusedHeader(t,n){n&&m.focus(n)}findNextHeader(t,n=!1){let a=n?t:t.nextElementSibling,o=m.findSingle(a,"[data-pc-section=\"header\"]");return o?m.getAttribute(o,"data-p-disabled")?this.findNextHeader(o.parentElement):o:null}findPrevHeader(t,n=!1){let a=n?t:t.previousElementSibling,o=m.findSingle(a,"[data-pc-section=\"header\"]");return o?m.getAttribute(o,"data-p-disabled")?this.findPrevHeader(o.parentElement):o:null}findFirstHeader(){return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild,!0)}findLastHeader(){return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild,!0)}onHeaderClick(t,n,a){if(this.isItemDisabled(n)){t.preventDefault();return}if(n.command&&n.command({originalEvent:t,item:n}),!this.multiple)for(let o of this.model)n!==o&&o.expanded&&(o.expanded=!1);n.expanded=!n.expanded,this.changeActiveItem(t,n,a),this.animating=!0,m.focus(t.currentTarget)}onHeaderKeyDown(t,n,a){switch(t.code){case"ArrowDown":this.onHeaderArrowDownKey(t);break;case"ArrowUp":this.onHeaderArrowUpKey(t);break;case"Home":this.onHeaderHomeKey(t);break;case"End":this.onHeaderEndKey(t);break;case"Enter":case"Space":this.onHeaderEnterKey(t,n,a);break;default:break}}onHeaderArrowDownKey(t){let n=m.getAttribute(t.currentTarget,"data-p-highlight")===!0?m.findSingle(t.currentTarget.nextElementSibling,"[data-pc-section=\"menu\"]"):null;n?m.focus(n):this.updateFocusedHeader({originalEvent:t,focusOnNext:!0}),t.preventDefault()}onHeaderArrowUpKey(t){let n=this.findPrevHeader(t.currentTarget.parentElement)||this.findLastHeader(),a=m.getAttribute(n,"data-p-highlight")===!0?m.findSingle(n.nextElementSibling,"[data-pc-section=\"menu\"]"):null;a?m.focus(a):this.updateFocusedHeader({originalEvent:t,focusOnNext:!1}),t.preventDefault()}onHeaderHomeKey(t){this.changeFocusedHeader(t,this.findFirstHeader()),t.preventDefault()}onHeaderEndKey(t){this.changeFocusedHeader(t,this.findLastHeader()),t.preventDefault()}onHeaderEnterKey(t,n,a){let o=m.findSingle(t.currentTarget,"[data-pc-section=\"headeraction\"]");o?o.click():this.onHeaderClick(t,n,a),t.preventDefault()}static ɵfac=function(n){return new(n||i)(e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-panelMenu"]],contentQueries:function(n,a,o){if(n&1&&e.ɵɵcontentQuery(o,O,4),n&2){let s;e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(a.templates=s)}},viewQuery:function(n,a){if(n&1&&e.ɵɵviewQuery(he,5),n&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(a.containerViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:"multiple",transitionOptions:"transitionOptions",id:"id",tabindex:"tabindex"},decls:3,vars:5,consts:[[3,"ngStyle","ngClass"],["container",""],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",3,"ngClass","ngStyle",4,"ngIf"],[1,"p-panelmenu-panel",3,"ngClass","ngStyle"],["role","button",3,"ngClass","ngStyle","pTooltip","tabindex","tooltipOptions","click","keydown"],[1,"p-panelmenu-header-content"],["class","p-panelmenu-header-action",3,"target",4,"ngIf"],["class","p-panelmenu-header-action",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-toggleable-content","role","region",3,"ngClass",4,"ngIf"],[1,"p-panelmenu-header-action",3,"target"],[4,"ngIf"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-action",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["htmlRouteLabel",""],["role","region",1,"p-toggleable-content",3,"ngClass"],[1,"p-panelmenu-content"],[3,"panelId","items","itemTemplate","transitionOptions","root","activeItem","tabindex","parentExpanded","headerFocus"]],template:function(n,a){n&1&&(e.ɵɵelementStart(0,"div",0,1),e.ɵɵtemplate(2,ze,2,1,"ng-container",2),e.ɵɵelementEnd()),n&2&&(e.ɵɵclassMap(a.styleClass),e.ɵɵproperty("ngStyle",a.style)("ngClass","p-panelmenu p-component"),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",a.model))},dependencies:()=>[p.NgClass,p.NgForOf,p.NgIf,p.NgTemplateOutlet,p.NgStyle,d.RouterLink,d.RouterLinkActive,v.Tooltip,w,k,je],styles:[Be],encapsulation:2,data:{animation:[S("rootItem",[I("hidden",f({height:"0"})),I("visible",f({height:"*"})),x("visible <=> hidden",[h("{{transitionParams}}")]),x("void => *",h(0))])]},changeDetection:0})}return i})(),It=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=e.ɵɵdefineNgModule({type:i});static ɵinj=e.ɵɵdefineInjector({imports:[H,C,T,P,E,M,w,k,C,T,P]})}return i})();export{We as PanelMenu,je as PanelMenuList,It as PanelMenuModule,Ge as PanelMenuSub};