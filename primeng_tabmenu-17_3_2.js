import*as p from"@angular/common";import{isPlatformBrowser as I,CommonModule as x}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as y,signal as C,PLATFORM_ID as k}from"@angular/core";import*as u from"@angular/router";import{RouterModule as d}from"@angular/router";import{PrimeTemplate as T,SharedModule as b}from"primeng/api";import{DomHandler as s}from"primeng/dom";import{ChevronLeftIcon as _}from"primeng/icons/chevronleft";import{ChevronRightIcon as g}from"primeng/icons/chevronright";import*as v from"primeng/ripple";import{RippleModule as w}from"primeng/ripple";import*as h from"primeng/tooltip";import{TooltipModule as f}from"primeng/tooltip";import{ObjectUtils as L}from"primeng/utils";var M=["content"],S=["navbar"],E=["inkbar"],A=["prevBtn"],R=["nextBtn"],P=["tabLink"],B=["tab"];function F(a,o){a&1&&e.ɵɵelement(0,"ChevronLeftIcon"),a&2&&e.ɵɵattribute("aria-hidden",!0)}function O(a,o){}function D(a,o){a&1&&e.ɵɵtemplate(0,O,0,0,"ng-template")}function V(a,o){if(a&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"button",11,12),e.ɵɵlistener("click",function(){e.ɵɵrestoreView(t);let i=e.ɵɵnextContext();return e.ɵɵresetView(i.navBackward())}),e.ɵɵtemplate(2,F,1,1,"ChevronLeftIcon",13)(3,D,1,0,null,14),e.ɵɵelementEnd()}if(a&2){let t=e.ɵɵnextContext();e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.previousIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.previousIconTemplate)}}function Q(a,o){if(a&1&&e.ɵɵelement(0,"span",26),a&2){let t=e.ɵɵnextContext(2).$implicit;e.ɵɵproperty("ngClass",t.icon)("ngStyle",t.iconStyle)}}function q(a,o){if(a&1&&(e.ɵɵelementStart(0,"span",27),e.ɵɵtext(1),e.ɵɵelementEnd()),a&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"label"))}}function H(a,o){if(a&1&&e.ɵɵelement(0,"span",28),a&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",n.getItemProp(t,"label"),e.ɵɵsanitizeHtml)}}function $(a,o){if(a&1&&(e.ɵɵelementStart(0,"span",29),e.ɵɵtext(1),e.ɵɵelementEnd()),a&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.badgeStyleClass),e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"badge"))}}function N(a,o){if(a&1&&(e.ɵɵelementStart(0,"a",20,21),e.ɵɵelementContainerStart(2),e.ɵɵtemplate(3,Q,1,2,"span",22)(4,q,2,1,"span",23)(5,H,1,1,"ng-template",null,24,e.ɵɵtemplateRefExtractor)(7,$,2,2,"span",25),e.ɵɵelementContainerEnd(),e.ɵɵelementEnd()),a&2){let t=e.ɵɵreference(6),n=e.ɵɵnextContext().$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("target",i.getItemProp(n,"target")),e.ɵɵattribute("href",i.getItemProp(n,"url"),e.ɵɵsanitizeUrl)("id",i.getItemProp(n,"id"))("aria-disabled",i.disabled(n))("aria-label",i.getItemProp(n,"label"))("tabindex",i.disabled(n)?-1:0),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.escape!==!1)("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.badge)}}function W(a,o){if(a&1&&e.ɵɵelement(0,"span",26),a&2){let t=e.ɵɵnextContext(2).$implicit;e.ɵɵproperty("ngClass",t.icon)("ngStyle",t.iconStyle),e.ɵɵattribute("aria-hidden",!0)}}function j(a,o){if(a&1&&(e.ɵɵelementStart(0,"span",27),e.ɵɵtext(1),e.ɵɵelementEnd()),a&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"label"))}}function U(a,o){if(a&1&&e.ɵɵelement(0,"span",28),a&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("innerHTML",n.getItemProp(t,"label"),e.ɵɵsanitizeHtml)}}function z(a,o){if(a&1&&(e.ɵɵelementStart(0,"span",29),e.ɵɵtext(1),e.ɵɵelementEnd()),a&2){let t=e.ɵɵnextContext(2).$implicit,n=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.badgeStyleClass),e.ɵɵadvance(1),e.ɵɵtextInterpolate(n.getItemProp(t,"badge"))}}var K=()=>({exact:!1});function G(a,o){if(a&1&&(e.ɵɵelementStart(0,"a",30,21),e.ɵɵelementContainerStart(2),e.ɵɵtemplate(3,W,1,3,"span",22)(4,j,2,1,"span",23)(5,U,1,1,"ng-template",null,31,e.ɵɵtemplateRefExtractor)(7,z,2,2,"span",25),e.ɵɵelementContainerEnd(),e.ɵɵelementEnd()),a&2){let t=e.ɵɵreference(6),n=e.ɵɵnextContext().$implicit,i=e.ɵɵnextContext();e.ɵɵproperty("routerLink",n.routerLink)("queryParams",n.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",n.routerLinkActiveOptions||e.ɵɵpureFunction0(19,K))("target",n.target)("fragment",n.fragment)("queryParamsHandling",n.queryParamsHandling)("preserveFragment",n.preserveFragment)("skipLocationChange",n.skipLocationChange)("replaceUrl",n.replaceUrl)("state",n.state),e.ɵɵattribute("id",i.getItemProp(n,"id"))("aria-disabled",i.disabled(n))("aria-label",i.getItemProp(n,"label"))("tabindex",i.disabled(n)?-1:0),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.escape!==!1)("ngIfElse",t),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",n.badge)}}function J(a,o){a&1&&e.ɵɵelementContainer(0)}var X=(a,o,t)=>({"p-tabmenuitem":!0,"p-disabled":a,"p-highlight":o,"p-hidden":t}),Y=(a,o)=>({$implicit:a,index:o});function Z(a,o){if(a&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"li",15,16),e.ɵɵlistener("click",function(i){let l=e.ɵɵrestoreView(t).$implicit,c=e.ɵɵnextContext();return e.ɵɵresetView(c.itemClick(i,l))})("keydown",function(i){let r=e.ɵɵrestoreView(t),l=r.index,c=r.$implicit,m=e.ɵɵnextContext();return e.ɵɵresetView(m.onKeydownItem(i,l,c))})("focus",function(){let r=e.ɵɵrestoreView(t).$implicit,l=e.ɵɵnextContext();return e.ɵɵresetView(l.onMenuItemFocus(r))}),e.ɵɵtemplate(2,N,8,10,"a",17)(3,G,8,20,"a",18)(4,J,1,0,"ng-container",19),e.ɵɵelementEnd()}if(a&2){let t=o.$implicit,n=o.index,i=e.ɵɵnextContext();e.ɵɵclassMap(t.styleClass),e.ɵɵproperty("ngStyle",t.style)("ngClass",e.ɵɵpureFunction3(11,X,i.getItemProp(t,"disabled"),i.isActive(t),t.visible===!1))("tooltipOptions",t.tooltipOptions),e.ɵɵattribute("data-p-disabled",i.disabled(t))("data-p-highlight",i.focusedItemInfo()===t),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.routerLink&&!i.itemTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.routerLink&&!i.itemTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",e.ɵɵpureFunction2(15,Y,t,n))}}function ee(a,o){a&1&&e.ɵɵelement(0,"ChevronRightIcon"),a&2&&e.ɵɵattribute("aria-hidden",!0)}function te(a,o){}function ne(a,o){a&1&&e.ɵɵtemplate(0,te,0,0,"ng-template")}function ie(a,o){if(a&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"button",32,33),e.ɵɵlistener("click",function(){e.ɵɵrestoreView(t);let i=e.ɵɵnextContext();return e.ɵɵresetView(i.navForward())}),e.ɵɵtemplate(2,ee,1,1,"ChevronRightIcon",13)(3,ne,1,0,null,14),e.ɵɵelementEnd()}if(a&2){let t=e.ɵɵnextContext();e.ɵɵadvance(2),e.ɵɵproperty("ngIf",!t.previousIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.nextIconTemplate)}}var ae=a=>({"p-tabmenu p-component":!0,"p-tabmenu-scrollable":a}),Te=(()=>{class a{platformId;router;route;cd;set model(t){this._model=t,this._focusableItems=(this._model||[]).reduce((n,i)=>(n.push(i),n),[])}get model(){return this._model}activeItem;scrollable;popup;style;styleClass;ariaLabel;ariaLabelledBy;activeItemChange=new y;content;navbar;inkbar;prevBtn;nextBtn;tabLink;tab;templates;itemTemplate;previousIconTemplate;nextIconTemplate;tabChanged;backwardIsDisabled=!0;forwardIsDisabled=!1;timerIdForInitialAutoScroll=null;_focusableItems;_model;focusedItemInfo=C(null);get focusableItems(){return(!this._focusableItems||!this._focusableItems.length)&&(this._focusableItems=(this.model||[]).reduce((t,n)=>(t.push(n),t),[])),this._focusableItems}constructor(t,n,i,r){this.platformId=t,this.router=n,this.route=i,this.cd=r}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"item":this.itemTemplate=t.template;break;case"nexticon":this.nextIconTemplate=t.template;break;case"previousicon":this.previousIconTemplate=t.template;break;default:this.itemTemplate=t.template;break}})}ngAfterViewInit(){I(this.platformId)&&(this.updateInkBar(),this.initAutoScrollForActiveItem(),this.initButtonState())}ngAfterViewChecked(){this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}ngOnDestroy(){this.clearAutoScrollHandler()}isActive(t){if(t.routerLink){let n=Array.isArray(t.routerLink)?t.routerLink:[t.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),t.routerLinkActiveOptions?.exact??t.routerLinkActiveOptions??!1)}return t===this.activeItem}getItemProp(t,n){return t?L.getItemValue(t[n]):void 0}visible(t){return typeof t.visible=="function"?t.visible():t.visible!==!1}disabled(t){return typeof t.disabled=="function"?t.disabled():t.disabled}onMenuItemFocus(t){this.focusedItemInfo.set(t)}itemClick(t,n){if(n.disabled){t.preventDefault();return}!n.url&&!n.routerLink&&t.preventDefault(),n.command&&n.command({originalEvent:t,item:n}),this.activeItem=n,this.activeItemChange.emit(n),this.tabChanged=!0,this.cd.markForCheck()}onKeydownItem(t,n,i){let r=n,l={},c=this.tabLink.toArray(),m=this.tab.toArray();switch(t.code){case"ArrowRight":l=this.findNextItem(m,r),r=l.i;break;case"ArrowLeft":l=this.findPrevItem(m,r),r=l.i;break;case"End":l=this.findPrevItem(m,this.model.length),r=l.i,t.preventDefault();break;case"Home":l=this.findNextItem(m,-1),r=l.i,t.preventDefault();break;case"Space":case"Enter":this.itemClick(t,i);break;case"Tab":this.onTabKeyDown(c);break;default:break}c[r]&&c[n]&&(c[n].nativeElement.tabIndex="-1",c[r].nativeElement.tabIndex="0",c[r].nativeElement.focus()),this.cd.markForCheck()}onTabKeyDown(t){t.forEach(n=>{n.nativeElement.tabIndex=s.getAttribute(n.nativeElement.parentElement,"data-p-highlight")?"0":"-1"})}findNextItem(t,n){let i=n+1;if(i>=t.length)return{nextItem:t[t.length],i:t.length};let r=t[i];return r?s.getAttribute(r.nativeElement,"data-p-disabled")?this.findNextItem(t,i):{nextItem:r.nativeElement,i}:null}findPrevItem(t,n){let i=n-1;if(i<0)return{prevItem:t[0],i:0};let r=t[i];return r?s.getAttribute(r.nativeElement,"data-p-disabled")?this.findPrevItem(t,i):{prevItem:r.nativeElement,i}:null}updateInkBar(){let t=s.findSingle(this.navbar?.nativeElement,"li.p-highlight");t&&(this.inkbar.nativeElement.style.width=s.getWidth(t)+"px",this.inkbar.nativeElement.style.left=s.getOffset(t).left-s.getOffset(this.navbar?.nativeElement).left+"px")}getVisibleButtonWidths(){return[this.prevBtn?.nativeElement,this.nextBtn?.nativeElement].reduce((t,n)=>n?t+s.getWidth(n):t,0)}updateButtonState(){let t=this.content?.nativeElement,{scrollLeft:n,scrollWidth:i}=t,r=s.getWidth(t);this.backwardIsDisabled=n===0,this.forwardIsDisabled=parseInt(n)===i-r}updateScrollBar(t){let n=this.navbar?.nativeElement.children[t];n&&n.scrollIntoView({block:"nearest",inline:"center"})}onScroll(t){this.scrollable&&this.updateButtonState(),t.preventDefault()}navBackward(){let t=this.content?.nativeElement,n=s.getWidth(t)-this.getVisibleButtonWidths(),i=t.scrollLeft-n;t.scrollLeft=i<=0?0:i}navForward(){let t=this.content?.nativeElement,n=s.getWidth(t)-this.getVisibleButtonWidths(),i=t.scrollLeft+n,r=t.scrollWidth-n;t.scrollLeft=i>=r?r:i}initAutoScrollForActiveItem(){this.scrollable&&(this.clearAutoScrollHandler(),this.timerIdForInitialAutoScroll=setTimeout(()=>{let t=this.model.findIndex(n=>this.isActive(n));t!==-1&&this.updateScrollBar(t)}))}clearAutoScrollHandler(){this.timerIdForInitialAutoScroll&&(clearTimeout(this.timerIdForInitialAutoScroll),this.timerIdForInitialAutoScroll=null)}initButtonState(){this.scrollable&&Promise.resolve().then(()=>{this.updateButtonState(),this.cd.markForCheck()})}static ɵfac=function(n){return new(n||a)(e.ɵɵdirectiveInject(k),e.ɵɵdirectiveInject(u.Router),e.ɵɵdirectiveInject(u.ActivatedRoute),e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:a,selectors:[["p-tabMenu"]],contentQueries:function(n,i,r){if(n&1&&e.ɵɵcontentQuery(r,T,4),n&2){let l;e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&(e.ɵɵviewQuery(M,5),e.ɵɵviewQuery(S,5),e.ɵɵviewQuery(E,5),e.ɵɵviewQuery(A,5),e.ɵɵviewQuery(R,5),e.ɵɵviewQuery(P,5),e.ɵɵviewQuery(B,5)),n&2){let r;e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.content=r.first),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.navbar=r.first),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.inkbar=r.first),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.prevBtn=r.first),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.nextBtn=r.first),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.tabLink=r),e.ɵɵqueryRefresh(r=e.ɵɵloadQuery())&&(i.tab=r)}},hostAttrs:[1,"p-element"],inputs:{model:"model",activeItem:"activeItem",scrollable:"scrollable",popup:"popup",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{activeItemChange:"activeItemChange"},decls:11,vars:11,consts:[[3,"ngClass","ngStyle"],[1,"p-tabmenu-nav-container"],["class","p-tabmenu-nav-prev p-tabmenu-nav-btn p-link","type","button","role","navigation","pRipple","",3,"click",4,"ngIf"],[1,"p-tabmenu-nav-content",3,"scroll"],["content",""],["role","menubar",1,"p-tabmenu-nav","p-reset"],["navbar",""],["role","presentation","pTooltip","",3,"ngStyle","class","ngClass","tooltipOptions","click","keydown","focus",4,"ngFor","ngForOf"],["role","none",1,"p-tabmenu-ink-bar"],["inkbar",""],["class","p-tabmenu-nav-next p-tabmenu-nav-btn p-link","type","button","role","navigation","pRipple","",3,"click",4,"ngIf"],["type","button","role","navigation","pRipple","",1,"p-tabmenu-nav-prev","p-tabmenu-nav-btn","p-link",3,"click"],["prevBtn",""],[4,"ngIf"],[4,"ngTemplateOutlet"],["role","presentation","pTooltip","",3,"ngStyle","ngClass","tooltipOptions","click","keydown","focus"],["tab",""],["class","p-menuitem-link","role","menuitem","pRipple","",3,"target",4,"ngIf"],["role","menuitem","class","p-menuitem-link","pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","menuitem","pRipple","",1,"p-menuitem-link",3,"target"],["tabLink",""],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],["role","menuitem","pRipple","",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["htmlRouteLabel",""],["type","button","role","navigation","pRipple","",1,"p-tabmenu-nav-next","p-tabmenu-nav-btn","p-link",3,"click"],["nextBtn",""]],template:function(n,i){n&1&&(e.ɵɵelementStart(0,"div",0)(1,"div",1),e.ɵɵtemplate(2,V,4,2,"button",2),e.ɵɵelementStart(3,"div",3,4),e.ɵɵlistener("scroll",function(l){return i.onScroll(l)}),e.ɵɵelementStart(5,"ul",5,6),e.ɵɵtemplate(7,Z,5,18,"li",7),e.ɵɵelement(8,"li",8,9),e.ɵɵelementEnd()(),e.ɵɵtemplate(10,ie,4,2,"button",10),e.ɵɵelementEnd()()),n&2&&(e.ɵɵclassMap(i.styleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(9,ae,i.scrollable))("ngStyle",i.style),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",i.scrollable&&!i.backwardIsDisabled),e.ɵɵadvance(3),e.ɵɵattribute("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",i.focusableItems),e.ɵɵadvance(3),e.ɵɵproperty("ngIf",i.scrollable&&!i.forwardIsDisabled))},dependencies:()=>[p.NgClass,p.NgForOf,p.NgIf,p.NgTemplateOutlet,p.NgStyle,u.RouterLink,u.RouterLinkActive,v.Ripple,h.Tooltip,_,g],styles:[`@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}
`],encapsulation:2,changeDetection:0})}return a})(),we=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=e.ɵɵdefineNgModule({type:a});static ɵinj=e.ɵɵdefineInjector({imports:[x,d,b,w,f,_,g,d,b,f]})}return a})();export{Te as TabMenu,we as TabMenuModule};