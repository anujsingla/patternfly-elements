import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from '<%= cssRelativePath %>';

/**
 * <%= readmeName %>
 * @slot - Place element content here
 */
@customElement('<%= tagName %>')
export class <%= className %> extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '<%= tagName %>': <%= className %>;
  }
}
