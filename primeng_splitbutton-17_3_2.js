import*as a from"@angular/common";import{CommonModule as f}from"@angular/common";import*as t from"@angular/core";import{EventEmitter as u,signal as y}from"@angular/core";import{PrimeTemplate as _}from"primeng/api";import*as c from"primeng/button";import{ButtonModule as s}from"primeng/button";import{ChevronDownIcon as m}from"primeng/icons/chevrondown";import*as b from"primeng/tieredmenu";import{TieredMenuModule as d}from"primeng/tieredmenu";import{UniqueComponentId as w}from"primeng/utils";var C=["container"],h=["defaultbtn"],g=["menu"];function T(i,p){i&1&&t.ɵɵelementContainer(0)}function B(i,p){if(i&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementContainerStart(0),t.ɵɵelementStart(1,"button",9),t.ɵɵlistener("click",function(n){t.ɵɵrestoreView(e);let o=t.ɵɵnextContext();return t.ɵɵresetView(o.onDefaultButtonClick(n))}),t.ɵɵtemplate(2,T,1,0,"ng-container",6),t.ɵɵelementEnd(),t.ɵɵelementContainerEnd()}if(i&2){let e=t.ɵɵnextContext();t.ɵɵadvance(1),t.ɵɵproperty("icon",e.icon)("iconPos",e.iconPos)("disabled",e.disabled),t.ɵɵattribute("tabindex",e.tabindex)("aria-label",(e.buttonProps==null?null:e.buttonProps["aria-label"])||e.label),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.contentTemplate)}}function S(i,p){if(i&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"button",10,11),t.ɵɵlistener("click",function(n){t.ɵɵrestoreView(e);let o=t.ɵɵnextContext();return t.ɵɵresetView(o.onDefaultButtonClick(n))}),t.ɵɵelementEnd()}if(i&2){let e=t.ɵɵnextContext();t.ɵɵproperty("icon",e.icon)("iconPos",e.iconPos)("label",e.label)("disabled",e.disabled),t.ɵɵattribute("tabindex",e.tabindex)("aria-label",e.buttonProps==null?null:e.buttonProps["aria-label"])}}function k(i,p){i&1&&t.ɵɵelement(0,"ChevronDownIcon")}function v(i,p){}function P(i,p){i&1&&t.ɵɵtemplate(0,v,0,0,"ng-template")}var K=(()=>{class i{model;icon;iconPos="left";label;style;styleClass;menuStyle;menuStyleClass;disabled;tabindex;appendTo;dir;expandAriaLabel;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";buttonProps;menuButtonProps;onClick=new u;onDropdownClick=new u;containerViewChild;buttonViewChild;menu;templates;contentTemplate;dropdownIconTemplate;ariaId;isExpanded=y(!1);ngOnInit(){this.ariaId=w()}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"dropdownicon":this.dropdownIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}onDefaultButtonClick(e){this.onClick.emit(e),this.menu.hide()}onDropdownButtonClick(e){this.onDropdownClick.emit(e),this.menu?.toggle({currentTarget:this.containerViewChild?.nativeElement,relativeAlign:this.appendTo==null}),this.isExpanded.set(this.menu.visible)}onDropdownButtonKeydown(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())}static ɵfac=function(l){return new(l||i)};static ɵcmp=t.ɵɵdefineComponent({type:i,selectors:[["p-splitButton"]],contentQueries:function(l,n,o){if(l&1&&t.ɵɵcontentQuery(o,_,4),l&2){let r;t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(n.templates=r)}},viewQuery:function(l,n){if(l&1&&(t.ɵɵviewQuery(C,5),t.ɵɵviewQuery(h,5),t.ɵɵviewQuery(g,5)),l&2){let o;t.ɵɵqueryRefresh(o=t.ɵɵloadQuery())&&(n.containerViewChild=o.first),t.ɵɵqueryRefresh(o=t.ɵɵloadQuery())&&(n.buttonViewChild=o.first),t.ɵɵqueryRefresh(o=t.ɵɵloadQuery())&&(n.menu=o.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",icon:"icon",iconPos:"iconPos",label:"label",style:"style",styleClass:"styleClass",menuStyle:"menuStyle",menuStyleClass:"menuStyleClass",disabled:"disabled",tabindex:"tabindex",appendTo:"appendTo",dir:"dir",expandAriaLabel:"expandAriaLabel",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonProps:"buttonProps",menuButtonProps:"menuButtonProps"},outputs:{onClick:"onClick",onDropdownClick:"onDropdownClick"},decls:10,vars:22,consts:[[3,"ngClass","ngStyle"],["container",""],[4,"ngIf","ngIfElse"],["defaultButton",""],["type","button","pButton","",1,"p-splitbutton-menubutton","p-button-icon-only",3,"disabled","click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"id","popup","model","styleClass","appendTo","showTransitionOptions","hideTransitionOptions"],["menu",""],["type","button","pButton","",1,"p-splitbutton-defaultbutton",3,"icon","iconPos","disabled","click"],["type","button","pButton","",1,"p-splitbutton-defaultbutton",3,"icon","iconPos","label","disabled","click"],["defaultbtn",""]],template:function(l,n){if(l&1&&(t.ɵɵelementStart(0,"div",0,1),t.ɵɵtemplate(2,B,3,6,"ng-container",2)(3,S,2,6,"ng-template",null,3,t.ɵɵtemplateRefExtractor),t.ɵɵelementStart(5,"button",4),t.ɵɵlistener("click",function(r){return n.onDropdownButtonClick(r)})("keydown",function(r){return n.onDropdownButtonKeydown(r)}),t.ɵɵtemplate(6,k,1,0,"ChevronDownIcon",5)(7,P,1,0,null,6),t.ɵɵelementEnd(),t.ɵɵelement(8,"p-tieredMenu",7,8),t.ɵɵelementEnd()),l&2){let o=t.ɵɵreference(4);t.ɵɵclassMap(n.styleClass),t.ɵɵproperty("ngClass","p-splitbutton p-component")("ngStyle",n.style),t.ɵɵadvance(2),t.ɵɵproperty("ngIf",n.contentTemplate)("ngIfElse",o),t.ɵɵadvance(3),t.ɵɵproperty("disabled",n.disabled),t.ɵɵattribute("aria-label",(n.menuButtonProps==null?null:n.menuButtonProps["aria-label"])||n.expandAriaLabel)("aria-aria-haspopup",(n.menuButtonProps==null?null:n.menuButtonProps["aria-haspopup"])||!0)("aria-expanded",(n.menuButtonProps==null?null:n.menuButtonProps["aria-expanded"])||n.isExpanded())("aria-controls",(n.menuButtonProps==null?null:n.menuButtonProps["aria-controls"])||n.ariaId),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!n.dropdownIconTemplate),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",n.dropdownIconTemplate),t.ɵɵadvance(1),t.ɵɵstyleMap(n.menuStyle),t.ɵɵproperty("id",n.ariaId)("popup",!0)("model",n.model)("styleClass",n.menuStyleClass)("appendTo",n.appendTo)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}},dependencies:()=>[a.NgClass,a.NgIf,a.NgTemplateOutlet,a.NgStyle,c.ButtonDirective,b.TieredMenu,m],styles:[`@layer primeng{.p-splitbutton{display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton,.p-splitbutton.p-button-rounded>.p-splitbutton-defaultbutton.p-button,.p-splitbutton.p-button-outlined>.p-splitbutton-defaultbutton.p-button{flex:1 1 auto;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0 none}.p-splitbutton-menubutton,.p-splitbutton.p-button-rounded>.p-splitbutton-menubutton.p-button,.p-splitbutton.p-button-outlined>.p-splitbutton-menubutton.p-button{display:flex;align-items:center;justify-content:center;border-top-left-radius:0;border-bottom-left-radius:0}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:flex}}
`],encapsulation:2,changeDetection:0})}return i})(),U=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=t.ɵɵdefineNgModule({type:i});static ɵinj=t.ɵɵdefineInjector({imports:[f,s,d,m,s,d]})}return i})();export{K as SplitButton,U as SplitButtonModule};