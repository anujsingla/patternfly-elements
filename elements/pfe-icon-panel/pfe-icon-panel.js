import PFElement from '../pfelement/pfelement.js';
import '../pfe-icon/pfe-icon.js';

/*!
 * PatternFly Elements: PfeIconPanel 1.0.0-prerelease.25
 * @license
 * Copyright 2019 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

class PfeIconPanel extends PFElement {
  static get version() {
    return "1.0.0-prerelease.25";
  }

  get html() {
    return `<style>:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media (min-width:576px){:host{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}:host pfe-icon{--pfe-icon--spacing:var(--pfe-theme--container-spacer, 1rem);--pfe-icon--size:var(--pfe-theme--icon-size, 64px);margin-right:var(--pfe-icon--spacing);font-size:var(--pfe-icon--size);line-height:var(--pfe-icon--size);padding:.05em;min-width:var(--pfe-icon--size);max-width:var(--pfe-icon--size)}:host ::slotted([slot=footer]),:host ::slotted([slot=header]){display:block}:host ::slotted([slot=footer]){margin-top:1em}:host([stacked]){-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}:host([stacked][centered]){-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}</style><pfe-icon></pfe-icon>
<div class="content">
  <slot class="header" name="header"></slot>
  <slot class="body"></slot>
  <slot class="footer" name="footer"></slot>
</div>`;
  }
  static get tag() {
    return "pfe-icon-panel";
  }

  get styleUrl() {
    return "pfe-icon-panel.scss";
  }

  get templateUrl() {
    return "pfe-icon-panel.html";
  }

  static get observedAttributes() {
    return ["icon", "circled"];
  }

  static get cascadingAttributes() {
    return {
      icon: "pfe-icon",
      circled: "pfe-icon",
      color: "pfe-icon"
    };
  }

  constructor() {
    super(PfeIconPanel);
  }
}

PFElement.create(PfeIconPanel);
//# sourceMappingURL=pfe-icon-panel.js.map
