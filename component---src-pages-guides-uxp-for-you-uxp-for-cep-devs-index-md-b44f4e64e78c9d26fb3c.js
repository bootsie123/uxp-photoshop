(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"J/SK":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("wx14"),o=n("zLVn"),i=(n("q1tI"),n("7ljp")),s=n("ndZU"),r=(n("qKvR"),{}),l={_frontmatter:r},p=s.a;function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.mdx)(p,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"uxp-for-cep-developers"},"UXP for CEP Developers"),Object(i.mdx)("h2",{id:"goodbye-cep"},"Goodbye CEP"),Object(i.mdx)("p",null,"The Common Extensibility Platform has been the method of choice for plugin developers who needed anything beyond the simplest of user interfaces. While it's still going to be around in Photoshop for some time, it will at some point be deprecated and then, eventually, removed from Photoshop."),Object(i.mdx)("p",null,"CEP is being retired for several reasons:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"CEP uses a full version of Chromium as a web host. This is very resource intensive for the host application, even more so since ",Object(i.mdx)("em",{parentName:"li"},"each")," CEP plugin runs in its ",Object(i.mdx)("em",{parentName:"li"},"own")," instance of Chromium."),Object(i.mdx)("li",{parentName:"ul"},"CEP doesn't talk directly to the host application, but requires that host scripts be written in ExtendScript, and passed to the app via EvalScript calls. So there are two different JavaScript engines running. In practice, this means that a plugin's code is artifically split between ExtendScript and JavaScript, and passing anything more than simple parameters between the two layers is awkward and inefficient."),Object(i.mdx)("li",{parentName:"ul"},"CEP plugins cannot use native host controls, so CEP dialogs and panels don't match host ones without a lot of CSS fiddling."),Object(i.mdx)("li",{parentName:"ul"},"The ExtendScript side of CEP uses a very old JavaScript version that lacks many modern features. As such, a developer must juggle two different JavaScript environments.")),Object(i.mdx)("h2",{id:"hello-uxp"},"Hello UXP"),Object(i.mdx)("p",null,"UXP supports the HTML and CSS you'll need to make simple or, with the addition of the React JavaScript framework, complex panels as well as dialogs and headless (no UI) plugins."),Object(i.mdx)("p",null,"Because UXP communicates directly with the host application, the issues associated with the CEP/ExtendScript interface disappear. In general, plugin development is simpler with UXP."),Object(i.mdx)("p",null,"UXP comes with a plugin loader and debugger that makes managing plugin development much simpler than what's available in CEP."),Object(i.mdx)("p",null,"UXP plugins can use the ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://opensource.adobe.com/spectrum-css/"}),"Spectrum CSS")," components, which can be used to provide theme-aware cross-platform user interfaces that look the same across CC applications."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-for-you-uxp-for-cep-devs-index-md-b44f4e64e78c9d26fb3c.js.map