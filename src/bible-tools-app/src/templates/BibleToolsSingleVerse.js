import { html } from 'lit-element'

// https://ebible.org/bible/gbf.htm - these aren't proper HTML tags, but
// rendering the text as HTML seems to prevent them from showing up in the output
// @todo - investigate this further
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

export const BibleToolsSingleVerse = ({ hasReference, hasVerse, isBlock, name, text, verse }) => {
  return isBlock
    ? html`
        <article>
          ${hasReference
            ? html`
                <h1 class="reference">${name}</h1>
              `
            : ''}
          <article>
            ${hasVerse
              ? html`
                  <span>(${verse}) <span class="text">${unsafeHTML(text)}</span></span>
                `
              : html`
                  <span class="text">${text}</span>
                `}
          </article>
        </article>
      `
    : html`
        ${hasReference
          ? html`
              <span class="reference">${name}</span>
            `
          : ''}
        ${hasVerse
          ? html`
              <span>(${verse})</span>
            `
          : ''}
        <span class="text">${unsafeHTML(text)}</span>
      `
}
