export const dynamic = 'force-static';
import {MetadataRoute} from 'next';import{site,projects,articles}from '@/lib/content';export default function sitemap():MetadataRoute.Sitemap{return['','/portfolio','/about','/services','/journal','/contact',...projects.map(p=>`/portfolio/${p.slug}`),...articles.map(a=>`/journal/${a.slug}`)].map(path=>({url:`${site.url}${path}`}))}
