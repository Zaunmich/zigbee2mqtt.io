"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3795],{55159:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-279c9661",path:"/devices/TS0601_smart_human_presense_sensor.html",title:"TuYa TS0601_smart_human_presense_sensor control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_smart_human_presense_sensor control via MQTT",description:"Integrate your TuYa TS0601_smart_human_presense_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-04-30T08:00:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Target_distance (numeric)",slug:"target-distance-numeric",children:[]},{level:3,title:"Radar_sensitivity (numeric)",slug:"radar-sensitivity-numeric",children:[]},{level:3,title:"Minimum_range (numeric)",slug:"minimum-range-numeric",children:[]},{level:3,title:"Maximum_range (numeric)",slug:"maximum-range-numeric",children:[]},{level:3,title:"Detection_delay (numeric)",slug:"detection-delay-numeric",children:[]},{level:3,title:"Fading_time (numeric)",slug:"fading-time-numeric",children:[]},{level:3,title:"Self_test (enum)",slug:"self-test-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_smart_human_presense_sensor.md",git:{updatedTime:1653640266e3}}},29756:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const a=(0,i(66252).uE)('<h1 id="tuya-ts0601-smart-human-presense-sensor" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-smart-human-presense-sensor" aria-hidden="true">#</a> TuYa TS0601_smart_human_presense_sensor</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_smart_human_presense_sensor</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Smart Human presence sensor</td></tr><tr><td>Exposes</td><td>illuminance_lux, presence, target_distance, radar_sensitivity, minimum_range, maximum_range, detection_delay, fading_time, self_test, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_smart_human_presense_sensor.jpg" alt="TuYa TS0601_smart_human_presense_sensor"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric" aria-hidden="true">#</a> Target_distance (numeric)</h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar_sensitivity (numeric)</h3><p>sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#minimum-range-numeric" aria-hidden="true">#</a> Minimum_range (numeric)</h3><p>Minimum range. Value can be found in the published state on the <code>minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id="maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#maximum-range-numeric" aria-hidden="true">#</a> Maximum_range (numeric)</h3><p>Maximum range. Value can be found in the published state on the <code>maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id="detection-delay-numeric" tabindex="-1"><a class="header-anchor" href="#detection-delay-numeric" aria-hidden="true">#</a> Detection_delay (numeric)</h3><p>Detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric" aria-hidden="true">#</a> Fading_time (numeric)</h3><p>Fading time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1500</code>. The unit of this value is <code>s</code>.</p><h3 id="self-test-enum" tabindex="-1"><a class="header-anchor" href="#self-test-enum" aria-hidden="true">#</a> Self_test (enum)</h3><p>Self_test, possible resuts: checking, check_success, check_failure, others, comm_fault, radar_fault.. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>, <code>comm_fault</code>, <code>radar_fault</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),d={},n=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);