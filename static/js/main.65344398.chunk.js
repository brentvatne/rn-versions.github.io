(this["webpackJsonprn-version-tracker"]=this["webpackJsonprn-version-tracker"]||[]).push([[0],{149:function(e,t,a){e.exports={app:"App_app__2K5xB",contentContainer:"App_contentContainer__2_2MV",cardContainer:"App_cardContainer__1goQq"}},31:function(e,t,a){e.exports={app:"NavBar_app__2XT7W",contentContainer:"NavBar_contentContainer__3ZWmM",cardContainer:"NavBar_cardContainer__34cc2",nav:"NavBar_nav__3RKQP",scrolledAwayNav:"NavBar_scrolledAwayNav__3yG3z",navContent:"NavBar_navContent__27A_4",reactLogo:"NavBar_reactLogo__Yl33H",buttonRegion:"NavBar_buttonRegion__2UtT9",brightnessIconButton:"NavBar_brightnessIconButton__2higa",gitHubIconButton:"NavBar_gitHubIconButton__3BNyh",gitHubTextButton:"NavBar_gitHubTextButton__baZ16",brightnessIcon:"NavBar_brightnessIcon__2Kqk-",gitHubLogo:"NavBar_gitHubLogo__3Q_zp",mobileHeader:"NavBar_mobileHeader__2Ly24",mobileHeaderContent:"NavBar_mobileHeaderContent__IDHMs",mobileBrand:"NavBar_mobileBrand__r7wJS",brand:"NavBar_brand__1fibI"}},37:function(e,t,a){e.exports={packageCardFrame:"PackageCard_packageCardFrame__2Emre",visibleCardFrame:"PackageCard_visibleCardFrame__116gH",fadedCardFrame:"PackageCard_fadedCardFrame__3S0nK",noDataCardFrame:"PackageCard_noDataCardFrame__1-cI1",packageCardContent:"PackageCard_packageCardContent__1_xrF",visibleCardContent:"PackageCard_visibleCardContent__1h3Gs",fadedCardContent:"PackageCard_fadedCardContent__249jR",noDataCardContent:"PackageCard_noDataCardContent__ffbeR",headerLeft:"PackageCard_headerLeft__2JklH",header:"PackageCard_header__1ty5D",headerText:"PackageCard_headerText__3ysMZ",packageName:"PackageCard_packageName__2ftYU",headerControls:"PackageCard_headerControls__kcvrx",chartContainer:"PackageCard_chartContainer__39ifi"}},464:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(62),o=a.n(i),c=a(17),s=a(149),l=a.n(s),u=a(45),d=a.n(u),h=a(107),v=a(37),m=a.n(v),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.theme;e.unit;return{areaChart:{margin:{top:15,right:32,bottom:5}},area:{isAnimationActive:!1,stroke:(null===t||void 0===t?void 0:t.isInverted)?t.palette.whiteTranslucent40:null===t||void 0===t?void 0:t.palette.blackTranslucent40},responsiveContainer:{width:"100%",height:220},grid:{stroke:(null===t||void 0===t?void 0:t.isInverted)?t.palette.whiteTranslucent40:null===t||void 0===t?void 0:t.palette.blackTranslucent40,strokeDasharray:"1 1"},xAxis:{height:32,tickLine:!1,tickMargin:10,tick:{fill:null===t||void 0===t?void 0:t.semanticColors.bodyText}},yAxis:{width:80,tickLine:!1,tickMargin:10,tickSize:0,tickCount:5,tick:{fill:null===t||void 0===t?void 0:t.semanticColors.bodyText}},tooltip:{animationDuration:150,animationEasing:"linear",offset:24}}},f=a(529),j=a(527),g=a(534),p=a(526),O=a(521),y=a(152),_=a(95),x=a.n(_);function k(e){if("0.0"===e)return"nightly";var t=e.match(Object(y.a)(/^0\.0\.0\x2D([0-9a-f]{1,7})[0-9a-f]*$/,{hash:1}));return t?"nightly@".concat(t.groups.hash):e}var C=function(e){return x.a.lt(e,"0.0.0")},L=function(e,t){return x.a.gte(e,"".concat(t,".0"),{includePrerelease:!0})},N={"@types/react-native":{friendlyName:"DefinitelyTyped Typings",versionFilter:function(e){return L(e,"0.63")}},"react-native":{friendlyName:"React Native",versionFilter:function(e){return L(e,"0.63")||C(e)},versionLabeler:function(e){if("0.0"===e)return"nightly";var t=e.match(Object(y.a)(/^0\.0\.0\x2D([0-9]{4})([0-9]{2})([0-9]{2})\x2D[0-9]{4}\x2D[0-9a-f]+$/,{year:1,month:2,day:3}));if(t){var a=parseInt(t.groups.year,10),n=parseInt(t.groups.month,10),r=parseInt(t.groups.day,10),i=new Date(a,n-1,r);return"nightly@".concat(i.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit"}))}return e}},"react-native-macos":{friendlyName:"React Native macOS",versionFilter:function(e){return L(e,"0.63")||C(e)},versionLabeler:k},"react-native-web":{friendlyName:"React Native Web",versionFilter:function(e){return L(e,"0.11")||C(e)},versionLabeler:k},"react-native-windows":{friendlyName:"React Native Windows",versionFilter:function(e){return(L(e,"0.63")||C(e))&&"1.0.0"!==e},versionLabeler:function(e){if("0.0"===e)return"canary";var t=e.match(Object(y.a)(/^0\.0\.0\x2D(canary.[0-9]+)$/,{canary:1}));return t?t.groups.canary:e}}},D=a(136),w=a(30),P=a(26),T=a(58),I=a(231),M=a.n(I),S={minLuminance:.3},A={maxLuminance:.3},B={saturation:.5,defaultLightness:.5},H={saturation:.7,defaultLightness:.6};function F(e,t){var a="dark"===(null===t||void 0===t?void 0:t.variant)?B.saturation:H.saturation,n=function(e,t,a,n){if("contrasts-light"===n)for(;V(t,a,e)>A.maxLuminance;)e-=.02;else if("contrasts-dark"===n)for(;V(t,a,e)<S.minLuminance;)e+=.02;return e}("dark"===(null===t||void 0===t?void 0:t.variant)?B.defaultLightness:H.defaultLightness,e,a,null===t||void 0===t?void 0:t.targetLuminance);return"hsl(".concat(e,", ").concat(100*a,"%, ").concat(100*n,"%)")}function R(e,t){return Math.abs((e-t+.5)%1-.5)}function V(e,t,a){var n=function(e,t,a){var n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),i=a-n/2,o=0,c=0,s=0;e<60?(o=n,c=r,s=0):e<120?(o=r,c=n,s=0):e<180?(o=0,c=n,s=r):e<240?(o=0,c=r,s=n):e<300?(o=r,c=0,s=n):(o=n,c=0,s=r);return{r:Math.round(255*(o+i)),g:Math.round(255*(c+i)),b:Math.round(255*(s+i))}}(e,t,a),r=n.r,i=n.g,o=n.b;return.2126*z(r/255)+.7152*z(i/255)+.0722*z(o/255)}function z(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}var Q=a(74),K=a.n(Q),E=a(137),U=a(3);var W=function(e){var t=e.label,a=e.payload,n=e.unit,r=e.versionHues,i=e.theme,o=Object(T.a)(null!==a&&void 0!==a?a:[]);return o.reverse(),Object(U.jsx)(E.a.Consumer,{children:function(e){var a,c,s;i=null!==(a=i)&&void 0!==a?a:e;var l,u=o.length>0&&Object(U.jsx)("ul",{className:K.a.versionsList,children:o.map((function(e,t){var a=i?F(r[e.name],i.isInverted?{variant:"dark",targetLuminance:"contrasts-dark"}:{variant:"light",targetLuminance:"contrasts-light"}):e.color,o=function(e,t,a){var n=t.payload.versionCounts,r=e/Object.values(n).reduce((function(e,t){return e+t}),0)*100;return"percentage"===a?"".concat(Math.round(100*r)/100,"%"):"".concat(e.toLocaleString()," (").concat(Math.round(r),"%)")}(e.value,e,n);return Object(U.jsxs)("li",{className:K.a.versionsListItem,children:[Object(U.jsx)("div",{className:K.a.versionColorIndicator,style:{backgroundColor:a}}),Object(U.jsx)(f.a,{variant:"small",className:K.a.versionLabel,children:e.name}),Object(U.jsx)(f.a,{variant:"small",className:K.a.versionCount,children:o})]},t)}))});return Object(U.jsxs)(p.a,{theme:i,className:K.a.frame,style:{backgroundColor:null===(c=null!==(s=i)&&void 0!==s?s:e)||void 0===c?void 0:c.semanticColors.bodyBackground},children:[Object(U.jsx)(f.a,{className:K.a.date,variant:"medium",children:(l=t,new Date(l).toLocaleDateString("en-US",{month:"short",day:"numeric"}))}),u]})}})},G=a(504),J=a(505),Z=a(252),$=a(253),q=a(116),Y=a(114),X=a(266),ee=a(509),te=a(99),ae=a.n(te);function ne(e,t){if(0===t)return[];var a=e.sort(),n=a[0],r=a[a.length-1];if(1===t)return[n];if(2===t)return[n,r];for(var i=r-n,o=t-1,c=6048e5;Math.floor(i/c)>o;)c*=2;var s,l=new Set([n]),u=re(n,c),d=Object(P.a)(a);try{for(d.s();!(s=d.n()).done;){var h=s.value;h>=u&&(l.add(h),u=re(h,c))}}catch(v){d.e(v)}finally{d.f()}return Object(T.a)(l)}function re(e,t){var a=new Date(e);return a.setHours(0,0,0,0),a.getTime()+t}var ie=function(e){var t,a=e.historyPoints,r=e.maxDaysShown,o=e.maxVersionsShown,s=e.maxTicks,l=e.showLegend,u=e.showTooltip,d=e.unit,h=e.versionLabeler,v=e.theme,m=e.tooltipTheme,j=b({theme:v,unit:d}),g=Object(n.useState)(null),p=Object(c.a)(g,2),O=p[0],y=p[1];r=null!==(t=r)&&void 0!==t?t:30;var _,x=o?function(e,t,a){if(0===e.length)return[];var n,r=e[e.length-1].date,i=new Date(r).setHours(0,0,0,0)-24*a*60*60*1e3,o={},s=Object(P.a)(e);try{for(s.s();!(n=s.n()).done;){var l=n.value;if(l.date>=i){var u,d=null!==(u=o[l.version])&&void 0!==u?u:0;o[l.version]=d+l.count}}}catch(v){s.e(v)}finally{s.f()}var h=new Set(Object.entries(o).sort((function(e,t){return e[1]-t[1]})).slice(-t).map((function(e){var t=Object(c.a)(e,2),a=t[0];t[1];return a})));return e.filter((function(e){return e.date>=i&&h.has(e.version)}))}(a,o,r):a,k=Object(T.a)(new Set(x.map((function(e){return e.version})))),C={},L=void 0,N=Object(T.a)(k).map((function(e){var t=function(e,t){var a,n,r=M.a.create(e),i=100;do{n=r.random(),n+=.618033988749895,n%=1}while(t&&--i>0&&(R(n,t.adjacentHue)<.4||t.allHues.find((function(e){return R(n,e)<.06}))));return{hue:360*n,avoidToken:{adjacentHue:n,allHues:[].concat(Object(T.a)(null!==(a=null===t||void 0===t?void 0:t.allHues)&&void 0!==a?a:[]),[n])}}}(e,L),a=t.hue,n=t.avoidToken;L=n;var r=h?h(e):e;return C[r]=a,{name:r,hue:a,dataKey:e}})).reverse(),I=[],S=Object(P.a)(k);try{for(S.s();!(_=S.n()).done;){var A,B=_.value,H=Object(P.a)(x);try{var V=function(){var e=A.value;if(e.version===B){var t=I.find((function(t){return t.date===e.date}));t?t.versionCounts[B]=e.count:I.push({date:e.date,versionCounts:Object(D.a)({},B,e.count)})}};for(H.s();!(A=H.n()).done;)V()}catch(re){H.e(re)}finally{H.f()}}}catch(re){S.e(re)}finally{S.f()}if(0===x.length)return null;var z,Q,K=(z={versionHues:C},function(e){var t=e.payload;return Object(U.jsx)(E.a.Consumer,{children:function(e){return Object(U.jsx)("div",{className:ae.a.versionsListContainer,children:Object(U.jsx)("ul",{className:ae.a.versionsList,children:t.map((function(t){var a=e?F(z.versionHues[t.value],e.isInverted?{variant:"dark",targetLuminance:"contrasts-dark"}:{variant:"light",targetLuminance:"contrasts-light"}):t.color;return Object(U.jsxs)("li",{className:ae.a.versionsListItem,children:[Object(U.jsx)("div",{className:ae.a.versionColorIndicator,style:{backgroundColor:a}}),Object(U.jsx)(f.a,{variant:"small",className:ae.a.versionLabel,children:t.value})]},t.value)}))})})}})}),te=(null===v||void 0===v?void 0:v.isInverted)?"dark":"light";return Object(U.jsxs)("div",{children:[Object(U.jsx)(G.a,Object(w.a)(Object(w.a)({},j.responsiveContainer),{},{children:Object(U.jsxs)(J.a,Object(w.a)(Object(w.a)({},j.areaChart),{},{data:I,reverseStackOrder:!0,stackOffset:"percentage"===d?"expand":"none",children:[Object(U.jsx)(Z.a,Object(w.a)(Object(w.a)({},j.xAxis),{},{dataKey:"date",type:"number",scale:"time",domain:["dataMin","dataMax"],tickFormatter:function(e){return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"})},interval:0,ticks:ne(x.map((function(e){return e.date})),null!==s&&void 0!==s?s:6)})),Object(U.jsx)($.a,Object(w.a)(Object(w.a)({},j.yAxis),{},{type:"number"},"percentage"===d?{domain:[0,1],tickFormatter:function(e){return"".concat(Math.round(100*e),"%")}}:{domain:["auto","auto"],tickFormatter:function(e){return e.toLocaleString()}})),!1!==u&&Object(U.jsx)(q.a,Object(w.a)(Object(w.a)({},j.tooltip),{},{content:(Q={versionHues:C,unit:d,theme:m},function(e){return Object(U.jsx)(W,Object(w.a)(Object(w.a)({},Q),e))})})),!1!==l&&O&&Object(U.jsx)(Y.a,{height:0,content:function(e){var t=e.payload;return Object(i.createPortal)(t&&Object(U.jsx)(K,{payload:t}),O)}}),N.map((function(e){var t=e.name,a=e.hue,r=e.dataKey;return Object(n.createElement)(X.a,Object(w.a)(Object(w.a)({},j.area),{},{name:t,key:t,dataKey:function(e){return e.versionCounts[r]},stackId:"1",fill:F(a,{variant:te,targetLuminance:(null===v||void 0===v?void 0:v.isInverted)?"contrasts-light":"contrasts-dark"}),fillOpacity:1}))})),Object(U.jsx)(ee.a,Object(w.a)({},j.grid))]}))})),Object(U.jsx)("div",{ref:function(e){return y(e)}})]})},oe=a(254),ce=a(255),se=function(){function e(t,a){Object(oe.a)(this,e),this.packageDescription=void 0,this.historyPoints=void 0,this.majorDatePoints=null,this.patchDatePoints=null,this.prereleaseDatePoints=null,this.packageDescription=N[t],this.historyPoints=a}return Object(ce.a)(e,[{key:"getMajorDatePoints",value:function(){return this.majorDatePoints||(this.majorDatePoints=this.accumulateDatePoints({versionMapper:this.mapToMajor})),this.majorDatePoints}},{key:"mapToMajor",value:function(e){var t=x.a.parse(e);return 0===t.major?"0.".concat(t.minor):"".concat(t.major,".0")}},{key:"getPatchDatePoints",value:function(){return this.patchDatePoints||(this.patchDatePoints=this.accumulateDatePoints()),this.patchDatePoints}},{key:"getPrereleaseDataPoints",value:function(){return this.prereleaseDatePoints||(this.prereleaseDatePoints=this.accumulateDatePoints({extraFilter:function(e){return!!x.a.prerelease(e.version)}})),this.prereleaseDatePoints}},{key:"getDatePoints",value:function(e){switch(e){case"major":return this.getMajorDatePoints();case"patch":return this.getPatchDatePoints();case"prerelease":return this.getPrereleaseDataPoints()}}},{key:"accumulateDatePoints",value:function(e){var t=this.historyPoints;if((null===e||void 0===e?void 0:e.extraFilter)&&(t=this.historyPoints.filter(e.extraFilter)),null===e||void 0===e?void 0:e.versionMapper){var a,n={},r=Object(P.a)(t);try{var i=function(){var t,r=a.value,i=e.versionMapper(r.version),o=null!==(t=n[i])&&void 0!==t?t:[];n[i]=o;var c=o.find((function(e){return r.date===e.date}));c?c.count+=r.count:o.push({date:r.date,count:r.count})};for(r.s();!(a=r.n()).done;)i()}catch(u){r.e(u)}finally{r.f()}t=[];for(var o=function(){var e,a=Object(c.a)(l[s],2),n=a[0],r=a[1].sort((function(e,t){return e.date-t.date}));(e=t).push.apply(e,Object(T.a)(r.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{version:n})}))))},s=0,l=Object.entries(n);s<l.length;s++)o()}return t}}],[{key:"get",value:function(){var t=Object(h.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.instances[a]){t.next=5;break}return t.next=3,e.loadHistoryFile(a);case 3:n=t.sent,e.instances[a]=new e(a,n.points);case 5:return t.abrupt("return",e.instances[a]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadHistoryFile",value:function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="@types/react-native"===e.t0?3:"react-native"===e.t0?6:"react-native-macos"===e.t0?9:"react-native-web"===e.t0?12:"react-native-windows"===e.t0?15:18;break;case 3:return e.next=5,a.e(3).then(a.t.bind(null,539,3));case 5:case 8:case 11:case 14:case 17:return e.abrupt("return",e.sent);case 6:return e.next=8,a.e(7).then(a.t.bind(null,540,3));case 9:return e.next=11,a.e(4).then(a.t.bind(null,541,3));case 12:return e.next=14,a.e(5).then(a.t.bind(null,542,3));case 15:return e.next=17,a.e(6).then(a.t.bind(null,543,3));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();se.instances={};var le=a(80),ue=Object(le.a)({isInverted:!0,palette:{themePrimary:"#79bdbc",themeLighterAlt:"#050808",themeLighter:"#131e1e",themeLight:"#243938",themeTertiary:"#487171",themeSecondary:"#6aa6a5",themeDarkAlt:"#84c3c2",themeDark:"#95cdcc",themeDarker:"#aedad9",neutralLighterAlt:"#000000",neutralLighter:"#000000",neutralLight:"#000000",neutralQuaternaryAlt:"#000000",neutralQuaternary:"#000000",neutralTertiaryAlt:"#000000",neutralTertiary:"#fafafa",neutralSecondary:"#fbfbfb",neutralPrimaryAlt:"#fcfcfc",neutralPrimary:"#f8f8f8",neutralDark:"#fdfdfd",black:"#fefefe",white:"#000000"}}),de=Object(le.a)({isInverted:!0,palette:{themePrimary:"#79bdbc",themeLighterAlt:"#f9fcfc",themeLighter:"#e6f4f4",themeLight:"#d2ebeb",themeTertiary:"#a9d7d6",themeSecondary:"#86c5c4",themeDarkAlt:"#6daaa9",themeDark:"#5c8f8f",themeDarker:"#446a69",neutralLighterAlt:"#302e2d",neutralLighter:"#383735",neutralLight:"#464443",neutralQuaternaryAlt:"#4e4d4b",neutralQuaternary:"#555352",neutralTertiaryAlt:"#72706e",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#252423"}}),he=Object(le.a)({palette:{themePrimary:"#43706f",themeLighterAlt:"#f5f9f9",themeLighter:"#d9e8e8",themeLight:"#bbd4d4",themeTertiary:"#81a9a9",themeSecondary:"#548181",themeDarkAlt:"#3d6564",themeDark:"#335555",themeDarker:"#263f3e",neutralLighterAlt:"#e7e4e2",neutralLighter:"#e3e1de",neutralLight:"#dad8d5",neutralQuaternaryAlt:"#cbc9c7",neutralQuaternary:"#c2c0be",neutralTertiaryAlt:"#bab8b6",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#edebe9"}}),ve=Object(le.a)({palette:{themePrimary:"#467877",themeLighterAlt:"#f5fafa",themeLighter:"#dae9e9",themeLight:"#bbd6d6",themeTertiary:"#82aead",themeSecondary:"#568887",themeDarkAlt:"#3f6c6b",themeDark:"#355b5a",themeDarker:"#274343",neutralLighterAlt:"#faf9f8",neutralLighter:"#f3f2f1",neutralLight:"#edebe9",neutralQuaternaryAlt:"#e1dfdd",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c6c4",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#ffffff"}});function me(e){switch(e){case"major":return 84;case"patch":return 28;case"prerelease":return 14}}var be=function(e){var t=e.loaded,a=e.hasData,n=e.theme,r=e.children;return Object(U.jsx)(p.a,{theme:n,className:"".concat(m.a.packageCardFrame," ").concat(t?a?m.a.visibleCardFrame:m.a.noDataCardFrame:m.a.fadedCardFrame),style:{borderColor:n.isInverted?n.palette.whiteTranslucent40:n.palette.blackTranslucent40},children:Object(U.jsx)("div",{className:"".concat(m.a.packageCardContent," ").concat(t?a?m.a.visibleCardContent:m.a.noDataCardContent:m.a.fadedCardContent),children:r})})},fe=function(e){var t=e.identifier,a=e.versionFilter,r=e.theme,i=e.tooltipTheme,o=Object(n.useState)(a),s=Object(c.a)(o,2),l=s[0],u=s[1],v=Object(n.useState)(!1),p=Object(c.a)(v,2),y=p[0],_=p[1],x=Object(n.useState)(null),k=Object(c.a)(x,2),C=k[0],L=k[1];Object(n.useEffect)((function(){C||Object(h.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.get(t);case 2:a=e.sent,L(a);case 4:case"end":return e.stop()}}),e)})))()}),[C,t]),Object(n.useEffect)((function(){a!==l&&(_(!1),u(a))}),[a,l]);var D=null===C||void 0===C?void 0:C.getDatePoints(a),w=N[t];return Object(U.jsxs)(be,{theme:null!==r&&void 0!==r?r:he,loaded:!!D,hasData:!!D&&D.length>0,children:[Object(U.jsxs)("div",{className:m.a.header,children:[Object(U.jsx)("div",{className:m.a.headerLeft}),Object(U.jsxs)("div",{className:m.a.headerText,children:[Object(U.jsx)(f.a,{variant:"large",className:m.a.packageName,children:w.friendlyName}),Object(U.jsx)(f.a,{variant:"medium",children:"(Downloads/Week)"})]}),Object(U.jsx)("div",{className:m.a.headerControls,children:Object(U.jsx)(j.a,{content:"Show as percentage",theme:i,children:Object(U.jsx)(g.a,{toggle:!0,"aria-label":"Show as percentage",disabled:!D||0===D.length,onRenderIcon:function(){return Object(U.jsx)(O.a,{})},checked:y,onClick:function(){return _(!y)}})})})]}),D?Object(U.jsx)("div",{className:m.a.chartContainer,children:Object(U.jsx)(ie,{historyPoints:D,maxDaysShown:me(a),maxVersionsShown:6,maxTicks:4,unit:y?"percentage":"totalDownloads",versionLabeler:w.versionLabeler,theme:r,tooltipTheme:i})}):Object(U.jsx)("div",{style:{height:b().responsiveContainer.height}})]})},je=a(31),ge=a.n(je),pe=a(525),Oe=a(261),ye=a(530),_e=a(536),xe=a(522),ke=a(523),Ce=a(94),Le=Object(Ce.a)({displayName:"ReactLogoIcon",svg:function(e){var t=e.classes;return Object(U.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"120 2 600 600",className:t.svg,children:Object(U.jsxs)("g",{fill:"#61DAFB",children:[Object(U.jsx)("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),Object(U.jsx)("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),Object(U.jsx)("path",{d:"M520.5 78.1z"})]})})}}),Ne=function(e){var t=e.className;return Object(U.jsxs)("div",{className:t,children:[Object(U.jsx)(Le,{className:ge.a.reactLogo}),Object(U.jsx)(f.a,{variant:"large",children:"React Native Versions"})]})},De=function(e){var t,a,r=null!==(t=e.theme)&&void 0!==t?t:de,i={backgroundColor:(null!==(a=e.theme)&&void 0!==a?a:de).semanticColors.bodyBackground},o=Object(n.useState)(!1),s=Object(c.a)(o,2),l=s[0],u=s[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){return e.forEach((function(e){return u(e.intersectionRatio<1)}))}),{rootMargin:"10px"});return e.observe(d.current),function(){return e.disconnect()}})),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(p.a,{className:ge.a.mobileHeader,theme:r,style:i,children:Object(U.jsx)("div",{className:ge.a.mobileHeaderContent,children:Object(U.jsx)(Ne,{className:ge.a.mobileBrand})})}),Object(U.jsx)("div",{ref:d}),Object(U.jsx)(p.a,{className:l?"".concat(ge.a.nav," ").concat(ge.a.scrolledAwayNav):ge.a.nav,theme:r,style:i,children:Object(U.jsxs)("div",{className:ge.a.navContent,children:[Object(U.jsx)(Ne,{className:ge.a.brand}),Object(U.jsx)(pe.a,{headersOnly:!0,className:ge.a.pivot,onLinkClick:function(t){window.scrollTo({left:0,top:0,behavior:"smooth"}),e.onItemSelected&&e.onItemSelected(t.props.itemKey)},children:e.items.map((function(e){return Object(U.jsx)(Oe.a,{headerText:e.label,itemKey:e.key})}))}),Object(U.jsxs)("div",{className:ge.a.buttonRegion,children:[Object(U.jsx)(j.a,{content:"Toggle dark mode",children:Object(U.jsx)(g.a,{toggle:!0,checked:e.darkMode,onClick:function(){return e.onToggleDarkMode&&e.onToggleDarkMode()},className:ge.a.brightnessIconButton,"aria-label":"Toggle dark mode",onRenderIcon:function(){return Object(U.jsx)(xe.a,{className:ge.a.brightnessIcon})}})}),Object(U.jsxs)(ye.a,{className:ge.a.gitHubLink,underline:!1,href:"https://github.com/rn-versions/rn-versions.github.io",target:"_blank",rel:"noreferrer",children:[Object(U.jsx)(_e.a,{className:ge.a.gitHubTextButton,text:"Contribute","aria-label":"Contribute",onRenderIcon:function(){return Object(U.jsx)(ke.a,{className:ge.a.gitHubLogo})}}),Object(U.jsx)(g.a,{className:ge.a.gitHubIconButton,"aria-label":"Contribute",onRenderIcon:function(){return Object(U.jsx)(ke.a,{className:ge.a.gitHubLogo})}})]})]})]})})]})},we=[{name:"react-native"},{name:"@types/react-native"},{name:"react-native-windows"},{name:"react-native-macos"},{name:"react-native-web"}],Pe=[{label:"Major",key:"major"},{label:"Patch",key:"patch"},{label:"Prerelease",key:"prerelease"}];var Te=function(){var e=Object(n.useState)("major"),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),o=Object(c.a)(i,2),s=o[0],u=o[1];return Object(U.jsxs)(p.a,{theme:s?ue:he,className:l.a.app,children:[Object(U.jsx)(De,{items:Pe,onItemSelected:function(e){return r(e)},darkMode:s,onToggleDarkMode:function(){return u(!s)},theme:s?ue:he}),Object(U.jsx)("div",{className:l.a.contentContainer,children:Object(U.jsx)("div",{className:l.a.cardContainer,children:we.map((function(e){return Object(U.jsx)(fe,{identifier:e.name,versionFilter:a,theme:s?de:ve,tooltipTheme:s?ue:he},e.name)}))})})]})};o.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(Te,{})}),document.body)},74:function(e,t,a){e.exports={frame:"VersionTooltip_frame__3Lv0n",date:"VersionTooltip_date__1GwoG",versionsList:"VersionTooltip_versionsList__6ks3l",versionsListItem:"VersionTooltip_versionsListItem__1E-df",versionColorIndicator:"VersionTooltip_versionColorIndicator__201KA",versionLabel:"VersionTooltip_versionLabel__2ZozQ",versionCount:"VersionTooltip_versionCount__2olVR"}},99:function(e,t,a){e.exports={versionsListContainer:"VersionLegend_versionsListContainer__2kfsM",versionsList:"VersionLegend_versionsList__gyOfc",versionsListItem:"VersionLegend_versionsListItem__2Sxmb",versionColorIndicator:"VersionLegend_versionColorIndicator__L-tB-",versionLabel:"VersionLegend_versionLabel__1tflT"}}},[[464,1,2]]]);
//# sourceMappingURL=main.65344398.chunk.js.map