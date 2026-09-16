# Life Row

Public mission and program page for Life Row, a planned afterschool community for East LA’s young men.

The page follows the [Whop brand guide](https://brand.whop.com/) structure: grouped sidebar, `{group}-{section}` anchors, and content rows. Folders and files use the same numbered PascalCase layout as the Whop kit.

## Local

```bash
npm install
npm run dev
```

## Layout

```
app/                          Next.js App Router (required lowercase)
components/Guide/             PascalCase components
  Sidebar.tsx
  Hero.tsx
  GroupBanner.tsx
  ContentRow.tsx
content/
  Types.ts
  Hero.ts
  index.ts
  01_Introduction/index.ts
  02_Community/index.ts
  03_Curriculum/index.ts
  04_Principles/index.ts
  05_Support/index.ts
public/brand-kit/
  01_Colors
  02_Pictograms/{SVG,PNG}
  03_Logos/{Brandmark,Lockup}/{SVG,PNG}
  04_Fonts
  05_Social
  06_Decks
  08_OpenGraph
```

See `public/brand-kit/README.md` for expected asset filenames.
