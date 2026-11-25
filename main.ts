import { mkdirSync, writeFileSync } from 'node:fs';

const LINE = "Asked my agent to rename one variable. It renamed all 214 to `data2`, updated the docs, and asked if I wanted the tests run too. There are no tests.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, `${LINE}\n`);
