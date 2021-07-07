import { hack, syntaxHighlighterPrism } from 'mdx-deck/themes';

// MDX Deck 2:
export const themes = [
    hack,
    syntaxHighlighterPrism,
    {
        Slide: {
            maxWidth: '90vw',
            margin: '0 auto',
        },
        pre: {
            lineHeight: '0.5em !important',
            minWidth: '50vw',
            code: {
                fontSize: '0.5em'
            }
        },
        css: {
            small: {
                fontSize: '0.4em'
            }
        }
    }
];
