import*as s from"@angular/common";import{CommonModule as b}from"@angular/common";import*as e from"@angular/core";import{forwardRef as f,EventEmitter as d}from"@angular/core";import{NG_VALUE_ACCESSOR as m}from"@angular/forms";import{PrimeTemplate as _,SharedModule as C}from"primeng/api";import{CheckIcon as p}from"primeng/icons/check";import{ObjectUtils as u}from"primeng/utils";var g=["input"];function k(i,o){if(i&1&&e.ɵɵelement(0,"span",10),i&2){let t=e.ɵɵnextContext(3);e.ɵɵproperty("ngClass",t.checkboxIcon),e.ɵɵattribute("data-pc-section","icon")}}function y(i,o){i&1&&e.ɵɵelement(0,"CheckIcon",11),i&2&&(e.ɵɵproperty("styleClass","p-checkbox-icon"),e.ɵɵattribute("data-pc-section","icon"))}function x(i,o){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,k,1,2,"span",8)(2,y,1,2,"CheckIcon",9),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(2);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.checkboxIcon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.checkboxIcon)}}function v(i,o){}function I(i,o){i&1&&e.ɵɵtemplate(0,v,0,0,"ng-template")}function T(i,o){if(i&1&&(e.ɵɵelementStart(0,"span",12),e.ɵɵtemplate(1,I,1,0,null,13),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(2);e.ɵɵattribute("data-pc-section","icon"),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.checkboxIconTemplate)}}function V(i,o){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,x,3,2,"ng-container",5)(2,T,2,2,"span",7),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.checkboxIconTemplate),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.checkboxIconTemplate)}}var w=(i,o,t)=>({"p-checkbox-label":!0,"p-checkbox-label-active":i,"p-disabled":o,"p-checkbox-label-focus":t});function M(i,o){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"label",14),e.ɵɵlistener("click",function(n){e.ɵɵrestoreView(t);let l=e.ɵɵnextContext(),c=e.ɵɵreference(3);return e.ɵɵresetView(l.onClick(n,c,!0))}),e.ɵɵtext(1),e.ɵɵelementEnd()}if(i&2){let t=e.ɵɵnextContext();e.ɵɵclassMap(t.labelStyleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction3(6,w,t.checked(),t.disabled,t.focused)),e.ɵɵattribute("for",t.inputId)("data-pc-section","label"),e.ɵɵadvance(1),e.ɵɵtextInterpolate1(" ",t.label,"")}}var S=(i,o,t)=>({"p-checkbox p-component":!0,"p-checkbox-checked":i,"p-checkbox-disabled":o,"p-checkbox-focused":t}),E=(i,o,t)=>({"p-highlight":i,"p-disabled":o,"p-focus":t}),F={provide:m,useExisting:f(()=>B),multi:!0},B=(()=>{class i{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new d;onFocus=new d;onBlur=new d;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this.checkboxIconTemplate=t.template;break}})}onClick(t,a,n){t.preventDefault(),!(this.disabled||this.readonly)&&(this.updateModel(t),n&&a.focus())}updateModel(t){let a;this.binary?(a=this.checked()?this.falseValue:this.trueValue,this.model=a,this.onModelChange(a)):(this.checked()?a=this.model.filter(n=>!u.equals(n,this.value)):a=this.model?[...this.model,this.value]:[this.value],this.onModelChange(a),this.model=a,this.formControl&&this.formControl.setValue(a)),this.onChange.emit({checked:a,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:u.contains(this.value,this.model)}static ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(e.ChangeDetectorRef))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-checkbox"]],contentQueries:function(a,n,l){if(a&1&&e.ɵɵcontentQuery(l,_,4),a&2){let c;e.ɵɵqueryRefresh(c=e.ɵɵloadQuery())&&(n.templates=c)}},viewQuery:function(a,n){if(a&1&&e.ɵɵviewQuery(g,5),a&2){let l;e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(n.inputViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[e.ɵɵProvidersFeature([F])],decls:7,vars:35,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"value","checked","disabled","readonly","change","focus","blur"],["input",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(a,n){if(a&1){let l=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",0)(1,"div",1)(2,"input",2,3),e.ɵɵlistener("change",function(r){return n.handleChange(r)})("focus",function(r){return n.onInputFocus(r)})("blur",function(r){return n.onInputBlur(r)}),e.ɵɵelementEnd()(),e.ɵɵelementStart(4,"div",4),e.ɵɵlistener("click",function(r){e.ɵɵrestoreView(l);let h=e.ɵɵreference(3);return e.ɵɵresetView(n.onClick(r,h,!0))}),e.ɵɵtemplate(5,V,3,2,"ng-container",5),e.ɵɵelementEnd()(),e.ɵɵtemplate(6,M,2,10,"label",6)}a&2&&(e.ɵɵclassMap(n.styleClass),e.ɵɵproperty("ngStyle",n.style)("ngClass",e.ɵɵpureFunction3(27,S,n.checked(),n.disabled,n.focused)),e.ɵɵattribute("data-pc-name","checkbox")("data-pc-section","root"),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),e.ɵɵadvance(1),e.ɵɵproperty("value",n.value)("checked",n.checked())("disabled",n.disabled)("readonly",n.readonly),e.ɵɵattribute("id",n.inputId)("name",n.name)("tabindex",n.tabindex)("required",n.required)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-checked",n.checked())("data-pc-section","hiddenInput"),e.ɵɵadvance(2),e.ɵɵproperty("ngClass",e.ɵɵpureFunction3(31,E,n.checked(),n.disabled,n.focused)),e.ɵɵattribute("data-p-highlight",n.checked())("data-p-disabled",n.disabled)("data-p-focused",n.focused)("data-pc-section","input"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.checked()),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",n.label))},dependencies:()=>[s.NgClass,s.NgIf,s.NgTemplateOutlet,s.NgStyle,p],styles:[`@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}
`],encapsulation:2,changeDetection:0})}return i})(),W=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=e.ɵɵdefineNgModule({type:i});static ɵinj=e.ɵɵdefineInjector({imports:[b,p,C]})}return i})();export{F as CHECKBOX_VALUE_ACCESSOR,B as Checkbox,W as CheckboxModule};