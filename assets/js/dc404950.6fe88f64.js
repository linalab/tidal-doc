"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const l={title:"Type signatures",permalink:"wiki/Type_signatures/",layout:"wiki",tags:["Reference"]},s=void 0,i={unversionedId:"advanced/understanding-innards/Type_signatures",id:"advanced/understanding-innards/Type_signatures",title:"Type signatures",description:"In Haskell (which Tidal lives in), a type signature tells you what kind",source:"@site/docs/advanced/understanding-innards/Type_signatures.md",sourceDirName:"advanced/understanding-innards",slug:"/advanced/understanding-innards/Type_signatures",permalink:"/docs/advanced/understanding-innards/Type_signatures",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/advanced/understanding-innards/Type_signatures.md",tags:[{label:"Reference",permalink:"/docs/tags/reference"}],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1673161930,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{title:"Type signatures",permalink:"wiki/Type_signatures/",layout:"wiki",tags:["Reference"]},sidebar:"advanced",previous:{title:"What is a pattern",permalink:"/docs/advanced/understanding-innards/What_is_a_pattern"},next:{title:"Haskell resources",permalink:"/docs/advanced/understanding-innards/Haskell_resources"}},o={},p=[],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Haskell (which Tidal lives in), a type signature tells you what kind\nof thing a value or function is. They're particularly useful for finding\nout what a function expects from you, and what it gives back."),(0,r.kt)("p",null,"You can find out the type of a function is with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},":t\n")),(0,r.kt)("p",null,", for example to find out the type signature for ",(0,r.kt)("a",{parentName:"p",href:"rev",title:"wikilink"},"rev"),",\nyou could type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},":t rev\n")),(0,r.kt)("p",null,"into your editor, and evaluate it. You'll see this in the output window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"That's quite simple, it tells you that it takes a pattern as input, and\ngives you back a pattern as output. Let's have a look at the\n",(0,r.kt)("a",{parentName:"p",href:"fast",title:"wikilink"},"fast")," function, via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},":t fast\n")),(0,r.kt)("p",null,":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"fast :: Pattern Time -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"That's a bit more complicated, there's three patterns there. The last\none is always the output, and the ones preceding it are the inputs. So"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"fast\n")),(0,r.kt)("p",null,"takes a pattern of time, another pattern, and gives you a pattern in\nreturn. That makes some sense too, the first parameter says how fast it\nshould go in terms of time, and can be patterned. The second parameter\nis the pattern that is going to be made faster, but it doesn't say what\nkind of pattern it is, it just says"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Pattern a\n")),(0,r.kt)("p",null,", and the same with the output. We saw the same"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Pattern a\n")),(0,r.kt)("p",null,"type earlier with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev\n")),(0,r.kt)("p",null,". What does it mean?"),(0,r.kt)("p",null,"Well the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"a\n")),(0,r.kt)("p",null,"in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Pattern a\n")),(0,r.kt)("p",null,"is unconstrained - it can be whatever you like. So the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev\n")),(0,r.kt)("p",null,"function can work on any kind of pattern. This is because"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev\n")),(0,r.kt)("p",null,"doesn't deal with any particular values, it just manipulates time."),(0,r.kt)("p",null,"So"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"a\n")),(0,r.kt)("p",null,"is a kind of wildcard here, used in both the input and output of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rev\n")),(0,r.kt)("p",null,". This means that if you can give it a pattern of anything, but if you\ngive it a pattern of integers, you are ",(0,r.kt)("em",{parentName:"p"},"guaranteed")," to get a pattern of\nintegers back. So you can swap that"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"a\n")),(0,r.kt)("p",null,"for another type but only if you swap all instances of it for the same\ntype."),(0,r.kt)("p",null,"A more complicated example is ",(0,r.kt)("a",{parentName:"p",href:"every",title:"wikilink"},"every"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"Now,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"every\n")),(0,r.kt)("p",null,"takes three parameters, a whole number of cycles, a function to apply to\na pattern, and the pattern itself. We can see that the first parameter\nis a pattern of integers (aka whole numbers), fine. The second parameter\nis stranger -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"(Pattern a -> Pattern a)\n")),(0,r.kt)("p",null,". This is how functions that are parameters are shown - wrapped in\nparenthesis. We can see from this that the second parameter is a\nfunction, that takes a pattern of any type as input, and gives a pattern\nof the same type as output. If we look back at the type signature of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev\n")),(0,r.kt)("p",null,", it's pretty clear that we could give that as this second parameter, as\nthe types match.. Indeed it's quite common to do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'every 3 rev (s "bd sn")\n')),(0,r.kt)("p",null,", for example."),(0,r.kt)("p",null,"Hopefully that gives you some insight into how to read type signatures.\nThey're really useful for understanding how to use functions, even\nwithout reading documentation."),(0,r.kt)("p",null,"Feel free to add any questions to the discussion page."))}c.isMDXComponent=!0}}]);