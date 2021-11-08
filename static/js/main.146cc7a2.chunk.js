(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{16:function(e,a,t){e.exports=t(30)},21:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(14),c=t.n(n),o=t(9),s=(t(21),t(7));var i=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},r.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))};function m(e){var a=Object(l.useState)(""),t=Object(o.a)(a,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h1",{className:"mb-4"},e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:n,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#242B2E":"#F4F1F1",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),r.a.createElement("button",{disabled:0===n.length,className:"btn-primary mx-2 my-1",onClick:function(){var a=n.toUpperCase();c(a),e.showAlert("Converted To Uppercase","success")}},"Convert To Uppercase"),r.a.createElement("button",{disabled:0===n.length,className:"btn-primary mx-2 my-1",onClick:function(){var a=n.toLowerCase();c(a),e.showAlert("Converted To Lowercase","success")}},"Convert To Lowercase"),r.a.createElement("button",{disabled:0===n.length,className:"btn-primary mx-2 my-1",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text Copied To Clipboard","success")}},"Copy Text"),r.a.createElement("button",{disabled:0===n.length,className:"btn-primary mx-2 my-1",onClick:function(){var a=n.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra Spaces Removed","success")}},"Remove Extra Spaces"),r.a.createElement("button",{disabled:0===n.length,className:"btn-primary mx-2 my-1",onClick:function(){var a=n.charAt(0).toUpperCase();c(a+n.slice(1)),e.showAlert("Text Has Been Capitalize Now","success")}},"Capitalize"),r.a.createElement("button",{disabled:0===n.length,className:"btn-primary mx-2 my-1",onClick:function(){c(""),e.showAlert("Text Cleared !!!","success")}},"Clear Text")),r.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h1",null,"Your Text Summary"),r.a.createElement("p",null,n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"),r.a.createElement("p",null,.008*n.split(" ").filter((function(e){return 0!==e.length})).length," Minutes To Read"),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",null,n.length>0?n:"Nothing To Preview !!!")))}var d=function(e){return r.a.createElement("div",{style:{height:"50px"}},e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg))};function u(e){var a={color:"dark"===e.mode?"white":"#0D0D0D",backgroundColor:"dark"===e.mode?"#242B2E":"#F4F1F1"};return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#0D0D0D"}},"About Us"),r.a.createElement("div",{className:"accordion",id:"accordionExample"},r.a.createElement("div",{className:"accordion-item",style:a},r.a.createElement("h2",{className:"accordion-header",id:"headingOne"},r.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse",style:a,"data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},r.a.createElement("strong",null,"Analyze Your Text"))),r.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},r.a.createElement("div",{className:"accordion-body",style:a},"Textutils gives you a way to analyze your text quickly and efficiently. It is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to lowercase and lowercase to Uppercase"))),r.a.createElement("div",{className:"accordion-item"},r.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},r.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse",style:a,"data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},r.a.createElement("strong",null,"Free To Use"))),r.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},r.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/ character limit."))),r.a.createElement("div",{className:"accordion-item"},r.a.createElement("h2",{className:"accordion-header",id:"headingThree"},r.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse",style:a,"data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},r.a.createElement("strong",null,"Browser Compatible"))),r.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},r.a.createElement("div",{className:"accordion-body",style:a},"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.")))))}var b=t(1);var p=function(){var e=Object(l.useState)("light"),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(null),p=Object(o.a)(c,2),h=p[0],E=p[1],g=function(e,a){E({msg:e,type:a}),setTimeout((function(){E(null)}),1500)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(i,{title:"Text_Utils",mode:t,toggleMode:function(){"light"===t?(n("dark"),document.body.style.backgroundColor="#042743",g("Dark Mode Has Been Enabled","success")):(n("light"),document.body.style.backgroundColor="white",g("Light Mode Has Been Enabled","success"))}}),r.a.createElement(d,{alert:h}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(m,{showAlert:g,heading:"Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces....",mode:t})),r.a.createElement(b.a,{exact:!0,path:"/about"},r.a.createElement(u,{mode:t}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.146cc7a2.chunk.js.map