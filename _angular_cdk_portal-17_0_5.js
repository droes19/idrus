import*as i from"@angular/core";import{ElementRef as g,Injector as R,EventEmitter as P}from"@angular/core";import{DOCUMENT as C}from"@angular/common";var h=class{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},f=class extends h{constructor(t,e,n,r,c){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.componentFactoryResolver=r,this.projectableNodes=c}},u=class extends h{constructor(t,e,n,r){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},p=class extends h{constructor(t){super(),this.element=t instanceof g?t.nativeElement:t}},d=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof f)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof u)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof p)return this._attachedPortal=t,this.attachDomPortal(t)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},m=class extends d{},v=class extends d{constructor(t,e,n,r,c){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=n,this._defaultInjector=r,this.attachDomPortal=s=>{this._document;let a=s.element;a.parentNode;let l=this._document.createComment("dom-portal");a.parentNode.insertBefore(l,a),this.outletElement.appendChild(a),this._attachedPortal=s,super.setDisposeFn(()=>{l.parentNode&&l.parentNode.replaceChild(a,l)})},this._document=c}attachComponentPortal(t){let n=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),r;return t.viewContainerRef?(r=t.viewContainerRef.createComponent(n,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>r.destroy())):(r=n.create(t.injector||this._defaultInjector||R.NULL),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(r.hostView),r.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(r)),this._attachedPortal=t,r}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=t,n}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}},w=class extends v{},_=(()=>{class o extends u{constructor(e,n){super(e,n)}static{this.ɵfac=function(n){return new(n||o)(i.ɵɵdirectiveInject(i.TemplateRef),i.ɵɵdirectiveInject(i.ViewContainerRef))}}static{this.ɵdir=i.ɵɵdefineDirective({type:o,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[i.ɵɵInheritDefinitionFeature]})}}return o})(),x=(()=>{class o extends _{static{this.ɵfac=(()=>{let e;return function(r){return(e||(e=i.ɵɵgetInheritedFactory(o)))(r||o)}})()}static{this.ɵdir=i.ɵɵdefineDirective({type:o,selectors:[["","cdk-portal",""],["","portal",""]],exportAs:["cdkPortal"],features:[i.ɵɵProvidersFeature([{provide:_,useExisting:o}]),i.ɵɵInheritDefinitionFeature]})}}return o})(),D=(()=>{class o extends d{constructor(e,n,r){super(),this._componentFactoryResolver=e,this._viewContainerRef=n,this._isInitialized=!1,this.attached=new P,this.attachDomPortal=c=>{this._document;let s=c.element;s.parentNode;let a=this._document.createComment("dom-portal");c.setAttachedHost(this),s.parentNode.insertBefore(a,s),this._getRootNode().appendChild(s),this._attachedPortal=c,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(s,a)})},this._document=r}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,c=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),s=n.createComponent(c,n.length,e.injector||n.injector,e.projectableNodes||void 0);return n!==this._viewContainerRef&&this._getRootNode().appendChild(s.hostView.rootNodes[0]),super.setDisposeFn(()=>s.destroy()),this._attachedPortal=e,this._attachedRef=s,this.attached.emit(s),s}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static{this.ɵfac=function(n){return new(n||o)(i.ɵɵdirectiveInject(i.ComponentFactoryResolver),i.ɵɵdirectiveInject(i.ViewContainerRef),i.ɵɵdirectiveInject(C))}}static{this.ɵdir=i.ɵɵdefineDirective({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[i.ɵɵInheritDefinitionFeature]})}}return o})(),I=(()=>{class o extends D{static{this.ɵfac=(()=>{let e;return function(r){return(e||(e=i.ɵɵgetInheritedFactory(o)))(r||o)}})()}static{this.ɵdir=i.ɵɵdefineDirective({type:o,selectors:[["","cdkPortalHost",""],["","portalHost",""]],inputs:{portal:["cdkPortalHost","portal"]},exportAs:["cdkPortalHost"],features:[i.ɵɵProvidersFeature([{provide:D,useExisting:o}]),i.ɵɵInheritDefinitionFeature]})}}return o})(),k=(()=>{class o{static{this.ɵfac=function(n){return new(n||o)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:o})}static{this.ɵinj=i.ɵɵdefineInjector({})}}return o})(),y=class{constructor(t,e){this._parentInjector=t,this._customTokens=e}get(t,e){let n=this._customTokens.get(t);return typeof n<"u"?n:this._parentInjector.get(t,e)}};export{m as BasePortalHost,d as BasePortalOutlet,_ as CdkPortal,D as CdkPortalOutlet,f as ComponentPortal,p as DomPortal,w as DomPortalHost,v as DomPortalOutlet,h as Portal,I as PortalHostDirective,y as PortalInjector,k as PortalModule,u as TemplatePortal,x as TemplatePortalDirective};