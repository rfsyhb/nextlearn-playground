# About Project
@rfsyhb's playground to learning any NextJS concept also this is my first NextJS project.

## Error Encountered
1. NextJS doesn' have `--host` so i need to set it manual by adding `--port 3000 --hostname 0.0.0.0`.
2. External image source need to added in `next.config.ts`
3. `page.tsx` doesn't use `{ children }` as props. It's `layout.tsx`'s task to render `{ children }`