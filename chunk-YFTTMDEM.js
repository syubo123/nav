import{Ba as W,C as O,Ia as q,R as G,Tb as tt,Ub as nt,Vb as et,X,Z,bb as J,fb as Q,gb as Y}from"./chunk-TRD5GCEY.js";import{$b as N,Da as C,Ea as h,Ia as j,Jc as H,Kb as E,Kc as K,La as A,Nb as m,Pb as p,Qb as z,Rb as _,Sb as $,Tb as B,Uc as L,Yb as b,_b as g,a as T,ac as y,b as R,bc as r,cc as s,dc as f,ec as S,fc as M,ha as P,hc as v,kb as F,kc as d,mc as l,na as V,pb as c,q as w,qb as x,sa as I,ud as U,xb as D}from"./chunk-M7X46EKX.js";var it=(e,o)=>({$implicit:e,data:o}),ot=e=>({$implicit:e});function at(e,o){}function ct(e,o){if(e&1&&m(0,at,0,0,"ng-template",1),e&2){let t=l();p("ngTemplateOutlet",t.instance.template)("ngTemplateOutletContext",K(2,it,t,t.instance.options==null?null:t.instance.options.nzData))}}function rt(e,o){e&1&&f(0,"span",6)}function st(e,o){e&1&&f(0,"span",7)}function pt(e,o){e&1&&f(0,"span",8)}function lt(e,o){e&1&&f(0,"span",9)}function mt(e,o){if(e&1&&(S(0),f(1,"div",14),M()),e&2){let t=l(2);c(),p("innerHTML",t.instance.title,F)}}function ft(e,o){if(e&1&&(S(0),f(1,"div",14),M()),e&2){let t=l(2);c(),p("innerHTML",t.instance.content,F)}}function dt(e,o){}function _t(e,o){if(e&1&&(r(0,"span",13),m(1,dt,0,0,"ng-template",1),s()),e&2){let t=l(2);c(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",H(2,ot,t))}}function ut(e,o){if(e&1&&(r(0,"div",2)(1,"div",2)(2,"div"),m(3,rt,1,0,"span",6)(4,st,1,0,"span",7)(5,pt,1,0,"span",8)(6,lt,1,0,"span",9),r(7,"div",10),m(8,mt,2,1,"ng-container",11),s(),r(9,"div",12),m(10,ft,2,1,"ng-container",11),s(),m(11,_t,2,4,"span",13),s()()()),e&2){let t,i,n=l();c(2),_("ant-notification-notice-with-icon",n.instance.type!=="blank"),c(),b((t=n.instance.type)==="success"?3:t==="info"?4:t==="warning"?5:t==="error"?6:-1),c(5),p("nzStringTemplateOutlet",n.instance.title),c(2),p("nzStringTemplateOutlet",n.instance.content),c(),b((i=n.instance.options==null?null:n.instance.options.nzButton)?11:-1,i)}}function Ct(e,o){if(e&1&&(S(0),f(1,"nz-icon",15),M()),e&2){let t=o.$implicit;c(),p("nzType",t)}}function ht(e,o){if(e&1&&m(0,Ct,2,1,"ng-container",11),e&2){let t=l();p("nzStringTemplateOutlet",t.instance.options==null?null:t.instance.options.nzCloseIcon)}}function zt(e,o){e&1&&f(0,"nz-icon",5)}function gt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","topLeft")}}function Nt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","topRight")}}function yt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","bottomLeft")}}function vt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","bottomRight")}}function Tt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","top")}}function bt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","bottom")}}var It=(()=>{class e extends et{constructor(t){super(t),this.destroyed=new A}ngOnDestroy(){super.ngOnDestroy(),this.instance.onClick.complete()}onClick(t){this.instance.onClick.next(t)}close(){this.destroy(!0)}get state(){if(this.instance.state==="enter")switch(this.placement){case"topLeft":case"bottomLeft":return"enterLeft";case"topRight":case"bottomRight":return"enterRight";case"top":return"enterTop";case"bottom":return"enterBottom";default:return"enterRight"}else return this.instance.state}static{this.\u0275fac=function(i){return new(i||e)(x(L))}}static{this.\u0275cmp=D({type:e,selectors:[["nz-notification"]],inputs:{instance:"instance",index:"index",placement:"placement"},outputs:{destroyed:"destroyed"},exportAs:["nzNotification"],features:[E],decls:7,vars:7,consts:[[1,"ant-notification-notice","ant-notification-notice-closable",3,"click","mouseenter","mouseleave"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-notification-notice-content"],["tabindex","0",1,"ant-notification-notice-close",3,"click"],[1,"ant-notification-notice-close-x"],["nzType","close",1,"ant-notification-close-icon"],["nz-icon","","nzType","check-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-success"],["nz-icon","","nzType","info-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-info"],["nz-icon","","nzType","exclamation-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-warning"],["nz-icon","","nzType","close-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-error"],[1,"ant-notification-notice-message"],[4,"nzStringTemplateOutlet"],[1,"ant-notification-notice-description"],[1,"ant-notification-notice-btn"],[3,"innerHTML"],[3,"nzType"]],template:function(i,n){i&1&&(r(0,"div",0),d("@notificationMotion.done",function(u){return n.animationStateChanged.next(u)})("click",function(u){return n.onClick(u)})("mouseenter",function(){return n.onEnter()})("mouseleave",function(){return n.onLeave()}),m(1,ct,1,5,null,1)(2,ut,12,6,"div",2),r(3,"a",3),d("click",function(){return n.close()}),r(4,"span",4),m(5,ht,1,1,"ng-container")(6,zt,1,0,"nz-icon",5),s()()()),i&2&&($((n.instance.options==null?null:n.instance.options.nzStyle)||null),B((n.instance.options==null?null:n.instance.options.nzClass)||""),p("@notificationMotion",n.state),c(),b(n.instance.template?1:2),c(4),b(n.instance.options!=null&&n.instance.options.nzCloseIcon?5:6))},dependencies:[Z,X,Y,Q,U],encapsulation:2,data:{animation:[J]}})}}return e})(),k="notification",xt={nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:8,nzPauseOnHover:!0,nzAnimate:!0,nzDirection:"ltr"},St=(()=>{class e extends nt{constructor(t,i){super(t,i),this.dir="ltr",this.instances=[],this.topLeftInstances=[],this.topRightInstances=[],this.bottomLeftInstances=[],this.bottomRightInstances=[],this.topInstances=[],this.bottomInstances=[];let n=this.nzConfigService.getConfigForComponent(k);this.dir=n?.nzDirection||"ltr"}create(t){let i=this.onCreate(t),n=i.options.nzKey,a=this.instances.find(u=>u.options.nzKey===t.options.nzKey);return n&&a?this.replaceNotification(a,i):(this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,i]),this.readyInstances(),i}onCreate(t){return t.options=this.mergeOptions(t.options),t.onClose=new w,t.onClick=new w,t}subscribeConfigChange(){this.nzConfigService.getConfigChangeEventForComponent(k).pipe(P(this.destroy$)).subscribe(()=>{this.updateConfig();let t=this.nzConfigService.getConfigForComponent(k);if(t){let{nzDirection:i}=t;this.dir=i||this.dir}})}updateConfig(){this.config=T(T(T({},xt),this.config),this.nzConfigService.getConfigForComponent(k)),this.top=O(this.config.nzTop),this.bottom=O(this.config.nzBottom),this.cdr.markForCheck()}replaceNotification(t,i){t.title=i.title,t.content=i.content,t.template=i.template,t.type=i.type,t.options=i.options}readyInstances(){let t={topLeft:[],topRight:[],bottomLeft:[],bottomRight:[],top:[],bottom:[]};this.instances.forEach(i=>{switch(i.options.nzPlacement){case"topLeft":t.topLeft.unshift(i);break;case"topRight":t.topRight.unshift(i);break;case"bottomLeft":t.bottomLeft.unshift(i);break;case"bottomRight":t.bottomRight.unshift(i);break;case"top":t.top.unshift(i);break;case"bottom":t.bottom.unshift(i);break;default:t.topRight.unshift(i)}}),this.topLeftInstances=t.topLeft,this.topRightInstances=t.topRight,this.bottomLeftInstances=t.bottomLeft,this.bottomRightInstances=t.bottomRight,this.topInstances=t.top,this.bottomInstances=t.bottom,this.cdr.detectChanges()}mergeOptions(t){let{nzDuration:i,nzAnimate:n,nzPauseOnHover:a,nzPlacement:u}=this.config;return T({nzDuration:i,nzAnimate:n,nzPauseOnHover:a,nzPlacement:u},t)}static{this.\u0275fac=function(i){return new(i||e)(x(L),x(G))}}static{this.\u0275cmp=D({type:e,selectors:[["nz-notification-container"]],exportAs:["nzNotificationContainer"],features:[E],decls:18,vars:40,consts:[[1,"ant-notification","ant-notification-topLeft"],[3,"instance","placement"],[1,"ant-notification","ant-notification-topRight"],[1,"ant-notification","ant-notification-bottomLeft"],[1,"ant-notification","ant-notification-bottomRight"],[1,"ant-notification","ant-notification-top"],[1,"ant-notification","ant-notification-bottom"],[3,"destroyed","instance","placement"]],template:function(i,n){i&1&&(r(0,"div",0),N(1,gt,1,2,"nz-notification",1,g),s(),r(3,"div",2),N(4,Nt,1,2,"nz-notification",1,g),s(),r(6,"div",3),N(7,yt,1,2,"nz-notification",1,g),s(),r(9,"div",4),N(10,vt,1,2,"nz-notification",1,g),s(),r(12,"div",5),N(13,Tt,1,2,"nz-notification",1,g),s(),r(15,"div",6),N(16,bt,1,2,"nz-notification",1,g),s()),i&2&&(z("top",n.top)("left","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topLeftInstances),c(2),z("top",n.top)("right","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topRightInstances),c(2),z("bottom",n.bottom)("left","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomLeftInstances),c(2),z("bottom",n.bottom)("right","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomRightInstances),c(2),z("top",n.top)("left","50%")("transform","translateX(-50%)"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topInstances),c(2),z("bottom",n.bottom)("left","50%")("transform","translateX(-50%)"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomInstances))},dependencies:[It],encapsulation:2,changeDetection:0})}}return e})();var Mt=0,Yt=(()=>{class e extends tt{constructor(t,i,n){super(t,i,n),this.componentPrefix="notification-"}success(t,i,n){return this.create("success",t,i,n)}error(t,i,n){return this.create("error",t,i,n)}info(t,i,n){return this.create("info",t,i,n)}warning(t,i,n){return this.create("warning",t,i,n)}blank(t,i,n){return this.create("blank",t,i,n)}create(t,i,n,a){return this.createInstance({type:t,title:i,content:n},a)}template(t,i){return this.createInstance({template:t},i)}generateMessageId(){return`${this.componentPrefix}-${Mt++}`}createInstance(t,i){return this.container=this.withContainer(St),this.container.create(R(T({},t),{createdAt:new Date,messageId:i?.nzKey||this.generateMessageId(),options:i}))}static{this.\u0275fac=function(i){return new(i||e)(I(q),I(W),I(j))}}static{this.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{Yt as a};
