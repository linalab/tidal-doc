"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(a),c=l,m=h["".concat(o,".").concat(c)]||h[c]||u[c]||s;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[h]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(3117),l=(a(7294),a(3905));const s={title:"Time",id:"time"},r=void 0,i={unversionedId:"reference/time",id:"reference/time",title:"Time",description:"This page will present you all the functions that can be used to play with time",source:"@site/docs/reference/time.md",sourceDirName:"reference",slug:"/reference/time",permalink:"/docs/reference/time",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/time.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1672897443,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Time",id:"time"},sidebar:"reference",previous:{title:"Conditions",permalink:"/docs/reference/conditions"},next:{title:"Harmony & Melody",permalink:"/docs/reference/harmony_melody"}},o={},p=[{value:"Speeding up, slowing down",id:"speeding-up-slowing-down",level:2},{value:"fast",id:"fast",level:3},{value:"fastGap",id:"fastgap",level:3},{value:"slow",id:"slow",level:3},{value:"sparsity",id:"sparsity",level:3},{value:"hurry",id:"hurry",level:3},{value:"slowSqueeze",id:"slowsqueeze",level:3},{value:"fastSqueeze",id:"fastsqueeze",level:3},{value:"Zooming in, Zooming Out",id:"zooming-in-zooming-out",level:2},{value:"compress",id:"compress",level:3},{value:"zoom",id:"zoom",level:3},{value:"within",id:"within",level:3},{value:"stretch",id:"stretch",level:3},{value:"Shifting time",id:"shifting-time",level:2},{value:"off",id:"off",level:3},{value:"press",id:"press",level:3},{value:"pressBy",id:"pressby",level:3},{value:"rotL",id:"rotl",level:3},{value:"rotR",id:"rotr",level:3},{value:"spin",id:"spin",level:3},{value:"weave",id:"weave",level:3},{value:"weaveWith",id:"weavewith",level:3},{value:"Reversing time",id:"reversing-time",level:2},{value:"rev",id:"rev",level:3},{value:"jux",id:"jux",level:3},{value:"juxBy",id:"juxby",level:3},{value:"Swing",id:"swing",level:2},{value:"swingBy",id:"swingby",level:3},{value:"swing",id:"swing-1",level:3},{value:"ghost",id:"ghost",level:3},{value:"ghost&#39;",id:"ghost-1",level:3},{value:"ghostWith",id:"ghostwith",level:3},{value:"Inside and outside",id:"inside-and-outside",level:2},{value:"inside",id:"inside",level:3},{value:"outside",id:"outside",level:3},{value:"Delay functions",id:"delay-functions",level:2},{value:"echo",id:"echo",level:3},{value:"echoWith",id:"echowith",level:3},{value:"stut",id:"stut",level:3},{value:"stutWith",id:"stutwith",level:3}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page will present you all the functions that can be used to play with time: slowing it down, speeding it up, reversing time, offsetting in time, etc... Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"speeding-up-slowing-down"},"Speeding up, slowing down"),(0,l.kt)("h3",{id:"fast"},"fast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fast :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fast")," speeds up a pattern. For example, the following will play the sound pattern ",(0,l.kt)("inlineCode",{parentName:"p"},'"bd sn kurt"')," twice as fast (i.e. so it repeats twice per cycle), and the vowel pattern three times as fast:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (fast 2 "bd sn kurt")\n   # fast 3 (vowel "a e o")\n')),(0,l.kt)("p",null,"The first parameter can be patterned, for example to play the pattern at twice the speed for the first half of each cycle and then four times the speed for the second half:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast "2 4" $ sound "bd sn kurt cp"\n')),(0,l.kt)("p",null,"You can also use this function by its older alias, ",(0,l.kt)("inlineCode",{parentName:"p"},"density"),"."),(0,l.kt)("h3",{id:"fastgap"},"fastGap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fastGap :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fastGap")," (alias ",(0,l.kt)("inlineCode",{parentName:"p"},"densityGap"),") speeds up a pattern like ",(0,l.kt)("inlineCode",{parentName:"p"},"fast"),", but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern ",(0,l.kt)("inlineCode",{parentName:"p"},'"bd sn"')," only once but compressed into the first half of the cycle, i.e. twice as fast."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (fastGap 2 "bd sn")\n')),(0,l.kt)("h3",{id:"slow"},"slow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: slow :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"slow")," slows down a pattern. For example, the following will play the sound pattern ",(0,l.kt)("inlineCode",{parentName:"p"},'"bd sn kurt"')," twice as slow (i.e. so it repeats once every two cycles), and the vowel pattern three times as slow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (slow 2 "bd sn kurt")\n   # slow 3 (vowel "a e o")\n')),(0,l.kt)("h3",{id:"sparsity"},"sparsity"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sparsity")," is a synonym of ",(0,l.kt)("inlineCode",{parentName:"p"},"slow"),"."),(0,l.kt)("h3",{id:"hurry"},"hurry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: hurry :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hurry")," is similiar to fast, in that it speeds up a pattern, but it also increases the speed control by the same factor, so if you're triggering samples, the sound gets higher in pitch. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (hurry 2) $ sound "bd sn:2 ~ cp"\n')),(0,l.kt)("h3",{id:"slowsqueeze"},"slowSqueeze"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: slowSqueeze :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fastSqueeze")," slows down a pattern according to the given time pattern. It is the slow analogue to ",(0,l.kt)("inlineCode",{parentName:"p"},"fastSqueeze"),". If the time pattern only has a single value in a cycle, ",(0,l.kt)("inlineCode",{parentName:"p"},"slowSqueeze")," becomes equivalent to slow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow "<2 4>" $ s "bd*8"\n')),(0,l.kt)("p",null,"is the same as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowSqueeze "<2 4>" $ s "bd*8"\n')),(0,l.kt)("p",null,"but when the time pattern has multiple values in it the behavior is a little different! Instead, a slowed version of the pattern will be made for each value in the time pattern and then they're all combined together in a cycle, according to the structure of the time pattern. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowSqueeze "2 4 8 16" $ s "bd*8"\n')),(0,l.kt)("p",null,"is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4 bd*2 bd bd/2"\n')),(0,l.kt)("p",null,"and:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowSqueeze "2 4 [8 16]" $ s "bd*8"\n')),(0,l.kt)("p",null,"is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4 bd*2 [bd bd/2]"\n')),(0,l.kt)("h3",{id:"fastsqueeze"},"fastSqueeze"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fastSqueeze :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fastSqueeze")," speeds up a pattern by a time pattern given as input, squeezing the resulting pattern inside one cycle and playing the original pattern at every repetition."),(0,l.kt)("p",null,"To better understand how it works let's compare it with ",(0,l.kt)("inlineCode",{parentName:"p"},"fast"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast "1 2" $ s "bd sn"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'-- output\n(0>\xbd)|s: "bd"\n(\xbd>\xbe)|s: "bd"\n(\xbe>1)|s: "sn"\n')),(0,l.kt)("p",null,"This will give bd played in the first half cycle and bd sn in the second half. On the other hand, using ",(0,l.kt)("inlineCode",{parentName:"p"},"fastSqueeze"),";"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'fastSqueeze "1 2" $ s "bd sn"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'--output\n(0>\xbc)|s: "bd"\n(\xbc>\xbd)|s: "sn"\n(\xbd>\u215d)|s: "bd"\n(\u215d>\xbe)|s: "sn"\n(\xbe>\u215e)|s: "bd"\n(\u215e>1)|s: "sn"\n')),(0,l.kt)("p",null,"The original pattern will play in the first half and two repetitions of the original pattern will play in the second half. That is, every repetition contains the whole pattern."),(0,l.kt)("p",null,"If the time pattern has a single value, it becomes equivalent to fast:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastSqueeze 2 $ s "bd sn"\n-- is equal to\nd1 $ fast 2 $ s "bd sn"\n-- and equivalent to\nd1 $ s "[bd sn]*2"\n')),(0,l.kt)("h2",{id:"zooming-in-zooming-out"},"Zooming in, Zooming Out"),(0,l.kt)("h3",{id:"compress"},"compress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: compress :: (Time, Time) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compress")," takes a pattern and squeezes it within the specified time span (i.e. the 'arc'). The new resulting pattern is a sped up version of the original."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ compress (1/4, 3/4) $ s "[bd sn]!"\n')),(0,l.kt)("p",null,"In the above example, the pattern will play in an arc spanning from 25% to 75% of the duration of a cycle. It is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "~ [bd sn]! ~"\n')),(0,l.kt)("p",null,"Another example, where all events are different:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ compress (1/4, 3/4) $ n (run 4) # s "arpy"\n')),(0,l.kt)("p",null,"It differs from ",(0,l.kt)("inlineCode",{parentName:"p"},"zoom")," in that it preserves the original pattern but it speeds up its events so to match with the new time period."),(0,l.kt)("h3",{id:"zoom"},"zoom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: zoom :: (Time, Time) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Plays a portion of a pattern, specified by the beginning and end of a time span (known as an 'arc'). The new resulting pattern is played over the time period of the original pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ zoom (0.25, 0.75) $ sound "bd*2 hh*3 [sn bd]*2 drum"\n')),(0,l.kt)("p",null,"In the pattern above, zoom is used with an arc from 25% to 75%. It is equivalent to this pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*3 [sn bd]*2"\n')),(0,l.kt)("p",null,"Here\u2019s an example of it being used with a conditional:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (zoom (0.25, 0.75)) $ sound "bd*2 hh*3 [sn bd]*2 drum"\n')),(0,l.kt)("h3",{id:"within"},"within"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: within :: Arc -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"within")," to apply a function to only a part of a pattern. within takes two arguments: a start time and an end time, specified as floats between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", which are applied to the relevant pattern. Note that the second argument must be greater than the first for the function to have any effect."),(0,l.kt)("p",null,"For example, to apply ",(0,l.kt)("inlineCode",{parentName:"p"},"fast 2")," to only the first half of a pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ within (0, 0.5) (fast 2) $ sound "bd*2 sn lt mt hh hh hh hh"\n')),(0,l.kt)("p",null,"Or, to apply ",(0,l.kt)("inlineCode",{parentName:"p"},'(# speed "0.5")')," to only the last quarter of a pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ within (0.75, 1) (# speed "0.5") $ sound "bd*2 sn lt mt hh hh hh hh"\n')),(0,l.kt)("h3",{id:"stretch"},"stretch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: stretch :: Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Stretch takes a pattern, and if there's silences at the start or end of the current cycle, it will zoom in to avoid them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ note (stretch "~ 0 1 5 8*4 ~") # s "superpiano"\n-- is the same as\nd1 $ note "0 1 5 8*4" # s "superpiano"\n')),(0,l.kt)("p",null,"You can pattern silences on the extremes of a cycle to make changes to the rhythm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ note (stretch "~ <0 ~> 1 5 8*4 ~") # s "superpiano"\n')),(0,l.kt)("h2",{id:"shifting-time"},"Shifting time"),(0,l.kt)("h3",{id:"off"},"off"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: off :: Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"off")," is similar to superimpose, in that it applies a function to a pattern, and layers up the results on top of the original pattern. The difference is that ",(0,l.kt)("inlineCode",{parentName:"p"},"off")," takes an extra pattern being a time (in cycles) to shift the transformed version of the pattern by."),(0,l.kt)("p",null,"The following plays a pattern on top of itself, but offset by an eighth of a cycle, with a distorting bitcrush effect applied:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ off 0.125 (# crush 2) $ sound "bd [~ sn:2] mt lt*2"\n')),(0,l.kt)("p",null,"The following makes arpeggios by adding offset patterns that are shifted up the scale:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $\n  n (off 0.25 (+12) $ off 0.125 (+7) $ slow 2 "c(3,8) a(3,8,2) f(3,8) e(3,8,4)")\n  # sound "superpiano"\n')),(0,l.kt)("h3",{id:"press"},"press"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: press :: Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"press")," delays a sound for half the time in its slot. In mini notation terms, it basically turns every instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," into ",(0,l.kt)("inlineCode",{parentName:"p"},"[~ a]"),". Every beat then becomes an offbeat, and so the overall effect is to syncopate a pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  resetCycles\n  d1 $ stack [\n    press $ n "~ c\'maj ~ c\'maj" # s "superpiano" # gain 0.9 # pan 0.6,\n    s "[bd,clap sd bd sd]" # pan 0.4\n    ] # cps (90/60/4)\n')),(0,l.kt)("p",null,"In this example, you can hear that the piano chords play between the snare and the bass drum. In 4/4 time, they are playing in the 2 and a half, and 4 and a half beats."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  resetCycles\n  d1 $ stack [\n    press $ n "~ [c\'maj ~] ~ ~" # s "superpiano" # gain 0.9 # pan 0.6,\n    press $ n "~ g\'maj ~ ~" # s "superpiano" # gain 0.9 # pan 0.4,\n    s "[bd,clap sd bd sd]"\n    ] # cps (90/60/4)\n')),(0,l.kt)("p",null,"Here, the C major chord plays before the G major. As the slot that occupies the C chord is that of one eighth note, it is displaced by ",(0,l.kt)("inlineCode",{parentName:"p"},"press")," only a sixteenth note."),(0,l.kt)("h3",{id:"pressby"},"pressBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: pressBy :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pressBy")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"press"),", but it takes one additional parameter which is the displacement of the pattern, from 0 (inclusive) to 1 (exclusive). ",(0,l.kt)("inlineCode",{parentName:"p"},"pressBy 0.5")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"press"),"."),(0,l.kt)("p",null,"You can pattern the displacement to create interesting rhythmic effects:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [\ns "bd sd bd sd",\npressBy "<0 0.5>" $ s "co:2*4"\n]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [\ns "[bd,co sd bd sd]",\npressBy "<0 0.25 0.5 0.75>" $ s "cp"\n]\n')),(0,l.kt)("h3",{id:"rotl"},"rotL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rotL :: Time -> Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rotL")," Shifts a pattern back in time by the given amount, expressed in cycles. This will skip to the fourth cycle when evaluated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n{\n  resetCycles;\n  d1 $ rotL 4 $ seqP [\n    (0, 12, sound "bd bd*2"),\n    (4, 12, sound "hh*2 [sn cp] cp future*4"),\n    (8, 12, sound (samples "arpy*8" (run 16)))\n  ]\n}\n')),(0,l.kt)("p",null,"Useful when building and testing out longer sequences."),(0,l.kt)("h3",{id:"rotr"},"rotR"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rotR")," is the opposite of ",(0,l.kt)("inlineCode",{parentName:"p"},"rotL")," as it shifts the pattern forwards in time."),(0,l.kt)("h3",{id:"spin"},"spin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: spin :: Pattern Int -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"spin")," will play the given number of copies of the given control pattern at once. For ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," copies, each successive copy will be offset in time by an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"1/n")," of a cycle, and also panned in space by an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"n1"),". This function works particularly well on multichannel systems."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 3 $ spin 4 $ sound "drum*3 tabla:4 [arpy:2 ~ arpy] [can:2 can:3]"\n')),(0,l.kt)("h3",{id:"weave"},"weave"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: weave :: Time -> ControlPattern -> [ControlPattern] -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"weave")," applies one control pattern to a list of other control patterns, with a successive time offset. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ weave 16 (pan sine)\n  [sound "bd sn cp",\n   sound "casio casio:1",\n   sound "[jvbass*2 jvbass:2]/2",\n   sound "hc*4"\n  ]\n')),(0,l.kt)("p",null,"In the above, the ",(0,l.kt)("inlineCode",{parentName:"p"},"pan sine")," control pattern is slowed down by the given number of cycles, in particular ",(0,l.kt)("inlineCode",{parentName:"p"},"16"),", and applied to all of the given sound patterns. What makes this interesting is that the ",(0,l.kt)("inlineCode",{parentName:"p"},"pan")," control pattern is successively offset for each of the given sound patterns; because the ",(0,l.kt)("inlineCode",{parentName:"p"},"pan")," is closed down by 16 cycles, and there are four patterns, they are 'spread out', i.e. with a gap of four cycles. For this reason, the four patterns seem to chase after each other around the stereo field. Try listening on headphones to hear this more clearly."),(0,l.kt)("p",null,"You can even have it the other way round, and have the effect parameters chasing after each other around a sound parameter, like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ weave 16 (sound "arpy" >| n (run 8))\n  [vowel "a e i",\n   vowel "i [i o] o u",\n   vowel "[e o]/3 [i o u]/2",\n   speed "1 2 3"\n  ]\n')),(0,l.kt)("h3",{id:"weavewith"},"weaveWith"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: weaveWith :: Time -> Pattern a -> [Pattern a -> Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"weaveWith")," (formerly known as ",(0,l.kt)("inlineCode",{parentName:"p"},"weave'"),") is similar to the above, but ",(0,l.kt)("inlineCode",{parentName:"p"},"weaves")," with a list of functions, rather than a list of controls. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ weaveWith 3 (sound "bd [sn drum:2*2] bd*2 [sn drum:1]")\n  [fast 2,\n   (# speed "0.5"),\n   chop 16\n  ]\n')),(0,l.kt)("h2",{id:"reversing-time"},"Reversing time"),(0,l.kt)("h3",{id:"rev"},"rev"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rev :: Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rev")," returns a 'reversed' version of the given pattern."),(0,l.kt)("p",null,"For example ",(0,l.kt)("inlineCode",{parentName:"p"},'rev "1 [~ 2] ~ 3"')," is equivalent to rev ",(0,l.kt)("inlineCode",{parentName:"p"},'"3 ~ [2 ~] 1"'),"."),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"rev")," reverses on a cycle-by-cycle basis. This means that ",(0,l.kt)("inlineCode",{parentName:"p"},'rev (slow 2 "1 2 3 4")')," would actually result in ",(0,l.kt)("inlineCode",{parentName:"p"},'(slow 2 "2 1 4 3")'),". This is because the ",(0,l.kt)("inlineCode",{parentName:"p"},"slow 2 "),"makes the repeating pattern last two cycles, each of which is reversed independently."),(0,l.kt)("p",null,"In practice ",(0,l.kt)("inlineCode",{parentName:"p"},"rev")," is generally used with conditionals, for example with ",(0,l.kt)("inlineCode",{parentName:"p"},"every"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"\n')),(0,l.kt)("p",null,"or ",(0,l.kt)("inlineCode",{parentName:"p"},"jux"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ n (iter 4 "0 1 [~ 2] 3") # sound "arpy"\n')),(0,l.kt)("h3",{id:"jux"},"jux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: jux :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jux")," function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel. For example, the following reverses the pattern on the righthand side:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 32 $ jux (rev) $ striate\' 32 (1/16) $ sound "bev"\n')),(0,l.kt)("p",null,"When passing functions to functions like ",(0,l.kt)("inlineCode",{parentName:"p"},"jux")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"every"),", it\u2019s possible to chain multiple transforms together with ., for example this both reverses and halves the playback speed of the pattern in the righthand channel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 32 $ jux ((# speed "0.5") . rev) $ striate\' 32 (1/16) $ sound "bev"\n')),(0,l.kt)("h3",{id:"juxby"},"juxBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: juxBy :: Pattern Double -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"jux"),", the original and effected versions of the pattern are panned hard left and right (i.e., panned at 0 and 1). This can be a bit much, especially when listening on headphones. The variant ",(0,l.kt)("inlineCode",{parentName:"p"},"juxBy")," has an additional parameter, which brings the channel closer to the centre. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.5 (fast 2) $ sound "bd sn:1"\n')),(0,l.kt)("p",null,"In the above, the two versions of the pattern would be panned at ",(0,l.kt)("inlineCode",{parentName:"p"},"0.25")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"0.75"),", rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("h2",{id:"swing"},"Swing"),(0,l.kt)("h3",{id:"swingby"},"swingBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: swingBy :: Pattern Time -> Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"The function ",(0,l.kt)("inlineCode",{parentName:"p"},"swingBy x n")," breaks each cycle into ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," slices, and then delays events in the second half of each slice by the amount ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", which is relative to the size of the (half) slice. So if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," it does nothing, ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5")," delays for half the note duration, and ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ swingBy (1/3) 4 $ sound "hh*8"\n')),(0,l.kt)("p",null,"will delay every other ",(0,l.kt)("inlineCode",{parentName:"p"},'"hh" 1/3')," of the way to the next ",(0,l.kt)("inlineCode",{parentName:"p"},'"hh"'),"."),(0,l.kt)("h3",{id:"swing-1"},"swing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: swing :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"swing")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"swingBy (1/3)"),"."),(0,l.kt)("h3",{id:"ghost"},"ghost"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ghost :: Pattern ValueMap -> Pattern ValueMap\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ghost")," adds quieter, pitch-shifted, copies of an event after the event, emulating ghost notes that are common in drumming patterns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [ ghost $ sound "~ sn", sound "bd*2 [~ bd]" ]\n')),(0,l.kt)("p",null,"The example above creates a kick snare pattern with ghost notes applied to the snare hit."),(0,l.kt)("h3",{id:"ghost-1"},"ghost'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ghost' :: Time -> Pattern ValueMap -> Pattern ValueMap\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ghost'")," is a variation from ",(0,l.kt)("inlineCode",{parentName:"p"},"ghost")," above, where you can also specify the base delay used to create the pattern of ghosts notes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [ ghost\' (1/16) $ sound "~ sn", sound "bd*2 [~ bd]" ]\n')),(0,l.kt)("p",null,"The example above creates a kick snare pattern with ghost notes applied to the snare hit. The 1/16 is a sixteenth of a cycle, but that doesn't mean ghost notes will be displaced exactly by this amount: this is just the base value from where repetitions are calculated."),(0,l.kt)("h3",{id:"ghostwith"},"ghostWith"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ghostWith :: Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"This variation of ",(0,l.kt)("inlineCode",{parentName:"p"},"ghost")," (formerly named ",(0,l.kt)("inlineCode",{parentName:"p"},"ghost''"),") adds another parameter to the ones present in ",(0,l.kt)("inlineCode",{parentName:"p"},"ghost'"),", which is the function used to modify the ghost notes. So here you can decide which changes will be applied to the ghost notes compared to the original notes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ ghostWith (1/8) (id) $ sound "sn"\n')),(0,l.kt)("p",null,"In this first example, ghost notes will be identical than the original."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ ghostWith (1/16) ((|*| gain 1.1) . (|> begin 0.05)) $ sound "sn"\n')),(0,l.kt)("p",null,"The example above applies ghost notes to the snare hit, but these notes will be louder, not quieter, and the sample will have it's beginning slightly cut."),(0,l.kt)("h2",{id:"inside-and-outside"},"Inside and outside"),(0,l.kt)("h3",{id:"inside"},"inside"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: inside :: Pattern Time -> (Pattern a -> Pattern b) -> Pattern a -> Pattern b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"inside")," carries out an operation 'inside' a cycle. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'while rev "0 1 2 3 4 5 6 7"')," is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},'"7 6 5 4 3 2 1 0"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'inside 2 rev "0 1 2 3 4 5 6 7"')," gives ",(0,l.kt)("inlineCode",{parentName:"p"},'"3 2 1 0 7 6 5 4"'),"."),(0,l.kt)("p",null,"What this function is really doing is 'slowing down' the pattern by a given factor, applying the given function to it, and then 'speeding it up' by the same factor. In other words, this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'inside 2 rev "0 1 2 3 4 5 6 7"\n')),(0,l.kt)("p",null,"Is doing this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'fast 2 $ rev $ slow 2 "0 1 2 3 4 5 6 7"\n')),(0,l.kt)("p",null,".. so rather than whole cycles, each half of a cycle is reversed."),(0,l.kt)("h3",{id:"outside"},"outside"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: outside :: Pattern Time -> (Pattern a -> Pattern b) -> Pattern a -> Pattern b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"outside")," is the inverse of the ",(0,l.kt)("inlineCode",{parentName:"p"},"inside")," function. ",(0,l.kt)("inlineCode",{parentName:"p"},"outside")," applies its function outside the cycle. Say you have a pattern that takes 4 cycles to repeat and apply the ",(0,l.kt)("inlineCode",{parentName:"p"},"rev")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]\n')),(0,l.kt)("p",null,"The above generates:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ cat [s "sn bd bd",s "bd sn sn", s "sd lt lt", s "bd sd sd"]\n')),(0,l.kt)("p",null,"However if you apply ",(0,l.kt)("inlineCode",{parentName:"p"},"outside"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ outside 4 (rev) $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]\n')),(0,l.kt)("p",null,"The result` is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ cat [s "bd sd sd", s "sd lt lt", s "sn sn bd", s "bd bd sn"]\n')),(0,l.kt)("p",null,"Notice the whole idea has been reversed. What this function is really doing is 'speeding up' the pattern by a given factor, applying the given function to it, and then 'slowing it down' by the same factor. In other words, this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ rev $ fast 4 $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]\n')),(0,l.kt)("p",null,"This compresses the idea into a single cycle before ",(0,l.kt)("inlineCode",{parentName:"p"},"rev")," operates and then slows it back to the original speed."),(0,l.kt)("h2",{id:"delay-functions"},"Delay functions"),(0,l.kt)("p",null,"See also: ",(0,l.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/audio_effects#delay"},"Effects/Delay")),(0,l.kt)("h3",{id:"echo"},"echo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: echo :: Pattern Integer -> Pattern Rational -> Pattern Double -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"echo"),"applies a type of delay to a pattern. It has three parameters, which could be called ",(0,l.kt)("inlineCode",{parentName:"p"},"depth"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"time")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"feedback"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"depth")," is and integer, and ",(0,l.kt)("inlineCode",{parentName:"p"},"time")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"feedback")," are floating point numbers."),(0,l.kt)("p",null,"This adds a bit of echo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ echo 4 0.2 0.5 $ sound "bd sn"\n')),(0,l.kt)("p",null,"The above results in ",(0,l.kt)("inlineCode",{parentName:"p"},"4")," echos, each one ",(0,l.kt)("inlineCode",{parentName:"p"},"50%")," (that's the ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5"),") quieter than the last, with 1/5th (that's the ",(0,l.kt)("inlineCode",{parentName:"p"},"0.2"),") of a cycle between them."),(0,l.kt)("p",null,"It is possible to reverse the echo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ echo 4 (-0.2) 0.5 $ sound "bd sn"\n')),(0,l.kt)("h3",{id:"echowith"},"echoWith"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: echoWith :: Pattern Int -> Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"echoWith")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"echo")," described above, but instead of just decreasing volume to produce echoes, ",(0,l.kt)("inlineCode",{parentName:"p"},"echoWith")," applies a function each step and overlays the result delayed by the given time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ echoWith 3 (1/3) (# vowel "{a e i o u}%2") $ sound "bd sn"\n')),(0,l.kt)("p",null,"In this case there are two overlays delayed by 1/3 of a cycle, where each has the vowel filter applied."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ echoWith 4 (1/6) (|* speed "1.5") $ sound "arpy arpy:2"\n')),(0,l.kt)("p",null,"In the above, three versions are put on top, with each step getting higher in pitch as ",(0,l.kt)("inlineCode",{parentName:"p"},'|* speed "1.5"')," is successively applied."),(0,l.kt)("h3",{id:"stut"},"stut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: stut :: Pattern Integer -> Pattern Double -> Pattern Rational -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Deprecated"),": use ",(0,l.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/time#echo"},"echo")," instead."),(0,l.kt)("h3",{id:"stutwith"},"stutWith"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: stutWith :: Pattern Int -> Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Deprecated"),": use ",(0,l.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/time#echowith"},"echoWith")," instead."))}h.isMDXComponent=!0}}]);