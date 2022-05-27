"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90679],{3339:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-356d278e",path:"/devices/GDC311ZBQ1.html",title:"TuYa GDC311ZBQ1 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa GDC311ZBQ1 control via MQTT",description:"Integrate your TuYa GDC311ZBQ1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-03T11:58:11.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Trigger (binary)",slug:"trigger-binary",children:[]},{level:3,title:"Garage_door_contact (binary)",slug:"garage-door-contact-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GDC311ZBQ1.md",git:{updatedTime:1653640266e3}}},27463:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const r=(0,a(66252).uE)('<h1 id="tuya-gdc311zbq1" tabindex="-1"><a class="header-anchor" href="#tuya-gdc311zbq1" aria-hidden="true">#</a> TuYa GDC311ZBQ1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GDC311ZBQ1</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>LoraTap garage door opener with wireless sensor</td></tr><tr><td>Exposes</td><td>trigger, garage_door_contact, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GDC311ZBQ1.jpg" alt="TuYa GDC311ZBQ1"></td></tr><tr><td>White-label</td><td>LoraTap GDC311ZBQ1</td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="trigger-binary" tabindex="-1"><a class="header-anchor" href="#trigger-binary" aria-hidden="true">#</a> Trigger (binary)</h3><p>Trigger the door movement. Value can be found in the published state on the <code>trigger</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger&quot;: NEW_VALUE}</code>. If value equals <code>true</code> trigger is ON, if <code>false</code> OFF.</p><h3 id="garage-door-contact-binary" tabindex="-1"><a class="header-anchor" href="#garage-door-contact-binary" aria-hidden="true">#</a> Garage_door_contact (binary)</h3><p>Indicates if the garage door contact is closed (= true) or open (= false). Value can be found in the published state on the <code>garage_door_contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> garage_door_contact is ON, if <code>true</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},i=(0,a(83744).Z)(d,[["render",function(e,t){return r}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,r]of t)e[a]=r;return e}}}]);