import*as l from"@angular/common";import{CommonModule as d}from"@angular/common";import*as t from"@angular/core";import{forwardRef as u,EventEmitter as g}from"@angular/core";import{NG_VALUE_ACCESSOR as b}from"@angular/forms";import*as p from"primeng/ripple";import{RippleModule as f}from"primeng/ripple";import{PrimeTemplate as h,SharedModule as r}from"primeng/api";var m=(n,a)=>({"p-button-icon":!0,"p-button-icon-left":n,"p-button-icon-right":a});function C(n,a){if(n&1&&t.ɵɵelement(0,"span",4),n&2){let e=t.ɵɵnextContext(2);t.ɵɵclassMap(e.checked?e.onIcon:e.offIcon),t.ɵɵproperty("ngClass",t.ɵɵpureFunction2(4,m,e.iconPos==="left",e.iconPos==="right")),t.ɵɵattribute("data-pc-section","icon")}}function _(n,a){if(n&1&&t.ɵɵtemplate(0,C,1,7,"span",3),n&2){let e=t.ɵɵnextContext();t.ɵɵproperty("ngIf",e.onIcon||e.offIcon)}}function y(n,a){n&1&&t.ɵɵelementContainer(0)}var M=n=>({$implicit:n});function O(n,a){if(n&1&&t.ɵɵtemplate(0,y,1,0,"ng-container",5),n&2){let e=t.ɵɵnextContext();t.ɵɵproperty("ngTemplateOutlet",e.iconTemplate)("ngTemplateOutletContext",t.ɵɵpureFunction1(2,M,e.checked))}}function T(n,a){if(n&1&&(t.ɵɵelementStart(0,"span",6),t.ɵɵtext(1),t.ɵɵelementEnd()),n&2){let e=t.ɵɵnextContext();t.ɵɵattribute("data-pc-section","label"),t.ɵɵadvance(1),t.ɵɵtextInterpolate(e.checked?e.hasOnLabel?e.onLabel:"":e.hasOffLabel?e.offLabel:"")}}var L=(n,a,e)=>({"p-button p-togglebutton p-component":!0,"p-button-icon-only":n,"p-highlight":a,"p-disabled":e}),k={provide:b,useExisting:u(()=>P),multi:!0},P=(()=>{class n{cd;onLabel;offLabel;onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;iconPos="left";onChange=new g;templates;iconTemplate;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(e){this.cd=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this.iconTemplate=e.template;break;default:this.iconTemplate=e.template;break}})}toggle(e){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}static ɵfac=function(i){return new(i||n)(t.ɵɵdirectiveInject(t.ChangeDetectorRef))};static ɵcmp=t.ɵɵdefineComponent({type:n,selectors:[["p-toggleButton"]],contentQueries:function(i,o,s){if(i&1&&t.ɵɵcontentQuery(s,h,4),i&2){let c;t.ɵɵqueryRefresh(c=t.ɵɵloadQuery())&&(o.templates=c)}},hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[t.ɵɵProvidersFeature([k])],decls:4,vars:16,consts:[["role","switch","pRipple","",3,"ngClass","ngStyle","click","keydown"],[3,"class","ngClass"],["class","p-button-label",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-button-label"]],template:function(i,o){i&1&&(t.ɵɵelementStart(0,"div",0),t.ɵɵlistener("click",function(c){return o.toggle(c)})("keydown",function(c){return o.onKeyDown(c)}),t.ɵɵtemplate(1,_,1,1,"span",1)(2,O,1,4)(3,T,2,2,"span",2),t.ɵɵelementEnd()),i&2&&(t.ɵɵclassMap(o.styleClass),t.ɵɵproperty("ngClass",t.ɵɵpureFunction3(12,L,o.onIcon&&o.offIcon&&!o.hasOnLabel&&!o.hasOffLabel,o.checked,o.disabled))("ngStyle",o.style),t.ɵɵattribute("tabindex",o.disabled?null:o.tabindex)("aria-checked",o.checked)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("data-pc-name","togglebutton")("data-pc-section","root"),t.ɵɵadvance(1),t.ɵɵconditional(1,o.iconTemplate?2:1),t.ɵɵadvance(2),t.ɵɵproperty("ngIf",o.onLabel||o.offLabel))},dependencies:[l.NgClass,l.NgIf,l.NgTemplateOutlet,l.NgStyle,p.Ripple],styles:["@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}"],changeDetection:0})}return n})(),A=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=t.ɵɵdefineNgModule({type:n});static ɵinj=t.ɵɵdefineInjector({imports:[d,f,r,r]})}return n})();export{k as TOGGLEBUTTON_VALUE_ACCESSOR,P as ToggleButton,A as ToggleButtonModule};