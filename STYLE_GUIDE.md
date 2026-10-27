# Style Guide

## 1. Color palette

Clinical trust with a fresh, welcoming healthcare aesthetic.

| Token        | Hex       | Usage                                          |
| ------------ | --------- | ---------------------------------------------- |
| navy         | `#0B3B70` | Headings, navigation, footer, primary text     |
| navy-deep    | `#062C52` | Footer backgrounds, dark sections              |
| teal         | `#009C9A` | Primary buttons, links, active states          |
| teal-bright  | `#08B5B0` | Hover states, icons, highlights                |
| blue-light   | `#EAF5FA` | Section backgrounds, doctor areas              |
| cyan-pale    | `#F3FAFC` | Cards, alternating backgrounds                 |
| border       | `#D6E9F2` | Card borders, dividers, input outlines         |
| body         | `#334B63` | Paragraphs, descriptions                       |
| muted        | `#64788B` | Supporting information, credentials            |
| white        | `#FFFFFF` | Main background, card surfaces                 |

Rules:

- White is the dominant background.
- Navy for headings and important text.
- Teal for buttons, links, icons and key actions.
- Pale blue backgrounds to distinguish sections without heavy visual blocks.
- Deep navy reserved for the footer and selected emphasis sections.
- Maintain sufficient text contrast for accessibility.
- Balance: ~65% white, 20% light neutrals/blues, 10% navy, 5% teal.

## 2. Typography

Headings: **Manrope** · Body: **Inter** (Google Fonts)

| Element     | Font / weight       | Size (desktop) |
| ----------- | ------------------- | -------------- |
| H1          | Manrope ExtraBold   | 56–68px        |
| H2          | Manrope Bold        | 36–44px        |
| H3          | Manrope Bold        | 22–28px        |
| H4          | Manrope SemiBold    | 18–20px        |
| Body        | Inter Regular       | 16–18px        |
| Supporting  | Inter Regular       | 14–15px        |
| Navigation  | Inter Medium        | 14–16px        |
| Buttons     | Inter SemiBold      | 14–16px        |
| Captions    | Inter Medium        | 12–13px        |

Rules:

- Sentence case, not excessive uppercase.
- Concise, patient-focused headings.
- Body line height ~1.5–1.7.
- Uppercase only for small section labels, with subtle letter spacing.
- No decorative or script fonts.

## 3. Layout & spacing

Spacious, structured, responsive, easy to scan.

- Content max width: 1200–1300px
- Side padding: desktop 40–56px · tablet 24–32px · mobile 18–22px
- Section spacing: 72–100px desktop
- Card gap: 16–24px
- Border radius: 8–14px
- Input / button height: 46–52px
- Spacing scale: multiples of 8px

## 4. Code conventions

- Every page section is its own component, so each can be edited in isolation.
