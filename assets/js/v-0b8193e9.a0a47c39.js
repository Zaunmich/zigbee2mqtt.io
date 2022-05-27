"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10650],{80546:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0b8193e9",path:"/guide/configuration/zigbee-network.html",title:"Zigbee network",lang:"en-US",frontmatter:{sidebarDepth:1,pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Permit join",slug:"permit-join",children:[]},{level:2,title:"Network config",slug:"network-config",children:[{level:3,title:"Specifying network_key in a different file",slug:"specifying-network-key-in-a-different-file",children:[]}]}],filePathRelative:"guide/configuration/zigbee-network.md",git:{updatedTime:1653640266e3}}},22504:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(66252);const t=(0,e.uE)('<h1 id="zigbee-network" tabindex="-1"><a class="header-anchor" href="#zigbee-network" aria-hidden="true">#</a> Zigbee network</h1><h2 id="permit-join" tabindex="-1"><a class="header-anchor" href="#permit-join" aria-hidden="true">#</a> Permit join</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Optional: allow new devices to join.</span>\n<span class="token key atrule">permit_join</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">ATTENTION</p><p>It&#39;s important to disable <code>permit_join</code> after you&#39;ve peered your devices. This keeps the Zigbee network safe and prevents accidental joining of other Zigbee devices. When a device joins, the coordinator exposes the network key.</p></div><h2 id="network-config" tabindex="-1"><a class="header-anchor" href="#network-config" aria-hidden="true">#</a> Network config</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: ZigBee pan ID (default: shown below)</span>\n  <span class="token comment"># Setting pan_id: GENERATE will make Zigbee2MQTT generate a new panID on next startup</span>\n  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">0x1a62</span>\n  <span class="token comment"># Optional: Zigbee extended pan ID (default: shown below)</span>\n  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">]</span>\n  <span class="token comment"># Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)</span>\n  <span class="token comment"># (default: 11)</span>\n  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">11</span>\n  <span class="token comment"># Optional: network encryption key, will improve security </span>\n  <span class="token comment"># Note: changing requires repairing of all devices (default: shown below)</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span> <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Set <code>network_key: GENERATE</code> to let Zigbee2MQTT generate a new random key on the first start. The <code>configuration.yml</code> gets updated with the new key. Changing the network_key requires repairing of all devices.</p></div>',7),p={class:"custom-container tip"},o=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),c=(0,e.Uk)("Reduce Wi-Fi interference by changing the Zigbee channel"),l=(0,e.uE)('<h3 id="specifying-network-key-in-a-different-file" tabindex="-1"><a class="header-anchor" href="#specifying-network-key-in-a-different-file" aria-hidden="true">#</a> Specifying network_key in a different file</h3><p>To specify the network_key in a different file, e.g <code>secret.yaml</code>, use the following configuration.</p><p><strong>configuration.yaml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># IMPORTANT: Don&#39;t forget the quotes!</span>\n<span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret network_key&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>secret.yaml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),i={},r=(0,a(83744).Z)(i,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("div",p,[o,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wi-fi-interference-by-changing-the-zigbee-channel.html"},{default:(0,e.w5)((()=>[c])),_:1})])]),l],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);