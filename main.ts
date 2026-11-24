// The entry: entry.png beside this file is the image, and this program hands
// exactly those bytes to the gate at /output/entry.png. The image is drawn by
// draw.py + scenes.py in this repository, so the page is generated, not pasted.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
