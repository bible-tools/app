import { html } from 'lit-element'

export const Loading = isBlock => isBlock
  ? html`<article><span class="reference">loading...</span></article>`
  : html`<span class="reference">loading...</span>`
