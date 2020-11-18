(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{e464:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("ndZU"),s=(a("qKvR"),{}),c={_frontmatter:s},d=i.a;function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.mdx)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"uxp-for-extendscript-developers"},"UXP for ExtendScript Developers"),Object(r.mdx)("p",null,"If you're coming to UXP from ExtendScript and the ESTK (ExtendScript ToolKit) or its 64-bit successor, the ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug"}),"ExtendScript Debugger"),", you'll be pleasantly surprised but you'll also have some new things to learn:"),Object(r.mdx)("h3",{id:"different-dom-access"},"Different DOM access"),Object(r.mdx)("p",null,"UXP provides different methods for accessing the Photoshop DOM. See the ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/photoshop-specific-apis/index.md"}),"Photoshop API page")," for more information. At present, the entire DOM is not yet supported, but more access is being added with every Photoshop release."),Object(r.mdx)("p",null,"As a workaround until all the significant Photoshop features are accessible via UXP, a "),Object(r.mdx)("h3",{id:"development-environment"},"Development environment"),Object(r.mdx)("p",null,'ExtendScript Toolkit ("ESTK") was the development environment of choice for many years, and still is for many Windows developers. On macOS, ESTK died a lingering death due to the deprecation of 32-bit code. Recently, ESTK has been replaced by a plugin for Visual Studio Code, a widely-used editor.'),Object(r.mdx)("p",null,"UXP source code (which is just HTML, CSS, and JavaScript) can be developed in the programming editor of your choice, although many in the UXP world prefer VS Code due to its powerful extensibility features."),Object(r.mdx)("h3",{id:"user-interface"},"User interface"),Object(r.mdx)("p",null,"In some ExtendScripts, there is generally little to no UI; the end user picks a script from the File->Scripts menu, and the script runs facelessly. If your ExtendScript  ",Object(r.mdx)("em",{parentName:"p"},"does")," need a UI, you typically use simple JavaScript ",Object(r.mdx)("inlineCode",{parentName:"p"},"alert()"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"confirm()"),", and ",Object(r.mdx)("inlineCode",{parentName:"p"},"prompt()")," calls. Or you could use the full-featured but complex ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://creativepro.com/files/kahrel/indesign/scriptui.html"}),"ScriptUI")," to create complex dialogs. Moving beyond ExtendScript into CEP, there are more possibilities with panels."),Object(r.mdx)("p",null,"In UXP, on the other hand, you're able to design as simple or as complex a UI as you want, merely by using HTML and CSS to create the visual part, and JavaScript to create the UI's underlying logic (e.g., \"what should I do when this button is clicked\")."),Object(r.mdx)("h3",{id:"modern-javascript"},"Modern JavaScript"),Object(r.mdx)("p",null,"ExtendScript uses a very old version of JavaScript (ES3), from the era when JavaScript was coded on punched cards. In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has a number of important features lacking in ExtendScript. Not all of the newer features are used and/or supported in the UXP world, but as an ExtendScript developer you'll see enough puzzling syntax in UXP examples that you should probably familiarize yourself with ECMAScript ES6 (the standards body name for JavaScript) so you can understand the sample code."),Object(r.mdx)("p",null,"A full introduction to ES6 features and syntax is beyond the scope of this documentation. You can find many websites that discuss ES6 features, including the popular ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}),"Mozilla Developer Network"),". Make sure you understand at least these language features, which you will find in UXP code you pick up from around the web:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements"}),'"const" and "let" declarations vs "var"')),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"}),"Promises and asynchronous functions")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"}),"Anonymous functions")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"}),"Arrow functions")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"}),"Template literals")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}),"Maps"))),Object(r.mdx)("h3",{id:"whats-missing-in-uxp"},"What's Missing in UXP"),Object(r.mdx)("p",null,"UXP provides an HTML interpreter similar to Chromium; it's more limited than a full browser, which means some commonly-used web CSS and HTML idioms don't work. For more information on what does and doesn't work in the UXP HTML environment, see ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"../uxp-development/unsupported.md"}),"this document"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-for-you-uxp-for-extendscript-devs-index-md-4f7946357d154f32092e.js.map