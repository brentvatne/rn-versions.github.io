(this["webpackJsonprn-version-tracker"]=this["webpackJsonprn-version-tracker"]||[]).push([[0],{20:function(e,t,a){e.exports={packageCardFrame:"PackageCard_packageCardFrame__37prK",visibleCardFrame:"PackageCard_visibleCardFrame__3sw4n",fadedCardFrame:"PackageCard_fadedCardFrame__h8you",noDataCardFrame:"PackageCard_noDataCardFrame__9FLQg",packageCardContent:"PackageCard_packageCardContent__3Kr50",visibleCardContent:"PackageCard_visibleCardContent__4_7O-",fadedCardContent:"PackageCard_fadedCardContent__1fKCN",noDataCardContent:"PackageCard_noDataCardContent__2PBHC",headerLeft:"PackageCard_headerLeft__udvRl",header:"PackageCard_header__1bpM1",headerText:"PackageCard_headerText__3etfm",packageName:"PackageCard_packageName__3oAJu",headerControls:"PackageCard_headerControls__3S0-z",chartContainer:"PackageCard_chartContainer__2-gCP"}},32:function(e,t,a){e.exports={app:"NavBar_app__2ndwE",contentContainer:"NavBar_contentContainer__1HrNg",cardContainer:"NavBar_cardContainer__2-0S2",nav:"NavBar_nav__kUiGN",navSpacer:"NavBar_navSpacer__1qgrd",navContent:"NavBar_navContent__WY6pJ",reactLogo:"NavBar_reactLogo__31oQg",gitHubLink:"NavBar_gitHubLink__129fm",gitHubLogo:"NavBar_gitHubLogo__2VQ1M",pivot:"NavBar_pivot__2oWsQ",gitHubTextButton:"NavBar_gitHubTextButton__31Ju7",gitHubIconButton:"NavBar_gitHubIconButton__B7oPV"}},405:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(54),c=a.n(i),o=a(43),s=a(93),l=a.n(s),u=a(39),d=a.n(u),v=a(56),h=a(20),f=a.n(h),b={area:{isAnimationActive:!1},responsiveContainer:{width:"100%",height:250},grid:{strokeDasharray:"3 3"},xAxis:{height:32,tickLine:!1,tickMargin:10,minTickGap:32},yAxis:{width:72,tickLine:!1,tickMargin:10,tickSize:0},tooltip:{animationDuration:300},legend:{height:24,wrapperStyle:{position:"absolute",bottom:0}}},m=a(454),j=a(460),p=a(455),g=a(461),y=a(96),O=a(52),_=a.n(O);function x(e){if("0.0"===e)return"nightly";var t=e.match(Object(y.a)(/^0\.0\.0\x2D([0-9a-f]{1,7})[0-9a-f]*$/,{hash:1}));return t?"nightly@".concat(t.groups.hash):e}var C=function(e){return _.a.lt(e,"0.0.0")},k=function(e,t){return _.a.gte(e,"".concat(t,".0"),{includePrerelease:!0})},P={"@types/react-native":{friendlyName:"DefinitelyTyped Typings",versionFilter:function(e){return k(e,"0.63")}},"react-native":{friendlyName:"React Native",versionFilter:function(e){return k(e,"0.63")||C(e)},versionLabeler:function(e){if("0.0"===e)return"nightly";var t=e.match(Object(y.a)(/^0\.0\.0\x2D([0-9]{4})([0-9]{2})([0-9]{2})\x2D[0-9]{4}\x2D[0-9a-f]+$/,{year:1,month:2,day:3}));if(t){var a=parseInt(t.groups.year,10),n=parseInt(t.groups.month,10),r=parseInt(t.groups.day,10),i=new Date(a,n-1,r);return"nightly@".concat(i.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit"}))}return e}},"react-native-macos":{friendlyName:"React Native macOS",versionFilter:function(e){return k(e,"0.63")||C(e)},versionLabeler:x},"react-native-web":{friendlyName:"React Native Web",versionFilter:function(e){return k(e,"0.11")||C(e)},versionLabeler:x},"react-native-windows":{friendlyName:"React Native Windows",versionFilter:function(e){return(k(e,"0.63")||C(e))&&"1.0.0"!==e},versionLabeler:function(e){if("0.0"===e)return"canary";var t=e.match(Object(y.a)(/^0\.0\.0\x2D(canary.[0-9]+)$/,{canary:1}));return t?t.groups.canary:e}}},D=a(82),N=a(27),w=a(16),L=a(35),S=a(169),T=a.n(S);function F(e,t,a){var n=(2-t/100)*a/2,r=t*a/(n<50?2*n:200-2*n);return"hsl(".concat(e,", ").concat(Math.round(r),"%, ").concat(Math.round(n),"%)")}function H(e,t){return Math.abs((e-t+.5)%1-.5)}var B=a(44),M=a.n(B),A=a(5);var I=function(e){var t=e.label,a=e.payload,n=e.measurementTransform,r=Object(L.a)(null!==a&&void 0!==a?a:[]);r.reverse();var i,c=r.length>0&&Object(A.jsx)("ul",{className:M.a.versionsList,children:r.map((function(e,t){var a=function(e,t,a){var n=e/Object.values(t.payload.versionCounts).reduce((function(e,t){return e+t}),0)*100;return"percentage"===a?"".concat(Math.round(100*n)/100,"%"):"".concat(e.toLocaleString()," (").concat(Math.round(n),"%)")}(e.value,e,n);return Object(A.jsxs)("li",{className:M.a.versionsListItem,children:[Object(A.jsx)("div",{className:M.a.versionColorIndicator,style:{backgroundColor:e.color||"#000"}}),Object(A.jsx)(j.a,{className:M.a.versionLabel,children:e.name}),Object(A.jsx)(j.a,{className:M.a.versionCount,children:a})]},t)}))});return Object(A.jsxs)("div",{className:M.a.frame,children:[Object(A.jsx)(j.a,{className:M.a.date,variant:"medium",children:(i=t,new Date(i).toLocaleDateString("en-US",{month:"short",day:"2-digit"}))}),c]})},V=a(40);var R=function(e){var t,a,r=e.historyPoints,i=e.maxDaysShown,c=e.maxVersionsShown,o=e.showLegend,s=e.showTooltip,l=e.measurementTransform,u=e.versionLabeler,d=c?function(e,t,a){var n,r=0,i=Object(N.a)(e);try{for(i.s();!(n=i.n()).done;){var c=n.value;r=Math.max(r,c.date)}}catch(I){i.e(I)}finally{i.f()}var o,s=r-24*a*60*60*1e3,l=[],u=Object(N.a)(e);try{var d=function(){var e=o.value;if(e.date>=s){var t=l.find((function(t){return t.version===e.version})),a=e.date<s?0:e.count;t?t.count+=a:l.push({version:e.version,count:a})}};for(u.s();!(o=u.n()).done;)d()}catch(I){u.e(I)}finally{u.f()}var v,h=l.sort((function(e,t){return e.count-t.count})).slice(-t).map((function(e){return e.version})),f=[],b=Object(N.a)(e);try{for(b.s();!(v=b.n()).done;){var m=v.value;h.includes(m.version)&&!f.includes(m.version)&&f.push(m.version)}}catch(I){b.e(I)}finally{b.f()}var j,p=[],g=Object(N.a)(e);try{for(g.s();!(j=g.n()).done;){var y=j.value;h.includes(y.version)&&p.push(y)}}catch(I){g.e(I)}finally{g.f()}for(var O=new Map,_=0,x=p;_<x.length;_++){var C,k=x[_],P=null!==(C=O.get(k.date))&&void 0!==C?C:[];O.set(k.date,[].concat(Object(L.a)(P),[k]))}var D,S=Object(L.a)(O.keys()).sort(),T=[],F=Object(N.a)(S);try{for(F.s();!(D=F.n()).done;){var H=D.value;if(!(H<s)){var B,M=Object(N.a)(f);try{var A=function(){var e=B.value,t=O.get(H).find((function(t){return t.version===e}));t?T.push(Object(w.a)({date:H},t)):T.push({date:H,version:e,count:0})};for(M.s();!(B=M.n()).done;)A()}catch(I){M.e(I)}finally{M.f()}}}}catch(I){F.e(I)}finally{F.f()}return T}(r,c,null!==i&&void 0!==i?i:30):r,v="percentage"===l?function(e){var t,a={},n=Object(N.a)(e);try{for(n.s();!(t=n.n()).done;){var r,i=t.value,c=null!==(r=a[i.date])&&void 0!==r?r:0;a[i.date]=c+i.count}}catch(o){n.e(o)}finally{n.f()}return e.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{count:e.count/a[e.date]})}))}(d):d,h=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit"}),f=new Set(v.map((function(e){return e.version}))),m=Object(L.a)(f),j=void 0,p=m.map((function(e,t){var a=function(e,t){var a,n,r=T.a.create(e),i=100;do{n=r.random(),n+=.618033988749895,n%=1}while(t&&--i>0&&(H(n,t.adjacentHue)<.25||t.allHues.find((function(e){return H(n,e)<.05}))));return{color:F(360*n,100,90),avoidToken:{adjacentHue:n,allHues:[].concat(Object(L.a)(null!==(a=null===t||void 0===t?void 0:t.allHues)&&void 0!==a?a:[]),[n])}}}(e,j),r=a.color,i=a.avoidToken;return j=i,Object(n.createElement)(V.a,Object(w.a)(Object(w.a)({},b.area),{},{name:u?u(e):e,key:e,dataKey:function(t){return t.versionCounts[e]},stackId:"1",stroke:r,fill:r}))})),g=[],y=Object(N.a)(m);try{for(y.s();!(t=y.n()).done;){var O,_=t.value,x=Object(N.a)(v);try{var C=function(){var e=O.value;if(e.version===_){var t=g.find((function(t){return t.date===e.date}));t?t.versionCounts[_]=e.count:g.push({date:e.date,versionCounts:Object(D.a)({},_,e.count)})}};for(x.s();!(O=x.n()).done;)C()}catch(k){x.e(k)}finally{x.f()}}}catch(k){y.e(k)}finally{y.f()}return 0===v.length?Object(A.jsx)("div",{style:{height:b.responsiveContainer.height,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}):Object(A.jsx)(V.e,Object(w.a)(Object(w.a)({},b.responsiveContainer),{},{children:Object(A.jsxs)(V.b,{data:g,children:[Object(A.jsx)(V.g,Object(w.a)(Object(w.a)({},b.xAxis),{},{dataKey:"date",type:"number",interval:"preserveStartEnd",scale:"time",domain:["dataMin","dataMax"],tickFormatter:function(e){return h.format(new Date(e))}})),Object(A.jsx)(V.h,Object(w.a)(Object(w.a)({},b.yAxis),{},{type:"number"},"percentage"===l?{domain:[0,1],tickFormatter:function(e){return"".concat(Math.round(100*e),"%")}}:{domain:["auto","auto"],tickFormatter:function(e){return e.toLocaleString()}})),Object(A.jsx)(V.c,Object(w.a)({},b.grid)),!1!==s&&Object(A.jsx)(V.f,{content:(a={measurementTransform:l},function(e){return Object(A.jsx)(I,Object(w.a)(Object(w.a)({},a),e))})}),!1!==o&&Object(A.jsx)(V.d,Object(w.a)({},b.legend)),p]})}))},Q=a(177),G=a(178),K=function(){function e(t,a){Object(Q.a)(this,e),this.packageDescription=void 0,this.historyPoints=void 0,this.majorDatePoints=null,this.patchDatePoints=null,this.prereleaseDatePoints=null,this.packageDescription=P[t],this.historyPoints=a}return Object(G.a)(e,[{key:"getMajorDatePoints",value:function(){return this.majorDatePoints||(this.majorDatePoints=this.accumulateDatePoints({versionMapper:this.mapToMajor})),this.majorDatePoints}},{key:"mapToMajor",value:function(e){var t=_.a.parse(e);return 0===t.major?"0.".concat(t.minor):"".concat(t.major,".0")}},{key:"getPatchDatePoints",value:function(){return this.patchDatePoints||(this.patchDatePoints=this.accumulateDatePoints()),this.patchDatePoints}},{key:"getPrereleaseDataPoints",value:function(){return this.prereleaseDatePoints||(this.prereleaseDatePoints=this.accumulateDatePoints({extraFilter:function(e){return!!_.a.prerelease(e.version)}})),this.prereleaseDatePoints}},{key:"getDatePoints",value:function(e){switch(e){case"major":return this.getMajorDatePoints();case"patch":return this.getPatchDatePoints();case"prerelease":return this.getPrereleaseDataPoints()}}},{key:"accumulateDatePoints",value:function(e){var t,a=this;if(t=(null===e||void 0===e?void 0:e.extraFilter)?this.historyPoints.filter((function(t){return e.extraFilter(t)&&a.packageDescription.versionFilter(t.version)})):this.historyPoints.filter((function(e){return a.packageDescription.versionFilter(e.version)})),null===e||void 0===e?void 0:e.versionMapper){var n,r={},i=Object(N.a)(t);try{var c=function(){var t,a=n.value,i=e.versionMapper(a.version),c=null!==(t=r[i])&&void 0!==t?t:[];r[i]=c;var o=c.find((function(e){return a.date===e.date}));o?o.count+=a.count:c.push({date:a.date,count:a.count})};for(i.s();!(n=i.n()).done;)c()}catch(d){i.e(d)}finally{i.f()}t=[];for(var s=function(){var e,a=Object(o.a)(u[l],2),n=a[0],r=a[1].sort((function(e,t){return e.date-t.date}));(e=t).push.apply(e,Object(L.a)(r.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{version:n})}))))},l=0,u=Object.entries(r);l<u.length;l++)s()}return t}}],[{key:"get",value:function(){var t=Object(v.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.instances[a]){t.next=5;break}return t.next=3,e.loadHistoryFile(a);case 3:n=t.sent,e.instances[a]=new e(a,n.points);case 5:return t.abrupt("return",e.instances[a]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadHistoryFile",value:function(){var e=Object(v.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="@types/react-native"===e.t0?3:"react-native"===e.t0?6:"react-native-macos"===e.t0?9:"react-native-web"===e.t0?12:"react-native-windows"===e.t0?15:18;break;case 3:return e.next=5,a.e(3).then(a.t.bind(null,467,3));case 5:case 8:case 11:case 14:case 17:return e.abrupt("return",e.sent);case 6:return e.next=8,a.e(7).then(a.t.bind(null,468,3));case 9:return e.next=11,a.e(4).then(a.t.bind(null,469,3));case 12:return e.next=14,a.e(5).then(a.t.bind(null,470,3));case 15:return e.next=17,a.e(6).then(a.t.bind(null,471,3));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();K.instances={};var E=a(47),J=Object(E.a)({palette:{themePrimary:"#79bdbc",themeLighterAlt:"#f9fcfc",themeLighter:"#e6f4f4",themeLight:"#d2ebeb",themeTertiary:"#a9d7d6",themeSecondary:"#86c5c4",themeDarkAlt:"#6daaa9",themeDark:"#5c8f8f",themeDarker:"#446a69",neutralLighterAlt:"#302e2d",neutralLighter:"#383735",neutralLight:"#464443",neutralQuaternaryAlt:"#4e4d4b",neutralQuaternary:"#555352",neutralTertiaryAlt:"#72706e",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#252423"}}),U=Object(E.a)({palette:{themePrimary:"#467877",themeLighterAlt:"#f5fafa",themeLighter:"#dae9e9",themeLight:"#bbd6d6",themeTertiary:"#82aead",themeSecondary:"#568887",themeDarkAlt:"#3f6c6b",themeDark:"#355b5a",themeDarker:"#274343",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#0d0d0c",neutralSecondary:"#111110",neutralPrimaryAlt:"#151514",neutralPrimary:"#252423",neutralDark:"#1e1d1c",black:"#222120",white:"#ffffff"}});function W(e){switch(e){case"major":return 60;case"patch":return 30;case"prerelease":return 14}}var z=function(e){var t=e.loaded,a=e.hasData,n=e.children;return Object(A.jsx)("div",{className:"".concat(f.a.packageCardFrame," ").concat(t?a?f.a.visibleCardFrame:f.a.noDataCardFrame:f.a.fadedCardFrame),children:Object(A.jsx)("div",{className:"".concat(f.a.packageCardContent," ").concat(t?a?f.a.visibleCardContent:f.a.noDataCardContent:f.a.fadedCardContent),children:n})})},Y=function(e){var t=e.identifier,a=e.versionFilter,r=Object(n.useState)(a),i=Object(o.a)(r,2),c=i[0],s=i[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),h=u[0],y=u[1],O=Object(n.useState)(null),_=Object(o.a)(O,2),x=_[0],C=_[1];Object(n.useEffect)((function(){x||Object(v.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get(t);case 2:a=e.sent,C(a);case 4:case"end":return e.stop()}}),e)})))()}),[x,t]),Object(n.useEffect)((function(){a!==c&&(y(!1),s(a))}),[a,c]);var k=null===x||void 0===x?void 0:x.getDatePoints(a),D=P[t];return Object(A.jsx)(z,{loaded:!!k,hasData:!!k&&k.length>0,children:Object(A.jsxs)(m.a,{theme:U,children:[Object(A.jsxs)("div",{className:f.a.header,children:[Object(A.jsx)("div",{className:f.a.headerLeft}),Object(A.jsxs)("div",{className:f.a.headerText,children:[Object(A.jsx)(j.a,{variant:"large",className:f.a.packageName,children:D.friendlyName}),Object(A.jsx)(j.a,{variant:"medium",children:"(Downloads/Week)"})]}),Object(A.jsx)("div",{className:f.a.headerControls,children:Object(A.jsx)(p.a,{content:"Show as percentage",children:Object(A.jsx)(g.a,{toggle:!0,"aria-label":"Show as percentage",disabled:!k||0===k.length,iconProps:{iconName:"CalculatorPercentage"},checked:h,onClick:function(){return y(!h)}})})})]}),k?Object(A.jsx)("div",{className:f.a.chartContainer,children:Object(A.jsx)(R,{historyPoints:k,maxDaysShown:W(a),maxVersionsShown:7,measurementTransform:h?"percentage":"totalDownloads",versionLabeler:D.versionLabeler})}):Object(A.jsx)("div",{style:{height:b.responsiveContainer.height}})]})})},$=a(32),q=a.n($),X=a.p+"static/media/react-logo.6ce24c58.svg",Z=a(457),ee=a(456),te=a(187),ae=a(458),ne=a(191),re=function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(m.a,{theme:J,children:Object(A.jsx)(Z.a,{horizontal:!0,className:q.a.nav,style:{backgroundColor:J.semanticColors.bodyBackground},children:Object(A.jsxs)("div",{className:q.a.navContent,children:[Object(A.jsx)("img",{src:X,alt:"React Logo",className:q.a.reactLogo}),Object(A.jsx)(j.a,{variant:"large",children:"React Native Versions"}),Object(A.jsx)(ee.a,{headersOnly:!0,className:q.a.pivot,onLinkClick:function(t){window.scrollTo({left:0,top:0,behavior:"smooth"}),e.onItemSelected&&e.onItemSelected(t.props.itemKey)},children:e.items.map((function(e){return Object(A.jsx)(te.a,{headerText:e.label,itemKey:e.key})}))}),Object(A.jsxs)(ae.a,{className:q.a.gitHubLink,underline:!1,href:"https://github.com/rn-versions/rn-versions.github.io",target:"_blank",rel:"noreferrer",children:[Object(A.jsx)(ne.a,{className:q.a.gitHubTextButton,text:"Contribute",label:"Contribute",iconProps:{iconName:"GitHub",className:q.a.gitHubLogo}}),Object(A.jsx)(g.a,{className:q.a.gitHubIconButton,label:"Contribute",iconProps:{iconName:"GitHub",className:q.a.gitHubLogo}})]})]})})}),Object(A.jsx)("div",{className:q.a.navSpacer})]})},ie=[{name:"react-native"},{name:"@types/react-native"},{name:"react-native-windows"},{name:"react-native-macos"},{name:"react-native-web"}],ce=[{label:"Major",key:"major"},{label:"Patch",key:"patch"},{label:"Prerelease",key:"prerelease"}];var oe=function(){var e=Object(n.useState)("major"),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(A.jsxs)("div",{className:l.a.app,children:[Object(A.jsx)(re,{items:ce,onItemSelected:function(e){return r(e)}}),Object(A.jsx)("div",{className:l.a.contentContainer,children:Object(A.jsx)("div",{className:l.a.cardContainer,children:ie.map((function(e){return Object(A.jsx)(Y,{identifier:e.name,versionFilter:a},e.name)}))})})]})},se=a(188),le=a(3);Object(se.a)(),Object(le.v)({icons:{GitHub:Object(A.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(A.jsx)("title",{children:"GitHub"}),Object(A.jsx)("path",{fill:"white",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}}),c.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(oe,{})}),document.body)},44:function(e,t,a){e.exports={frame:"VersionTooltip_frame__Ear68",date:"VersionTooltip_date__3iXaR",versionsList:"VersionTooltip_versionsList__pBT1t",versionsListItem:"VersionTooltip_versionsListItem__9IYnp",versionColorIndicator:"VersionTooltip_versionColorIndicator__16U_R",versionLabel:"VersionTooltip_versionLabel__3hu-9",versionCount:"VersionTooltip_versionCount__3pGiH"}},93:function(e,t,a){e.exports={app:"App_app__2ziFi",contentContainer:"App_contentContainer__3BvVB",cardContainer:"App_cardContainer__2YSdb"}}},[[405,1,2]]]);
//# sourceMappingURL=main.adba4170.chunk.js.map