export const site = { name: 'Noor Evelyn Russell', linkedin: 'https://www.linkedin.com/in/noorruss', email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'nrussell@bu.edu', phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (507) 379-7527', instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '', url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000' };
export const photos = {
 hero:'/images/mediterranean-concept.png',
 pool:'/images/pool-concept.png',
 interior:'/images/interior-concept.png',
 room:'/images/room-concept.png',
 coast:'/images/coast-concept.png',
 travel:'/images/travel-concept.png',
 detail:'/images/detail-concept.png',
};
export const categories = ['All work','Hotels & resorts','Architecture','Interiors','Destinations','Lifestyle'];
type Project = {slug:string;title:string;destination:string;category:string;image:string;description:string;images?:{src:string;caption:string}[]};
const projectEntries: Project[] = [
 {slug:'mediterranean-retreat',title:'Mediterranean Retreat',destination:'Greece · A visual study',category:'Hotels & resorts',image:photos.pool,description:'A study in sun-warmed stone, quiet water, and the unhurried rhythm of Mediterranean hospitality.'},
 {slug:'the-language-of-light',title:'The Language of Light',destination:'Interiors · A visual study',category:'Interiors',image:photos.interior,description:'Natural light traces the texture of a room. A collection exploring the quiet conversation between architecture and atmosphere.'},
 {slug:'coastal-architecture',title:'Coastal Architecture',destination:'Mediterranean · A visual study',category:'Architecture',image:photos.hero,description:'Clean lines meet an open horizon. An exploration of spaces shaped by their relationship with the sea.'},
 {slug:'island-living',title:'Island Living',destination:'Coastal destinations · A visual study',category:'Destinations',image:photos.travel,description:'Salt air, shaded terraces, and a slower way of seeing. An imagined editorial journey along the coast.'},
 {slug:'the-modern-escape',title:'The Modern Escape',destination:'Contemporary hospitality · A visual study',category:'Hotels & resorts',image:photos.room,description:'A considered escape into contemporary comfort, exploring the details that make a room feel like a destination.'},
 {slug:'a-slower-morning',title:'A Slower Morning',destination:'Life at leisure · A visual study',category:'Lifestyle',image:photos.coast,description:'An invitation to linger. A visual exploration of the moments between arrival and departure.'},
];
export const projects = projectEntries.map(project => ({ ...project, images: project.images ?? [{src: project.image, caption: 'An invitation to arrive.'}, {src: photos.detail, caption: 'The quiet character of considered design.'}, {src: photos.room, caption: 'A room shaped by light.'}, {src: photos.coast, caption: 'A dialogue between architecture and the landscape.'}, {src: photos.interior, caption: 'Space to slow down.'}, {src: photos.pool, caption: 'The feeling that stays.'}] }));
export const services = [
 ['Hotel & resort photography','Editorial photography exploring a property’s architecture, accommodations, amenities, and the feeling of being there.'],
 ['Architecture & interiors','A thoughtful attention to materials, spatial composition, considered design, and the changing character of natural light.'],
 ['Destination storytelling','Visual narratives shaped around the character, culture, and emotional appeal of a place.'],
 ['Hospitality content creation','A cohesive visual language for hotel websites, social platforms, marketing, and editorial storytelling.'],
 ['Creative collaborations','Individual creative partnerships with hospitality brands, independent properties, and travel organizations.'],
];
export const articles = [
 {slug:'architecture-of-mediterranean-hospitality',title:'The architecture of Mediterranean hospitality',category:'Design & place',image:photos.hero,excerpt:'On the quiet relationship between a building, its landscape, and the way it makes us feel.'},
 {slug:'finding-beauty-in-the-details',title:'Finding beauty in the details',category:'Through the lens',image:photos.detail,excerpt:'A study of texture, shadow, and the small gestures that give a space its character.'},
 {slug:'the-art-of-slow-travel',title:'The art of slow travel',category:'Notes on travel',image:photos.travel,excerpt:'An invitation to look a little longer, and to let a destination reveal itself.'},
];

export const destinations = ['Greece', 'United Arab Emirates', 'Europe', 'Asia'];

export const assetPath = (path: string) => path.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}` : path;
