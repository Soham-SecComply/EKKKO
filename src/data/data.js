/* ═══════════════════════════════════════════════════════════
   EKKKO — DATA LAYER (Single Source of Truth)
   ═══════════════════════════════════════════════════════════ */

export const SITE = {
  name: 'EKKKO',
  tagline: 'Where Ideas Echo',
  description: 'A studio at the intersection of narrative, technology, and culture.',
  founder: 'Shivani',
  founderRole: 'Founder & Strategist',
  parent: { name: 'SecComply', url: 'https://seccomply.net' },
  email: 'hello@ekkko.com',
  phone: '+91 98765 43210',
  location: 'Pune, India',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Social', href: '/social' },
  { label: 'Collaborate', href: '/collaborate' },
];

export const SOCIALS = [
  { name: 'Instagram', handle: '@thenadkarnees', url: 'https://www.instagram.com/thenadkarnees/', color: '#E1306C',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>' },
  { name: 'YouTube', handle: '@TheNadkarnees', url: 'https://youtube.com/@TheNadkarnees', color: '#FF0000',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>' },
  { name: 'LinkedIn', handle: 'EKKKO Personal Branding', url: 'https://www.linkedin.com/company/ekkkopersonalbranding/', color: '#0A66C2',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5A1.75 1.75 0 118.3 6.8a1.72 1.72 0 01-1.8 1.7zM20 19h-3v-4.4c0-1-.4-1.7-1.3-1.7a1.4 1.4 0 00-1.3 1 1.7 1.7 0 00-.1.6V19h-3s0-8.1 0-9h3v1.3a3 3 0 012.7-1.5c2 0 3.4 1.3 3.4 4V19z"/></svg>' },
  { name: 'Twitter / X', handle: '@ekkko_studio', url: 'https://x.com/ekkko_studio', color: '#000',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 2.1h3.5l-7.7 8.8L23 21.9h-7.1l-5.6-7.2-6.3 7.2H.5l8.2-9.4L0 2.1h7.3l5 6.6 5.9-6.6zm-1.2 17.8h2L6.9 4.2H4.7l12.4 15.7z"/></svg>' },
  { name: 'Spotify', handle: 'EKKKO Podcast', url: 'https://spotify.com', color: '#1DB954',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 17.3a.75.75 0 01-1 .25c-2.8-1.7-6.3-2.1-10.4-1.1a.75.75 0 11-.3-1.5c4.5-1 8.4-.6 11.4 1.3a.75.75 0 01.3 1zm1.5-3.3a.94.94 0 01-1.3.3c-3.2-2-8.1-2.5-11.9-1.4a.94.94 0 11-.5-1.8c4.3-1.3 9.7-.7 13.4 1.6a.94.94 0 01.3 1.3zm.1-3.4c-3.8-2.3-10.2-2.5-13.8-1.4A1.13 1.13 0 114.6 7c4.2-1.3 11.2-1 15.6 1.6a1.12 1.12 0 01-1.1 2z"/></svg>' },
];

export const REELS = [
  { id: 1, title: 'Building in Public', views: '24K', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=700&fit=crop', url: 'https://www.instagram.com/p/DTdaEUBgCze/', videoSrc: '/reels/reel-1.mp4' },
  { id: 2, title: 'Startup Growth Tips', views: '18K', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=700&fit=crop', url: 'https://www.instagram.com/p/DVO2jqGCDc8/', videoSrc: '/reels/reel-2.mp4' },
  { id: 3, title: 'Content That Converts', views: '31K', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=700&fit=crop', url: 'https://www.instagram.com/p/DUSpRZcgJCe/', videoSrc: '/reels/reel-3.mp4' },
];

export const BLOGS = [
  { slug: 'corporate-narrative-2026', title: 'The Corporate Narrative in 2026', category: 'Strategy', date: 'Feb 2026', readTime: '8 min',
    excerpt: 'Why every company needs a story architect, not just a marketing team.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    content: 'The most successful companies in 2026 aren\'t just selling products — they\'re narrating possibilities. The corporate narrative has evolved from mission statements and brand guidelines into living, breathing story ecosystems that touch every stakeholder interaction.\n\nThink about it: when was the last time a tagline changed your mind about a company? Probably never. But when was the last time a company\'s story — their origin, their mission, the way they talk about the future — made you feel something? That\'s the shift.\n\nCompanies like Notion, Linear, and Arc don\'t just market features. They architect narratives that make you feel like you\'re joining a movement. And that\'s exactly what every company needs in 2026: not a marketing team, but a story architect.\n\nThe story architect sits at the intersection of brand strategy, content creation, and cultural intelligence. They understand that your company\'s narrative isn\'t what you say about yourself — it\'s what the world says about you when you\'re not in the room.' },
  { slug: 'thought-leadership-myth', title: 'The Thought Leadership Myth', category: 'Insights', date: 'Jan 2026', readTime: '6 min',
    excerpt: 'Most thought leadership is neither. Here\'s how to actually lead thinking.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    content: 'Let\'s be honest: 90% of what passes for "thought leadership" on LinkedIn is recycled advice wrapped in a personal anecdote. It\'s not leading anyone\'s thinking — it\'s following the algorithm.\n\nReal thought leadership requires three things: an original perspective, the courage to share it, and the consistency to defend it over time. It\'s not about posting every day. It\'s about saying something worth remembering.\n\nThe founders who actually lead thinking in their industries aren\'t optimizing for engagement — they\'re optimizing for impact. They write things that make people uncomfortable, that challenge industry assumptions, that propose new frameworks for understanding old problems.\n\nThat\'s the difference between content marketing and thought leadership. Content marketing fills feeds. Thought leadership fills minds.' },
  { slug: 'digital-presence-audit', title: 'Your Digital Presence: A 2026 Audit', category: 'Digital', date: 'Jan 2026', readTime: '10 min',
    excerpt: 'A systematic framework for evaluating how your brand shows up online.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    content: 'Your digital presence isn\'t your website. It\'s not your LinkedIn profile. It\'s not your Instagram grid. It\'s the sum total of every digital touchpoint a person has with your brand — and in 2026, that ecosystem is more complex than ever.\n\nWe\'ve developed a systematic audit framework that evaluates digital presence across five dimensions: Discoverability, Consistency, Authority, Engagement, and Conversion. Each dimension maps to specific metrics and specific actions.\n\nThe audit starts with a simple question: if someone Googled your founder\'s name right now, what would they find? If the answer is "not much" or "nothing recent," you have a presence problem that no amount of paid advertising can fix.\n\nDigital presence in 2026 is about being findable, memorable, and trustworthy across every platform where your audience spends time.' },
  { slug: 'podcast-business-development', title: 'Podcasts as Business Development', category: 'Growth', date: 'Dec 2025', readTime: '7 min',
    excerpt: 'How a well-produced podcast becomes your most powerful sales channel.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop',
    content: 'The most underrated business development channel in 2026 isn\'t cold email, LinkedIn outreach, or conference networking. It\'s a well-produced podcast.\n\nHere\'s why: a podcast gives you a legitimate reason to reach out to anyone in the world and have a 45-minute conversation with them. No pitch deck required. No sales agenda. Just a conversation.\n\nBut the key word is "well-produced." A poorly produced podcast damages your brand more than no podcast at all. Production quality signals professionalism, attention to detail, and respect for your audience\'s time.\n\nThe ROI of a business development podcast isn\'t measured in download numbers. It\'s measured in relationships built, deals closed, and doors opened that would have remained shut through any other channel.' },
  { slug: 'founder-brand-equity', title: 'Building Founder Brand Equity', category: 'Founders', date: 'Dec 2025', readTime: '9 min',
    excerpt: 'Your personal brand is your company\'s most undervalued asset.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
    content: 'In the age of AI-generated everything, the most valuable differentiator a company has is its founder\'s authentic voice. People don\'t trust companies — they trust people. And the founder\'s personal brand is the bridge between the two.\n\nFounder brand equity compounds over time. Every podcast appearance, every article, every conference talk adds to a growing body of evidence that this person — and by extension, their company — knows what they\'re talking about.\n\nBut building founder brand equity isn\'t about self-promotion. It\'s about service. The best founder brands are built by people who genuinely help their audience solve problems, understand trends, and navigate complexity.\n\nThe math is simple: invest in the founder\'s brand, and you invest in the company\'s most durable competitive advantage.' },
  { slug: 'visual-identity-systems', title: 'Visual Identity Systems That Scale', category: 'Design', date: 'Nov 2025', readTime: '8 min',
    excerpt: 'Why your brand needs a system, not just a logo.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
    content: 'A logo is not a brand. A color palette is not a brand. A font is not a brand. These are components of a visual identity system — and the difference between a collection of assets and a system is the difference between a company that looks professional and a company that looks inevitable.\n\nVisual identity systems are designed to scale. They include rules for how elements interact, how the brand adapts to different contexts, and how new touchpoints can be created without losing coherence.\n\nThe best visual identity systems are built on a simple principle: constraint enables creativity. When the system is well-defined, anyone on the team can create on-brand content without needing to check with the design team.\n\nIn 2026, your visual identity system needs to work across more contexts than ever: social media, AR/VR, AI-generated content, dark mode, variable fonts, and dynamic interfaces that adapt to user preferences.' },
];

export const PODCAST = {
  title: 'The EKKKO Podcast',
  subtitle: 'Conversations at the intersection of creativity, technology, and culture.',
  trailerImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&h=500&fit=crop',
  trailerYouTube: 'ENT9mq5A4oE',
  shorts: [
    { id: 1, title: 'Why Founders Need a Narrative', youtubeId: 'tUufke5TaE4', image: 'https://img.youtube.com/vi/tUufke5TaE4/maxresdefault.jpg' },
    { id: 2, title: 'The Content Trap', youtubeId: 'JhPakduSupU', image: 'https://img.youtube.com/vi/JhPakduSupU/maxresdefault.jpg' },
    { id: 3, title: 'Building Community in 2026', youtubeId: 'figuYoA2n5M', image: 'https://img.youtube.com/vi/figuYoA2n5M/maxresdefault.jpg' },
  ],
};

export const TIMELINE = [
  { year: '2021', title: 'The Spark', desc: 'First experiments in digital storytelling and content strategy.' },
  { year: '2022', title: 'Finding Voice', desc: 'Building a community around authentic founder narratives.' },
  { year: '2023', title: 'Going Deep', desc: 'Launched podcast and expanded into full-spectrum creative strategy.' },
  { year: '2024', title: 'Studio Mode', desc: 'Formalized services, partnered with high-growth startups.' },
  { year: '2025', title: 'Scaling Echo', desc: '500K+ audience, 50+ company partnerships, global reach.' },
  { year: '2026', title: 'What\'s Next', desc: 'Redefining how companies build narrative at the intersection of AI and culture.' },
];

export const STATS = [
  { number: '50+', label: 'Companies Partnered' },
  { number: '500K+', label: 'Audience Reached' },
  { number: '200+', label: 'Campaigns Delivered' },
  { number: '98%', label: 'Client Retention' },
];

export const SERVICES = [
  { title: 'Business Growth', desc: 'Strategic growth frameworks that scale your visibility, revenue, and market positioning.', icon: '◆' },
  { title: 'Partnership & Alliances', desc: 'Building high-value partnerships and strategic alliances that accelerate your reach and impact.', icon: '▲' },
  { title: 'Digital Presence', desc: 'Systematic optimization of how your brand shows up across every digital touchpoint.', icon: '●' },
  { title: 'Podcast Production', desc: 'End-to-end podcast strategy, production, and distribution that builds real relationships.', icon: '■' },
  { title: 'Founder Positioning', desc: 'Turning founders into recognized voices through authentic personal brand development.', icon: '★' },
  { title: 'Community Building', desc: 'Building engaged communities around your brand that become growth engines.', icon: '✦' },
];

export const PRIVACY = [
  { title: 'Introduction', body: 'EKKKO ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.' },
  { title: 'Information We Collect', body: 'We may collect personal identification information (name, email address, phone number, company name) when you fill out forms, subscribe to our newsletter, or contact us. We also automatically collect certain technical data such as your IP address, browser type, and browsing patterns through cookies and similar technologies.' },
  { title: 'How We Use Your Information', body: 'We use collected information to provide and improve our services, communicate with you about projects and opportunities, send periodic emails regarding updates or other information related to our services, and personalize your experience on our platform.' },
  { title: 'Data Protection', body: 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.' },
  { title: 'Cookies', body: 'Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality of the site.' },
  { title: 'Third-Party Services', body: 'We may employ third-party companies and services to facilitate our operations. These third parties have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.' },
  { title: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.' },
  { title: 'Changes to This Policy', body: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.' },
  { title: 'Contact Us', body: 'If you have any questions about this privacy policy or our data practices, please contact us at hello@ekkko.com.' },
];

export const IMAGES = {
  heroVideo: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop',
  heroBg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop',
  aboutHero: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
  aboutFounder: 'https://ik.imagekit.io/nprf964by/SecComply/PBP_8254.jpg?updatedAt=1767936444991',
  collaborateHero: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&h=900&fit=crop',
  socialDivider: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=600&fit=crop',
  divider1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop',
  divider2: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&h=600&fit=crop',
  divider3: 'https://images.unsplash.com/photo-1504384764586-bb4cee aecf58?w=1600&h=600&fit=crop',
  podcastBg: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&h=900&fit=crop',
};

export const PLAY_SVG = '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="23" stroke="white" stroke-width="2"/><path d="M19 16l12 8-12 8V16z" fill="white"/></svg>';
