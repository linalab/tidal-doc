"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(3117),i=(a(7294),a(3905));const l={title:"Emacs",permalink:"wiki/Emacs/",layout:"wiki"},o=void 0,r={unversionedId:"getting-started/editor/Emacs",id:"getting-started/editor/Emacs",title:"Emacs",description:"------",source:"@site/docs/getting-started/editor/Emacs.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/Emacs",permalink:"/docs/getting-started/editor/Emacs",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Emacs.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1672897443,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Emacs",permalink:"wiki/Emacs/",layout:"wiki"},sidebar:"docs",previous:{title:"Vim and Neovim",permalink:"/docs/getting-started/editor/Vim"},next:{title:"VS Code",permalink:"/docs/getting-started/editor/VS_Code"}},s={},p=[{value:"Linux",id:"linux",level:2},{value:"Install Emacs",id:"install-emacs",level:3},{value:"Debian / Ubuntu / Mint",id:"debian--ubuntu--mint",level:4},{value:"Arch / Manjaro",id:"arch--manjaro",level:4},{value:"Manual installation",id:"manual-installation",level:3},{value:"Edit your .emacs file",id:"edit-your-emacs-file",level:4},{value:"Download tidal.el",id:"download-tidalel",level:4},{value:"Using Spacemacs",id:"using-spacemacs",level:3},{value:"Using Doom Emacs",id:"using-doom-emacs",level:3},{value:"Using the MELPA Package",id:"using-the-melpa-package",level:3},{value:"MacOS",id:"macos",level:2},{value:"Install Emacs",id:"install-emacs-1",level:3},{value:"Configure Emacs",id:"configure-emacs",level:3},{value:"Using Spacemacs",id:"using-spacemacs-1",level:3},{value:"Using Doom Emacs",id:"using-doom-emacs-1",level:3},{value:"Using the MELPA Package",id:"using-the-melpa-package-1",level:3},{value:"Windows",id:"windows",level:2},{value:"Installing Emacs",id:"installing-emacs",level:3},{value:"Installing Haskell Mode",id:"installing-haskell-mode",level:3},{value:"Install Tidal Mode",id:"install-tidal-mode",level:3},{value:"Using the MELPA Package",id:"using-the-melpa-package-2",level:3},{value:"Test Tidal with Emacs",id:"test-tidal-with-emacs",level:2}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"emacsicon",src:a(8353).Z,width:"255",height:"255"})),(0,i.kt)("p",null,"Emacs is a classic programmer's editor with a long history. Emacs is so much more than just a text editor, but it has the reputation of being a little difficult to use at first. For a while, Emacs was the only editor that worked with Tidal, but if you are not feeling confident, use ",(0,i.kt)("a",{parentName:"p",href:"https://atom.io"},"Atom")," (see the sidebar). Emacs has packages for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/main/tidal.el"},"Tidal ")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/supercollider/scel"},"SuperCollider"),". Learning Emacs can be intimidating at first but it is also a very rewarding experience. Emacs is actually a whole computing environment, and you can do pretty much everything you can imagine with this software (send emails, read books, edit code, explore files on your computer, chat, etc...). The heart of Emacs is customization: there is a fully-fledged programming language (Emacs-Lisp) to do so."),(0,i.kt)("p",null,"Depending on your OS, you might have to install it in very different ways. Check what is the recommanded distribution for your system. Once installed, be sure to check out one of the most popular configuration frameworks if you want to make things easier:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hlissner/doom-emacs"},"Doom Emacs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syl20bnr/spacemacs"},"Spacemacs"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("h3",{id:"install-emacs"},"Install Emacs"),(0,i.kt)("h4",{id:"debian--ubuntu--mint"},"Debian / Ubuntu / Mint"),(0,i.kt)("p",null,"You can install Emacs and its Haskell Mode using ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),", the vanilla package manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo\xa0apt-get\xa0install\xa0emacs24\xa0haskell-mode\n")),(0,i.kt)("h4",{id:"arch--manjaro"},"Arch / Manjaro"),(0,i.kt)("p",null,"You can install Emacs using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pacman")," package manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman \u2013S emacs\n")),(0,i.kt)("h3",{id:"manual-installation"},"Manual installation"),(0,i.kt)("h4",{id:"edit-your-emacs-file"},"Edit your .emacs file"),(0,i.kt)("p",null,"To install the Emacs interface to Tidal, you\u2019ll need to edit a configuration file in your home folder called ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs"),". If it doesn\u2019t exist, create it. Then, add the following, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"\\~/projects/tidal")," with the location of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal.el")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"(add-to-list\xa0'load-path\xa0\"~/projects/tidal\")\n(require\xa0'haskell-mode)\n(require\xa0'tidal)\n")),(0,i.kt)("h4",{id:"download-tidalel"},"Download tidal.el"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal.el")," file can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://raw.github.com/tidalcycles/Tidal/master/tidal.el"},"tidal.el"),"."),(0,i.kt)("h3",{id:"using-spacemacs"},"Using Spacemacs"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("strong",{parentName:"p"},"Spacemacs")," custom distribution for ",(0,i.kt)("strong",{parentName:"p"},"Emacs"),", you should be able to use a layer made for it by ",(0,i.kt)("inlineCode",{parentName:"p"},"rbino"),". If you are using the develop branch, you just need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"tidalcycles")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"dotspacemacs-configuration-layers")," and it should work out of the box."),(0,i.kt)("p",null,"Reload the configuration with ",(0,i.kt)("inlineCode",{parentName:"p"},"SPC f e R")," or restart Spacemacs for the changes to take effect. "),(0,i.kt)("p",null,"The Tidal mode will load automatically whenever you open a ",(0,i.kt)("inlineCode",{parentName:"p"},".tidal")," file. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl/Cmd+Return")," to evaluate a line. Explore the other shortcuts or map them to your liking."),(0,i.kt)("h3",{id:"using-doom-emacs"},"Using Doom Emacs"),(0,i.kt)("p",null,"Edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages.el")," file. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"space f p"),", and select ",(0,i.kt)("inlineCode",{parentName:"p"},"packages.el"),". Add the following line: ",(0,i.kt)("inlineCode",{parentName:"p"},"(package! tidal)"),". In your terminal, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.emacs.d/bin")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"./doom sync"),". Wait until the update process is done. Relaunch ",(0,i.kt)("strong",{parentName:"p"},"Doom Emacs"),"."),(0,i.kt)("p",null,"Edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," path by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"space f p"),", and selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"config.el"),". Anywhere in this file, enter the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp"},'(setq tidal-boot-script-path "~/.cabal/share/x86_64-osx-ghc-8.8.4/tidal-1.7.4/BootTidal.hs")\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You might want to use a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file. Point to the one you like. I've picked the default ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file installed with ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),".")),(0,i.kt)("p",null,"You can now open any ",(0,i.kt)("inlineCode",{parentName:"p"},".tidal")," file you want. If the highlighting is not showing up, run ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal-mode"),". Launch ",(0,i.kt)("strong",{parentName:"p"},"Haskell")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-s"),", and eval regions with ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-e"),"."),(0,i.kt)("h3",{id:"using-the-melpa-package"},"Using the MELPA Package"),(0,i.kt)("p",null,"A MELPA package is provided for Tidal Cycles integration within ",(0,i.kt)("strong",{parentName:"p"},"Emacs"),".\nYou must first make sure you have MELPA installed on your machine (",(0,i.kt)("a",{parentName:"p",href:"https://melpa.org/#/getting-started"},"instructions"),"; basically\nmodifying your ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," files with the first code snippet and\nthen executing ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x package-refresh-contents")," in Emacs."),(0,i.kt)("p",null,"Here some ",(0,i.kt)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html"},"keyring update")," information if it fails to verify signature after running the last command) then simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"M-x package-install\n")),(0,i.kt)("p",null,"followed by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"tidal\n")),(0,i.kt)("p",null,"This extension provides a major mode for ",(0,i.kt)("inlineCode",{parentName:"p"},"*.tidal")," files. Once the package is installed, you can just open a Tidal script and press ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-s")," to start Tidal in Emacs, then ",(0,i.kt)("inlineCode",{parentName:"p"},"C-return")," to run the statement under your cursor."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"macos"},"MacOS"),(0,i.kt)("h3",{id:"install-emacs-1"},"Install Emacs"),(0,i.kt)("p",null,"Install Emacs using one of the distributions available for MacOS and make it appear in your applications folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew\xa0install\xa0emacs\xa0--cocoa\nbrew\xa0linkapps\n")),(0,i.kt)("h3",{id:"configure-emacs"},"Configure Emacs"),(0,i.kt)("p",null,"It is now time to configure Emacs. Do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir\xa0~/tidal\ncd\xa0~/tidal\ncurl\xa0-L\xa0https://raw.githubusercontent.com/yaxu/Tidal/master/tidal.el\xa0>\xa0tidal.el\n")),(0,i.kt)("p",null,"Create a file in your home folder called ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," (unless it exists already). Open the file in a text editor and insert the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},'(require \'package)\n(add-to-list \'package-archives \n   \'("marmalade" .\n     "http://marmalade-repo.org/packages/"))\n(package-initialize)\n(setq load-path (cons "~/tidal/" load-path))\n(require \'tidal)\n(setq tidal-interpreter "/usr/local/bin/ghci")\n')),(0,i.kt)("p",null,"The above ensures that Emacs has access to the extensions in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"marmalade")," repository (in particular, Haskell-Mode), that the ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal.el"),"\nfile you downloaded earlier is is loaded, and that Tidal can find the\nHaskell interpreter."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you have already installed Haskell using the Haskell Platform\ninstaller, make the following change to the above:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},'(setq\xa0tidal-interpreter\xa0"/usr/bin/ghci")\n'))),(0,i.kt)("p",null,"Now start ",(0,i.kt)("strong",{parentName:"p"},"Emacs")," (or if it\u2019s already loaded, restart it to make sure\n",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," is read), it should be in your Applications folder (if you start\nit from the terminal it\u2019ll probably load an old version). Once ",(0,i.kt)("strong",{parentName:"p"},"Emacs")," has\nstarted, press ",(0,i.kt)("inlineCode",{parentName:"p"},"alt-x")," (i.e. hold down alt while pressing x) and type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"package-refresh-contents\n")),(0,i.kt)("p",null,"Then do alt-x again and type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"package-install\n")),(0,i.kt)("p",null,"and then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"haskell-mode\n")),(0,i.kt)("h3",{id:"using-spacemacs-1"},"Using Spacemacs"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("strong",{parentName:"p"},"Spacemacs")," custom distribution for ",(0,i.kt)("strong",{parentName:"p"},"Emacs"),", you should be able to use a layer made for it by ",(0,i.kt)("inlineCode",{parentName:"p"},"rbino"),". If you are using the develop branch, you just need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"tidalcycles")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"dotspacemacs-configuration-layers")," and it should work out of the box."),(0,i.kt)("p",null,"Reload the configuration with ",(0,i.kt)("inlineCode",{parentName:"p"},"SPC f e R")," or restart Spacemacs for the changes to take effect. "),(0,i.kt)("p",null,"The Tidal mode will load automatically whenever you open a ",(0,i.kt)("inlineCode",{parentName:"p"},".tidal")," file. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl/Cmd+Return")," to evaluate a line. Explore the other shortcuts or map them to your liking."),(0,i.kt)("h3",{id:"using-doom-emacs-1"},"Using Doom Emacs"),(0,i.kt)("p",null,"Edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages.el")," file. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"space f p"),", and select ",(0,i.kt)("inlineCode",{parentName:"p"},"packages.el"),". Add the following line: ",(0,i.kt)("inlineCode",{parentName:"p"},"(package! tidal)"),". In your terminal, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.emacs.d/bin")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"./doom sync"),". Wait until the update process is done. Relaunch ",(0,i.kt)("strong",{parentName:"p"},"Doom Emacs"),"."),(0,i.kt)("p",null,"Edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," path by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"space f p"),", and selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"config.el"),". Anywhere in this file, enter the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lisp"},'(setq tidal-boot-script-path "~/.cabal/share/x86_64-osx-ghc-8.8.4/tidal-1.7.4/BootTidal.hs")\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You might want to use a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file. Point to the one you like. I've picked the default ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file installed with ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),".")),(0,i.kt)("p",null,"You can now open any ",(0,i.kt)("inlineCode",{parentName:"p"},".tidal")," file you want. If the highlighting is not showing up, run ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal-mode"),". Launch ",(0,i.kt)("strong",{parentName:"p"},"Haskell")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-s"),", and eval regions with ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-e"),"."),(0,i.kt)("h3",{id:"using-the-melpa-package-1"},"Using the MELPA Package"),(0,i.kt)("p",null,"A MELPA package is provided for Tidal Cycles integration within ",(0,i.kt)("strong",{parentName:"p"},"Emacs"),".\nYou must first make sure you have MELPA installed on your machine (",(0,i.kt)("a",{parentName:"p",href:"https://melpa.org/#/getting-started"},"instructions"),"; basically\nmodifying your ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," files with the first code snippet and\nthen executing ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x package-refresh-contents")," in Emacs."),(0,i.kt)("p",null,"Here some ",(0,i.kt)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html"},"keyring update")," information if it fails to verify signature after running the last command) then simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"M-x package-install\n")),(0,i.kt)("p",null,"followed by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"tidal\n")),(0,i.kt)("p",null,"This extension provides a major mode for ",(0,i.kt)("inlineCode",{parentName:"p"},"*.tidal")," files. Once the package is installed, you can just open a Tidal script and press ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-s")," to start Tidal in Emacs, then ",(0,i.kt)("inlineCode",{parentName:"p"},"C-return")," to run the statement under your cursor."),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("h3",{id:"installing-emacs"},"Installing Emacs"),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"http://ftp.gnu.org/gnu/emacs/windows/"},"Emacs for Windows"),". Extract the ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file, then simply run Emacs from ",(0,i.kt)("inlineCode",{parentName:"p"},"bin\\\\runemacs.exe"),". You will need to find or create the ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," file located in your home directory. This is the Emacs config file. Your exact location may vary depending on how Emacs is installed/run."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"runemacs.exe")," by double-clicking on it, then your ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," file\nwill probably be located at ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\\\Users\\\\(username)\\\\AppData\\\\Roaming\\\\"),".\nIf you put the ",(0,i.kt)("inlineCode",{parentName:"p"},"runemacs.exe")," folder on your path and run it from a\ncommand prompt, then your ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," file will probably be located at\n",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\\\users\\\\\\(username)\\\\")," Be aware of how you started ",(0,i.kt)("inlineCode",{parentName:"p"},"runemacs.exe"),", and\ncreate the ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," in the appropriate folder if it does not exist\nalready."),(0,i.kt)("p",null,"Alternately, you can try to have Emacs create the ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," file for you\nautomatically by changing a config setting from one of the Emacs menus\nand saving your configuration."),(0,i.kt)("h3",{id:"installing-haskell-mode"},"Installing Haskell Mode"),(0,i.kt)("p",null,"Haskell-mode needs to be installed in Emacs. The easiest way to do this\nin Windows is add the Marmalade package manager. There are other ways to install haskell-mode (detailed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/haskell/haskell-mode"},"here")," but Marmalade is probably easiest. Enable Marmalade by adding this to your .emacs file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},'(require \'package)\n(add-to-list \'package-archives\n            \'("marmalade" . "http://marmalade-repo.org/packages/"))\n(package-initialize)\n')),(0,i.kt)("p",null,"Refresh the package index by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"package-refresh-contents"),"."),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"haskell-mode")," by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"package-install"),", followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"haskell-mode"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x")," key combination is ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt-x")," in Windows.")),(0,i.kt)("h3",{id:"install-tidal-mode"},"Install Tidal Mode"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," add the following lines to enable Tidal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"(add-to-list\xa0'load-path\xa0\"c:/projects/tidal\")\n(require\xa0'haskell-mode)\n(require\xa0'tidal)\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"c:/projects/tidal")," with the path to the folder that\ncontains ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal.el"),". This file can be obtained from the Tidal repository,\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yaxu/Tidal"},"here"),". The easiest way to use it is to\nclone the Tidal repository and modify the ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," file to use the path\nwhere you cloned it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git\xa0clone https://github.com/yaxu/Tidal c:\\tidal\n")),(0,i.kt)("p",null,"If you do the same, your ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," configuration file should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"(add-to-list\xa0'load-path\xa0\"c:/tidal\")\n(require\xa0'haskell-mode)\n(require\xa0'tidal)\n")),(0,i.kt)("h3",{id:"using-the-melpa-package-2"},"Using the MELPA Package"),(0,i.kt)("p",null,"Alternatively, A MELPA package is provided for Tidal Cycles integration within ",(0,i.kt)("strong",{parentName:"p"},"Emacs"),". Please be sure to read everything in the Windows section without trying this.\nYou must first make sure you have MELPA installed on your machine (",(0,i.kt)("a",{parentName:"p",href:"https://melpa.org/#/getting-started"},"instructions"),"; basically\nmodifying your ",(0,i.kt)("inlineCode",{parentName:"p"},"init.el")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".emacs")," files with the first code snippet and\nthen executing ",(0,i.kt)("inlineCode",{parentName:"p"},"M-x package-refresh-contents")," in Emacs."),(0,i.kt)("p",null,"Here some ",(0,i.kt)("a",{parentName:"p",href:"https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html"},"keyring update")," information if it fails to verify signature after running the last command) then simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"M-x package-install\n")),(0,i.kt)("p",null,"followed by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},"tidal\n")),(0,i.kt)("p",null,"This extension provides a major mode for ",(0,i.kt)("inlineCode",{parentName:"p"},"*.tidal")," files. Once the package is installed, you can just open a Tidal script and press ",(0,i.kt)("inlineCode",{parentName:"p"},"C-c C-s")," to start Tidal in Emacs, then ",(0,i.kt)("inlineCode",{parentName:"p"},"C-return")," to run the statement under your cursor."),(0,i.kt)("h2",{id:"test-tidal-with-emacs"},"Test Tidal with Emacs"),(0,i.kt)("p",null,"You should now have installed the Tidal Mode for ",(0,i.kt)("strong",{parentName:"p"},"Emacs"),". Open a new file, and give it a random name like ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld.tidal"),". Once the file is opened, you still have to start ",(0,i.kt)("strong",{parentName:"p"},"Tidal"),". Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-S")," to start. Check if ",(0,i.kt)("strong",{parentName:"p"},"Emacs")," and Tidal are working correctly by entering the following line and by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Enter")," to evaluate the single-line block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'d1\xa0$\xa0brak\xa0$\xa0sound\xa0"bd\xa0sn/2"\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Enter"),": evaluate a single line."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+C Ctrl+E"),": evaluate multiple lines."),(0,i.kt)("p",{parentName:"admonition"},"For more shortcuts, look inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal.el")," file.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Advanced Users:")," please notice that the location of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tidal.el")," file to be:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ghc-pkg\xa0describe\xa0$(ghc-pkg\xa0latest\xa0tidal)\xa0|\xa0grep\xa0data-dir\xa0|\xa0cut\xa0-f2\xa0-d\xa0'\xa0'\n")),(0,i.kt)("p",{parentName:"admonition"},"You might need to override this, e.g. with the following setting (replace the path with the actual location of the BootTidal.hs file)."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-elisp"},'(setq\xa0tidal-boot-script-path\xa0"~/.cabal/share/x86_64-linux-ghc-8.6.5/tidal-1.4.8/BootTidal.hs")\n')),(0,i.kt)("p",{parentName:"admonition"},"You only need to actually change this file if you want to tweak the\n",(0,i.kt)("inlineCode",{parentName:"p"},"superdirtTarget"),", e. g. to use SuperCollider on a remote host.")))}m.isMDXComponent=!0},8353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/emacsicon-6f3af86569d1379147202a3664fbb5ec.png"}}]);