import*as s from"@angular/common";import{CommonModule as f}from"@angular/common";import*as t from"@angular/core";import{forwardRef as C,EventEmitter as p,signal as x}from"@angular/core";import{NG_VALUE_ACCESSOR as y}from"@angular/forms";import*as g from"primeng/api";import{PrimeTemplate as I,SharedModule as h}from"primeng/api";import{BanIcon as u}from"primeng/icons/ban";import{StarIcon as m}from"primeng/icons/star";import{StarFillIcon as d}from"primeng/icons/starfill";import{DomHandler as _}from"primeng/dom";import{UniqueComponentId as S}from"primeng/utils";function v(n,o){if(n&1&&t.ɵɵelement(0,"span",10),n&2){let e=t.ɵɵnextContext(3);t.ɵɵproperty("ngClass",e.iconCancelClass)("ngStyle",e.iconCancelStyle)}}function O(n,o){if(n&1&&t.ɵɵelement(0,"BanIcon",11),n&2){let e=t.ɵɵnextContext(3);t.ɵɵproperty("styleClass","p-rating-icon p-rating-cancel")("ngStyle",e.iconCancelStyle),t.ɵɵattribute("data-pc-section","cancelIcon")}}var T=n=>({"p-focus":n});function b(n,o){if(n&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"div",5),t.ɵɵlistener("click",function(i){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext(2);return t.ɵɵresetView(c.onOptionClick(i,0))}),t.ɵɵelementStart(1,"span",6)(2,"input",7),t.ɵɵlistener("focus",function(i){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext(2);return t.ɵɵresetView(c.onInputFocus(i,0))})("blur",function(i){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext(2);return t.ɵɵresetView(c.onInputBlur(i))})("change",function(i){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext(2);return t.ɵɵresetView(c.onChange(i,0))}),t.ɵɵelementEnd()(),t.ɵɵtemplate(3,v,1,2,"span",8)(4,O,1,3,"BanIcon",9),t.ɵɵelementEnd()}if(n&2){let e=t.ɵɵnextContext(2);t.ɵɵproperty("ngClass",t.ɵɵpureFunction1(10,T,e.focusedOptionIndex()===0&&e.isFocusVisible)),t.ɵɵattribute("data-pc-section","cancelItem"),t.ɵɵadvance(1),t.ɵɵattribute("data-p-hidden-accessible",!0),t.ɵɵadvance(1),t.ɵɵproperty("name",e.name)("checked",e.value===0)("disabled",e.disabled)("readonly",e.readonly),t.ɵɵattribute("aria-label",e.cancelAriaLabel()),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.iconCancelClass),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!e.iconCancelClass)}}function R(n,o){if(n&1&&t.ɵɵelement(0,"span",16),n&2){let e=t.ɵɵnextContext(4);t.ɵɵproperty("ngStyle",e.iconOffStyle)("ngClass",e.iconOffClass),t.ɵɵattribute("data-pc-section","offIcon")}}function w(n,o){if(n&1&&t.ɵɵelement(0,"StarIcon",17),n&2){let e=t.ɵɵnextContext(4);t.ɵɵproperty("ngStyle",e.iconOffStyle)("styleClass","p-rating-icon"),t.ɵɵattribute("data-pc-section","offIcon")}}function F(n,o){if(n&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,R,1,3,"span",14)(2,w,1,3,"StarIcon",15),t.ɵɵelementContainerEnd()),n&2){let e=t.ɵɵnextContext(3);t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.iconOffClass),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!e.iconOffClass)}}function V(n,o){if(n&1&&t.ɵɵelement(0,"span",19),n&2){let e=t.ɵɵnextContext(4);t.ɵɵproperty("ngStyle",e.iconOnStyle)("ngClass",e.iconOnClass),t.ɵɵattribute("data-pc-section","onIcon")}}function k(n,o){if(n&1&&t.ɵɵelement(0,"StarFillIcon",17),n&2){let e=t.ɵɵnextContext(4);t.ɵɵproperty("ngStyle",e.iconOnStyle)("styleClass","p-rating-icon p-rating-icon-active"),t.ɵɵattribute("data-pc-section","onIcon")}}function E(n,o){if(n&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,V,1,3,"span",18)(2,k,1,3,"StarFillIcon",15),t.ɵɵelementContainerEnd()),n&2){let e=t.ɵɵnextContext(3);t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.iconOnClass),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!e.iconOnClass)}}var M=(n,o)=>({"p-rating-item-active":n,"p-focus":o});function A(n,o){if(n&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"div",12),t.ɵɵlistener("click",function(i){let r=t.ɵɵrestoreView(e).$implicit,l=t.ɵɵnextContext(2);return t.ɵɵresetView(l.onOptionClick(i,r+1))}),t.ɵɵelementStart(1,"span",6)(2,"input",7),t.ɵɵlistener("focus",function(i){let r=t.ɵɵrestoreView(e).$implicit,l=t.ɵɵnextContext(2);return t.ɵɵresetView(l.onInputFocus(i,r+1))})("blur",function(i){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext(2);return t.ɵɵresetView(c.onInputBlur(i))})("change",function(i){let r=t.ɵɵrestoreView(e).$implicit,l=t.ɵɵnextContext(2);return t.ɵɵresetView(l.onChange(i,r+1))}),t.ɵɵelementEnd()(),t.ɵɵtemplate(3,F,3,2,"ng-container",13)(4,E,3,2,"ng-container",13),t.ɵɵelementEnd()}if(n&2){let e=o.$implicit,a=o.index,i=t.ɵɵnextContext(2);t.ɵɵproperty("ngClass",t.ɵɵpureFunction2(9,M,e+1<=i.value,e+1===i.focusedOptionIndex()&&i.isFocusVisible)),t.ɵɵadvance(1),t.ɵɵattribute("data-p-hidden-accessible",!0),t.ɵɵadvance(1),t.ɵɵproperty("name",i.name)("checked",i.value===0)("disabled",i.disabled)("readonly",i.readonly),t.ɵɵattribute("aria-label",i.starAriaLabel(e+1)),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!i.value||a>=i.value),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",i.value&&a<i.value)}}function B(n,o){if(n&1&&(t.ɵɵelementContainerStart(0),t.ɵɵtemplate(1,b,5,12,"div",3)(2,A,5,12,"ng-template",4),t.ɵɵelementContainerEnd()),n&2){let e=t.ɵɵnextContext();t.ɵɵadvance(1),t.ɵɵproperty("ngIf",e.cancel),t.ɵɵadvance(1),t.ɵɵproperty("ngForOf",e.starsArray)}}function N(n,o){n&1&&t.ɵɵelementContainer(0)}function D(n,o){if(n&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"span",22),t.ɵɵlistener("click",function(i){t.ɵɵrestoreView(e);let c=t.ɵɵnextContext(2);return t.ɵɵresetView(c.onOptionClick(i,0))}),t.ɵɵtemplate(1,N,1,0,"ng-container",23),t.ɵɵelementEnd()}if(n&2){let e=t.ɵɵnextContext(2);t.ɵɵproperty("ngStyle",e.iconCancelStyle),t.ɵɵattribute("data-pc-section","cancelIcon"),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",e.cancelIconTemplate)}}function L(n,o){n&1&&t.ɵɵelementContainer(0)}function $(n,o){if(n&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"span",24),t.ɵɵlistener("click",function(i){let r=t.ɵɵrestoreView(e).$implicit,l=t.ɵɵnextContext(2);return t.ɵɵresetView(l.onOptionClick(i,r+1))}),t.ɵɵtemplate(1,L,1,0,"ng-container",23),t.ɵɵelementEnd()}if(n&2){let e=o.index,a=t.ɵɵnextContext(2);t.ɵɵattribute("data-pc-section","onIcon"),t.ɵɵadvance(1),t.ɵɵproperty("ngTemplateOutlet",a.getIconTemplate(e))}}function j(n,o){if(n&1&&t.ɵɵtemplate(0,D,2,3,"span",20)(1,$,2,2,"span",21),n&2){let e=t.ɵɵnextContext();t.ɵɵproperty("ngIf",e.cancel),t.ɵɵadvance(1),t.ɵɵproperty("ngForOf",e.starsArray)}}var Q=(n,o)=>({"p-readonly":n,"p-disabled":o}),G={provide:y,useExisting:C(()=>P),multi:!0},P=(()=>{class n{cd;config;disabled;readonly;stars=5;cancel=!0;iconOnClass;iconOnStyle;iconOffClass;iconOffStyle;iconCancelClass;iconCancelStyle;onRate=new p;onCancel=new p;onFocus=new p;onBlur=new p;templates;onIconTemplate;offIconTemplate;cancelIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};starsArray;isFocusVisibleItem=!0;focusedOptionIndex=x(-1);name;constructor(e,a){this.cd=e,this.config=a}ngOnInit(){this.name=this.name||S(),this.starsArray=[];for(let e=0;e<this.stars;e++)this.starsArray[e]=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"onicon":this.onIconTemplate=e.template;break;case"officon":this.offIconTemplate=e.template;break;case"cancelicon":this.cancelIconTemplate=e.template;break}})}onOptionClick(e,a){if(!this.readonly&&!this.disabled){this.onOptionSelect(e,a),this.isFocusVisibleItem=!1;let i=_.getFirstFocusableElement(e.currentTarget,"");i&&_.focus(i)}}onOptionSelect(e,a){this.focusedOptionIndex.set(a),this.updateModel(e,a||null)}onChange(e,a){this.onOptionSelect(e,a),this.isFocusVisibleItem=!0}onInputBlur(e){this.focusedOptionIndex.set(-1),this.onBlur.emit(e)}onInputFocus(e,a){this.focusedOptionIndex.set(a),this.onFocus.emit(e)}updateModel(e,a){this.value=a,this.onModelChange(this.value),this.onModelTouched(),a?this.onRate.emit({originalEvent:e,value:a}):this.onCancel.emit()}cancelAriaLabel(){return this.config.translation.clear}starAriaLabel(e){return e===1?this.config.translation.aria.star:this.config.translation.aria.stars.replace(/{star}/g,e)}getIconTemplate(e){return!this.value||e>=this.value?this.offIconTemplate:this.onIconTemplate}writeValue(e){this.value=e,this.cd.detectChanges()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get isCustomIcon(){return this.templates&&this.templates.length>0}static ɵfac=function(a){return new(a||n)(t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(g.PrimeNGConfig))};static ɵcmp=t.ɵɵdefineComponent({type:n,selectors:[["p-rating"]],contentQueries:function(a,i,c){if(a&1&&t.ɵɵcontentQuery(c,I,4),a&2){let r;t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(i.templates=r)}},hostAttrs:[1,"p-element"],inputs:{disabled:"disabled",readonly:"readonly",stars:"stars",cancel:"cancel",iconOnClass:"iconOnClass",iconOnStyle:"iconOnStyle",iconOffClass:"iconOffClass",iconOffStyle:"iconOffStyle",iconCancelClass:"iconCancelClass",iconCancelStyle:"iconCancelStyle"},outputs:{onRate:"onRate",onCancel:"onCancel",onFocus:"onFocus",onBlur:"onBlur"},features:[t.ɵɵProvidersFeature([G])],decls:4,vars:8,consts:[[1,"p-rating",3,"ngClass"],[4,"ngIf","ngIfElse"],["customTemplate",""],["class","p-rating-item p-rating-cancel-item",3,"ngClass","click",4,"ngIf"],["ngFor","",3,"ngForOf"],[1,"p-rating-item","p-rating-cancel-item",3,"ngClass","click"],[1,"p-hidden-accessible"],["type","radio","value","0",3,"name","checked","disabled","readonly","focus","blur","change"],["class","p-rating-icon p-rating-cancel",3,"ngClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[1,"p-rating-icon","p-rating-cancel",3,"ngClass","ngStyle"],[3,"styleClass","ngStyle"],[1,"p-rating-item",3,"ngClass","click"],[4,"ngIf"],["class","p-rating-icon",3,"ngStyle","ngClass",4,"ngIf"],[3,"ngStyle","styleClass",4,"ngIf"],[1,"p-rating-icon",3,"ngStyle","ngClass"],[3,"ngStyle","styleClass"],["class","p-rating-icon p-rating-icon-active",3,"ngStyle","ngClass",4,"ngIf"],[1,"p-rating-icon","p-rating-icon-active",3,"ngStyle","ngClass"],["class","p-rating-icon p-rating-cancel",3,"ngStyle","click",4,"ngIf"],["class","p-rating-icon",3,"click",4,"ngFor","ngForOf"],[1,"p-rating-icon","p-rating-cancel",3,"ngStyle","click"],[4,"ngTemplateOutlet"],[1,"p-rating-icon",3,"click"]],template:function(a,i){if(a&1&&(t.ɵɵelementStart(0,"div",0),t.ɵɵtemplate(1,B,3,2,"ng-container",1)(2,j,2,2,"ng-template",null,2,t.ɵɵtemplateRefExtractor),t.ɵɵelementEnd()),a&2){let c=t.ɵɵreference(3);t.ɵɵproperty("ngClass",t.ɵɵpureFunction2(5,Q,i.readonly,i.disabled)),t.ɵɵattribute("data-pc-name","rating")("data-pc-section","root"),t.ɵɵadvance(1),t.ɵɵproperty("ngIf",!i.isCustomIcon)("ngIfElse",c)}},dependencies:()=>[s.NgClass,s.NgForOf,s.NgIf,s.NgTemplateOutlet,s.NgStyle,d,m,u],styles:[`@layer primeng{.p-rating{display:inline-flex}.p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}}
`],encapsulation:2,changeDetection:0})}return n})(),ct=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=t.ɵɵdefineNgModule({type:n});static ɵinj=t.ɵɵdefineInjector({imports:[f,d,m,u,h]})}return n})();export{G as RATING_VALUE_ACCESSOR,P as Rating,ct as RatingModule};