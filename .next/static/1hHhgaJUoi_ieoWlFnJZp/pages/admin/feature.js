(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{NG1I:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),a=(t("8Kt/"),t("xy40"),t("a6RD"),t("jhxP")),u=r.a.createElement;n.default=function(){return u(a.a,null,u("div",{className:"_admin_body_section_block"},"message"))}},Qk2m:function(e,n,t){e.exports={container:"Layout_container__3k3Im",body:"Layout_body__1jffz",footer_content:"Layout_footer_content__2w_tK",logo:"Layout_logo__x1539",copyright:"Layout_copyright__1o4l6"}},Zsnj:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/feature",function(){return t("NG1I")}])},jhxP:function(e,n,t){"use strict";var o=t("o0o1"),r=t.n(o),a=t("8Kt/"),u=t.n(a),i=(t("YFqc"),t("q1tI")),c=t.n(i),s=t("xy40"),l=t.n(s),d=t("a6RD"),f=t.n(d),b=t("je4i"),_=t.n(b),m=t("Qk2m"),p=t.n(m),y=t("Ruh/"),h=t("mhur"),w=c.a.createElement,j=f()((function(){return Promise.all([t.e(0),t.e(5),t.e(6),t.e(7),t.e(49)]).then(t.bind(null,"vwdz"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["vwdz"]},modules:["src/components/admin/Nav"]}}),v=f()((function(){return Promise.all([t.e(0),t.e(5),t.e(6),t.e(9),t.e(48)]).then(t.bind(null,"2Ts+"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["2Ts+"]},modules:["src/components/admin/Login"]}}),g=f()((function(){return Promise.all([t.e(9),t.e(15),t.e(50)]).then(t.bind(null,"zt1u"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["zt1u"]},modules:["src/components/admin/BodyContent"]}});function O(e){var n=Object(i.useState)(l.a.User.current()),t=n[0],o=(n[1],Object(i.useState)(null)),a=o[0],c=o[1],s=Object(i.useState)(null),d=s[0],f=s[1];return Object(i.useEffect)((function(){Object(y.b)().then((function(e){e?f(e):Object(y.a)().then((function(e){f(e)}))})),t&&function e(){var n,o;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(Object(h.b)());case 2:(n=a.sent)?c(n):((o=new l.a.Object("CMS_UserInfo")).set("user",t),o.set("nickname",t.toJSON().username),o.set("priority",1),o.set("shortid",_.a.generate()),o.save().then((function(n){e()}),(function(e){})));case 4:case"end":return a.stop()}}),null,null,null,Promise)}()}),[]),Object(i.useEffect)((function(){e.onChange&&e.onChange({curUser:t,profile:d,userinfo:a})}),[t,d,a]),w("div",{className:p.a.container},w(u.a,null,w("title",null,"\u7ba1\u7406\u540e\u53f0")),w(j,{type:"login",curUser:t,userinfo:a,profile:d}),w("div",{className:p.a.body,style:e.bodyStyle},!t&&w(v,{profile:d}),t&&w(g,{priority:a?a.toJSON().priority:0,userinfo:a,hideSidebar:e.hideSidebar},e.children)))}O.defaultProps={onChange:function(){},hideSidebar:!1,bodyStyle:{}},n.a=O}},[["Zsnj",1,0,3,2,4]]]);