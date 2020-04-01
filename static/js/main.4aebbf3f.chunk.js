(window["webpackJsonpcltc_live-web"]=window["webpackJsonpcltc_live-web"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),i=(a(102),a(103),a(29)),l=a(36),s=a(13),u=a(17),m={loading:!1,streams:[],localStream:null,currentStream:null,otherStreams:[],devicesList:[],config:{uid:0,host:!0,channelName:"",token:"006c58c4255345f44199705565772d8695cIAADZNZbvOmdlViWm/ht0UOAj7evcjVEskd4STE8OJI2T6DfQtYAAAAAEABXPAJxro+FXgEAAQCsj4Ve",microphoneId:"",cameraId:"",resolution:"480p"},agoraClient:null,mode:"live",codec:"h264",muteVideo:!0,muteAudio:!0,screen:!1,profile:!1},d=function(e,t){switch(t.type){case"config":return Object(s.a)({},e,{config:t.payload});case"client":return Object(s.a)({},e,{client:t.payload});case"loading":return Object(s.a)({},e,{loading:t.payload});case"codec":return Object(s.a)({},e,{codec:t.payload});case"video":return Object(s.a)({},e,{muteVideo:t.payload});case"audio":return Object(s.a)({},e,{muteAudio:t.payload});case"screen":return Object(s.a)({},e,{screen:t.payload});case"devicesList":return Object(s.a)({},e,{devicesList:t.payload});case"localStream":return Object(s.a)({},e,{localStream:t.payload});case"profile":return Object(s.a)({},e,{profile:t.payload});case"currentStream":var a=e.streams,n=t.payload,o=a.filter((function(e){return e.getId()!==n.getId()}));return Object(s.a)({},e,{currentStream:n,otherStreams:o});case"addStream":var r=e.streams,c=e.currentStream,i=t.payload,u=c;if(u||(u=i),4===r.length)return Object(s.a)({},e);var m=[].concat(Object(l.a)(r),[i]),d=m.filter((function(e){return e.getId()!==u.getId()}));return Object(s.a)({},e,{streams:m,currentStream:u,otherStreams:d});case"removeStream":var f=e.streams,p=e.currentStream,h=t.stream,g=t.uid,v=h?h.getId():g,b=p,y=f.filter((function(e){return e.getId()!==v}));v===p.getId()&&(b=0===y.length?null:y[0]);var E=b?y.filter((function(e){return e.getId()!==b.getId()})):[];return Object(s.a)({},e,{streams:y,currentStream:b,otherStreams:E});case"clearAllStream":var S=e.streams,x=e.localStream,j=e.currentStream;return S.forEach((function(e){e.isPlaying()&&e.stop()})),x&&(x.isPlaying()&&x.stop(),x.close()),j&&(j.isPlaying()&&j.stop(),j.close()),Object(s.a)({},e,{currentStream:null,localStream:null,streams:[]});default:throw new Error("mutation type not defined")}},f=a(41),p=a(3),h=a(161),g=a(73),v=a.n(g),b=a(78),y=a.n(b),E=a(79),S=a.n(E),x=a(80),j=a.n(x),k=a(60),C=a(148),I=a(150),O=a(149),_=a(77),N=a.n(_),w=a(147),A={success:v.a,warning:N.a,error:y.a,info:S.a},R=Object(w.a)((function(e){return{success:{backgroundColor:k.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:C.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"},customSnackbar:{minWidth:"180px !important",minHeight:"40px !important",background:"rgba(0,0,0,0.7)",boxShadow:"0px 2px 4px 0px rgba(42,62,84,0.24)",borderRadius:"30px",justifyContent:"center",padding:"0 11px"}}}));function V(e){var t=R(),a=z(),r=e.message,c=(e.onClose,e.variant),i=Object(f.a)(e,["message","onClose","variant"]),l=A[c];return Object(n.useEffect)((function(){var e=setTimeout((function(){a.removeTop()}),1e3);return function(){clearTimeout(e)}}),[a]),o.a.createElement(O.a,Object.assign({className:Object(p.a)(t[c],t.customSnackbar),"aria-describedby":"client-snackbar",message:o.a.createElement("span",{id:"client-snackbar",className:t.message},"error"===c?o.a.createElement("i",{className:"error-icon"}):o.a.createElement(l,{className:Object(p.a)(t.icon,t.iconVariant)}),r),action:[o.a.createElement(I.a,{key:"close","aria-label":"close",color:"inherit",onClick:function(){a.removeTop()}},o.a.createElement(j.a,{className:Object(p.a)(t.icon)}))]},i))}function P(e){var t=function(e){};return o.a.createElement(o.a.Fragment,null,e.toasts.map((function(e,a){return o.a.createElement(h.a,{key:a,open:!0,anchorOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(V,{onClose:t,variant:e.variant,message:"".concat(e.message)}))})))}var D=a(151),T=Object(w.a)((function(e){return{progress:{margin:e.spacing(2),color:"#44A2FC"},container:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#666666"}}}));function B(){var e=T();return o.a.createElement("div",{className:e.container},o.a.createElement(D.a,{className:e.progress}))}var F=Object(n.createContext)({}),L=Object(n.createContext)({}),W=function(e){var t=e.children,a=Object(n.useReducer)(d,m),r=Object(u.a)(a,2),c=r[0],i=r[1],f=Object(n.useState)([]),p=Object(u.a)(f,2),h=p[0],g=p[1],v={startLoading:function(){i({type:"loading",payload:!0})},stopLoading:function(){i({type:"loading",payload:!1})},updateConfig:function(e){i({type:"config",payload:Object(s.a)({},c.config,{},e)})},setClient:function(e){i({type:"client",payload:e})},setCodec:function(e){i({type:"codec",payload:e})},setVideo:function(e){i({type:"video",payload:e})},setAudio:function(e){i({type:"audio",payload:e})},setScreen:function(e){i({type:"screen",payload:e})},setProfile:function(e){i({type:"profile",payload:e})},toastSuccess:function(e){g([].concat(Object(l.a)(h),[{variant:"success",message:e}]))},toastInfo:function(e){g([].concat(Object(l.a)(h),[{variant:"info",message:e}]))},toastError:function(e){g([].concat(Object(l.a)(h),[{variant:"error",message:e}]))},removeTop:function(){var e=h.filter((function(e,t){return t>0}));g(Object(l.a)(e))},setLocalStream:function(e){i({type:"localStream",payload:e})},setCurrentStream:function(e){i({type:"currentStream",payload:e})},setDevicesList:function(e){i({type:"devicesList",payload:e})},clearAllStream:function(){i({type:"clearAllStream"})},addLocal:function(e){var t=e.stream;v.setLocalStream(t),v.setCurrentStream(t)},addStream:function(e){var t=e.stream;i({type:"addStream",payload:t})},removeStream:function(e){var t=e.stream;i({type:"removeStream",stream:t})},removeStreamById:function(e){var t=e.uid;i({type:"removeStream",uid:t})},connectionStateChanged:function(e){v.toastInfo("".concat(e.curState))}};return o.a.createElement(F.Provider,{value:c},o.a.createElement(L.Provider,{value:v},o.a.createElement(P,{toasts:h}),c.loading?o.a.createElement(B,null):null,t))};function M(){return Object(n.useContext)(F)}function z(){return Object(n.useContext)(L)}var H=a(156),$=a(159),U=a(155),J=a(4),X=a(152),q=a(162),Q=a(153),Y=a(154),Z=a(25),G=o.a.createContext({}),K=function(e){var t=e.children;return o.a.createElement(Z.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,null,(function(e){return o.a.createElement(G.Provider,{value:e},t)}))))};function ee(){return Object(n.useContext)(G)}var te=Object(J.a)({root:{color:"#999999","&$checked":{color:"#44A2FC"},"&:hover":{backgroundColor:"inherit"}}})((function(e){e.children;var t=Object(f.a)(e,["children"]);return o.a.createElement("div",{className:"role-item"},o.a.createElement("div",{className:"icon-".concat(t.value,"-").concat(t.checked?"active":"inactive")}),o.a.createElement("div",{className:"radio-row ".concat(t.value)},o.a.createElement("div",{className:"custom-radio"},o.a.createElement("input",{type:"radio",value:t.value,checked:t.checked,onChange:t.onChange}),o.a.createElement("div",{className:"checkmark"})),o.a.createElement($.a,{flex:"1",className:"role-name-".concat(t.checked?"active":"inactive")},t.value)))})),ae=Object(w.a)((function(e){return{fontStyle:{color:"#9ee2ff"},midItem:{marginTop:"1rem",marginBottom:"6rem"},item:{flex:1,display:"flex",alignItems:"center"},coverLeft:{background:"linear-gradient(to bottom, #307AFF, 50%, #46cdff)",alignItems:"center",flex:1,display:"flex",flexDirection:"column"},coverContent:{display:"flex",justifyContent:"center",flexDirection:"column",color:"#fff"},container:{display:"flex",justifyContent:"center",alignItems:"center"},card:{display:"flex",minWidth:700,minHeight:500,maxHeight:500,borderRadius:"10px",boxShadow:"0px 6px 18px 0px rgba(0,0,0,0.2)"},input:{maxWidth:"250px",minWidth:"250px",alignSelf:"center"},grid:{margin:"0 !important"},button:{lineHeight:"21px",color:"rgba(255,255,255,1)",fontSize:"17px",textTransform:"none",height:"44px",width:"260px","&:hover":{backgroundColor:"#82C2FF"},margin:e.spacing(1),marginTop:"33px",backgroundColor:"#44a2fc",borderRadius:"30px"},radio:{padding:"0",fontSize:"14px",alignItems:"center",paddingRight:"5px"}}}));function ne(){var e=ae(),t=ee(),a=M(),n=z(),r=function(e){var t=e.target.value;n.updateConfig({host:"host"===t})};return o.a.createElement($.a,{marginTop:"114px",flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"},o.a.createElement(Z.b,{to:"/setting",className:"setting-btn"}),o.a.createElement("a",{href:"https://github.com/AgoraIO/Basic-Video-Broadcasting/tree/master/OpenLive-Web",className:"github"}),o.a.createElement("div",{className:"role-container"},o.a.createElement(te,{className:e.radio,value:"host",checked:a.config.host,onChange:r}),o.a.createElement(te,{className:e.radio,value:"audience",checked:!a.config.host,onChange:r})),o.a.createElement($.a,{marginTop:"92",flex:"1",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},o.a.createElement(X.a,{className:Object(p.a)(e.input,e.grid)},o.a.createElement(q.a,{htmlFor:"channelName"},"Pick a topic to chat"),o.a.createElement(Q.a,{id:"channelName",name:"channelName",defaultValue:a.config.channelName,onChange:function(e){n.updateConfig({channelName:e.target.value})}})),o.a.createElement(X.a,{className:e.grid},o.a.createElement(Y.a,{onClick:function(){a.config.channelName?(n.startLoading(),t.history.push({pathname:"/meeting/".concat(a.config.channelName)})):n.toastError("You need enter the topic")},variant:"contained",color:"primary",className:e.button},"Start Live Broadcast"))))}var oe=a(82),re=a(83),ce=a(30),ie=a.n(ce),le=a(84),se=a.n(le);console.log("agora sdk version: "+ie.a.VERSION+" compatible: "+ie.a.checkSystemRequirements());var ue=function(){function e(){Object(oe.a)(this,e),this._client=null,this._joined=!1,this._localStream=null,this._params={},this._uid=0,this._eventBus=new se.a,this._showProfile=!1,this._subscribed=!1,this._created=!1}return Object(re.a)(e,[{key:"createClient",value:function(e){return this._client=ie.a.createClient({mode:e.mode,codec:e.codec}),this._client}},{key:"destroy",value:function(){this._created=!1,this._client=null}},{key:"on",value:function(e,t){-1===["localStream-added","screenShare-canceled"].indexOf(e)?this._client.on(e,t):this._eventBus.on(e,t)}},{key:"setClientRole",value:function(e){this._client.setClientRole(e)}},{key:"createRTCStream",value:function(e){var t=this;return new Promise((function(a,n){t._uid=t._localStream?t._localStream.getId():e.uid,t._localStream&&(t.unpublish(),t._localStream.isPlaying()&&t._localStream.stop(),t._localStream.close());var o=ie.a.createStream({streamID:t._uid,audio:!0,video:!0,screen:!1,microphoneId:e.microphoneId,cameraId:e.cameraId});e.resolution&&"default"!==e.resolution&&o.setVideoProfile(e.resolution),o.init((function(){t._localStream=o,t._eventBus.emit("localStream-added",{stream:t._localStream}),!1===e.muteVideo&&t._localStream.muteVideo(),!1===e.muteAudio&&t._localStream.muteAudio(),a()}),(function(e){n(e),console.error("init local stream failed ",e)}))}))}},{key:"createScreenSharingStream",value:function(e){var t=this;return new Promise((function(a,n){t._uid=t._localStream?t._localStream.getId():e.uid,t._localStream&&(t._uid=t._localStream.getId(),t.unpublish(),t._localStream.isPlaying()&&t._localStream.stop(),t._localStream.close());var o=ie.a.createStream({streamID:t._uid,audio:!0,video:!1,screen:!0,microphoneId:e.microphoneId,cameraId:e.cameraId});e.resolution&&"default"!==e.resolution&&o.setScreenProfile("".concat(e.resolution,"_1")),o.on("stopScreenSharing",(function(e){t._eventBus.emit("stopScreenSharing",e)})),o.init((function(){t._localStream=o,t._eventBus.emit("localStream-added",{stream:t._localStream}),a()}),(function(e){a(e)}))}))}},{key:"subscribe",value:function(e,t){this._client.subscribe(e,t)}},{key:"_createTmpStream",value:function(){var e=this;return this._uid=0,new Promise((function(t,a){e._localStream&&e._localStream.close();var n=ie.a.createStream({streamID:e._uid,audio:!0,video:!0,screen:!1});n.init((function(){e._localStream=n,t()}),(function(e){a(e),console.error("init local stream failed ",e)}))}))}},{key:"getDevices",value:function(){var e=this;return new Promise((function(t,a){e._client||e.createClient({codec:"h264",mode:"live"}),e._createTmpStream().then((function(){ie.a.getDevices((function(a){e._localStream.close(),t(a)}))}))}))}},{key:"setStreamFallbackOption",value:function(e,t){this._client.setStreamFallbackOption(e,t)}},{key:"enableDualStream",value:function(){var e=this;return new Promise((function(t,a){e._client.enableDualStream(t,a)}))}},{key:"setRemoteVideoStreamType",value:function(e,t){this._client.setRemoteVideoStreamType(e,t)}},{key:"join",value:function(e){var t=this;return this._joined="pending",new Promise((function(a,n){t._params=e,t._client.init("c58c4255345f44199705565772d8695c",(function(){t._client.join(e.token?e.token:null,e.channel,e.uid?+e.uid:null,(function(o){t._uid=o,console.log("join channel: "+e.channel+" success, uid: "+o),t._joined=!0,e.uid=o,e.host?t.createRTCStream(e).then((function(){t.enableDualStream().then((function(){t.setRemoteVideoStreamType(t._localStream,0),a()})).catch((function(e){n()}))})).catch((function(e){n(e)})):a()}),(function(e){t._joined=!1,n(e),console.error("client join failed",e)}))}),(function(e){t._joined=!1,n(e),console.error(e)}))}))}},{key:"publish",value:function(){this._client.publish(this._localStream,(function(e){console.error(e)}))}},{key:"unpublish",value:function(){this._client&&this._client.unpublish(this._localStream,(function(e){console.error(e)}))}},{key:"leave",value:function(){var e=this;return new Promise((function(t){e._client.leave((function(){e._joined=!1,e.destroy(),t()}),(function(e){console.log("channel leave failed"),console.error(e)}))}))}}]),e}();var me=a(158),de=a(165),fe=a(164),pe=a(163),he=Object(w.a)((function(e){return{menuTitle:{color:"#333333",textAlign:"center",fontSize:"h6.fontSize",position:"relative",top:"7px"},marginTop:{marginTop:"0 !important"},menu:{margin:"0.25rem 0",position:"relative",height:"39px",display:"flex",justifyContent:"center",alignItems:"center"},line:{marginTop:"0.2rem",marginBottom:"0.5rem",borderBottom:"1px solid #EAEAEA"},hr:{borderBottom:"1px solid #EAEAEA"},switchItem:{flexDirection:"row-reverse !important",marginLeft:"0 !important",marginRight:"0 !important",justifyContent:"space-between"}}})),ge=Object(J.a)((function(e){return{root:{width:42,height:26,padding:2,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#44A2FC",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(f.a)(e,["classes"]);return o.a.createElement(pe.a,Object.assign({focusVisibleClassName:t.focusVisible,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))}));function ve(){var e=he(),t=M(),a=z(),r=function(){var e=M(),t=z(),a=Object(n.useMemo)((function(){return new ue}),[]),o=Object(n.useMemo)((function(){return[e.devicesList.filter((function(e){return"videoinput"===e.kind})).map((function(e,t){return{value:e.deviceId,label:e.label?e.label:"Video Input ".concat(t)}})),e.devicesList.filter((function(e){return"audioinput"===e.kind})).map((function(e,t){return{value:e.deviceId,label:e.label?e.label:"Audio Input ".concat(t)}}))]}),[e.devicesList]),r=Object(u.a)(o,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!(c.length>0||i.length>0))return a.getDevices().then((function(e){t.setDevicesList(e)})),function(){a.destroy()}}),[i,t,c,a]),Object(n.useEffect)((function(){!c[0]||!i[0]||e.config.cameraId&&e.config.microphoneId||(t.updateConfig({cameraId:c[0].value,microphoneId:i[0].value}),t.stopLoading())}),[t,e.devicesList,e.config,c,i]),[c,i]}(),c=Object(u.a)(r,2),i=c[0],l=c[1];return o.a.createElement($.a,{flex:"1",display:"flex",flexDirection:"column"},o.a.createElement(Z.b,{to:"/",className:"back-btn"}),o.a.createElement($.a,{display:"flex",flex:"1",flexDirection:"column",padding:"0 1rem",justifyContent:"flex-start"},o.a.createElement(X.a,{className:e.menu},o.a.createElement("span",{className:e.menuTitle},"Setting")),o.a.createElement("div",{className:e.line}),o.a.createElement(X.a,null,o.a.createElement(q.a,{htmlFor:"resolution"},"Resolution"),o.a.createElement(me.a,{value:t.config.resolution,onChange:function(e){a.updateConfig({resolution:e.target.value})},inputProps:{name:"resolution",id:"resolution"}},o.a.createElement(fe.a,{value:"480p"},"480p"),o.a.createElement(fe.a,{value:"720p"},"720p"),o.a.createElement(fe.a,{value:"1080p"},"1080p"))),o.a.createElement(X.a,null,o.a.createElement(q.a,{htmlFor:"codec"},"Video Codec"),o.a.createElement(me.a,{value:t.codec,onChange:function(e){a.setCodec(e.target.value)},inputProps:{name:"codec",id:"codec"}},o.a.createElement(fe.a,{value:"h264"},"h264"),o.a.createElement(fe.a,{value:"vp8"},"vp8"))),o.a.createElement(X.a,null,o.a.createElement(q.a,{htmlFor:"camera"},"Camera"),o.a.createElement(me.a,{value:t.config.cameraId,onChange:function(e){a.updateConfig({cameraId:e.target.value})},inputProps:{name:"camera",id:"camera"}},i.map((function(e,t){return o.a.createElement(fe.a,{key:t,value:e.value},e.label)})))),o.a.createElement(X.a,null,o.a.createElement(q.a,{htmlFor:"Microphone"},"Microphone"),o.a.createElement(me.a,{value:t.config.microphoneId,onChange:function(e){a.updateConfig({microphoneId:e.target.value})},inputProps:{name:"microphone",id:"microphone"}},l.map((function(e,t){return o.a.createElement(fe.a,{key:t,value:e.value},e.label)})))),o.a.createElement(X.a,null,o.a.createElement(de.a,{control:o.a.createElement(ge,{checked:t.muteVideo,onChange:function(){a.setVideo(!t.muteVideo)},value:t.muteVideo,color:"primary"}),className:e.switchItem,label:"Video"}),o.a.createElement("div",{className:e.hr})),o.a.createElement(X.a,null,o.a.createElement(de.a,{control:o.a.createElement(ge,{checked:t.muteAudio,onChange:function(){a.setAudio(!t.muteAudio)},value:t.muteAudio,color:"primary"}),className:e.switchItem,label:"Audio"}),o.a.createElement("div",{className:e.hr})),o.a.createElement(X.a,null,o.a.createElement(de.a,{control:o.a.createElement(ge,{checked:t.profile,onChange:function(){a.setProfile(!t.profile)},value:t.profile,color:"primary"}),className:e.switchItem,label:"Profile"}),o.a.createElement("div",{className:e.hr}))))}var be=Object(w.a)((function(e){return{fontStyle:{color:"#9ee2ff"},midItem:{marginTop:"1rem",marginBottom:"6rem"},item:{flex:1,display:"flex",alignItems:"center"},coverLeft:{background:"linear-gradient(to bottom, #307AFF, 50%, #46cdff)",alignItems:"center",flex:1,display:"flex",flexDirection:"column"},coverContent:{display:"flex",justifyContent:"center",flexDirection:"column",color:"#fff"},coverRight:{position:"relative",flex:1,display:"flex"},container:{display:"flex",justifyContent:"center",alignItems:"center"},card:{display:"flex",minWidth:200,minHeight:450,maxHeight:1e3,borderRadius:"10px",boxShadow:"0px 6px 18px 0px rgba(0,0,0,0.2)"},input:{maxWidth:"250px",minWidth:"250px",alignSelf:"center"},grid:{margin:"0 !important"},button:{height:"44px",width:"260px","&:hover":{backgroundColor:"#307AFF"},margin:e.spacing(1),marginTop:"33px",backgroundColor:"#44a2fc",borderRadius:"30px"}}}));function ye(){var e=be();return o.a.createElement($.a,{display:"flex",alignItems:"center",justifyContent:"center"},o.a.createElement(U.a,{className:e.card},o.a.createElement($.a,{display:"flex",flex:"1"},o.a.createElement("div",{className:e.coverRight},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:ne}),o.a.createElement(i.a,{path:"/setting",component:ve}))))))}var Ee=Object(w.a)((function(){return{container:{height:"100%",width:"100%",minWidth:200,minHeight:100,boxSizing:"content-box",display:"flex",justifyContent:"center"}}})),Se=function(){var e=M(),t=z(),a=Ee();return Object(n.useEffect)((function(){!0===e.loading&&t.stopLoading()}),[e.loading,t]),o.a.createElement(H.a,{maxWidth:"sm",className:a.container},o.a.createElement(ye,null))};function xe(e){var t=e.stream,a=e.domId,r=e.uid,c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),f=d[0],p=d[1],h=Object(n.useState)({accessDelay:0,fps:0,resolution:0}),g=Object(u.a)(h,2),v=g[0],b=g[1],y=Object(n.useMemo)((function(){return v}),[v]);Object(n.useEffect)((function(){var a=setInterval((function(){t.getStats((function(t){var a=e.local?t.videoSendResolutionWidth:t.videoReceiveResolutionWidth,n=e.local?t.videoSendResolutionHeight:t.videoReceiveResolutionHeight,o=e.local?t.videoSendFrameRate:t.videoReceiveFrameRate;b({accessDelay:"".concat(t.accessDelay?t.accessDelay:0),resolution:"".concat(a,"x").concat(n),fps:"".concat(o||0)})}))}),500);return function(){clearInterval(a)}}),[t]);var E=o.a.useRef(!1);return Object(n.useEffect)((function(){if(t)return t.isPlaying()||(E.current=!0,t.play(a,{fit:"cover"},(function(e){e&&"aborted"!==e.status&&(console.log("stream-player play failed ",a),p(!0)),E.current=!1}))),function(){t&&t.isPlaying()&&t.stop()}}),[t,a]),o.a.createElement("div",{className:"stream-player ".concat(f?"autoplay":""),id:a,onClick:function(){f&&!l&&(t.resume(),s(!0))},onDoubleClick:function(a){a.stopPropagation(),e.onDoubleClick(t)}},e.children,e.showProfile?o.a.createElement("div",{className:e.className},o.a.createElement("span",null,"SD-RTN delay: ",y.accessDelay,"ms"),o.a.createElement("span",null,"Video: ",y.fps,"fps ",y.resolution)):null,e.showUid&&r?o.a.createElement("div",{className:"stream-uid"},"UID: ",r):null)}var je=Object(w.a)({menu:{height:"10vh",display:"flex",justifyContent:"center",alignItems:"center"},customBtn:{width:"50px",height:"50px",marginLeft:"20px",borderRadius:"26px",backgroundColor:"rgba(0, 0, 0, 0.4)",backgroundSize:"50px",cursor:"pointer"},leftAlign:{display:"flex",flex:"1",justifyContent:"space-evenly"},rightAlign:{display:"flex",flex:"1",justifyContent:"center"},menuContainer:{width:"100%",height:"100%",position:"absolute",display:"flex",flexDirection:"column",justifyContent:"flex-end",zIndex:"2"}}),ke=function(){var e=je(),t=ee(),a=M(),r=z(),c=Object(n.useMemo)((function(){var e=new ue;return e._created||(e.createClient({codec:a.codec,mode:a.mode}),e._created=!0),e}),[a.codec,a.mode]),i=function(e){var t=M(),a=z(),o=[t.localStream,t.currentStream],r=o[0],c=o[1],i=Object(n.useMemo)((function(){return t.streams.filter((function(e){return e.getId()!==c.getId()}))}),[t,c]);return Object(n.useEffect)((function(){e&&!1===e._subscribed&&(e.on("connection-state-change",a.connectionStateChanged),e.on("localStream-added",a.addLocal),e.on("stream-published",a.addStream),e.on("stream-added",(function(t){var n=t.stream;e.subscribe(n,(function(e){a.toastError("stream ".concat(t.stream.getId()," subscribe failed: ").concat(e))}))})),e.on("stream-removed",a.removeStream),e.on("peer-leave",a.removeStreamById),e.on("stream-subscribed",(function(t){e.setStreamFallbackOption(t.stream,2),a.addStream(t)})),e._subscribed=!0)}),[e,a]),Object(n.useEffect)((function(){e&&!0===e._subscribed&&null!=c&&(e.setRemoteVideoStreamType(c,0),i.forEach((function(t){e.setRemoteVideoStreamType(t,1)})))}),[e,c,i]),[r,c,i]}(c),l=Object(u.a)(i,2),s=l[0],m=l[1],d=Object(n.useMemo)((function(){return{token:a.config.token,channel:a.config.channelName,microphoneId:a.config.microphoneId,cameraId:a.config.cameraId,resolution:a.config.resolution,muteVideo:a.muteVideo,muteAudio:a.muteAudio,uid:0,host:a.config.host}}),[a]),f=t.history;Object(n.useEffect)((function(){d.channel||f.push("/")}),[d.channel,f]),Object(n.useEffect)((function(){d.channel&&c._created&&!1===c._joined&&c.join(d).then((function(){d.host&&c.publish(),r.stopLoading()})).catch((function(e){r.toastError("Media ".concat(e.info)),t.history.push("/")}))}),[c,r,d,t]);var h=function(e){return function(n){switch(n.stopPropagation(),e){case"video":a.muteVideo?s.muteVideo():s.unmuteVideo(),r.setVideo(!a.muteVideo);break;case"audio":a.muteAudio?s.muteAudio():s.unmuteAudio(),r.setAudio(!a.muteAudio);break;case"screen":a.screen?c.createRTCStream({token:null,channel:a.config.channelName,microphoneId:a.config.microphoneId,resolution:a.config.resolution,video:a.video,audio:a.audio}).then((function(){c.publish(),r.setScreen(!1)})).catch((function(e){console.log(e),r.toastError("Media ".concat(e.info)),t.history.push("/")})):c.createScreenSharingStream({token:null,channel:a.config.channelName,microphoneId:a.config.microphoneId,cameraId:a.config.cameraId,resolution:a.config.resolution}).then((function(){c.publish(),r.setScreen(!0)})).catch((function(e){console.log(e),r.toastError("Media ".concat(e.info)),t.history.push("/")}));break;case"profile":break;default:throw new Error("Unknown click handler, name: ".concat(e))}}},g=function(e){r.setCurrentStream(e)},v=Object(n.useMemo)((function(){return a.streams.filter((function(e){return e.getId()!==m.getId()}))}),[m,a]);return o.a.createElement("div",{className:"meeting"},o.a.createElement("div",{className:"current-view"},o.a.createElement("div",{className:"nav"},o.a.createElement("div",{className:"avatar-container"},o.a.createElement("div",{className:"default-avatar"}),o.a.createElement("div",{className:"avatar-text"},"cltc Test"),o.a.createElement("div",{className:"like"})),o.a.createElement("div",{className:"quit",onClick:function(){c.leave().then((function(){r.clearAllStream(),t.history.push("/")}))}})),m?o.a.createElement(xe,{className:"main-stream-profile",showProfile:a.profile,local:!!d.host&&(m&&m.getId()===s&&s.getId()),stream:m,onDoubleClick:g,uid:m.getId(),domId:"stream-player-".concat(m.getId())},o.a.createElement("div",{className:e.menuContainer},d.host&&o.a.createElement("div",{className:e.menu},o.a.createElement("i",{onClick:h("video"),className:Object(p.a)(e.customBtn,a.muteVideo?"mute-video":"unmute-video")}),o.a.createElement("i",{onClick:h("audio"),className:Object(p.a)(e.customBtn,a.muteAudio?"mute-audio":"unmute-audio")}))),o.a.createElement("div",{className:"stream-container"},v.map((function(e,t){return o.a.createElement(xe,{className:"stream-profile",showProfile:a.profile,local:!!d.host&&(e.getId()===s&&s.getId()),key:t,stream:e,isPlaying:e.isPlaying(),uid:e.getId(),domId:"stream-player-".concat(e.getId()),onDoubleClick:g,showUid:!0})})))):null))};var Ce=function(){return o.a.createElement(K,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/meeting/:name",component:ke}),o.a.createElement(i.a,{path:"/",component:Se})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(157),Oe=a(85),_e=Object(Oe.a)({typography:{fontFamily:'-apple-system, BlinkMacSystemFont, \\"Segoe UI\\", \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,color:"#333"},overrides:{MuiFormControl:{root:{margin:"0.3rem 0"}},MuiInput:{underline:{"&:before":{borderBottom:"1px solid #EAEAEA"},"&:hover:not($disabled):not($focused):not($error):before":{borderBottom:"2px solid #EAEAEA"},"&$focused":{"&:after":{borderBottom:"2px solid #44a2fc"}}}}}});c.a.render(o.a.createElement(Ie.a,{theme:_e},o.a.createElement(W,null,o.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(110)}},[[97,1,2]]]);
//# sourceMappingURL=main.4aebbf3f.chunk.js.map