import{coerceElement as u,coerceNumberProperty as b}from"@angular/cdk/coercion";import*as s from"@angular/core";import{EventEmitter as d,booleanAttribute as a}from"@angular/core";import{Observable as v,Subject as h}from"rxjs";import{debounceTime as l}from"rxjs/operators";var o=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵprov=s.ɵɵdefineInjectable({token:t,factory:t.ɵfac,providedIn:"root"})}}return t})(),f=(()=>{class t{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,r)=>this._cleanupObserver(r))}observe(e){let r=u(e);return new v(i=>{let c=this._observeElement(r).subscribe(i);return()=>{c.unsubscribe(),this._unobserveElement(r)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let r=new h,i=this._mutationObserverFactory.create(n=>r.next(n));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:r,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:r,stream:i}=this._observedElements.get(e);r&&r.disconnect(),i.complete(),this._observedElements.delete(e)}}static{this.ɵfac=function(r){return new(r||t)(s.ɵɵinject(o))}}static{this.ɵprov=s.ɵɵdefineInjectable({token:t,factory:t.ɵfac,providedIn:"root"})}}return t})(),I=(()=>{class t{get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=b(e),this._subscribe()}constructor(e,r,i){this._contentObserver=e,this._elementRef=r,this._ngZone=i,this.event=new d,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(l(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}static{this.ɵfac=function(r){return new(r||t)(s.ɵɵdirectiveInject(f),s.ɵɵdirectiveInject(s.ElementRef),s.ɵɵdirectiveInject(s.NgZone))}}static{this.ɵdir=s.ɵɵdefineDirective({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled",a],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],features:[s.ɵɵInputTransformsFeature]})}}return t})(),j=(()=>{class t{static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵmod=s.ɵɵdefineNgModule({type:t})}static{this.ɵinj=s.ɵɵdefineInjector({providers:[o]})}}return t})();export{I as CdkObserveContent,f as ContentObserver,o as MutationObserverFactory,j as ObserversModule};