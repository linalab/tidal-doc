(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),l=(r(0),r(218)),i={title:"Mutable Instruments Ugens",id:"mi-ugens"},o={unversionedId:"reference/mi-ugens",id:"reference/mi-ugens",isDocsHomePage:!1,title:"Mutable Instruments Ugens",description:"Description",source:"@site/docs/reference/mi-ugens.md",slug:"/reference/mi-ugens",permalink:"/docs/reference/mi-ugens",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/mi-ugens.md",version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1658288503,sidebar:"reference",previous:{title:"Composition",permalink:"/docs/reference/composition"}},s=[{value:"Description",id:"description",children:[]},{value:"Reference",id:"reference",children:[]},{value:"Installation",id:"installation",children:[{value:"Automatic",id:"automatic",children:[]},{value:"Manual",id:"manual",children:[]}]},{value:"Synth Reference",id:"synth-reference",children:[{value:"omi",id:"omi",children:[]},{value:"plaits",id:"plaits",children:[]},{value:"braids",id:"braids",children:[]}]},{value:"Effects (Global)",id:"effects-global",children:[{value:"verb",id:"verb",children:[]},{value:"clouds",id:"clouds",children:[]},{value:"etc",id:"etc",children:[]}]}],b={toc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://mutable-instruments.net/"},"Mutable Instruments")," is popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, \xc9milie Gillet, has made all of her work ",Object(l.b)("a",{parentName:"p",href:"https://github.com/pichenettes/eurorack"},"open source"),". ",Object(l.b)("a",{parentName:"p",href:"https://vboehm.net/"},"Volker B\xf6hm")," has taken the time to ",Object(l.b)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"port")," some of these modules to ",Object(l.b)("a",{parentName:"p",href:"https://supercollider.github.io/"},"SuperCollider"),"."),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://todo"},"Synthdefs")," for Braids, Omi, and Plaits"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://todo"},"Effects")," for Verb, Clouds, Rings, etc"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://todo"},"Other")," ???")),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("h3",{id:"automatic"},"Automatic"),Object(l.b)("p",null,"For debian/ubuntu/mint systems, these ugens can be installed as part of the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/cleary/ansible-tidalcycles#ugens-mutable-instruments"},"ansible Tidal installer")),Object(l.b)("h3",{id:"manual"},"Manual"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Unpack the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens/releases/latest/"},"latest release")," from ",Object(l.b)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"mi-Ugens")," appropriate to your Operating System")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Move the top level directory of the archive (",Object(l.b)("inlineCode",{parentName:"p"},"mi-UGens/"),") into the SuperCollider Extensions folder (create it if it doesn't exist):"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Linux:   ",Object(l.b)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/Extensions/mi-UGens")),Object(l.b)("li",{parentName:"ul"},"Windows: ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\Extensions\\mi-UGens")),Object(l.b)("li",{parentName:"ul"},"OSX:     ",Object(l.b)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/Extensions/mi-UGens"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," The SuperCollider Extensions folder can be found by running ",Object(l.b)("inlineCode",{parentName:"p"},"Platform.userExtensionDir")," in SuperCollider. The path will be printed to the post window."),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Create a new synthdef file ",Object(l.b)("inlineCode",{parentName:"li"},"mi-ugens.scd"),", with ",Object(l.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-synthdefs.scd"},"these synthdefs"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Linux:   ",Object(l.b)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens.scd")),Object(l.b)("li",{parentName:"ul"},"Windows: ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\synthdefs\\mi-ugens.scd")),Object(l.b)("li",{parentName:"ul"},"OSX:     ",Object(l.b)("inlineCode",{parentName:"li"},"/home/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens.scd"))),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Create a new parameter definitions file, ",Object(l.b)("inlineCode",{parentName:"li"},"mi-ugens-params.hs"),", with ",Object(l.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-ugens_parameters.hs"},"these parameters"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Linux:   ",Object(l.b)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens-params.hs")),Object(l.b)("li",{parentName:"ul"},"Windows: ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\synthdefs\\mi-ugens-params.hs")),Object(l.b)("li",{parentName:"ul"},"OSX:     ",Object(l.b)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens-params.hs"))),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Configure SuperCollider - edit your ",Object(l.b)("inlineCode",{parentName:"li"},"startup.scd"),":")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Linux:   ",Object(l.b)("inlineCode",{parentName:"li"},"/home/<youruser>/.conf/SuperCollider/startup.scd")),Object(l.b)("li",{parentName:"ul"},"Windows: ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\startup.scd")),Object(l.b)("li",{parentName:"ul"},"OSX:     ",Object(l.b)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/startup.scd"))),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Load the ",Object(l.b)("inlineCode",{parentName:"li"},"mi-ugens.scd")," synthdef in ",Object(l.b)("inlineCode",{parentName:"li"},"startup.scd"),". Use the full path from ",Object(l.b)("strong",{parentName:"li"},"3."))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"NOTE FOR WINDOWS USERS: you must use double backslashes for the ",Object(l.b)("inlineCode",{parentName:"em"},"load()")," path in startup.scd, eg ",Object(l.b)("inlineCode",{parentName:"em"},'load("C:\\\\Users\\\\<youruser>\\...");'))),Object(l.b)("p",null,"After:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"...\n  ~dirt = SuperDirt(2, s);\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'  // load mi-ugens.scd synthdefs\n  load("FULL_PATH_TO_mi-ugens.scd");\n  // end load mi-ugens.scd synthdefs\n')),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Configure ",Object(l.b)("inlineCode",{parentName:"li"},"verb")," and ",Object(l.b)("inlineCode",{parentName:"li"},"clouds")," as ",Object(l.b)("strong",{parentName:"li"},"Global Effects"),". Add the following stanza as indicated to your ",Object(l.b)("inlineCode",{parentName:"li"},"startup.scd"),":")),Object(l.b)("p",null,"After:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"...\n            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];\n        );\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"        // define global effects for mutable instruments effects\n        ~dirt.orbits.do { |x|\n            var clouds = GlobalDirtEffect(\\global_mi_clouds, [\\cloudspitch, \\cloudspos, \\cloudssize, \\cloudsdens, \\cloudstex, \\cloudswet, \\cloudsgain, \\cloudsspread, \\cloudsrvb, \\cloudsfb, \\cloudsfreeze, \\cloudsmode, \\cloudslofi]);\n            var verb = GlobalDirtEffect(\\global_mi_verb, [\\verbwet, \\verbtime, \\verbdamp, \\verbhp, \\verbfreeze, \\verbdiff, \\verbgain]);\n            x.globalEffects = x.globalEffects\n              .addFirst(clouds)\n              .addFirst(verb); \n            x.initNodeTree;    \n        };                     \n        // end define global effects for mutable instruments effects\n")),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Save your ",Object(l.b)("inlineCode",{parentName:"p"},"startup.scd")," and exit")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You can choose to import the ",Object(l.b)("inlineCode",{parentName:"p"},"mi-ugens-params.hs")," parameter definitions manually in your tidal session, or add the following line to the ",Object(l.b)("inlineCode",{parentName:"p"},"BootTidal.hs")," file associated with your editor of choice (locating the correct ",Object(l.b)("inlineCode",{parentName:"p"},"BootTidal.hs")," is beyond the scope of this reference)"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'        ...\n        :script "FULL_PATH_TO_mi-ugens-params.hs"\n        ^:set prompt (.*$)\n        ...\n')),Object(l.b)("ol",{start:10},Object(l.b)("li",{parentName:"ol"},"Start/restart SuperCollider")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"OSX Users Note: you may see a security dialog disallowing the ugens to run. Please see ",Object(l.b)("a",{parentName:"strong",href:"https://club.tidalcycles.org/t/mutable-instruments-ugens/2730/106"},"this post by @oscd")," for workarounds/fixes")),Object(l.b)("h2",{id:"synth-reference"},"Synth Reference"),Object(l.b)("h3",{id:"omi"},"omi"),Object(l.b)("p",null,"Description: todo"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param")),Object(l.b)("h3",{id:"plaits"},"plaits"),Object(l.b)("p",null,"Description: todo"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param")),Object(l.b)("h3",{id:"braids"},"braids"),Object(l.b)("p",null,"Description: todo"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param")),Object(l.b)("h2",{id:"effects-global"},"Effects (Global)"),Object(l.b)("h3",{id:"verb"},"verb"),Object(l.b)("p",null,"Description: todo"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param")),Object(l.b)("h3",{id:"clouds"},"clouds"),Object(l.b)("p",null,"Description: todo"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param"),Object(l.b)("li",{parentName:"ul"},"param")),Object(l.b)("h3",{id:"etc"},"etc"))}c.isMDXComponent=!0},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);