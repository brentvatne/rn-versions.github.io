(this["webpackJsonprn-version-tracker"]=this["webpackJsonprn-version-tracker"]||[]).push([[0],{148:function(e,t,a){e.exports={app:"App_app__2K5xB",contentContainer:"App_contentContainer__2_2MV",cardContainer:"App_cardContainer__1goQq"}},31:function(e,t,a){e.exports={app:"NavBar_app__2XT7W",contentContainer:"NavBar_contentContainer__3ZWmM",cardContainer:"NavBar_cardContainer__34cc2",nav:"NavBar_nav__3RKQP",scrolledAwayNav:"NavBar_scrolledAwayNav__3yG3z",navContent:"NavBar_navContent__27A_4",reactLogo:"NavBar_reactLogo__Yl33H",buttonRegion:"NavBar_buttonRegion__2UtT9",brightnessIconButton:"NavBar_brightnessIconButton__2higa",gitHubIconButton:"NavBar_gitHubIconButton__3BNyh",gitHubTextButton:"NavBar_gitHubTextButton__baZ16",brightnessIcon:"NavBar_brightnessIcon__2Kqk-",gitHubLogo:"NavBar_gitHubLogo__3Q_zp",mobileHeader:"NavBar_mobileHeader__2Ly24",mobileHeaderContent:"NavBar_mobileHeaderContent__IDHMs",mobileBrand:"NavBar_mobileBrand__r7wJS",brand:"NavBar_brand__1fibI"}},37:function(e,t,a){e.exports={packageCardFrame:"PackageCard_packageCardFrame__2Emre",visibleCardFrame:"PackageCard_visibleCardFrame__116gH",fadedCardFrame:"PackageCard_fadedCardFrame__3S0nK",noDataCardFrame:"PackageCard_noDataCardFrame__1-cI1",packageCardContent:"PackageCard_packageCardContent__1_xrF",visibleCardContent:"PackageCard_visibleCardContent__1h3Gs",fadedCardContent:"PackageCard_fadedCardContent__249jR",noDataCardContent:"PackageCard_noDataCardContent__ffbeR",headerLeft:"PackageCard_headerLeft__2JklH",header:"PackageCard_header__1ty5D",headerText:"PackageCard_headerText__3ysMZ",packageName:"PackageCard_packageName__2ftYU",headerControls:"PackageCard_headerControls__kcvrx",chartContainer:"PackageCard_chartContainer__39ifi"}},464:function(e,t,a){"use strict";a.r(t);var n=a(134),r=a(30),i=a(17),o=a(24),c=a(57),s=a(229),l=a(230),u=a(95),d=a.n(u),v=a(151);function h(e){if("0.0"===e)return"nightly";var t=e.match(Object(v.a)(/^0\.0\.0\x2D([0-9a-f]{1,7})[0-9a-f]*$/,{hash:1}));return t?"nightly@".concat(t.groups.hash):e}var b=function(e){return d.a.lt(e,"0.0.0")},m=function(e,t){return d.a.gte(e,"".concat(t,".0"),{includePrerelease:!0})},f={"react-native":{friendlyName:"React Native",versionFilter:function(e){return m(e,"0.63")||b(e)},versionLabeler:function(e){if("0.0"===e)return"nightly";var t=e.match(Object(v.a)(/^0\.0\.0\x2D([0-9]{4})([0-9]{2})([0-9]{2})\x2D[0-9]{4}\x2D[0-9a-f]+$/,{year:1,month:2,day:3}));if(t){var a=parseInt(t.groups.year,10),n=parseInt(t.groups.month,10),r=parseInt(t.groups.day,10),i=new Date(a,n-1,r);return"nightly@".concat(i.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit"}))}return e}},"@types/react-native":{friendlyName:"DefinitelyTyped Typings",versionFilter:function(e){return m(e,"0.63")}},"react-native-windows":{friendlyName:"React Native Windows",versionFilter:function(e){return(m(e,"0.63")||b(e))&&"1.0.0"!==e},versionLabeler:function(e){if("0.0"===e)return"canary";var t=e.match(Object(v.a)(/^0\.0\.0\x2D(canary.[0-9]+)$/,{canary:1}));return t?t.groups.canary:e}},"react-native-macos":{friendlyName:"React Native macOS",versionFilter:function(e){return m(e,"0.63")||b(e)},versionLabeler:h},"react-native-web":{friendlyName:"React Native Web",versionFilter:function(e){return m(e,"0.11")||b(e)},versionLabeler:h}},j=function(){function e(t){Object(s.a)(this,e),this.pointCollection=void 0,this.majorDatePoints=null,this.prereleaseDatePoints=null,this.pointCollection=t}return Object(l.a)(e,[{key:"getMajorDatePoints",value:function(){return this.majorDatePoints||(this.majorDatePoints=this.accumulateDatePoints({versionMapper:this.mapToMajor})),this.majorDatePoints}},{key:"mapToMajor",value:function(e){var t=d.a.parse(e);return 0===t.major?"0.".concat(t.minor):"".concat(t.major,".0")}},{key:"getPatchDatePoints",value:function(){return this.pointCollection}},{key:"getPrereleaseDataPoints",value:function(){return this.prereleaseDatePoints||(this.prereleaseDatePoints=this.accumulateDatePoints({versionFilter:function(e){return!!d.a.prerelease(e)}})),this.prereleaseDatePoints}},{key:"getDatePoints",value:function(e){switch(e){case"major":return this.getMajorDatePoints();case"patch":return this.getPatchDatePoints();case"prerelease":return this.getPrereleaseDataPoints()}}},{key:"accumulateDatePoints",value:function(e){var t=Object(c.a)(this.pointCollection.versions),a=function(e){var t,a=[],n=Object(o.a)(e);try{for(n.s();!(t=n.n()).done;)for(var r=t.value,c=0,s=Object.entries(r.versionCounts);c<s.length;c++){var l=Object(i.a)(s[c],2),u=l[0],d=l[1];a.push({date:r.date,version:u,count:d})}}catch(v){n.e(v)}finally{n.f()}return a}(this.pointCollection.points);if((null===e||void 0===e?void 0:e.versionFilter)&&(t=t.filter(e.versionFilter),a=a.filter((function(t){return e.versionFilter(t.version)}))),null===e||void 0===e?void 0:e.versionMapper){var n,s={},l=Object(o.a)(t);try{for(l.s();!(n=l.n()).done;){var u=n.value;s[u]=e.versionMapper(u)}}catch(C){l.e(C)}finally{l.f()}t=Object(c.a)(new Set(Object.values(s)));var d,v={},h=Object(o.a)(a);try{for(h.s();!(d=h.n()).done;){var b,m=d.value,f=s[m.version],j=null!==(b=v[f])&&void 0!==b?b:[];v[f]=j;for(var p=!1,O=j.length-1;O>=0;O--){if(j[O].date===m.date){p=!0,j[O].count+=m.count;break}if(j[O].date<m.date)break}p||j.push({date:m.date,count:m.count})}}catch(C){h.e(C)}finally{h.f()}a=[];for(var y=function(){var e,t=Object(i.a)(k[_],2),n=t[0],o=t[1].sort((function(e,t){return e.date-t.date}));(e=a).push.apply(e,Object(c.a)(o.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{version:n})}))))},_=0,k=Object.entries(v);_<k.length;_++)y()}return{versions:t,points:g(a)}}}],[{key:"prefetch",value:function(){for(var t=0,a=Object.keys(f);t<a.length;t++){var n=a[t];this.historyImports[n]||(this.historyImports[n]=e.loadHistoryFile(n))}}},{key:"get",value:function(t){e.historyImports[t]||(e.historyImports[t]=e.loadHistoryFile(t));var a=e.lastAcquisition.then((function(){return e.historyImports[t]})).then((function(t){return new e(t)}));return this.lastAcquisition=a,a}},{key:"loadHistoryFile",value:function(e){switch(e){case"@types/react-native":return a.e(3).then(a.t.bind(null,539,3));case"react-native":return a.e(7).then(a.t.bind(null,540,3));case"react-native-macos":return a.e(4).then(a.t.bind(null,541,3));case"react-native-web":return a.e(5).then(a.t.bind(null,542,3));case"react-native-windows":return a.e(6).then(a.t.bind(null,543,3))}}}]),e}();function g(e){var t,a=[],r=Object(o.a)(e);try{var i=function(){var e=t.value,r=a.find((function(t){return t.date===e.date}));r?r.versionCounts[e.version]=e.count:a.push({date:e.date,versionCounts:Object(n.a)({},e.version,e.count)})};for(r.s();!(t=r.n()).done;)i()}catch(c){r.e(c)}finally{r.f()}return a}j.historyImports={},j.lastAcquisition=Promise.resolve();var p=a(0),O=a.n(p),y=a(61),_=a.n(y),k=a(148),C=a.n(k),x=a(75),L=a.n(x),N=a(232),D=a(37),w=a.n(D),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.theme;e.unit;return{areaChart:{margin:{top:15,right:32,bottom:5}},area:{isAnimationActive:!1,stroke:(null===t||void 0===t?void 0:t.isInverted)?t.palette.whiteTranslucent40:null===t||void 0===t?void 0:t.palette.blackTranslucent40},responsiveContainer:{width:"100%",height:220},grid:{stroke:(null===t||void 0===t?void 0:t.isInverted)?t.palette.whiteTranslucent40:null===t||void 0===t?void 0:t.palette.blackTranslucent40,strokeDasharray:"1 1"},xAxis:{height:32,tickLine:!1,tickMargin:10,tick:{fill:null===t||void 0===t?void 0:t.semanticColors.bodyText}},yAxis:{width:80,tickLine:!1,tickMargin:10,tickSize:0,tickCount:5,tick:{fill:null===t||void 0===t?void 0:t.semanticColors.bodyText}},tooltip:{animationDuration:150,animationEasing:"linear",offset:24}}},P=a(529),I=a(527),A=a(534),M=a(526),S=a(521),B=a(233),H=a.n(B),F={minLuminance:.3},R={maxLuminance:.3},V={saturation:.5,defaultLightness:.5},z={saturation:.7,defaultLightness:.6};function Q(e,t){var a="dark"===(null===t||void 0===t?void 0:t.variant)?V.saturation:z.saturation,n=function(e,t,a,n){if("contrasts-light"===n)for(;E(t,a,e)>R.maxLuminance;)e-=.02;else if("contrasts-dark"===n)for(;E(t,a,e)<F.minLuminance;)e+=.02;return e}("dark"===(null===t||void 0===t?void 0:t.variant)?V.defaultLightness:z.defaultLightness,e,a,null===t||void 0===t?void 0:t.targetLuminance);return"hsl(".concat(e,", ").concat(100*a,"%, ").concat(100*n,"%)")}function K(e,t){return Math.abs((e-t+.5)%1-.5)}function E(e,t,a){var n=function(e,t,a){var n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),i=a-n/2,o=0,c=0,s=0;e<60?(o=n,c=r,s=0):e<120?(o=r,c=n,s=0):e<180?(o=0,c=n,s=r):e<240?(o=0,c=r,s=n):e<300?(o=r,c=0,s=n):(o=n,c=0,s=r);return{r:Math.round(255*(o+i)),g:Math.round(255*(c+i)),b:Math.round(255*(s+i))}}(e,t,a),r=n.r,i=n.g,o=n.b;return.2126*q(r/255)+.7152*q(i/255)+.0722*q(o/255)}function q(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}var U=a(73),W=a.n(U),G=a(136),J=a(3);var Z=function(e){var t=e.label,a=e.payload,n=e.unit,r=e.versionHues,i=e.theme,o=Object(c.a)(null!==a&&void 0!==a?a:[]);return o.reverse(),Object(J.jsx)(G.a.Consumer,{children:function(e){var a,c,s;i=null!==(a=i)&&void 0!==a?a:e;var l,u=o.length>0&&Object(J.jsx)("ul",{className:W.a.versionsList,children:o.map((function(e,t){var a=i?Q(r[e.name],i.isInverted?{variant:"dark",targetLuminance:"contrasts-dark"}:{variant:"light",targetLuminance:"contrasts-light"}):e.color,o=function(e,t,a){var n=t.payload.versionCounts,r=e/Object.values(n).reduce((function(e,t){return e+t}),0)*100;return"percentage"===a?"".concat(Math.round(100*r)/100,"%"):"".concat(e.toLocaleString()," (").concat(Math.round(r),"%)")}(e.value,e,n);return Object(J.jsxs)("li",{className:W.a.versionsListItem,children:[Object(J.jsx)("div",{className:W.a.versionColorIndicator,style:{backgroundColor:a}}),Object(J.jsx)(P.a,{variant:"small",className:W.a.versionLabel,children:e.name}),Object(J.jsx)(P.a,{variant:"small",className:W.a.versionCount,children:o})]},t)}))});return Object(J.jsxs)(M.a,{theme:i,className:W.a.frame,style:{backgroundColor:null===(c=null!==(s=i)&&void 0!==s?s:e)||void 0===c?void 0:c.semanticColors.bodyBackground},children:[Object(J.jsx)(P.a,{className:W.a.date,variant:"medium",children:(l=t,new Date(l).toLocaleDateString("en-US",{month:"short",day:"numeric"}))}),u]})}})},$=a(504),Y=a(505),X=a(254),ee=a(255),te=a(115),ae=a(113),ne=a(266),re=a(509),ie=a(99),oe=a.n(ie);function ce(e,t){if(0===t)return[];var a=e[0],n=e[e.length-1];if(1===t)return[a];if(2===t)return[a,n];for(var r=n-a,i=t-1,s=6048e5;Math.floor(r/s)>i;)s*=2;var l,u=new Set([a]),d=se(a,s),v=Object(o.a)(e);try{for(v.s();!(l=v.n()).done;){var h=l.value;h>=d&&(u.add(h),d=se(h,s))}}catch(b){v.e(b)}finally{v.f()}return Object(c.a)(u)}function se(e,t){var a=new Date(e);return a.setHours(0,0,0,0),a.getTime()+t}var le=function(e){var t,a,n=e.history,s=e.maxDaysShown,l=e.maxVersionsShown,u=e.maxTicks,d=e.showLegend,v=e.showTooltip,h=e.unit,b=e.versionLabeler,m=e.theme,f=e.tooltipTheme,j=T({theme:m,unit:h}),g=Object(p.useState)(null),O=Object(i.a)(g,2),_=O[0],k=O[1],C=function(e,t,a){if(0===e.points.length)return e;var n,r=e.points[e.points.length-1].date,c=new Date(r).setHours(0,0,0,0)-24*a*60*60*1e3,s={},l=Object(o.a)(e.points);try{for(l.s();!(n=l.n()).done;){var u=n.value;if(u.date>=c)for(var d=0,v=Object.entries(u.versionCounts);d<v.length;d++){var h,b=Object(i.a)(v[d],2),m=b[0],f=b[1],j=null!==(h=s[m])&&void 0!==h?h:0;s[m]=j+f}}}catch(D){l.e(D)}finally{l.f()}var g,p=new Set(Object.entries(s).sort((function(e,t){return e[1]-t[1]})).slice(-t).map((function(e){var t=Object(i.a)(e,2),a=t[0];t[1];return a}))),O=[],y=Object(o.a)(e.points);try{for(y.s();!(g=y.n()).done;){var _=g.value;if(_.date>=c){var k=Object.keys(_.versionCounts).filter((function(e){return p.has(e)}));if(k.length>0){var C,x={date:_.date,versionCounts:{}},L=Object(o.a)(k);try{for(L.s();!(C=L.n()).done;){var N=C.value;x.versionCounts[N]=_.versionCounts[N]}}catch(D){L.e(D)}finally{L.f()}O.push(x)}}}}catch(D){y.e(D)}finally{y.f()}return{versions:e.versions.filter((function(e){return p.has(e)})),points:O}}(n,l=null!==(t=l)&&void 0!==t?t:5,s=null!==(a=s)&&void 0!==a?a:30),x={},L=void 0,N=C.versions.map((function(e){var t=function(e,t){var a,n,r=H.a.create(e),i=100;do{n=r.random(),n+=.618033988749895,n%=1}while(t&&--i>0&&(K(n,t.adjacentHue)<.4||t.allHues.find((function(e){return K(n,e)<.06}))));return{hue:360*n,avoidToken:{adjacentHue:n,allHues:[].concat(Object(c.a)(null!==(a=null===t||void 0===t?void 0:t.allHues)&&void 0!==a?a:[]),[n])}}}(e,L),a=t.hue,n=t.avoidToken;L=n;var r=b?b(e):e;return x[r]=a,{name:r,hue:a,dataKey:e}})).reverse();if(0===C.points.length)return null;var D,w,I=(D={versionHues:x},function(e){var t=e.payload;return Object(J.jsx)(G.a.Consumer,{children:function(e){return Object(J.jsx)("div",{className:oe.a.versionsListContainer,children:Object(J.jsx)("ul",{className:oe.a.versionsList,children:t.map((function(t){var a=e?Q(D.versionHues[t.value],e.isInverted?{variant:"dark",targetLuminance:"contrasts-dark"}:{variant:"light",targetLuminance:"contrasts-light"}):t.color;return Object(J.jsxs)("li",{className:oe.a.versionsListItem,children:[Object(J.jsx)("div",{className:oe.a.versionColorIndicator,style:{backgroundColor:a}}),Object(J.jsx)(P.a,{variant:"small",className:oe.a.versionLabel,children:t.value})]},t.value)}))})})}})}),A=(null===m||void 0===m?void 0:m.isInverted)?"dark":"light";return Object(J.jsxs)("div",{children:[Object(J.jsx)($.a,Object(r.a)(Object(r.a)({},j.responsiveContainer),{},{children:Object(J.jsxs)(Y.a,Object(r.a)(Object(r.a)({},j.areaChart),{},{data:C.points,reverseStackOrder:!0,stackOffset:"percentage"===h?"expand":"none",children:[Object(J.jsx)(X.a,Object(r.a)(Object(r.a)({},j.xAxis),{},{dataKey:"date",type:"number",scale:"time",domain:["dataMin","dataMax"],tickFormatter:function(e){return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"})},interval:0,ticks:ce(C.points.map((function(e){return e.date})),null!==u&&void 0!==u?u:6)})),Object(J.jsx)(ee.a,Object(r.a)(Object(r.a)({},j.yAxis),{},{type:"number"},"percentage"===h?{domain:[0,1],tickFormatter:function(e){return"".concat(Math.round(100*e),"%")}}:{domain:["auto","auto"],tickFormatter:function(e){return e.toLocaleString()}})),!1!==v&&Object(J.jsx)(te.a,Object(r.a)(Object(r.a)({},j.tooltip),{},{content:(w={versionHues:x,unit:h,theme:f},function(e){return Object(J.jsx)(Z,Object(r.a)(Object(r.a)({},w),e))})})),!1!==d&&_&&Object(J.jsx)(ae.a,{height:0,content:function(e){var t=e.payload;return Object(y.createPortal)(t&&Object(J.jsx)(I,{payload:t}),_)}}),N.map((function(e){var t=e.name,a=e.hue,n=e.dataKey;return Object(p.createElement)(ne.a,Object(r.a)(Object(r.a)({},j.area),{},{name:t,key:t,dataKey:function(e){return e.versionCounts[n]},stackId:"1",fill:Q(a,{variant:A,targetLuminance:(null===m||void 0===m?void 0:m.isInverted)?"contrasts-light":"contrasts-dark"}),fillOpacity:1}))})),Object(J.jsx)(re.a,Object(r.a)({},j.grid))]}))})),Object(J.jsx)("div",{ref:function(e){return k(e)}})]})},ue=a(80),de=Object(ue.a)({isInverted:!0,palette:{themePrimary:"#79bdbc",themeLighterAlt:"#050808",themeLighter:"#131e1e",themeLight:"#243938",themeTertiary:"#487171",themeSecondary:"#6aa6a5",themeDarkAlt:"#84c3c2",themeDark:"#95cdcc",themeDarker:"#aedad9",neutralLighterAlt:"#000000",neutralLighter:"#000000",neutralLight:"#000000",neutralQuaternaryAlt:"#000000",neutralQuaternary:"#000000",neutralTertiaryAlt:"#000000",neutralTertiary:"#fafafa",neutralSecondary:"#fbfbfb",neutralPrimaryAlt:"#fcfcfc",neutralPrimary:"#f8f8f8",neutralDark:"#fdfdfd",black:"#fefefe",white:"#000000"}}),ve=Object(ue.a)({isInverted:!0,palette:{themePrimary:"#79bdbc",themeLighterAlt:"#f9fcfc",themeLighter:"#e6f4f4",themeLight:"#d2ebeb",themeTertiary:"#a9d7d6",themeSecondary:"#86c5c4",themeDarkAlt:"#6daaa9",themeDark:"#5c8f8f",themeDarker:"#446a69",neutralLighterAlt:"#302e2d",neutralLighter:"#383735",neutralLight:"#464443",neutralQuaternaryAlt:"#4e4d4b",neutralQuaternary:"#555352",neutralTertiaryAlt:"#72706e",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#252423"}}),he=Object(ue.a)({palette:{themePrimary:"#43706f",themeLighterAlt:"#f5f9f9",themeLighter:"#d9e8e8",themeLight:"#bbd4d4",themeTertiary:"#81a9a9",themeSecondary:"#548181",themeDarkAlt:"#3d6564",themeDark:"#335555",themeDarker:"#263f3e",neutralLighterAlt:"#e7e4e2",neutralLighter:"#e3e1de",neutralLight:"#dad8d5",neutralQuaternaryAlt:"#cbc9c7",neutralQuaternary:"#c2c0be",neutralTertiaryAlt:"#bab8b6",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#edebe9"}}),be=Object(ue.a)({palette:{themePrimary:"#467877",themeLighterAlt:"#f5fafa",themeLighter:"#dae9e9",themeLight:"#bbd6d6",themeTertiary:"#82aead",themeSecondary:"#568887",themeDarkAlt:"#3f6c6b",themeDark:"#355b5a",themeDarker:"#274343",neutralLighterAlt:"#faf9f8",neutralLighter:"#f3f2f1",neutralLight:"#edebe9",neutralQuaternaryAlt:"#e1dfdd",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c6c4",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#ffffff"}});function me(e){switch(e){case"major":return 84;case"patch":return 28;case"prerelease":return 14}}var fe=function(e){var t=e.loaded,a=e.hasData,n=e.theme,r=e.children;return Object(J.jsx)(M.a,{theme:n,className:"".concat(w.a.packageCardFrame," ").concat(t?a?w.a.visibleCardFrame:w.a.noDataCardFrame:w.a.fadedCardFrame),style:{borderColor:n.isInverted?n.palette.whiteTranslucent40:n.palette.blackTranslucent40},children:Object(J.jsx)("div",{className:"".concat(w.a.packageCardContent," ").concat(t?a?w.a.visibleCardContent:w.a.noDataCardContent:w.a.fadedCardContent),children:r})})},je=function(e){var t=e.identifier,a=e.versionFilter,n=e.theme,r=e.tooltipTheme,o=Object(p.useState)(a),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(p.useState)(!1),d=Object(i.a)(u,2),v=d[0],h=d[1],b=Object(p.useState)(null),m=Object(i.a)(b,2),g=m[0],O=m[1];Object(p.useEffect)((function(){g||Object(N.a)(L.a.mark((function e(){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(t);case 2:a=e.sent,O(a);case 4:case"end":return e.stop()}}),e)})))()}),[g,t]),Object(p.useEffect)((function(){a!==s&&(h(!1),l(a))}),[a,s]);var y=null===g||void 0===g?void 0:g.getDatePoints(a),_=f[t];return Object(J.jsxs)(fe,{theme:null!==n&&void 0!==n?n:he,loaded:!!y,hasData:!!y&&y.points.length>0,children:[Object(J.jsxs)("div",{className:w.a.header,children:[Object(J.jsx)("div",{className:w.a.headerLeft}),Object(J.jsxs)("div",{className:w.a.headerText,children:[Object(J.jsx)(P.a,{variant:"large",className:w.a.packageName,children:_.friendlyName}),Object(J.jsx)(P.a,{variant:"medium",children:"(Downloads/Week)"})]}),Object(J.jsx)("div",{className:w.a.headerControls,children:Object(J.jsx)(I.a,{content:"Show as percentage",theme:r,children:Object(J.jsx)(A.a,{toggle:!0,"aria-label":"Show as percentage",disabled:!y||0===y.points.length,onRenderIcon:function(){return Object(J.jsx)(S.a,{})},checked:v,onClick:function(){return h(!v)}})})})]}),y?Object(J.jsx)("div",{className:w.a.chartContainer,children:Object(J.jsx)(le,{history:y,maxDaysShown:me(a),maxVersionsShown:6,maxTicks:4,unit:v?"percentage":"totalDownloads",versionLabeler:_.versionLabeler,theme:n,tooltipTheme:r})}):Object(J.jsx)("div",{style:{height:T().responsiveContainer.height}})]})},ge=a(31),pe=a.n(ge),Oe=a(525),ye=a(261),_e=a(530),ke=a(536),Ce=a(522),xe=a(523),Le=a(94),Ne=Object(Le.a)({displayName:"ReactLogoIcon",svg:function(e){var t=e.classes;return Object(J.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"120 2 600 600",className:t.svg,children:Object(J.jsxs)("g",{fill:"#61DAFB",children:[Object(J.jsx)("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),Object(J.jsx)("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),Object(J.jsx)("path",{d:"M520.5 78.1z"})]})})}}),De=function(e){var t=e.className;return Object(J.jsxs)("div",{className:t,children:[Object(J.jsx)(Ne,{className:pe.a.reactLogo}),Object(J.jsx)(P.a,{variant:"large",children:"React Native Versions"})]})},we=function(e){var t,a,n=null!==(t=e.theme)&&void 0!==t?t:ve,r={backgroundColor:(null!==(a=e.theme)&&void 0!==a?a:ve).semanticColors.bodyBackground},o=Object(p.useState)(!1),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(p.useRef)(null);return Object(p.useEffect)((function(){var e=new IntersectionObserver((function(e){return e.forEach((function(e){return l(e.intersectionRatio<1)}))}),{rootMargin:"10px"});return e.observe(u.current),function(){return e.disconnect()}})),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(M.a,{className:pe.a.mobileHeader,theme:n,style:r,children:Object(J.jsx)("div",{className:pe.a.mobileHeaderContent,children:Object(J.jsx)(De,{className:pe.a.mobileBrand})})}),Object(J.jsx)("div",{ref:u}),Object(J.jsx)(M.a,{className:s?"".concat(pe.a.nav," ").concat(pe.a.scrolledAwayNav):pe.a.nav,theme:n,style:r,children:Object(J.jsxs)("div",{className:pe.a.navContent,children:[Object(J.jsx)(De,{className:pe.a.brand}),Object(J.jsx)(Oe.a,{headersOnly:!0,className:pe.a.pivot,onLinkClick:function(t){window.scrollTo({left:0,top:0,behavior:"smooth"}),e.onItemSelected&&e.onItemSelected(t.props.itemKey)},children:e.items.map((function(e){return Object(J.jsx)(ye.a,{headerText:e.label,itemKey:e.key})}))}),Object(J.jsxs)("div",{className:pe.a.buttonRegion,children:[Object(J.jsx)(I.a,{content:"Toggle dark mode",children:Object(J.jsx)(A.a,{toggle:!0,checked:e.darkMode,onClick:function(){return e.onToggleDarkMode&&e.onToggleDarkMode()},className:pe.a.brightnessIconButton,"aria-label":"Toggle dark mode",onRenderIcon:function(){return Object(J.jsx)(Ce.a,{className:pe.a.brightnessIcon})}})}),Object(J.jsxs)(_e.a,{className:pe.a.gitHubLink,underline:!1,href:"https://github.com/rn-versions/rn-versions.github.io",target:"_blank",rel:"noreferrer",children:[Object(J.jsx)(ke.a,{className:pe.a.gitHubTextButton,text:"Contribute","aria-label":"Contribute",onRenderIcon:function(){return Object(J.jsx)(xe.a,{className:pe.a.gitHubLogo})}}),Object(J.jsx)(A.a,{className:pe.a.gitHubIconButton,"aria-label":"Contribute",onRenderIcon:function(){return Object(J.jsx)(xe.a,{className:pe.a.gitHubLogo})}})]})]})]})})]})},Te=[{label:"Major",key:"major"},{label:"Patch",key:"patch"},{label:"Prerelease",key:"prerelease"}];var Pe=function(){var e=Object(p.useState)("major"),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(p.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),o=Object(i.a)(r,2),c=o[0],s=o[1];return Object(J.jsxs)(M.a,{theme:c?de:he,className:C.a.app,children:[Object(J.jsx)(we,{items:Te,onItemSelected:function(e){return n(e)},darkMode:c,onToggleDarkMode:function(){return s(!c)},theme:c?de:he}),Object(J.jsx)("div",{className:C.a.contentContainer,children:Object(J.jsx)("div",{className:C.a.cardContainer,children:Object.keys(f).map((function(e){return Object(J.jsx)(je,{identifier:e,versionFilter:a,theme:c?ve:be,tooltipTheme:c?de:he},e)}))})})]})};j.prefetch(),_.a.render(Object(J.jsx)(O.a.StrictMode,{children:Object(J.jsx)(Pe,{})}),document.body)},73:function(e,t,a){e.exports={frame:"VersionTooltip_frame__3Lv0n",date:"VersionTooltip_date__1GwoG",versionsList:"VersionTooltip_versionsList__6ks3l",versionsListItem:"VersionTooltip_versionsListItem__1E-df",versionColorIndicator:"VersionTooltip_versionColorIndicator__201KA",versionLabel:"VersionTooltip_versionLabel__2ZozQ",versionCount:"VersionTooltip_versionCount__2olVR"}},99:function(e,t,a){e.exports={versionsListContainer:"VersionLegend_versionsListContainer__2kfsM",versionsList:"VersionLegend_versionsList__gyOfc",versionsListItem:"VersionLegend_versionsListItem__2Sxmb",versionColorIndicator:"VersionLegend_versionColorIndicator__L-tB-",versionLabel:"VersionLegend_versionLabel__1tflT"}}},[[464,1,2]]]);
//# sourceMappingURL=main.51f5b673.chunk.js.map