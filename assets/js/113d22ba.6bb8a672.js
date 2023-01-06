"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?l.createElement(m,o(o({ref:t},c),{},{components:a})):l.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:n,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=a(3117),n=(a(7294),a(3905));const i={title:"Windows",permalink:"wiki/Windows_choco_install/",layout:"wiki"},o=void 0,r={unversionedId:"getting-started/windows_install",id:"getting-started/windows_install",title:"Windows",description:"-----",source:"@site/docs/getting-started/windows_install.md",sourceDirName:"getting-started",slug:"/getting-started/windows_install",permalink:"/docs/getting-started/windows_install",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/windows_install.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1673036671,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{title:"Windows",permalink:"wiki/Windows_choco_install/",layout:"wiki"},sidebar:"docs",previous:{title:"MacOS",permalink:"/docs/getting-started/macos_install"},next:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"}},s={},p=[{value:"Automatic installation",id:"automatic-installation",level:2},{value:"Installation procedure",id:"installation-procedure",level:3},{value:"Manual installation",id:"manual-installation",level:2},{value:"SC3 Plugins",id:"sc3-plugins",level:3},{value:"SuperDirt",id:"superdirt",level:3},{value:"Tidal Cycles",id:"tidal-cycles",level:3},{value:"Note for Windows 7 users",id:"note-for-windows-7-users",level:2},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": (Dec 19) This script will install the text editor Atom, which has now been sunset - see ",(0,n.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/getting-started/editor/Atom"},"details"),". We are adopting the Pulsar text editor and are currently working to refactor this install with Pulsar, but it is not available yet. If you use this install method please review the ",(0,n.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/getting-started/editor/Pulsar"},"Pulsar install"),' documentation in the "Get a Text Editor" section. Currently, we do not have steps ready for a manual install of the tidalcycles package for Pulsar on Windows. The install via package manager method should resolve this and is expected to be available soon. Updates will be provided or you can check: \\\n',(0,n.kt)("strong",{parentName:"p"},"TidalCycles Discord channel for Pulsar"),": ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/779427371270275082/1047429699346903132"},"https://discord.com/channels/779427371270275082/1047429699346903132")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"automatic-installation"},"Automatic installation"),(0,n.kt)("p",null,"There is an automatic installer for Tidal Cycles for Windows. It will install everything you need, including the required dependencies (",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell"),", ",(0,n.kt)("a",{parentName:"p",href:"https://atom.io/"},"Atom Editor"),", ",(0,n.kt)("a",{parentName:"p",href:"http://supercollider.github.io/"},"SuperCollider"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),"). The installer assumes that these components aren't installed already. If they are, you might be better off installing all the rest by hand!"),(0,n.kt)("h3",{id:"installation-procedure"},"Installation procedure"),(0,n.kt)("p",null,"Installation is a three step process. It is mostly automated, but expect\nwindows to give a few security pop-ups for you to accept. Windows 7 users: please report to the specific section at the end of this page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I - Starting powershell as administrator")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Windows 10 - Hold down the windows key\nand press 'x', then choose Windows PowerShell (admin) in\nthe menu that pops up."),(0,n.kt)("li",{parentName:"ul"},"Windows 7 - Click the start button, type ",(0,n.kt)("inlineCode",{parentName:"li"},"powershell"),", then\nclick with the right mouse button and choose ",(0,n.kt)("strong",{parentName:"li"},"Run as\nAdministrator"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"II - Installing Chocolatey: the package manager")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package\nmanager is required. If you haven't installed it previously, you can\nget it by running this command:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"III - Installing Tidal Cycles")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Run the following command to install Tidal Cycles using Chocolatey:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"choco install tidalcycles\n"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note:")," We are still working on the automatic installer. A lot of confusing information will scroll past. Please ignore messages about restarting Powershell. Just let the process run to the end."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,n.kt)("p",null,"You might prefer to install the different components of Tidal Cycles by hand. This is the recommand way for users who already installed some of the components (",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell"),", ",(0,n.kt)("a",{parentName:"p",href:"https://atom.io/"},"Atom Editor"),", ",(0,n.kt)("a",{parentName:"p",href:"https://supercollider.github.io/downloads"},"SuperCollider"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),"). All these components are needed to install Tidal Cycles."),(0,n.kt)("h3",{id:"sc3-plugins"},"SC3 Plugins"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," is needed if you want to use any of the synthesizers included with Tidal Cycles. Most of the examples in the documentation will still work, but your intallation will likely be incomplete without it. You can skip the installation but be sure to come back later to install it if you want."),(0,n.kt)("h3",{id:"superdirt"},"SuperDirt"),(0,n.kt)("p",null,"SuperDirt is the audio engine used by Tidal. Without it, Tidal Cycles will not emit any sound and will not be able to communicate through OSC or MIDI with other synthesizers. To install it, open SuperCollider and run the following command in the interactive editor (press Ctrl+Return to evaluate):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),(0,n.kt)("p",null,"The installation will take a little while. You will know when the installation process is done by looking at the logs window. It will likely print something like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:28--\x3e\n*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.\n")),(0,n.kt)("h3",{id:"tidal-cycles"},"Tidal Cycles"),(0,n.kt)("p",null,"You will need ",(0,n.kt)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell")," (Ghcup) to install Tidal Cycles. If you just installed it or already got it installed, open ",(0,n.kt)("inlineCode",{parentName:"p"},"PowerShell")," in ",(0,n.kt)("strong",{parentName:"p"},"administrator mode")," (see above). Enter the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cabal\xa0update\ncabal\xa0v1-install\xa0tidal\n")),(0,n.kt)("p",null,"Make sure to use ",(0,n.kt)("inlineCode",{parentName:"p"},"v1-install"),", as ",(0,n.kt)("inlineCode",{parentName:"p"},"v2-install tidal")," ",(0,n.kt)("em",{parentName:"p"},"may not work"),"."),(0,n.kt)("p",null,"The last command might take some time to complete. Be patient, and everything will be alright \ud83d\ude04. "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"note-for-windows-7-users"},"Note for Windows 7 users"),(0,n.kt)("p",null,"If you are using Windows 7, some extra preparation is required before installing everything else:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure Windows 7 is up to date with the latest patches."),(0,n.kt)("li",{parentName:"ol"},"Install/upgrade to .NET 4.5. You can ",(0,n.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-gb/download/details.aspx?id=30653"},"download it here"),"."),(0,n.kt)("li",{parentName:"ol"},"Install Visual C++ redistributable. You can ",(0,n.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads"},"download it here"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),(0,n.kt)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}d.isMDXComponent=!0}}]);