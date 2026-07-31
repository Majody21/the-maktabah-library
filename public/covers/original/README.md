# Book cover photos

Drop the **full-size** cover photo in this folder, then run:

```
npm run covers
```

That resizes it to 260px wide, strips metadata, and writes the optimised
`.jpg` one level up in `public/covers/`, which is what the Resources page
loads. Keep the original here so a cover can be regenerated later.

The file name (minus its extension) becomes the served name, so a cover
referenced in `lib/content/resources.ts` as `/covers/important-lessons.jpg`
must be saved here as `important-lessons.<ext>`.

Currently expected:

| Save as | Book |
|---|---|
| `three-fundamental-principles.jpg` | Explanation of the Three Fundamental Principles — Haytham Sarhan |
| `important-lessons.jpg` | Explanation of the Important Lessons for Every Muslim — Ibn Baz, expl. Haytham Sarhan |

A cover that is missing or fails to load falls back to the styled
placeholder, so nothing breaks while a file is still to be added.
