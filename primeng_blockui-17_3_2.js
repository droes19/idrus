import*as a from"@angular/common";import{isPlatformBrowser as c,DOCUMENT as h,CommonModule as u}from"@angular/common";import*as e from"@angular/core";import{PLATFORM_ID as f}from"@angular/core";import*as m from"primeng/api";import{PrimeTemplate as k}from"primeng/api";import{DomHandler as r}from"primeng/dom";import{ZIndexUtils as d}from"primeng/utils";var g=["mask"];function y(i,C){i&1&&e.ɵɵelementContainer(0)}var b=i=>({"p-blockui-document":i,"p-blockui p-component-overlay p-component-overlay-enter":!0}),v=()=>({display:"none"}),I=["*"],S=(()=>{class i{document;el;cd;config;renderer;platformId;target;autoZIndex=!0;baseZIndex=0;styleClass;get blocked(){return this._blocked}set blocked(n){this.mask&&this.mask.nativeElement?n?this.block():this.unblock():this._blocked=n}templates;mask;_blocked=!1;animationEndListener;contentTemplate;constructor(n,t,o,s,l,p){this.document=n,this.el=t,this.cd=o,this.config=s,this.renderer=l,this.platformId=p}ngAfterViewInit(){if(this._blocked&&this.block(),this.target&&!this.target.getBlockableElement)throw"Target of BlockUI must implement BlockableUI interface"}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"content":this.contentTemplate=n.template;break;default:this.contentTemplate=n.template;break}})}block(){c(this.platformId)&&(this._blocked=!0,this.mask.nativeElement.style.display="flex",this.target?(this.target.getBlockableElement().appendChild(this.mask.nativeElement),this.target.getBlockableElement().style.position="relative"):(this.renderer.appendChild(this.document.body,this.mask.nativeElement),r.blockBodyScroll()),this.autoZIndex&&d.set("modal",this.mask.nativeElement,this.baseZIndex+this.config.zIndex.modal))}unblock(){c(this.platformId)&&this.mask&&!this.animationEndListener&&(this.animationEndListener=this.renderer.listen(this.mask.nativeElement,"animationend",this.destroyModal.bind(this)),r.addClass(this.mask.nativeElement,"p-component-overlay-leave"))}destroyModal(){this._blocked=!1,this.mask&&c(this.platformId)&&(d.clear(this.mask.nativeElement),r.removeClass(this.mask.nativeElement,"p-component-overlay-leave"),this.renderer.removeChild(this.el.nativeElement,this.mask.nativeElement),r.unblockBodyScroll()),this.unbindAnimationEndListener(),this.cd.markForCheck()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.unblock(),this.destroyModal()}static ɵfac=function(t){return new(t||i)(e.ɵɵdirectiveInject(h),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(m.PrimeNGConfig),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(f))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-blockUI"]],contentQueries:function(t,o,s){if(t&1&&e.ɵɵcontentQuery(s,k,4),t&2){let l;e.ɵɵqueryRefresh(l=e.ɵɵloadQuery())&&(o.templates=l)}},viewQuery:function(t,o){if(t&1&&e.ɵɵviewQuery(g,5),t&2){let s;e.ɵɵqueryRefresh(s=e.ɵɵloadQuery())&&(o.mask=s.first)}},hostAttrs:[1,"p-element"],inputs:{target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",styleClass:"styleClass",blocked:"blocked"},ngContentSelectors:I,decls:4,vars:11,consts:[[3,"ngClass","ngStyle"],["mask",""],[4,"ngTemplateOutlet"]],template:function(t,o){t&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"div",0,1),e.ɵɵprojection(2),e.ɵɵtemplate(3,y,1,0,"ng-container",2),e.ɵɵelementEnd()),t&2&&(e.ɵɵclassMap(o.styleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(8,b,!o.target))("ngStyle",e.ɵɵpureFunction0(10,v)),e.ɵɵattribute("aria-busy",o.blocked)("data-pc-name","blockui")("data-pc-section","root"),e.ɵɵadvance(3),e.ɵɵproperty("ngTemplateOutlet",o.contentTemplate))},dependencies:[a.NgClass,a.NgTemplateOutlet,a.NgStyle],styles:[`@layer primeng{.p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}}
`],encapsulation:2,changeDetection:0})}return i})(),N=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=e.ɵɵdefineNgModule({type:i});static ɵinj=e.ɵɵdefineInjector({imports:[u]})}return i})();export{S as BlockUI,N as BlockUIModule};