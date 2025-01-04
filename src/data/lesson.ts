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
  {
    id: 9,
    title: 'Zod Schema-based Validation',
    description:
      'Zod is integrated with TypeScript. Not just for form handling but also for input validation API Route and data fetching validation,',
    url: 'https://zod.dev/',
  },
  {
    id: 10,
    title: 'React Hook Form',
    description:
      'Is a library for form handling, performant, removing the need to re-render the whole form.',
    url: 'https://react-hook-form.com/',
  },
  {
    id: 11,
    title: 'Error useForm',
    description:
      'If using `useForm` in the component, i need to add `use client` to the top of the file.',
    url: 'https://stackoverflow.com/questions/71746969/useform-and-react-hook-form-is-giving-problems-with-i-use-it-with-nextjs',
  },
  {
    id: 12,
    title: 'NextJS Backend JWT',
    description:
      'NextJS Route Handler runs on server environment nodejs, so i can use JWT for authentication.',
    url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers',
  },
  {
    id: 13,
    title: 'Middleware',
    description:
      'NextJS have middleware for route handler. I must create `middleware.ts` in root folder.',
    url: 'https://nextjs.org/docs/app/building-your-application/routing/middleware',
  },
  {
    id: 14,
    title: 'Middleware edge-based',
    description:
      'Middleware in NextJS is edge-based, so it runs on the edge server not nodejs. To use jsonwebtoken, i need to use `nodejs` runtime that is in route.ts.',
    url: 'https://nextjs.org/docs/messages/node-module-in-edge-runtime',
  },
  {
    id: 15,
    title: 'Symbol `?` in TypeScript',
    description:
      'The symbol `?` in TypeScript is for optional properties. So i can use it for optional parameter in function.',
    url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties',
  },
  {
    id: 16,
    title: 'Prefix NEXT_PUBLIC_',
    description:
      'Any environment variable that starts with `NEXT_PUBLIC_` will be exposed to the browser (browser/client-side).',
    url: 'https://nextjs.org/docs/basic-features/environment-variables',
  },
  {
    id: 17,
    title: 'Not using NEXT_PUBLIC_',
    description:
      'If not using `NEXT_PUBLIC_`, the environment variable will only be available in the server. Its only available in the server runtime: `getServerSideProps`, `getStaticProps`, and API Routes.',
    url: 'https://nextjs.org/docs/basic-features/environment-variables',
  },
  {
    id: 18,
    title: 'React Query: QueryClientProvider',
    description:
      "In nextjs project, i create a `ClientProvider` component that wraps the `QueryClientProvider` from `@tanstack/react-query`. So i can use 'use client' not in the root layout.",
    url: 'https://tanstack.com/query/latest/docs/framework/react/reference/QueryClientProvider#queryclientprovider',
  },
  {
    id: 19,
    title: 'React Query: useQuery for invalidation',
    description:
      'In the component, i can use `useQueryClient` to get the query client and invalidate the query by calling `queryClient.invalidateQueries`.',
    url: 'https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient',
  },
  {
    id: 20,
    title: 'Next.js: Using useState for QueryClient',
    description:
      'In Next.js, the QueryClient should be created inside a component using useState to ensure a single instance is maintained across renders. Unlike in a React Vite project, where QueryClient can be declared globally because everything runs client-side, creating it outside a component in Next.js can lead to multiple instances being created, especially during hydration or remounts.',
    url: 'https://tanstack.com/query/latest/docs/eslint/stable-query-client',
  },
  {
    id: 21,
    title: 'Axios Instance BaseURL',
    description:
      'In the axios instance, i set the baseURL to `/api`. Because in the Next.js project, the API routes are in the `/api` folder.',
    url: 'https://axios-http.com/docs/instance',
  },
  {
    id: 22,
    title: 'Middleware doenst triggered',
    description:
      'Instead of [root]/middleware.ts, i need to put the middleware in [root]/src/middleware.ts.',
    url: 'https://stackoverflow.com/questions/73040090/nextjs-middleware-does-not-seem-to-be-triggered',
  },
  {
    id: 23,
    title: 'NextRouter was not mounted',
    description:
      'Because im using app directory, i need to use `useRouter` from `next/navigation` (new hooks).',
    url: 'https://nextjs.org/docs/messages/next-router-not-mounted',
  },
];
