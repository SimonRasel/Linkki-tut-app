import{o as qe}from"./base-panel-Zq4jKPA_-BDcdQkJD.js";import{l as v,B as f,N as n,g as c,A as y,i as Ve,h as _,p as je,r as Te,t as L,o as X,s as Ue,m as Be,P as Q,u as He,v as De,j,U as N,w as Fe,x as We,z as Ge,L as Je,V as Ke}from"./indexhtml-JOKau1KZ.js";var U=(t=>(t.disabled="disabled",t.enabled="enabled",t.missing_theme="missing_theme",t))(U||{}),p=(t=>(t.local="local",t.global="global",t))(p||{});function ee(t,e){return`${t}|${e}`}class w{constructor(e){this._properties={},this._metadata=e}get metadata(){return this._metadata}get properties(){return Object.values(this._properties)}getPropertyValue(e,s){return this._properties[ee(e,s)]||null}updatePropertyValue(e,s,a,o){if(!a){delete this._properties[ee(e,s)];return}let i=this.getPropertyValue(e,s);i?(i.value=a,i.modified=o||!1):(i={elementSelector:e,propertyName:s,value:a,modified:o||!1},this._properties[ee(e,s)]=i)}addPropertyValues(e){e.forEach(s=>{this.updatePropertyValue(s.elementSelector,s.propertyName,s.value,s.modified)})}getPropertyValuesForElement(e){return this.properties.filter(s=>s.elementSelector===e)}static combine(...e){if(e.length<2)throw new Error("Must provide at least two themes");const s=new w(e[0].metadata);return e.forEach(a=>s.addPropertyValues(a.properties)),s}static fromServerRules(e,s,a){const o=new w(e);return e.elements.forEach(i=>{const r=M(i,s),l=a.find(d=>d.selector===r.replace(/ > /g,">"));l&&i.properties.forEach(d=>{const u=l.properties[d.propertyName];u&&o.updatePropertyValue(i.selector,d.propertyName,u,!0)})}),o}}function M(t,e){const s=t.selector;if(e.themeScope==="global")return s;if(!e.localClassName)throw new Error("Can not build local scoped selector without instance class name");const a=s.match(/^[\w\d-_]+/),o=a&&a[0];if(!o)throw new Error(`Selector does not start with a tag name: ${s}`);return`${o}.${e.localClassName}${s.substring(o.length,s.length)}`}function Ye(t,e,s,a){const o=M(t,e),i={[s]:a};return s==="border-width"&&(parseInt(a)>0?i["border-style"]="solid":i["border-style"]=""),{selector:o,properties:i}}function Ze(t){const e=Object.entries(t.properties).map(([s,a])=>`${s}: ${a};`).join(" ");return`${t.selector} { ${e} }`}const me={crosshair:N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
   <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
   <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
   <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12l6 0"></path>
   <path d="M12 9l0 6"></path>
</svg>`,square:N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
</svg>`,font:N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 20l3 0"></path>
   <path d="M14 20l7 0"></path>
   <path d="M6.9 15l6.9 0"></path>
   <path d="M10.2 6.3l5.8 13.7"></path>
   <path d="M5 20l6 -16l2 0l7 16"></path>
</svg>`,undo:N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg>`,redo:N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1"></path>
</svg>`,cross:N`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>`};let I,ve="";function Ae(t){I||(I=new CSSStyleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets,I]),ve+=t.cssText,I.replaceSync(ve)}const Oe=v`
  .editor-row {
    display: flex;
    align-items: baseline;
    padding: var(--theme-editor-section-horizontal-padding);
    gap: 10px;
  }

  .editor-row > .label {
    flex: 0 0 auto;
    width: 120px;
  }

  .editor-row > .editor {
    flex: 1 1 0;
  }
`,ge="__vaadin-theme-editor-measure-element",ye=/((::before)|(::after))$/,be=/::part\(([\w\d_-]+)\)$/;Ae(v`
  .__vaadin-theme-editor-measure-element {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`);async function Xe(t){const e=new w(t),s=document.createElement(t.tagName);s.classList.add(ge),document.body.append(s),t.setupElement&&await t.setupElement(s);const a={themeScope:p.local,localClassName:ge};try{t.elements.forEach(o=>{fe(s,o,a,!0);let i=M(o,a);const r=i.match(ye);i=i.replace(ye,"");const l=i.match(be),d=i.replace(be,"");let u=document.querySelector(d);if(u&&l){const $=`[part~="${l[1]}"]`;u=u.shadowRoot.querySelector($)}if(!u)return;u.style.transition="none";const k=r?r[1]:null,T=getComputedStyle(u,k);o.properties.forEach($=>{const Ie=T.getPropertyValue($.propertyName)||$.defaultValue||"";e.updatePropertyValue(o.selector,$.propertyName,Ie)}),fe(s,o,a,!1)})}finally{try{t.cleanupElement&&await t.cleanupElement(s)}finally{s.remove()}}return e}function fe(t,e,s,a){if(e.stateAttribute){if(e.stateElementSelector){const o=M({...e,selector:e.stateElementSelector},s);t=document.querySelector(o)}t&&(a?t.setAttribute(e.stateAttribute,""):t.removeAttribute(e.stateAttribute))}}function we(t){return t.trim()}function Qe(t){const e=t.element;if(!e)return null;const s=e.querySelector("label");if(s&&s.textContent)return we(s.textContent);const a=e.textContent;return a?we(a):null}class et{constructor(){this._localClassNameMap=new Map}get stylesheet(){return this.ensureStylesheet(),this._stylesheet}add(e){this.ensureStylesheet(),this._stylesheet.replaceSync(e)}clear(){this.ensureStylesheet(),this._stylesheet.replaceSync("")}previewLocalClassName(e,s){if(!e)return;const a=this._localClassNameMap.get(e);a&&(e.classList.remove(a),e.overlayClass=null),s?(e.classList.add(s),e.overlayClass=s,this._localClassNameMap.set(e,s)):this._localClassNameMap.delete(e)}ensureStylesheet(){this._stylesheet||(this._stylesheet=new CSSStyleSheet,this._stylesheet.replaceSync(""),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._stylesheet])}}const A=new et,h={index:-1,entries:[]};class tt{constructor(e){this.api=e}get allowUndo(){return h.index>=0}get allowRedo(){return h.index<h.entries.length-1}get allowedActions(){return{allowUndo:this.allowUndo,allowRedo:this.allowRedo}}push(e,s,a){const o={requestId:e,execute:s,rollback:a};if(h.index++,h.entries=h.entries.slice(0,h.index),h.entries.push(o),s)try{s()}catch(i){j("Execute history entry failed",i)}return this.allowedActions}async undo(){if(!this.allowUndo)return this.allowedActions;const e=h.entries[h.index];h.index--;try{await this.api.undo(e.requestId),e.rollback&&e.rollback()}catch(s){j("Undo failed",s)}return this.allowedActions}async redo(){if(!this.allowRedo)return this.allowedActions;h.index++;const e=h.entries[h.index];try{await this.api.redo(e.requestId),e.execute&&e.execute()}catch(s){j("Redo failed",s)}return this.allowedActions}static clear(){h.entries=[],h.index=-1}}var st=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,C=(t,e,s,a)=>{for(var o=a>1?void 0:a?ot(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&st(e,s,o),o};class at extends CustomEvent{constructor(e,s,a){super("theme-property-value-change",{bubbles:!0,composed:!0,detail:{element:e,property:s,value:a}})}}class g extends _{constructor(){super(),this.value="",this.originalValue=""}static get styles(){return[Oe,v`
        :host {
          display: block;
        }

        .editor-row .label .modified {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: orange;
          border-radius: 3px;
          margin-left: 3px;
        }
      `]}firstUpdated(e){super.firstUpdated(e),e.has("value")&&(this.originalValue=this.value)}update(e){super.update(e),(e.has("propertyMetadata")||e.has("theme"))&&this.updateValueFromTheme()}render(){var e;return n`
      <div class="editor-row">
        <div class="label">
          ${this.propertyMetadata.displayName}
          ${(e=this.propertyValue)!=null&&e.modified?n`<span class="modified"></span>`:null}
        </div>
        <div class="editor">${this.renderEditor()}</div>
      </div>
    `}updateValueFromTheme(){var e;this.propertyValue=this.theme.getPropertyValue(this.elementMetadata.selector,this.propertyMetadata.propertyName),this.value=((e=this.propertyValue)==null?void 0:e.value)||""}dispatchChange(e){this.dispatchEvent(new at(this.elementMetadata,this.propertyMetadata,e))}}C([c({})],g.prototype,"elementMetadata",2);C([c({})],g.prototype,"propertyMetadata",2);C([c({})],g.prototype,"theme",2);C([f()],g.prototype,"propertyValue",2);C([f()],g.prototype,"value",2);class B{constructor(e){if(this._values=[],this._rawValues={},e){const s=e.propertyName,a=e.presets??[];this._values=(a||[]).map(i=>i.startsWith("--")?`var(${i})`:i);const o=document.createElement("div");o.style.borderStyle="solid",o.style.visibility="hidden",document.body.append(o);try{this._values.forEach(i=>{o.style.setProperty(s,i);const r=getComputedStyle(o);this._rawValues[i]=r.getPropertyValue(s).trim()})}finally{o.remove()}}}get values(){return this._values}get rawValues(){return this._rawValues}tryMapToRawValue(e){return this._rawValues[e]??e}tryMapToPreset(e){return this.findPreset(e)??e}findPreset(e){const s=e&&e.trim();return this.values.find(a=>this._rawValues[a]===s)}}class xe extends CustomEvent{constructor(e){super("change",{detail:{value:e}})}}let H=class extends _{constructor(){super(),this.value="",this.showClearButton=!1}static get styles(){return v`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.375rem;
        color: inherit;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border: none;
      }

      button {
        display: none;
        position: absolute;
        right: 4px;
        top: 4px;
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      button svg {
        width: 16px;
        height: 16px;
      }

      button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      :host(.show-clear-button) input {
        padding-right: 20px;
      }

      :host(.show-clear-button) button {
        display: block;
      }
    `}update(t){super.update(t),t.has("showClearButton")&&(this.showClearButton?this.classList.add("show-clear-button"):this.classList.remove("show-clear-button"))}render(){return n`
      <input class="input" .value=${this.value} @change=${this.handleInputChange} />
      <button @click=${this.handleClearClick}>${je.cross}</button>
    `}handleInputChange(t){const e=t.target;this.dispatchEvent(new xe(e.value))}handleClearClick(){this.dispatchEvent(new xe(""))}};C([c({})],H.prototype,"value",2);C([c({})],H.prototype,"showClearButton",2);H=C([y("copilot-theme-text-input")],H);var it=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Y=(t,e,s,a)=>{for(var o=a>1?void 0:a?rt(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&it(e,s,o),o};class nt extends CustomEvent{constructor(e){super("class-name-change",{detail:{value:e}})}}let O=class extends _{constructor(){super(),this.editedClassName="",this.invalid=!1}static get styles(){return[Oe,v`
        .editor-row {
          padding-top: 0;
        }

        .editor-row .editor .error {
          display: inline-block;
          color: var(--dev-tools-red-color);
          margin-top: 4px;
        }
      `]}update(t){super.update(t),t.has("className")&&(this.editedClassName=this.className,this.invalid=!1)}render(){return n` <div class="editor-row local-class-name">
      <div class="label">CSS class name</div>
      <div class="editor">
        <copilot-theme-text-input
          type="text"
          .value=${this.editedClassName}
          @change=${this.handleInputChange}></copilot-theme-text-input>
        ${this.invalid?n`<br /><span class="error">Please enter a valid CSS class name</span>`:null}
      </div>
    </div>`}handleInputChange(t){this.editedClassName=t.detail.value;const e=/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;this.invalid=!this.editedClassName.match(e),!this.invalid&&this.editedClassName!==this.className&&this.dispatchEvent(new nt(this.editedClassName))}};Y([c({})],O.prototype,"className",2);Y([f()],O.prototype,"editedClassName",2);Y([f()],O.prototype,"invalid",2);O=Y([y("copilot-theme-class-name-editor")],O);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,Z=(t,e,s,a)=>{for(var o=a>1?void 0:a?dt(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&lt(e,s,o),o};class ct extends CustomEvent{constructor(e){super("scope-change",{detail:{value:e}})}}Ae(v`
  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] {
    --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
    z-index: 100000 !important;
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector']::part(overlay) {
    background: #333;
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] vaadin-item {
    color: rgba(255, 255, 255, 0.8);
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] vaadin-item::part(content) {
    font-size: 13px;
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] vaadin-item .title {
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] vaadin-item::part(checkmark) {
    margin: 6px;
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] vaadin-item::part(checkmark)::before {
    color: rgba(255, 255, 255, 0.95);
  }

  vaadin-select-overlay[theme~='copilot-theme-scope-selector'] vaadin-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`);let z=class extends _{constructor(){super(),this.value=p.local}static get styles(){return v`
      vaadin-select {
        --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
        width: 100px;
      }

      vaadin-select::part(input-field) {
        background: rgba(0, 0, 0, 0.2);
      }

      vaadin-select vaadin-select-value-button,
      vaadin-select::part(toggle-button) {
        color: var(--dev-tools-text-color);
      }

      vaadin-select:hover vaadin-select-value-button,
      vaadin-select:hover::part(toggle-button) {
        color: var(--dev-tools-text-color-emphasis);
      }

      vaadin-select vaadin-select-item {
        font-size: 13px;
      }
    `}update(t){var e;super.update(t),t.has("metadata")&&((e=this.select)==null||e.requestContentUpdate())}render(){return n` <vaadin-select
      theme="small copilot-theme-scope-selector"
      .value=${this.value}
      .renderer=${this.selectRenderer.bind(this)}
      @value-changed=${this.handleValueChange}></vaadin-select>`}selectRenderer(t){var e;const s=((e=this.metadata)==null?void 0:e.displayName)||"Component",a=`${s}s`;Te(n`
        <vaadin-list-box>
          <vaadin-item value=${p.local} label="Local">
            <span class="title">Local</span>
            <br />
            <span>Edit styles for this ${s}</span>
          </vaadin-item>
          <vaadin-item value=${p.global} label="Global">
            <span class="title">Global</span>
            <br />
            <span>Edit styles for all ${a}</span>
          </vaadin-item>
        </vaadin-list-box>
      `,t)}handleValueChange(t){const e=t.detail.value;e!==this.value&&this.dispatchEvent(new ct(e))}};Z([c({})],z.prototype,"value",2);Z([c({})],z.prototype,"metadata",2);Z([Ve("vaadin-select")],z.prototype,"select",2);z=Z([y("copilot-theme-scope-selector")],z);var ht=(t,e,s,a)=>{for(var o=e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=r(o)||o);return o};let Ce=class extends g{static get styles(){return[g.styles,v`
        .editor-row {
          align-items: center;
        }
      `]}handleInputChange(t){const e=t.target.checked?this.propertyMetadata.checkedValue:"";this.dispatchChange(e||"")}renderEditor(){const t=this.value===this.propertyMetadata.checkedValue;return n` <input type="checkbox" .checked=${t} @change=${this.handleInputChange} /> `}};Ce=ht([y("copilot-theme-checkbox-property-editor")],Ce);var pt=(t,e,s,a)=>{for(var o=e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=r(o)||o);return o};let ke=class extends g{handleInputChange(t){this.dispatchChange(t.detail.value)}renderEditor(){var t;return n`
      <copilot-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}></copilot-theme-text-input>
    `}};ke=pt([y("copilot-theme-text-property-editor")],ke);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=Fe(class extends We{constructor(t){var e;if(super(t),t.type!==Ge.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,a;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((s=this.st)!=null&&s.has(i))&&this.it.add(i);return this.render(e)}const o=t.element.classList;for(const i of this.it)i in e||(o.remove(i),this.it.delete(i));for(const i in e){const r=!!e[i];r===this.it.has(i)||(a=this.st)!=null&&a.has(i)||(r?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Je}});var mt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,de=(t,e,s,a)=>{for(var o=a>1?void 0:a?vt(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&mt(e,s,o),o};let D=class extends g{constructor(){super(),this.selectedPresetIndex=-1,this.presets=new B}static get styles(){return[g.styles,v`
        :host {
          --preset-count: 3;
          --slider-bg: #fff;
          --slider-border: #333;
        }

        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .editor-row .input {
          flex: 0 0 auto;
          width: 80px;
        }

        .slider-wrapper {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #aaa;
        }

        .icon.prefix > svg {
          transform: scale(0.75);
        }

        .slider {
          flex: 1 1 0;
          -webkit-appearance: none;
          background: linear-gradient(to right, #666, #666 2px, transparent 2px);
          background-size: calc((100% - 13px) / (var(--preset-count) - 1)) 8px;
          background-position: 5px 50%;
          background-repeat: repeat-x;
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-moz-range-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .custom-value {
          opacity: 0.5;
        }

        .custom-value:hover,
        .custom-value:focus-within {
          opacity: 1;
        }

        .custom-value:not(:hover, :focus-within) {
          --slider-bg: #333;
          --slider-border: #666;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new B(this.propertyMetadata)),super.update(t)}renderEditor(){var t;const e={"slider-wrapper":!0,"custom-value":this.selectedPresetIndex<0},s=this.presets.values.length;return n`
      <div class=${ut(e)}>
        ${null}
        <input
          type="range"
          class="slider"
          style="--preset-count: ${s}"
          step="1"
          min="0"
          .max=${(s-1).toString()}
          .value=${this.selectedPresetIndex}
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange} />
        ${null}
      </div>
      <copilot-theme-text-input
        class="input"
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleValueChange}></copilot-theme-text-input>
    `}handleSliderInput(t){const e=t.target,s=parseInt(e.value),a=this.presets.values[s];this.selectedPresetIndex=s,this.value=this.presets.rawValues[a]}handleSliderChange(){this.dispatchChange(this.value)}handleValueChange(t){this.value=t.detail.value,this.updateSliderValue(),this.dispatchChange(this.value)}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||""),this.updateSliderValue()}updateSliderValue(){const t=this.presets.findPreset(this.value);this.selectedPresetIndex=t?this.presets.values.indexOf(t):-1}};de([f()],D.prototype,"selectedPresetIndex",2);de([f()],D.prototype,"presets",2);D=de([y("copilot-theme-range-property-editor")],D);const V=(t,e=0,s=1)=>t>s?s:t<e?e:t,m=(t,e=0,s=Math.pow(10,e))=>Math.round(s*t)/s,ze=({h:t,s:e,v:s,a})=>{const o=(200-e)*s/100;return{h:m(t),s:m(o>0&&o<200?e*s/100/(o<=100?o:200-o)*100:0),l:m(o/2),a:m(a,2)}},re=t=>{const{h:e,s,l:a}=ze(t);return`hsl(${e}, ${s}%, ${a}%)`},te=t=>{const{h:e,s,l:a,a:o}=ze(t);return`hsla(${e}, ${s}%, ${a}%, ${o})`},gt=({h:t,s:e,v:s,a})=>{t=t/360*6,e=e/100,s=s/100;const o=Math.floor(t),i=s*(1-e),r=s*(1-(t-o)*e),l=s*(1-(1-t+o)*e),d=o%6;return{r:m([s,r,i,i,l,s][d]*255),g:m([l,s,s,r,i,i][d]*255),b:m([i,i,l,s,s,r][d]*255),a:m(a,2)}},yt=t=>{const{r:e,g:s,b:a,a:o}=gt(t);return`rgba(${e}, ${s}, ${a}, ${o})`},bt=t=>{const e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return e?ft({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},ft=({r:t,g:e,b:s,a})=>{const o=Math.max(t,e,s),i=o-Math.min(t,e,s),r=i?o===t?(e-s)/i:o===e?2+(s-t)/i:4+(t-e)/i:0;return{h:m(60*(r<0?r+6:r)),s:m(o?i/o*100:0),v:m(o/255*100),a}},wt=(t,e)=>{if(t===e)return!0;for(const s in t)if(t[s]!==e[s])return!1;return!0},xt=(t,e)=>t.replace(/\s/g,"")===e.replace(/\s/g,""),$e={},Re=t=>{let e=$e[t];return e||(e=document.createElement("template"),e.innerHTML=t,$e[t]=e),e},ce=(t,e,s)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:s}))};let P=!1;const ne=t=>"touches"in t,Ct=t=>P&&!ne(t)?!1:(P||(P=ne(t)),!0),_e=(t,e)=>{const s=ne(e)?e.touches[0]:e,a=t.el.getBoundingClientRect();ce(t.el,"move",t.getMove({x:V((s.pageX-(a.left+window.pageXOffset))/a.width),y:V((s.pageY-(a.top+window.pageYOffset))/a.height)}))},kt=(t,e)=>{const s=e.keyCode;s>40||t.xy&&s<37||s<33||(e.preventDefault(),ce(t.el,"move",t.getMove({x:s===39?.01:s===37?-.01:s===34?.05:s===33?-.05:s===35?1:s===36?-1:0,y:s===40?.01:s===38?-.01:0},!0)))};class he{constructor(e,s,a,o){const i=Re(`<div role="slider" tabindex="0" part="${s}" ${a}><div part="${s}-pointer"></div></div>`);e.appendChild(i.content.cloneNode(!0));const r=e.querySelector(`[part=${s}]`);r.addEventListener("mousedown",this),r.addEventListener("touchstart",this),r.addEventListener("keydown",this),this.el=r,this.xy=o,this.nodes=[r.firstChild,r]}set dragging(e){const s=e?document.addEventListener:document.removeEventListener;s(P?"touchmove":"mousemove",this),s(P?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!Ct(e)||!P&&e.button!=0)return;this.el.focus(),_e(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),_e(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":kt(this,e);break}}style(e){e.forEach((s,a)=>{for(const o in s)this.nodes[a].style.setProperty(o,s[o])})}}class $t extends he{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:re({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${m(e)}`)}getMove(e,s){return{h:s?V(this.h+e.x*360,0,360):360*e.x}}}class _t extends he{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:re(e)},{"background-color":re({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${m(e.s)}%, Brightness ${m(e.v)}%`)}getMove(e,s){return{s:s?V(this.hsva.s+e.x*100,0,100):e.x*100,v:s?V(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const Et=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',St="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",Nt="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",q=Symbol("same"),se=Symbol("color"),Ee=Symbol("hsva"),oe=Symbol("update"),Se=Symbol("parts"),F=Symbol("css"),W=Symbol("sliders");let Pt=class extends HTMLElement{static get observedAttributes(){return["color"]}get[F](){return[Et,St,Nt]}get[W](){return[_t,$t]}get color(){return this[se]}set color(t){if(!this[q](t)){const e=this.colorModel.toHsva(t);this[oe](e),this[se]=t}}constructor(){super();const t=Re(`<style>${this[F].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[Se]=this[W].map(s=>new s(e))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,s){const a=this.colorModel.fromAttr(s);this[q](a)||(this.color=a)}handleEvent(t){const e=this[Ee],s={...e,...t.detail};this[oe](s);let a;!wt(s,e)&&!this[q](a=this.colorModel.fromHsva(s))&&(this[se]=a,ce(this,"color-changed",{value:a}))}[q](t){return this.color&&this.colorModel.equal(t,this.color)}[oe](t){this[Ee]=t,this[Se].forEach(e=>e.update(t))}};class Mt extends he{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const s=te({...e,a:0}),a=te({...e,a:1}),o=e.a*100;this.style([{left:`${o}%`,color:te(e)},{"--gradient":`linear-gradient(90deg, ${s}, ${a}`}]);const i=m(o);this.el.setAttribute("aria-valuenow",`${i}`),this.el.setAttribute("aria-valuetext",`${i}%`)}getMove(e,s){return{a:s?V(this.hsva.a+e.x):e.x}}}const Vt=`[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`;class Tt extends Pt{get[F](){return[...super[F],Vt]}get[W](){return[...super[W],Mt]}}const At={defaultColor:"rgba(0, 0, 0, 1)",toHsva:bt,fromHsva:yt,equal:xt,fromAttr:t=>t};class Ot extends Tt{get colorModel(){return At}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function zt(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}const ae={start:"top",end:"bottom"},ie={start:"left",end:"right"},Ne=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),Rt=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=zt(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,s){if(this.__removeUpdatePositionEventListeners(),s&&(s.__overlay=null,Ne.unobserve(s),e&&(this.__addUpdatePositionEventListeners(),s.__overlay=this,Ne.observe(s))),e){const a=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(o=>{this.__margins[o]=parseInt(a[o],10)})),this.setAttribute("dir",a.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),s=this.__shouldAlignStartVertically(e);this.style.justifyContent=s?"flex-start":"flex-end";const a=this.__isRTL,o=this.__shouldAlignStartHorizontally(e,a),i=!a&&o||a&&!o;this.style.alignItems=i?"flex-start":"flex-end";const r=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,r,this.noVerticalOverlap,ae,this,s),d=this.__calculatePositionInOneDimension(e,r,this.noHorizontalOverlap,ie,this,o);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!s),this.toggleAttribute("top-aligned",s),this.toggleAttribute("end-aligned",!i),this.toggleAttribute("start-aligned",i)}__shouldAlignStartHorizontally(e,s){const a=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const o=Math.min(window.innerWidth,document.documentElement.clientWidth),i=!s&&this.horizontalAlign==="start"||s&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,a,o,this.__margins,i,this.noHorizontalOverlap,ie)}__shouldAlignStartVertically(e){const s=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const a=Math.min(window.innerHeight,document.documentElement.clientHeight),o=this.verticalAlign==="top";return this.__shouldAlignStart(e,s,a,this.__margins,o,this.noVerticalOverlap,ae)}__shouldAlignStart(e,s,a,o,i,r,l){const d=a-e[r?l.end:l.start]-o[l.end],u=e[r?l.start:l.end]-o[l.start],k=i?d:u,T=k>(i?u:d)||k>s;return i===T}__adjustBottomProperty(e,s,a){let o;if(e===s.end){if(s.end===ae.end){const i=Math.min(window.innerHeight,document.documentElement.clientHeight);if(a>i&&this.__oldViewportHeight){const r=this.__oldViewportHeight-i;o=a-r}this.__oldViewportHeight=i}if(s.end===ie.end){const i=Math.min(window.innerWidth,document.documentElement.clientWidth);if(a>i&&this.__oldViewportWidth){const r=this.__oldViewportWidth-i;o=a-r}this.__oldViewportWidth=i}}return o}__calculatePositionInOneDimension(e,s,a,o,i,r){const l=r?o.start:o.end,d=r?o.end:o.start,u=parseFloat(i.style[l]||getComputedStyle(i)[l]),k=this.__adjustBottomProperty(l,o,u),T=s[r?o.start:o.end]-e[a===r?o.end:o.start],$=k?`${k}px`:`${u+T*(r?-1:1)}px`;return{[l]:$,[d]:""}}};var Lt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,E=(t,e,s,a)=>{for(var o=a>1?void 0:a?It(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&Lt(e,s,o),o};class qt extends CustomEvent{constructor(e){super("color-picker-change",{detail:{value:e}})}}const Le=v`
  :host {
    --preview-size: 24px;
    --preview-color: rgba(0, 0, 0, 0);
  }

  .preview {
    --preview-bg-size: calc(var(--preview-size) / 2);
    --preview-bg-pos: calc(var(--preview-size) / 4);

    width: var(--preview-size);
    height: var(--preview-size);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: none;
    border: solid 2px #888;
    border-radius: 4px;
    box-sizing: content-box;
  }

  .preview::before,
  .preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .preview::before {
    content: '';
    background: white;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #666 75%), linear-gradient(45deg, transparent 75%, #666 75%),
      linear-gradient(45deg, #666 25%, transparent 25%);
    background-size: var(--preview-bg-size) var(--preview-bg-size);
    background-position: 0 0, 0 0, calc(var(--preview-bg-pos) * -1) calc(var(--preview-bg-pos) * -1),
      var(--preview-bg-pos) var(--preview-bg-pos);
  }

  .preview::after {
    content: '';
    background-color: var(--preview-color);
  }
`;let R=class extends _{constructor(){super(...arguments),this.commitValue=!1}static get styles(){return[Le,v`
        #toggle {
          display: block;
        }
      `]}update(t){super.update(t),t.has("value")&&this.overlay&&this.overlay.requestContentUpdate()}firstUpdated(){this.overlay=document.createElement("copilot-color-picker-overlay"),this.overlay.renderer=this.renderOverlayContent.bind(this),this.overlay.owner=this,this.overlay.positionTarget=this.toggle,this.overlay.noVerticalOverlap=!0,this.overlay.addEventListener("vaadin-overlay-escape-press",this.handleOverlayEscape.bind(this)),this.overlay.addEventListener("vaadin-overlay-close",this.handleOverlayClose.bind(this)),this.append(this.overlay)}render(){const t=this.value||"rgba(0, 0, 0, 0)";return n` <button
      id="toggle"
      class="preview"
      style="--preview-color: ${t}"
      @click=${this.open}></button>`}open(){this.commitValue=!1,this.overlay.opened=!0,this.overlay.style.zIndex="1000000";const t=this.overlay.shadowRoot.querySelector('[part="overlay"]');t.style.background="#333"}renderOverlayContent(t){const e=getComputedStyle(this.toggle,"::after").getPropertyValue("background-color");Te(n` <div>
        <copilot-color-picker-overlay-content
          .value=${e}
          .presets=${this.presets}
          @color-changed=${this.handleColorChange.bind(this)}></copilot-color-picker-overlay-content>
      </div>`,t)}handleColorChange(t){this.commitValue=!0,this.dispatchEvent(new qt(t.detail.value)),t.detail.close&&(this.overlay.opened=!1,this.handleOverlayClose())}handleOverlayEscape(){this.commitValue=!1}handleOverlayClose(){const t=this.commitValue?"color-picker-commit":"color-picker-cancel";this.dispatchEvent(new CustomEvent(t))}};E([c({})],R.prototype,"value",2);E([c({})],R.prototype,"presets",2);E([Ve("#toggle")],R.prototype,"toggle",2);R=E([y("copilot-color-picker")],R);let G=class extends _{static get styles(){return[Le,v`
        :host {
          display: block;
          padding: 12px;
        }

        .picker::part(saturation),
        .picker::part(hue) {
          margin-bottom: 10px;
        }

        .picker::part(hue),
        .picker::part(alpha) {
          flex: 0 0 20px;
        }

        .picker::part(saturation),
        .picker::part(hue),
        .picker::part(alpha) {
          border-radius: 3px;
        }

        .picker::part(saturation-pointer),
        .picker::part(hue-pointer),
        .picker::part(alpha-pointer) {
          width: 20px;
          height: 20px;
        }

        .swatches {
          display: grid;
          grid-template-columns: repeat(6, var(--preview-size));
          grid-column-gap: 10px;
          grid-row-gap: 6px;
          margin-top: 16px;
        }
      `]}render(){return n` <div>
      <copilot-rgba-string-color-picker
        class="picker"
        .color=${this.value}
        @color-changed=${this.handlePickerChange}></copilot-rgba-string-color-picker>
      ${this.renderSwatches()}
    </div>`}renderSwatches(){if(!this.presets||this.presets.length===0)return;const t=this.presets.map(e=>n` <button
        class="preview"
        style="--preview-color: ${e}"
        @click=${()=>this.selectPreset(e)}></button>`);return n` <div class="swatches">${t}</div>`}handlePickerChange(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t.detail.value}}))}selectPreset(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t,close:!0}}))}};E([c({})],G.prototype,"value",2);E([c({})],G.prototype,"presets",2);G=E([y("copilot-color-picker-overlay-content")],G);customElements.whenDefined("vaadin-overlay").then(()=>{const t=customElements.get("vaadin-overlay");class e extends Rt(t){}customElements.define("copilot-color-picker-overlay",e)});customElements.define("copilot-rgba-string-color-picker",Ot);var jt=(t,e,s,a)=>{for(var o=e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=r(o)||o);return o};let Pe=class extends g{constructor(){super(...arguments),this.presets=new B}static get styles(){return[g.styles,v`
        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new B(this.propertyMetadata)),super.update(t)}renderEditor(){var t;return n`
      <copilot-color-picker
        .value=${this.value}
        .presets=${this.presets.values}
        @color-picker-change=${this.handleColorPickerChange}
        @color-picker-commit=${this.handleColorPickerCommit}
        @color-picker-cancel=${this.handleColorPickerCancel}></copilot-color-picker>
      <copilot-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}></copilot-theme-text-input>
    `}handleInputChange(t){this.value=t.detail.value,this.dispatchChange(this.value)}handleColorPickerChange(t){this.value=t.detail.value,this.dispatchChange(this.value)}handleColorPickerCommit(){this.originalValue=this.value,this.dispatchChange(this.value)}handleColorPickerCancel(){this.value=this.originalValue,this.dispatchChange(this.value)}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||"")}};Pe=jt([y("copilot-theme-color-property-editor")],Pe);var Ut=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,pe=(t,e,s,a)=>{for(var o=a>1?void 0:a?Bt(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&Ut(e,s,o),o};class Ht extends CustomEvent{constructor(e){super("open-css",{detail:{element:e}})}}let J=class extends _{static get styles(){return v`
      .section .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0.4rem var(--theme-editor-section-horizontal-padding);
        color: var(--dev-tools-text-color-emphasis);
        background-color: rgba(0, 0, 0, 0.2);
      }

      .section .property-list .property-editor:not(:last-child) {
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .section .header .open-css {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.12);
        color: var(--dev-tools-text-color);
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
        visibility: inherit;
      }

      .section .header .open-css:hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}render(){const t=this.metadata.elements.map(e=>this.renderSection(e));return n` <div>${t}</div> `}renderSection(t){const e=t.properties.map(s=>this.renderPropertyEditor(t,s));return n`
      <div class="section" data-testid=${t==null?void 0:t.displayName}>
        <div class="header">
          <span> ${t.displayName} </span>
          <button class="open-css" @click=${()=>this.handleOpenCss(t)}>Edit CSS</button>
        </div>
        <div class="property-list">${e}</div>
      </div>
    `}handleOpenCss(t){this.dispatchEvent(new Ht(t))}renderPropertyEditor(t,e){let s;switch(e.editorType){case X.checkbox:s=L`copilot-theme-checkbox-property-editor`;break;case X.range:s=L`copilot-theme-range-property-editor`;break;case X.color:s=L`copilot-theme-color-property-editor`;break;default:s=L`copilot-theme-text-property-editor`}return Ue` <${s}
          class="property-editor"
          .elementMetadata=${t}
          .propertyMetadata=${e}
          .theme=${this.theme}
          data-testid=${e.propertyName}
        >
        </${s}>`}};pe([c({})],J.prototype,"metadata",2);pe([c({})],J.prototype,"theme",2);J=pe([y("copilot-theme-property-list")],J);const b=()=>window.Vaadin.copilotPlugins._internals;/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Dt=(t,e)=>{if(typeof t!="string")throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\W/g,s=>/[À-ž]/.test(s)?s:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,s=>e&&e.condense?"-":s).toLowerCase()};const Ft=Ke(Dt),Wt=t=>{var e,s;return(s=(e=t.split("\\").pop())==null?void 0:e.split("/").pop())==null?void 0:s.split(".")[0]},Gt=t=>{var e;return(e=Wt(t))==null?void 0:e.replace(/\.[^/.]+$/,"")};var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,S=(t,e,s,a)=>{for(var o=a>1?void 0:a?Kt(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&Jt(e,s,o),o};let x=class extends Be{constructor(){super(),this.baseTheme=null,this.editedTheme=null,this.expanded=!1,this.themeEditorState=U.enabled,this.effectiveTheme=null}static get styles(){return v`
      :host {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        --theme-editor-section-horizontal-padding: 0.75rem;
        display: flex;
        flex-direction: column;
        height: var(--default-content-height, 100%);
      }

      .notice {
        padding: var(--theme-editor-section-horizontal-padding);
      }

      .notice a {
        color: var(--dev-tools-text-color-emphasis);
      }

      .hint vaadin-icon {
        color: var(--dev-tools-green-color);
        font-size: var(--lumo-icon-size-m);
      }

      .hint {
        display: flex;
        align-items: center;
        gap: var(--theme-editor-section-horizontal-padding);
      }

      .header {
        flex: 0 0 auto;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .header .picker-row {
        padding: var(--theme-editor-section-horizontal-padding);
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }

      .picker {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .picker button {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        padding: 0;
        line-height: 20px;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .picker button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .picker svg,
      .picker .component-type {
        flex: 0 0 auto;
        margin-right: 4px;
      }

      .picker .instance-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #e5a2fce5;
      }

      .picker .instance-name-quote {
        color: #e5a2fce5;
      }

      .picker .no-selection {
        font-style: italic;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .property-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .link-button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .link-button:focus,
      .link-button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .icon-button {
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .icon-button:disabled {
        opacity: 0.5;
      }

      .icon-button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}connectedCallback(){super.connectedCallback(),this.reaction(()=>b().copilotUiState.getSelections,()=>{this.refreshPicked(),this.requestUpdate()}),this.refreshPicked()}async refreshPicked(){var t;if(b().copilotUiState.getSelections.length!==1){this.context=null;return}const e=b().copilotUiState.getSelections[0];if(!e.metadata){this.context={scope:((t=this.context)==null?void 0:t.scope)??p.local,selectedElement:e},this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}await this.refreshComponentAndTheme(e)}firstUpdated(){this.history=new tt(this.api),this.historyActions=this.history.allowedActions,this.undoRedoListener=t=>{var e,s;const a=t.key==="Z"||t.key==="z";a&&(t.ctrlKey||t.metaKey)&&t.shiftKey?(e=this.historyActions)!=null&&e.allowRedo&&this.handleRedo():a&&(t.ctrlKey||t.metaKey)&&(s=this.historyActions)!=null&&s.allowUndo&&this.handleUndo()},document.addEventListener("vaadin-theme-updated",()=>{A.clear(),this.refreshTheme()}),document.addEventListener("keydown",this.undoRedoListener),this.dispatchEvent(new CustomEvent("before-open"))}update(t){super.update(t)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.undoRedoListener),this.dispatchEvent(new CustomEvent("after-close"))}render(){var t,e,s,a;return this.themeEditorState===U.missing_theme?this.renderMissingThemeNotice():n`
      <div class="header">
        <div class="picker-row">
          ${this.renderPicker()}
          <div class="actions">
            ${(e=(t=this.context)==null?void 0:t.selectedElement)!=null&&e.metadata?n` <copilot-theme-scope-selector
                  .value=${this.context.scope}
                  .metadata=${this.context.selectedElement.metadata}
                  @scope-change=${this.handleScopeChange}></copilot-theme-scope-selector>`:null}
            <button
              class="icon-button"
              data-testid="undo"
              ?disabled=${!((s=this.historyActions)!=null&&s.allowUndo)}
              @click=${this.handleUndo}>
              ${me.undo}
            </button>
            <button
              class="icon-button"
              data-testid="redo"
              ?disabled=${!((a=this.historyActions)!=null&&a.allowRedo)}
              @click=${this.handleRedo}>
              ${me.redo}
            </button>
          </div>
        </div>
        ${this.renderLocalClassNameEditor()}
      </div>
      ${this.renderPropertyList()}
    `}renderMissingThemeNotice(){return n`
      <div class="notice">
        It looks like you have not set up an application theme yet. Theme editor requires an existing theme to work
        with. Please check our
        <a href="https://vaadin.com/docs/latest/styling/application-theme" target="_blank">documentation</a>
        on how to set up an application theme.
      </div>
    `}renderPropertyList(){var t;if(!this.context)return null;if(!((t=this.context.selectedElement)!=null&&t.metadata)){const s=this.context.selectedElement.element.localName;return n`
        <div class="notice">Styling <code>&lt;${s}&gt;</code> components is not supported at the moment.</div>
      `}const e=this.context.selectedElement.metadata;if(this.context.scope===p.local&&!this.context.accessible){const s=e.displayName;return n`
        ${e.notAccessibleDescription&&this.context.scope===p.local?n`<div class="notice hint" style="padding-bottom: 0;">
              <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
              <div>${e.notAccessibleDescription}</div>
            </div>`:""}
        <div class="notice">
          The selected ${s} cannot be styled locally. Currently, Theme Editor only supports styling
          instances that are assigned to a local variable, like so:
          <pre><code>Button saveButton = new Button("Save");</code></pre>
          If you want to modify the code so that it satisfies this requirement,
          <button class="link-button" @click=${this.handleShowComponent}>click here</button>
          to open it in your IDE. Alternatively you can choose to style all ${s}s by selecting "Global" from
          the scope dropdown above.
        </div>
      `}return n` ${e.description&&this.context.scope===p.local?n`<div class="notice hint">
            <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
            <div>${e.description}</div>
          </div>`:""}
      <copilot-theme-property-list
        class="property-list"
        .metadata=${e}
        .theme=${this.effectiveTheme}
        @theme-property-value-change=${this.handlePropertyChange}
        @open-css=${this.handleOpenCss}></copilot-theme-property-list>`}handleShowComponent(){if(!this.context)return;if(Q()){const e=b().getFlowComponent(this.context.selectedElement.element),s={nodeId:e.nodeId,uiId:e.uiId,element:e.element};b().copilotEventBus.send("showComponentCreateLocation",s);return}const t=He(this.context.selectedElement.element);b().copilotEventBus.send(`${De}show-component`,{...t})}async handleOpenCss(t){if(!this.context)return;await this.ensureLocalClassName();const e={themeScope:this.context.scope,localClassName:this.context.localClassName},s=M(t.detail.element,e);await this.api.openCss(s)}renderPicker(){var t,e;let s;if((e=(t=this.context)==null?void 0:t.selectedElement)!=null&&e.metadata){const a=this.context.selectedElement.metadata,o=this.context.scope===p.local?a.displayName:`All ${a.displayName}s`,i=n`<span class="component-type">${o}</span>`,r=this.context.scope===p.local?Qe(this.context.selectedElement):null,l=r?n` <span class="instance-name-quote">"</span><span class="instance-name">${r}</span
            ><span class="instance-name-quote">"</span>`:null;s=n`${i} ${l}`}else s=n`<span class="no-selection">Pick a single element to get started</span>`;return n` <div class="picker">${s}</div> `}renderLocalClassNameEditor(){var t;const e=((t=this.context)==null?void 0:t.scope)===p.local&&this.context.accessible;if(!this.context||!e)return null;const s=this.context.localClassName||this.context.suggestedClassName;return n` <copilot-theme-class-name-editor
      .className=${s}
      @class-name-change=${this.handleClassNameChange}>
    </copilot-theme-class-name-editor>`}async handleClassNameChange(t){if(!this.context)return;const e=this.context.localClassName,s=t.detail.value;if(e){const a=this.context.selectedElement.element;this.context.localClassName=s,await this.updateClassName(a,s,e)}else this.context={...this.context,suggestedClassName:s}}handleScopeChange(t){this.context&&this.refreshTheme({...this.context,scope:t.detail.value})}async handlePropertyChange(t){if(!this.context||!this.baseTheme||!this.editedTheme)return;const{element:e,property:s,value:a}=t.detail;this.editedTheme.updatePropertyValue(e.selector,s.propertyName,a,!0),this.effectiveTheme=w.combine(this.baseTheme,this.editedTheme),await this.ensureLocalClassName();const o={themeScope:this.context.scope,localClassName:this.context.localClassName},i=Ye(e,o,s.propertyName,a);try{const r=await this.api.setCssRules([i]);this.historyActions=this.history.push(r.requestId);const l=Ze(i);A.add(l)}catch(r){j("Failed to update property value",r)}}async handleUndo(){this.historyActions=await this.history.undo(),await this.refreshComponentAndTheme()}async handleRedo(){this.historyActions=await this.history.redo(),await this.refreshComponentAndTheme()}async ensureLocalClassName(){if(!this.context||this.context.scope===p.global||this.context.localClassName)return;if(!this.context.localClassName&&!this.context.suggestedClassName)throw new Error("Cannot assign local class name for the component because it does not have a suggested class name");const t=this.context.selectedElement.element,e=this.context.suggestedClassName;this.context.localClassName=e,await this.updateClassName(t,e)}async refreshComponentAndTheme(t){var e;if(!t)return;let s;if(Q()){const a=b().getFlowComponent(t.element);if(!a)return;s=await this.api.loadComponentMetadata(a),A.previewLocalClassName(t.element,s.className)}else s={accessible:!0,className:t.element.className,suggestedClassName:this.suggestClassName(t)};await this.refreshTheme({scope:((e=this.context)==null?void 0:e.scope)||p.local,localClassName:s.className,suggestedClassName:s.suggestedClassName,accessible:s.accessible,selectedElement:t})}async refreshTheme(t){var e;const s=t||this.context;if(!((e=s==null?void 0:s.selectedElement)!=null&&e.metadata))return;if(s.scope===p.local&&!s.accessible){this.context=s,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}let a=new w(s.selectedElement.metadata);if(!(s.scope===p.local&&!s.localClassName)){const i={themeScope:s.scope,localClassName:s.localClassName},r=s.selectedElement.metadata.elements.map(d=>M(d,i)),l=await this.api.loadRules(r);a=w.fromServerRules(s.selectedElement.metadata,i,l.rules)}const o=await Xe(s.selectedElement.metadata);this.context=s,this.baseTheme=o,this.editedTheme=a,this.effectiveTheme=w.combine(o,this.editedTheme)}suggestClassName(t){var e;const s=(e=b().getElementSourceInfo(t.element))==null?void 0:e.fileName;return Ft((s?Gt(s):"")+t.displayName,{condense:!0})}async updateClassName(t,e,s){if(Q()){const a=b().getFlowComponent(t),o=await this.api.setLocalClassName(a,e);this.historyActions=this.history.push(o.requestId,()=>A.previewLocalClassName(t,e),()=>A.previewLocalClassName(t,s));return}s?e=t.className.replace(s,e):t.className&&(e=`${t.className} ${e}`),await b().setElementAttributeValue(t,"className",e),await this.api.setLocalClassNameReact(t.localName,e,s),t.className=e}};S([c({})],x.prototype,"expanded",2);S([c({})],x.prototype,"themeEditorState",2);S([c()],x.prototype,"api",2);S([f()],x.prototype,"historyActions",2);S([f()],x.prototype,"context",2);S([f()],x.prototype,"effectiveTheme",2);x=S([y("copilot-theme-editor")],x);var le=(t=>(t.state="copilot-theme-editor-state",t.response="copilot-theme-editor-response",t.loadComponentMetadata="copilot-theme-editor-metadata",t.setLocalClassName="copilot-theme-editor-local-class-name",t.setCssRules="copilot-theme-editor-rules",t.loadRules="copilot-theme-editor-load-rules",t.history="copilot-theme-editor-history",t.openCss="copilot-theme-editor-open-css",t))(le||{});class Yt{constructor(){this.pendingRequests={},this.requestCounter=0}sendRequest(e,s){const a=(this.requestCounter++).toString(),o=s.uiId??this.getGlobalUiId();return new Promise((i,r)=>{b().copilotEventBus.send(e,{...s,requestId:a,uiId:o}),this.pendingRequests[a]={resolve:i,reject:r}})}handleResponse(e){const s=this.pendingRequests[e.requestId];if(!s){console.warn("Received response for unknown request");return}delete this.pendingRequests[e.requestId],e.code==="ok"?s.resolve(e):s.reject(e)}loadComponentMetadata(e){return this.sendRequest("copilot-theme-editor-metadata",{nodeId:e.nodeId})}setLocalClassName(e,s){return this.sendRequest("copilot-theme-editor-local-class-name",{nodeId:e.nodeId,className:s})}setLocalClassNameReact(e,s,a){return this.sendRequest("copilot-theme-editor-local-class-name",{tagName:e,oldClassName:a,className:s})}setCssRules(e){return this.sendRequest("copilot-theme-editor-rules",{rules:e})}loadRules(e){return this.sendRequest("copilot-theme-editor-load-rules",{selectors:e})}undo(e){return this.sendRequest("copilot-theme-editor-history",{undo:e})}redo(e){return this.sendRequest("copilot-theme-editor-history",{redo:e})}openCss(e){return this.sendRequest("copilot-theme-editor-open-css",{selector:e})}getGlobalUiId(){if(this.globalUiId===void 0){const e=window.Vaadin;if(e&&e.Flow){const{clients:s}=e.Flow,a=Object.keys(s);for(const o of a){const i=s[o];if(i.getNodeId){this.globalUiId=i.getUIId();break}}}}return this.globalUiId??-1}}var Zt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,ue=(t,e,s,a)=>{for(var o=a>1?void 0:a?Xt(e,s):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(a?r(e,s,o):r(o))||o);return a&&o&&Zt(e,s,o),o};const Me=window.Vaadin.devTools;let K=class extends qe{constructor(){super(),this.api=new Yt,this.handleStateEvent=t=>{this.themeEditorState=t.data.state},this.handleServerEvent=t=>{this.api.handleResponse(t.data)},this.expanded=!0,this.themeEditorState=U.disabled}connectedCallback(){super.connectedCallback(),this.onCommand(le.state,this.handleStateEvent),this.onCommand(le.response,this.handleServerEvent)}render(){return n` <copilot-theme-editor
      .expanded=${this.expanded}
      .themeEditorState=${this.themeEditorState}
      .api=${this.api}
      @before-open=${this.disableJavaLiveReload}
      @after-close=${this.enableJavaLiveReload}></copilot-theme-editor>`}disableJavaLiveReload(){var t;(t=Me.javaConnection)==null||t.setActive(!1)}enableJavaLiveReload(){var t;(t=Me.javaConnection)==null||t.setActive(!0)}};ue([f()],K.prototype,"expanded",2);ue([f()],K.prototype,"themeEditorState",2);K=ue([y("copilot-theme-editor-panel")],K);const Qt={header:"Theme Editor",expanded:!0,draggable:!0,panelOrder:0,panel:"right",floating:!1,tag:"copilot-theme-editor-panel"},es={init(t){t.addPanel(Qt)}};window.Vaadin.copilotPlugins.push(es);export{K as CopilotThemeEditorPanel};
