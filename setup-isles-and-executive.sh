#!/usr/bin/env bash
# ============================================================================
# setup-isles-and-executive.sh
#   1. Section title "Council Leadership" becomes "Executive Members".
#   2. Eleko ISOLE becomes Eleko Isles: the route folder is renamed to
#      eleko-isles and every path and display label is rewritten.
#   3. Commits .eslintrc.json if next lint created it, so the lint step
#      stops failing on future runs.
#
# If setup-services-and-investment.sh failed at the lint step, its file
# changes are still on disk and will be committed by this script.
#
# Run from project root:  bash setup-isles-and-executive.sh
# Undo after push:  git revert HEAD && git push
# ============================================================================
set -euo pipefail
[ -f package.json ] || { echo "ERROR: run from project root."; exit 1; }

if [ ! -f .eslintrc.json ] && [ ! -f eslint.config.mjs ] && [ ! -f eslint.config.js ]; then
  echo "NOTE: no ESLint config found. next lint will prompt and then fail."
  echo "Run  npx next lint  once, accept the Strict option, then rerun this script."
  exit 1
fi

mkdir -p scripts
cat > scripts/iso.cjs << 'PATCH_EOF'
const fs = require('fs');
const path = require('path');
const log = [];
const ok = (m) => log.push('  OK   ' + m);
const noop = (m) => log.push('  NOOP ' + m);
const warn = (m) => log.push('  WARN ' + m);

/* ================================================================
 * 1. Council Leadership becomes Executive Members.
 * ================================================================ */
(function executiveMembers() {
  const P = 'lib/cabinet.ts';
  let s;
  try { s = fs.readFileSync(P, 'utf8'); } catch (e) { warn(P + ' missing'); return; }
  if (s.includes("title: 'Executive Members'")) { noop('section already reads Executive Members'); return; }
  const from = "    title: 'Council Leadership',";
  const to   = "    title: 'Executive Members',";
  if (!s.includes(from)) { warn('Council Leadership section title not found'); return; }
  fs.writeFileSync(P, s.replace(from, to));
  ok('section title: Council Leadership is now Executive Members');
})();

/* ================================================================
 * 2. Eleko ISOLE becomes Eleko Isles, route and label.
 * ================================================================ */
(function elekoIsles() {
  const BASE = 'app/opportunities/housing';
  const OLD_DIRS = ['eleko-isole', 'eleko-isol', 'eleko-isolE'];
  const NEW_DIR = path.join(BASE, 'eleko-isles');

  /* Rename whichever spelling is on disk. */
  let renamed = false;
  if (fs.existsSync(NEW_DIR)) {
    noop('route folder is already eleko-isles');
    renamed = true;
  } else {
    for (const d of OLD_DIRS) {
      const p = path.join(BASE, d);
      if (fs.existsSync(p)) {
        fs.renameSync(p, NEW_DIR);
        ok('route folder: ' + d + ' renamed to eleko-isles');
        renamed = true;
        break;
      }
    }
  }
  if (!renamed) warn('no eleko route folder found under ' + BASE);

  /* Rewrite every reference, in both the path and the display label. */
  const roots = ['app', 'components', 'lib'];
  let files = 0, hits = 0;

  const PATH_RE = /\/opportunities\/housing\/eleko-isol[eE]?(?![a-zA-Z])/g;
  const LABEL_RE = /Eleko\s+ISOL[eE]?(?![a-zA-Z])/g;

  const walk = (dir) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name !== 'node_modules' && e.name !== '.next') walk(full);
        continue;
      }
      if (!/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(e.name)) continue;
      let s;
      try { s = fs.readFileSync(full, 'utf8'); } catch (err) { continue; }
      const before = s;
      const n = (s.match(PATH_RE) || []).length + (s.match(LABEL_RE) || []).length;
      s = s.replace(PATH_RE, '/opportunities/housing/eleko-isles');
      s = s.replace(LABEL_RE, 'Eleko Isles');
      if (s !== before) {
        fs.writeFileSync(full, s);
        files++; hits += n;
        log.push('  OK   ' + full.replace(/\\/g, '/') + '  (' + n + ' reference' + (n === 1 ? '' : 's') + ')');
      }
    }
  };
  roots.forEach(walk);

  if (!files) noop('every reference already reads Eleko Isles');
  else log.push('  ' + hits + ' reference(s) updated across ' + files + ' file(s)');

  /* Report anything still carrying the old spelling. */
  const left = [];
  const scan = (dir) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) { if (e.name !== 'node_modules' && e.name !== '.next') scan(full); continue; }
      if (!/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(e.name)) continue;
      const s = fs.readFileSync(full, 'utf8');
      if (/eleko-isol|Eleko\s+ISOL/i.test(s)) left.push(full);
    }
  };
  roots.forEach(scan);
  if (left.length) {
    log.push('');
    log.push('  WARNING: these files still carry the old spelling:');
    left.forEach((f) => log.push('    ' + f));
  }
})();

console.log(log.join('\n') || '  (no changes)');
PATCH_EOF

echo "== Applying =="
node scripts/iso.cjs
rm -f scripts/iso.cjs

# Keep git aware of the folder rename so history follows the files.
if [ -d .git ] && [ -d app/opportunities/housing/eleko-isles ]; then
  git add -A app/opportunities/housing > /dev/null 2>&1 || true
fi

echo
echo "== Checks =="
[ -d app/opportunities/housing/eleko-isles ] && echo "  OK   route folder is eleko-isles" || echo "  WARN route folder missing"
grep -q "Executive Members" lib/cabinet.ts && echo "  OK   Executive Members section" || echo "  WARN section title"
if grep -rqi "eleko-isol\b\|Eleko ISOL" app components lib 2>/dev/null; then
  echo "  WARN old Eleko spelling still present somewhere"
else
  echo "  OK   no old Eleko spelling remains"
fi

echo
echo "== tsc --noEmit =="
if ! npx --no-install tsc --noEmit; then echo "ERROR: TypeScript failed. Nothing committed."; exit 1; fi

echo "== lint =="
if ! npm run lint --silent; then echo "ERROR: ESLint failed. Nothing committed."; exit 1; fi

if [ -d .git ]; then
  git add -A
  if git diff --cached --quiet; then
    echo "Nothing to commit."
  else
    if git commit -m "Rename Eleko ISOLE to Eleko Isles and Council Leadership to Executive Members"; then
      if git push; then echo "Pushed. Vercel will redeploy."; else echo "Push failed - run: git push"; fi
    else
      echo "Commit failed (git identity not set?). Changes are staged - commit manually."
    fi
  fi
fi

echo
echo "Done. Check:"
echo "  /opportunities/housing - the card reads Eleko Isles and opens without a 404"
echo "  /government/executive-council - the first section reads Executive Members"
