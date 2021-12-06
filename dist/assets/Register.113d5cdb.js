var Oo=Object.defineProperty;var qi=Object.getOwnPropertySymbols;var _o=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable;var Gi=(e,t,n)=>t in e?Oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ki=(e,t)=>{for(var n in t||(t={}))_o.call(t,n)&&Gi(e,n,t[n]);if(qi)for(var n of qi(t))ko.call(t,n)&&Gi(e,n,t[n]);return e};import{o as Z,i as ut,f as zi,t as Lo,k as vn,l as Po,u as xo,m as we,q as Vo,r as Xi,g as wn,F as Mo,s as Fo,c as En,p as Uo,h as $o,w as jo}from"./vendor.815fcac5.js";import{B as Bo,C as Wi}from"./Container.731b20a4.js";import{r as Ho}from"./randomColor.478579a4.js";import{_ as Qi}from"./index.df47db38.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Go(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Ko(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xo(){return Ee().indexOf("Electron/")>=0}function Wo(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Qo(){return Ee().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="FirebaseError";class In extends Error{constructor(t,n,i){super(n);this.code=t,this.customData=i,this.name=Yo,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Jo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,i)}}function Jo(e,t){return e.replace(Zo,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Zo=/\{\$([^}]+)}/g;function Tn(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(Ji(r)&&Ji(o)){if(!Tn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ji(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){return e&&e._delegate?e._delegate:e}class Ie{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new qo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(na(t))try{this.getOrInitializeService({instanceIdentifier:ft})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=ft){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ft){return this.instances.has(t)}getOptions(t=ft){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ea(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ft){return this.component?this.component.multipleInstances?t:ft:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ea(e){return e===ft?void 0:e}function na(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ta(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const sa={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},ra=S.INFO,oa={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},aa=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=oa[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zi{constructor(t){this.name=t,this._logLevel=ra,this._logHandler=aa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ca(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ca(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sn="@firebase/app",ts="0.7.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Zi("@firebase/app"),ha="@firebase/app-compat",ua="@firebase/analytics-compat",fa="@firebase/analytics",da="@firebase/app-check-compat",pa="@firebase/app-check",ga="@firebase/auth",ma="@firebase/auth-compat",ya="@firebase/database",va="@firebase/database-compat",wa="@firebase/functions",Ea="@firebase/functions-compat",Ia="@firebase/installations",Ta="@firebase/installations-compat",Sa="@firebase/messaging",Aa="@firebase/messaging-compat",Na="@firebase/performance",ba="@firebase/performance-compat",Ca="@firebase/remote-config",Da="@firebase/remote-config-compat",Ra="@firebase/storage",Oa="@firebase/storage-compat",_a="@firebase/firestore",ka="@firebase/firestore-compat",La="firebase",Pa="9.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]",xa={[Sn]:"fire-core",[ha]:"fire-core-compat",[fa]:"fire-analytics",[ua]:"fire-analytics-compat",[pa]:"fire-app-check",[da]:"fire-app-check-compat",[ga]:"fire-auth",[ma]:"fire-auth-compat",[ya]:"fire-rtdb",[va]:"fire-rtdb-compat",[wa]:"fire-fn",[Ea]:"fire-fn-compat",[Ia]:"fire-iid",[Ta]:"fire-iid-compat",[Sa]:"fire-fcm",[Aa]:"fire-fcm-compat",[Na]:"fire-perf",[ba]:"fire-perf-compat",[Ca]:"fire-rc",[Da]:"fire-rc-compat",[Ra]:"fire-gcs",[Oa]:"fire-gcs-compat",[_a]:"fire-fst",[ka]:"fire-fst-compat","fire-js":"fire-js",[La]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Map,Nn=new Map;function Va(e,t){try{e.container.addComponent(t)}catch(n){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bn(e){const t=e.name;if(Nn.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;Nn.set(t,e);for(const n of Te.values())Va(n,e);return!0}function Ma(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Se=new Yi("app","Firebase",Fa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=Pa;function ja(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:es,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw Se.create("bad-app-name",{appName:String(i)});const s=Te.get(i);if(s){if(Tn(e,s.options)&&Tn(n,s.config))return s;throw Se.create("duplicate-app",{appName:i})}const r=new ia(i);for(const a of Nn.values())r.addComponent(a);const o=new Ua(e,n,r);return Te.set(i,o),o}function Ba(e=es){const t=Te.get(e);if(!t)throw Se.create("no-app",{appName:e});return t}function St(e,t,n){var i;let s=(i=xa[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}bn(new Ie(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e){bn(new Ie("platform-logger",t=>new la(t),"PRIVATE")),St(Sn,ts,e),St(Sn,ts,"esm2017"),St("fire-js","")}Ha("");var qa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},d,Cn=Cn||{},m=qa||self;function Ae(){}function Dn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function $t(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ga(e){return Object.prototype.hasOwnProperty.call(e,Rn)&&e[Rn]||(e[Rn]=++Ka)}var Rn="closure_uid_"+(1e9*Math.random()>>>0),Ka=0;function za(e,t,n){return e.call.apply(e.bind,arguments)}function Xa(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function x(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x=za:x=Xa,x.apply(null,arguments)}function Ne(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function V(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function ot(){this.s=this.s,this.o=this.o}var Wa=0,Qa={};ot.prototype.s=!1;ot.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Wa!=0)){var e=Ga(this);delete Qa[e]}};ot.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ns=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},is=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<i;r++)r in s&&t.call(n,s[r],r,e)};function Ya(e){t:{var t=Bl;const n=e.length,i=typeof e=="string"?e.split(""):e;for(let s=0;s<n;s++)if(s in i&&t.call(void 0,i[s],s,e)){t=s;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function ss(e){return Array.prototype.concat.apply([],arguments)}function On(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function be(e){return/^[\s\xa0]*$/.test(e)}var rs=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function j(e,t){return e.indexOf(t)!=-1}function _n(e,t){return e<t?-1:e>t?1:0}var B;t:{var os=m.navigator;if(os){var as=os.userAgent;if(as){B=as;break t}}B=""}function kn(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function ls(e){const t={};for(const n in e)t[n]=e[n];return t}var cs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hs(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<cs.length;r++)n=cs[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ln(e){return Ln[" "](e),e}Ln[" "]=Ae;function Ja(e){var t=el;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Za=j(B,"Opera"),At=j(B,"Trident")||j(B,"MSIE"),us=j(B,"Edge"),Pn=us||At,fs=j(B,"Gecko")&&!(j(B.toLowerCase(),"webkit")&&!j(B,"Edge"))&&!(j(B,"Trident")||j(B,"MSIE"))&&!j(B,"Edge"),tl=j(B.toLowerCase(),"webkit")&&!j(B,"Edge");function ds(){var e=m.document;return e?e.documentMode:void 0}var Ce;t:{var xn="",Vn=function(){var e=B;if(fs)return/rv:([^\);]+)(\)|;)/.exec(e);if(us)return/Edge\/([\d\.]+)/.exec(e);if(At)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(tl)return/WebKit\/(\S+)/.exec(e);if(Za)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Vn&&(xn=Vn?Vn[1]:""),At){var Mn=ds();if(Mn!=null&&Mn>parseFloat(xn)){Ce=String(Mn);break t}}Ce=xn}var el={};function nl(){return Ja(function(){let e=0;const t=rs(String(Ce)).split("."),n=rs("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=_n(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||_n(s[2].length==0,r[2].length==0)||_n(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}var Fn;if(m.document&&At){var ps=ds();Fn=ps||parseInt(Ce,10)||void 0}else Fn=void 0;var il=Fn,sl=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{m.addEventListener("test",Ae,t),m.removeEventListener("test",Ae,t)}catch{}return e}();function $(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};function jt(e,t){if($.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fs){t:{try{Ln(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:rl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&jt.Z.h.call(this)}}V(jt,$);var rl={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),ol=0;function al(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=s,this.key=++ol,this.ca=this.fa=!1}function De(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Re(e){this.src=e,this.g={},this.h=0}Re.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=$n(e,t,i,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new al(t,this.src,r,!!i,s),t.fa=n,e.push(t)),t};function Un(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=ns(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(De(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function $n(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==i)return s}return-1}var jn="closure_lm_"+(1e6*Math.random()|0),Bn={};function gs(e,t,n,i,s){if(i&&i.once)return ys(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)gs(e,t[r],n,i,s);return null}return n=Kn(n),e&&e[Bt]?e.N(t,n,$t(i)?!!i.capture:!!i,s):ms(e,t,n,!1,i,s)}function ms(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=$t(s)?!!s.capture:!!s,a=qn(e);if(a||(e[jn]=a=new Re(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=ll(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)sl||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(ws(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ll(){function e(n){return t.call(e.src,e.listener,n)}var t=cl;return e}function ys(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ys(e,t[r],n,i,s);return null}return n=Kn(n),e&&e[Bt]?e.O(t,n,$t(i)?!!i.capture:!!i,s):ms(e,t,n,!0,i,s)}function vs(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)vs(e,t[r],n,i,s);else i=$t(i)?!!i.capture:!!i,n=Kn(n),e&&e[Bt]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=$n(r,n,i,s),-1<n&&(De(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=qn(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$n(t,n,i,s)),(n=-1<e?t[e]:null)&&Hn(n))}function Hn(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Bt])Un(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ws(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=qn(t))?(Un(n,e),n.h==0&&(n.src=null,t[jn]=null)):De(e)}}}function ws(e){return e in Bn?Bn[e]:Bn[e]="on"+e}function cl(e,t){if(e.ca)e=!0;else{t=new jt(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&Hn(e),e=n.call(i,t)}return e}function qn(e){return e=e[jn],e instanceof Re?e:null}var Gn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kn(e){return typeof e=="function"?e:(e[Gn]||(e[Gn]=function(t){return e.handleEvent(t)}),e[Gn])}function _(){ot.call(this),this.i=new Re(this),this.P=this,this.I=null}V(_,ot);_.prototype[Bt]=!0;_.prototype.removeEventListener=function(e,t,n,i){vs(this,e,t,n,i)};function M(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new $(t,e);else if(t instanceof $)t.target=t.target||e;else{var s=t;t=new $(i,e),hs(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Oe(o,i,!0,t)&&s}if(o=t.g=e,s=Oe(o,i,!0,t)&&s,s=Oe(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=Oe(o,i,!1,t)&&s}_.prototype.M=function(){if(_.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)De(n[i]);delete e.g[t],e.h--}}this.I=null};_.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};_.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Oe(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Un(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var zn=m.JSON.stringify;function hl(){var e=Is;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ul{constructor(){this.h=this.g=null}add(t,n){const i=Es.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Es=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new fl,e=>e.reset());class fl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dl(e){m.setTimeout(()=>{throw e},0)}function Xn(e,t){Wn||pl(),Qn||(Wn(),Qn=!0),Is.add(e,t)}var Wn;function pl(){var e=m.Promise.resolve(void 0);Wn=function(){e.then(gl)}}var Qn=!1,Is=new ul;function gl(){for(var e;e=hl();){try{e.h.call(e.g)}catch(n){dl(n)}var t=Es;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Qn=!1}function _e(e,t){_.call(this),this.h=e||1,this.g=t||m,this.j=x(this.kb,this),this.l=Date.now()}V(_e,_);d=_e.prototype;d.da=!1;d.S=null;d.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),M(this,"tick"),this.da&&(Yn(this),this.start()))}};d.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yn(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}d.M=function(){_e.Z.M.call(this),Yn(this),delete this.g};function Jn(e,t,n){if(typeof e=="function")n&&(e=x(e,n));else if(e&&typeof e.handleEvent=="function")e=x(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:m.setTimeout(e,t||0)}function Ts(e){e.g=Jn(()=>{e.g=null,e.i&&(e.i=!1,Ts(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ml extends ot{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ts(this)}M(){super.M(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(e){ot.call(this),this.h=e,this.g={}}V(Ht,ot);var Ss=[];function As(e,t,n,i){Array.isArray(n)||(n&&(Ss[0]=n.toString()),n=Ss);for(var s=0;s<n.length;s++){var r=gs(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ns(e){kn(e.g,function(t,n){this.g.hasOwnProperty(n)&&Hn(t)},e),e.g={}}Ht.prototype.M=function(){Ht.Z.M.call(this),Ns(this)};Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ke(){this.g=!0}ke.prototype.Aa=function(){this.g=!1};function yl(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function vl(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Nt(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+El(e,n)+(i?" "+i:"")})}function wl(e,t){e.info(function(){return"TIMEOUT: "+t})}ke.prototype.info=function(){};function El(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return zn(n)}catch{return t}}var dt={},bs=null;function Le(){return bs=bs||new _}dt.Ma="serverreachability";function Cs(e){$.call(this,dt.Ma,e)}V(Cs,$);function qt(e){const t=Le();M(t,new Cs(t,e))}dt.STAT_EVENT="statevent";function Ds(e,t){$.call(this,dt.STAT_EVENT,e),this.stat=t}V(Ds,$);function H(e){const t=Le();M(t,new Ds(t,e))}dt.Na="timingevent";function Rs(e,t){$.call(this,dt.Na,e),this.size=t}V(Rs,$);function Gt(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){e()},t)}var Pe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Os={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zn(){}Zn.prototype.h=null;function _s(e){return e.h||(e.h=e.i())}function ks(){}var Kt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ti(){$.call(this,"d")}V(ti,$);function ei(){$.call(this,"c")}V(ei,$);var ni;function xe(){}V(xe,Zn);xe.prototype.g=function(){return new XMLHttpRequest};xe.prototype.i=function(){return{}};ni=new xe;function zt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Ht(this),this.P=Il,e=Pn?125:void 0,this.W=new _e(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ls}function Ls(){this.i=null,this.g="",this.h=!1}var Il=45e3,ii={},Ve={};d=zt.prototype;d.setTimeout=function(e){this.P=e};function si(e,t,n){e.K=1,e.v=je(nt(t)),e.s=n,e.U=!0,Ps(e,null)}function Ps(e,t){e.F=Date.now(),Xt(e),e.A=nt(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),Hs(n.h,"t",i),e.C=0,n=e.l.H,e.h=new Ls,e.g=fr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ml(x(e.Ia,e,e.g),e.O)),As(e.V,e.g,"readystatechange",e.gb),t=e.H?ls(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),qt(1),yl(e.j,e.u,e.A,e.m,e.X,e.s)}d.gb=function(e){e=e.target;const t=this.L;t&&it(e)==3?t.l():this.Ia(e)};d.Ia=function(e){try{if(e==this.g)t:{const h=it(this.g);var t=this.g.Da();const f=this.g.ba();if(!(3>h)&&(h!=3||Pn||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||h!=4||t==7||(t==8||0>=f?qt(3):qt(2)),Me(this);var n=this.g.ba();this.N=n;e:if(xs(this)){var i=er(this.g);e="";var s=i.length,r=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){pt(this),Wt(this);var o="";break e}this.h.i=new m.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,vl(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!be(a)){var c=a;break e}}c=null}if(n=c)Nt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ri(this,n);else{this.i=!1,this.o=3,H(12),pt(this),Wt(this);break t}}this.U?(Vs(this,h,o),Pn&&this.i&&h==3&&(As(this.V,this.W,"tick",this.fb),this.W.start())):(Nt(this.j,this.m,o,null),ri(this,o)),h==4&&pt(this),this.i&&!this.I&&(h==4?lr(this.l,this):(this.i=!1,Xt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,H(12)):(this.o=0,H(13)),pt(this),Wt(this)}}}catch{}finally{}};function xs(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Vs(e,t,n){let i=!0,s;for(;!e.I&&e.C<n.length;)if(s=Tl(e,n),s==Ve){t==4&&(e.o=4,H(14),i=!1),Nt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==ii){e.o=4,H(15),Nt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Nt(e.j,e.m,s,null),ri(e,s);xs(e)&&s!=Ve&&s!=ii&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,H(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mi(t),t.L=!0,H(11))):(Nt(e.j,e.m,n,"[Invalid Chunked Response]"),pt(e),Wt(e))}d.fb=function(){if(this.g){var e=it(this.g),t=this.g.ga();this.C<t.length&&(Me(this),Vs(this,e,t),this.i&&e!=4&&Xt(this))}};function Tl(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Ve:(n=Number(t.substring(n,i)),isNaN(n)?ii:(i+=1,i+n>t.length?Ve:(t=t.substr(i,n),e.C=i+n,t)))}d.cancel=function(){this.I=!0,pt(this)};function Xt(e){e.Y=Date.now()+e.P,Ms(e,e.P)}function Ms(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Gt(x(e.eb,e),t)}function Me(e){e.B&&(m.clearTimeout(e.B),e.B=null)}d.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(wl(this.j,this.A),this.K!=2&&(qt(3),H(17)),pt(this),this.o=2,Wt(this)):Ms(this,this.Y-e)};function Wt(e){e.l.G==0||e.I||lr(e.l,e)}function pt(e){Me(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Yn(e.W),Ns(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ri(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||li(n.i,e))){if(n.I=e.N,!e.J&&li(n.i,e)&&n.G==3){try{var i=n.Ca.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ze(n),Ge(n);else break t;gi(n),H(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Gt(x(n.ab,n),6e3));if(1>=Ks(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else yt(n,11)}else if((e.J||n.g==e)&&ze(n),!be(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const h=c[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const f=c[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(i=1.5*g,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const w=e.g;if(w){const b=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var r=i.i;!r.g&&(j(b,"spdy")||j(b,"quic")||j(b,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ci(r,r.h),r.h=null))}if(i.D){const P=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(i.sa=P,C(i.F,i.D,P))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=ur(i,i.H?i.la:null,i.W),o.J){zs(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Me(a),Xt(a)),i.g=o}else or(i);0<n.l.length&&Ke(n)}else c[0]!="stop"&&c[0]!="close"||yt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?yt(n,7):di(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}qt(4)}catch{}}function Sl(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Dn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function oi(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Dn(e)||typeof e=="string")is(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Dn(e)||typeof e=="string"){n=[];for(var i=e.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,e)n[i++]=s;i=Sl(e),s=i.length;for(var r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}}function bt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof bt)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}d=bt.prototype;d.R=function(){ai(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};d.T=function(){return ai(this),this.g.concat()};function ai(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];gt(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)i=e.g[t],gt(s,i)||(e.g[n++]=i,s[i]=1),t++;e.g.length=n}}d.get=function(e,t){return gt(this.h,e)?this.h[e]:t};d.set=function(e,t){gt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};d.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);e.call(t,r,s,this)}};function gt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Fs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Al(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof mt){this.g=t!==void 0?t:e.g,Fe(this,e.j),this.s=e.s,Ue(this,e.i),$e(this,e.m),this.l=e.l,t=e.h;var n=new Jt;n.i=t.i,t.g&&(n.g=new bt(t.g),n.h=t.h),Us(this,n),this.o=e.o}else e&&(n=String(e).match(Fs))?(this.g=!!t,Fe(this,n[1]||"",!0),this.s=Qt(n[2]||""),Ue(this,n[3]||"",!0),$e(this,n[4]),this.l=Qt(n[5]||"",!0),Us(this,n[6]||"",!0),this.o=Qt(n[7]||"")):(this.g=!!t,this.h=new Jt(null,this.g))}mt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,$s,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Yt(t,$s,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Yt(n,n.charAt(0)=="/"?Rl:Dl,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,_l)),e.join("")};function nt(e){return new mt(e)}function Fe(e,t,n){e.j=n?Qt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ue(e,t,n){e.i=n?Qt(t,!0):t}function $e(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Us(e,t,n){t instanceof Jt?(e.h=t,kl(e.h,e.g)):(n||(t=Yt(t,Ol)),e.h=new Jt(t,e.g))}function C(e,t,n){e.h.set(t,n)}function je(e){return C(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Nl(e){return e instanceof mt?nt(e):new mt(e,void 0)}function bl(e,t,n,i){var s=new mt(null,void 0);return e&&Fe(s,e),t&&Ue(s,t),n&&$e(s,n),i&&(s.l=i),s}function Qt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Cl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var $s=/[#\/\?@]/g,Dl=/[#\?:]/g,Rl=/[#\?]/g,Ol=/[#\?@]/g,_l=/#/g;function Jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function at(e){e.g||(e.g=new bt,e.h=0,e.i&&Al(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}d=Jt.prototype;d.add=function(e,t){at(this),this.i=null,e=Ct(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function js(e,t){at(e),t=Ct(e,t),gt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,gt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ai(e)))}function Bs(e,t){return at(e),t=Ct(e,t),gt(e.g.h,t)}d.forEach=function(e,t){at(this),this.g.forEach(function(n,i){is(n,function(s){e.call(t,s,i,this)},this)},this)};d.T=function(){at(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var s=e[i],r=0;r<s.length;r++)n.push(t[i]);return n};d.R=function(e){at(this);var t=[];if(typeof e=="string")Bs(this,e)&&(t=ss(t,this.g.get(Ct(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ss(t,e[n])}return t};d.set=function(e,t){return at(this),this.i=null,e=Ct(this,e),Bs(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};d.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Hs(e,t,n){js(e,t),0<n.length&&(e.i=null,e.g.set(Ct(e,t),On(n)),e.h+=n.length)}d.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),e.push(o)}}return this.i=e.join("&")};function Ct(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kl(e,t){t&&!e.j&&(at(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(js(this,i),Hs(this,s,n))},e)),e.j=t}var Ll=class{constructor(e,t){this.h=e,this.g=t}};function qs(e){this.l=e||Pl,m.PerformanceNavigationTiming?(e=m.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(m.g&&m.g.Ea&&m.g.Ea()&&m.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pl=10;function Gs(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ks(e){return e.h?1:e.g?e.g.size:0}function li(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ci(e,t){e.g?e.g.add(t):e.h=t}function zs(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}qs.prototype.cancel=function(){if(this.i=Xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xs(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return On(e.i)}function hi(){}hi.prototype.stringify=function(e){return m.JSON.stringify(e,void 0)};hi.prototype.parse=function(e){return m.JSON.parse(e,void 0)};function xl(){this.g=new hi}function Vl(e,t,n){const i=n||"";try{oi(e,function(s,r){let o=s;$t(s)&&(o=zn(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ml(e,t){const n=new ke;if(m.Image){const i=new Image;i.onload=Ne(Be,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ne(Be,n,i,"TestLoadImage: error",!1,t),i.onabort=Ne(Be,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ne(Be,n,i,"TestLoadImage: timeout",!1,t),m.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Be(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function Zt(e){this.l=e.$b||null,this.j=e.ib||!1}V(Zt,Zn);Zt.prototype.g=function(){return new He(this.l,this.j)};Zt.prototype.i=function(e){return function(){return e}}({});function He(e,t){_.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ui,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}V(He,_);var ui=0;d=He.prototype;d.open=function(e,t){if(this.readyState!=ui)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ee(this)};d.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||m).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};d.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,te(this)),this.readyState=ui};d.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ee(this)),this.g&&(this.readyState=3,ee(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof m.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ws(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ws(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}d.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?te(this):ee(this),this.readyState==3&&Ws(this)}};d.Ua=function(e){this.g&&(this.response=this.responseText=e,te(this))};d.Ta=function(e){this.g&&(this.response=e,te(this))};d.ha=function(){this.g&&te(this)};function te(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ee(e)}d.setRequestHeader=function(e,t){this.v.append(e,t)};d.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};d.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ee(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(He.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Fl=m.JSON.parse;function R(e){_.call(this),this.headers=new bt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qs,this.K=this.L=!1}V(R,_);var Qs="",Ul=/^https?$/i,$l=["POST","PUT"];d=R.prototype;d.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ni.g(),this.C=this.u?_s(this.u):_s(ni),this.g.onreadystatechange=x(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ys(this,r);return}e=n||"";const s=new bt(this.headers);i&&oi(i,function(r,o){s.set(o,r)}),i=Ya(s.T()),n=m.FormData&&e instanceof m.FormData,!(0<=ns($l,t))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tr(this),0<this.B&&((this.K=jl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=x(this.pa,this)):this.A=Jn(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ys(this,r)}};function jl(e){return At&&nl()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Bl(e){return e.toLowerCase()=="content-type"}d.pa=function(){typeof Cn!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,M(this,"timeout"),this.abort(8))};function Ys(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Js(e),qe(e)}function Js(e){e.D||(e.D=!0,M(e,"complete"),M(e,"error"))}d.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,M(this,"complete"),M(this,"abort"),qe(this))};d.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qe(this,!0)),R.Z.M.call(this)};d.Fa=function(){this.s||(this.F||this.v||this.l?Zs(this):this.cb())};d.cb=function(){Zs(this)};function Zs(e){if(e.h&&typeof Cn!="undefined"&&(!e.C[1]||it(e)!=4||e.ba()!=2)){if(e.v&&it(e)==4)Jn(e.Fa,0,e);else if(M(e,"readystatechange"),it(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.H).match(Fs)[1]||null;if(!s&&m.self&&m.self.location){var r=m.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ul.test(s?s.toLowerCase():"")}n=i}if(n)M(e,"complete"),M(e,"success");else{e.m=6;try{var o=2<it(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Js(e)}}finally{qe(e)}}}}function qe(e,t){if(e.g){tr(e);const n=e.g,i=e.C[0]?Ae:null;e.g=null,e.C=null,t||M(e,"ready");try{n.onreadystatechange=i}catch{}}}function tr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(m.clearTimeout(e.A),e.A=null)}function it(e){return e.g?e.g.readyState:0}d.ba=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}};d.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};d.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Fl(t)}};function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Qs:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}d.Da=function(){return this.m};d.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hl(e){let t="";return kn(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function fi(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Hl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):C(e,t,n))}function ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nr(e){this.za=0,this.l=[],this.h=new ke,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ne("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ne("baseRetryDelayMs",5e3,e),this.$a=ne("retryDelaySeedMs",1e4,e),this.Ya=ne("forwardChannelMaxRetries",2,e),this.ra=ne("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new qs(e&&e.concurrentRequestLimit),this.Ca=new xl,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}d=nr.prototype;d.ma=8;d.G=1;function di(e){if(ir(e),e.G==3){var t=e.V++,n=nt(e.F);C(n,"SID",e.J),C(n,"RID",t),C(n,"TYPE","terminate"),ie(e,n),t=new zt(e,e.h,t,void 0),t.K=2,t.v=je(nt(n)),n=!1,m.navigator&&m.navigator.sendBeacon&&(n=m.navigator.sendBeacon(t.v.toString(),"")),!n&&m.Image&&(new Image().src=t.v,n=!0),n||(t.g=fr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Xt(t)}hr(e)}d.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Ge(e){e.g&&(mi(e),e.g.cancel(),e.g=null)}function ir(e){Ge(e),e.u&&(m.clearTimeout(e.u),e.u=null),ze(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&m.clearTimeout(e.m),e.m=null)}function pi(e,t){e.l.push(new Ll(e.Za++,t)),e.G==3&&Ke(e)}function Ke(e){Gs(e.i)||e.m||(e.m=!0,Xn(e.Ha,e),e.C=0)}function ql(e,t){return Ks(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Gt(x(e.Ha,e,t),cr(e,e.C)),e.C++,!0)}d.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new zt(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=ls(r),hs(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=rr(this,s,t),n=nt(this.F),C(n,"RID",e),C(n,"CVER",22),this.D&&C(n,"X-HTTP-Session-Id",this.D),ie(this,n),this.o&&r&&fi(n,this.o,r),ci(this.i,s),this.Ra&&C(n,"TYPE","init"),this.ja?(C(n,"$req",t),C(n,"SID","null"),s.$=!0,si(s,n,null)):si(s,n,t),this.G=2}}else this.G==3&&(e?sr(this,e):this.l.length==0||Gs(this.i)||sr(this))};function sr(e,t){var n;t?n=t.m:n=e.V++;const i=nt(e.F);C(i,"SID",e.J),C(i,"RID",n),C(i,"AID",e.U),ie(e,i),e.o&&e.s&&fi(i,e.o,e.s),n=new zt(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=rr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ci(e.i,n),si(n,i,t)}function ie(e,t){e.j&&oi({},function(n,i){C(t,i,n)})}function rr(e,t,n){n=Math.min(e.l.length,n);var i=e.j?x(e.j.Oa,e.j,e):null;t:{var s=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const h=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{Vl(h,o,"req"+c+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,i}function or(e){e.g||e.u||(e.Y=1,Xn(e.Ga,e),e.A=0)}function gi(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Gt(x(e.Ga,e),cr(e,e.A)),e.A++,!0)}d.Ga=function(){if(this.u=null,ar(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Gt(x(this.bb,this),e)}};d.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,H(10),Ge(this),ar(this))};function mi(e){e.B!=null&&(m.clearTimeout(e.B),e.B=null)}function ar(e){e.g=new zt(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=nt(e.oa);C(t,"RID","rpc"),C(t,"SID",e.J),C(t,"CI",e.N?"0":"1"),C(t,"AID",e.U),ie(e,t),C(t,"TYPE","xmlhttp"),e.o&&e.s&&fi(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=je(nt(t)),n.s=null,n.U=!0,Ps(n,e)}d.ab=function(){this.v!=null&&(this.v=null,Ge(this),gi(this),H(19))};function ze(e){e.v!=null&&(m.clearTimeout(e.v),e.v=null)}function lr(e,t){var n=null;if(e.g==t){ze(e),mi(e),e.g=null;var i=2}else if(li(e.i,t))n=t.D,zs(e.i,t),i=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=Le(),M(i,new Rs(i,n,t,s)),Ke(e)}else or(e);else if(s=t.o,s==3||s==0&&0<e.I||!(i==1&&ql(e,t)||i==2&&gi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:yt(e,5);break;case 4:yt(e,10);break;case 3:yt(e,6);break;default:yt(e,2)}}}function cr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function yt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var i=x(e.jb,e);n||(n=new mt("//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Fe(n,"https"),je(n)),Ml(n.toString(),i)}else H(2);e.G=0,e.j&&e.j.va(t),hr(e),ir(e)}d.jb=function(e){e?(this.h.info("Successfully pinged google.com"),H(2)):(this.h.info("Failed to ping google.com"),H(1))};function hr(e){e.G=0,e.I=-1,e.j&&((Xs(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,On(e.l),e.l.length=0),e.j.ua())}function ur(e,t,n){let i=Nl(n);if(i.i!="")t&&Ue(i,t+"."+i.i),$e(i,i.m);else{const s=m.location;i=bl(s.protocol,t?t+"."+s.hostname:s.hostname,+s.port,n)}return e.aa&&kn(e.aa,function(s,r){C(i,r,s)}),t=e.D,n=e.sa,t&&n&&C(i,t,n),C(i,"VER",e.ma),ie(e,i),i}function fr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new R(new Zt({ib:!0})):new R(e.qa),t.L=e.H,t}function dr(){}d=dr.prototype;d.xa=function(){};d.wa=function(){};d.va=function(){};d.ua=function(){};d.Oa=function(){};function Xe(){if(At&&!(10<=Number(il)))throw Error("Environmental error: no available transport.")}Xe.prototype.g=function(e,t){return new X(e,t)};function X(e,t){_.call(this),this.g=new nr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!be(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Dt(this)}V(X,_);X.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Xn(x(e.hb,e,t))),H(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ur(e,null,e.W),Ke(e)};X.prototype.close=function(){di(this.g)};X.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,pi(this.g,t)}else this.v?(t={},t.__data__=zn(e),pi(this.g,t)):pi(this.g,e)};X.prototype.M=function(){this.g.j=null,delete this.j,di(this.g),delete this.g,X.Z.M.call(this)};function pr(e){ti.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}V(pr,ti);function gr(){ei.call(this),this.status=1}V(gr,ei);function Dt(e){this.g=e}V(Dt,dr);Dt.prototype.xa=function(){M(this.g,"a")};Dt.prototype.wa=function(e){M(this.g,new pr(e))};Dt.prototype.va=function(e){M(this.g,new gr(e))};Dt.prototype.ua=function(){M(this.g,"b")};Xe.prototype.createWebChannel=Xe.prototype.g;X.prototype.send=X.prototype.u;X.prototype.open=X.prototype.m;X.prototype.close=X.prototype.close;Pe.NO_ERROR=0;Pe.TIMEOUT=8;Pe.HTTP_ERROR=6;Os.COMPLETE="complete";ks.EventType=Kt;Kt.OPEN="a";Kt.CLOSE="b";Kt.ERROR="c";Kt.MESSAGE="d";_.prototype.listen=_.prototype.N;R.prototype.listenOnce=R.prototype.O;R.prototype.getLastError=R.prototype.La;R.prototype.getLastErrorCode=R.prototype.Da;R.prototype.getStatus=R.prototype.ba;R.prototype.getResponseJson=R.prototype.Qa;R.prototype.getResponseText=R.prototype.ga;R.prototype.send=R.prototype.ea;var Gl=function(){return new Xe},Kl=function(){return Le()},yi=Pe,zl=Os,Xl=dt,mr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Wl=Zt,We=ks,Ql=R;const yr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}q.UNAUTHENTICATED=new q(null),q.GOOGLE_CREDENTIALS=new q("google-credentials-uid"),q.FIRST_PARTY=new q("first-party-uid"),q.MOCK_USER=new q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Zi("@firebase/firestore");function vr(){return vt.logLevel}function y(e,...t){if(vt.logLevel<=S.DEBUG){const n=t.map(vi);vt.debug(`Firestore (${Rt}): ${e}`,...n)}}function wt(e,...t){if(vt.logLevel<=S.ERROR){const n=t.map(vi);vt.error(`Firestore (${Rt}): ${e}`,...n)}}function wr(e,...t){if(vt.logLevel<=S.WARN){const n=t.map(vi);vt.warn(`Firestore (${Rt}): ${e}`,...n)}}function vi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+e;throw wt(t),new Error(t)}function k(e,t){e||T()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Error{constructor(t,n){super(n),this.code=t,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Jl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(q.UNAUTHENTICATED))}shutdown(){}}class Zl{constructor(t){this.t=t,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{y("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(y("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(y("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(k(typeof i.accessToken=="string"),new Yl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new q(t)}}class tc{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=q.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(t.Authorization=n),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class ec{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new tc(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er.T=-1;class Ir{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=nc(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function N(e,t){return e<t?-1:e>t?1:0}function Ot(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(u.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(u.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(u.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(u.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Q(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new Q(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Sr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n,i){n===void 0?n=0:n>t.length&&T(),i===void 0?i=t.length-n:i>t.length-n&&T(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof re?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=t.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class D extends re{construct(t,n,i){return new D(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new v(u.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new D(n)}static emptyPath(){return new D([])}}const ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends re{construct(t,n,i){return new K(t,n,i)}static isValidIdentifier(t){return ic.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new v(u.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new v(u.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new v(u.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new v(u.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(n)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t){this.fields=t,t.sort(K.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ot(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new st(n)}static fromUint8Array(t){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(t);return new st(n)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const sc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(k(!!e),typeof e=="string"){let t=0;const n=sc.exec(e);if(k(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function oe(e){return typeof e=="string"?st.fromBase64String(e):st.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qe(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){return e==null}function Ye(e){return e===0&&1/e==-1/0}function oc(e){return typeof e=="number"&&Number.isInteger(e)&&!Ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(D.fromString(t))}static fromName(t){return new I(D.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&D.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return D.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new D(t.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rc(e)?4:10:T()}function tt(e,t){const n=_t(e);if(n!==_t(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qe(e).isEqual(Qe(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=It(i.timestampValue),o=It(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return oe(i.bytesValue).isEqual(oe(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return F(i.geoPointValue.latitude)===F(s.geoPointValue.latitude)&&F(i.geoPointValue.longitude)===F(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return F(i.integerValue)===F(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=F(i.doubleValue),o=F(s.doubleValue);return r===o?Ye(r)===Ye(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ot(e.arrayValue.values||[],t.arrayValue.values||[],tt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Tr(r)!==Tr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!tt(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function le(e,t){return(e.values||[]).find(n=>tt(n,t))!==void 0}function kt(e,t){const n=_t(e),i=_t(t);if(n!==i)return N(n,i);switch(n){case 0:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(s,r){const o=F(s.integerValue||s.doubleValue),a=F(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ar(e.timestampValue,t.timestampValue);case 4:return Ar(Qe(e),Qe(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(s,r){const o=oe(s),a=oe(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=N(o[l],a[l]);if(c!==0)return c}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,r){const o=N(F(s.latitude),F(r.latitude));return o!==0?o:N(F(s.longitude),F(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=kt(o[l],a[l]);if(c)return c}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=N(a[h],c[h]);if(f!==0)return f;const g=kt(o[a[h]],l[c[h]]);if(g!==0)return g}return N(a.length,c.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ar(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=It(e),i=It(t),s=N(n.seconds,i.seconds);return s!==0?s:N(n.nanos,i.nanos)}function Ei(e){return Ii(e)}function Ii(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(i){const s=It(i);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?oe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,I.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Ii(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Ii(i.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function Ti(e){return!!e&&"integerValue"in e}function Si(e){return!!e&&"arrayValue"in e}function Je(e){return!!e&&"mapValue"in e}function ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return se(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=ce(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Je(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ce(n)}setAll(t){let n=K.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=ce(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());Je(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return tt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];Je(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){se(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new et(ce(this.value))}}function Nr(e){const t=[];return se(e.fields,(n,i)=>{const s=new K([n]);if(Je(i)){const r=Nr(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)}),new wi(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,i,s,r){this.key=t,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new Y(t,0,G.min(),et.empty(),0)}static newFoundDocument(t,n,i){return new Y(t,1,n,i,0)}static newNoDocument(t,n){return new Y(t,2,n,et.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,et.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Y(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,n=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function br(e,t=null,n=[],i=[],s=null,r=null,o=null){return new ac(e,t,n,i,s,r,o)}function Ai(e){const t=A(e);if(t.A===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>cc(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ae(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=Ze(t.startAt)),t.endAt&&(n+="|ub:",n+=Ze(t.endAt)),t.A=n}return t.A}function lc(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Ei(i.value)}`;var i}).join(", ")}]`),ae(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ze(e.startAt)),e.endAt&&(t+=", endAt: "+Ze(e.endAt)),`Target(${t})`}function Ni(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!yc(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],i=t.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!tt(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Rr(e.startAt,t.startAt)&&Rr(e.endAt,t.endAt)}class z extends class{}{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.R(t,n,i):new hc(t,n,i):n==="array-contains"?new dc(t,i):n==="in"?new pc(t,i):n==="not-in"?new gc(t,i):n==="array-contains-any"?new mc(t,i):new z(t,n,i)}static R(t,n,i){return n==="in"?new uc(t,i):new fc(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.P(kt(n,this.value)):n!==null&&_t(this.value)===_t(n)&&this.P(kt(n,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function cc(e){return e.field.canonicalString()+e.op.toString()+Ei(e.value)}class hc extends z{constructor(t,n,i){super(t,n,i),this.key=I.fromName(i.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.P(n)}}class uc extends z{constructor(t,n){super(t,"in",n),this.keys=Cr("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class fc extends z{constructor(t,n){super(t,"not-in",n),this.keys=Cr("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Cr(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>I.fromName(i.referenceValue))}class dc extends z{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Si(n)&&le(n.arrayValue,this.value)}}class pc extends z{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&le(this.value.arrayValue,n)}}class gc extends z{constructor(t,n){super(t,"not-in",n)}matches(t){if(le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!le(this.value.arrayValue,n)}}class mc extends z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Si(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>le(this.value.arrayValue,i))}}class bi{constructor(t,n){this.position=t,this.before=n}}function Ze(e){return`${e.before?"b":"a"}:${e.position.map(t=>Ei(t)).join(",")}`}class he{constructor(t,n="asc"){this.field=t,this.dir=n}}function yc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Dr(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(r.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),n.key):i=kt(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return e.before?i<=0:i<0}function Rr(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function vc(e,t,n,i,s,r,o,a){return new tn(e,t,n,i,s,r,o,a)}function wc(e){return new tn(e)}function Ec(e){return!ae(e.limit)&&e.limitType==="F"}function Ic(e){return!ae(e.limit)&&e.limitType==="L"}function Tc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Sc(e){for(const t of e.filters)if(t.v())return t.field;return null}function Ac(e){return e.collectionGroup!==null}function ue(e){const t=A(e);if(t.V===null){t.V=[];const n=Sc(t),i=Tc(t);if(n!==null&&i===null)n.isKeyField()||t.V.push(new he(n)),t.V.push(new he(K.keyField(),"asc"));else{let s=!1;for(const r of t.explicitOrderBy)t.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new he(K.keyField(),r))}}}return t.V}function en(e){const t=A(e);if(!t.S)if(t.limitType==="F")t.S=br(t.path,t.collectionGroup,ue(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ue(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new he(r.field,o))}const i=t.endAt?new bi(t.endAt.position,!t.endAt.before):null,s=t.startAt?new bi(t.startAt.position,!t.startAt.before):null;t.S=br(t.path,t.collectionGroup,n,t.filters,t.limit,i,s)}return t.S}function Nc(e,t,n){return new tn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Or(e,t){return Ni(en(e),en(t))&&e.limitType===t.limitType}function _r(e){return`${Ai(en(e))}|lt:${e.limitType}`}function kr(e){return`Query(target=${lc(en(e))}; limitType=${e.limitType})`}function Ci(e,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):I.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(n,i){return!(n.startAt&&!Dr(n.startAt,ue(n),i)||n.endAt&&Dr(n.endAt,ue(n),i))}(e,t)}function bc(e){return(t,n)=>{let i=!1;for(const s of ue(e)){const r=Cc(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Cc(e,t,n){const i=e.field.isKeyField()?I.comparator(t.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?kt(a,l):T()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ye(t)?"-0":t}}function Pr(e){return{integerValue:""+e}}function Dc(e,t){return oc(t)?Pr(t):Lr(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this._=void 0}}function Rc(e,t,n){return e instanceof sn?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,t):e instanceof fe?Vr(e,t):e instanceof de?Mr(e,t):function(i,s){const r=xr(i,s),o=Fr(r)+Fr(i.C);return Ti(r)&&Ti(i.C)?Pr(o):Lr(i.N,o)}(e,t)}function Oc(e,t,n){return e instanceof fe?Vr(e,t):e instanceof de?Mr(e,t):n}function xr(e,t){return e instanceof rn?Ti(n=t)||function(i){return!!i&&"doubleValue"in i}(n)?t:{integerValue:0}:null;var n}class sn extends nn{}class fe extends nn{constructor(t){super(),this.elements=t}}function Vr(e,t){const n=Ur(t);for(const i of e.elements)n.some(s=>tt(s,i))||n.push(i);return{arrayValue:{values:n}}}class de extends nn{constructor(t){super(),this.elements=t}}function Mr(e,t){let n=Ur(t);for(const i of e.elements)n=n.filter(s=>!tt(s,i));return{arrayValue:{values:n}}}class rn extends nn{constructor(t,n){super(),this.N=t,this.C=n}}function Fr(e){return F(e.integerValue||e.doubleValue)}function Ur(e){return Si(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function _c(e,t){return e.field.isEqual(t.field)&&function(n,i){return n instanceof fe&&i instanceof fe||n instanceof de&&i instanceof de?Ot(n.elements,i.elements,tt):n instanceof rn&&i instanceof rn?tt(n.C,i.C):n instanceof sn&&i instanceof sn}(e.transform,t.transform)}class kc{constructor(t,n){this.version=t,this.transformResults=n}}class Lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function on(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class an{}function Lc(e,t,n){e instanceof ln?function(i,s,r){const o=i.value.clone(),a=Hr(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Pt?function(i,s,r){if(!on(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Hr(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Br(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Di(e,t,n){e instanceof ln?function(i,s,r){if(!on(i.precondition,s))return;const o=i.value.clone(),a=qr(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(jr(s),o).setHasLocalMutations()}(e,t,n):e instanceof Pt?function(i,s,r){if(!on(i.precondition,s))return;const o=qr(i.fieldTransforms,r,s),a=s.data;a.setAll(Br(i)),a.setAll(o),s.convertToFoundDocument(jr(s),a).setHasLocalMutations()}(e,t,n):function(i,s){on(i.precondition,s)&&s.convertToNoDocument(G.min())}(e,t)}function Pc(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=xr(i.transform,s||null);r!=null&&(n==null&&(n=et.empty()),n.set(i.field,r))}return n||null}function $r(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ot(n,i,(s,r)=>_c(s,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function jr(e){return e.isFoundDocument()?e.version:G.min()}class ln extends an{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Pt extends an{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Br(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Hr(e,t,n){const i=new Map;k(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Oc(o,a,n[s]))}return i}function qr(e,t,n){const i=new Map;for(const s of e){const r=s.transform,o=n.data.field(s.field);i.set(s.field,Rc(r,o,t))}return i}class xc extends an{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Vc extends an{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,E;function Mc(e){switch(e){default:return T();case u.CANCELLED:case u.UNKNOWN:case u.DEADLINE_EXCEEDED:case u.RESOURCE_EXHAUSTED:case u.INTERNAL:case u.UNAVAILABLE:case u.UNAUTHENTICATED:return!1;case u.INVALID_ARGUMENT:case u.NOT_FOUND:case u.ALREADY_EXISTS:case u.PERMISSION_DENIED:case u.FAILED_PRECONDITION:case u.ABORTED:case u.OUT_OF_RANGE:case u.UNIMPLEMENTED:case u.DATA_LOSS:return!0}}function Fc(e){if(e===void 0)return wt("GRPC error has no .code"),u.UNKNOWN;switch(e){case O.OK:return u.OK;case O.CANCELLED:return u.CANCELLED;case O.UNKNOWN:return u.UNKNOWN;case O.DEADLINE_EXCEEDED:return u.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return u.RESOURCE_EXHAUSTED;case O.INTERNAL:return u.INTERNAL;case O.UNAVAILABLE:return u.UNAVAILABLE;case O.UNAUTHENTICATED:return u.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return u.INVALID_ARGUMENT;case O.NOT_FOUND:return u.NOT_FOUND;case O.ALREADY_EXISTS:return u.ALREADY_EXISTS;case O.PERMISSION_DENIED:return u.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return u.FAILED_PRECONDITION;case O.ABORTED:return u.ABORTED;case O.OUT_OF_RANGE:return u.OUT_OF_RANGE;case O.UNIMPLEMENTED:return u.UNIMPLEMENTED;case O.DATA_LOSS:return u.DATA_LOSS;default:return T()}}(E=O||(O={}))[E.OK=0]="OK",E[E.CANCELLED=1]="CANCELLED",E[E.UNKNOWN=2]="UNKNOWN",E[E.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",E[E.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",E[E.NOT_FOUND=5]="NOT_FOUND",E[E.ALREADY_EXISTS=6]="ALREADY_EXISTS",E[E.PERMISSION_DENIED=7]="PERMISSION_DENIED",E[E.UNAUTHENTICATED=16]="UNAUTHENTICATED",E[E.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",E[E.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",E[E.ABORTED=10]="ABORTED",E[E.OUT_OF_RANGE=11]="OUT_OF_RANGE",E[E.UNIMPLEMENTED=12]="UNIMPLEMENTED",E[E.INTERNAL=13]="INTERNAL",E[E.UNAVAILABLE=14]="UNAVAILABLE",E[E.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new J(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cn(this.root,t,this.comparator,!0)}}class cn{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i!=null?i:U.RED,this.left=s!=null?s:U.EMPTY,this.right=r!=null?r:U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new U(t!=null?t:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return U.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,i,s){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gr(this.data.getIterator())}getIteratorFrom(t){return new Gr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class Gr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new J(I.comparator);function Kr(){return Uc}const $c=new J(I.comparator);function zr(){return $c}const jc=new J(I.comparator);function Bc(){return jc}const Hc=new W(I.comparator);function Tt(...e){let t=Hc;for(const n of e)t=t.add(n);return t}const qc=new W(N);function Gc(){return qc}class Kc{constructor(t,n){this.databaseId=t,this.D=n}}function Ri(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zc(e,t){return e.D?t.toBase64():t.toUint8Array()}function Xc(e,t){return Ri(e,t.toTimestamp())}function xt(e){return k(!!e),G.fromTimestamp(function(t){const n=It(t);return new Q(n.seconds,n.nanos)}(e))}function Xr(e,t){return function(n){return new D(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Wc(e){const t=D.fromString(e);return k(rh(t)),t}function Oi(e,t){return Xr(e.databaseId,t.path)}function Qc(e){const t=Wc(e);return t.length===4?D.emptyPath():Jc(t)}function Yc(e){return new D(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Jc(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Wr(e,t,n){return{name:Oi(e,t),fields:n.value.mapValue.fields}}function Zc(e,t){let n;if(t instanceof ln)n={update:Wr(e,t.key,t.value)};else if(t instanceof xc)n={delete:Oi(e,t.key)};else if(t instanceof Pt)n={update:Wr(e,t.key,t.data),updateMask:sh(t.fieldMask)};else{if(!(t instanceof Vc))return T();n={verify:Oi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof sn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof de)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rn)return{fieldPath:r.field.canonicalString(),increment:o.C};throw T()}(0,i))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xc(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function th(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(i,s){let r=i.updateTime?xt(i.updateTime):xt(s);return r.isEqual(G.min())&&(r=xt(s)),new kc(r,i.transformResults||[])}(n,t))):[]}function eh(e){let t=Qc(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){k(i===1);const h=n.from[0];h.allDescendants?s=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=Qr(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new he(Vt(f.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ae(f)?null:f}(n.limit));let l=null;n.startAt&&(l=Yr(n.startAt));let c=null;return n.endAt&&(c=Yr(n.endAt)),vc(t,s,o,r,a,"F",l,c)}function Qr(e){return e?e.unaryFilter!==void 0?[ih(e)]:e.fieldFilter!==void 0?[nh(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Qr(t)).reduce((t,n)=>t.concat(n)):T():[]}function Yr(e){const t=!!e.before,n=e.values||[];return new bi(n,t)}function Vt(e){return K.fromServerFormat(e.fieldPath)}function nh(e){return z.create(Vt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}function ih(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vt(e.unaryFilter.field);return z.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Vt(e.unaryFilter.field);return z.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vt(e.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Vt(e.unaryFilter.field);return z.create(s,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function sh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const oh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ah{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,i)=>{n(t)})}static reject(t){return new p((n,i)=>{i(t)})}static waitFor(t){return new p((n,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(t){let n=p.resolve(!1);for(const i of t)n=n.next(s=>s?p.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function hn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&Lc(r,t,i[s])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Di(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Di(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const i=t.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(G.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Tt())}isEqual(t){return this.batchId===t.batchId&&Ot(this.mutations,t.mutations,(n,i)=>$r(n,i))&&Ot(this.baseMutations,t.baseMutations,(n,i)=>$r(n,i))}}class _i{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){k(t.mutations.length===i.length);let s=Bc();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new _i(t,n,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.Wt=t}}function hh(e){const t=eh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Nc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Gt=new fh}addToCollectionParentIndex(t,n){return this.Gt.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Gt.getEntries(n))}}class fh{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new W(D.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new W(D.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Mt(0)}static ie(){return new Mt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e){if(e.code!==u.FAILED_PRECONDITION||e.message!==oh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n])}else this.inner[i]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(t){se(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Sr(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.changes=new pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:G.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:Y.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?p.resolve(i.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n,i){this.He=t,this.In=n,this.Ht=i}An(t,n){return this.In.getAllMutationBatchesAffectingDocumentKey(t,n).next(i=>this.Rn(t,n,i))}Rn(t,n,i){return this.He.getEntry(t,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(t,n){t.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Pn(t,n){return this.He.getEntries(t,n).next(i=>this.vn(t,i).next(()=>i))}vn(t,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(t,n,i){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(t,n.path):Ac(n)?this.Sn(t,n,i):this.Dn(t,n,i)}Vn(t,n){return this.An(t,new I(n)).next(i=>{let s=zr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(t,n,i){const s=n.collectionGroup;let r=zr();return this.Ht.getCollectionParents(t,s).next(o=>p.forEach(o,a=>{const l=function(c,h){return new tn(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.Dn(t,l,i).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}Dn(t,n,i){let s,r;return this.He.getDocumentsMatchingQuery(t,n,i).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(t,n))).next(o=>(r=o,this.Cn(t,r,s).next(a=>{s=a;for(const l of r)for(const c of l.mutations){const h=c.key;let f=s.get(h);f==null&&(f=Y.newInvalidDocument(h),s=s.insert(h,f)),Di(c,f,l.localWriteTime),f.isFoundDocument()||(s=s.remove(h))}}))).next(()=>(s.forEach((o,a)=>{Ci(n,a)||(s=s.remove(o))}),s))}Cn(t,n,i){let s=Tt();for(const o of n)for(const a of o.mutations)a instanceof Pt&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.He.getEntries(t,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Nn=i,this.xn=s}static kn(t,n){let i=Tt(),s=Tt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ki(t,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{$n(t){this.On=t}getDocumentsMatchingQuery(t,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(G.min())?this.Fn(t,n):this.On.Pn(t,s).next(r=>{const o=this.Mn(n,r);return(Ec(n)||Ic(n))&&this.Ln(n.limitType,o,s,i)?this.Fn(t,n):(vr()<=S.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kr(n)),this.On.getDocumentsMatchingQuery(t,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(t,n){let i=new W(bc(t));return n.forEach((s,r)=>{Ci(t,r)&&(i=i.add(r))}),i}Ln(t,n,i,s){if(i.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(t,n){return vr()<=S.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",kr(n)),this.On.getDocumentsMatchingQuery(t,n,G.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,n,i,s){this.persistence=t,this.Bn=n,this.N=s,this.Un=new J(N),this.qn=new pe(r=>Ai(r),Ni),this.Kn=G.min(),this.In=t.getMutationQueue(i),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Zr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Un))}}function mh(e,t,n,i){return new gh(e,t,n,i)}async function to(e,t){const n=A(e);let i=n.In,s=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(t),s=new Zr(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],h=[];let f=Tt();for(const g of a){c.push(g.batchId);for(const w of g.mutations)f=f.add(w.key)}for(const g of l){h.push(g.batchId);for(const w of g.mutations)f=f.add(w.key)}return s.Pn(o,f).next(g=>({Wn:g,removedBatchIds:c,addedBatchIds:h}))})});return n.In=i,n.Qn=s,n.Bn.$n(n.Qn),r}function yh(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let g=p.resolve();return f.forEach(w=>{g=g.next(()=>c.getEntry(a,w)).next(b=>{const P=l.docVersions.get(w);k(P!==null),b.version.compareTo(P)<0&&(h.applyToRemoteDocument(b,l),b.isValidDocument()&&c.addEntry(b,l.commitVersion))})}),g.next(()=>o.In.removeMutationBatch(a,h))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,s))})}function vh(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ze.getLastRemoteSnapshotVersion(n))}function wh(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.In.getNextMutationBatchAfterBatchId(i,t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return p.resolve(this.Yn.get(n))}saveBundleMetadata(t,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:xt(i.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:hh(i.bundledQuery),readTime:xt(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.Zn=new W(L.ts),this.es=new W(L.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const i=new L(t,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.rs(new L(t,n))}os(t,n){t.forEach(i=>this.removeReference(i,n))}cs(t){const n=new I(new D([])),i=new L(n,t),s=new L(n,t+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new I(new D([])),i=new L(n,t),s=new L(n,t+1);let r=Tt();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new L(t,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class L{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return I.comparator(t.key,n.key)||N(t.ls,n.ls)}static ns(t,n){return N(t.ls,n.ls)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n){this.Ht=t,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new W(L.ts)}checkEmpty(t){return p.resolve(this.In.length===0)}addMutationBatch(t,n,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new lh(r,n,i,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new L(a.key,r)),this.Ht.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this._s(i),r=s<0?0:s;return p.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(t){return p.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new L(n,0),s=new L(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this.ws(o.ls);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new W(N);return n.forEach(s=>{const r=new L(s,0),o=new L(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),p.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;I.isDocumentKey(r)||(r=r.child(""));const o=new L(new I(r),0);let a=new W(N);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ls)),!0)},o),p.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(i=>{const s=this.ws(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){k(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return p.forEach(n.mutations,s=>{const r=new L(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.ds=i})}te(t){}containsKey(t,n){const i=new L(n,0),s=this.ds.firstAfterOrEqual(i);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.In.length,p.resolve()}ys(t,n){return this._s(t)}_s(t){return this.In.length===0?0:t-this.In[0].batchId}ws(t){const n=this._s(t);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n){this.Ht=t,this.ps=n,this.docs=new J(I.comparator),this.size=0}addEntry(t,n,i){const s=n.key,r=this.docs.get(s),o=r?r.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return p.resolve(i?i.document.clone():Y.newInvalidDocument(n))}getEntries(t,n){let i=Kr();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Y.newInvalidDocument(s))}),p.resolve(i)}getDocumentsMatchingQuery(t,n,i){let s=Kr();const r=new I(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||Ci(n,l)&&(s=s.insert(l.key,l.clone()))}return p.resolve(s)}Ts(t,n){return p.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new Sh(this)}getSize(t){return p.resolve(this.size)}}class Sh extends dh{constructor(t){super(),this.Se=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(t,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),p.waitFor(n)}getFromCache(t,n){return this.Se.getEntry(t,n)}getAllFromCache(t,n){return this.Se.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.persistence=t,this.Es=new pe(n=>Ai(n),Ni),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Is=0,this.As=new Li,this.targetCount=0,this.Rs=Mt.se()}forEachTarget(t,n){return this.Es.forEach((i,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),p.resolve()}ce(t){this.Es.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new Mt(n),this.highestTargetId=n),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,n){return this.ce(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.ce(n),p.resolve()}removeTargetData(t,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(r).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const i=this.Es.get(n)||null;return p.resolve(i)}addMatchingKeys(t,n,i){return this.As.ss(n,i),p.resolve()}removeMatchingKeys(t,n,i){this.As.os(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.cs(n),p.resolve()}getMatchingKeysForTargetId(t,n){const i=this.As.hs(n);return p.resolve(i)}containsKey(t,n){return p.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n){this.bs={},this.Le=new Er(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Ah(this),this.Ht=new uh,this.He=function(i,s){return new Th(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new ch(n),this.Je=new Eh(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let n=this.bs[t.toKey()];return n||(n=new Ih(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,n,i){y("MemoryPersistence","Starting transaction:",t);const s=new bh(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(t,n){return p.or(Object.values(this.bs).map(i=>()=>i.containsKey(t,n)))}}class bh extends ah{constructor(t){super(),this.currentSequenceNumber=t}}class Pi{constructor(t){this.persistence=t,this.Ds=new Li,this.Cs=null}static Ns(t){return new Pi(t)}get xs(){if(this.Cs)return this.Cs;throw T()}addReference(t,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),p.resolve()}removeReference(t,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),p.resolve()}removeTarget(t,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}vs(){this.Cs=new Set}Vs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.xs,i=>{const s=I.fromPath(i);return this.ks(t,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(t)))}updateLimboDocument(t,n){return this.ks(t,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(t){return 0}ks(t,n){return p.or([()=>p.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ss(t,n)])}}class eo{constructor(){this.activeTargetIds=Gc()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ch{constructor(){this.yi=new eo,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,n,i){this.pi[t]=n}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new eo,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{Ti(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,n,i,s){const r=this.Bi(t,n);y("RestConnection","Sending: ",r,i);const o={};return this.Ui(o,s),this.qi(t,r,o,i).then(a=>(y("RestConnection","Received: ",a),a),a=>{throw wr("RestConnection",`${t} failed with error: `,a,"url: ",r,"request:",i),a})}Ki(t,n,i,s){return this.Li(t,n,i,s)}Ui(t,n){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+Rt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(t[i]=n.authHeaders[i])}Bi(t,n){const i=Rh[t];return`${this.Fi}/v1/${n}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,n,i,s){return new Promise((r,o)=>{const a=new Ql;a.listenOnce(zl.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yi.NO_ERROR:const c=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(c)),r(c);break;case yi.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new v(u.DEADLINE_EXCEEDED,"Request time out"));break;case yi.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const g=function(w){const b=w.toLowerCase().replace(/_/g,"-");return Object.values(u).indexOf(b)>=0?b:u.UNKNOWN}(f.status);o(new v(g,f.message))}else o(new v(u.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(u.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}ji(t,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Gl(),r=Kl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Wl({})),this.Ui(o.initMessageHeaders,n),Go()||zo()||Xo()||Wo()||Qo()||Ko()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");y("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,h=!1;const f=new Oh({vi:w=>{h?y("Connection","Not sending because WebChannel is closed:",w):(c||(y("Connection","Opening WebChannel transport."),l.open(),c=!0),y("Connection","WebChannel sending:",w),l.send(w))},Vi:()=>l.close()}),g=(w,b,P)=>{w.listen(b,ve=>{try{P(ve)}catch(ht){setTimeout(()=>{throw ht},0)}})};return g(l,We.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),g(l,We.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),f.$i())}),g(l,We.EventType.ERROR,w=>{h||(h=!0,wr("Connection","WebChannel transport errored:",w),f.$i(new v(u.UNAVAILABLE,"The operation could not be completed")))}),g(l,We.EventType.MESSAGE,w=>{var b;if(!h){const P=w.data[0];k(!!P);const ve=P,ht=ve.error||((b=ve[0])===null||b===void 0?void 0:b.error);if(ht){y("Connection","WebChannel received error:",ht);const ji=ht.status;let yn=function(Ro){const Hi=O[Ro];if(Hi!==void 0)return Fc(Hi)}(ji),Bi=ht.message;yn===void 0&&(yn=u.INTERNAL,Bi="Unknown error status: "+ji+" with message "+ht.message),h=!0,f.$i(new v(yn,Bi)),l.close()}else y("Connection","WebChannel received:",P),f.Oi(P)}}),g(r,Xl.STAT_EVENT,w=>{w.stat===mr.PROXY?y("Connection","Detected buffering proxy"):w.stat===mr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}function xi(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){return new Kc(e,!0)}class io{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Oe=t,this.timerId=n,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-i);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,n,i,s,r,o,a){this.Oe=t,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new io(t,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,t!==4?this.ar.reset():n&&n.code===u.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===u.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{t(()=>{const s=new v(u.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(t){const n=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Tr(t){return n=>{this.Oe.enqueueAndForget(()=>this.ir===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lh extends kh{constructor(t,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const n=th(t.writeResults,t.commitTime),i=xt(t.commitTime);return this.listener.Dr(i,n)}return k(!t.writeResults||t.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=Yc(this.N),this.mr(t)}Sr(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>Zc(this.N,i))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph extends class{}{constructor(t,n,i){super(),this.credentials=t,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new v(u.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(t,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===u.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new v(u.UNKNOWN,s.toString())})}Ki(t,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(t,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===u.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new v(u.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class xh{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(t){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,t==="Online"&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(wt(n),this.Mr=!1):y("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{me(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=A(a);l.Wr.add(4),await ge(l),l.Hr.set("Unknown"),l.Wr.delete(4),await fn(l)}(this))})}),this.Hr=new xh(i,s)}}async function fn(e){if(me(e))for(const t of e.Gr)await t(!0)}async function ge(e){for(const t of e.Gr)await t(!1)}function me(e){return A(e).Wr.size===0}async function so(e,t,n){if(!hn(t))throw t;e.Wr.add(1),await ge(e),e.Hr.set("Offline"),n||(n=()=>vh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Wr.delete(1),await fn(e)})}function ro(e,t){return t().catch(n=>so(e,n,t))}async function dn(e){const t=A(e),n=lt(t);let i=t.jr.length>0?t.jr[t.jr.length-1].batchId:-1;for(;Mh(t);)try{const s=await wh(t.localStore,i);if(s===null){t.jr.length===0&&n.wr();break}i=s.batchId,Fh(t,s)}catch(s){await so(t,s)}oo(t)&&ao(t)}function Mh(e){return me(e)&&e.jr.length<10}function Fh(e,t){e.jr.push(t);const n=lt(e);n.hr()&&n.Vr&&n.Sr(t.mutations)}function oo(e){return me(e)&&!lt(e).ur()&&e.jr.length>0}function ao(e){lt(e).start()}async function Uh(e){lt(e).Nr()}async function $h(e){const t=lt(e);for(const n of e.jr)t.Sr(n.mutations)}async function jh(e,t,n){const i=e.jr.shift(),s=_i.from(i,t,n);await ro(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await dn(e)}async function Bh(e,t){t&&lt(e).Vr&&await async function(n,i){if(s=i.code,Mc(s)&&s!==u.ABORTED){const r=n.jr.shift();lt(n).dr(),await ro(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await dn(n)}var s}(e,t),oo(e)&&ao(e)}async function Hh(e,t){const n=A(e);t?(n.Wr.delete(2),await fn(n)):t||(n.Wr.add(2),await ge(n),n.Hr.set("Unknown"))}function lt(e){return e.Xr||(e.Xr=function(t,n,i){const s=A(t);return s.$r(),new Lh(n,s.sr,s.credentials,s.N,i)}(e.datastore,e.asyncQueue,{Si:Uh.bind(null,e),Ci:Bh.bind(null,e),Cr:$h.bind(null,e),Dr:jh.bind(null,e)}),e.Gr.push(async t=>{t?(e.Xr.dr(),await dn(e)):(await e.Xr.stop(),e.jr.length>0&&(y("RemoteStore",`Stopping write stream with ${e.jr.length} pending writes`),e.jr=[]))})),e.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new Vi(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(u.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lo(e,t){if(wt("AsyncQueue",`${t}: ${e}`),hn(e))return new v(u.UNAVAILABLE,`${t}: ${e}`);throw e}class qh{constructor(){this.queries=new pe(t=>_r(t),Or),this.onlineState="Unknown",this.so=new Set}}function Gh(e){e.so.forEach(t=>{t.next()})}class Kh{constructor(t,n,i,s,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new pe(a=>_r(a),Or),this.Fo=new Map,this.Mo=new Set,this.Lo=new J(I.comparator),this.Bo=new Map,this.Uo=new Li,this.qo={},this.Ko=new Map,this.jo=Mt.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function zh(e,t,n){const i=Yh(e);try{const s=await function(r,o){const a=A(r),l=Q.now(),c=o.reduce((f,g)=>f.add(g.key),Tt());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>a.Qn.Pn(f,c).next(g=>{h=g;const w=[];for(const b of o){const P=Pc(b,h.get(b.key));P!=null&&w.push(new Pt(b.key,P,Nr(P.value.mapValue),Lt.exists(!0)))}return a.In.addMutationBatch(f,l,w,o)})).then(f=>(f.applyToLocalDocumentSet(h),{batchId:f.batchId,changes:h}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.qo[r.currentUser.toKey()];l||(l=new J(N)),l=l.insert(o,a),r.qo[r.currentUser.toKey()]=l}(i,s.batchId,n),await pn(i,s.changes),await dn(i.remoteStore)}catch(s){const r=lo(s,"Failed to persist write");n.reject(r)}}function co(e,t,n){const i=A(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Oo.forEach((r,o)=>{const a=o.view.io(t);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.io(o)&&(l=!0)}),l&&Gh(a)}(i.eventManager,t),s.length&&i.$o.Rr(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Xh(e,t){const n=A(e),i=t.batch.batchId;try{const s=await yh(n.localStore,t);uo(n,i,null),ho(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await pn(n,s)}catch(s){await Jr(s)}}async function Wh(e,t,n){const i=A(e);try{const s=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(h=>(k(h!==null),c=h.keys(),a.In.removeMutationBatch(l,h))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,t);uo(i,t,n),ho(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await pn(i,s)}catch(s){await Jr(s)}}function ho(e,t){(e.Ko.get(t)||[]).forEach(n=>{n.resolve()}),e.Ko.delete(t)}function uo(e,t,n){const i=A(e);let s=i.qo[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.qo[i.currentUser.toKey()]=s}}async function pn(e,t,n){const i=A(e),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,t,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const h=ki.kn(l.targetId,c);r.push(h)}}))}),await Promise.all(o),i.$o.Rr(s),await async function(a,l){const c=A(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,f=>p.forEach(f.Nn,g=>c.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>p.forEach(f.xn,g=>c.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!hn(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=c.Un.get(f),w=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(w);c.Un=c.Un.insert(f,b)}}}(i.localStore,r))}async function Qh(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const i=await to(n.localStore,t);n.currentUser=t,function(s,r){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new v(u.CANCELLED,r))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await pn(n,i.Wn)}}function Yh(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wh.bind(null,t),t}class Jh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=un(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return mh(this.persistence,new ph,t.initialUser,this.N)}Jo(t){return new Nh(Pi.Ns,this.N)}Ho(t){return new Ch}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>co(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qh.bind(null,this.syncEngine),await Hh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qh}createDatastore(t){const n=un(t.databaseInfo.databaseId),i=(s=t.databaseInfo,new _h(s));var s;return function(r,o,a){return new Ph(r,o,a)}(t.credentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,s=t.asyncQueue,r=a=>co(this.syncEngine,a,0),o=no.bt()?new no:new Dh,new Vh(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(t,n){return function(i,s,r,o,a,l,c){const h=new Kh(i,s,r,o,a,l);return c&&(h.Qo=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);y("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await ge(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n,i){this.credentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=q.UNAUTHENTICATED,this.clientId=Ir.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{y("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(u.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(n){const i=lo(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function eu(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await to(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await iu(e);y("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(s=>async function(r,o){const a=A(r);a.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const l=me(a);a.Wr.add(3),await ge(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await fn(a)}(t.remoteStore,s)),e.onlineComponents=t}async function iu(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await eu(e,new Jh)),e.offlineComponents}async function su(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await nu(e,new Zh)),e.onlineComponents}function ru(e){return su(e).then(t=>t.syncEngine)}class ou{constructor(t,n,i,s,r,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class gn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t,n){if(!n)throw new v(u.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function au(e,t,n,i){if(t===!0&&i===!0)throw new v(u.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function go(e){if(!I.isDocumentKey(e))throw new v(u.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function mo(e){if(I.isDocumentKey(e))throw new v(u.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function lu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(u.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mi(e);throw new v(u.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(u.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(u.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,au("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yo({}),this._settingsFrozen=!1,t instanceof gn?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new v(u.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(i.options.projectId)}(t))}get app(){if(!this._app)throw new v(u.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(u.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yo(t),t.credentials!==void 0&&(this._credentials=function(n){if(!n)return new Jl;switch(n.type){case"gapi":const i=n.client;return k(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new ec(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(u.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=fo.get(t);n&&(y("ComponentProvider","Removing Datastore"),fo.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}}class Ui{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ui(this.firestore,t,this._query)}}class ct extends Ui{constructor(t,n,i){super(t,n,wc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new I(t))}withConverter(t){return new ct(this.firestore,t,this._path)}}function cu(e,t,...n){if(e=Ut(e),po("collection","path",t),e instanceof Fi){const i=D.fromString(t,...n);return mo(i),new ct(e,null,i)}{if(!(e instanceof rt||e instanceof ct))throw new v(u.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(D.fromString(t,...n));return mo(i),new ct(e.firestore,null,i)}}function hu(e,t,...n){if(e=Ut(e),arguments.length===1&&(t=Ir.I()),po("doc","path",t),e instanceof Fi){const i=D.fromString(t,...n);return go(i),new rt(e,null,new I(i))}{if(!(e instanceof rt||e instanceof ct))throw new v(u.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(D.fromString(t,...n));return go(i),new rt(e.firestore,e instanceof ct?e.converter:null,new I(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new io(this,"async_queue_retry"),this.Rc=()=>{const n=xi();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const t=xi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const n=xi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise(()=>{});const n=new Et;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.mc.push(t),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!hn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(t){const n=this._c.then(()=>(this.Ec=!0,t().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw wt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(t,n,i){this.bc(),this.Ac.indexOf(t)>-1&&(n=0);const s=Vi.createAndSchedule(this,t,n,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&T()}verifyOperationInProgress(){}async Sc(){let t;do t=this._c,await t;while(t!==this._c)}Dc(t){for(const n of this.yc)if(n.timerId===t)return!0;return!1}Cc(t){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Sc()})}Nc(t){this.Ac.push(t)}Vc(t){const n=this.yc.indexOf(t);this.yc.splice(n,1)}}class vo extends Fi{constructor(t,n){super(t,n),this.type="firestore",this._queue=new uu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||wo(this),this._firestoreClient.terminate()}}function fu(e=Ba()){return Ma(e,"firestore").getImmediate()}function du(e){return e._firestoreClient||wo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wo(e){var t;const n=e._freezeSettings(),i=function(s,r,o,a){return new ou(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new tu(e._credentials,e._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(u.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ye(st.fromBase64String(t))}catch(n){throw new v(u.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ye(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(u.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(u.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=/^__.*__$/;class gu{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Pt(t,this.data,this.fieldMask,n,this.fieldTransforms):new ln(t,this.data,n,this.fieldTransforms)}}function So(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class $i{constructor(t,n,i,s,r,o){this.settings=t,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=s,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new $i(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.$c({path:i,Fc:!1});return s.Mc(t),s}Lc(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.$c({path:i,Fc:!1});return s.xc(),s}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return mn(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(t.length===0)throw this.Uc("Document fields must not be empty");if(So(this.kc)&&pu.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class mu{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.N=i||un(t)}jc(t,n,i,s=!1){return new $i({kc:t,methodName:n,Kc:i,path:K.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function yu(e){const t=e._freezeSettings(),n=un(e._databaseId);return new mu(e._databaseId,!!t.ignoreUndefinedProperties,n)}function vu(e,t,n,i,s,r={}){const o=e.jc(r.merge||r.mergeFields?2:0,t,n,s);Co("Data must be an object, but it was:",o,i);const a=No(i,o);let l,c;if(r.merge)l=new wi(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const g=wu(t,f,n);if(!o.contains(g))throw new v(u.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Tu(h,g)||h.push(g)}l=new wi(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new gu(new et(a),l,c)}function Ao(e,t){if(bo(e=Ut(e)))return Co("Unsupported field value:",t,e),No(e,t);if(e instanceof Io)return function(n,i){if(!So(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&t.kc!==4)throw t.Uc("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Ao(o,i.Bc(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(e,t)}return function(n,i){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Dc(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Q.fromDate(n);return{timestampValue:Ri(i.N,s)}}if(n instanceof Q){const s=new Q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ri(i.N,s)}}if(n instanceof To)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ye)return{bytesValue:zc(i.N,n._byteString)};if(n instanceof rt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xr(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${Mi(n)}`)}(e,t)}function No(e,t){const n={};return Sr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):se(e,(i,s)=>{const r=Ao(s,t.Oc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function bo(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof To||e instanceof ye||e instanceof rt||e instanceof Io)}function Co(e,t,n){if(!bo(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Mi(n);throw i==="an object"?t.Uc(e+" a custom object"):t.Uc(e+" "+i)}}function wu(e,t,n){if((t=Ut(t))instanceof Eo)return t._internalPath;if(typeof t=="string")return Iu(e,t);throw mn("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Eu=new RegExp("[~\\*/\\[\\]]");function Iu(e,t,n){if(t.search(Eu)>=0)throw mn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Eo(...t.split("."))._internalPath}catch{throw mn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function mn(e,t,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new v(u.INVALID_ARGUMENT,a+e+l)}function Tu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function Au(e,t){const n=lu(e.firestore,vo),i=hu(e),s=Su(e.converter,t);return Nu(n,[vu(yu(e.firestore),"addDoc",i._key,s,e.converter!==null,{}).toMutation(i._key,Lt.exists(!1))]).then(()=>i)}function Nu(e,t){return function(n,i){const s=new Et;return n.asyncQueue.enqueueAndForget(async()=>zh(await ru(n),i,s)),s.promise}(du(e),t)}(function(e,t=!0){(function(n){Rt=n})($a),bn(new Ie("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new vo(s,new Zl(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r},"PUBLIC")),St(yr,"3.3.1",e),St(yr,"3.3.1","esm2017")})();var bu="firebase",Cu="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(bu,Cu,"app");const Du={apiKey:"AIzaSyBoMyY5DqNkMMH2djvJ8yuoY05U7gRntW4",authDomain:"hyr-dev.firebaseapp.com",databaseURL:"https://hyr-dev-default-rtdb.firebaseio.com",projectId:"hyr-dev",storageBucket:"hyr-dev.appspot.com",messagingSenderId:"21615079897",appId:"1:21615079897:web:7e6604d721a54f161669c8",measurementId:"G-S54ZJBTJ47"},Ru=ja(Du),Ou=fu(Ru),_u=async e=>{const t=JSON.parse(JSON.stringify(e)),n=[];for(let i=0;i<t.length;i++)try{const s=await Au(cu(Ou,"players"),{name:t[i].name,score:t[i].score});n.push(Ki({id:s.id},t[i]))}catch(s){console.log(s.code,s.message),n.push("unsaved")}return n};const ku=["for","textContent"],Lu=["type","placeholder","disabled","name","id","value"],Pu=["placeholder","disabled","name","id","rows","value"];function xu(e){return(t,n)=>(Z(),ut("div",null,[zi("label",{for:e.inputName,textContent:Lo(e.placeholder)},null,8,ku),e.textArea?vn("",!0):(Z(),ut("input",{key:0,type:e.type,placeholder:e.placeholder,disabled:e.disabled,name:e.inputName,id:e.inputName,value:e.inputValue,onKeyup:n[0]||(n[0]=(...i)=>e.onChange&&e.onChange(...i))},null,40,Lu)),e.textArea?(Z(),ut("textarea",{key:1,placeholder:e.placeholder,disabled:e.disabled,name:e.inputName,id:e.inputName,rows:e.rows,value:e.inputValue,onKeyup:n[1]||(n[1]=(...i)=>e.onChange&&e.onChange(...i))},null,40,Pu)):vn("",!0)]))}const Vu={name:"InputComponent"},Mu=Object.assign(Vu,{props:{type:{type:String,default:"text"},inputValue:{type:[String,Number]},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},inputName:{type:String,default:""},textArea:{type:Boolean,default:!1},rows:{type:Number,default:3},onChange:{type:Function}},setup:xu});var Fu=Qi(Mu,[["__scopeId","data-v-64b0b302"]]);const Ft={WAIT:0,LOADING:1,ERROR:2,SUCCESS:3},Uu={name:"RegisterForm",components:{Input:Fu,Button:Bo},setup(){const{dispatch:e}=Po(),{push:t}=xo(),n=we(2),i=we(!1),s=we([]),r=we(0),o=c=>{const{name:h,value:f}=c.target;if(h==="numPlayers"){if(n.value=0,f==="")n.value=2;else{const w=parseInt(f);n.value=w>4?4:w}return}const g=h.split("").reverse()[0];s.value[g-1]={player:parseInt(g),name:f,score:0,color:Ho()}},a=async()=>{if(r.value=Ft.LOADING,s.value.length!==n.value){alert("Please, fill all the players names"),r.value=Ft.ERROR;return}const c=await _u(s.value);if(c.includes("unsaved")){alert("Error registering players, try again"),r.value=Ft.ERROR;return}s.value=c,r.value=Ft.SUCCESS},l=()=>{i.value=!0};return Vo(()=>{r.value===Ft.SUCCESS&&(e("player/registerUsers",s.value),t({path:"/game"}))}),{LOADING_STATUS:Ft,numPlayers:n,manyPlayers:i,players:s,loading:r,onChange:o,onClickSetManyPlayers:l,registerUsers:a}}},$u=e=>(Uo("data-v-090c36d5"),e=e(),$o(),e),ju={class:"form"},Bu=$u(()=>zi("h1",null,"BOWLING 2D",-1)),Hu={key:0,class:"num-players"},qu={key:1};function Gu(e,t,n,i,s,r){const o=Xi("Input"),a=Xi("Button");return Z(),ut("div",ju,[Bu,i.manyPlayers?(Z(),ut("div",qu,[(Z(!0),ut(Mo,null,Fo([...Array(i.numPlayers)],(l,c)=>(Z(),En(o,{key:c,type:"text",placeholder:`Player ${c+1} name`,inputName:`playerName${c+1}`,inputValue:i.players[l]||"",onChange:i.onChange},null,8,["placeholder","inputName","inputValue","onChange"]))),128)),i.players.length===i.numPlayers?(Z(),En(a,{key:0,label:"Start game",action:i.registerUsers,disabled:!1,loading:!1,bg:i.loading===i.LOADING_STATUS.WAIT?"success":i.loading===i.LOADING_STATUS.LOADING||i.loading===i.LOADING_STATUS.SUCCESS?"disabled":"danger"},null,8,["action","bg"])):vn("",!0)])):(Z(),ut("div",Hu,[wn(o,{type:"number",placeholder:"Num players",inputName:"numPlayers",inputValue:i.numPlayers,onChange:i.onChange},null,8,["inputValue","onChange"]),wn(a,{label:"Number of players",action:i.onClickSetManyPlayers,disabled:!1,loading:!1,bg:"success"},null,8,["action"])]))])}var Do=Qi(Uu,[["render",Gu],["__scopeId","data-v-090c36d5"]]);function Ku(e){return(t,n)=>(Z(),En(Wi,null,{default:jo(()=>[wn(Do)]),_:1}))}const zu={name:"RegisterPage",components:{Container:Wi,Form:Do},mounted(){this.$store.dispatch("game/clearAllStates"),this.$store.dispatch("player/clearAllStates")}},Zu=Object.assign(zu,{setup:Ku});export{Zu as default};
