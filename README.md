# Jewel: The Last Timeline website

A standalone website for the proposed construction adventure. The site describes ten role missions and one Director; each role has five proposed levels and five jigsaw pieces. The expanded team game and its missions are concepts that still need development and testing.

The static website is served from the repository root. The role content is in `roles.js`; after editing it or the page template, run `node build.mjs` to regenerate `index.html` and the pages in `roles/`. Concept artwork details are in `ARTWORK.md`.

The 50-piece jigsaw on the home page uses a numbered 10-column by 5-row concept layout. Each role owns one column and each row corresponds to a level. The illustrated routes are schematic, not verified site plans. The jigsaw drawing is not a 3D-printable model: physical piece dimensions, fitting clearances, thickness, material and print tests will be decided separately.

The original two-option website is maintained in a separate repository.
