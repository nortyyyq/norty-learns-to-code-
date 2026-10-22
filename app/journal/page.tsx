import Link from 'next/link';
import { articles } from '@/lib/content';
import { Photo } from '@/components/ui';
export const metadata={title:'Journal'};
export default function Journal(){return <section className="page section"><div className="page-intro"><span className="eyebrow">THE JOURNAL</span><h1>Notes on <em>place.</em><br/>And the space between.</h1><p>Thoughts on design, travel, and the art of looking closer.</p><p className="sample-note">Sample editorial content · Drafts for review, not published firsthand reporting</p></div><div className="journal-grid">{articles.map((a,i)=><Link key={a.slug} href={`/journal/${a.slug}`}><Photo src={a.image} alt={`${a.title} — sample editorial cover`}/><span className="eyebrow">DRAFT 0{i+1} / {a.category}</span><h2>{a.title}</h2><p>{a.excerpt}</p><span className="text-link">Read the story ↗</span></Link>)}</div></section>}
