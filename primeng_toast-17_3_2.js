import{style as c,state as x,animate as u,transition as d,trigger as h,animateChild as w,query as b}from"@angular/animations";import*as r from"@angular/common";import{DOCUMENT as O,CommonModule as k}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as f}from"@angular/core";import*as l from"primeng/api";import{PrimeTemplate as E,SharedModule as S}from"primeng/api";import{CheckIcon as _}from"primeng/icons/check";import{ExclamationTriangleIcon as g}from"primeng/icons/exclamationtriangle";import{InfoCircleIcon as T}from"primeng/icons/infocircle";import{TimesIcon as y}from"primeng/icons/times";import{TimesCircleIcon as I}from"primeng/icons/timescircle";import*as C from"primeng/ripple";import{RippleModule as M}from"primeng/ripple";import{UniqueComponentId as A,ZIndexUtils as p,ObjectUtils as V}from"primeng/utils";var v=["container"];function D(i,a){i&1&&e.ɵɵelementContainer(0)}var F=(i,a)=>({$implicit:i,closeFn:a});function P(i,a){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,D,1,0,"ng-container",4),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext();e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",e.ɵɵpureFunction2(2,F,t.message,t.onCloseIconClick))}}function j(i,a){if(i&1&&e.ɵɵelement(0,"span"),i&2){let t=e.ɵɵnextContext(3);e.ɵɵclassMap("p-toast-message-icon pi "+t.message.icon)}}function N(i,a){i&1&&e.ɵɵelement(0,"CheckIcon"),i&2&&e.ɵɵattribute("aria-hidden",!0)("data-pc-section","icon")}function Q(i,a){i&1&&e.ɵɵelement(0,"InfoCircleIcon"),i&2&&e.ɵɵattribute("aria-hidden",!0)("data-pc-section","icon")}function Z(i,a){i&1&&e.ɵɵelement(0,"TimesCircleIcon"),i&2&&e.ɵɵattribute("aria-hidden",!0)("data-pc-section","icon")}function R(i,a){i&1&&e.ɵɵelement(0,"ExclamationTriangleIcon"),i&2&&e.ɵɵattribute("aria-hidden",!0)("data-pc-section","icon")}function L(i,a){if(i&1&&(e.ɵɵelementStart(0,"span",13),e.ɵɵelementContainerStart(1),e.ɵɵtemplate(2,N,1,2,"CheckIcon",6)(3,Q,1,2,"InfoCircleIcon",6)(4,Z,1,2,"TimesCircleIcon",6)(5,R,1,2,"ExclamationTriangleIcon",6),e.ɵɵelementContainerEnd(),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext(3);e.ɵɵattribute("aria-hidden",!0)("data-pc-section","icon"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",t.message.severity==="success"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.message.severity==="info"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.message.severity==="error"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.message.severity==="warn")}}function $(i,a){if(i&1&&(e.ɵɵelementContainerStart(0),e.ɵɵtemplate(1,j,1,2,"span",8)(2,L,6,6,"span",9),e.ɵɵelementStart(3,"div",10)(4,"div",11),e.ɵɵtext(5),e.ɵɵelementEnd(),e.ɵɵelementStart(6,"div",12),e.ɵɵtext(7),e.ɵɵelementEnd()(),e.ɵɵelementContainerEnd()),i&2){let t=e.ɵɵnextContext(2);e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.message.icon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.message.icon),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","text"),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","summary"),e.ɵɵadvance(1),e.ɵɵtextInterpolate(t.message.summary),e.ɵɵadvance(1),e.ɵɵattribute("data-pc-section","detail"),e.ɵɵadvance(1),e.ɵɵtextInterpolate(t.message.detail)}}function q(i,a){i&1&&e.ɵɵelementContainer(0)}function z(i,a){if(i&1&&e.ɵɵelement(0,"span"),i&2){let t=e.ɵɵnextContext(3);e.ɵɵclassMap("pt-1 text-base p-toast-message-icon pi "+t.message.closeIcon)}}function U(i,a){i&1&&e.ɵɵelement(0,"TimesIcon",16),i&2&&(e.ɵɵproperty("styleClass","p-toast-icon-close-icon"),e.ɵɵattribute("aria-hidden",!0)("data-pc-section","closeicon"))}function H(i,a){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"button",14),e.ɵɵlistener("click",function(n){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(2);return e.ɵɵresetView(o.onCloseIconClick(n))})("keydown.enter",function(n){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext(2);return e.ɵɵresetView(o.onCloseIconClick(n))}),e.ɵɵtemplate(1,z,1,2,"span",8)(2,U,1,3,"TimesIcon",15),e.ɵɵelementEnd()}if(i&2){let t=e.ɵɵnextContext(2);e.ɵɵattribute("aria-label",t.closeAriaLabel)("data-pc-section","closebutton"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",t.message.closeIcon),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.message.closeIcon)}}var Y=i=>({$implicit:i});function G(i,a){if(i&1&&(e.ɵɵelementStart(0,"div",5),e.ɵɵtemplate(1,$,8,7,"ng-container",6)(2,q,1,0,"ng-container",4)(3,H,3,4,"button",7),e.ɵɵelementEnd()),i&2){let t=e.ɵɵnextContext();e.ɵɵproperty("ngClass",t.message==null?null:t.message.contentStyleClass),e.ɵɵattribute("data-pc-section","content"),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",!t.template),e.ɵɵadvance(1),e.ɵɵproperty("ngTemplateOutlet",t.template)("ngTemplateOutletContext",e.ɵɵpureFunction1(6,Y,t.message)),e.ɵɵadvance(1),e.ɵɵproperty("ngIf",(t.message==null?null:t.message.closable)!==!1)}}var B=i=>[i,"p-toast-message"],J=(i,a,t,s)=>({showTransformParams:i,hideTransformParams:a,showTransitionParams:t,hideTransitionParams:s}),K=i=>({value:"visible",params:i});function W(i,a){if(i&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"p-toastItem",3),e.ɵɵlistener("onClose",function(n){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext();return e.ɵɵresetView(o.onMessageClose(n))})("@toastAnimation.start",function(n){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext();return e.ɵɵresetView(o.onAnimationStart(n))})("@toastAnimation.done",function(n){e.ɵɵrestoreView(t);let o=e.ɵɵnextContext();return e.ɵɵresetView(o.onAnimationEnd(n))}),e.ɵɵelementEnd()}if(i&2){let t=a.$implicit,s=a.index,n=e.ɵɵnextContext();e.ɵɵproperty("message",t)("index",s)("life",n.life)("template",n.template)("headlessTemplate",n.headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",n.showTransformOptions)("hideTransformOptions",n.hideTransformOptions)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}}var X=(()=>{class i{zone;config;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new f;containerViewChild;timeout;constructor(t,s){this.zone=t,this.config=s}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=t=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout()}static ɵfac=function(s){return new(s||i)(e.ɵɵdirectiveInject(e.NgZone),e.ɵɵdirectiveInject(l.PrimeNGConfig))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-toastItem"]],viewQuery:function(s,n){if(s&1&&e.ɵɵviewQuery(v,5),s&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(n.containerViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",life:"life",template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:5,vars:18,consts:[["role","alert","aria-live","assertive","aria-atomic","true",3,"ngClass","mouseenter","mouseleave"],["container",""],[4,"ngIf","ngIfElse"],["notHeadless",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"class",4,"ngIf"],["class","p-toast-message-icon",4,"ngIf"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],[1,"p-toast-message-icon"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],[3,"styleClass"]],template:function(s,n){if(s&1&&(e.ɵɵelementStart(0,"div",0,1),e.ɵɵlistener("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()}),e.ɵɵtemplate(2,P,2,5,"ng-container",2)(3,G,4,8,"ng-template",null,3,e.ɵɵtemplateRefExtractor),e.ɵɵelementEnd()),s&2){let o=e.ɵɵreference(4);e.ɵɵclassMap(n.message==null?null:n.message.styleClass),e.ɵɵproperty("ngClass",e.ɵɵpureFunction1(9,B,"p-toast-message-"+(n.message==null?null:n.message.severity)))("@messageState",e.ɵɵpureFunction1(16,K,e.ɵɵpureFunction4(11,J,n.showTransformOptions,n.hideTransformOptions,n.showTransitionOptions,n.hideTransitionOptions))),e.ɵɵattribute("id",n.message==null?null:n.message.id)("data-pc-name","toast")("data-pc-section","root"),e.ɵɵadvance(2),e.ɵɵproperty("ngIf",n.headlessTemplate)("ngIfElse",o)}},dependencies:()=>[r.NgClass,r.NgIf,r.NgTemplateOutlet,C.Ripple,_,T,I,g,y],encapsulation:2,data:{animation:[h("messageState",[x("visible",c({transform:"translateY(0)",opacity:1})),d("void => *",[c({transform:"{{showTransformParams}}",opacity:0}),u("{{showTransitionParams}}")]),d("* => void",[u("{{hideTransitionParams}}",c({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return i})(),Ie=(()=>{class i{document;renderer;messageService;cd;config;key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new f;containerViewChild;templates;messageSubscription;clearSubscription;messages;messagesArchieve;template;headlessTemplate;_position="top-right";constructor(t,s,n,o,m){this.document=t,this.renderer=s,this.messageService=n,this.cd=o,this.config=m}styleElement;id=A();ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let s=t.filter(n=>this.canAdd(n));this.add(s)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let s=this.key===t.key;return s&&this.preventOpenDuplicates&&(s=!this.containsMessage(this.messages,t)),s&&this.preventDuplicates&&(s=!this.containsMessage(this.messagesArchieve,t)),s}containsMessage(t,s){return t?t.find(n=>n.summary===s.summary&&n.detail==s.detail&&n.severity===s.severity)!=null:!1}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this.template=t.template;break;case"headless":this.headlessTemplate=t.template;break;default:this.template=t.template;break}})}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.cd.detectChanges()}onAnimationStart(t){t.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&p.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(t){t.toState==="void"&&this.autoZIndex&&V.isEmpty(this.messages)&&p.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let s in this.breakpoints){let n="";for(let o in this.breakpoints[s])n+=o+":"+this.breakpoints[s][o]+" !important;";t+=`
                    @media screen and (max-width: ${s}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&p.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}static ɵfac=function(s){return new(s||i)(e.ɵɵdirectiveInject(O),e.ɵɵdirectiveInject(e.Renderer2),e.ɵɵdirectiveInject(l.MessageService),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(l.PrimeNGConfig))};static ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["p-toast"]],contentQueries:function(s,n,o){if(s&1&&e.ɵɵcontentQuery(o,E,4),s&2){let m;e.ɵɵqueryRefresh(m=e.ɵɵloadQuery())&&(n.templates=m)}},viewQuery:function(s,n){if(s&1&&e.ɵɵviewQuery(v,5),s&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(n.containerViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",life:"life",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[1,"p-toast","p-component",3,"ngClass","ngStyle"],["container",""],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(s,n){s&1&&(e.ɵɵelementStart(0,"div",0,1),e.ɵɵtemplate(2,W,1,10,"p-toastItem",2),e.ɵɵelementEnd()),s&2&&(e.ɵɵclassMap(n.styleClass),e.ɵɵproperty("ngClass","p-toast-"+n._position)("ngStyle",n.style),e.ɵɵadvance(2),e.ɵɵproperty("ngForOf",n.messages))},dependencies:[r.NgClass,r.NgForOf,r.NgStyle,X],styles:[`@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex:none}.p-toast-icon-close.p-link{cursor:pointer}}
`],encapsulation:2,data:{animation:[h("toastAnimation",[d(":enter, :leave",[b("@*",w())])])]},changeDetection:0})}return i})(),Ce=(()=>{class i{static ɵfac=function(s){return new(s||i)};static ɵmod=e.ɵɵdefineNgModule({type:i});static ɵinj=e.ɵɵdefineInjector({imports:[k,M,_,T,I,g,y,S]})}return i})();export{Ie as Toast,X as ToastItem,Ce as ToastModule};