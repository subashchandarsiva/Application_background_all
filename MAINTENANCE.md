# Dependency Maintenance

## Update Policy

Dependabot checks every npm package directory weekly on Monday. Minor and patch
updates are grouped; major upgrades remain separate PRs. Each directory allows
up to five version-update PRs. The schedule takes effect after the configuration
is merged into the default branch. Automatic merging is not configured; review
updates and run the relevant checks before merging.

## September 8, 2026 Update

Updated to React Scripts 5 and React 16.14. Added canvas support to Jest and a rendering test for the heading and canvas, including unmount cleanup.

Validation: The production build and rendering test passed with Node 22. Run npm ci, npm run build, and CI=true npm test -- --watch=false --runInBand.

The npm audit result for the updated lockfile is **0 critical, 14 high, 7 moderate, 9 low**.
These counts include npm dependency propagation and are not directly comparable
to GitHub Dependabot advisory counts. Re-run npm audit for current results.

High findings remain in the React Scripts build-tool dependency tree. This is an incremental update, not a clean security audit. The legacy build tooling and particle library warrant a separate modernization.
