import{a as re,b as ae,d as se,e as ce,f as de,g as fe,h as ue}from"./chunk-56EPIXEX.js";import{a as pe}from"./chunk-V3HFKD3K.js";import{b as ee}from"./chunk-TUJKCWMO.js";import{d as G}from"./chunk-RE6YJQNV.js";import{a as me,b as le}from"./chunk-UTSXH5OI.js";import{a as Z}from"./chunk-SPYJ4G4D.js";import{D as te,E as ne,F as ie,d as k}from"./chunk-XP3GZLQZ.js";import{a as J,b as K,c as Q,e as X}from"./chunk-6OMUWU3S.js";import{$a as R,Tb as oe,Z as P,ab as L,cb as W,db as q,gb as B,jb as U,mb as $,nb as j,ob as A,pb as Y,qb as H}from"./chunk-PJEZC6LB.js";import{$b as b,Ba as S,Ca as N,Hb as f,Hc as v,Ia as E,Jb as m,Vd as _,Xb as p,Yb as l,Yd as y,Zb as s,_b as w,a as z,bc as M,ec as C,gc as c,gd as T,lb as a,mb as d,oc as h,od as D,pc as u,qc as g,tb as F,vc as V,wc as I,xc as O}from"./chunk-XRDKULAP.js";function _e(o,i){if(o&1&&s(0,"app-logo",13),o&2){let e=c(3);m("src",e.iconUrl)("size",25)}}function ze(o,i){if(o&1&&f(0,_e,1,2,"app-logo",12),o&2){let e=c(2);m("ngIf",e.iconUrl)}}function Ce(o,i){if(o&1){let e=M();p(0,"app-upload",14),C("onChange",function(t){S(e);let n=c(2);return N(n.onChangeFile(t))}),l()}}function he(o,i){if(o&1&&(w(0),p(1,"form",4)(2,"nz-form-item")(3,"nz-form-label",5),u(4),l(),p(5,"nz-form-control",6),s(6,"input",7),l()(),p(7,"nz-form-item")(8,"nz-form-label",5),u(9),l(),p(10,"nz-form-control",8),s(11,"nz-switch",9),l()(),p(12,"nz-form-item")(13,"nz-form-label",8),u(14),l(),p(15,"nz-form-control",8)(16,"nz-input-group",10),s(17,"input",11),l(),f(18,ze,1,1,"ng-template",null,0,v)(20,Ce,1,0,"ng-template",null,1,v),l()()(),b()),o&2){let e=h(19),r=h(21),t=c();a(),m("formGroup",t.validateForm),a(2),m("nzSpan",6),a(),g(t.$t("_categoryName")),a(),m("nzSpan",18)("nzErrorTip",t.$t("_requiredName")),a(3),m("nzSpan",6),a(),g(t.$t("_onlyOwnVisible")),a(),m("nzSpan",18),a(3),m("nzSpan",6),a(),g(t.$t("_iconAddr")),a(),m("nzSpan",18),a(),m("nzPrefix",e)("nzSuffix",r)}}var ge=class o{constructor(i,e,r){this.fb=i;this.message=e;this.router=r;this.validateForm=this.fb.group({title:["",[L.required]],icon:[""],ownVisible:[!1]});let t=(n={})=>{this.isSystemPage()||(this.validateForm.get("title").setValue(n.title||""),this.validateForm.get("icon").setValue(n.icon||""),this.validateForm.get("ownVisible").setValue(!!n.ownVisible),this.index=n.index||0,this.showModal=!0)};P.on("EDIT_CATEGORY_OPEN",t)}onOk=new E;title=y("_edit");app=!1;$t=y;validateForm;showModal=!1;index=0;get iconUrl(){return this.validateForm.get("icon")?.value||""}onChangeFile(i){this.validateForm.get("icon").setValue(i.cdn)}isSystemPage(){return!!(this.app&&this.router.url.includes("system"))}onCancel(){this.validateForm.reset(),this.showModal=!1}handleOk(){let{title:i,icon:e,ownVisible:r}=this.validateForm.value;if(!i||!i.trim()){this.message.error("Cannot be empty");return}i=i.trim();let t={title:i,icon:e,ownVisible:r};this.onOk.emit(t),this.onCancel();try{if(!this.isSystemPage()){let{page:n,id:x}=G();_[n].nav[x].nav[this.index]=z(z({},_[n].nav[x].nav[this.index]),t),ee(_)}}catch(n){this.message.error(n.message)}}static \u0275fac=function(e){return new(e||o)(d(A),d(oe),d(k))};static \u0275cmp=F({type:o,selectors:[["edit-category"]],inputs:{title:"title",app:"app"},outputs:{onOk:"onOk"},decls:2,vars:2,consts:[["prefixIcon",""],["suffixIconSearch",""],[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle"],[4,"nzModalContent"],["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["formControlName","title","nz-input","","maxlength","50"],[3,"nzSpan"],["formControlName","ownVisible"],[3,"nzPrefix","nzSuffix"],["formControlName","icon","nz-input",""],[3,"src","size",4,"ngIf"],[3,"src","size"],[3,"onChange"]],template:function(e,r){e&1&&(p(0,"nz-modal",2),O("nzVisibleChange",function(n){return I(r.showModal,n)||(r.showModal=n),n}),C("nzOnCancel",function(){return r.onCancel()})("nzOnOk",function(){return r.handleOk()}),f(1,he,22,13,"ng-container",3),l()),e&2&&(V("nzVisible",r.showModal),m("nzTitle",r.title))},dependencies:[D,T,ie,ne,te,ue,ae,re,ce,se,fe,de,X,J,Q,K,le,me,Z,pe,Y,B,R,W,q,j,H,U,$],encapsulation:2})};export{ge as a};
