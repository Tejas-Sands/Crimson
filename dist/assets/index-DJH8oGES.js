(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="184",Dl=0,Ia=1,Nl=2,fs=1,Fo=2,Dn=3,Oi=0,Fe=1,$e=2,yi=0,_n=1,Da=2,Na=3,Ua=4,Ul=5,qi=100,Fl=101,Ol=102,Bl=103,Gl=104,Hl=200,kl=201,zl=202,Vl=203,pr=204,mr=205,Wl=206,Xl=207,Yl=208,ql=209,Kl=210,Zl=211,$l=212,jl=213,Jl=214,gr=0,_r=1,xr=2,vn=3,vr=4,Mr=5,Sr=6,yr=7,oa=0,Ql=1,tc=2,li=0,Oo=1,Bo=2,Go=3,Ho=4,ko=5,zo=6,Vo=7,Wo=300,ji=301,Mn=302,Is=303,Ds=304,Ts=306,Er=1e3,Mi=1001,br=1002,ve=1003,ec=1004,Vn=1005,Ce=1006,Ns=1007,Zi=1008,ze=1009,Xo=1010,Yo=1011,Un=1012,la=1013,di=1014,ai=1015,bi=1016,ca=1017,ha=1018,Fn=1020,qo=35902,Ko=35899,Zo=1021,$o=1022,Je=1023,Ti=1026,$i=1027,jo=1028,da=1029,Ji=1030,fa=1031,ua=1033,us=33776,ps=33777,ms=33778,gs=33779,Tr=35840,Ar=35841,wr=35842,Rr=35843,Cr=36196,Pr=37492,Lr=37496,Ir=37488,Dr=37489,vs=37490,Nr=37491,Ur=37808,Fr=37809,Or=37810,Br=37811,Gr=37812,Hr=37813,kr=37814,zr=37815,Vr=37816,Wr=37817,Xr=37818,Yr=37819,qr=37820,Kr=37821,Zr=36492,$r=36494,jr=36495,Jr=36283,Qr=36284,Ms=36285,ta=36286,ic=3200,ea=0,nc=1,Ui="",Xe="srgb",Ss="srgb-linear",ys="linear",te="srgb",nn=7680,Fa=519,sc=512,rc=513,ac=514,pa=515,oc=516,lc=517,ma=518,cc=519,Oa=35044,Ba="300 es",oi=2e3,On=2001;function hc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dc(){const n=Es("canvas");return n.style.display="block",n}const Ga={};function Ha(...n){const t="THREE."+n.shift();console.log(t,...n)}function Jo(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Lt(...n){n=Jo(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Zt(...n){n=Jo(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ia(...n){const t=n.join(" ");t in Ga||(Ga[t]=!0,Lt(...n))}function fc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const uc={[gr]:_r,[xr]:Sr,[vr]:yr,[vn]:Mr,[_r]:gr,[Sr]:xr,[yr]:vr,[Mr]:vn};class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,na=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function pc(n,t){return(n%t+t)%t}function Fs(n,t,e){return(1-e)*n+e*t}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class jt{static{jt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class En{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],E=r[a+3];if(u!==E||c!==h||l!==f||d!==g){let m=c*h+l*f+d*g+u*E;m<0&&(h=-h,f=-f,g=-g,E=-E,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,c=c*p+h*o,l=l*p+f*o,d=d*p+g*o,u=u*p+E*o}else{c=c*p+h*o,l=l*p+f*o,d=d*p+g*o,u=u*p+E*o;const M=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=M,l*=M,d*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],d=i[s+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+d*u+c*f-l*h,t[e+1]=c*g+d*h+l*u-o*f,t[e+2]=l*g+d*f+o*h-c*u,t[e+3]=d*g-o*u-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(s/2),u=o(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"YZX":this._x=h*d*u+l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u-h*f*g;break;case"XZY":this._x=h*d*u-l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u+h*f*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=i+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-i*l,this._z=r*d+a*l+i*c-s*o,this._w=a*d-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{O.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),d=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*d,this.y=i+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new O,ka=new En;class Ut{static{Ut.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],M=s[1],T=s[4],y=s[7],w=s[2],b=s[5],R=s[8];return r[0]=a*E+o*M+c*w,r[3]=a*m+o*T+c*b,r[6]=a*p+o*y+c*R,r[1]=l*E+d*M+u*w,r[4]=l*m+d*T+u*b,r[7]=l*p+d*y+u*R,r[2]=h*E+f*M+g*w,r[5]=h*m+f*T+g*b,r[8]=h*p+f*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-i*r*d+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=d*a-o*l,h=o*c-d*r,f=l*r-a*c,g=e*u+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return t[0]=u*E,t[1]=(s*l-d*i)*E,t[2]=(o*i-s*a)*E,t[3]=h*E,t[4]=(d*e-s*c)*E,t[5]=(s*r-o*e)*E,t[6]=f*E,t[7]=(i*c-l*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Ut,za=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mc(){const n={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ss]:{primaries:t,whitePoint:i,transfer:ys,toXYZ:za,fromXYZ:Va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:te,toXYZ:za,fromXYZ:Va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}const Xt=mc();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sn;class gc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{sn===void 0&&(sn=Es("canvas")),sn.width=t.width,sn.height=t.height;const s=sn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=sn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _c=0;class ga{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gs(s[a].image)):r.push(Gs(s[a]))}else r=Gs(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Gs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let xc=0;const Hs=new O;class Pe extends Qi{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=Mi,s=Mi,r=Ce,a=Zi,o=Je,c=ze,l=Pe.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Bn(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hs).x}get height(){return this.source.getSize(Hs).y}get depth(){return this.source.getSize(Hs).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Er:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Er:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Wo;Pe.DEFAULT_ANISOTROPY=1;class pe{static{pe.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],g=c[9],E=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+E)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,y=(f+1)/2,w=(p+1)/2,b=(d+h)/4,R=(u+E)/4,x=(g+m)/4;return T>y&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=b/i,r=R/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-E)*(u-E)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-E)/M,this.z=(h-d)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vc extends Qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Pe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ga(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends vc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qo extends Pe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mc extends Pe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{static{me.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,d,u,h,f,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,d,u,h,f,g,E,m)}set(t,e,i,s,r,a,o,c,l,d,u,h,f,g,E,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/rn.setFromMatrixColumn(t,0).length(),r=1/rn.setFromMatrixColumn(t,1).length(),a=1/rn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const h=a*d,f=a*u,g=o*d,E=o*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=h-E*l,e[9]=-o*c,e[2]=E-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*d,f=c*u,g=l*d,E=l*u;e[0]=h+E*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=f*o-g,e[6]=E+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*d,f=c*u,g=l*d,E=l*u;e[0]=h-E*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*d,e[9]=E-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*d,f=a*u,g=o*d,E=o*u;e[0]=c*d,e[4]=g*l-f,e[8]=h*l+E,e[1]=c*u,e[5]=E*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,g=o*c,E=o*l;e[0]=c*d,e[4]=E-h*u,e[8]=g*u+f,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=f*u+g,e[10]=h-E*u}else if(t.order==="XZY"){const h=a*c,f=a*l,g=o*c,E=o*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+E,e[5]=a*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*d,e[10]=E*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sc,t,yc)}lookAt(t,e,i){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Ci.crossVectors(i,Ge),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Ci.crossVectors(i,Ge)),Ci.normalize(),Wn.crossVectors(Ge,Ci),s[0]=Ci.x,s[4]=Wn.x,s[8]=Ge.x,s[1]=Ci.y,s[5]=Wn.y,s[9]=Ge.y,s[2]=Ci.z,s[6]=Wn.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],M=i[3],T=i[7],y=i[11],w=i[15],b=s[0],R=s[4],x=s[8],A=s[12],N=s[1],C=s[5],U=s[9],V=s[13],X=s[2],I=s[6],k=s[10],B=s[14],j=s[3],Q=s[7],ot=s[11],vt=s[15];return r[0]=a*b+o*N+c*X+l*j,r[4]=a*R+o*C+c*I+l*Q,r[8]=a*x+o*U+c*k+l*ot,r[12]=a*A+o*V+c*B+l*vt,r[1]=d*b+u*N+h*X+f*j,r[5]=d*R+u*C+h*I+f*Q,r[9]=d*x+u*U+h*k+f*ot,r[13]=d*A+u*V+h*B+f*vt,r[2]=g*b+E*N+m*X+p*j,r[6]=g*R+E*C+m*I+p*Q,r[10]=g*x+E*U+m*k+p*ot,r[14]=g*A+E*V+m*B+p*vt,r[3]=M*b+T*N+y*X+w*j,r[7]=M*R+T*C+y*I+w*Q,r[11]=M*x+T*U+y*k+w*ot,r[15]=M*A+T*V+y*B+w*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15],M=c*f-l*h,T=o*f-l*u,y=o*h-c*u,w=a*f-l*d,b=a*h-c*d,R=a*u-o*d;return e*(E*M-m*T+p*y)-i*(g*M-m*w+p*b)+s*(g*T-E*w+p*R)-r*(g*y-E*b+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],M=e*o-i*a,T=e*c-s*a,y=e*l-r*a,w=i*c-s*o,b=i*l-r*o,R=s*l-r*c,x=d*E-u*g,A=d*m-h*g,N=d*p-f*g,C=u*m-h*E,U=u*p-f*E,V=h*p-f*m,X=M*V-T*U+y*C+w*N-b*A+R*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/X;return t[0]=(o*V-c*U+l*C)*I,t[1]=(s*U-i*V-r*C)*I,t[2]=(E*R-m*b+p*w)*I,t[3]=(h*b-u*R-f*w)*I,t[4]=(c*N-a*V-l*A)*I,t[5]=(e*V-s*N+r*A)*I,t[6]=(m*y-g*R-p*T)*I,t[7]=(d*R-h*y+f*T)*I,t[8]=(a*U-o*N+l*x)*I,t[9]=(i*N-e*U-r*x)*I,t[10]=(g*b-E*y+p*M)*I,t[11]=(u*y-d*b-f*M)*I,t[12]=(o*A-a*C-c*x)*I,t[13]=(e*C-i*A+s*x)*I,t[14]=(E*T-g*w-m*M)*I,t[15]=(d*w-u*T+h*M)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+i,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,u=o+o,h=r*l,f=r*d,g=r*u,E=a*d,m=a*u,p=o*u,M=c*l,T=c*d,y=c*u,w=i.x,b=i.y,R=i.z;return s[0]=(1-(E+p))*w,s[1]=(f+y)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+T)*R,s[9]=(m-M)*R,s[10]=(1-(h+E))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=rn.set(s[0],s[1],s[2]).length();const o=rn.set(s[4],s[5],s[6]).length(),c=rn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qe.copy(this);const l=1/a,d=1/o,u=1/c;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=d,qe.elements[5]*=d,qe.elements[6]*=d,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=oi,c=!1){const l=this.elements,d=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,E;if(c)g=r/(a-r),E=a*r/(a-r);else if(o===oi)g=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===On)g=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=oi,c=!1){const l=this.elements,d=2/(e-t),u=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,E;if(c)g=1/(a-r),E=a/(a-r);else if(o===oi)g=-2/(a-r),E=-(a+r)/(a-r);else if(o===On)g=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const rn=new O,qe=new me,Sc=new O(0,0,0),yc=new O(1,1,1),Ci=new O,Wn=new O,Ge=new O,Wa=new me,Xa=new En;class Bi{constructor(t=0,e=0,i=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ec=0;const Ya=new O,an=new En,pi=new me,Xn=new O,wn=new O,bc=new O,Tc=new En,qa=new O(1,0,0),Ka=new O(0,1,0),Za=new O(0,0,1),$a={type:"added"},Ac={type:"removed"},on={type:"childadded",child:null},ks={type:"childremoved",child:null};class Le extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new O,e=new Bi,i=new En,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Ut}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return an.setFromAxisAngle(t,e),this.quaternion.multiply(an),this}rotateOnWorldAxis(t,e){return an.setFromAxisAngle(t,e),this.quaternion.premultiply(an),this}rotateX(t){return this.rotateOnAxis(qa,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qa,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xn.copy(t):Xn.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(wn,Xn,this.up):pi.lookAt(Xn,wn,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),an.setFromRotationMatrix(pi),this.quaternion.premultiply(an.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($a),on.child=t,this.dispatchEvent(on),on.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ac),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($a),on.child=t,this.dispatchEvent(on),on.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,t,bc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,Tc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),u=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new O(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Si extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wc={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const E of t.hand.values()){const m=e.getJointPose(E,i),p=this._getHandJoint(l,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Vs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Xt.workingColorSpace){if(t=pc(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Vs(a,r,t+1/3),this.g=Vs(a,r,t),this.b=Vs(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=el[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Xt.workingToColorSpace(Re.copy(this),t),Math.round(Yt(Re.r*255,0,255))*65536+Math.round(Yt(Re.g*255,0,255))*256+Math.round(Yt(Re.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Re.copy(this),e);const i=Re.r,s=Re.g,r=Re.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Xe){Xt.workingToColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,s=Re.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Yn);const i=Fs(Pi.h,Yn.h,e),s=Fs(Pi.s,Yn.s,e),r=Fs(Pi.l,Yn.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new At;At.NAMES=el;class bs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new bs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rc extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ke=new O,mi=new O,Ws=new O,gi=new O,ln=new O,cn=new O,ja=new O,Xs=new O,Ys=new O,qs=new O,Ks=new pe,Zs=new pe,$s=new pe;class je{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ke.subVectors(s,e),mi.subVectors(i,e),Ws.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(mi),c=Ke.dot(Ws),l=mi.dot(mi),d=mi.dot(Ws),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(l*c-o*d)*h,g=(a*d-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ks.setScalar(0),Zs.setScalar(0),$s.setScalar(0),Ks.fromBufferAttribute(t,e),Zs.fromBufferAttribute(t,i),$s.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ks,r.x),a.addScaledVector(Zs,r.y),a.addScaledVector($s,r.z),a}static isFrontFacing(t,e,i,s){return Ke.subVectors(i,e),mi.subVectors(t,e),Ke.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Ke.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ln.subVectors(s,i),cn.subVectors(r,i),Xs.subVectors(t,i);const c=ln.dot(Xs),l=cn.dot(Xs);if(c<=0&&l<=0)return e.copy(i);Ys.subVectors(t,s);const d=ln.dot(Ys),u=cn.dot(Ys);if(d>=0&&u<=d)return e.copy(s);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(i).addScaledVector(ln,a);qs.subVectors(t,r);const f=ln.dot(qs),g=cn.dot(qs);if(g>=0&&f<=g)return e.copy(r);const E=f*l-c*g;if(E<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(cn,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return ja.subVectors(r,s),o=(u-d)/(u-d+(f-g)),e.copy(s).addScaledVector(ja,o);const p=1/(m+E+h);return a=E*p,o=h*p,e.copy(i).addScaledVector(ln,a).addScaledVector(cn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gn{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qn.copy(i.boundingBox)),qn.applyMatrix4(t.matrixWorld),this.union(qn)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rn),Kn.subVectors(this.max,Rn),hn.subVectors(t.a,Rn),dn.subVectors(t.b,Rn),fn.subVectors(t.c,Rn),Li.subVectors(dn,hn),Ii.subVectors(fn,dn),ki.subVectors(hn,fn);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-ki.z,ki.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,ki.z,0,-ki.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-ki.y,ki.x,0];return!js(e,hn,dn,fn,Kn)||(e=[1,0,0,0,1,0,0,0,1],!js(e,hn,dn,fn,Kn))?!1:(Zn.crossVectors(Li,Ii),e=[Zn.x,Zn.y,Zn.z],js(e,hn,dn,fn,Kn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new O,new O,new O,new O,new O,new O,new O,new O],Ze=new O,qn=new Gn,hn=new O,dn=new O,fn=new O,Li=new O,Ii=new O,ki=new O,Rn=new O,Kn=new O,Zn=new O,zi=new O;function js(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zi.fromArray(n,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),d=i.dot(zi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Me=new O,$n=new jt;let Cc=0;class hi extends Qi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oa,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix3(t),this.setXY(e,$n.x,$n.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class il extends hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nl extends hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class De extends hi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Pc=new Gn,Cn=new O,Js=new O;class _a{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pc.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cn.subVectors(t,this.center);const e=Cn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cn.copy(t.center).add(Js)),this.expandByPoint(Cn.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Lc=0;const We=new me,Qs=new Le,un=new O,He=new Gn,Pn=new Gn,Te=new O;class ti extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?nl:il)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(un).negate(),this.translate(un.x,un.y,un.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(He.min,Pn.min),He.expandByPoint(Te),Te.addVectors(He.max,Pn.max),He.expandByPoint(Te)):(He.expandByPoint(Pn.min),He.expandByPoint(Pn.max))}He.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Te.fromBufferAttribute(o,l),c&&(un.fromBufferAttribute(t,l),Te.add(un)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new O,c[x]=new O;const l=new O,d=new O,u=new O,h=new jt,f=new jt,g=new jt,E=new O,m=new O;function p(x,A,N){l.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,N),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),d.sub(l),u.sub(l),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(E.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(C),o[x].add(E),o[A].add(E),o[N].add(E),c[x].add(m),c[A].add(m),c[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,A=M.length;x<A;++x){const N=M[x],C=N.start,U=N.count;for(let V=C,X=C+U;V<X;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new O,y=new O,w=new O,b=new O;function R(x){w.fromBufferAttribute(s,x),b.copy(w);const A=o[x];T.copy(A),T.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(b,A);const C=y.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,A=M.length;x<A;++x){const N=M[x],C=N.start,U=N.count;for(let V=C,X=C+U;V<X;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,d=new O,u=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),E=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d);let f=0,g=0;for(let E=0,m=c.length;E<m;E++){o.isInterleavedBufferAttribute?f=c[E]*o.data.stride+o.offset:f=c[E]*d;for(let p=0;p<d;p++)h[g++]=l[f++]}return new hi(h,d,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ti,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=t(h,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],u=r[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ic=0;class Hn extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=_n,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pr,this.blendDst=mr,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=vn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_n&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pr&&(i.blendSrc=this.blendSrc),this.blendDst!==mr&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xi=new O,tr=new O,jn=new O,Di=new O,er=new O,Jn=new O,ir=new O;class Dc{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tr.copy(t).add(e).multiplyScalar(.5),jn.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(tr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(jn),o=Di.dot(this.direction),c=-Di.dot(jn),l=Di.lengthSq(),d=Math.abs(1-a*a);let u,h,f,g;if(d>0)if(u=a*c-o,h=a*o-c,g=r*d,u>=0)if(h>=-g)if(h<=g){const E=1/d;u*=E,h*=E,f=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+h*(h+2*c)+l);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tr).addScaledVector(jn,h),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){er.subVectors(e,t),Jn.subVectors(i,t),ir.crossVectors(er,Jn);let a=this.direction.dot(ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,t);const c=o*this.direction.dot(Jn.crossVectors(Di,Jn));if(c<0)return null;const l=o*this.direction.dot(er.cross(Di));if(l<0||c+l>a)return null;const d=-o*Di.dot(ir);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ja=new me,Vi=new Dc,Qn=new _a,Qa=new O,ts=new O,es=new O,is=new O,nr=new O,ns=new O,to=new O,ss=new O;class pt extends Le{constructor(t=new ti,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ns.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(nr.fromBufferAttribute(u,t),a?ns.addScaledVector(nr,d):ns.addScaledVector(nr.sub(e),d))}e.add(ns)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qn.copy(i.boundingSphere),Qn.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Qn.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Qn,Qa)===null||Vi.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(Ja.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Ja),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=h.length;g<E;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,w=T;y<w;y+=3){const b=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);s=rs(this,p,t,i,l,d,u,b,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),E=Math.min(o.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=rs(this,a,t,i,l,d,u,M,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,E=h.length;g<E;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,w=T;y<w;y+=3){const b=y,R=y+1,x=y+2;s=rs(this,p,t,i,l,d,u,b,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),E=Math.min(c.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){const M=m,T=m+1,y=m+2;s=rs(this,a,t,i,l,d,u,M,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nc(n,t,e,i,s,r,a,o){let c;if(t.side===Fe?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Oi,o),c===null)return null;ss.copy(o),ss.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:n}}function rs(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,ts),n.getVertexPosition(c,es),n.getVertexPosition(l,is);const d=Nc(n,t,e,i,ts,es,is,to);if(d){const u=new O;je.getBarycoord(to,ts,es,is,u),s&&(d.uv=je.getInterpolatedAttribute(s,o,c,l,u,new jt)),r&&(d.uv1=je.getInterpolatedAttribute(r,o,c,l,u,new jt)),a&&(d.normal=je.getInterpolatedAttribute(a,o,c,l,u,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};je.getNormal(ts,es,is,h.normal),d.face=h,d.barycoord=u}return d}class Uc extends Pe{constructor(t=null,e=1,i=1,s,r,a,o,c,l=ve,d=ve,u,h){super(null,a,o,c,l,d,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sr=new O,Fc=new O,Oc=new Ut;class Yi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=sr.subVectors(i,e).cross(Fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(sr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Oc.getNormalMatrix(t),s=this.coplanarPoint(sr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new _a,Bc=new jt(.5,.5),as=new O;class xa{constructor(t=new Yi,e=new Yi,i=new Yi,s=new Yi,r=new Yi,a=new Yi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],E=r[9],m=r[10],p=r[11],M=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-a,f-d,p-g,w-M).normalize(),s[1].setComponents(l+a,f+d,p+g,w+M).normalize(),s[2].setComponents(l+o,f+u,p+E,w+T).normalize(),s[3].setComponents(l-o,f-u,p-E,w-T).normalize(),i)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,p-m,w-y).normalize();else if(s[4].setComponents(l-c,f-h,p-m,w-y).normalize(),e===oi)s[5].setComponents(l+c,f+h,p+m,w+y).normalize();else if(e===On)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);const e=Bc.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(as.x=s.normal.x>0?t.max.x:t.min.x,as.y=s.normal.y>0?t.max.y:t.min.y,as.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends Pe{constructor(t=[],e=ji,i,s,r,a,o,c,l,d){super(t,e,i,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eo extends Pe{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn extends Pe{constructor(t,e,i=di,s,r,a,o=ve,c=ve,l,d=Ti,u=1){if(d!==Ti&&d!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,s,r,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ga(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gc extends Sn{constructor(t,e=di,i=ji,s,r,a=ve,o=ve,c,l=Ti){const d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rl extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pt extends ti{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(u,2));function g(E,m,p,M,T,y,w,b,R,x,A){const N=y/R,C=w/x,U=y/2,V=w/2,X=b/2,I=R+1,k=x+1;let B=0,j=0;const Q=new O;for(let ot=0;ot<k;ot++){const vt=ot*C-V;for(let yt=0;yt<I;yt++){const Wt=yt*N-U;Q[E]=Wt*M,Q[m]=vt*T,Q[p]=X,l.push(Q.x,Q.y,Q.z),Q[E]=0,Q[m]=0,Q[p]=b>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(yt/R),u.push(1-ot/x),B+=1}}for(let ot=0;ot<x;ot++)for(let vt=0;vt<R;vt++){const yt=h+vt+I*ot,Wt=h+vt+I*(ot+1),Jt=h+(vt+1)+I*(ot+1),It=h+(vt+1)+I*ot;c.push(yt,Wt,It),c.push(Wt,Jt,It),j+=6}o.addGroup(f,j,A),f+=j,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class va extends ti{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let g=0;const E=[],m=i/2;let p=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(f,2));function M(){const y=new O,w=new O;let b=0;const R=(e-t)/i;for(let x=0;x<=r;x++){const A=[],N=x/r,C=N*(e-t)+t;for(let U=0;U<=s;U++){const V=U/s,X=V*c+o,I=Math.sin(X),k=Math.cos(X);w.x=C*I,w.y=-N*i+m,w.z=C*k,u.push(w.x,w.y,w.z),y.set(I,R,k).normalize(),h.push(y.x,y.y,y.z),f.push(V,1-N),A.push(g++)}E.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){const N=E[A][x],C=E[A+1][x],U=E[A+1][x+1],V=E[A][x+1];(t>0||A!==0)&&(d.push(N,C,V),b+=3),(e>0||A!==r-1)&&(d.push(C,U,V),b+=3)}l.addGroup(p,b,0),p+=b}function T(y){const w=g,b=new jt,R=new O;let x=0;const A=y===!0?t:e,N=y===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*N,0),h.push(0,N,0),f.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const X=U/s*c+o,I=Math.cos(X),k=Math.sin(X);R.x=A*k,R.y=m*N,R.z=A*I,u.push(R.x,R.y,R.z),h.push(0,N,0),b.x=I*.5+.5,b.y=k*.5*N+.5,f.push(b.x,b.y),g++}for(let U=0;U<s;U++){const V=w+U,X=C+U;y===!0?d.push(X,X+1,V):d.push(X+1,X,V),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class As extends va{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new As(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends ti{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,d=c+1,u=t/o,h=e/c,f=[],g=[],E=[],m=[];for(let p=0;p<d;p++){const M=p*h-a;for(let T=0;T<l;T++){const y=T*u-r;g.push(y,-M,0),E.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const T=M+l*p,y=M+l*(p+1),w=M+1+l*(p+1),b=M+1+l*p;f.push(T,y,b),f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(E,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ma extends ti{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],u=new O,h=new O,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){const M=[],T=p/i;let y=0;p===0&&a===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const b=w/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),E.push(h.x,h.y,h.z),m.push(b+y,1-T),M.push(l++)}d.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const T=d[p][M+1],y=d[p][M],w=d[p+1][M],b=d[p+1][M+1];(p!==0||a>0)&&f.push(T,y,b),(p!==i-1||c<Math.PI)&&f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(E,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function yn(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(io(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(io(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=yn(n[e]);for(const s in i)t[s]=i[s]}return t}function io(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hc(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function al(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const kc={clone:yn,merge:Ie};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=Vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yn(t.uniforms),this.uniformsGroups=Hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wc extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qt extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xc extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yc extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Sa extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const rr=new me,no=new O,so=new O;class ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=ze,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;no.setFromMatrixPosition(t.matrixWorld),e.position.copy(no),so.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(so),e.updateMatrixWorld(),rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===On||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const os=new O,ls=new En,ni=new O;let ll=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(os,ls,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ls,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(os,ls,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ls,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Ni=new O,ro=new jt,ao=new jt;class ke extends ll{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,ro,ao),e.subVectors(ao,ro)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class qc extends ol{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0}}class Kc extends Sa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ya extends ll{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zc extends ol{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class jc extends Sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const pn=-90,mn=1;class Jc extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(pn,mn,t,e);s.layers=this.layers,this.add(s);const r=new ke(pn,mn,t,e);r.layers=this.layers,this.add(r);const a=new ke(pn,mn,t,e);a.layers=this.layers,this.add(a);const o=new ke(pn,mn,t,e);o.layers=this.layers,this.add(o);const c=new ke(pn,mn,t,e);c.layers=this.layers,this.add(c);const l=new ke(pn,mn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===On)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qc extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cl{static{cl.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}}function oo(n,t,e,i){const s=th(i);switch(e){case Zo:return n*t;case jo:return n*t/s.components*s.byteLength;case da:return n*t/s.components*s.byteLength;case Ji:return n*t*2/s.components*s.byteLength;case fa:return n*t*2/s.components*s.byteLength;case $o:return n*t*3/s.components*s.byteLength;case Je:return n*t*4/s.components*s.byteLength;case ua:return n*t*4/s.components*s.byteLength;case us:case ps:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ar:case Rr:return Math.max(n,16)*Math.max(t,8)/4;case Tr:case wr:return Math.max(n,8)*Math.max(t,8)/2;case Cr:case Pr:case Ir:case Dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lr:case vs:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Or:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Br:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zr:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case qr:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zr:case $r:case jr:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jr:case Qr:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ms:case ta:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function th(n){switch(n){case ze:case Xo:return{byteLength:1,components:1};case Un:case Yo:case bi:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case di:case la:case ai:return{byteLength:4,components:1};case qo:case Ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hl(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function eh(n){const t=new WeakMap;function e(o,c){const l=o.array,d=o.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],E=u[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++h,u[h]=E)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const E=u[f];n.bufferSubData(l,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:ih,alphahash_pars_fragment:nh,alphamap_fragment:sh,alphamap_pars_fragment:rh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:hh,batching_vertex:dh,begin_vertex:fh,beginnormal_vertex:uh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:vh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:yh,color_pars_vertex:Eh,color_vertex:bh,common:Th,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Ih,colorspace_pars_fragment:Dh,envmap_fragment:Nh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:Kh,envmap_vertex:Bh,fog_vertex:Gh,fog_pars_vertex:Hh,fog_fragment:kh,fog_pars_fragment:zh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:Yh,lights_pars_begin:qh,lights_toon_fragment:Zh,lights_toon_pars_fragment:$h,lights_phong_fragment:jh,lights_phong_pars_fragment:Jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:id,lights_fragment_end:nd,lightprobes_pars_fragment:sd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ld,map_fragment:cd,map_pars_fragment:hd,map_particle_fragment:dd,map_particle_pars_fragment:fd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:_d,morphtarget_pars_vertex:xd,morphtarget_vertex:vd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:yd,normal_pars_vertex:Ed,normal_vertex:bd,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Cd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Dd,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:Od,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:kd,skinbase_vertex:zd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:Yd,specularmap_pars_fragment:qd,tonemapping_fragment:Kd,tonemapping_pars_fragment:Zd,transmission_fragment:$d,transmission_pars_fragment:jd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:tf,worldpos_vertex:ef,background_vert:nf,background_frag:sf,backgroundCube_vert:rf,backgroundCube_frag:af,cube_vert:of,cube_frag:lf,depth_vert:cf,depth_frag:hf,distance_vert:df,distance_frag:ff,equirect_vert:uf,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:_f,meshbasic_frag:xf,meshlambert_vert:vf,meshlambert_frag:Mf,meshmatcap_vert:Sf,meshmatcap_frag:yf,meshnormal_vert:Ef,meshnormal_frag:bf,meshphong_vert:Tf,meshphong_frag:Af,meshphysical_vert:wf,meshphysical_frag:Rf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:Lf,points_frag:If,shadow_vert:Df,shadow_frag:Nf,sprite_vert:Uf,sprite_frag:Ff},ht={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ri={basic:{uniforms:Ie([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ie([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ie([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ie([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ie([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ie([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ie([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ie([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ie([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ie([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ie([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Ie([ht.common,ht.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Ie([ht.lights,ht.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ri.physical={uniforms:Ie([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const cs={r:0,b:0,g:0},Of=new me,dl=new Ut;dl.set(-1,0,0,0,1,0,0,0,1);function Bf(n,t,e,i,s,r){const a=new At(0);let o=s===!0?0:1,c,l,d=null,u=0,h=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const y=M.backgroundBlurriness>0;T=t.get(T,y)}return T}function g(M){let T=!1;const y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(M,T){const y=f(T);y&&(y.isCubeTexture||y.mapping===Ts)?(l===void 0&&(l=new pt(new Pt(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:yn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Of.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dl),l.material.toneMapped=Xt.getTransfer(y.colorSpace)!==te,(d!==y||u!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pt(new bn(2,2),new fi({name:"BackgroundMaterial",uniforms:yn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(cs,al(n)),e.buffers.color.setClear(cs.r,cs.g,cs.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:E,dispose:p}}function Gf(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(C,U,V,X,I){let k=!1;const B=u(C,X,V,U);r!==B&&(r=B,l(r.object)),k=f(C,X,V,I),k&&g(C,X,V,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(C,U,V,X),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function u(C,U,V,X){const I=X.wireframe===!0;let k=i[U.id];k===void 0&&(k={},i[U.id]=k);const B=C.isInstancedMesh===!0?C.id:0;let j=k[B];j===void 0&&(j={},k[B]=j);let Q=j[V.id];Q===void 0&&(Q={},j[V.id]=Q);let ot=Q[I];return ot===void 0&&(ot=h(c()),Q[I]=ot),ot}function h(C){const U=[],V=[],X=[];for(let I=0;I<e;I++)U[I]=0,V[I]=0,X[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:X,object:C,attributes:{},index:null}}function f(C,U,V,X){const I=r.attributes,k=U.attributes;let B=0;const j=V.getAttributes();for(const Q in j)if(j[Q].location>=0){const vt=I[Q];let yt=k[Q];if(yt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),vt===void 0||vt.attribute!==yt||yt&&vt.data!==yt.data)return!0;B++}return r.attributesNum!==B||r.index!==X}function g(C,U,V,X){const I={},k=U.attributes;let B=0;const j=V.getAttributes();for(const Q in j)if(j[Q].location>=0){let vt=k[Q];vt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor));const yt={};yt.attribute=vt,vt&&vt.data&&(yt.data=vt.data),I[Q]=yt,B++}r.attributes=I,r.attributesNum=B,r.index=X}function E(){const C=r.newAttributes;for(let U=0,V=C.length;U<V;U++)C[U]=0}function m(C){p(C,0)}function p(C,U){const V=r.newAttributes,X=r.enabledAttributes,I=r.attributeDivisors;V[C]=1,X[C]===0&&(n.enableVertexAttribArray(C),X[C]=1),I[C]!==U&&(n.vertexAttribDivisor(C,U),I[C]=U)}function M(){const C=r.newAttributes,U=r.enabledAttributes;for(let V=0,X=U.length;V<X;V++)U[V]!==C[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function T(C,U,V,X,I,k,B){B===!0?n.vertexAttribIPointer(C,U,V,I,k):n.vertexAttribPointer(C,U,V,X,I,k)}function y(C,U,V,X){E();const I=X.attributes,k=V.getAttributes(),B=U.defaultAttributeValues;for(const j in k){const Q=k[j];if(Q.location>=0){let ot=I[j];if(ot===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ot=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ot=C.instanceColor)),ot!==void 0){const vt=ot.normalized,yt=ot.itemSize,Wt=t.get(ot);if(Wt===void 0)continue;const Jt=Wt.buffer,It=Wt.type,Z=Wt.bytesPerElement,lt=It===n.INT||It===n.UNSIGNED_INT||ot.gpuType===la;if(ot.isInterleavedBufferAttribute){const nt=ot.data,wt=nt.stride,Nt=ot.offset;if(nt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Q.locationSize;Rt++)p(Q.location+Rt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<Q.locationSize;Rt++)m(Q.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Rt=0;Rt<Q.locationSize;Rt++)T(Q.location+Rt,yt/Q.locationSize,It,vt,wt*Z,(Nt+yt/Q.locationSize*Rt)*Z,lt)}else{if(ot.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)p(Q.location+nt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let nt=0;nt<Q.locationSize;nt++)m(Q.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let nt=0;nt<Q.locationSize;nt++)T(Q.location+nt,yt/Q.locationSize,It,vt,yt*Z,yt/Q.locationSize*nt*Z,lt)}}else if(B!==void 0){const vt=B[j];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(Q.location,vt);break;case 3:n.vertexAttrib3fv(Q.location,vt);break;case 4:n.vertexAttrib4fv(Q.location,vt);break;default:n.vertexAttrib1fv(Q.location,vt)}}}}M()}function w(){A();for(const C in i){const U=i[C];for(const V in U){const X=U[V];for(const I in X){const k=X[I];for(const B in k)d(k[B].object),delete k[B];delete X[I]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const V in U){const X=U[V];for(const I in X){const k=X[I];for(const B in k)d(k[B].object),delete k[B];delete X[I]}}delete i[C.id]}function R(C){for(const U in i){const V=i[U];for(const X in V){const I=V[X];if(I[C.id]===void 0)continue;const k=I[C.id];for(const B in k)d(k[B].object),delete k[B];delete I[C.id]}}}function x(C){for(const U in i){const V=i[U],X=C.isInstancedMesh===!0?C.id:0,I=V[X];if(I!==void 0){for(const k in I){const B=I[k];for(const j in B)d(B[j].object),delete B[j];delete I[k]}delete V[X],Object.keys(V).length===0&&delete i[U]}}}function A(){N(),a=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:M}}function Hf(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),e.update(l,i,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let h=0;for(let f=0;f<d;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kf(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Je&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ze&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!x)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(Lt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:b}}function zf(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Yi,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,E=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const M=r?0:i,T=M*4;let y=p.clippingState||null;c.value=y,y=d(g,h,T,f);for(let w=0;w!==T;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,f,g){const E=u!==null?u.length:0;let m=null;if(E!==0){if(m=c.value,g!==!0||m===null){const p=f+E*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=f;T!==E;++T,y+=4)a.copy(u[T]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}const Fi=4,lo=[.125,.215,.35,.446,.526,.582],Ki=20,Vf=256,Ln=new ya,co=new At;let ar=null,or=0,lr=0,cr=!1;const Wf=new O;class ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Wf}=r;ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,or,lr),this._renderer.xr.enabled=cr,t.scissorTest=!1,gn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Mn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:bi,format:Je,colorSpace:Ss,depthBuffer:!1},s=fo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xf(r)),this._blurMaterial=qf(r,t,e),this._ggxMaterial=Yf(r,t,e)}return s}_compileMaterial(t){const e=new pt(new ti,t);this._renderer.compile(e,Ln)}_sceneToCubeUV(t,e,i,s,r){const c=new ke(90,1,e,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(co),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Pt,new Ue({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(co),p=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[T]));const w=this._cubeSize;gn(s,y*w,T>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(E,c),u.render(t,c)}u.toneMapping=f,u.autoClear=h,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ji||t.mapping===Mn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;gn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ln)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,f=u*h,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-Fi?i-g+Fi:0),p=4*(this._cubeSize-E);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,gn(r,m,p,3*E,2*E),s.setRenderTarget(r),s.render(o,Ln),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,gn(t,m,p,3*E,2*E),s.setRenderTarget(t),s.render(o,Ln)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Zt("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),E=r/g,m=isFinite(r)?1+Math.floor(d*E):Ki;m>Ki&&Lt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let M=0;for(let R=0;R<Ki;++R){const x=R/E,A=Math.exp(-x*x/2);p.push(A),R===0?M+=A:R<m&&(M+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const y=this._sizeLods[s],w=3*y*(s>T-Fi?s-T+Fi:0),b=4*(this._cubeSize-y);gn(e,w,b,3*y,2*y),c.setRenderTarget(e),c.render(u,Ln)}}function Xf(n){const t=[],e=[],i=[];let s=n;const r=n-Fi+1+lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Fi?c=lo[a-n+Fi-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,E=3,m=2,p=1,M=new Float32Array(E*g*f),T=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];M.set(A,E*g*b),T.set(h,m*g*b);const N=[b,b,b,b,b,b];y.set(N,p*g*b)}const w=new ti;w.setAttribute("position",new hi(M,E)),w.setAttribute("uv",new hi(T,m)),w.setAttribute("faceIndex",new hi(y,p)),i.push(new pt(w,null)),s>Fi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function fo(n,t,e){const i=new ci(n,t,e);return i.texture.mapping=Ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gn(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Yf(n,t,e){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ws(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qf(n,t,e){const i=new Float32Array(Ki),s=new O(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function uo(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function po(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ws(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class fl extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pt(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:yi});r.uniforms.tEquirect.value=e;const a=new pt(s,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Ce),new Jc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function Kf(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Is||f===Ds)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const E=new fl(g.height);return E.fromEquirectangularTexture(n,h),t.set(h,E),h.addEventListener("dispose",l),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Is||f===Ds,E=f===ji||f===Mn;if(g||E){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ho(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||E&&M&&c(M)?(i===null&&(i=new ho(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Is?h.mapping=ji:f===Ds&&(h.mapping=Mn),h}function c(h){let f=0;const g=6;for(let E=0;E<g;E++)h[E]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Zf(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ia("WebGLRenderer: "+i+" extension not supported."),s}}}function $f(n,t,e,i){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,g=u.attributes.position;let E=0;if(g===void 0)return;if(f!==null){const M=f.array;E=f.version;for(let T=0,y=M.length;T<y;T+=3){const w=M[T+0],b=M[T+1],R=M[T+2];h.push(w,b,b,R,R,w)}}else{const M=g.array;E=g.version;for(let T=0,y=M.length/3-1;T<y;T+=3){const w=T+0,b=T+1,R=T+2;h.push(w,b,b,R,R,w)}}const m=new(g.count>=65535?nl:il)(h,1);m.version=E;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function jf(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){n.drawElements(i,h,r,u*a),e.update(h,i,1)}function l(u,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,u*a,f),e.update(h,i,f))}function d(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,f);let E=0;for(let m=0;m<f;m++)E+=h[m];e.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Jf(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qf(n,t,e){const i=new WeakMap,s=new pe;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var f=N;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),E===!0&&(y=2),m===!0&&(y=3);let w=o.attributes.position.count*y,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*b*4*u),x=new Qo(R,w,b,u);x.type=ai,x.needsUpdate=!0;const A=y*4;for(let C=0;C<u;C++){const U=p[C],V=M[C],X=T[C],I=w*b*4*C;for(let k=0;k<U.count;k++){const B=k*A;g===!0&&(s.fromBufferAttribute(U,k),R[I+B+0]=s.x,R[I+B+1]=s.y,R[I+B+2]=s.z,R[I+B+3]=0),E===!0&&(s.fromBufferAttribute(V,k),R[I+B+4]=s.x,R[I+B+5]=s.y,R[I+B+6]=s.z,R[I+B+7]=0),m===!0&&(s.fromBufferAttribute(X,k),R[I+B+8]=s.x,R[I+B+9]=s.y,R[I+B+10]=s.z,R[I+B+11]=X.itemSize===4?s.w:1)}}h={count:u,texture:x,size:new jt(w,b)},i.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const E=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function tu(n,t,e,i,s){let r=new WeakMap;function a(l){const d=s.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const eu={[Oo]:"LINEAR_TONE_MAPPING",[Bo]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[Ho]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Vo]:"NEUTRAL_TONE_MAPPING",[ko]:"CUSTOM_TONE_MAPPING"};function iu(n,t,e,i,s){const r=new ci(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Sn(t,e):void 0}),a=new ci(t,e,{type:bi,depthBuffer:!1,stencilBuffer:!1}),o=new ti;o.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new De([0,2,0,0,2,0],2));const c=new Wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new pt(o,c),d=new ya(-1,1,1,-1,0,1);let u=null,h=null,f=!1,g,E=null,m=[],p=!1;this.setSize=function(M,T){r.setSize(M,T),a.setSize(M,T);for(let y=0;y<m.length;y++){const w=m[y];w.setSize&&w.setSize(M,T)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const T=r.width,y=r.height;for(let w=0;w<m.length;w++){const b=m[w];b.setSize&&b.setSize(T,y)}},this.begin=function(M,T){if(f||M.toneMapping===li&&m.length===0)return!1;if(E=T,T!==null){const y=T.width,w=T.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=li,!0},this.hasRenderPass=function(){return p},this.end=function(M,T){M.toneMapping=g,f=!0;let y=r,w=a;for(let b=0;b<m.length;b++){const R=m[b];if(R.enabled!==!1&&(R.render(M,w,y,T),R.needsSwap!==!1)){const x=y;y=w,w=x}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,c.defines={},Xt.getTransfer(u)===te&&(c.defines.SRGB_TRANSFER="");const b=eu[h];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(E),M.render(l,d),E=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const ul=new Pe,sa=new Sn(1,1),pl=new Qo,ml=new Mc,gl=new sl,mo=[],go=[],_o=new Float32Array(16),xo=new Float32Array(9),vo=new Float32Array(4);function Tn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=mo[s];if(r===void 0&&(r=new Float32Array(s),mo[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Rs(n,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function nu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function su(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function ru(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function au(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function ou(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;vo.set(i),n.uniformMatrix2fv(this.addr,!1,vo),be(e,i)}}function lu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;xo.set(i),n.uniformMatrix3fv(this.addr,!1,xo),be(e,i)}}function cu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;_o.set(i),n.uniformMatrix4fv(this.addr,!1,_o),be(e,i)}}function hu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function du(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function fu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function uu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function pu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function gu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function _u(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function xu(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sa.compareFunction=e.isReversedDepthBuffer()?ma:pa,r=sa):r=ul,e.setTexture2D(t||r,s)}function vu(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ml,s)}function Mu(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gl,s)}function Su(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pl,s)}function yu(n){switch(n){case 5126:return nu;case 35664:return su;case 35665:return ru;case 35666:return au;case 35674:return ou;case 35675:return lu;case 35676:return cu;case 5124:case 35670:return hu;case 35667:case 35671:return du;case 35668:case 35672:return fu;case 35669:case 35673:return uu;case 5125:return pu;case 36294:return mu;case 36295:return gu;case 36296:return _u;case 35678:case 36198:case 36298:case 36306:case 35682:return xu;case 35679:case 36299:case 36307:return vu;case 35680:case 36300:case 36308:case 36293:return Mu;case 36289:case 36303:case 36311:case 36292:return Su}}function Eu(n,t){n.uniform1fv(this.addr,t)}function bu(n,t){const e=Tn(t,this.size,2);n.uniform2fv(this.addr,e)}function Tu(n,t){const e=Tn(t,this.size,3);n.uniform3fv(this.addr,e)}function Au(n,t){const e=Tn(t,this.size,4);n.uniform4fv(this.addr,e)}function wu(n,t){const e=Tn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ru(n,t){const e=Tn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cu(n,t){const e=Tn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pu(n,t){n.uniform1iv(this.addr,t)}function Lu(n,t){n.uniform2iv(this.addr,t)}function Iu(n,t){n.uniform3iv(this.addr,t)}function Du(n,t){n.uniform4iv(this.addr,t)}function Nu(n,t){n.uniform1uiv(this.addr,t)}function Uu(n,t){n.uniform2uiv(this.addr,t)}function Fu(n,t){n.uniform3uiv(this.addr,t)}function Ou(n,t){n.uniform4uiv(this.addr,t)}function Bu(n,t,e){const i=this.cache,s=t.length,r=Rs(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),be(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=sa:a=ul;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Gu(n,t,e){const i=this.cache,s=t.length,r=Rs(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ml,r[a])}function Hu(n,t,e){const i=this.cache,s=t.length,r=Rs(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gl,r[a])}function ku(n,t,e){const i=this.cache,s=t.length,r=Rs(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pl,r[a])}function zu(n){switch(n){case 5126:return Eu;case 35664:return bu;case 35665:return Tu;case 35666:return Au;case 35674:return wu;case 35675:return Ru;case 35676:return Cu;case 5124:case 35670:return Pu;case 35667:case 35671:return Lu;case 35668:case 35672:return Iu;case 35669:case 35673:return Du;case 5125:return Nu;case 36294:return Uu;case 36295:return Fu;case 36296:return Ou;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35679:case 36299:case 36307:return Gu;case 35680:case 36300:case 36308:case 36293:return Hu;case 36289:case 36303:case 36311:case 36292:return ku}}class Vu{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yu(e.type)}}class Wu{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zu(e.type)}}class Xu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Mo(n,t){n.seq.push(t),n.map[t.id]=t}function Yu(n,t,e){const i=n.name,s=i.length;for(hr.lastIndex=0;;){const r=hr.exec(i),a=hr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Mo(e,l===void 0?new Vu(o,n,t):new Wu(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Xu(o),Mo(e,u)),e=u}}}class _s{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Yu(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function So(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qu=37297;let Ku=0;function Zu(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const yo=new Ut;function $u(n){Xt._getMatrix(yo,Xt.workingColorSpace,n);const t=`mat3( ${yo.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(n)){case ys:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Zu(n.getShaderSource(t),o)}else return r}function ju(n,t){const e=$u(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ju={[Oo]:"Linear",[Bo]:"Reinhard",[Go]:"Cineon",[Ho]:"ACESFilmic",[zo]:"AgX",[Vo]:"Neutral",[ko]:"Custom"};function Qu(n,t){const e=Ju[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hs=new O;function tp(){Xt.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),t=hs.y.toFixed(4),e=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ep(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nn).join(`
`)}function ip(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function np(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Nn(n){return n!==""}function bo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function To(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(n){return n.replace(sp,ap)}const rp=new Map;function ap(n,t){let e=Gt[t];if(e===void 0){const i=rp.get(t);if(i!==void 0)e=Gt[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(n){return n.replace(op,lp)}function lp(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wo(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const cp={[fs]:"SHADOWMAP_TYPE_PCF",[Dn]:"SHADOWMAP_TYPE_VSM"};function hp(n){return cp[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dp={[ji]:"ENVMAP_TYPE_CUBE",[Mn]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"};function fp(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dp[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const up={[Mn]:"ENVMAP_MODE_REFRACTION"};function pp(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":up[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mp={[oa]:"ENVMAP_BLENDING_MULTIPLY",[Ql]:"ENVMAP_BLENDING_MIX",[tc]:"ENVMAP_BLENDING_ADD"};function gp(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mp[n.combine]||"ENVMAP_BLENDING_NONE"}function _p(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function xp(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=hp(e),l=fp(e),d=pp(e),u=gp(e),h=_p(e),f=ep(e),g=ip(r),E=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nn).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nn).join(`
`),p.length>0&&(p+=`
`)):(m=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),p=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Gt.tonemapping_pars_fragment:"",e.toneMapping!==li?Qu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ju("linearToOutputTexel",e.outputColorSpace),tp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nn).join(`
`)),a=ra(a),a=bo(a,e),a=To(a,e),o=ra(o),o=bo(o,e),o=To(o,e),a=Ao(a),o=Ao(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+a,y=M+p+o,w=So(s,s.VERTEX_SHADER,T),b=So(s,s.FRAGMENT_SHADER,y);s.attachShader(E,w),s.attachShader(E,b),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function R(C){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(E)||"",V=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(b)||"",I=U.trim(),k=V.trim(),B=X.trim();let j=!0,Q=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,w,b);else{const ot=Eo(s,w,"vertex"),vt=Eo(s,b,"fragment");Zt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+ot+`
`+vt)}else I!==""?Lt("WebGLProgram: Program Info Log:",I):(k===""||B==="")&&(Q=!1);Q&&(C.diagnostics={runnable:j,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(w),s.deleteShader(b),x=new _s(s,E),A=np(s,E)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(E,qu)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ku++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=b,this}let vp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Sp(t),e.set(t,i)),i}}class Sp{constructor(t){this.id=vp++,this.code=t,this.usedTimes=0}}function yp(n){return n===Ji||n===vs||n===Ms}function Ep(n,t,e,i,s,r){const a=new tl,o=new Mp,c=new Set,l=[],d=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,A,N,C,U,V){const X=C.fog,I=U.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||k,B),Q=j&&j.mapping===Ts?j.image.height:null,ot=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Lt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const vt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,yt=vt!==void 0?vt.length:0;let Wt=0;I.morphAttributes.position!==void 0&&(Wt=1),I.morphAttributes.normal!==void 0&&(Wt=2),I.morphAttributes.color!==void 0&&(Wt=3);let Jt,It,Z,lt;if(ot){const Ft=ri[ot];Jt=Ft.vertexShader,It=Ft.fragmentShader}else Jt=x.vertexShader,It=x.fragmentShader,o.update(x),Z=o.getVertexShaderID(x),lt=o.getFragmentShaderID(x);const nt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Nt=U.isInstancedMesh===!0,Rt=U.isBatchedMesh===!0,he=!!x.map,zt=!!x.matcap,ee=!!j,le=!!x.aoMap,kt=!!x.lightMap,Se=!!x.bumpMap,de=!!x.normalMap,Oe=!!x.displacementMap,L=!!x.emissiveMap,ye=!!x.metalnessMap,Vt=!!x.roughnessMap,ae=x.anisotropy>0,ct=x.clearcoat>0,fe=x.dispersion>0,S=x.iridescence>0,_=x.sheen>0,F=x.transmission>0,q=ae&&!!x.anisotropyMap,J=ct&&!!x.clearcoatMap,tt=ct&&!!x.clearcoatNormalMap,at=ct&&!!x.clearcoatRoughnessMap,W=S&&!!x.iridescenceMap,K=S&&!!x.iridescenceThicknessMap,ut=_&&!!x.sheenColorMap,_t=_&&!!x.sheenRoughnessMap,st=!!x.specularMap,et=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Bt=F&&!!x.transmissionMap,$t=F&&!!x.thicknessMap,P=!!x.gradientMap,it=!!x.alphaMap,Y=x.alphaTest>0,mt=!!x.alphaHash,rt=!!x.extensions;let $=li;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($=n.toneMapping);const Et={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:It,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Rt,batchingColor:Rt&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:zt,envMap:ee,envMapMode:ee&&j.mapping,envMapCubeUVHeight:Q,aoMap:le,lightMap:kt,bumpMap:Se,normalMap:de,displacementMap:Oe,emissiveMap:L,normalMapObjectSpace:de&&x.normalMapType===nc,normalMapTangentSpace:de&&x.normalMapType===ea,packedNormalMap:de&&x.normalMapType===ea&&yp(x.normalMap.format),metalnessMap:ye,roughnessMap:Vt,anisotropy:ae,anisotropyMap:q,clearcoat:ct,clearcoatMap:J,clearcoatNormalMap:tt,clearcoatRoughnessMap:at,dispersion:fe,iridescence:S,iridescenceMap:W,iridescenceThicknessMap:K,sheen:_,sheenColorMap:ut,sheenRoughnessMap:_t,specularMap:st,specularColorMap:et,specularIntensityMap:Dt,transmission:F,transmissionMap:Bt,thicknessMap:$t,gradientMap:P,opaque:x.transparent===!1&&x.blending===_n&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:Y,alphaHash:mt,combine:x.combine,mapUv:he&&g(x.map.channel),aoMapUv:le&&g(x.aoMap.channel),lightMapUv:kt&&g(x.lightMap.channel),bumpMapUv:Se&&g(x.bumpMap.channel),normalMapUv:de&&g(x.normalMap.channel),displacementMapUv:Oe&&g(x.displacementMap.channel),emissiveMapUv:L&&g(x.emissiveMap.channel),metalnessMapUv:ye&&g(x.metalnessMap.channel),roughnessMapUv:Vt&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:J&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(x.sheenRoughnessMap.channel),specularMapUv:st&&g(x.specularMap.channel),specularColorMapUv:et&&g(x.specularColorMap.channel),specularIntensityMapUv:Dt&&g(x.specularIntensityMap.channel),transmissionMapUv:Bt&&g(x.transmissionMap.channel),thicknessMapUv:$t&&g(x.thicknessMap.channel),alphaMapUv:it&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(de||ae),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(he||it),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Wt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:$,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&Xt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$e,flipSided:x.side===Fe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(A,x),M(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function T(x){const A=f[x.type];let N;if(A){const C=ri[A];N=kc.clone(C.uniforms)}else N=x.uniforms;return N}function y(x,A){let N=d.get(A);return N!==void 0?++N.usedTimes:(N=new xp(n,A,x,s),l.push(N),d.set(A,N)),N}function w(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:R}}function bp(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Tp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ro(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Co(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,E,m,p){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:m,group:p},n[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=E,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function c(h,f,g,E,m,p){const M=o(h,f,g,E,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function l(h,f,g,E,m,p){const M=o(h,f,g,E,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function d(h,f){e.length>1&&e.sort(h||Tp),i.length>1&&i.sort(f||Ro),s.length>1&&s.sort(f||Ro)}function u(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:d}}function Ap(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Co,n.set(i,[a])):s>=r.length?(a=new Co,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function wp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new At};break;case"SpotLight":e={position:new O,direction:new O,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Rp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Cp=0;function Pp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lp(n){const t=new wp,e=Rp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const s=new O,r=new me,a=new me;function o(l){let d=0,u=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,M=0,T=0,y=0,w=0,b=0,R=0;l.sort(Pp);for(let A=0,N=l.length;A<N;A++){const C=l[A],U=C.color,V=C.intensity,X=C.distance;let I=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ji?I=C.shadow.map.texture:I=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=U.r*V,u+=U.g*V,h+=U.b*V;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],V);R++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,j=e.get(C);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=I,i.directionalShadowMatrix[f]=C.shadow.matrix,M++}i.directional[f]=k,f++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(U).multiplyScalar(V),k.distance=X,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[E]=k;const B=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,B.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[E]=B.matrix,C.castShadow){const j=e.get(C);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.spotShadow[E]=j,i.spotShadowMap[E]=I,y++}E++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(U).multiplyScalar(V),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=k,m++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const B=C.shadow,j=e.get(C);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=k,g++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(V),k.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==E||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==T||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=f,x.pointLength=g,x.spotLength=E,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=T,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=R,i.version=Cp++)}function c(l,d){let u=0,h=0,f=0,g=0,E=0;const m=d.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const T=l[p];if(T.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(T.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:o,setupView:c,state:i}}function Po(n){const t=new Lp(n),e=[],i=[],s=[];function r(h){u.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ip(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Po(n),t.set(s,[o])):r>=a.length?(o=new Po(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Up=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Fp=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Lo=new me,In=new O,dr=new O;function Op(n,t,e){let i=new xa;const s=new jt,r=new jt,a=new pe,o=new Xc,c=new Yc,l={},d=e.maxTextureSize,u={[Oi]:Fe,[Fe]:Oi,[$e]:$e},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Dp,fragmentShader:Np}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new ti;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let p=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Fo&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fs);const A=n.getRenderTarget(),N=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(I=>I.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,I=b.length;X<I;X++){const k=b[X],B=k.shadow;if(B===void 0){Lt("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();s.multiply(j),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,B.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Dn){if(k.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ci(s.x,s.y,{format:Ji,type:bi,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Sn(s.x,s.y,ai),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Ti,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ve,B.map.depthTexture.magFilter=ve}else k.isPointLight?(B.map=new fl(s.x),B.map.depthTexture=new Gc(s.x,di)):(B.map=new ci(s.x,s.y),B.map.depthTexture=new Sn(s.x,s.y,di)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Ti,this.type===fs?(B.map.depthTexture.compareFunction=Q?ma:pa,B.map.depthTexture.minFilter=Ce,B.map.depthTexture.magFilter=Ce):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ve,B.map.depthTexture.magFilter=ve);B.camera.updateProjectionMatrix()}const ot=B.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<ot;vt++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,vt),n.clear();else{vt===0&&(n.setRenderTarget(B.map),n.clear());const yt=B.getViewport(vt);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),U.viewport(a)}if(k.isPointLight){const yt=B.camera,Wt=B.matrix,Jt=k.distance||yt.far;Jt!==yt.far&&(yt.far=Jt,yt.updateProjectionMatrix()),In.setFromMatrixPosition(k.matrixWorld),yt.position.copy(In),dr.copy(yt.position),dr.add(Up[vt]),yt.up.copy(Fp[vt]),yt.lookAt(dr),yt.updateMatrixWorld(),Wt.makeTranslation(-In.x,-In.y,-In.z),Lo.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Lo,yt.coordinateSystem,yt.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),y(R,x,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Dn&&M(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,N,C)};function M(b,R){const x=t.update(E);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ci(s.x,s.y,{format:Ji,type:bi})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,x,h,E,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,x,f,E,null)}function T(b,R,x,A){let N=null;const C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)N=C;else if(N=x.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=N.uuid,V=R.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let I=X[V];I===void 0&&(I=N.clone(),X[V]=I,R.addEventListener("dispose",w)),N=I}if(N.visible=R.visible,N.wireframe=R.wireframe,A===Dn?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:u[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=n.properties.get(N);U.light=x}return N}function y(b,R,x,A,N){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Dn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=t.update(b),X=b.material;if(Array.isArray(X)){const I=V.groups;for(let k=0,B=I.length;k<B;k++){const j=I[k],Q=X[j.materialIndex];if(Q&&Q.visible){const ot=T(b,Q,A,N);b.onBeforeShadow(n,b,R,x,V,ot,j),n.renderBufferDirect(x,null,V,ot,b,j),b.onAfterShadow(n,b,R,x,V,ot,j)}}}else if(X.visible){const I=T(b,X,A,N);b.onBeforeShadow(n,b,R,x,V,I,null),n.renderBufferDirect(x,null,V,I,b,null),b.onAfterShadow(n,b,R,x,V,I,null)}}const U=b.children;for(let V=0,X=U.length;V<X;V++)y(U[V],R,x,A,N)}function w(b){b.target.removeEventListener("dispose",w);for(const x in l){const A=l[x],N=b.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function Bp(n,t){function e(){let P=!1;const it=new pe;let Y=null;const mt=new pe(0,0,0,0);return{setMask:function(rt){Y!==rt&&!P&&(n.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){P=rt},setClear:function(rt,$,Et,Ft,ge){ge===!0&&(rt*=Ft,$*=Ft,Et*=Ft),it.set(rt,$,Et,Ft),mt.equals(it)===!1&&(n.clearColor(rt,$,Et,Ft),mt.copy(it))},reset:function(){P=!1,Y=null,mt.set(-1,0,0,0)}}}function i(){let P=!1,it=!1,Y=null,mt=null,rt=null;return{setReversed:function($){if(it!==$){const Et=t.get("EXT_clip_control");$?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),it=$;const Ft=rt;rt=null,this.setClear(Ft)}},getReversed:function(){return it},setTest:function($){$?nt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function($){Y!==$&&!P&&(n.depthMask($),Y=$)},setFunc:function($){if(it&&($=uc[$]),mt!==$){switch($){case gr:n.depthFunc(n.NEVER);break;case _r:n.depthFunc(n.ALWAYS);break;case xr:n.depthFunc(n.LESS);break;case vn:n.depthFunc(n.LEQUAL);break;case vr:n.depthFunc(n.EQUAL);break;case Mr:n.depthFunc(n.GEQUAL);break;case Sr:n.depthFunc(n.GREATER);break;case yr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=$}},setLocked:function($){P=$},setClear:function($){rt!==$&&(rt=$,it&&($=1-$),n.clearDepth($))},reset:function(){P=!1,Y=null,mt=null,rt=null,it=!1}}}function s(){let P=!1,it=null,Y=null,mt=null,rt=null,$=null,Et=null,Ft=null,ge=null;return{setTest:function(ie){P||(ie?nt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(ie){it!==ie&&!P&&(n.stencilMask(ie),it=ie)},setFunc:function(ie,ui,ei){(Y!==ie||mt!==ui||rt!==ei)&&(n.stencilFunc(ie,ui,ei),Y=ie,mt=ui,rt=ei)},setOp:function(ie,ui,ei){($!==ie||Et!==ui||Ft!==ei)&&(n.stencilOp(ie,ui,ei),$=ie,Et=ui,Ft=ei)},setLocked:function(ie){P=ie},setClear:function(ie){ge!==ie&&(n.clearStencil(ie),ge=ie)},reset:function(){P=!1,it=null,Y=null,mt=null,rt=null,$=null,Et=null,Ft=null,ge=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let d={},u={},h={},f=new WeakMap,g=[],E=null,m=!1,p=null,M=null,T=null,y=null,w=null,b=null,R=null,x=new At(0,0,0),A=0,N=!1,C=null,U=null,V=null,X=null,I=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=j>=2);let ot=null,vt={};const yt=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),Jt=new pe().fromArray(yt),It=new pe().fromArray(Wt);function Z(P,it,Y,mt){const rt=new Uint8Array(4),$=n.createTexture();n.bindTexture(P,$),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<Y;Et++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(it+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return $}const lt={};lt[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(vn),Se(!1),de(Ia),nt(n.CULL_FACE),le(yi);function nt(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function wt(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Nt(P,it){return h[P]!==it?(n.bindFramebuffer(P,it),h[P]=it,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=it),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Rt(P,it){let Y=g,mt=!1;if(P){Y=f.get(it),Y===void 0&&(Y=[],f.set(it,Y));const rt=P.textures;if(Y.length!==rt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Et=rt.length;$<Et;$++)Y[$]=n.COLOR_ATTACHMENT0+$;Y.length=rt.length,mt=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,mt=!0);mt&&n.drawBuffers(Y)}function he(P){return E!==P?(n.useProgram(P),E=P,!0):!1}const zt={[qi]:n.FUNC_ADD,[Fl]:n.FUNC_SUBTRACT,[Ol]:n.FUNC_REVERSE_SUBTRACT};zt[Bl]=n.MIN,zt[Gl]=n.MAX;const ee={[Hl]:n.ZERO,[kl]:n.ONE,[zl]:n.SRC_COLOR,[pr]:n.SRC_ALPHA,[Kl]:n.SRC_ALPHA_SATURATE,[Yl]:n.DST_COLOR,[Wl]:n.DST_ALPHA,[Vl]:n.ONE_MINUS_SRC_COLOR,[mr]:n.ONE_MINUS_SRC_ALPHA,[ql]:n.ONE_MINUS_DST_COLOR,[Xl]:n.ONE_MINUS_DST_ALPHA,[Zl]:n.CONSTANT_COLOR,[$l]:n.ONE_MINUS_CONSTANT_COLOR,[jl]:n.CONSTANT_ALPHA,[Jl]:n.ONE_MINUS_CONSTANT_ALPHA};function le(P,it,Y,mt,rt,$,Et,Ft,ge,ie){if(P===yi){m===!0&&(wt(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),P!==Ul){if(P!==p||ie!==N){if((M!==qi||w!==qi)&&(n.blendEquation(n.FUNC_ADD),M=qi,w=qi),ie)switch(P){case _n:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFunc(n.ONE,n.ONE);break;case Na:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ua:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Zt("WebGLState: Invalid blending: ",P);break}else switch(P){case _n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Na:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",P);break}T=null,y=null,b=null,R=null,x.set(0,0,0),A=0,p=P,N=ie}return}rt=rt||it,$=$||Y,Et=Et||mt,(it!==M||rt!==w)&&(n.blendEquationSeparate(zt[it],zt[rt]),M=it,w=rt),(Y!==T||mt!==y||$!==b||Et!==R)&&(n.blendFuncSeparate(ee[Y],ee[mt],ee[$],ee[Et]),T=Y,y=mt,b=$,R=Et),(Ft.equals(x)===!1||ge!==A)&&(n.blendColor(Ft.r,Ft.g,Ft.b,ge),x.copy(Ft),A=ge),p=P,N=!1}function kt(P,it){P.side===$e?wt(n.CULL_FACE):nt(n.CULL_FACE);let Y=P.side===Fe;it&&(Y=!Y),Se(Y),P.blending===_n&&P.transparent===!1?le(yi):le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const mt=P.stencilWrite;o.setTest(mt),mt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),L(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function de(P){P!==Dl?(nt(n.CULL_FACE),P!==U&&(P===Ia?n.cullFace(n.BACK):P===Nl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),U=P}function Oe(P){P!==V&&(B&&n.lineWidth(P),V=P)}function L(P,it,Y){P?(nt(n.POLYGON_OFFSET_FILL),(X!==it||I!==Y)&&(X=it,I=Y,a.getReversed()&&(it=-it),n.polygonOffset(it,Y))):wt(n.POLYGON_OFFSET_FILL)}function ye(P){P?nt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function Vt(P){P===void 0&&(P=n.TEXTURE0+k-1),ot!==P&&(n.activeTexture(P),ot=P)}function ae(P,it,Y){Y===void 0&&(ot===null?Y=n.TEXTURE0+k-1:Y=ot);let mt=vt[Y];mt===void 0&&(mt={type:void 0,texture:void 0},vt[Y]=mt),(mt.type!==P||mt.texture!==it)&&(ot!==Y&&(n.activeTexture(Y),ot=Y),n.bindTexture(P,it||lt[P]),mt.type=P,mt.texture=it)}function ct(){const P=vt[ot];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fe(){try{n.compressedTexImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function _(){try{n.texSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function F(){try{n.texSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function tt(){try{n.texStorage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function at(){try{n.texStorage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function W(){try{n.texImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function K(){try{n.texImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function ut(P){return u[P]!==void 0?u[P]:n.getParameter(P)}function _t(P,it){u[P]!==it&&(n.pixelStorei(P,it),u[P]=it)}function st(P){Jt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Jt.copy(P))}function et(P){It.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),It.copy(P))}function Dt(P,it){let Y=l.get(it);Y===void 0&&(Y=new WeakMap,l.set(it,Y));let mt=Y.get(P);mt===void 0&&(mt=n.getUniformBlockIndex(it,P.name),Y.set(P,mt))}function Bt(P,it){const mt=l.get(it).get(P);c.get(it)!==mt&&(n.uniformBlockBinding(it,mt,P.__bindingPointIndex),c.set(it,mt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},ot=null,vt={},h={},f=new WeakMap,g=[],E=null,m=!1,p=null,M=null,T=null,y=null,w=null,b=null,R=null,x=new At(0,0,0),A=0,N=!1,C=null,U=null,V=null,X=null,I=null,Jt.set(0,0,n.canvas.width,n.canvas.height),It.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:wt,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:he,setBlending:le,setMaterial:kt,setFlipSided:Se,setCullFace:de,setLineWidth:Oe,setPolygonOffset:L,setScissorTest:ye,activeTexture:Vt,bindTexture:ae,unbindTexture:ct,compressedTexImage2D:fe,compressedTexImage3D:S,texImage2D:W,texImage3D:K,pixelStorei:_t,getParameter:ut,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:tt,texStorage3D:at,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:st,viewport:et,reset:$t}}function Gp(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,d=new WeakMap,u=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,_){return g?new OffscreenCanvas(S,_):Es("canvas")}function m(S,_,F){let q=1;const J=fe(S);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const tt=Math.floor(q*J.width),at=Math.floor(q*J.height);h===void 0&&(h=E(tt,at));const W=_?E(tt,at):h;return W.width=tt,W.height=at,W.getContext("2d").drawImage(S,0,0,tt,at),Lt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+tt+"x"+at+")."),W}else return"data"in S&&Lt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function p(S){return S.generateMipmaps}function M(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,_,F,q,J,tt=!1){if(S!==null){if(n[S]!==void 0)return n[S];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let at;q&&(at=t.get("EXT_texture_norm16"),at||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8),F===n.UNSIGNED_SHORT&&at&&(W=at.R16_EXT),F===n.SHORT&&at&&(W=at.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),_===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8),F===n.UNSIGNED_SHORT&&at&&(W=at.RG16_EXT),F===n.SHORT&&at&&(W=at.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&at&&(W=at.RGB16_EXT),F===n.SHORT&&at&&(W=at.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){const K=tt?ys:Xt.getTransfer(J);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=K===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&at&&(W=at.RGBA16_EXT),F===n.SHORT&&at&&(W=at.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function w(S,_){let F;return S?_===null||_===di||_===Fn?F=n.DEPTH24_STENCIL8:_===ai?F=n.DEPTH32F_STENCIL8:_===Un&&(F=n.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===Fn?F=n.DEPTH_COMPONENT24:_===ai?F=n.DEPTH_COMPONENT32F:_===Un&&(F=n.DEPTH_COMPONENT16),F}function b(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==ve&&S.minFilter!==Ce?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){const _=S.target;_.removeEventListener("dispose",R),A(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&u.delete(_)}function x(S){const _=S.target;_.removeEventListener("dispose",x),C(_)}function A(S){const _=i.get(S);if(_.__webglInit===void 0)return;const F=S.source,q=f.get(F);if(q){const J=q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(S),Object.keys(q).length===0&&f.delete(F)}i.remove(S)}function N(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const F=S.source,q=f.get(F);delete q[_.__cacheKey],a.memory.textures--}function C(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let J=0;J<_.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[q][J]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=S.textures;for(let q=0,J=F.length;q<J;q++){const tt=i.get(F[q]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(S)}let U=0;function V(){U=0}function X(){return U}function I(S){U=S}function k(){const S=U;return S>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),U+=1,S}function B(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function j(S,_){const F=i.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const q=S.image;if(q===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(F,S,_);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function Q(S,_){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){wt(F,S,_);return}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function ot(S,_){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){wt(F,S,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function vt(S,_){const F=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&F.__version!==S.version){Nt(F,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const yt={[Er]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[br]:n.MIRRORED_REPEAT},Wt={[ve]:n.NEAREST,[ec]:n.NEAREST_MIPMAP_NEAREST,[Vn]:n.NEAREST_MIPMAP_LINEAR,[Ce]:n.LINEAR,[Ns]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},Jt={[sc]:n.NEVER,[cc]:n.ALWAYS,[rc]:n.LESS,[pa]:n.LEQUAL,[ac]:n.EQUAL,[ma]:n.GEQUAL,[oc]:n.GREATER,[lc]:n.NOTEQUAL};function It(S,_){if(_.type===ai&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ce||_.magFilter===Ns||_.magFilter===Vn||_.magFilter===Zi||_.minFilter===Ce||_.minFilter===Ns||_.minFilter===Vn||_.minFilter===Zi)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,yt[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,yt[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,yt[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Wt[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Wt[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ve||_.minFilter!==Vn&&_.minFilter!==Zi||_.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));const q=_.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const tt=B(_);if(tt!==S.__cacheKey){J[tt]===void 0&&(J[tt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[tt].usedTimes++;const at=J[S.__cacheKey];at!==void 0&&(J[S.__cacheKey].usedTimes--,at.usedTimes===0&&N(_)),S.__cacheKey=tt,S.__webglTexture=J[tt].texture}return F}function lt(S,_,F){return Math.floor(Math.floor(S/F)/_)}function nt(S,_,F,q){const tt=S.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,q,_.data);else{tt.sort((_t,st)=>_t.start-st.start);let at=0;for(let _t=1;_t<tt.length;_t++){const st=tt[at],et=tt[_t],Dt=st.start+st.count,Bt=lt(et.start,_.width,4),$t=lt(st.start,_.width,4);et.start<=Dt+1&&Bt===$t&&lt(et.start+et.count-1,_.width,4)===Bt?st.count=Math.max(st.count,et.start+et.count-st.start):(++at,tt[at]=et)}tt.length=at+1;const W=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let _t=0,st=tt.length;_t<st;_t++){const et=tt[_t],Dt=Math.floor(et.start/4),Bt=Math.ceil(et.count/4),$t=Dt%_.width,P=Math.floor(Dt/_.width),it=Bt,Y=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(n.UNPACK_SKIP_ROWS,P),e.texSubImage2D(n.TEXTURE_2D,0,$t,P,it,Y,F,q,_.data)}S.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,W),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function wt(S,_,F){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const J=Z(S,_),tt=_.source;e.bindTexture(q,S.__webglTexture,n.TEXTURE0+F);const at=i.get(tt);if(tt.version!==at.__version||J===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Y=Xt.getPrimaries(Xt.workingColorSpace),mt=_.colorSpace===Ui?null:Xt.getPrimaries(_.colorSpace),rt=_.colorSpace===Ui||Y===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,s.maxTextureSize);K=ct(_,K);const ut=r.convert(_.format,_.colorSpace),_t=r.convert(_.type);let st=y(_.internalFormat,ut,_t,_.normalized,_.colorSpace,_.isVideoTexture);It(q,_);let et;const Dt=_.mipmaps,Bt=_.isVideoTexture!==!0,$t=at.__version===void 0||J===!0,P=tt.dataReady,it=b(_,K);if(_.isDepthTexture)st=w(_.format===$i,_.type),$t&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,st,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,st,K.width,K.height,0,ut,_t,null));else if(_.isDataTexture)if(Dt.length>0){Bt&&$t&&e.texStorage2D(n.TEXTURE_2D,it,st,Dt[0].width,Dt[0].height);for(let Y=0,mt=Dt.length;Y<mt;Y++)et=Dt[Y],Bt?P&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,et.width,et.height,ut,_t,et.data):e.texImage2D(n.TEXTURE_2D,Y,st,et.width,et.height,0,ut,_t,et.data);_.generateMipmaps=!1}else Bt?($t&&e.texStorage2D(n.TEXTURE_2D,it,st,K.width,K.height),P&&nt(_,K,ut,_t)):e.texImage2D(n.TEXTURE_2D,0,st,K.width,K.height,0,ut,_t,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,st,Dt[0].width,Dt[0].height,K.depth);for(let Y=0,mt=Dt.length;Y<mt;Y++)if(et=Dt[Y],_.format!==Je)if(ut!==null)if(Bt){if(P)if(_.layerUpdates.size>0){const rt=oo(et.width,et.height,_.format,_.type);for(const $ of _.layerUpdates){const Et=et.data.subarray($*rt/et.data.BYTES_PER_ELEMENT,($+1)*rt/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,$,et.width,et.height,1,ut,Et)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,et.width,et.height,K.depth,ut,et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,st,et.width,et.height,K.depth,0,et.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,et.width,et.height,K.depth,ut,_t,et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,st,et.width,et.height,K.depth,0,ut,_t,et.data)}else{Bt&&$t&&e.texStorage2D(n.TEXTURE_2D,it,st,Dt[0].width,Dt[0].height);for(let Y=0,mt=Dt.length;Y<mt;Y++)et=Dt[Y],_.format!==Je?ut!==null?Bt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,et.width,et.height,ut,et.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,st,et.width,et.height,0,et.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?P&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,et.width,et.height,ut,_t,et.data):e.texImage2D(n.TEXTURE_2D,Y,st,et.width,et.height,0,ut,_t,et.data)}else if(_.isDataArrayTexture)if(Bt){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,st,K.width,K.height,K.depth),P)if(_.layerUpdates.size>0){const Y=oo(K.width,K.height,_.format,_.type);for(const mt of _.layerUpdates){const rt=K.data.subarray(mt*Y/K.data.BYTES_PER_ELEMENT,(mt+1)*Y/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,mt,K.width,K.height,1,ut,_t,rt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,_t,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,st,K.width,K.height,K.depth,0,ut,_t,K.data);else if(_.isData3DTexture)Bt?($t&&e.texStorage3D(n.TEXTURE_3D,it,st,K.width,K.height,K.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,_t,K.data)):e.texImage3D(n.TEXTURE_3D,0,st,K.width,K.height,K.depth,0,ut,_t,K.data);else if(_.isFramebufferTexture){if($t)if(Bt)e.texStorage2D(n.TEXTURE_2D,it,st,K.width,K.height);else{let Y=K.width,mt=K.height;for(let rt=0;rt<it;rt++)e.texImage2D(n.TEXTURE_2D,rt,st,Y,mt,0,ut,_t,null),Y>>=1,mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),K.parentNode!==Y){Y.appendChild(K),u.add(_),Y.onpaint=Ft=>{const ge=Ft.changedElements;for(const ie of u)ge.includes(ie.image)&&(ie.needsUpdate=!0)},Y.requestPaint();return}const mt=0,rt=n.RGBA,$=n.RGBA,Et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,mt,rt,$,Et,K),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&$t){const Y=fe(Dt[0]);e.texStorage2D(n.TEXTURE_2D,it,st,Y.width,Y.height)}for(let Y=0,mt=Dt.length;Y<mt;Y++)et=Dt[Y],Bt?P&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ut,_t,et):e.texImage2D(n.TEXTURE_2D,Y,st,ut,_t,et);_.generateMipmaps=!1}else if(Bt){if($t){const Y=fe(K);e.texStorage2D(n.TEXTURE_2D,it,st,Y.width,Y.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,_t,K)}else e.texImage2D(n.TEXTURE_2D,0,st,ut,_t,K);p(_)&&M(q),at.__version=tt.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Nt(S,_,F){if(_.image.length!==6)return;const q=Z(S,_),J=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);const tt=i.get(J);if(J.version!==tt.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const at=Xt.getPrimaries(Xt.workingColorSpace),W=_.colorSpace===Ui?null:Xt.getPrimaries(_.colorSpace),K=_.colorSpace===Ui||at===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ut=_.isCompressedTexture||_.image[0].isCompressedTexture,_t=_.image[0]&&_.image[0].isDataTexture,st=[];for(let $=0;$<6;$++)!ut&&!_t?st[$]=m(_.image[$],!0,s.maxCubemapSize):st[$]=_t?_.image[$].image:_.image[$],st[$]=ct(_,st[$]);const et=st[0],Dt=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type),$t=y(_.internalFormat,Dt,Bt,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,it=tt.__version===void 0||q===!0,Y=J.dataReady;let mt=b(_,et);It(n.TEXTURE_CUBE_MAP,_);let rt;if(ut){P&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,$t,et.width,et.height);for(let $=0;$<6;$++){rt=st[$].mipmaps;for(let Et=0;Et<rt.length;Et++){const Ft=rt[Et];_.format!==Je?Dt!==null?P?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,0,0,Ft.width,Ft.height,Dt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,$t,Ft.width,Ft.height,0,Ft.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,0,0,Ft.width,Ft.height,Dt,Bt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,$t,Ft.width,Ft.height,0,Dt,Bt,Ft.data)}}}else{if(rt=_.mipmaps,P&&it){rt.length>0&&mt++;const $=fe(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,$t,$.width,$.height)}for(let $=0;$<6;$++)if(_t){P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,st[$].width,st[$].height,Dt,Bt,st[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,st[$].width,st[$].height,0,Dt,Bt,st[$].data);for(let Et=0;Et<rt.length;Et++){const ge=rt[Et].image[$].image;P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,0,0,ge.width,ge.height,Dt,Bt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,$t,ge.width,ge.height,0,Dt,Bt,ge.data)}}else{P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Dt,Bt,st[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,Dt,Bt,st[$]);for(let Et=0;Et<rt.length;Et++){const Ft=rt[Et];P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,0,0,Dt,Bt,Ft.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,$t,Dt,Bt,Ft.image[$])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),tt.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Rt(S,_,F,q,J,tt){const at=r.convert(F.format,F.colorSpace),W=r.convert(F.type),K=y(F.internalFormat,at,W,F.normalized,F.colorSpace),ut=i.get(_),_t=i.get(F);if(_t.__renderTarget=_,!ut.__hasExternalTextures){const st=Math.max(1,_.width>>tt),et=Math.max(1,_.height>>tt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,K,st,et,_.depth,0,at,W,null):e.texImage2D(J,tt,K,st,et,0,at,W,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Vt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,J,_t.__webglTexture,0,ye(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,J,_t.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(S,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const q=_.depthTexture,J=q&&q.isDepthTexture?q.type:null,tt=w(_.stencilBuffer,J),at=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Vt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(_),tt,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(_),tt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,tt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,S)}else{const q=_.textures;for(let J=0;J<q.length;J++){const tt=q[J],at=r.convert(tt.format,tt.colorSpace),W=r.convert(tt.type),K=y(tt.internalFormat,at,W,tt.normalized,tt.colorSpace);Vt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(_),K,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(_),K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(S,_,F){const q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),It(n.TEXTURE_CUBE_MAP,_.depthTexture);const ut=r.convert(_.depthTexture.format),_t=r.convert(_.depthTexture.type);let st;_.depthTexture.format===Ti?st=n.DEPTH_COMPONENT24:_.depthTexture.format===$i&&(st=n.DEPTH24_STENCIL8);for(let et=0;et<6;et++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,st,_.width,_.height,0,ut,_t,null)}}else j(_.depthTexture,0);const tt=J.__webglTexture,at=ye(_),W=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,K=_.depthTexture.format===$i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ti)Vt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,W,tt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,K,W,tt,0);else if(_.depthTexture.format===$i)Vt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,W,tt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,K,W,tt,0);else throw new Error("Unknown depthTexture format")}function ee(S){const _=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const q=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=q}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)zt(_.__webglFramebuffer[q],S,q);else{const q=S.texture.mipmaps;q&&q.length>0?zt(_.__webglFramebuffer[0],S,0):zt(_.__webglFramebuffer,S,0)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),he(_.__webglDepthbuffer[q],S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,tt)}}else{const q=S.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),he(_.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(S,_,F){const q=i.get(S);_!==void 0&&Rt(q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ee(S)}function kt(S){const _=S.texture,F=i.get(S),q=i.get(_);S.addEventListener("dispose",x);const J=S.textures,tt=S.isWebGLCubeRenderTarget===!0,at=J.length>1;if(at||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),tt){F.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[W]=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[W][K]=n.createFramebuffer()}else F.__webglFramebuffer[W]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)F.__webglFramebuffer[W]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(at)for(let W=0,K=J.length;W<K;W++){const ut=i.get(J[W]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&Vt(S)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let W=0;W<J.length;W++){const K=J[W];F.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[W]);const ut=r.convert(K.format,K.colorSpace),_t=r.convert(K.type),st=y(K.internalFormat,ut,_t,K.normalized,K.colorSpace,S.isXRRenderTarget===!0),et=ye(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,st,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,F.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),he(F.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),It(n.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Rt(F.__webglFramebuffer[W][K],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Rt(F.__webglFramebuffer[W],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);p(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let W=0,K=J.length;W<K;W++){const ut=J[W],_t=i.get(ut);let st=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(st=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,_t.__webglTexture),It(st,ut),Rt(F.__webglFramebuffer,S,ut,n.COLOR_ATTACHMENT0+W,st,0),p(ut)&&M(st)}e.unbindTexture()}else{let W=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(W=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(W,q.__webglTexture),It(W,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Rt(F.__webglFramebuffer[K],S,_,n.COLOR_ATTACHMENT0,W,K);else Rt(F.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,W,0);p(_)&&M(W),e.unbindTexture()}S.depthBuffer&&ee(S)}function Se(S){const _=S.textures;for(let F=0,q=_.length;F<q;F++){const J=_[F];if(p(J)){const tt=T(S),at=i.get(J).__webglTexture;e.bindTexture(tt,at),M(tt),e.unbindTexture()}}}const de=[],Oe=[];function L(S){if(S.samples>0){if(Vt(S)===!1){const _=S.textures,F=S.width,q=S.height;let J=n.COLOR_BUFFER_BIT;const tt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(S),W=_.length>1;if(W)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const K=S.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);const _t=i.get(_[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,J,n.NEAREST),c===!0&&(de.length=0,Oe.length=0,de.push(n.COLOR_ATTACHMENT0+ut),S.depthBuffer&&S.resolveDepthBuffer===!1&&(de.push(tt),Oe.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);const _t=i.get(_[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ye(S){return Math.min(s.maxSamples,S.samples)}function Vt(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ae(S){const _=a.render.frame;d.get(S)!==_&&(d.set(S,_),S.update())}function ct(S,_){const F=S.colorSpace,q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Ss&&F!==Ui&&(Xt.getTransfer(F)===te?(q!==Je||J!==ze)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",F)),_}function fe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.getTextureUnits=X,this.setTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=ot,this.setTextureCube=vt,this.rebindTextures=le,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hp(n,t){function e(i,s=Ui){let r;const a=Xt.getTransfer(s);if(i===ze)return n.UNSIGNED_BYTE;if(i===ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ko)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xo)return n.BYTE;if(i===Yo)return n.SHORT;if(i===Un)return n.UNSIGNED_SHORT;if(i===la)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Zo)return n.ALPHA;if(i===$o)return n.RGB;if(i===Je)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===jo)return n.RED;if(i===da)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===fa)return n.RG_INTEGER;if(i===ua)return n.RGBA_INTEGER;if(i===us||i===ps||i===ms||i===gs)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tr||i===Ar||i===wr||i===Rr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ar)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cr||i===Pr||i===Lr||i===Ir||i===Dr||i===vs||i===Nr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cr||i===Pr)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ir)return r.COMPRESSED_R11_EAC;if(i===Dr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vs)return r.COMPRESSED_RG11_EAC;if(i===Nr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ur||i===Fr||i===Or||i===Br||i===Gr||i===Hr||i===kr||i===zr||i===Vr||i===Wr||i===Xr||i===Yr||i===qr||i===Kr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ur)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Or)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Br)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zr||i===$r||i===jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zr)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$r)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jr||i===Qr||i===Ms||i===ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ms)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new rl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fi({vertexShader:kp,fragmentShader:zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wp extends Qi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,g=null;const E=typeof XRWebGLBinding<"u",m=new Vp,p={},M=e.getContextAttributes();let T=null,y=null;const w=[],b=[],R=new jt;let x=null;const A=new ke;A.viewport=new pe;const N=new ke;N.viewport=new pe;const C=[A,N],U=new Qc;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=w[Z];return lt===void 0&&(lt=new zs,w[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=w[Z];return lt===void 0&&(lt=new zs,w[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=w[Z];return lt===void 0&&(lt=new zs,w[Z]=lt),lt.getHandSpace()};function I(Z){const lt=b.indexOf(Z.inputSource);if(lt===-1)return;const nt=w[lt];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,l||a),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let Z=0;Z<w.length;Z++){const lt=b[Z];lt!==null&&(b[Z]=null,w[Z].disconnect(lt))}V=null,X=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(T),f=null,h=null,u=null,s=null,y=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&E&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,wt=null,Nt=null;M.depth&&(Nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?$i:Ti,wt=M.stencil?Fn:di);const Rt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Rt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new ci(h.textureWidth,h.textureHeight,{format:Je,type:ze,depthTexture:new Sn(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ci(f.framebufferWidth,f.framebufferHeight,{format:Je,type:ze,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let lt=0;lt<Z.removed.length;lt++){const nt=Z.removed[lt],wt=b.indexOf(nt);wt>=0&&(b[wt]=null,w[wt].disconnect(nt))}for(let lt=0;lt<Z.added.length;lt++){const nt=Z.added[lt];let wt=b.indexOf(nt);if(wt===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=b.length){b.push(nt),wt=Rt;break}else if(b[Rt]===null){b[Rt]=nt,wt=Rt;break}if(wt===-1)break}const Nt=w[wt];Nt&&Nt.connect(nt)}}const j=new O,Q=new O;function ot(Z,lt,nt){j.setFromMatrixPosition(lt.matrixWorld),Q.setFromMatrixPosition(nt.matrixWorld);const wt=j.distanceTo(Q),Nt=lt.projectionMatrix.elements,Rt=nt.projectionMatrix.elements,he=Nt[14]/(Nt[10]-1),zt=Nt[14]/(Nt[10]+1),ee=(Nt[9]+1)/Nt[5],le=(Nt[9]-1)/Nt[5],kt=(Nt[8]-1)/Nt[0],Se=(Rt[8]+1)/Rt[0],de=he*kt,Oe=he*Se,L=wt/(-kt+Se),ye=L*-kt;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ye),Z.translateZ(L),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Vt=he+L,ae=zt+L,ct=de-ye,fe=Oe+(wt-ye),S=ee*zt/ae*Vt,_=le*zt/ae*Vt;Z.projectionMatrix.makePerspective(ct,fe,S,_,Vt,ae),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function vt(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let lt=Z.near,nt=Z.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),U.near=N.near=A.near=lt,U.far=N.far=A.far=nt,(V!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,X=U.far),U.layers.mask=Z.layers.mask|6,A.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const wt=Z.parent,Nt=U.cameras;vt(U,wt);for(let Rt=0;Rt<Nt.length;Rt++)vt(Nt[Rt],wt);Nt.length===2?ot(U,A,N):U.projectionMatrix.copy(A.projectionMatrix),yt(Z,U,wt)};function yt(Z,lt,nt){nt===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=na*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return p[Z]};let Wt=null;function Jt(Z,lt){if(d=lt.getViewerPose(l||a),g=lt,d!==null){const nt=d.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let wt=!1;nt.length!==U.cameras.length&&(U.cameras.length=0,wt=!0);for(let zt=0;zt<nt.length;zt++){const ee=nt[zt];let le=null;if(f!==null)le=f.getViewport(ee);else{const Se=u.getViewSubImage(h,ee);le=Se.viewport,zt===0&&(t.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(y))}let kt=C[zt];kt===void 0&&(kt=new ke,kt.layers.enable(zt),kt.viewport=new pe,C[zt]=kt),kt.matrix.fromArray(ee.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ee.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(le.x,le.y,le.width,le.height),zt===0&&(U.matrix.copy(kt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),wt===!0&&U.cameras.push(kt)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){u=i.getBinding();const zt=u.getDepthInformation(nt[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&E){t.state.unbindTexture(),u=i.getBinding();for(let zt=0;zt<nt.length;zt++){const ee=nt[zt].camera;if(ee){let le=p[ee];le||(le=new rl,p[ee]=le);const kt=u.getCameraImage(ee);le.sourceTexture=kt}}}}for(let nt=0;nt<w.length;nt++){const wt=b[nt],Nt=w[nt];wt!==null&&Nt!==void 0&&Nt.update(wt,lt,l||a)}Wt&&Wt(Z,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const It=new hl;It.setAnimationLoop(Jt),this.setAnimationLoop=function(Z){Wt=Z},this.dispose=function(){}}}const Xp=new me,_l=new Ut;_l.set(-1,0,0,0,1,0,0,0,1);function Yp(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,al(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),T=M.envMap,y=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_l),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qp(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const y=T.program;i.uniformBlockBinding(M,y)}function l(M,T){let y=s[M.id];y===void 0&&(g(M),y=d(M),s[M.id]=y,M.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(M,w);const b=t.render.frame;r[M.id]!==b&&(h(M),r[M.id]=b)}function d(M){const T=u();M.__bindingPointIndex=T;const y=n.createBuffer(),w=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=s[M.id],y=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let b=0,R=y.length;b<R;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,N=x.length;A<N;A++){const C=x[A];if(f(C,b,A,w)===!0){const U=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let I=0;I<V.length;I++){const k=V[I],B=E(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+X,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):ArrayBuffer.isView(k)?C.__data.set(new k.constructor(k.buffer,k.byteOffset,C.__data.length)):(k.toArray(C.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,T,y,w){const b=M.value,R=T+"_"+y;if(w[R]===void 0)return typeof b=="number"||typeof b=="boolean"?w[R]=b:ArrayBuffer.isView(b)?w[R]=b.slice():w[R]=b.clone(),!0;{const x=w[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return w[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function g(M){const T=M.uniforms;let y=0;const w=16;for(let R=0,x=T.length;R<x;R++){const A=Array.isArray(T[R])?T[R]:[T[R]];for(let N=0,C=A.length;N<C;N++){const U=A[N],V=Array.isArray(U.value)?U.value:[U.value];for(let X=0,I=V.length;X<I;X++){const k=V[X],B=E(k),j=y%w,Q=j%B.boundary,ot=j+Q;y+=Q,ot!==0&&w-ot<B.storage&&(y+=w-ot),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=B.storage}}}const b=y%w;return b>0&&(y+=w-b),M.__size=y,M.__cache={},this}function E(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const Kp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Zp(){return si===null&&(si=new Uc(Kp,16,16,Ji,bi),si.name="DFG_LUT",si.minFilter=Ce,si.magFilter=Ce,si.wrapS=Mi,si.wrapT=Mi,si.generateMipmaps=!1,si.needsUpdate=!0),si}class $p{constructor(t={}){const{canvas:e=dc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ze}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const E=f,m=new Set([ua,fa,da]),p=new Set([ze,di,Un,Fn,ca,ha]),M=new Uint32Array(4),T=new Int32Array(4),y=new O;let w=null,b=null;const R=[],x=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let C=!1,U=null;this._outputColorSpace=Xe;let V=0,X=0,I=null,k=-1,B=null;const j=new pe,Q=new pe;let ot=null;const vt=new At(0);let yt=0,Wt=e.width,Jt=e.height,It=1,Z=null,lt=null;const nt=new pe(0,0,Wt,Jt),wt=new pe(0,0,Wt,Jt);let Nt=!1;const Rt=new xa;let he=!1,zt=!1;const ee=new me,le=new O,kt=new pe,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Oe(){return I===null?It:1}let L=i;function ye(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),L===null){const D="webgl2";if(L=ye(D,v),L===null)throw ye(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Zt("WebGLRenderer: "+v.message),v}let Vt,ae,ct,fe,S,_,F,q,J,tt,at,W,K,ut,_t,st,et,Dt,Bt,$t,P,it,Y;function mt(){Vt=new Zf(L),Vt.init(),P=new Hp(L,Vt),ae=new kf(L,Vt,t,P),ct=new Bp(L,Vt),ae.reversedDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),fe=new Jf(L),S=new bp,_=new Gp(L,Vt,ct,S,ae,P,fe),F=new Kf(N),q=new eh(L),it=new Gf(L,q),J=new $f(L,q,fe,it),tt=new tu(L,J,q,it,fe),Dt=new Qf(L,ae,_),_t=new zf(S),at=new Ep(N,F,Vt,ae,it,_t),W=new Yp(N,S),K=new Ap,ut=new Ip(Vt),et=new Bf(N,F,ct,tt,g,c),st=new Op(N,tt,ae),Y=new qp(L,fe,ae,ct),Bt=new Hf(L,Vt,fe),$t=new jf(L,Vt,fe),fe.programs=at.programs,N.capabilities=ae,N.extensions=Vt,N.properties=S,N.renderLists=K,N.shadowMap=st,N.state=ct,N.info=fe}mt(),E!==ze&&(A=new iu(E,e.width,e.height,s,r));const rt=new Wp(N,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Vt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Vt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(v){v!==void 0&&(It=v,this.setSize(Wt,Jt,!1))},this.getSize=function(v){return v.set(Wt,Jt)},this.setSize=function(v,D,z=!0){if(rt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=v,Jt=D,e.width=Math.floor(v*It),e.height=Math.floor(D*It),z===!0&&(e.style.width=v+"px",e.style.height=D+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Wt*It,Jt*It).floor()},this.setDrawingBufferSize=function(v,D,z){Wt=v,Jt=D,It=z,e.width=Math.floor(v*z),e.height=Math.floor(D*z),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(E===ze){Zt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Lt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(nt)},this.setViewport=function(v,D,z,G){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,D,z,G),ct.viewport(j.copy(nt).multiplyScalar(It).round())},this.getScissor=function(v){return v.copy(wt)},this.setScissor=function(v,D,z,G){v.isVector4?wt.set(v.x,v.y,v.z,v.w):wt.set(v,D,z,G),ct.scissor(Q.copy(wt).multiplyScalar(It).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(v){ct.setScissorTest(Nt=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){lt=v},this.getClearColor=function(v){return v.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,z=!0){let G=0;if(v){let H=!1;if(I!==null){const ft=I.texture.format;H=m.has(ft)}if(H){const ft=I.texture.type,xt=p.has(ft),dt=et.getClearColor(),Mt=et.getClearAlpha(),bt=dt.r,Ot=dt.g,Ht=dt.b;xt?(M[0]=bt,M[1]=Ot,M[2]=Ht,M[3]=Mt,L.clearBufferuiv(L.COLOR,0,M)):(T[0]=bt,T[1]=Ot,T[2]=Ht,T[3]=Mt,L.clearBufferiv(L.COLOR,0,T))}else G|=L.COLOR_BUFFER_BIT}D&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),et.dispose(),K.dispose(),ut.dispose(),S.dispose(),F.dispose(),tt.dispose(),it.dispose(),Y.dispose(),at.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ba),rt.removeEventListener("sessionend",Ta),Hi.stop()};function $(v){v.preventDefault(),Ha("WebGLRenderer: Context Lost."),C=!0}function Et(){Ha("WebGLRenderer: Context Restored."),C=!1;const v=fe.autoReset,D=st.enabled,z=st.autoUpdate,G=st.needsUpdate,H=st.type;mt(),fe.autoReset=v,st.enabled=D,st.autoUpdate=z,st.needsUpdate=G,st.type=H}function Ft(v){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ge(v){const D=v.target;D.removeEventListener("dispose",ge),ie(D)}function ie(v){ui(v),S.remove(v)}function ui(v){const D=S.get(v).programs;D!==void 0&&(D.forEach(function(z){at.releaseProgram(z)}),v.isShaderMaterial&&at.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,z,G,H,ft){D===null&&(D=Se);const xt=H.isMesh&&H.matrixWorld.determinant()<0,dt=wl(v,D,z,G,H);ct.setMaterial(G,xt);let Mt=z.index,bt=1;if(G.wireframe===!0){if(Mt=J.getWireframeAttribute(z),Mt===void 0)return;bt=2}const Ot=z.drawRange,Ht=z.attributes.position;let Tt=Ot.start*bt,ne=(Ot.start+Ot.count)*bt;ft!==null&&(Tt=Math.max(Tt,ft.start*bt),ne=Math.min(ne,(ft.start+ft.count)*bt)),Mt!==null?(Tt=Math.max(Tt,0),ne=Math.min(ne,Mt.count)):Ht!=null&&(Tt=Math.max(Tt,0),ne=Math.min(ne,Ht.count));const _e=ne-Tt;if(_e<0||_e===1/0)return;it.setup(H,G,dt,z,Mt);let ue,se=Bt;if(Mt!==null&&(ue=q.get(Mt),se=$t,se.setIndex(ue)),H.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*Oe()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(H.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),ct.setLineWidth(Ae*Oe()),H.isLineSegments?se.setMode(L.LINES):H.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else H.isPoints?se.setMode(L.POINTS):H.isSprite&&se.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ae=H._multiDrawStarts,gt=H._multiDrawCounts,Be=H._multiDrawCount,Kt=Mt?q.get(Mt).bytesPerElement:1,Ve=S.get(G).currentProgram.getUniforms();for(let ii=0;ii<Be;ii++)Ve.setValue(L,"_gl_DrawID",ii),se.render(Ae[ii]/Kt,gt[ii])}else if(H.isInstancedMesh)se.renderInstances(Tt,_e,H.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Ae);se.renderInstances(Tt,_e,gt)}else se.render(Tt,_e)};function ei(v,D,z){v.transparent===!0&&v.side===$e&&v.forceSinglePass===!1?(v.side=Fe,v.needsUpdate=!0,zn(v,D,z),v.side=Oi,v.needsUpdate=!0,zn(v,D,z),v.side=$e):zn(v,D,z)}this.compile=function(v,D,z=null){z===null&&(z=v),b=ut.get(z),b.init(D),x.push(b),z.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),v!==z&&v.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const G=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ft=H.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const dt=ft[xt];ei(dt,z,H),G.add(dt)}else ei(ft,z,H),G.add(ft)}),b=x.pop(),G},this.compileAsync=function(v,D,z=null){const G=this.compile(v,D,z);return new Promise(H=>{function ft(){if(G.forEach(function(xt){S.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){H(v);return}setTimeout(ft,10)}Vt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ps=null;function Tl(v){Ps&&Ps(v)}function ba(){Hi.stop()}function Ta(){Hi.start()}const Hi=new hl;Hi.setAnimationLoop(Tl),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(v){Ps=v,rt.setAnimationLoop(v),v===null?Hi.stop():Hi.start()},rt.addEventListener("sessionstart",ba),rt.addEventListener("sessionend",Ta),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(v,D);const z=rt.enabled===!0&&rt.isPresenting===!0,G=A!==null&&(I===null||z)&&A.begin(N,I);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(D),D=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(N,v,D,I),b=ut.get(v,x.length),b.init(D),b.state.textureUnits=_.getTextureUnits(),x.push(b),ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Rt.setFromProjectionMatrix(ee,oi,D.reversedDepth),zt=this.localClippingEnabled,he=_t.init(this.clippingPlanes,zt),w=K.get(v,R.length),w.init(),R.push(w),rt.enabled===!0&&rt.isPresenting===!0){const xt=N.xr.getDepthSensingMesh();xt!==null&&Ls(xt,D,-1/0,N.sortObjects)}Ls(v,D,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Z,lt),de=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,de&&et.addToRenderList(w,v),this.info.render.frame++,he===!0&&_t.beginShadows();const H=b.state.shadowsArray;if(st.render(H,v,D),he===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const xt=w.opaque,dt=w.transmissive;if(b.setupLights(),D.isArrayCamera){const Mt=D.cameras;if(dt.length>0)for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Ht=Mt[bt];wa(xt,dt,v,Ht)}de&&et.render(v);for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Ht=Mt[bt];Aa(w,v,Ht,Ht.viewport)}}else dt.length>0&&wa(xt,dt,v,D),de&&et.render(v),Aa(w,v,D)}I!==null&&X===0&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),G&&A.end(N),v.isScene===!0&&v.onAfterRender(N,v,D),it.resetDefaultState(),k=-1,B=null,x.pop(),x.length>0?(b=x[x.length-1],_.setTextureUnits(b.state.textureUnits),he===!0&&_t.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function Ls(v,D,z,G){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Rt.intersectsSprite(v)){G&&kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ee);const xt=tt.update(v),dt=v.material;dt.visible&&w.push(v,xt,dt,z,kt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Rt.intersectsObject(v))){const xt=tt.update(v),dt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),kt.copy(v.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(v.matrixWorld).applyMatrix4(ee)),Array.isArray(dt)){const Mt=xt.groups;for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Ht=Mt[bt],Tt=dt[Ht.materialIndex];Tt&&Tt.visible&&w.push(v,xt,Tt,z,kt.z,Ht)}}else dt.visible&&w.push(v,xt,dt,z,kt.z,null)}}const ft=v.children;for(let xt=0,dt=ft.length;xt<dt;xt++)Ls(ft[xt],D,z,G)}function Aa(v,D,z,G){const{opaque:H,transmissive:ft,transparent:xt}=v;b.setupLightsView(z),he===!0&&_t.setGlobalState(N.clippingPlanes,z),G&&ct.viewport(j.copy(G)),H.length>0&&kn(H,D,z),ft.length>0&&kn(ft,D,z),xt.length>0&&kn(xt,D,z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function wa(v,D,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Tt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new ci(1,1,{generateMipmaps:!0,type:Tt?bi:ze,minFilter:Zi,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const ft=b.state.transmissionRenderTarget[G.id],xt=G.viewport||j;ft.setSize(xt.z*N.transmissionResolutionScale,xt.w*N.transmissionResolutionScale);const dt=N.getRenderTarget(),Mt=N.getActiveCubeFace(),bt=N.getActiveMipmapLevel();N.setRenderTarget(ft),N.getClearColor(vt),yt=N.getClearAlpha(),yt<1&&N.setClearColor(16777215,.5),N.clear(),de&&et.render(z);const Ot=N.toneMapping;N.toneMapping=li;const Ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),he===!0&&_t.setGlobalState(N.clippingPlanes,G),kn(v,z,G),_.updateMultisampleRenderTarget(ft),_.updateRenderTargetMipmap(ft),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ne=0,_e=D.length;ne<_e;ne++){const ue=D[ne],{object:se,geometry:Ae,material:gt,group:Be}=ue;if(gt.side===$e&&se.layers.test(G.layers)){const Kt=gt.side;gt.side=Fe,gt.needsUpdate=!0,Ra(se,z,G,Ae,gt,Be),gt.side=Kt,gt.needsUpdate=!0,Tt=!0}}Tt===!0&&(_.updateMultisampleRenderTarget(ft),_.updateRenderTargetMipmap(ft))}N.setRenderTarget(dt,Mt,bt),N.setClearColor(vt,yt),Ht!==void 0&&(G.viewport=Ht),N.toneMapping=Ot}function kn(v,D,z){const G=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ft=v.length;H<ft;H++){const xt=v[H],{object:dt,geometry:Mt,group:bt}=xt;let Ot=xt.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),dt.layers.test(z.layers)&&Ra(dt,D,z,Mt,Ot,bt)}}function Ra(v,D,z,G,H,ft){v.onBeforeRender(N,D,z,G,H,ft),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(N,D,z,G,v,ft),H.transparent===!0&&H.side===$e&&H.forceSinglePass===!1?(H.side=Fe,H.needsUpdate=!0,N.renderBufferDirect(z,D,G,H,v,ft),H.side=Oi,H.needsUpdate=!0,N.renderBufferDirect(z,D,G,H,v,ft),H.side=$e):N.renderBufferDirect(z,D,G,H,v,ft),v.onAfterRender(N,D,z,G,H,ft)}function zn(v,D,z){D.isScene!==!0&&(D=Se);const G=S.get(v),H=b.state.lights,ft=b.state.shadowsArray,xt=H.state.version,dt=at.getParameters(v,H.state,ft,D,z,b.state.lightProbeGridArray),Mt=at.getProgramCacheKey(dt);let bt=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;const Ot=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=F.get(v.envMap||G.environment,Ot),G.envMapRotation=G.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",ge),bt=new Map,G.programs=bt);let Ht=bt.get(Mt);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===xt)return Pa(v,dt),Ht}else dt.uniforms=at.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,z,dt),v.onBeforeCompile(dt,N),Ht=at.acquireProgram(dt,Mt),bt.set(Mt,Ht),G.uniforms=dt.uniforms;const Tt=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Tt.clippingPlanes=_t.uniform),Pa(v,dt),G.needsLights=Cl(v),G.lightsStateVersion=xt,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=Ht,G.uniformsList=null,Ht}function Ca(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=_s.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Pa(v,D){const z=S.get(v);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Al(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let z=0,G=v.length;z<G;z++){const H=v[z];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function wl(v,D,z,G,H){D.isScene!==!0&&(D=Se),_.resetTextureUnits();const ft=D.fog,xt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,dt=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xt.workingColorSpace,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,bt=F.get(G.envMap||xt,Mt),Ot=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!z.morphAttributes.position,ne=!!z.morphAttributes.normal,_e=!!z.morphAttributes.color;let ue=li;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=N.toneMapping);const se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ae=se!==void 0?se.length:0,gt=S.get(G),Be=b.state.lights;if(he===!0&&(zt===!0||v!==B)){const oe=v===B&&G.id===k;_t.setState(G,v,oe)}let Kt=!1;G.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Be.state.version||gt.outputColorSpace!==dt||H.isBatchedMesh&&gt.batching===!1||!H.isBatchedMesh&&gt.batching===!0||H.isBatchedMesh&&gt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&gt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&gt.instancing===!1||!H.isInstancedMesh&&gt.instancing===!0||H.isSkinnedMesh&&gt.skinning===!1||!H.isSkinnedMesh&&gt.skinning===!0||H.isInstancedMesh&&gt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&gt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&gt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&gt.instancingMorph===!1&&H.morphTexture!==null||gt.envMap!==bt||G.fog===!0&&gt.fog!==ft||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==_t.numPlanes||gt.numIntersection!==_t.numIntersection)||gt.vertexAlphas!==Ot||gt.vertexTangents!==Ht||gt.morphTargets!==Tt||gt.morphNormals!==ne||gt.morphColors!==_e||gt.toneMapping!==ue||gt.morphTargetsCount!==Ae||!!gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,gt.__version=G.version);let Ve=gt.currentProgram;Kt===!0&&(Ve=zn(G,D,H),U&&G.isNodeMaterial&&U.onUpdateProgram(G,Ve,gt));let ii=!1,Ai=!1,tn=!1;const re=Ve.getUniforms(),xe=gt.uniforms;if(ct.useProgram(Ve.program)&&(ii=!0,Ai=!0,tn=!0),G.id!==k&&(k=G.id,Ai=!0),gt.needsLights){const oe=Al(b.state.lightProbeGridArray,H);gt.lightProbeGrid!==oe&&(gt.lightProbeGrid=oe,Ai=!0)}if(ii||B!==v){ct.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),re.setValue(L,"projectionMatrix",v.projectionMatrix),re.setValue(L,"viewMatrix",v.matrixWorldInverse);const Ri=re.map.cameraPosition;Ri!==void 0&&Ri.setValue(L,le.setFromMatrixPosition(v.matrixWorld)),ae.logarithmicDepthBuffer&&re.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&re.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,Ai=!0,tn=!0)}if(gt.needsLights&&(Be.state.directionalShadowMap.length>0&&re.setValue(L,"directionalShadowMap",Be.state.directionalShadowMap,_),Be.state.spotShadowMap.length>0&&re.setValue(L,"spotShadowMap",Be.state.spotShadowMap,_),Be.state.pointShadowMap.length>0&&re.setValue(L,"pointShadowMap",Be.state.pointShadowMap,_)),H.isSkinnedMesh){re.setOptional(L,H,"bindMatrix"),re.setOptional(L,H,"bindMatrixInverse");const oe=H.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),re.setValue(L,"boneTexture",oe.boneTexture,_))}H.isBatchedMesh&&(re.setOptional(L,H,"batchingTexture"),re.setValue(L,"batchingTexture",H._matricesTexture,_),re.setOptional(L,H,"batchingIdTexture"),re.setValue(L,"batchingIdTexture",H._indirectTexture,_),re.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&re.setValue(L,"batchingColorTexture",H._colorsTexture,_));const wi=z.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Dt.update(H,z,Ve),(Ai||gt.receiveShadow!==H.receiveShadow)&&(gt.receiveShadow=H.receiveShadow,re.setValue(L,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(xe.envMapIntensity.value=D.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=Zp()),Ai){if(re.setValue(L,"toneMappingExposure",N.toneMappingExposure),gt.needsLights&&Rl(xe,tn),ft&&G.fog===!0&&W.refreshFogUniforms(xe,ft),W.refreshMaterialUniforms(xe,G,It,Jt,b.state.transmissionRenderTarget[v.id]),gt.needsLights&&gt.lightProbeGrid){const oe=gt.lightProbeGrid;xe.probesSH.value=oe.texture,xe.probesMin.value.copy(oe.boundingBox.min),xe.probesMax.value.copy(oe.boundingBox.max),xe.probesResolution.value.copy(oe.resolution)}_s.upload(L,Ca(gt),xe,_)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_s.upload(L,Ca(gt),xe,_),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&re.setValue(L,"center",H.center),re.setValue(L,"modelViewMatrix",H.modelViewMatrix),re.setValue(L,"normalMatrix",H.normalMatrix),re.setValue(L,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const oe=G.uniformsGroups;for(let Ri=0,en=oe.length;Ri<en;Ri++){const La=oe[Ri];Y.update(La,Ve),Y.bind(La,Ve)}}return Ve}function Rl(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Cl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,z){const G=S.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),S.get(v.texture).__webglTexture=D,S.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const z=S.get(v);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};const Pl=L.createFramebuffer();this.setRenderTarget=function(v,D=0,z=0){I=v,V=D,X=z;let G=null,H=!1,ft=!1;if(v){const dt=S.get(v);if(dt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(L.FRAMEBUFFER,dt.__webglFramebuffer),j.copy(v.viewport),Q.copy(v.scissor),ot=v.scissorTest,ct.viewport(j),ct.scissor(Q),ct.setScissorTest(ot),k=-1;return}else if(dt.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(dt.__hasExternalTextures)_.rebindTextures(v,S.get(v.texture).__webglTexture,S.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ot=v.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&S.has(Ot)&&(v.width!==Ot.image.width||v.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}const Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);const bt=S.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[D])?G=bt[D][z]:G=bt[D],H=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?G=S.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?G=bt[z]:G=bt,j.copy(v.viewport),Q.copy(v.scissor),ot=v.scissorTest}else j.copy(nt).multiplyScalar(It).floor(),Q.copy(wt).multiplyScalar(It).floor(),ot=Nt;if(z!==0&&(G=Pl),ct.bindFramebuffer(L.FRAMEBUFFER,G)&&ct.drawBuffers(v,G),ct.viewport(j),ct.scissor(Q),ct.setScissorTest(ot),H){const dt=S.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,z)}else if(ft){const dt=D;for(let Mt=0;Mt<v.textures.length;Mt++){const bt=S.get(v.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,bt.__webglTexture,z,dt)}}else if(v!==null&&z!==0){const dt=S.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,z)}k=-1},this.readRenderTargetPixels=function(v,D,z,G,H,ft,xt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){ct.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const bt=v.textures[dt],Ot=bt.format,Ht=bt.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),!ae.textureFormatReadable(Ot)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ht)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-G&&z>=0&&z<=v.height-H&&L.readPixels(D,z,G,H,P.convert(Ot),P.convert(Ht),ft)}finally{const bt=I!==null?S.get(I).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,D,z,G,H,ft,xt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(D>=0&&D<=v.width-G&&z>=0&&z<=v.height-H){ct.bindFramebuffer(L.FRAMEBUFFER,Mt);const bt=v.textures[dt],Ot=bt.format,Ht=bt.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),!ae.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(D,z,G,H,P.convert(Ot),P.convert(Ht),0);const ne=I!==null?S.get(I).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,ne);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fc(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(Tt),L.deleteSync(_e),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,z=0){const G=Math.pow(2,-z),H=Math.floor(v.image.width*G),ft=Math.floor(v.image.height*G),xt=D!==null?D.x:0,dt=D!==null?D.y:0;_.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,xt,dt,H,ft),ct.unbindTexture()};const Ll=L.createFramebuffer(),Il=L.createFramebuffer();this.copyTextureToTexture=function(v,D,z=null,G=null,H=0,ft=0){let xt,dt,Mt,bt,Ot,Ht,Tt,ne,_e;const ue=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(z!==null)xt=z.max.x-z.min.x,dt=z.max.y-z.min.y,Mt=z.isBox3?z.max.z-z.min.z:1,bt=z.min.x,Ot=z.min.y,Ht=z.isBox3?z.min.z:0;else{const xe=Math.pow(2,-H);xt=Math.floor(ue.width*xe),dt=Math.floor(ue.height*xe),v.isDataArrayTexture?Mt=ue.depth:v.isData3DTexture?Mt=Math.floor(ue.depth*xe):Mt=1,bt=0,Ot=0,Ht=0}G!==null?(Tt=G.x,ne=G.y,_e=G.z):(Tt=0,ne=0,_e=0);const se=P.convert(D.format),Ae=P.convert(D.type);let gt;D.isData3DTexture?(_.setTexture3D(D,0),gt=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(_.setTexture2DArray(D,0),gt=L.TEXTURE_2D_ARRAY):(_.setTexture2D(D,0),gt=L.TEXTURE_2D),ct.activeTexture(L.TEXTURE0),ct.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),ct.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ct.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Be=ct.getParameter(L.UNPACK_ROW_LENGTH),Kt=ct.getParameter(L.UNPACK_IMAGE_HEIGHT),Ve=ct.getParameter(L.UNPACK_SKIP_PIXELS),ii=ct.getParameter(L.UNPACK_SKIP_ROWS),Ai=ct.getParameter(L.UNPACK_SKIP_IMAGES);ct.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),ct.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),ct.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),ct.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),ct.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const tn=v.isDataArrayTexture||v.isData3DTexture,re=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const xe=S.get(v),wi=S.get(D),oe=S.get(xe.__renderTarget),Ri=S.get(wi.__renderTarget);ct.bindFramebuffer(L.READ_FRAMEBUFFER,oe.__webglFramebuffer),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let en=0;en<Mt;en++)tn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(v).__webglTexture,H,Ht+en),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(D).__webglTexture,ft,_e+en)),L.blitFramebuffer(bt,Ot,xt,dt,Tt,ne,xt,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||S.has(v)){const xe=S.get(v),wi=S.get(D);ct.bindFramebuffer(L.READ_FRAMEBUFFER,Ll),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,Il);for(let oe=0;oe<Mt;oe++)tn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,H,Ht+oe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,H),re?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wi.__webglTexture,ft,_e+oe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wi.__webglTexture,ft),H!==0?L.blitFramebuffer(bt,Ot,xt,dt,Tt,ne,xt,dt,L.COLOR_BUFFER_BIT,L.NEAREST):re?L.copyTexSubImage3D(gt,ft,Tt,ne,_e+oe,bt,Ot,xt,dt):L.copyTexSubImage2D(gt,ft,Tt,ne,bt,Ot,xt,dt);ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(gt,ft,Tt,ne,_e,xt,dt,Mt,se,Ae,ue.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,ft,Tt,ne,_e,xt,dt,Mt,se,ue.data):L.texSubImage3D(gt,ft,Tt,ne,_e,xt,dt,Mt,se,Ae,ue):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,Tt,ne,xt,dt,se,Ae,ue.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,Tt,ne,ue.width,ue.height,se,ue.data):L.texSubImage2D(L.TEXTURE_2D,ft,Tt,ne,xt,dt,se,Ae,ue);ct.pixelStorei(L.UNPACK_ROW_LENGTH,Be),ct.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),ct.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),ct.pixelStorei(L.UNPACK_SKIP_ROWS,ii),ct.pixelStorei(L.UNPACK_SKIP_IMAGES,Ai),ft===0&&D.generateMipmaps&&L.generateMipmap(gt),ct.unbindTexture()},this.initRenderTarget=function(v){S.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),ct.unbindTexture()},this.resetState=function(){V=0,X=0,I=null,ct.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const qt={TILE_SIZE:16},ce={START_HP:100,MAX_BLOOD:100,WALK_SPEED:3,RUN_SPEED:5.5,BAT_SPEED:8,DODGE_I_FRAMES:12,DODGE_COOLDOWN_MS:800,DODGE_IMPULSE:220,BLOOD_DRAIN_RATE_DAY:.5,BLOOD_DRAIN_RATE_NIGHT:.1,MASS:1},Ct={COMBO_WINDOW_MS:600,COMBO_1_DMG:10,COMBO_1_ARC:70,COMBO_1_RECOVERY_MS:150,COMBO_2_DMG:12,COMBO_2_ARC:90,COMBO_2_RECOVERY_MS:200,COMBO_3_DMG:20,COMBO_3_ARC:120,COMBO_3_RECOVERY_MS:350,SLASH_CD_MS:400,SLASH_RANGE_TILES:1.2,CLAW_DMG:8,CLAW_RANGE_TILES:1.5,BASE_KNOCKBACK:180,HEAVY_KNOCKBACK:280,FRICTION:600,STAGGER_THRESHOLD:15,ENEMY_THRUST_DMG:15,ENEMY_THRUST_RANGE:2,ENEMY_THRUST_TELEGRAPH:.6,ENEMY_BASH_DMG:8,ENEMY_BASH_RANGE:1,ENEMY_BASH_TELEGRAPH:.4,ENEMY_BASH_KB_MULT:2,ENEMY_SWEEP_DMG:12,ENEMY_SWEEP_RANGE:1.5,ENEMY_SWEEP_TELEGRAPH:.8,ENEMY_SWEEP_ARC:180,BOSS_SMITE_DMG:25,BOSS_SMITE_TELEGRAPH:1,BOSS_SWEEP_DMG:18,BOSS_SWEEP_TELEGRAPH:.8,BOSS_SHIELD_DURATION:3,BOSS_RAIN_DMG:20,BOSS_RAIN_TELEGRAPH:.8,BOSS_CHARGE_DMG:30,BOSS_CHARGE_TELEGRAPH:.5},Xi={CYCLE_DURATION_MINS:6,DAY_RATIO:.4,NIGHT_RATIO:.6,TRANSITION_SEC:30},St={EMPTY:0,GRASS:1,COBBLE:2,WALL:3,WATER:4,CHURCH:5,DOOR:6,BUSH:7,KEY:8,LORE_NODE:9},vi={MENU:"MENU",PROLOGUE:"PROLOGUE",PLAYING:"PLAYING",GAME_OVER:"GAME_OVER",VICTORY:"VICTORY"};class jp{constructor(){this.keys=new Set,this.previousKeys=new Set,this.mouse={x:0,y:0,clicked:!1,rightClicked:!1},window.addEventListener("keydown",t=>{this.keys.add(t.code)}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("mousemove",t=>{this.mouse.x=t.clientX,this.mouse.y=t.clientY}),window.addEventListener("mousedown",t=>{t.button===0&&(this.mouse.clicked=!0),t.button===2&&(this.mouse.rightClicked=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouse.clicked=!1),t.button===2&&(this.mouse.rightClicked=!1)}),window.addEventListener("contextmenu",t=>t.preventDefault())}update(){this.previousKeys=new Set(this.keys)}isDown(t){return this.keys.has(t)}isJustPressed(t){return this.keys.has(t)&&!this.previousKeys.has(t)}}class Jp{constructor(){this.x=0,this.y=0,this.z=0,this.lerpFactor=.1,this.threeCamera=new ke(45,window.innerWidth/window.innerHeight,1,1e3),this.cameraOffset=new O(0,150,150),this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0,this.shakeOffsetX=0,this.shakeOffsetZ=0}shake(t,e){t>this.shakeIntensity&&(this.shakeIntensity=t,this.shakeDuration=e,this.shakeTimer=e)}update(t,e,i){const s=1-Math.exp(-8*i);if(this.x+=(t-this.x)*s,this.z+=(e-this.z)*s,this.shakeOffsetX=0,this.shakeOffsetZ=0,this.shakeTimer>0&&i){this.shakeTimer-=i;const r=this.shakeTimer/this.shakeDuration,a=this.shakeIntensity*r;this.shakeOffsetX=(Math.random()-.5)*2*a,this.shakeOffsetZ=(Math.random()-.5)*2*a,this.shakeTimer<=0&&(this.shakeIntensity=0,this.shakeDuration=0,this.shakeTimer=0)}this.threeCamera.position.x=this.x+this.cameraOffset.x+this.shakeOffsetX,this.threeCamera.position.y=this.cameraOffset.y,this.threeCamera.position.z=this.z+this.cameraOffset.z+this.shakeOffsetZ,this.threeCamera.lookAt(this.x+this.shakeOffsetX*.5,0,this.z+this.shakeOffsetZ*.5)}}class Ye{static getTheme(t){const e={1:Ye.duskHollow(),2:Ye.crimsonCatacombs(),3:Ye.frozenGraveyard(),4:Ye.infernalSanctum(),5:Ye.obsidianThrone()};return e[t]||e[1]}static duskHollow(){return{id:1,name:"Dusk Hollow",subtitle:"The Rain-Soaked Parish",bgColor:657930,fogColor:657930,fogDensity:.002,ambientColor:16777215,ambientIntensity:.8,ambientNightColor:1713466,dirColor:16775914,dirIntensity:1,dirNightColor:3821419,dirPosition:[100,200,50],playerLightColor:16755200,tiles:{grass:{base:"#141416",highlight:"#1e1e22"},cobble:{base:"#222226",highlight:"#32323a"},wall:{base:"#0a0a0d",highlight:"#18181f"},water:{base:"#050508",highlight:"#1b1b22"},church:{base:"#141416",highlight:"#a0a0a8"},door:{base:"#26262b",handle:"#000000"}},envParticles:{type:"rain",count:110,color:"rgba(180, 195, 220, 0.1)",speed:[18,32],length:[12,24]},skyGradient:["#0a0a0f","#0d0d14","#0a0a0a"],hasLightningFlashes:!0,groundFogEnabled:!1}}static crimsonCatacombs(){return{id:2,name:"Crimson Catacombs",subtitle:"The Bone Crypts Below",bgColor:788486,fogColor:1707784,fogDensity:.004,ambientColor:16764040,ambientIntensity:.4,ambientNightColor:4007952,dirColor:16750916,dirIntensity:.6,dirNightColor:5910544,dirPosition:[50,80,30],playerLightColor:16742178,tiles:{grass:{base:"#1a140e",highlight:"#241c14"},cobble:{base:"#2a1f16",highlight:"#3d2e22"},wall:{base:"#12100c",highlight:"#2a2218"},water:{base:"#0a0604",highlight:"#1a100a"},church:{base:"#1a140e",highlight:"#d4c4a8"},door:{base:"#2a2016",handle:"#8a6a3a"}},envParticles:{type:"dust",count:40,color:"rgba(255, 200, 120, 0.06)",speed:[2,6],length:[1,3]},skyGradient:["#0c0806","#0c0806","#0c0806"],hasLightningFlashes:!1,groundFogEnabled:!0,groundFogColor:"rgba(30, 18, 8, 0.3)"}}static frozenGraveyard(){return{id:3,name:"Frozen Graveyard",subtitle:"The Moonlit Cemetery",bgColor:658964,fogColor:1714751,fogDensity:.003,ambientColor:12111086,ambientIntensity:.5,ambientNightColor:2767445,dirColor:14544639,dirIntensity:.7,dirNightColor:4874376,dirPosition:[80,180,-60],playerLightColor:8961023,tiles:{grass:{base:"#1a1e24",highlight:"#2a3040"},cobble:{base:"#2a3040",highlight:"#3a4558"},wall:{base:"#141820",highlight:"#222a38"},water:{base:"#0a1018",highlight:"#182030"},church:{base:"#1a1e24",highlight:"#8899aa"},door:{base:"#222a38",handle:"#667788"}},envParticles:{type:"snow",count:80,color:"rgba(200, 220, 255, 0.15)",speed:[3,8],length:[2,4]},skyGradient:["#0a0e14","#1a2a44","#0a0e14"],hasLightningFlashes:!1,groundFogEnabled:!0,groundFogColor:"rgba(100, 140, 200, 0.08)"}}static infernalSanctum(){return{id:4,name:"Infernal Sanctum",subtitle:"The Volcanic Cathedral",bgColor:787460,fogColor:1705992,fogDensity:.003,ambientColor:16737843,ambientIntensity:.5,ambientNightColor:4004362,dirColor:16729122,dirIntensity:.8,dirNightColor:8921617,dirPosition:[60,120,40],playerLightColor:16729088,tiles:{grass:{base:"#1a0a08",highlight:"#2a1410"},cobble:{base:"#2a1410",highlight:"#3d2018"},wall:{base:"#140808",highlight:"#2a1010"},water:{base:"#ff3300",highlight:"#ff6600"},church:{base:"#1a0a08",highlight:"#8a4422"},door:{base:"#2a1410",handle:"#ff6600"}},envParticles:{type:"embers",count:60,color:"rgba(255, 100, 20, 0.2)",speed:[5,15],length:[2,4]},skyGradient:["#0c0404","#2a0808","#1a0404"],hasLightningFlashes:!1,groundFogEnabled:!0,groundFogColor:"rgba(60, 15, 5, 0.2)"}}static obsidianThrone(){return{id:5,name:"Obsidian Throne",subtitle:"The Void Beyond",bgColor:394256,fogColor:657432,fogDensity:.0025,ambientColor:8930508,ambientIntensity:.45,ambientNightColor:2758724,dirColor:11167487,dirIntensity:.6,dirNightColor:4465254,dirPosition:[0,200,0],playerLightColor:11158783,tiles:{grass:{base:"#0c0818",highlight:"#181028"},cobble:{base:"#181028",highlight:"#281840"},wall:{base:"#0a0610",highlight:"#180e28"},water:{base:"#1a0830",highlight:"#2a1050"},church:{base:"#0c0818",highlight:"#6644aa"},door:{base:"#181028",handle:"#aa66ff"}},envParticles:{type:"void",count:50,color:"rgba(140, 80, 220, 0.12)",speed:[1,4],length:[3,8]},skyGradient:["#060410","#100820","#060410"],hasLightningFlashes:!1,groundFogEnabled:!0,groundFogColor:"rgba(60, 20, 100, 0.1)"}}}class Qp{constructor(){this.tiles={},this.sprites={},this.ui={}}generateAll(t=1){this.generateThemeTiles(t),this.generateSprites(),this.generateUI();for(let e in this.tiles){const i=new eo(this.tiles[e]);i.magFilter=ve,i.minFilter=ve,this.tiles[e]=i}for(let e in this.sprites){const i=new eo(this.sprites[e]);i.magFilter=ve,i.minFilter=ve,this.sprites[e]=i}}createCanvas(t,e){const i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d");return s.imageSmoothingEnabled=!1,{canvas:i,ctx:s}}generateThemeTiles(t){const i=Ye.getTheme(t).tiles,s=qt.TILE_SIZE;let r=this.createCanvas(s,s);r.ctx.fillStyle=i.grass.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle=i.grass.highlight,r.ctx.fillRect(2,2,4,4),r.ctx.fillRect(10,8,3,3),r.ctx.fillRect(6,12,2,2),this.tiles[St.GRASS]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.cobble.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle=i.cobble.highlight,r.ctx.fillRect(1,1,6,6),r.ctx.fillRect(8,2,6,5),r.ctx.fillRect(2,9,5,5),r.ctx.fillRect(9,9,6,6),this.tiles[St.COBBLE]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.wall.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle=i.wall.highlight,r.ctx.fillRect(0,0,s,s/2-1),r.ctx.fillRect(0,s/2,s,s/2-1),this.tiles[St.WALL]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.water.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle=i.water.highlight,r.ctx.fillRect(2,4,8,2),r.ctx.fillRect(6,10,6,2),this.tiles[St.WATER]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.church.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle=i.church.highlight,r.ctx.fillRect(0,0,s/2,s/2),r.ctx.fillRect(s/2,s/2,s/2,s/2),this.tiles[St.CHURCH]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.door.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle=i.door.handle,r.ctx.fillRect(12,8,2,2),this.tiles[St.DOOR]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle="#0a1a0e",r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle="#10301a",r.ctx.fillRect(2,2,6,6),r.ctx.fillRect(8,6,6,6),r.ctx.fillRect(4,10,8,4),r.ctx.fillStyle="#08140b",r.ctx.fillRect(1,9,2,2),r.ctx.fillRect(10,1,2,2),this.tiles[St.BUSH]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.cobble.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle="#ffd700",r.ctx.fillRect(6,3,4,4),r.ctx.fillStyle=i.cobble.base,r.ctx.fillRect(7,4,2,2),r.ctx.fillStyle="#ffd700",r.ctx.fillRect(7,7,2,6),r.ctx.fillRect(9,10,2,2),r.ctx.fillRect(9,12,2,1),this.tiles[St.KEY]=r.canvas,r=this.createCanvas(s,s),r.ctx.fillStyle=i.cobble.base,r.ctx.fillRect(0,0,s,s),r.ctx.fillStyle="#4a4a55",r.ctx.fillRect(3,2,10,14),r.ctx.fillStyle="#6a6a75",r.ctx.fillRect(4,3,8,1),r.ctx.fillStyle="#2a2a30",r.ctx.fillRect(7,5,2,6),r.ctx.fillRect(5,7,6,2),this.tiles[St.LORE_NODE]=r.canvas}generateSprites(){const t=qt.TILE_SIZE;let e=this.createCanvas(t,t);e.ctx.fillStyle="#0d0d0f",e.ctx.fillRect(4,2,8,14),e.ctx.fillStyle="#e74c3c",e.ctx.fillRect(3,4,10,10),e.ctx.fillStyle="#f5f5f7",e.ctx.fillRect(6,2,4,4),this.sprites.player=e.canvas,e=this.createCanvas(t,t),e.ctx.fillStyle="#0a0a0c",e.ctx.fillRect(6,6,4,4),e.ctx.beginPath(),e.ctx.moveTo(6,8),e.ctx.lineTo(0,4),e.ctx.lineTo(2,10),e.ctx.fill(),e.ctx.moveTo(10,8),e.ctx.lineTo(16,4),e.ctx.lineTo(14,10),e.ctx.fill(),e.ctx.fillStyle="#e74c3c",e.ctx.fillRect(7,6,1,1),e.ctx.fillRect(8,6,1,1),this.sprites.bat=e.canvas,e=this.createCanvas(t,t),e.ctx.fillStyle="#2d2d33",e.ctx.fillRect(4,2,8,14),e.ctx.fillStyle="#9c9ca3",e.ctx.fillRect(5,2,6,5),this.sprites.guard=e.canvas,e=this.createCanvas(32,32),e.ctx.fillStyle="#1a1a1f",e.ctx.fillRect(8,4,16,28),e.ctx.fillStyle="#ffffff",e.ctx.fillRect(10,6,12,4),e.ctx.fillStyle="#f0f0f5",e.ctx.fillRect(12,2,8,6),e.ctx.fillStyle="#3c3c43",e.ctx.fillRect(24,2,2,30),this.sprites.aldric=e.canvas}generateUI(){let t=this.createCanvas(16,16);t.ctx.fillStyle="#e74c3c",t.ctx.beginPath(),t.ctx.arc(4,5,4,0,Math.PI*2),t.ctx.arc(12,5,4,0,Math.PI*2),t.ctx.fill(),t.ctx.beginPath(),t.ctx.moveTo(0,6),t.ctx.lineTo(16,6),t.ctx.lineTo(8,15),t.ctx.fill(),this.ui.heart=t.canvas,t=this.createCanvas(16,16),t.ctx.fillStyle="#900",t.ctx.beginPath(),t.ctx.arc(8,10,5,0,Math.PI*2),t.ctx.fill(),t.ctx.beginPath(),t.ctx.moveTo(3,10),t.ctx.lineTo(13,10),t.ctx.lineTo(8,2),t.ctx.fill(),this.ui.blood=t.canvas}}class tm{constructor(t,e,i){this.width=t.width,this.height=t.height,this.layers=t.layers,this.assetGen=e,this.scene=i,this.doorMeshes={},this.keyMeshes={},this.loreMeshes={},this.generate3D(i)}isSolid(t,e){if(t<0||t>=this.width||e<0||e>=this.height)return!0;const i=this.layers[1];if(i){const s=i[e*this.width+t];if(s===St.WALL||s===St.WATER||s===St.DOOR)return!0}return!1}unlockDoor(t,e){const i=`${t},${e}`,s=this.doorMeshes[i];s&&(this.scene.remove(s),s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose()),delete this.doorMeshes[i]);const r=e*this.width+t;this.layers[1][r]===St.DOOR&&(this.layers[1][r]=St.EMPTY)}fadeLoreNode(t,e){const i=`${t},${e}`,s=this.loreMeshes[i];s&&s.traverse(r=>{r.isMesh&&(r.material=r.material.clone(),r.material.transparent=!0,r.material.opacity=.4)})}removeKey(t,e){const i=`${t},${e}`,s=this.keyMeshes[i];s&&(this.scene.remove(s),s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose()),delete this.keyMeshes[i]);const r=e*this.width+t;this.layers[1][r]===St.KEY&&(this.layers[1][r]=St.EMPTY)}generate3D(t){const e=qt.TILE_SIZE,i={};for(let u in this.assetGen.tiles)i[u]=new Qt({map:this.assetGen.tiles[u]});const s=new bn(e,e);s.rotateX(-Math.PI/2);const r=new Pt(e,e*2,e);r.translate(0,e,0);const a=new Pt(e,e*.8,e);a.translate(0,e*.4,0);const o=new Pt(e*.6,e*1.2,e*.3);o.translate(0,e*.6,0);const c=new Pt(e*.4,e*.1,e*.4);c.translate(0,.2,0);const l=this.layers[0];if(l)for(let u=0;u<this.height;u++)for(let h=0;h<this.width;h++){const f=l[u*this.width+h];if(f!==St.EMPTY&&i[f]){const g=new pt(s,i[f]);g.position.set(h*e,0,u*e),g.receiveShadow=!0,t.add(g)}}const d=this.layers[1];if(d)for(let u=0;u<this.height;u++)for(let h=0;h<this.width;h++){const f=d[u*this.width+h];if(f!==St.EMPTY&&i[f]){let g;f===St.WALL?(g=new pt(r,i[f]),g.position.set(h*e,0,u*e),g.castShadow=!0,g.receiveShadow=!0,t.add(g)):f===St.DOOR?(g=new pt(r,i[f]),g.position.set(h*e,0,u*e),g.castShadow=!0,g.receiveShadow=!0,t.add(g),this.doorMeshes[`${h},${u}`]=g):f===St.BUSH?(g=new pt(a,i[f]),g.position.set(h*e,0,u*e),g.castShadow=!0,g.receiveShadow=!0,t.add(g)):f===St.LORE_NODE?(g=new pt(o,i[f]),g.position.set(h*e,0,u*e),g.castShadow=!0,g.receiveShadow=!0,t.add(g),this.loreMeshes[`${h},${u}`]=g):f===St.KEY?(g=new pt(c,i[f]),g.position.set(h*e,.2,u*e),g.castShadow=!0,g.receiveShadow=!0,t.add(g),this.keyMeshes[`${h},${u}`]=g):(g=new pt(s,i[f]),g.position.set(h*e,.1,u*e),g.receiveShadow=!0,t.add(g))}}}}const Io={1:{id:1,name:"Nocturne in Dusk Hollow",subtitle:"Chapter I: The Rain-Soaked Parish",themeId:1,chapter:"Chapter I",introText:"The Cathedral of the Sacred Dawn has stood for centuries, cleansing the land of your breed. Tonight, the bells toll for them.",width:60,height:50,playerSpawn:{x:30,y:45},objectives:[{id:"find_key",text:"Retrieve the Cathedral Key from the Keykeeper Guard",completed:!1,required:!0},{id:"unlock_gate",text:"Unlock the Cathedral Doors to the North",completed:!1,required:!0},{id:"assassinate_aldric",text:"Assassinate Brother Aldric",completed:!1,required:!0}],spawns:[{type:"boss",subType:"boss_aldric",x:30,y:10,name:"Brother Aldric"},{type:"enemy",subType:"keykeeper",x:38,y:32,patrolRadius:90,patrolType:"patrol"},{type:"enemy",subType:"guard",x:18,y:30,patrolRadius:60,patrolType:"patrol"},{type:"enemy",subType:"guard",x:42,y:30,patrolRadius:60,patrolType:"patrol"},{type:"enemy",subType:"guard",x:30,y:22,patrolRadius:0,patrolType:"stationary"},{type:"lore_node",x:18,y:24,text:"Tombstone: 'Father Marcus, Founder of Dusk Hollow. He died praying for a light that never came.'"},{type:"lore_node",x:42,y:24,text:"Tombstone: 'Sister Elena. Struck down during the Purge of the Eclipse. May her soul find peace.'"},{type:"lore_node",x:30,y:8,text:"Altar: 'A desecrated chalice sits on the blood-spattered stone. An ancient inscription reads: Feed on the righteous to fuel the dark.'"}],buildLayers(){const n=this.width,t=this.height,e=new Array(n*t).fill(St.GRASS),i=new Array(n*t).fill(St.EMPTY);for(let r=28;r<40;r++)for(let a=15;a<45;a++)e[r*n+a]=St.COBBLE;for(let r=5;r<16;r++)for(let a=22;a<38;a++)e[r*n+a]=St.CHURCH;for(let r=16;r<28;r++)for(let a=12;a<48;a++)e[r*n+a]=(a+r)%5===0?St.COBBLE:St.GRASS;for(let r=10;r<50;r++)i[40*n+r]=St.WALL,i[16*n+r]=St.WALL;for(let r=16;r<=40;r++)i[r*n+10]=St.WALL,i[r*n+50]=St.WALL;for(let r=22;r<38;r++)i[5*n+r]=St.WALL;for(let r=5;r<=15;r++)i[r*n+22]=St.WALL,i[r*n+38]=St.WALL;i[40*n+30]=St.DOOR,i[16*n+30]=St.DOOR;for(let r=33;r<=35;r++)for(let a=28;a<=32;a++)i[r*n+a]=St.WATER;const s=[{x:15,y:20},{x:16,y:20},{x:17,y:20},{x:43,y:20},{x:44,y:20},{x:45,y:20},{x:24,y:25},{x:25,y:25},{x:35,y:25},{x:36,y:25},{x:13,y:35},{x:47,y:35}];for(let r of s)i[r.y*n+r.x]=St.BUSH;return i[24*n+18]=St.LORE_NODE,i[24*n+42]=St.LORE_NODE,i[8*n+30]=St.LORE_NODE,[e,i]}},2:{id:2,name:"Crimson Catacombs",subtitle:"Chapter II: The Bone Crypts Below",themeId:2,chapter:"Chapter II",introText:"Descending beneath the ruined cathedral, you enter the ancient bone crypts. The Inquisition conducts their dark rituals in the shadows.",width:60,height:50,playerSpawn:{x:30,y:44},objectives:[{id:"extinguish_braziers",text:"Extinguish 3 Holy Braziers to dim the cathedral light",completed:!1,required:!0},{id:"slay_inquisitor",text:"Slay Inquisitor Malakai",completed:!1,required:!0}],spawns:[{type:"boss",subType:"boss_malakai",x:30,y:15,name:"Inquisitor Malakai"}],buildLayers(){const n=this.width,t=this.height,e=new Array(n*t).fill(St.COBBLE),i=new Array(n*t).fill(St.EMPTY);for(let s=0;s<n;s++)i[s]=St.WALL,i[(t-1)*n+s]=St.WALL;for(let s=0;s<t;s++)i[s*n]=St.WALL,i[s*n+(n-1)]=St.WALL;return[e,i]}},3:{id:3,name:"Frozen Graveyard",subtitle:"Chapter III: The Moonlit Cemetery",themeId:3,chapter:"Chapter III",introText:"Under the silver light of a waning moon, the frozen cemetery lies silent. Ethereal forces guard the crypt of the ancient lords.",width:60,height:50,playerSpawn:{x:30,y:44},objectives:[{id:"find_relics",text:"Collect 2 Ethereal Relics",completed:!1,required:!0},{id:"slay_wraith",text:"Defeat the Crypt Wraith",completed:!1,required:!0}],spawns:[{type:"boss",subType:"boss_wraith",x:30,y:15,name:"Crypt Wraith"}],buildLayers(){const n=this.width,t=this.height,e=new Array(n*t).fill(St.GRASS),i=new Array(n*t).fill(St.EMPTY);return[e,i]}},4:{id:4,name:"Infernal Sanctum",subtitle:"Chapter IV: The Volcanic Cathedral",themeId:4,chapter:"Chapter IV",introText:"The smell of sulfur and boiling magma fills the air. You stand at the gates of the sanctuary where the Grand Inquisitor channels holy flame.",width:60,height:50,playerSpawn:{x:30,y:44},objectives:[{id:"cross_lava",text:"Find a way to cross the lava canal",completed:!1,required:!0},{id:"slay_ignis",text:"Defeat Grand Inquisitor Ignis",completed:!1,required:!0}],spawns:[{type:"boss",subType:"boss_ignis",x:30,y:15,name:"Grand Inquisitor Ignis"}],buildLayers(){const n=this.width,t=this.height,e=new Array(n*t).fill(St.COBBLE),i=new Array(n*t).fill(St.EMPTY);return[e,i]}},5:{id:5,name:"Obsidian Throne",subtitle:"Chapter V: The Void Beyond",themeId:5,chapter:"Chapter V",introText:"The sky cracks open, revealing the void of space. The Obsidian Throne stands before you, occupied by the Pope of the Ash Inquisition.",width:60,height:50,playerSpawn:{x:30,y:44},objectives:[{id:"reach_throne",text:"Approach the Obsidian Throne",completed:!1,required:!0},{id:"slay_pope",text:"Vanquish Pope Benedictus",completed:!1,required:!0}],spawns:[{type:"boss",subType:"boss_benedictus",x:30,y:15,name:"Pope Benedictus"}],buildLayers(){const n=this.width,t=this.height,e=new Array(n*t).fill(St.CHURCH),i=new Array(n*t).fill(St.EMPTY);return[e,i]}}};function Gi(n,t,e,i){return Math.sqrt((e-n)**2+(i-t)**2)}function em(n,t){return!(t.x>=n.x+n.width||t.x+t.width<=n.x||t.y>=n.y+n.height||t.y+t.height<=n.y)}function im(n){const t=Math.PI;return n>-t/4&&n<=t/4?0:n>t/4&&n<=3*t/4?1:n>3*t/4||n<=-3*t/4?2:3}function nm(n){return n===0?0:n===1?Math.PI/2:n===2?Math.PI:-Math.PI/2}function Do(n,t,e){if(n===0)return 0;const i=Math.sign(n),s=Math.abs(n)-t*e;return s<=0?0:i*s}function sm(n,t,e){const i=e*Math.PI/180;let s=n-t;return s=Math.atan2(Math.sin(s),Math.cos(s)),Math.abs(s)<=i/2}let Ea=class{constructor(){this.activeAttacks=[],this.particleSystem=null,this.camera=null}static createMeleeHitbox(t,e,i=1){const s=qt.TILE_SIZE;let r,a,o,c,l;e==="slash"?(i===1?(r=Ct.COMBO_1_DMG,o=Ct.COMBO_1_ARC):i===2?(r=Ct.COMBO_2_DMG,o=Ct.COMBO_2_ARC):(r=Ct.COMBO_3_DMG,o=Ct.COMBO_3_ARC),a=Ct.SLASH_RANGE_TILES*s):e==="claw"?(r=Ct.CLAW_DMG,o=90,a=Ct.CLAW_RANGE_TILES*s):e==="thrust"?(r=Ct.ENEMY_THRUST_DMG,o=30,a=Ct.ENEMY_THRUST_RANGE*s):e==="bash"?(r=Ct.ENEMY_BASH_DMG,o=120,a=Ct.ENEMY_BASH_RANGE*s):e==="sweep"&&(r=Ct.ENEMY_SWEEP_DMG,o=Ct.ENEMY_SWEEP_ARC,a=Ct.ENEMY_SWEEP_RANGE*s),c=a*2,l=a*2;const d=t.x+t.width/2,u=t.y+t.height/2,h=t.facingAngle!==void 0?t.facingAngle:nm(t.facing),f=a*.5,g=d+Math.cos(h)*f,E=u+Math.sin(h)*f;return{x:g-c/2,y:E-l/2,width:c,height:l,centerX:g,centerY:E,sourceCX:d,sourceCY:u,damage:r,source:t,type:e,comboStep:i,arcDeg:o,facingAngle:h,range:a,life:.1,hasHit:new Set,knockbackMultiplier:e==="bash"?Ct.ENEMY_BASH_KB_MULT:1,isHeavy:i===3||e==="bash"}}static createAoEHitbox(t,e,i,s,r,a,o,c=.2){return{x:e,y:i,width:s,height:r,centerX:e+s/2,centerY:i+r/2,damage:a,source:t,type:o,comboStep:0,arcDeg:360,facingAngle:0,range:Math.max(s,r),life:c,hasHit:new Set,knockbackMultiplier:1,isHeavy:!0}}update(t,e,i){for(let s=this.activeAttacks.length-1;s>=0;s--){const r=this.activeAttacks[s];if(r.life-=t,r.source&&r.arcDeg<360){const a=r.source.x+r.source.width/2,o=r.source.y+r.source.height/2,c=r.range*.5,l=a+Math.cos(r.facingAngle)*c,d=o+Math.sin(r.facingAngle)*c;r.centerX=l,r.centerY=d,r.sourceCX=a,r.sourceCY=o,r.x=l-r.width/2,r.y=d-r.height/2}for(let a of e)if(a!==r.source&&!a.isDead&&!a.isInvincible&&!r.hasHit.has(a)&&em(r,a)){if(r.arcDeg<360){const o=a.x+a.width/2,c=a.y+a.height/2,l=r.sourceCX!==void 0?r.sourceCX:r.source.x+r.source.width/2,d=r.sourceCY!==void 0?r.sourceCY:r.source.y+r.source.height/2,u=Math.atan2(c-d,o-l);if(!sm(u,r.facingAngle,r.arcDeg))continue;const h=Math.max(a.width,a.height)/2;if(Gi(l,d,o,c)-h>r.range)continue}r.hasHit.add(a),this.applyHit(r,a)}r.life<=0&&this.activeAttacks.splice(s,1)}for(let s of e)if(!s.isDead&&s.vx!==void 0){if(s.vx=Do(s.vx,Ct.FRICTION,t),s.vy=Do(s.vy,Ct.FRICTION,t),s.vx!==0||s.vy!==0){let r=s.x+s.vx*t,a=s.y+s.vy*t;if(i){const o=qt.TILE_SIZE;let c=Math.floor(r/o),l=Math.floor((r+s.width-.1)/o),d=Math.floor(s.y/o),u=Math.floor((s.y+s.height-.1)/o),h=!1;for(let g=d;g<=u;g++){for(let E=c;E<=l;E++)if(i.isSolid(E,g)){h=!0;break}if(h)break}h?s.vx=0:s.x=r,c=Math.floor(s.x/o),l=Math.floor((s.x+s.width-.1)/o),d=Math.floor(a/o),u=Math.floor((a+s.height-.1)/o);let f=!1;for(let g=d;g<=u;g++){for(let E=c;E<=l;E++)if(i.isSolid(E,g)){f=!0;break}if(f)break}f?s.vy=0:s.y=a}else s.x=r,s.y=a;s.sprite&&(s.sprite.position.x=s.x,s.sprite.position.z=s.y)}s.staggerTimer!==void 0&&s.staggerTimer>0&&(s.staggerTimer-=t*1e3,s.staggerTimer<=0&&(s.staggerTimer=0,s.isStaggered=!1))}}applyHit(t,e){if(e.hasShield){this.particleSystem&&this.particleSystem.spawn(e.x+e.width/2,e.y+e.height/2,"shield_glow",4);return}let i=t.damage,s=!1;if(t.source&&t.source.isStealthHidden)s=!0,e.constructor.name==="Enemy"?i=e.maxHp||40:i=i*3,t.source.stealthAssassinations!==void 0&&(t.source.stealthAssassinations++,window.game&&window.game.onStealthAssassination&&window.game.onStealthAssassination());else if(t.source&&t.source.constructor.name==="Player"){const h=t.source;if(h.hitComboCount!==void 0&&h.hitComboCount>0){const f=Math.min(1.5,1+h.hitComboCount*.1);i=Math.round(i*f)}h.hitComboCount!==void 0&&(h.hitComboCount++,h.hitComboTimer=3)}e.hp-=i,e.isInvincible=!0,e.invincibilityTimer=200;const r=e.mass||1,a=(t.isHeavy?Ct.HEAVY_KNOCKBACK:Ct.BASE_KNOCKBACK)*t.knockbackMultiplier/r,o=t.source.x+t.source.width/2,c=t.source.y+t.source.height/2,l=e.x+e.width/2,d=e.y+e.height/2,u=Gi(o,c,l,d);if(u>0&&e.vx!==void 0){const h=(l-o)/u,f=(d-c)/u;e.vx+=h*a,e.vy+=f*a}if(e.staggerTimer!==void 0&&(t.isHeavy||t.damage>=Ct.STAGGER_THRESHOLD)&&(e.staggerResistance?t.comboStep===3&&(e.isStaggered=!0,e.staggerTimer=200):(e.isStaggered=!0,e.staggerTimer=300)),this.camera&&(t.isHeavy?this.camera.shake(5,.2):this.camera.shake(2,.1)),this.particleSystem&&(s?(this.particleSystem.spawn(l,d,"blood",15),this.particleSystem.spawn(l,d,"hit",8)):(this.particleSystem.spawn(l,d,"blood",4+(t.isHeavy?4:0)),this.particleSystem.spawn(t.centerX||l,t.centerY||d,"hit",3)),t.type==="slash"&&this.particleSystem.spawn(l,d,"slash_trail",3),e.isStaggered&&this.particleSystem.spawn(l,d,"stagger_stars",5)),e.hp<=0){if(e.hp=0,e.isDead=!0,e.subType==="keykeeper"){const h=Math.floor((e.x+e.width/2)/qt.TILE_SIZE),f=Math.floor((e.y+e.height/2)/qt.TILE_SIZE);window.game&&window.game.spawnKeyAt&&window.game.spawnKeyAt(h,f)}this.particleSystem&&this.particleSystem.spawn(l,d,"blood",12),this.camera&&this.camera.shake(6,.3)}}};class rm{constructor(t,e,i,s){this.x=t,this.y=e,this.width=16,this.height=16,this.hp=ce.START_HP,this.blood=50,this.isStarving=!1,this.facing=1,this.facingAngle=Math.PI/2,this.hasKey=!1,this.isStealthHidden=!1,this.nearLoreNode=null,this.stealthAssassinations=0,this.vx=0,this.vy=0,this.mass=ce.MASS,this.isStaggered=!1,this.staggerTimer=0,this.isDodging=!1,this.dodgeTimer=0,this.dodgeCooldown=0,this.dodgeDirX=0,this.dodgeDirY=0,this.isInvincible=!1,this.invincibilityTimer=0,this.comboStep=0,this.comboTimer=0,this.attackCooldown=0,this.isAttacking=!1,this.attackTimer=0,this.attackRecovery=0,this.attackCommitted=!1,this.inputBuffer=null,this.hitComboCount=0,this.hitComboTimer=0,this.sprite=new Si,this.humanoidGroup=new Si,this.sprite.add(this.humanoidGroup);const r=new Pt(6,7,4),a=new Qt({color:657932});this.torso=new pt(r,a),this.torso.position.set(0,8.5,0),this.torso.castShadow=!0,this.torso.receiveShadow=!0,this.humanoidGroup.add(this.torso);const o=new Pt(1.5,2.5,1),c=new Ue({color:16716066});this.amulet=new pt(o,c),this.amulet.position.set(0,1,2.1),this.torso.add(this.amulet);const l=new Pt(7.5,10,.6),d=new Qt({color:328965});this.cape=new pt(l,d),this.cape.position.set(0,8,-2.4),this.cape.castShadow=!0,this.cape.receiveShadow=!0,this.humanoidGroup.add(this.cape);const u=new Pt(7.3,9.8,.2),h=new Qt({color:14162730});this.capeInner=new pt(u,h),this.capeInner.position.set(0,-.1,.4),this.cape.add(this.capeInner);const f=new As(2.5,6,3),g=new Qt({color:14162730});this.leftCollar=new pt(f,g),this.leftCollar.position.set(-3.2,3.5,1),this.leftCollar.rotation.z=-Math.PI/6,this.leftCollar.rotation.x=-Math.PI/8,this.cape.add(this.leftCollar),this.rightCollar=new pt(f,g),this.rightCollar.position.set(3.2,3.5,1),this.rightCollar.rotation.z=Math.PI/6,this.rightCollar.rotation.x=-Math.PI/8,this.cape.add(this.rightCollar);const E=new Pt(4.5,4.5,4.5),m=new Qt({color:15790325});this.head=new pt(E,m),this.head.position.set(0,14.25,.5),this.head.castShadow=!0,this.head.receiveShadow=!0,this.humanoidGroup.add(this.head);const p=new Pt(.8,.4,.2),M=new Ue({color:16711680});this.humanLeftEye=new pt(p,M),this.humanLeftEye.position.set(-1,.5,2.3),this.head.add(this.humanLeftEye),this.humanRightEye=new pt(p,M),this.humanRightEye.position.set(1,.5,2.3),this.head.add(this.humanRightEye);const T=new Pt(.6,1,.4),y=new Ue({color:16777215});this.leftFang=new pt(T,y),this.leftFang.position.set(-1,-1.2,2.3),this.leftFang.visible=!1,this.head.add(this.leftFang),this.rightFang=new pt(T,y),this.rightFang.position.set(1,-1.2,2.3),this.rightFang.visible=!1,this.head.add(this.rightFang);const w=new Pt(5,1.5,5.2),b=new Qt({color:328965});this.hair=new pt(w,b),this.hair.position.set(0,2.5,-.4),this.head.add(this.hair);const R=new Pt(2,1,1);this.hairPeak=new pt(R,b),this.hairPeak.position.set(0,-.5,2.5),this.hair.add(this.hairPeak);const x=new Pt(1.8,6,1.8),A=new Qt({color:657932});this.leftArm=new pt(x,A),this.leftArm.position.set(-4.2,9,0),this.leftArm.castShadow=!0,this.leftArm.receiveShadow=!0,this.humanoidGroup.add(this.leftArm),this.rightArm=new pt(x,A),this.rightArm.position.set(4.2,9,0),this.rightArm.castShadow=!0,this.rightArm.receiveShadow=!0,this.humanoidGroup.add(this.rightArm);const N=new Pt(2.4,1.5,2.4),C=new Qt({color:9211030});this.leftPauldron=new pt(N,C),this.leftPauldron.position.set(0,3.2,0),this.leftArm.add(this.leftPauldron),this.rightPauldron=new pt(N,C),this.rightPauldron.position.set(0,3.2,0),this.rightArm.add(this.rightPauldron);const U=new Pt(1.2,1.5,1.2),V=new Qt({color:1114112});this.leftClaw=new pt(U,V),this.leftClaw.position.set(0,-3.5,0),this.leftArm.add(this.leftClaw),this.rightClaw=new pt(U,V),this.rightClaw.position.set(0,-3.5,0),this.rightArm.add(this.rightClaw);const X=new Pt(.6,5,.6),I=new Ue({color:16716066});this.blade=new pt(X,I),this.blade.position.set(0,-3.5,1.5),this.blade.rotation.x=Math.PI/2,this.rightArm.add(this.blade);const k=new Pt(1.6,.4,.4),B=new Qt({color:9211030});this.hilt=new pt(k,B),this.hilt.position.set(0,-1.2,.3),this.rightArm.add(this.hilt);const j=new Pt(2.2,5.5,2.2),Q=new Qt({color:657932});this.leftLeg=new pt(j,Q),this.leftLeg.position.set(-1.4,2.75,0),this.leftLeg.castShadow=!0,this.leftLeg.receiveShadow=!0,this.humanoidGroup.add(this.leftLeg),this.rightLeg=new pt(j,Q),this.rightLeg.position.set(1.4,2.75,0),this.rightLeg.castShadow=!0,this.rightLeg.receiveShadow=!0,this.humanoidGroup.add(this.rightLeg),this.batGroup=new Si,this.batGroup.visible=!1,this.sprite.add(this.batGroup);const ot=new Pt(4,3,5),vt=new Qt({color:1710620});this.batTorso=new pt(ot,vt),this.batTorso.position.set(0,8,0),this.batTorso.castShadow=!0,this.batGroup.add(this.batTorso);const yt=new Pt(2.5,2.5,2.5),Wt=new Qt({color:1184276});this.batHead=new pt(yt,Wt),this.batHead.position.set(0,8.5,2.5),this.batHead.castShadow=!0,this.batGroup.add(this.batHead);const Jt=new Pt(.4,.4,.4),It=new Ue({color:15158332});this.leftEye=new pt(Jt,It),this.leftEye.position.set(-.6,.4,1.3),this.batHead.add(this.leftEye),this.rightEye=new pt(Jt,It),this.rightEye.position.set(.6,.4,1.3),this.batHead.add(this.rightEye);const Z=new Pt(6,.4,2.5),lt=new Qt({color:789518});this.leftWing=new pt(Z,lt),this.leftWing.position.set(-4.5,8.2,0),this.leftWing.castShadow=!0,this.batGroup.add(this.leftWing),this.rightWing=new pt(Z,lt),this.rightWing.position.set(4.5,8.2,0),this.rightWing.castShadow=!0,this.batGroup.add(this.rightWing),this.sprite.position.set(this.x,0,this.y),i.add(this.sprite)}update(t,e,i,s){if(e.mouse.clicked||(this.input_mouse_consumed=!1),this.isStaggered){const y=Math.sin(Date.now()/50)*.15;this.humanoidGroup.rotation.z=y,this.sprite.position.x=this.x,this.sprite.position.z=this.y;return}this.humanoidGroup.rotation.z=0;const r=qt.TILE_SIZE,a=Math.floor((this.x+this.width/2)/r),o=Math.floor((this.y+this.height/2)/r),c=i.layers[1],l=c?c[o*i.width+a]:null;this.isStealthHidden=l===St.BUSH&&!this.isBatForm,l===St.KEY&&(i.removeKey(a,o),this.hasKey=!0,window.game&&window.game.onKeyPickedUp&&window.game.onKeyPickedUp());let d=null;const u=[{dx:0,dy:0},{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(let y of u){const w=a+y.dx,b=o+y.dy;if(w>=0&&w<i.width&&b>=0&&b<i.height&&(c?c[b*i.width+w]:null)===St.LORE_NODE){d={col:w,row:b};break}}this.nearLoreNode=d,this.nearLoreNode&&e.isJustPressed("KeyE")&&window.game&&window.game.readLoreNode&&window.game.readLoreNode(this.nearLoreNode.col,this.nearLoreNode.row);let h=null;for(let y of u){const w=a+y.dx,b=o+y.dy;if(w>=0&&w<i.width&&b>=0&&b<i.height&&(c?c[b*i.width+w]:null)===St.DOOR){h={col:w,row:b};break}}if(h&&this.hasKey&&(i.unlockDoor(h.col,h.row),this.hasKey=!1,window.game&&window.game.onDoorUnlocked&&window.game.onDoorUnlocked(h.col,h.row)),this.dodgeCooldown>0&&(this.dodgeCooldown-=t*1e3),this.attackCooldown>0&&(this.attackCooldown-=t*1e3),this.attackRecovery>0&&(this.attackRecovery-=t*1e3),this.invincibilityTimer>0&&(this.invincibilityTimer-=t*1e3,this.invincibilityTimer<=0&&(this.isInvincible=!1)),this.comboTimer>0&&(this.comboTimer-=t*1e3,this.comboTimer<=0&&(this.comboStep=0)),this.hitComboTimer>0&&(this.hitComboTimer-=t,this.hitComboTimer<=0&&(this.hitComboCount=0)),this.isAttacking&&(this.attackTimer-=t*1e3,this.attackTimer<=0&&(this.isAttacking=!1,this.attackCommitted=!1,this.comboStep===3?(this.attackRecovery=Ct.COMBO_3_RECOVERY_MS,this.comboStep=0,this.comboTimer=0):this.comboStep===2?this.attackRecovery=Ct.COMBO_2_RECOVERY_MS:this.attackRecovery=Ct.COMBO_1_RECOVERY_MS)),this.isDodging)if(this.dodgeTimer-=t*1e3,this.dodgeTimer<=0)this.isDodging=!1,this.isInvincible=!1;else{this.sprite.position.x=this.x,this.sprite.position.z=this.y,this.humanoidGroup.rotation.y+=t*20;return}this.humanoidGroup.rotation.y=0;let f=0,g=0;if(e.isDown("KeyW")&&(g-=1),e.isDown("KeyS")&&(g+=1),e.isDown("KeyA")&&(f-=1),e.isDown("KeyD")&&(f+=1),f!==0&&g!==0){const y=Math.sqrt(f*f+g*g);f/=y,g/=y}this.attackCommitted||(f!==0||g!==0)&&(this.facingAngle=Math.atan2(g,f),f>0?this.facing=0:f<0?this.facing=2:g>0?this.facing=1:g<0&&(this.facing=3)),this.inputBuffer&&(this.inputBuffer.timer-=t*1e3,this.inputBuffer.timer<=0&&(this.inputBuffer=null));const E=e.mouse.clicked&&!this.input_mouse_consumed;if(e.isJustPressed("KeyK")?this.inputBuffer={type:"dodge",timer:200}:(e.isJustPressed("KeyJ")||E)&&(this.inputBuffer={type:"attack",timer:200,isMouse:E},E&&(this.input_mouse_consumed=!0)),this.inputBuffer){if(this.inputBuffer.type==="dodge"&&this.dodgeCooldown<=0&&this.attackRecovery<=0&&!this.isDodging){this.inputBuffer=null,this.isDodging=!0,this.dodgeTimer=ce.DODGE_I_FRAMES*16.6,this.dodgeCooldown=ce.DODGE_COOLDOWN_MS,this.isInvincible=!0;let y=f,w=g;y===0&&w===0&&(this.facing===0&&(y=1),this.facing===1&&(w=1),this.facing===2&&(y=-1),this.facing===3&&(w=-1)),this.vx=y*ce.DODGE_IMPULSE,this.vy=w*ce.DODGE_IMPULSE;return}if(this.inputBuffer.type==="attack"&&this.attackCooldown<=0&&!this.isDodging&&!this.isAttacking){const y=this.inputBuffer.isMouse;if(this.inputBuffer=null,y){const b=e.mouse.x-window.innerWidth/2,R=e.mouse.y-window.innerHeight/2;this.facingAngle=Math.atan2(R,b);const x=Math.PI;this.facingAngle>-x/4&&this.facingAngle<=x/4?this.facing=0:this.facingAngle>x/4&&this.facingAngle<=3*x/4?this.facing=1:this.facingAngle>3*x/4||this.facingAngle<=-3*x/4?this.facing=2:this.facing=3}this.comboStep<3&&this.comboTimer>0?this.comboStep++:this.comboStep=1,this.isAttacking=!0,this.attackCommitted=!0;const w=[0,180,220,320];this.attackTimer=w[this.comboStep],this.attackCooldown=this.comboStep===3?Ct.SLASH_CD_MS*1.5:Ct.SLASH_CD_MS,this.comboTimer=Ct.COMBO_WINDOW_MS,s&&s.activeAttacks.push(Ea.createMeleeHitbox(this,"slash",this.comboStep))}}e.isJustPressed("KeyH")&&this.blood>=20&&this.hp<ce.START_HP&&!this.isDead&&(this.blood=Math.max(0,this.blood-20),this.hp=Math.min(ce.START_HP,this.hp+20),s&&s.particleSystem&&s.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"blood",12));let m=e.isDown("ShiftLeft")?ce.RUN_SPEED:ce.WALK_SPEED;if(this.isBatForm){m=ce.BAT_SPEED,this.humanoidGroup.visible=!1,this.batGroup.visible=!0;const y=Math.sin(Date.now()/150)*1.5;this.sprite.position.y=10+y;const w=Math.sin(Date.now()/80)*.8;this.leftWing.rotation.z=w,this.rightWing.rotation.z=-w}else{if(this.isStarving&&(m*=.7),this.humanoidGroup.visible=!0,this.batGroup.visible=!1,this.sprite.position.y=0,this.isAttacking){this.leftFang.visible=!0,this.rightFang.visible=!0;const y=[0,180,220,320][this.comboStep],w=(y-this.attackTimer)/y;this.comboStep===1?(this.rightArm.rotation.x=-Math.PI/3+w*(Math.PI+Math.PI/3),this.rightArm.rotation.y=-Math.sin(w*Math.PI)*.5):this.comboStep===2?(this.rightArm.rotation.x=-Math.PI/2+w*Math.PI,this.rightArm.rotation.y=-.8+w*1.6,this.torso.rotation.y=Math.sin(w*Math.PI)*.3):(this.rightArm.rotation.x=-Math.PI+w*(Math.PI*1.5),this.rightArm.rotation.y=0,this.torso.rotation.x=Math.sin(w*Math.PI)*.2,this.humanoidGroup.position.z=Math.sin(w*Math.PI)*2)}else if(this.leftFang.visible=!1,this.rightFang.visible=!1,this.torso.rotation.y=0,this.torso.rotation.x=0,this.humanoidGroup.position.z=0,f!==0||g!==0){const y=Date.now()/100,w=e.isDown("ShiftLeft")?1.5:1;this.rightArm.rotation.x=Math.sin(y*w)*.5,this.rightArm.rotation.y=0}else this.rightArm.rotation.x*=.8,this.rightArm.rotation.y*=.8;if(f!==0||g!==0){const y=Date.now()/100,w=e.isDown("ShiftLeft")?1.5:1;this.leftLeg.rotation.x=Math.sin(y*w)*.8,this.rightLeg.rotation.x=-Math.sin(y*w)*.8,this.leftArm.rotation.x=-Math.sin(y*w)*.6,this.cape.rotation.x=.2+Math.abs(Math.sin(y))*.25}else{this.leftLeg.rotation.x*=.8,this.rightLeg.rotation.x*=.8,this.leftArm.rotation.x*=.8;const y=Math.sin(Date.now()/300)*.1;this.head.position.y=13.25+y,this.torso.position.y=8+y*.5,this.leftArm.position.y=8.5+y*.5,this.rightArm.position.y=8.5+y*.5,this.cape.rotation.x=.05+Math.sin(Date.now()/400)*.05}}let M=Math.PI/2-this.facingAngle-this.sprite.rotation.y;M=Math.atan2(Math.sin(M),Math.cos(M)),this.sprite.rotation.y+=M*15*t;let T=1;this.isInvincible&&!this.isDodging?T=Math.floor(Date.now()/100)%2===0?.3:1:this.isDodging?T=.5:this.isStealthHidden&&(T=.4),this.setOpacity(T),this.move(f,g,m,t,i)}setOpacity(t){this.sprite.traverse(e=>{e.isMesh&&(e.material.transparent=t<1,e.material.opacity=t)})}checkTileCollision(t,e,i){const s=qt.TILE_SIZE,r=Math.floor(t/s),a=Math.floor((t+this.width-.1)/s),o=Math.floor(e/s),c=Math.floor((e+this.height-.1)/s);for(let l=o;l<=c;l++)for(let d=r;d<=a;d++)if(i.isSolid(d,l))return!0;return!1}move(t,e,i,s,r){if(t===0&&e===0)return;const a=i*qt.TILE_SIZE,o=this.x+t*a*s;this.checkTileCollision(o,this.y,r)||(this.x=o);const c=this.y+e*a*s;this.checkTileCollision(this.x,c,r)||(this.y=c),this.sprite.position.x=this.x,this.sprite.position.z=this.y}}class am{constructor(t,e,i,s,r="guard",a={}){this.x=t,this.y=e,this.width=16,this.height=16,this.subType=r,this.hp=40,this.maxHp=40,this.isDead=!1,this.isInvincible=!1,this.invincibilityTimer=0,this.vx=0,this.vy=0,this.mass=2,this.isStaggered=!1,this.staggerTimer=0,this.state="UNAWARE",this.alertTimer=0,this.facing=0,this.facingAngle=0,this.speed=30,this.startX=t,this.startY=e,this.patrolRadius=a.patrolRadius!==void 0?a.patrolRadius:qt.TILE_SIZE*3,this.targetX=t+this.patrolRadius,this.targetY=e,this.isAttacking=!1,this.isTelegraphing=!1,this.telegraphTimer=0,this.attackTimer=0,this.attackCooldown=0,this.currentAttack=null,this.strafeTimer=0,this.strafeDir=1,this.sprite=new Si;const o=new Pt(6,6.5,4),c=r==="keykeeper"?13938487:9079439,l=new Qt({color:c});this.torso=new pt(o,l),this.torso.position.set(0,7.5,0),this.torso.castShadow=!0,this.torso.receiveShadow=!0,this.sprite.add(this.torso);const d=new Pt(4,4,4),u=new Qt({color:8026751});this.head=new pt(d,u),this.head.position.set(0,12,0),this.head.castShadow=!0,this.head.receiveShadow=!0,this.sprite.add(this.head);const h=new Pt(3,.6,.4),f=new Ue({color:1118481});this.visor=new pt(h,f),this.visor.position.set(0,.5,2),this.head.add(this.visor);const g=new Pt(2,2,2);this.telegraphMat=new Ue({color:16763904,transparent:!0,opacity:0}),this.telegraphIndicator=new pt(g,this.telegraphMat),this.telegraphIndicator.position.set(0,5,0),this.head.add(this.telegraphIndicator);const E=new Pt(.8,2.5,.8);this.alertMat=new Ue({color:16755200,transparent:!0,opacity:0}),this.alertIndicator=new pt(E,this.alertMat),this.alertIndicator.position.set(0,16,0),this.sprite.add(this.alertIndicator);const m=new Pt(1.8,5.5,1.8),p=new Qt({color:2236965});this.leftArm=new pt(m,p),this.leftArm.position.set(-3.8,8,0),this.leftArm.castShadow=!0,this.sprite.add(this.leftArm),this.rightArm=new pt(m,p),this.rightArm.position.set(3.8,8,0),this.rightArm.castShadow=!0,this.sprite.add(this.rightArm);const M=new Pt(.4,11,.4),T=new Qt({color:6045747});this.handle=new pt(M,T),this.handle.position.set(0,-2.5,1.8),this.handle.rotation.x=Math.PI/2,this.rightArm.add(this.handle);const y=new Pt(.8,2.8,.4),w=new Qt({color:14474460});this.spearTip=new pt(y,w),this.spearTip.position.set(0,-6.9,1.8),this.spearTip.rotation.x=Math.PI/2,this.rightArm.add(this.spearTip);const b=new Pt(2,4.5,2),R=new Qt({color:2236965});this.leftLeg=new pt(b,R),this.leftLeg.position.set(-1.3,2.25,0),this.leftLeg.castShadow=!0,this.leftLeg.receiveShadow=!0,this.sprite.add(this.leftLeg),this.rightLeg=new pt(b,R),this.rightLeg.position.set(1.3,2.25,0),this.rightLeg.castShadow=!0,this.rightLeg.receiveShadow=!0,this.sprite.add(this.rightLeg),this.sprite.position.set(this.x,0,this.y),i.add(this.sprite)}_chooseAttack(t){return t<qt.TILE_SIZE*1?"bash":t<qt.TILE_SIZE*1.5&&Math.random()<.5?"sweep":"thrust"}_getTelegraphTime(t){return t==="thrust"?Ct.ENEMY_THRUST_TELEGRAPH:t==="bash"?Ct.ENEMY_BASH_TELEGRAPH:Ct.ENEMY_SWEEP_TELEGRAPH}_getAttackRange(t){const e=qt.TILE_SIZE;return t==="thrust"?Ct.ENEMY_THRUST_RANGE*e:t==="bash"?Ct.ENEMY_BASH_RANGE*e:Ct.ENEMY_SWEEP_RANGE*e}checkTileCollision(t,e,i){const s=qt.TILE_SIZE,r=Math.floor(t/s),a=Math.floor((t+this.width-.1)/s),o=Math.floor(e/s),c=Math.floor((e+this.height-.1)/s);for(let l=o;l<=c;l++)for(let d=r;d<=a;d++)if(i.isSolid(d,l))return!0;return!1}update(t,e,i,s){if(this.isDead){this.alertMat.opacity=0;return}if(this.state==="SUSPICIOUS"?(this.alertMat.opacity=1,this.alertMat.color.setHex(16755200),this.alertIndicator.position.y=16+Math.sin(Date.now()/150)*.5):this.state==="ALERT"?(this.alertMat.opacity=1,this.alertMat.color.setHex(16711680),this.alertIndicator.position.y=16+Math.sin(Date.now()/100)*.8):this.alertMat.opacity=0,this.isStaggered){const c=Math.sin(Date.now()/60)*.2;this.sprite.rotation.z=c;return}if(this.sprite.rotation.z=0,this.invincibilityTimer>0&&(this.invincibilityTimer-=t*1e3,this.invincibilityTimer<=0&&(this.isInvincible=!1)),this.attackCooldown>0&&(this.attackCooldown-=t),this.isTelegraphing){this.telegraphTimer-=t;const c=this._getTelegraphTime(this.currentAttack),l=1-this.telegraphTimer/c;if(this.telegraphMat.opacity=.5+Math.sin(l*Math.PI*4)*.5,l<.8&&i&&!i.isDead){const d=i.x-this.x,u=i.y-this.y;this.facingAngle=Math.atan2(u,d);const h=Math.PI;this.facingAngle>-h/4&&this.facingAngle<=h/4?this.facing=0:this.facingAngle>h/4&&this.facingAngle<=3*h/4?this.facing=1:this.facingAngle>3*h/4||this.facingAngle<=-3*h/4?this.facing=2:this.facing=3}this.currentAttack==="thrust"?this.rightArm.rotation.x=-Math.PI/2*l:this.currentAttack==="bash"?(this.leftArm.rotation.x=-Math.PI/3*l,this.rightArm.rotation.x=-Math.PI/4*l):(this.rightArm.rotation.x=-Math.PI/2*l,this.torso.rotation.y=-Math.PI/4*l),this.telegraphTimer<=0&&(this.isTelegraphing=!1,this.isAttacking=!0,this.attackTimer=.15,this.telegraphMat.opacity=0,s&&s.activeAttacks.push(Ea.createMeleeHitbox(this,this.currentAttack)));return}if(this.isAttacking){this.attackTimer-=t,this.currentAttack==="thrust"?this.rightArm.rotation.x=-Math.PI/2-this.attackTimer/.15*(Math.PI/2):this.currentAttack==="bash"?(this.leftArm.rotation.x=-Math.PI/2,this.rightArm.rotation.x=Math.PI/4):(this.torso.rotation.y=Math.PI/3,this.rightArm.rotation.x=-Math.PI/3),this.attackTimer<=0&&(this.isAttacking=!1,this.attackCooldown=1.8,this.torso.rotation.y=0);return}let r=!1;if(this.state==="ALERT"&&i&&!i.isDead){const c=Gi(this.x,this.y,i.x,i.y),l=this._chooseAttack(c),d=this._getAttackRange(l);if(c<=d&&this.attackCooldown<=0){this.currentAttack=l,this.isTelegraphing=!0,this.telegraphTimer=this._getTelegraphTime(l);return}if(c<qt.TILE_SIZE*3&&this.attackCooldown>.5){this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeDir*=-1,this.strafeTimer=.8+Math.random()*.6);const u=i.x-this.x,h=i.y-this.y,f=Math.sqrt(u*u+h*h)||1,g=-h/f*this.strafeDir,E=u/f*this.strafeDir,m=this.speed*.6;let p=!1;const M=this.x+g*m*t;this.checkTileCollision(M,this.y,e)||(this.x=M,p=!0);const T=this.y+E*m*t;this.checkTileCollision(this.x,T,e)||(this.y=T,p=!0),p&&(r=!0)}else this.targetX=i.x,this.targetY=i.y}if(this.state==="UNAWARE"||this.state==="ALERT"&&!this.isTelegraphing){const c=Gi(this.x,this.y,this.targetX,this.targetY);if(c<2)this.state==="UNAWARE"&&(this.targetX===this.startX?this.targetX=this.startX+this.patrolRadius:this.targetX=this.startX);else{const l=(this.targetX-this.x)/c,d=(this.targetY-this.y)/c,u=this.state==="ALERT"?this.speed*1.3:this.speed;r=!0,this.facingAngle=Math.atan2(d,l),this.facing=im(this.facingAngle);const h=this.x+l*u*t;this.checkTileCollision(h,this.y,e)||(this.x=h);const f=this.y+d*u*t;this.checkTileCollision(this.x,f,e)||(this.y=f)}}this.sprite.position.x=this.x,this.sprite.position.z=this.y;let o=Math.PI/2-this.facingAngle-this.sprite.rotation.y;if(o=Math.atan2(Math.sin(o),Math.cos(o)),this.sprite.rotation.y+=o*15*t,r){const c=Date.now()/100;this.leftLeg.rotation.x=Math.sin(c)*.7,this.rightLeg.rotation.x=-Math.sin(c)*.7,this.isAttacking||(this.leftArm.rotation.x=-Math.sin(c)*.5,this.rightArm.rotation.x=Math.sin(c)*.5)}else this.leftLeg.rotation.x*=.8,this.rightLeg.rotation.x*=.8,!this.isAttacking&&!this.isTelegraphing&&(this.leftArm.rotation.x*=.8,this.rightArm.rotation.x*=.8);this.isInvincible?this.setColor(16711680):this.isTelegraphing?this.setColor(16763904):this.isAttacking?this.setColor(16766720):this.state==="ALERT"?this.setColor(16746632):this.state==="SUSPICIOUS"?this.setColor(16777130):this.setColor(null)}setColor(t){this.sprite.traverse(e=>{e.isMesh&&e!==this.telegraphIndicator&&(e.userData.originalColor||(e.userData.originalColor=e.material.color.getHex()),t!==null?e.material.color.setHex(t):e.material.color.setHex(e.userData.originalColor))})}}class om{constructor(t){this.player=t,this.player.blood=50,this.player.isStarving=!1,this.batCooldown=0,this.surgeCooldown=0,this.mistCooldown=0,this.novaCooldown=0,this.player.isBatForm=!1,this.batTimer=0,this.player.isSurging=!1,this.surgeTimer=0}update(t,e,i,s,r){const o=(i?i.isDaytime():!0)?ce.BLOOD_DRAIN_RATE_DAY:ce.BLOOD_DRAIN_RATE_NIGHT,c=e.isDown("ShiftLeft")&&(e.isDown("KeyW")||e.isDown("KeyA")||e.isDown("KeyS")||e.isDown("KeyD"))?.5:0;if(this.player.blood-=(o+c)*t,this.player.blood<0&&(this.player.blood=0),this.player.blood>ce.MAX_BLOOD&&(this.player.blood=ce.MAX_BLOOD),this.player.isStarving=this.player.blood===0,e.isDown("KeyE")&&!this.player.isBatForm&&this.player.blood<ce.MAX_BLOOD){for(let l of s)if(l.isDead&&!l.isDrained&&Gi(this.player.x,this.player.y,l.x,l.y)<qt.TILE_SIZE*2){l.isDrained=!0,this.player.blood+=40,this.player.blood>ce.MAX_BLOOD&&(this.player.blood=ce.MAX_BLOOD),this.player.hp+=25,this.player.hp>ce.START_HP&&(this.player.hp=ce.START_HP);break}}this.updateAbilities(t,e,r)}updateAbilities(t,e,i){if(this.batCooldown>0&&(this.batCooldown-=t),this.surgeCooldown>0&&(this.surgeCooldown-=t),this.mistCooldown>0&&(this.mistCooldown-=t),this.novaCooldown>0&&(this.novaCooldown-=t),this.player.isBatForm&&(this.batTimer-=t,this.batTimer<=0&&(this.player.isBatForm=!1)),!this.player.isStarving&&(e.isJustPressed("KeyF")&&this.player.blood>=25&&this.batCooldown<=0&&!this.player.isBatForm&&(this.player.blood-=10,this.player.isBatForm=!0,this.batTimer=5,this.batCooldown=15),e.isJustPressed("KeyG")&&this.player.blood>=75&&this.mistCooldown<=0&&!this.player.isBatForm)){this.player.blood-=20,this.mistCooldown=8;const s=4*qt.TILE_SIZE;let r=0,a=0;this.player.facing===0&&(r=s),this.player.facing===2&&(r=-s),this.player.facing===1&&(a=s),this.player.facing===3&&(a=-s);const o=this.player.x+r,c=this.player.y+a,l=Math.floor((o+this.player.width/2)/qt.TILE_SIZE),d=Math.floor((c+this.player.height/2)/qt.TILE_SIZE);i.isSolid(l,d)||(this.player.x=o,this.player.y=c,this.player.isInvincible=!0,this.player.invincibilityTimer=300)}}}class lm{constructor(){this.time=0,this.cycleDuration=Xi.CYCLE_DURATION_MINS*60,this.dayDuration=this.cycleDuration*Xi.DAY_RATIO,this.nightDuration=this.cycleDuration*Xi.NIGHT_RATIO,this.darknessAlpha=0,this.theme=Ye.getTheme(1)}setTheme(t){this.theme=Ye.getTheme(t),this._applyThemeLighting()}_applyThemeLighting(){if(!this.ambientLight||!this.dirLight)return;const t=this.theme;this.ambientLight.color.setHex(t.ambientColor),this.ambientLight.intensity=t.ambientIntensity,this.dirLight.color.setHex(t.dirColor),this.dirLight.intensity=t.dirIntensity,this.dirLight.position.set(...t.dirPosition),this.playerLight&&this.playerLight.color.setHex(t.playerLightColor)}initLighting(t){this.scene=t;const e=this.theme;this.ambientLight=new jc(e.ambientColor,e.ambientIntensity),t.add(this.ambientLight),this.dirLight=new $c(e.dirColor,e.dirIntensity),this.dirLight.position.set(...e.dirPosition),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=500,this.dirLight.shadow.camera.left=-300,this.dirLight.shadow.camera.right=300,this.dirLight.shadow.camera.top=300,this.dirLight.shadow.camera.bottom=-300,t.add(this.dirLight),this.playerLight=new Kc(e.playerLightColor,0,150),this.playerLight.castShadow=!0,t.add(this.playerLight)}updatePlayerLight(t){this.playerLight&&(this.playerLight.position.set(t.x,20,t.y),this.darknessAlpha>.1?this.playerLight.intensity=this.darknessAlpha*2:this.playerLight.intensity=0)}update(t){if(this.time+=t,this.time>=this.cycleDuration&&(this.time-=this.cycleDuration),this.time<this.dayDuration){const e=this.dayDuration-this.time;if(e<Xi.TRANSITION_SEC){const i=1-e/Xi.TRANSITION_SEC;this.darknessAlpha=i*.8}else this.darknessAlpha=0}else{const e=this.cycleDuration-this.time;if(e<Xi.TRANSITION_SEC){const i=1-e/Xi.TRANSITION_SEC;this.darknessAlpha=.8-i*.8}else this.darknessAlpha=.8}if(this.ambientLight&&this.dirLight){const e=this.theme,i=new At(e.ambientColor),s=new At(e.ambientNightColor);this.ambientLight.color.copy(i).lerp(s,this.darknessAlpha/.8),this.ambientLight.intensity=e.ambientIntensity-this.darknessAlpha*(e.ambientIntensity*.5);const r=new At(e.dirColor),a=new At(e.dirNightColor);this.dirLight.color.copy(r).lerp(a,this.darknessAlpha/.8),this.dirLight.intensity=e.dirIntensity-this.darknessAlpha*(e.dirIntensity*.5)}if(this.scene){const e=new At(this.theme.fogColor),i=new At(197381),s=e.clone().lerp(i,this.darknessAlpha/.8);this.scene.fog&&this.scene.fog.color.copy(s),this.scene.background=s}}isDaytime(){return this.time<this.dayDuration}getCycleProgress(){return this.time/this.cycleDuration}}class cm{constructor(){}update(t,e,i,s){if(e.isDead)return;const o=((s?s.isDaytime():!0)?5:3)*qt.TILE_SIZE;let c=1;e.isBatForm&&(c=.2),e.isStealthHidden&&(c=.05);for(let l of i){if(l.isDead)continue;const d=Gi(l.x,l.y,e.x,e.y),u=o*c;if(d<=u){const h=e.x-l.x,f=e.y-l.y,g=Math.atan2(f,h),E=l.facingAngle!==void 0?l.facingAngle:l.facing===1?Math.PI/2:l.facing===2?Math.PI:l.facing===3?-Math.PI/2:0;let m=Math.abs(g-E);m>Math.PI&&(m=2*Math.PI-m),m<=Math.PI/3?l.state==="UNAWARE"?(l.state="SUSPICIOUS",l.alertTimer=1):l.state==="SUSPICIOUS"&&(l.alertTimer-=t,l.alertTimer<=0&&(l.state="ALERT")):l.state==="SUSPICIOUS"&&(l.alertTimer+=t,l.alertTimer>2&&(l.state="UNAWARE"))}else l.state==="SUSPICIOUS"&&(l.alertTimer+=t,l.alertTimer>2&&(l.state="UNAWARE"));l.state==="ALERT"&&(l.targetX=e.x,l.targetY=e.y)}}}class fr{constructor(t,e,i,s){this.x=t,this.y=e,this.width=32,this.height=32,this.hp=300,this.maxHp=300,this.isDead=!1,this.isInvincible=!1,this.invincibilityTimer=0,this.vx=0,this.vy=0,this.mass=4,this.staggerResistance=!0,this.isStaggered=!1,this.staggerTimer=0,this.phase=1,this.state="IDLE",this.attackCooldown=3,this.currentAttack=null,this.telegraphTimer=0,this.attackTimer=0,this.lastAttack=null,this.hasShield=!1,this.shieldTimer=0,this.shieldCooldown=0,this.chargeDirX=0,this.chargeDirY=0,this.chargeSpeed=0,this.rainPillars=[],this.isEnraged=!1,this.speed=40,this.scene=i,this.sprite=new Si;const r=new Pt(10,14,8),a=new Qt({color:5904408});this.torso=new pt(r,a),this.torso.position.set(0,13,0),this.torso.castShadow=!0,this.torso.receiveShadow=!0,this.sprite.add(this.torso);const o=new Pt(10.4,14.2,2),c=new Qt({color:13938487});this.goldTrim=new pt(o,c),this.goldTrim.position.set(0,13,3.2),this.sprite.add(this.goldTrim);const l=new Pt(7,7,7),d=new Qt({color:15066603});this.head=new pt(l,d),this.head.position.set(0,22.5,0),this.head.castShadow=!0,this.head.receiveShadow=!0,this.sprite.add(this.head);const u=new Pt(1.2,.6,.3),h=new Ue({color:16766720});this.leftBossEye=new pt(u,h),this.leftBossEye.position.set(-1.5,.5,3.6),this.head.add(this.leftBossEye),this.rightBossEye=new pt(u,h),this.rightBossEye.position.set(1.5,.5,3.6),this.head.add(this.rightBossEye);const f=new Pt(7.2,5,7.2),g=new Qt({color:13938487});this.hatBase=new pt(f,g),this.hatBase.position.set(0,4.5,0),this.head.add(this.hatBase);const E=new As(5,6,4),m=new Qt({color:9437184});this.hatPoint=new pt(E,m),this.hatPoint.position.set(0,9,0),this.hatPoint.rotation.y=Math.PI/4,this.head.add(this.hatPoint);const p=new Pt(3,11,3),M=new Qt({color:1579034});this.leftArm=new pt(p,M),this.leftArm.position.set(-6.8,14,0),this.leftArm.castShadow=!0,this.sprite.add(this.leftArm),this.rightArm=new pt(p,M),this.rightArm.position.set(6.8,14,0),this.rightArm.castShadow=!0,this.sprite.add(this.rightArm);const T=new Pt(.8,20,.8),y=new Qt({color:3355443});this.staffHandle=new pt(T,y),this.staffHandle.position.set(0,-4,3),this.staffHandle.rotation.x=Math.PI/2,this.rightArm.add(this.staffHandle);const w=new Pt(3,3,3);this.scepterHeadMat=new Ue({color:16766720}),this.scepterHead=new pt(w,this.scepterHeadMat),this.scepterHead.position.set(0,-13,3),this.scepterHead.rotation.x=Math.PI/2,this.rightArm.add(this.scepterHead);const b=new Ma(22,8,8);this.shieldMat=new Ue({color:16766720,transparent:!0,opacity:0,wireframe:!0,side:$e}),this.shieldMesh=new pt(b,this.shieldMat),this.shieldMesh.position.set(0,12,0),this.sprite.add(this.shieldMesh);const R=new Pt(3.5,7,3.5),x=new Qt({color:1118483});this.leftLeg=new pt(R,x),this.leftLeg.position.set(-2.5,3.5,0),this.leftLeg.castShadow=!0,this.leftLeg.receiveShadow=!0,this.sprite.add(this.leftLeg),this.rightLeg=new pt(R,x),this.rightLeg.position.set(2.5,3.5,0),this.rightLeg.castShadow=!0,this.rightLeg.receiveShadow=!0,this.sprite.add(this.rightLeg),this.sprite.position.set(this.x,0,this.y),i.add(this.sprite)}_getAvailableAttacks(){if(this.phase===1)return["HOLY_SMITE","STAFF_SWEEP","DIVINE_SHIELD"];const t=["HOLY_SMITE","STAFF_SWEEP","HOLY_RAIN","CHARGE"];return this.isEnraged&&t.push("HOLY_RAIN"),t}_chooseAttack(t){const e=this._getAvailableAttacks().filter(i=>i!==this.lastAttack);if(this.hasShield||this.shieldCooldown>0){const i=e.indexOf("DIVINE_SHIELD");i!==-1&&e.splice(i,1)}if(t>qt.TILE_SIZE*4){const i=e.filter(s=>s==="HOLY_RAIN"||s==="CHARGE");if(i.length)return i[Math.floor(Math.random()*i.length)]}return e[Math.floor(Math.random()*e.length)]||"HOLY_SMITE"}update(t,e,i,s){if(this.isDead)return;if(this.isStaggered){const o=Math.sin(Date.now()/40)*.1;this.sprite.rotation.z=o;return}if(this.sprite.rotation.z=0,this.invincibilityTimer>0&&(this.invincibilityTimer-=t*1e3,this.invincibilityTimer<=0&&(this.isInvincible=!1)),this.phase===1&&this.hp<=150&&(this.phase=2,this.speed=55,this.state="SHIELDING",this.hasShield=!0,this.shieldTimer=Ct.BOSS_SHIELD_DURATION*1.5,this.attackCooldown=3,s&&s.particleSystem&&(s.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"boss_transition",40),s.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"holy_pillar",15)),s&&s.camera&&s.camera.shake(12,.8)),!this.isEnraged&&this.hp<=75&&(this.isEnraged=!0,this.speed=70),this.hp<=0){this.isDead=!0;return}this.hasShield&&(this.shieldTimer-=t,this.shieldMat.opacity=.3+Math.sin(Date.now()/200)*.1,this.shieldMesh.rotation.y+=t*2,s&&s.particleSystem&&Math.random()<.15&&s.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"shield_glow",1),this.shieldTimer<=0&&(this.hasShield=!1,this.shieldMat.opacity=0,this.shieldCooldown=10)),this.shieldCooldown>0&&(this.shieldCooldown-=t);for(let o=this.rainPillars.length-1;o>=0;o--){const c=this.rainPillars[o];c.timer-=t,c.timer<=0&&!c.exploded&&(c.exploded=!0,s&&(s.activeAttacks.push(Combat.createAoEHitbox(this,c.x-16,c.y-16,32,32,Ct.BOSS_RAIN_DMG,"holy",.15)),s.particleSystem&&s.particleSystem.spawn(c.x,c.y,"holy_pillar",8),s.camera&&s.camera.shake(3,.15))),c.timer<=-.5&&this.rainPillars.splice(o,1)}const r=Gi(this.x,this.y,e.x,e.y);let a=!1;switch(this.state){case"IDLE":r<qt.TILE_SIZE*10&&(this.state="CHASING");break;case"CHASING":if(this.attackCooldown-=t,this.attackCooldown<=0){const o=this._chooseAttack(r);if(this.currentAttack=o,this.lastAttack=o,o==="DIVINE_SHIELD")this.state="SHIELDING",this.hasShield=!0,this.shieldTimer=Ct.BOSS_SHIELD_DURATION,this.attackCooldown=2;else if(o==="CHARGE"){this.state="TELEGRAPHING",this.telegraphTimer=Ct.BOSS_CHARGE_TELEGRAPH;const c=Gi(this.x,this.y,e.x,e.y)||1;this.chargeDirX=(e.x-this.x)/c,this.chargeDirY=(e.y-this.y)/c}else this.state="TELEGRAPHING",o==="HOLY_SMITE"?this.telegraphTimer=Ct.BOSS_SMITE_TELEGRAPH:o==="STAFF_SWEEP"?this.telegraphTimer=Ct.BOSS_SWEEP_TELEGRAPH:o==="HOLY_RAIN"&&(this.telegraphTimer=Ct.BOSS_RAIN_TELEGRAPH)}else if(r>qt.TILE_SIZE*2){const o=(e.x-this.x)/r,c=(e.y-this.y)/r;this.x+=o*this.speed*t,this.y+=c*this.speed*t,a=!0}break;case"TELEGRAPHING":if(this.telegraphTimer-=t,this.currentAttack==="HOLY_SMITE"){const o=Date.now()/40;this.rightArm.rotation.x=-Math.PI+Math.sin(o)*.4,this.rightArm.rotation.y=Math.cos(o)*.4,this.scepterHeadMat.color.setHSL(.12,1,.5+Math.sin(o)*.3),s&&s.particleSystem&&Math.random()<.2&&s.particleSystem.spawn(this.x+(Math.random()-.5)*48,this.y+(Math.random()-.5)*48,"holy_pillar",1)}else if(this.currentAttack==="STAFF_SWEEP"){const o=1-this.telegraphTimer/Ct.BOSS_SWEEP_TELEGRAPH;this.rightArm.rotation.x=-Math.PI/2*o,this.torso.rotation.y=-Math.PI/3*o}else if(this.currentAttack==="CHARGE"){const o=1-this.telegraphTimer/Ct.BOSS_CHARGE_TELEGRAPH;this.torso.rotation.x=-.3*o,this.sprite.position.y=2*o}else this.currentAttack==="HOLY_RAIN"&&(this.rightArm.rotation.x=-Math.PI,this.leftArm.rotation.x=-Math.PI,s&&s.particleSystem&&Math.random()<.3&&s.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"holy_pillar",1));this.telegraphTimer<=0&&(this.state="ATTACKING",this.attackTimer=.3,this._executeAttack(e,s));break;case"ATTACKING":this.attackTimer-=t,this.currentAttack==="CHARGE"&&(this.x+=this.chargeDirX*300*t,this.y+=this.chargeDirY*300*t,a=!0),this.attackTimer<=0&&(this.state="CHASING",this.attackCooldown=this.isEnraged?1.5:this.phase===2?2.5:4,this.torso.rotation.y=0,this.torso.rotation.x=0,this.sprite.position.y=0,this.scepterHeadMat.color.setHex(16766720));break;case"SHIELDING":this.hasShield||(this.state="CHASING",this.attackCooldown=2);break}if(this.sprite.position.x=this.x,this.sprite.position.z=this.y,e&&!e.isDead&&this.state!=="CHARGING"){let c=Math.atan2(e.x-this.x,e.y-this.y)-this.sprite.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),this.sprite.rotation.y+=c*8*t}if(a){const o=Date.now()/150;this.leftLeg.rotation.x=Math.sin(o)*.5,this.rightLeg.rotation.x=-Math.sin(o)*.5,this.state==="CHASING"&&(this.leftArm.rotation.x=-Math.sin(o)*.3,this.rightArm.rotation.x=Math.sin(o)*.3,this.rightArm.rotation.y=0)}else this.leftLeg.rotation.x*=.8,this.rightLeg.rotation.x*=.8,(this.state==="IDLE"||this.state==="CHASING"||this.state==="SHIELDING")&&(this.leftArm.rotation.x*=.8,this.rightArm.rotation.x*=.8,this.rightArm.rotation.y*=.8);this.isInvincible?this.setColor(16711680):this.state==="TELEGRAPHING"?this.setColor(16763904):this.state==="ATTACKING"?this.setColor(16766720):this.isEnraged?this.setColor(16777215):this.hasShield?this.setColor(16766720):this.setColor(null)}_executeAttack(t,e){if(!e)return;const i=qt.TILE_SIZE;switch(this.currentAttack){case"HOLY_SMITE":e.activeAttacks.push(Combat.createAoEHitbox(this,this.x-i,this.y-i,this.width+i*2,this.height+i*2,Ct.BOSS_SMITE_DMG,"holy",.2)),e.particleSystem&&(e.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"consecrate",5),e.particleSystem.spawn(this.x+this.width/2,this.y+this.height/2,"holy_pillar",10)),e.camera&&e.camera.shake(6,.3);break;case"STAFF_SWEEP":this.facing=1;const s=Combat.createMeleeHitbox(this,"sweep");s.damage=Ct.BOSS_SWEEP_DMG,s.arcDeg=270,s.range=i*2.5,s.width=i*5,s.height=i*5,s.x=this.x+this.width/2-i*2.5,s.y=this.y+this.height/2-i*2.5,e.activeAttacks.push(s),e.camera&&e.camera.shake(4,.2);break;case"CHARGE":this.attackTimer=.4,e.activeAttacks.push(Combat.createAoEHitbox(this,this.x-4,this.y-4,this.width+8,this.height+8,Ct.BOSS_CHARGE_DMG,"holy",.4)),e.camera&&e.camera.shake(7,.3);break;case"HOLY_RAIN":this.attackTimer=.5;const r=this.isEnraged?7:5;for(let a=0;a<r;a++){const o=t.x+(Math.random()-.5)*i*8,c=t.y+(Math.random()-.5)*i*8;this.rainPillars.push({x:o,y:c,timer:Ct.BOSS_RAIN_TELEGRAPH+a*.15,exploded:!1}),e.particleSystem&&e.particleSystem.spawn(o,c,"consecrate",2)}break}}setColor(t){this.sprite.traverse(e=>{e.isMesh&&e!==this.shieldMesh&&(e.userData.originalColor||(e.userData.originalColor=e.material.color.getHex()),t!==null?e.material.color.setHex(t):e.material.color.setHex(e.userData.originalColor))})}}class hm{constructor(){this.healthValue=document.getElementById("health-value"),this.bloodFill=document.getElementById("blood-fill"),this.timeValue=document.getElementById("time-value"),this.abilitiesContainer=document.getElementById("abilities-container"),this.comboDisplay=document.getElementById("combo-display"),this.slots=[];const t=["J","F","G","K"],e=["Slash","Bat","Mist","Roll"];for(let i=0;i<4;i++){const s=document.createElement("div");s.className="ability-slot";const r=document.createElement("div");r.className="ability-key",r.innerText=t[i];const a=document.createElement("div");a.className="ability-name",a.innerText=e[i];const o=document.createElement("div");o.className="cooldown-overlay",s.appendChild(r),s.appendChild(a),s.appendChild(o),this.abilitiesContainer.appendChild(s),this.slots.push({root:s,cdOverlay:o})}}setIcons(t){t.ui.heart&&(document.getElementById("heart-icon").style.backgroundImage=`url(${t.ui.heart.toDataURL()})`),t.ui.blood&&(document.getElementById("blood-icon").style.backgroundImage=`url(${t.ui.blood.toDataURL()})`)}update(t){const e=t.player,i=t.bloodMeter;this.healthValue.innerText=`${Math.floor(e.hp)} / ${ce.START_HP}`;const s=e.blood/ce.MAX_BLOOD;this.bloodFill.style.width=`${s*100}%`,this.bloodFill.style.backgroundColor=e.isStarving?"#400":"#b00";const r=t.dayNight.isDaytime();if(this.timeValue.innerText=r?"DAYTIME":"NIGHT",this.timeValue.style.color=r?"#f39c12":"#8e44ad",e.hitComboCount!==void 0&&e.hitComboCount>0){if(this.comboDisplay){this.comboDisplay.style.display="block",this.comboDisplay.innerText=`${e.hitComboCount}x COMBO`;const o=Math.min(22,14+e.hitComboCount);this.comboDisplay.style.fontSize=`${o}px`}}else this.comboDisplay&&(this.comboDisplay.style.display="none");const a=[{cd:e.attackCooldown,maxCd:Ct.SLASH_CD_MS,active:!0},{cd:i.batCooldown,maxCd:15,active:e.blood>=25},{cd:i.mistCooldown,maxCd:8,active:e.blood>=75},{cd:e.dodgeCooldown,maxCd:ce.DODGE_COOLDOWN_MS,active:!0}];for(let o=0;o<4;o++){const c=a[o],l=this.slots[o];if(c.active?l.root.classList.add("active"):l.root.classList.remove("active"),c.cd>0){const d=c.cd/c.maxCd;l.cdOverlay.style.height=`${d*100}%`}else l.cdOverlay.style.height="0%"}}}class dm{constructor(t){this.scene=t,this.particles=[],this.planeGeo=new bn(1,1),this.boxGeo=new Pt(1,1,1)}spawn(t,e,i,s){for(let r=0;r<s;r++){let a=this._createParticle(t,e,i);a&&(this.scene.add(a.mesh),this.particles.push(a))}}_createParticle(t,e,i){let s,r,a,o,c,l,d,u,h;const f=()=>Math.random()-.5;switch(i){case"blood":s=new At().setHSL(0,.8,.15+Math.random()*.15),r=1.5+Math.random()*2.5,a=.8+Math.random()*.6,o=f()*80,c=30+Math.random()*40,l=f()*80,d="gravity",u=this.planeGeo,h=6+Math.random()*6;break;case"hit":s=new At(16777215),r=1+Math.random()*2,a=.15+Math.random()*.1,o=f()*120,c=f()*120,l=f()*120,d="spark",u=this.planeGeo,h=8;break;case"slash_trail":s=new At().setHSL(0,.9,.45+Math.random()*.1),r=2+Math.random()*3,a=.2+Math.random()*.15,o=f()*30,c=f()*20,l=f()*30,d="fade",u=this.planeGeo,h=8+Math.random()*6;break;case"holy_pillar":s=new At().setHSL(.12,.9,.5+Math.random()*.2),r=1.5+Math.random()*2,a=.6+Math.random()*.4,o=f()*15,c=40+Math.random()*60,l=f()*15,d="rise",u=this.planeGeo,h=0;break;case"consecrate":s=new At().setHSL(.12,.8,.4+Math.random()*.2),r=3+Math.random()*4,a=2+Math.random()*1,o=f()*5,c=1+Math.random()*3,l=f()*5,d="ground_glow",u=this.planeGeo,h=.2;break;case"stagger_stars":s=new At(16777215),r=.8+Math.random()*1,a=.4+Math.random()*.2;const M=Math.random()*Math.PI*2,T=20+Math.random()*30;o=Math.cos(M)*T,c=15+Math.random()*20,l=Math.sin(M)*T,d="spark",u=this.boxGeo,h=16;break;case"snow":s=new At().setHSL(.6,.1,.85+Math.random()*.15),r=.8+Math.random()*1.2,a=3+Math.random()*2,o=f()*8+3,c=-(4+Math.random()*4),l=f()*8,d="float",u=this.boxGeo,h=40+Math.random()*30;break;case"embers":s=new At().setHSL(.05+Math.random()*.05,.9,.4+Math.random()*.2),r=.5+Math.random()*1.2,a=1.5+Math.random()*2,o=f()*10,c=15+Math.random()*25,l=f()*10,d="rise",u=this.boxGeo,h=0;break;case"void":s=new At().setHSL(.75+Math.random()*.1,.6,.3+Math.random()*.2),r=1+Math.random()*2,a=2+Math.random()*3,o=f()*6,c=f()*8,l=f()*6,d="float",u=this.boxGeo,h=5+Math.random()*25;break;case"dust":s=new At().setHSL(.08,.3,.3+Math.random()*.1),r=.5+Math.random()*.8,a=2+Math.random()*2,o=f()*4,c=f()*2+1,l=f()*4,d="float",u=this.boxGeo,h=2+Math.random()*15;break;case"boss_transition":s=new At().setHSL(.1,1,.5+Math.random()*.2),r=2+Math.random()*4,a=1+Math.random()*.5;const y=Math.random()*Math.PI*2,w=40+Math.random()*80;o=Math.cos(y)*w,c=20+Math.random()*40,l=Math.sin(y)*w,d="gravity",u=this.planeGeo,h=10;break;case"shield_glow":s=new At().setHSL(.12,.9,.6+Math.random()*.2),r=2+Math.random()*3,a=.3+Math.random()*.3;const b=Math.random()*Math.PI*2,R=15+Math.random()*10;o=Math.cos(b)*5,c=5+Math.random()*10,l=Math.sin(b)*5,d="fade",u=this.planeGeo,h=5+Math.random()*15,t+=Math.cos(b)*R,e+=Math.sin(b)*R;break;default:return null}const g=new Ue({color:s,transparent:!0,opacity:1,depthWrite:!1,side:$e}),E=new pt(u,g);E.scale.set(r,r,r);const m=t+(Math.random()-.5)*12,p=e+(Math.random()-.5)*12;return E.position.set(m,h,p),{mesh:E,x:m,y:h,z:p,vx:o,vy:c,vz:l,life:a,maxLife:a,size:r,type:d}}update(t){for(let e=this.particles.length-1;e>=0;e--){const i=this.particles[e];if(i.life-=t,i.life<=0){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.particles.splice(e,1);continue}switch(i.type){case"gravity":i.vy-=300*t,i.y<.1&&(i.y=.1,i.vy=0,i.vx*=.5,i.vz*=.5);break;case"spark":i.vx*=1-6*t,i.vy*=1-6*t,i.vz*=1-6*t;break;case"fade":i.vx*=1-4*t,i.vy*=1-4*t,i.vz*=1-4*t;break;case"rise":i.vx*=1-2*t,i.vz*=1-2*t,i.vx+=Math.sin(Date.now()/200+e)*2;break;case"ground_glow":i.vx*=1-3*t,i.vz*=1-3*t;break;case"float":i.vx+=Math.sin(Date.now()/500+e*.7)*.5,i.vz+=Math.cos(Date.now()/600+e*1.3)*.5;break}i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.mesh.position.set(i.x,i.y,i.z);const s=i.life/i.maxLife;if(i.mesh.material.opacity=Math.max(0,s),i.type==="ground_glow"){const r=1+Math.sin(Date.now()/200)*.2;i.mesh.scale.set(i.size*r,i.size*r,1)}i.mesh.lookAt(i.mesh.position.x,150,i.mesh.position.z+150)}}clear(){for(let t of this.particles)this.scene.remove(t.mesh),t.mesh.material.dispose();this.particles=[]}}class fm{constructor(t){this.canvas=t,this.currentThemeId=1,this.renderer=new $p({canvas:this.canvas,antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fo,this.scene=new Rc;const e=Ye.getTheme(this.currentThemeId);this.scene.background=new At(e.bgColor),this.scene.fog=new bs(e.fogColor,e.fogDensity),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera&&this.camera.threeCamera&&(this.camera.threeCamera.aspect=window.innerWidth/window.innerHeight,this.camera.threeCamera.updateProjectionMatrix())}),this.input=new jp,this.camera=new Jp,this.assetGen=new Qp,this.assetGen.generateAll(this.currentThemeId),this.dayNight=new lm,this.dayNight.setTheme(this.currentThemeId),this.dayNight.initLighting(this.scene),this.state=vi.MENU,this.lastTime=performance.now(),this.player=new rm(0,0,this.scene,this.assetGen),this.combatSystem=new Ea,this.bloodMeter=new om(this.player),this.stealthSystem=new cm,this.particleSystem=new dm(this.scene),this.combatSystem.particleSystem=this.particleSystem,this.combatSystem.camera=this.camera,this.hud=new hm,this.hud.setIcons(this.assetGen),this.entities=[],this.envParticleTimer=0,this.loadLevel(1)}setTheme(t){this.currentThemeId=t;const e=Ye.getTheme(t);this.scene.background=new At(e.bgColor),this.scene.fog=new bs(e.fogColor,e.fogDensity),this.dayNight.setTheme(t)}loadLevel(t){this.currentLevelId=t;const e=Io[t];if(!e)return;this.setTheme(e.themeId);const[i,s]=e.buildLayers(),r={width:e.width,height:e.height,layers:[i,s]};if(this.tileMap){const h=[];this.scene.traverse(f=>{if(f.isMesh&&f!==this.player.sprite&&!f.isLight&&!f.isDirectionalLight){let g=f,E=!1;for(;g;){if(g===this.player.sprite){E=!0;break}g=g.parent}E||h.push(f)}});for(let f of h)this.scene.remove(f),f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material.forEach(g=>g.dispose()):f.material.dispose())}this.tileMap=new tm(r,this.assetGen,this.scene);const a=e.playerSpawn.x*qt.TILE_SIZE,o=e.playerSpawn.y*qt.TILE_SIZE;this.player.x=a,this.player.y=o,this.player.sprite.position.set(a,0,o),this.player.hasKey=!1,this.player.isStealthHidden=!1,this.player.nearLoreNode=null,this.player.stealthAssassinations=0;for(let h of this.entities)h.sprite&&(this.scene.remove(h.sprite),h.sprite.traverse(f=>{f.isMesh&&(f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material.forEach(g=>g.dispose()):f.material.dispose()))}));this.entities=[];for(let h of e.spawns){const f=h.x*qt.TILE_SIZE,g=h.y*qt.TILE_SIZE;h.type==="boss"?this.entities.push(new fr(f,g,this.scene,this.assetGen)):h.type==="enemy"&&this.entities.push(new am(f,g,this.scene,this.assetGen,h.subType,h))}this.objectives=JSON.parse(JSON.stringify(e.objectives)),this.updateObjectivesUI(),this.camera.x=this.player.x+this.player.width/2,this.camera.z=this.player.y+this.player.height/2,this.camera.threeCamera.position.x=this.camera.x+this.camera.cameraOffset.x,this.camera.threeCamera.position.y=this.camera.cameraOffset.y,this.camera.threeCamera.position.z=this.camera.z+this.camera.cameraOffset.z,this.camera.threeCamera.lookAt(this.camera.x,0,this.camera.z);const c=document.querySelector(".level-chapter"),l=document.querySelector(".level-title"),d=document.querySelector(".level-desc");c&&(c.innerText=e.chapter||""),l&&(l.innerText=e.name),d&&(d.innerText=e.introText);const u=document.getElementById("victory-retry-btn");u&&(u.innerText=this.currentLevelId<5?"Next Level":"Start Anew")}updateObjectivesUI(){const t=document.getElementById("objectives-list");if(t){t.innerHTML="";for(let e of this.objectives){const i=document.createElement("div");i.style.display="flex",i.style.alignItems="center",i.style.gap="8px";const s=document.createElement("span");s.style.width="8px",s.style.height="8px",s.style.border="1px solid #e74c3c",s.style.display="inline-block",e.completed?(s.style.background="#e74c3c",i.style.textDecoration="line-through",i.style.color="#71717a"):s.style.background="transparent";const r=document.createElement("span");r.innerText=e.text+(e.required?"":" (Optional)"),i.appendChild(s),i.appendChild(r),t.appendChild(i)}}}completeObjective(t){const e=this.objectives.find(i=>i.id===t);e&&!e.completed&&(e.completed=!0,this.updateObjectivesUI(),this.particleSystem&&this.particleSystem.spawn(this.player.x,this.player.y,"embers",8))}spawnKeyAt(t,e){const i=qt.TILE_SIZE,s=e*this.tileMap.width+t;this.tileMap.layers[1][s]=TILE_TYPES.KEY;const r={};for(let c in this.assetGen.tiles)r[c]=new Qt({map:this.assetGen.tiles[c]});const a=new Pt(i*.4,i*.1,i*.4);a.translate(0,.2,0);const o=new pt(a,r[TILE_TYPES.KEY]);o.position.set(t*i,.2,e*i),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o),this.tileMap.keyMeshes[`${t},${e}`]=o,this.particleSystem&&this.particleSystem.spawn(t*i,e*i,"embers",5)}onKeyPickedUp(){this.completeObjective("find_key"),this.particleSystem&&this.particleSystem.spawn(this.player.x,this.player.y,"embers",15)}onDoorUnlocked(t,e){if(this.completeObjective("unlock_gate"),this.particleSystem&&t!==void 0&&e!==void 0){const i=t*qt.TILE_SIZE+qt.TILE_SIZE/2,s=e*qt.TILE_SIZE+qt.TILE_SIZE/2;this.particleSystem.spawn(i,s,"embers",25)}else this.particleSystem&&this.particleSystem.spawn(this.player.x,this.player.y,"embers",15)}onStealthAssassination(){this.objectives.find(e=>e.id==="stealth_bonus")&&this.player.stealthAssassinations>=2&&this.completeObjective("stealth_bonus")}readLoreNode(t,e){const i=Io[this.currentLevelId];if(!i)return;const s=i.spawns?i.spawns.find(a=>a.type==="lore_node"&&a.x===t&&a.y===e):null,r=s?s.text:"A dusty, crumbling gravestone with faded crimson markings. You feel a strange pulse of ancient power...";this.showLoreDialog(r),this.tileMap&&this.tileMap.fadeLoreNode(t,e),this.completeObjective("read_lore")}showLoreDialog(t){const e=document.getElementById("lore-modal"),i=document.getElementById("lore-text");e&&i&&(i.innerText=t,e.classList.add("visible"))}start(){requestAnimationFrame(t=>this.loop(t))}restart(){this.player.hp=ce.START_HP,this.player.blood=50,this.player.isStarving=!1,this.player.isDead=!1,this.player.isBatForm=!1,this.player.isDodging=!1,this.player.isInvincible=!1,this.player.invincibilityTimer=0,this.player.vx=0,this.player.vy=0,this.player.isStaggered=!1,this.player.staggerTimer=0,this.player.comboStep=0,this.player.comboTimer=0,this.player.isAttacking=!1,this.player.attackCooldown=0,this.player.attackRecovery=0,this.player.humanoidGroup.visible=!0,this.player.batGroup.visible=!1,this.player.setOpacity(1),this.dayNight.time=0,this.dayNight.darknessAlpha=0,this.dayNight.updatePlayerLight(this.player),this.loadLevel(this.currentLevelId),this.combatSystem.activeAttacks=[],this.particleSystem.clear(),document.getElementById("game-over-screen").classList.remove("visible"),document.getElementById("victory-screen").classList.remove("visible")}startPlaying(){this.restart(),this.state=vi.PLAYING,this.lastTime=performance.now(),document.getElementById("hud-layer").style.display="flex"}loop(t){const e=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t,this.update(e),this.render(),this.input.update(),requestAnimationFrame(i=>this.loop(i))}update(t){if(this.state!==vi.PLAYING)return;this.player.update(t,this.input,this.tileMap,this.combatSystem),this.bloodMeter.update(t,this.input,this.dayNight,this.entities,this.tileMap),this.dayNight.update(t),this.stealthSystem.update(t,this.player,this.entities,this.dayNight);for(let r of this.entities)r instanceof fr?r.update(t,this.player,this.tileMap,this.combatSystem):r.update(t,this.tileMap,this.player,this.combatSystem);const e=[this.player,...this.entities];this.combatSystem.update(t,e,this.tileMap),this.particleSystem.update(t),this._spawnEnvParticles(t),this.camera.update(this.player.x+this.player.width/2,this.player.y+this.player.height/2,t),this.dayNight.updatePlayerLight(this.player),this.hud.update(this),(this.player.hp<=0||this.player.isDead)&&(this.state=vi.GAME_OVER,document.getElementById("game-over-screen").classList.add("visible"),document.getElementById("hud-layer").style.display="none");const i=this.entities.find(r=>r.subType&&r.subType.startsWith("boss_")||r instanceof fr);if(i&&i.isDead){const r=this.objectives.find(a=>a.id.startsWith("slay_")||a.id==="assassinate_aldric");r&&this.completeObjective(r.id)}if(this.objectives&&this.objectives.filter(r=>r.required).every(r=>r.completed)){this.state=vi.VICTORY,document.getElementById("victory-screen").classList.add("visible"),document.getElementById("hud-layer").style.display="none";const r=document.getElementById("victory-retry-btn");r&&(r.innerText=this.currentLevelId<5?"Next Level":"Start Anew")}}_spawnEnvParticles(t){if(this.envParticleTimer-=t,this.envParticleTimer>0)return;this.envParticleTimer=.5;const i=Ye.getTheme(this.currentThemeId).envParticles.type,r={rain:null,dust:"dust",snow:"snow",embers:"embers",void:"void"}[i];if(!r)return;const a=this.player.x+(Math.random()-.5)*200,o=this.player.y+(Math.random()-.5)*200;this.particleSystem.spawn(a,o,r,2)}render(){if(this.state===vi.PLAYING)if(this.player.isStarving){const t=Math.abs(Math.sin(Date.now()/300));document.getElementById("hud-layer").style.boxShadow=`inset 0 0 ${100+t*100}px rgba(255,0,0,${.3*t})`}else document.getElementById("hud-layer").style.boxShadow="none";this.renderer.render(this.scene,this.camera.threeCamera)}}class um{constructor(){this.slides=[{title:"The Nobleman",text:"Lord Vaelis Draven was once a nobleman of the Silver Court — respected, feared, and fiercely loyal to Dusk Hollow. His family had protected these lands for seven generations.",colors:{bg1:"#1a1408",bg2:"#0a0a06",accent:"#d4af37",mood:"warm"}},{title:"The Betrayal",text:"But the Cathedral of the Sacred Dawn saw heresy in his bloodline. Brother Aldric led the inquisition. They came at dawn — with fire, silver chains, and righteous fury.",colors:{bg1:"#1a0808",bg2:"#080404",accent:"#ff4422",mood:"fire"}},{title:"The Curse",text:'In the dungeons beneath the cathedral, an ancient prisoner whispered from the dark: "Drink, and you shall never die." Lord Draven drank. The curse was sealed in blood.',colors:{bg1:"#0a0004",bg2:"#040008",accent:"#cc0000",mood:"blood"}},{title:"The Awakening",text:"Three centuries passed in dreamless slumber. The cathedral still stands. Brother Aldric's holy order still hunts the creatures of the night. But tonight, the oldest vampire in Dusk Hollow opens his eyes.",colors:{bg1:"#080810",bg2:"#04040a",accent:"#e74c3c",mood:"dark"}},{title:"Vengeance",text:"The hunt begins. The blood debt must be paid.",colors:{bg1:"#0a0a0a",bg2:"#060608",accent:"#ff1122",mood:"crimson"}}],this.currentSlide=0,this.isActive=!1,this.onComplete=null,this.typewriterIndex=0,this.typewriterTimer=0,this.typewriterSpeed=35,this.textComplete=!1,this.slideAlpha=0,this.fadeState="in",this._buildDOM()}_buildDOM(){this.container=document.getElementById("story-prologue"),this.canvas=document.getElementById("story-canvas"),this.ctx=this.canvas.getContext("2d"),this.titleEl=document.getElementById("story-title"),this.textEl=document.getElementById("story-text"),this.skipBtn=document.getElementById("story-skip-btn"),this.advancePrompt=document.getElementById("story-advance"),this._resizeCanvas(),window.addEventListener("resize",()=>this._resizeCanvas()),this.container.addEventListener("click",t=>{t.target!==this.skipBtn&&this._advance()}),this.skipBtn.addEventListener("click",t=>{t.stopPropagation(),this._complete()}),this._keyHandler=t=>{this.isActive&&(t.code==="Space"||t.code==="Enter"?this._advance():t.code==="Escape"&&this._complete())},window.addEventListener("keydown",this._keyHandler)}_resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}start(t){this.onComplete=t,this.isActive=!0,this.currentSlide=0,this.container.classList.add("visible"),this._showSlide(0),this._startAnimation()}_advance(){if(this.isActive){if(!this.textComplete){const t=this.slides[this.currentSlide];this.textEl.textContent=t.text,this.typewriterIndex=t.text.length,this.textComplete=!0,this.advancePrompt.style.opacity="1";return}this.currentSlide<this.slides.length-1?this.fadeState="out":this._complete()}}_showSlide(t){const e=this.slides[t];this.titleEl.textContent=e.title,this.titleEl.style.color=e.colors.accent,this.textEl.textContent="",this.typewriterIndex=0,this.typewriterTimer=0,this.textComplete=!1,this.slideAlpha=0,this.fadeState="in",this.advancePrompt.style.opacity="0"}_complete(){this.isActive=!1,this.container.classList.remove("visible"),this.onComplete&&this.onComplete()}_startAnimation(){const t=()=>{this.isActive&&(this._updateFrame(),requestAnimationFrame(t))};requestAnimationFrame(t)}_updateFrame(){const t=this.slides[this.currentSlide];if(this.fadeState==="in"?(this.slideAlpha=Math.min(1,this.slideAlpha+.02),this.slideAlpha>=1&&(this.fadeState="hold")):this.fadeState==="out"&&(this.slideAlpha=Math.max(0,this.slideAlpha-.03),this.slideAlpha<=0&&(this.currentSlide++,this._showSlide(this.currentSlide))),!this.textComplete&&this.fadeState==="hold"){for(this.typewriterTimer+=16;this.typewriterTimer>=this.typewriterSpeed&&this.typewriterIndex<t.text.length;)this.typewriterIndex++,this.typewriterTimer-=this.typewriterSpeed;this.textEl.textContent=t.text.substring(0,this.typewriterIndex),this.typewriterIndex>=t.text.length&&(this.textComplete=!0,this.advancePrompt.style.opacity="1")}this._renderBackground(t),this.container.style.opacity=this.slideAlpha}_renderBackground(t){const e=this.canvas.width,i=this.canvas.height,s=this.ctx;s.clearRect(0,0,e,i);const r=s.createLinearGradient(0,0,0,i);r.addColorStop(0,t.colors.bg1),r.addColorStop(1,t.colors.bg2),s.fillStyle=r,s.fillRect(0,0,e,i);const a=Date.now()/1e3;switch(t.colors.mood){case"warm":this._drawNobleScene(s,e,i,a,t.colors.accent);break;case"fire":this._drawBetrayalScene(s,e,i,a,t.colors.accent);break;case"blood":this._drawCurseScene(s,e,i,a,t.colors.accent);break;case"dark":this._drawAwakeningScene(s,e,i,a,t.colors.accent);break;case"crimson":this._drawVengeanceScene(s,e,i,a,t.colors.accent);break}const o=s.createRadialGradient(e/2,i/2,i*.3,e/2,i/2,i*.9);o.addColorStop(0,"transparent"),o.addColorStop(1,"rgba(0,0,0,0.8)"),s.fillStyle=o,s.fillRect(0,0,e,i)}_drawNobleScene(t,e,i,s,r){t.fillStyle="#0c0a06",t.fillRect(0,i*.72,e,i*.28);const a=e*.3,o=i*.35,c=e*.4,l=i*.37;t.fillRect(a,o,c,l),t.fillRect(a-30,o+40,40,l-40),t.fillRect(a+c-10,o+40,40,l-40),t.fillStyle=r,t.globalAlpha=.4+Math.sin(s*2)*.1;for(let d=0;d<4;d++)for(let u=0;u<2;u++)t.fillRect(a+40+d*(c-80)/3,o+50+u*80,20,30);t.globalAlpha=1,this._drawFigure(t,e*.5,i*.68,1,"#080604"),this._drawStars(t,e,i,s,"rgba(212, 175, 55, 0.3)")}_drawBetrayalScene(t,e,i,s,r){const a=t.createRadialGradient(e*.5,i*.6,0,e*.5,i*.6,i*.5);a.addColorStop(0,"rgba(255, 68, 34, 0.15)"),a.addColorStop(1,"transparent"),t.fillStyle=a,t.fillRect(0,0,e,i),t.fillStyle="#0a0404",t.fillRect(0,i*.72,e,i*.28);const o=e*.5,c=e*.3;t.fillRect(o-c/2,i*.3,c,i*.42),t.beginPath(),t.moveTo(o-c/2,i*.3),t.lineTo(o,i*.1),t.lineTo(o+c/2,i*.3),t.fill(),t.fillStyle=r,t.globalAlpha=.6+Math.sin(s*3)*.2,t.fillRect(o-3,i*.12,6,25),t.fillRect(o-10,i*.16,20,5),t.globalAlpha=1;for(let l=0;l<5;l++)this._drawFigure(t,e*.2+l*30,i*.7-l*3,.7,"#0c0606");for(let l=0;l<8;l++){const d=e*.3+Math.sin(s*2+l)*e*.2,u=i*.6+Math.cos(s*3+l*.5)*20;t.fillStyle=r,t.globalAlpha=.3+Math.sin(s*4+l)*.2,t.fillRect(d,u,3,3)}t.globalAlpha=1}_drawCurseScene(t,e,i,s,r){t.fillStyle="#020004",t.fillRect(0,0,e,i);const a=t.createRadialGradient(e*.6,i*.4,0,e*.6,i*.4,i*.3);a.addColorStop(0,"rgba(204, 0, 0, 0.08)"),a.addColorStop(1,"transparent"),t.fillStyle=a,t.fillRect(0,0,e,i),t.fillStyle=r,t.globalAlpha=.5+Math.sin(s*1.5)*.3,t.fillRect(e*.58,i*.38,6,3),t.fillRect(e*.64,i*.38,6,3),t.globalAlpha=1,t.fillStyle="#1a0000",t.fillRect(e*.47,i*.55,24,20),t.fillRect(e*.45,i*.53,28,6),t.fillRect(e*.49,i*.72,20,4),t.fillStyle=r,t.globalAlpha=.6+Math.sin(s*2)*.2,t.fillRect(e*.48,i*.56,22,8),t.globalAlpha=1,t.strokeStyle="#222",t.lineWidth=2;for(let o=0;o<3;o++)t.beginPath(),t.moveTo(e*.3+o*60,0),t.lineTo(e*.3+o*60+Math.sin(s+o)*5,i*.3),t.stroke()}_drawAwakeningScene(t,e,i,s,r){t.fillStyle="#0c0c12",t.fillRect(0,i*.72,e,i*.28);const a=e*.35,o=e*.3;t.fillStyle="#12101a",t.fillRect(a,i*.5,o,i*.22),t.save(),t.translate(a,i*.5),t.rotate(-.15-Math.sin(s*.5)*.05),t.fillStyle="#18161e",t.fillRect(0,-5,o,8),t.restore();for(let c=0;c<12;c++){const l=a+Math.random()*o,d=i*.48+Math.sin(s*2+c)*10;t.fillStyle=r,t.globalAlpha=.05+Math.sin(s+c*.5)*.03,t.fillRect(l,d,8+Math.random()*8,4)}t.globalAlpha=1,t.fillStyle=r,t.globalAlpha=.6+Math.sin(s*2)*.3,t.fillRect(e*.47,i*.56,5,3),t.fillRect(e*.52,i*.56,5,3),t.globalAlpha=1}_drawVengeanceScene(t,e,i,s,r){t.strokeStyle="rgba(150, 170, 200, 0.15)",t.lineWidth=1;for(let a=0;a<50;a++){const o=(a*37+s*80)%e,c=(a*53+s*120)%i;t.beginPath(),t.moveTo(o,c),t.lineTo(o+1,c+15),t.stroke()}t.fillStyle="#0a0a0c",t.fillRect(0,i*.72,e,i*.28);for(let a=0;a<8;a++){const o=40+Math.random()*80;t.fillRect(a*(e/8),i*.72-o,e/8-5,o)}this._drawVampireSilhouette(t,e*.5,i*.42,r,s),t.fillStyle="rgba(200, 180, 160, 0.1)",t.beginPath(),t.arc(e*.75,i*.2,40,0,Math.PI*2),t.fill()}_drawFigure(t,e,i,s,r){t.fillStyle=r;const a=s*.8;t.fillRect(e-6*a,i-35*a,12*a,25*a),t.beginPath(),t.arc(e,i-38*a,6*a,0,Math.PI*2),t.fill()}_drawVampireSilhouette(t,e,i,s,r){t.fillStyle="#050508",t.fillRect(e-8,i,16,40),t.beginPath(),t.arc(e,i-5,8,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(e-8,i+5),t.quadraticCurveTo(e-35+Math.sin(r*2)*8,i+30,e-25+Math.sin(r*1.5)*5,i+45),t.lineTo(e+8,i+5),t.fill(),t.fillStyle=s,t.globalAlpha=.7+Math.sin(r*3)*.3,t.fillRect(e-4,i-6,3,2),t.fillRect(e+1,i-6,3,2),t.globalAlpha=1,t.fillStyle=s,t.globalAlpha=.4+Math.sin(r*2)*.2,t.fillRect(e+10,i+5,2,30),t.globalAlpha=1}_drawStars(t,e,i,s,r){t.fillStyle=r;for(let a=0;a<15;a++){const o=a*97%e,c=a*47%(i*.4);t.globalAlpha=.2+Math.sin(s*2+a)*.15,t.fillRect(o,c,2,2)}t.globalAlpha=1}}console.log("Crimson Awakening Prototype Started");const pm=document.getElementById("gameCanvas"),Qe=new fm(pm);window.game=Qe;const No=["Reticulating bat splines...","Polishing the fangs...","Reminding the guards to patrol predictably...","Applying SPF 5000 sunscreen...","Hiding the garlic...","Tuning the church bells...","Ironing the crimson cape...","Practicing menacing glares in the mirror...","Convincing Brother Aldric he's just a prototype boss...","Ordering O-Negative from the local blood bank...","Ensuring the darkness is sufficiently edgy..."],Uo=document.getElementById("loading-tip");Uo&&(Uo.innerText=No[Math.floor(Math.random()*No.length)]);Qe.start();const ds=document.getElementById("progress-fill");ds&&(setTimeout(()=>{ds.style.width="40%"},50),setTimeout(()=>{ds.style.width="80%"},200),setTimeout(()=>{ds.style.width="100%"},450));const ur=document.getElementById("loader");ur&&setTimeout(()=>{ur.style.opacity="0",setTimeout(()=>ur.remove(),800)},750);const Cs=document.getElementById("landing-page"),xl=document.getElementById("how-to-play-modal"),vl=document.getElementById("level-intro-card"),Ml=document.getElementById("game-over-screen"),Sl=document.getElementById("victory-screen"),yl=document.getElementById("hud-layer"),mm=new um;let xs=null;function gm(){Cs.classList.remove("visible"),Qe.state=vi.PROLOGUE,mm.start(()=>{El()})}function El(){vl.classList.add("visible"),xs=setTimeout(()=>{bl()},4500)}function bl(){xs&&(clearTimeout(xs),xs=null),vl.classList.remove("visible"),Qe.startPlaying()}document.getElementById("new-game-btn").addEventListener("click",()=>{gm()});document.getElementById("continue-btn").addEventListener("click",()=>{Cs.classList.remove("visible"),El()});document.getElementById("level-intro-card").addEventListener("click",()=>{bl()});document.getElementById("how-to-play-btn").addEventListener("click",()=>{xl.classList.add("visible")});document.getElementById("close-modal-btn").addEventListener("click",()=>{xl.classList.remove("visible")});document.getElementById("retry-game-btn").addEventListener("click",()=>{Ml.classList.remove("visible"),Qe.startPlaying()});document.getElementById("menu-game-btn").addEventListener("click",()=>{Ml.classList.remove("visible"),Cs.classList.add("visible"),yl.style.display="none",Qe.state=vi.MENU});document.getElementById("victory-retry-btn").addEventListener("click",()=>{Sl.classList.remove("visible"),Qe.currentLevelId<5?Qe.currentLevelId++:Qe.currentLevelId=1,Qe.startPlaying()});document.getElementById("close-lore-btn").addEventListener("click",()=>{document.getElementById("lore-modal").classList.remove("visible")});document.getElementById("victory-menu-btn").addEventListener("click",()=>{Sl.classList.remove("visible"),Cs.classList.add("visible"),yl.style.display="none",Qe.state=vi.MENU});
