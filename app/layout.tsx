import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import type { Metadata } from 'next';
import { Header,Footer } from '@/components/ui';
import { site, assetPath } from '@/lib/content';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:`${site.name} — Hospitality & Travel Photography`,template:`%s | ${site.name}`},description:'Independent hospitality and travel photographer. A considered exploration of architecture, atmosphere, and the art of being somewhere.',openGraph:{type:'website',images:[{url:assetPath('/opengraph-image'),width:1200,height:630}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:site.name,url:site.url,jobTitle:"Hospitality & Travel Photographer"}).replace(/</g,'\\u003c')}}/><Header/><main id="main">{children}</main><Footer/></body></html>}
