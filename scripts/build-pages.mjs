import {cp,mkdir,mkdtemp,rm,symlink,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
const root=process.cwd();
const stage=await mkdtemp(join(tmpdir(),'noor-pages-'));
try {
 for(const name of ['app','components','lib','public','package.json','package-lock.json','tsconfig.json','next-env.d.ts','next.config.ts','postcss.config.mjs'])await cp(join(root,name),join(stage,name),{recursive:true});
 // GitHub Pages serves static files. The full Next.js application keeps its API route.
 await rm(join(stage,'app/api'),{recursive:true,force:true});
 await symlink(join(root,'node_modules'),join(stage,'node_modules'),'dir');
 const result=spawnSync(process.execPath,[join(root,'node_modules/next/dist/bin/next'),'build','--webpack'],{cwd:stage,stdio:'inherit',env:{...process.env,GITHUB_PAGES:'1',NEXT_PUBLIC_STATIC_SITE:'1',NEXT_PUBLIC_BASE_PATH:process.env.NEXT_PUBLIC_BASE_PATH||'/norty-learns-to-code-',NEXT_PUBLIC_SITE_URL:process.env.NEXT_PUBLIC_SITE_URL||'https://nortyyyq.github.io/norty-learns-to-code-'}});
 if(result.status!==0)throw new Error('GitHub Pages build failed');
 const destination=resolve(root,'out');
 await rm(destination,{recursive:true,force:true});
 await mkdir(destination,{recursive:true});
 await cp(join(stage,'out'),destination,{recursive:true});
 await writeFile(join(destination,'.nojekyll'),'');
 console.log('Free hosting build ready in out/.');
} finally { await rm(stage,{recursive:true,force:true}); }
