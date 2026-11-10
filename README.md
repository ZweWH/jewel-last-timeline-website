# Jewel: The Last Timeline website

A standalone website for the proposed construction adventure. Ten students form five two-person mission teams, with one student Director coordinating the team. Each pair shares five proposed levels. Both players earn one jigsaw piece per completed level: 50 pieces in total. Team play, the missions and the ending are concepts that still need development and testing.

The static website is served from the repository root. Roles are in `roles.js`, and paired mission concepts are in `groups.js`. After editing the data or the page template, run `node build.mjs` to regenerate `index.html` and the mission pages. Concept artwork details are in `ARTWORK.md`.

Each team's illustrated top-down roadmap has five numbered links to the shared level descriptions, with actions for both roles. The route and markers are website navigation, not saved game progress; illustrations and locations are fictional concepts.

The homepage jigsaw is a numbered 10-column by 5-row concept layout. Each role keeps its original column and each row corresponds to a shared team level. A team level therefore corresponds to two pieces, one for each player. Select a piece for its role, pair and shared level. The drawing is a concept; separate physical jigsaw prototypes in the sibling `jigsaw-3d` folder require printer-specific slicing and physical fit testing.

The original two-option website is maintained in a separate repository.