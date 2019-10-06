import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import { until } from 'lit-html/directives/until.js'

import { BibleToolsSingleVerse as BibleToolsSingleVerseTemplate } from '../templates/BibleToolsSingleVerse'
import { Loading } from '../templates/Loading'

export class BibleToolsSingleVerse extends LitElement {
  static get properties() {
    return {
      language: {
        type: String
      },
      version: {
        type: String
      },
      book: {
        type: String
      },
      chapter: {
        type: String
      },
      hasReference: {
        type: Boolean
      },
      hasVerse: {
        type: Boolean
      },
      host: {
        type: String
      },
      isBlock: {
        type: Boolean
      },
      verse: {
        type: String
      },
    }
  }

  static get styles() {
    return css`
      :host {
        color: var(--bible-tools-single-verse-color, #000);
      }

      article h1.reference {
        color: var(--bible-tools-single-verse-reference-color);
        font: var(--bible-tools-single-verse-reference-font, bold 1.5rem sans-serif);
      }

      span.reference {
        color: var(--bible-tools-single-verse-reference-color);
        font: var(--bible-tools-single-verse-reference-font, normal 1rem sans-serif);
      }

      article > p.text {
        color: var(--bible-tools-single-verse-text-color);
        font: var(--bible-tools-single-verse-text-font, normal 1rem sans-serif);
      }

      span.text {
        color: var(--bible-tools-single-verse-text-color);
        font: var(--bible-tools-single-verse-text-font, normal 1rem sans-serif);
      }
    `
  }

  constructor() {
    super()

    this.hasReference = false
    this.hasVerse = false
    this.isBlock = false

    this.book="John"
    this.chapter="3"
    this.host="https://bible-tools.github.io/data/translations"
    this.language="en"
    this.version="KJV"
    this.verse="16"
  }

  render() {
    const url = this.host + '/' + this.language + '/' +
      this.version + '/' + this.book + '/' + this.chapter +
      '/' + this.verse + '/index.json'

    return html`
      ${until(fetch(url).then(res => {
        if (res.ok) {
          return res.json().then(json => BibleToolsSingleVerseTemplate({
            hasReference: this.hasReference,
            hasVerse: this.hasVerse,
            isBlock: this.isBlock,
            ...json
          }))
        }
      }), Loading(this.isBlock))}
    `
  }
}

defineCustomElement('bible-tools-single-verse', BibleToolsSingleVerse)
