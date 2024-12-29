export type Lesson = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'NextJS Cannot Use --host',
    description:
      "NextJS doesn't have `--host` so you need to set it manually by adding `--port 3000 --hostname 0.0.0.0`.",
    url: 'https://stackoverflow.com/questions/70079560/how-to-host-nextjs-app-on-0-0-0-03000-with-nrwl-next-not-localhost3000',
  },
  {
    id: 2,
    title: 'External Image Source',
    description: 'External image sources need to be added in `next.config.ts`.',
    url: 'https://nextjs.org/docs/messages/next-image-unconfigured-host',
  },
  {
    id: 3,
    title: "Page.tsx Doesn't Use Children",
    description:
      "`page.tsx` doesn't use `{ children }` as props. It's `layout.tsx`'s task to render `{ children }`.",
    url: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages',
  },
  {
    id: 4,
    title: 'Fill the white space',
    description:
      'To fill the white space (no scroll page), i need to add `flex-grow` in the container with a flex and 100vh parent.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow',
  },
  {
    id: 5,
    title: 'Display scroll bar',
    description:
      'Even with `flex-grow` before, I must add `overflow-auto` for LessonLearned and `overflow-hidden` to the parent.',
    url: 'https://tailwindcss.com/docs/overflow',
  },
  {
    id: 6,
    title: 'Need focus!',
    description:
      "I was wondered why the page doesn't fill, until i saw a '`' symbol after div tag.",
    url: 'https://www.betterup.com/blog/15-ways-to-improve-your-focus-and-concentration-skills',
  },
  {
    id: 7,
    title: 'Only work in client component',
    description:
      "If using react hook `usePathname`, i need to mark the component as client only by adding 'use client'",
    url: 'https://nextjs.org/docs/app/api-reference/directives/use-client',
  },
  {
    id: 8,
    title: 'UsePathname for Navigation',
    description:
      'To get the current path, use client component hook `usePathname` from `next/navigation` also if nested, i can get the first path check by adding `.startsWith(path)`.',
    url: 'https://nextjs.org/docs/app/api-reference/functions/use-pathname',
  },
];
