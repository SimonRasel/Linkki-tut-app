import{K as e,o as n,e as i,q as s,I as a}from"./indexhtml-JOKau1KZ.js";const d={tagName:"vaadin-menu-bar",displayName:"Menu Bar",elements:[{selector:"vaadin-menu-bar vaadin-menu-bar-button",displayName:"Buttons",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,{propertyName:"--lumo-button-size",displayName:"Size",editorType:n.range,presets:i.lumoSize,icon:"square"},s.paddingInline]},{selector:"vaadin-menu-bar vaadin-menu-bar-button vaadin-menu-bar-item",displayName:"Button labels",properties:[a.textColor,a.fontSize,a.fontWeight]},{selector:"vaadin-menu-bar-overlay::part(overlay)",displayName:"Overlay",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,e.padding]},{selector:"vaadin-menu-bar-overlay vaadin-menu-bar-item",displayName:"Menu Items",properties:[a.textColor,a.fontSize,a.fontWeight]}],async setupElement(r){r.overlayClass=r.getAttribute("class");const t=document.createElement("vaadin-menu-bar-item");r.items=[{component:t,children:[{text:"Sub item"}]}],await new Promise(o=>{setTimeout(o,10)})},async cleanupElement(r){r._close()}};export{d as default};
