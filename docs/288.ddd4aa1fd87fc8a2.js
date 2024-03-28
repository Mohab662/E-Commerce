"use strict";(self.webpackChunkE_Commerce=self.webpackChunkE_Commerce||[]).push([[288],{9288:(b,u,a)=>{a.r(u),a.d(u,{RegisterComponent:()=>Q});var d=a(6814),s=a(95),e=a(4769),c=a(9410),f=a(1120);function Z(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Name Is Required"),e.qZA())}function h(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Name Min Length 3"),e.qZA())}function v(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Name Max Length 20"),e.qZA())}function T(r,i){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,Z,2,0,"p",16),e.YNc(2,h,2,0,"p",16),e.YNc(3,v,2,0,"p",16),e.qZA()),2&r){const o=e.oxw();let n,t,l;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(l=o.registerForm.get("name"))?null:l.getError("maxlength"))}}function w(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Email Is Required"),e.qZA())}function q(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Enter Valid Email"),e.qZA())}function x(r,i){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,w,2,0,"p",16),e.YNc(2,q,2,0,"p",16),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("pattern"))}}function A(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Password Is Required"),e.qZA())}function I(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,'Password Must Be At Least 6 Chars"'),e.qZA())}function F(r,i){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,A,2,0,"p",16),e.YNc(2,I,2,0,"p",16),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function R(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"RePassword Is Required"),e.qZA())}function C(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,'Psswords Are Not Match"'),e.qZA())}function E(r,i){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,R,2,0,"p",16),e.YNc(2,C,2,0,"p",16),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("mismatch"))}}function P(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Phone Is Required"),e.qZA())}function N(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Accept Only Egypt Phone Numbers"),e.qZA())}function U(r,i){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,P,2,0,"p",16),e.YNc(2,N,2,0,"p",16),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function J(r,i){1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",19),e.qZA())}function Y(r,i){if(1&r&&(e.TgZ(0,"p",20),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Oqu(o.errMsg)}}let Q=(()=>{class r{constructor(o,n,t){this._AuthService=o,this._Router=n,this._FormBuilder=t,this.errMsg="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:["",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(20)]],email:["",[s.kI.required,s.kI.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],password:["",[s.kI.required]],rePassword:[""],phone:["",[s.kI.required,s.kI.pattern(/^01[0125][0-9]{8}$/)]]},{validators:[this.confirmPassword]})}confirmPassword(o){const n=o.get("password"),t=o.get("rePassword");""==t?.value?t?.setErrors({required:!0}):n?.value!=t?.value&&t?.setErrors({mismatch:!0})}handleForm(){const o=this.registerForm.value;this.isLoading=!0,1==this.registerForm.valid&&this._AuthService.Register(o).subscribe({next:n=>{"success"==n.message&&(this._Router.navigate(["/login"]),this.isLoading=!1)},error:n=>{this.isLoading=!1,this.errMsg=n.error.message}})}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(c.e),e.Y36(f.F0),e.Y36(s.qu))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:33,vars:9,consts:[[1,"register","w-75","mx-auto","shadow","rounded","p-4","my-3","bg-maim-light"],[1,"py-3",3,"formGroup","ngSubmit"],[1,"mb-4"],[1,"formIteam","mb-3"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control"],["type","submit",1,"main-btn","ms-auto","d-block",3,"disabled"],[4,"ngIf"],["class","alert alert-dark text-center p-1 w-50 mx-auto mb-0",4,"ngIf"],[1,"alert","alert-danger"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-dark","text-center","p-1","w-50","mx-auto","mb-0"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section",0)(1,"form",1),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(2,"h2",2),e._uU(3,"Register Now"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Name"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,T,4,3,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Email"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,x,3,2,"div",6),e.qZA(),e.TgZ(14,"div",3)(15,"label",9),e._uU(16,"Password"),e.qZA(),e._UZ(17,"input",10),e.YNc(18,F,3,2,"div",6),e.qZA(),e.TgZ(19,"div",3)(20,"label",11),e._uU(21,"Re-Password"),e.qZA(),e._UZ(22,"input",12),e.YNc(23,E,3,2,"div",6),e.qZA(),e.TgZ(24,"div",3)(25,"label",13),e._uU(26,"Phone"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,U,3,2,"div",6),e.qZA(),e.TgZ(29,"button",15),e._uU(30,"Send "),e.YNc(31,J,2,0,"span",16),e.qZA()(),e.YNc(32,Y,2,1,"p",17),e.qZA()),2&n){let l,m,g,_,p;e.xp6(1),e.Q6J("formGroup",t.registerForm),e.xp6(7),e.Q6J("ngIf",((null==(l=t.registerForm.get("name"))?null:l.touched)||(null==(l=t.registerForm.get("name"))?null:l.value.length)>0)&&(null==(l=t.registerForm.get("name"))?null:l.errors)),e.xp6(5),e.Q6J("ngIf",((null==(m=t.registerForm.get("email"))?null:m.touched)||(null==(m=t.registerForm.get("email"))?null:m.value.length)>0)&&(null==(m=t.registerForm.get("email"))?null:m.errors)),e.xp6(5),e.Q6J("ngIf",((null==(g=t.registerForm.get("password"))?null:g.touched)||(null==(g=t.registerForm.get("password"))?null:g.value.length)>0)&&(null==(g=t.registerForm.get("password"))?null:g.errors)),e.xp6(5),e.Q6J("ngIf",((null==(_=t.registerForm.get("rePassword"))?null:_.touched)||(null==(_=t.registerForm.get("rePassword"))?null:_.value.length)>0)&&(null==(_=t.registerForm.get("rePassword"))?null:_.errors)),e.xp6(5),e.Q6J("ngIf",((null==(p=t.registerForm.get("phone"))?null:p.touched)||(null==(p=t.registerForm.get("phone"))?null:p.value.length)>0)&&(null==(p=t.registerForm.get("phone"))?null:p.errors)),e.xp6(1),e.Q6J("disabled",t.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.errMsg)}},dependencies:[d.ez,d.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]})}return r})()}}]);