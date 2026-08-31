import { useState, useMemo } from 'react';
import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { ArrowRight, Clock, Search, X } from 'lucide-react';
import { Link } from 'wouter';
import { posts, CATEGORIES } from '@/data/posts';

const SITE = 'https://www.mazzistudios.com';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let result = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  /* ── Structured data ─────────────────────────────────────── */
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Mazzi Studios Blog: AI Marketing, Fractional CMO & Growth Insights',
    description:
      'Practical insights on AI marketing automation, fractional CMO strategy, healthcare marketing, and B2B growth. From the Mazzi Studios team.',
    url: `${SITE}/blog`,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Mazzi Studios',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/brand-assets/mazzi-og.jpg` },
    },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mazzi Studios Blog Posts',
    description: 'All articles published by Mazzi Studios on AI, marketing, and B2B growth.',
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: p.canonical,
      name: p.seoTitle || p.title,
      image: p.image,
      description: p.metaDescription || p.excerpt,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    ],
  };

  return (
    <div className="w-full bg-[#080810] min-h-screen">
      <Head
        title="AI Marketing & Fractional CMO Insights | Mazzi Studios Blog"
        description="Practical insights on AI marketing automation, fractional CMO strategy, healthcare marketing, SEO/AEO/GEO, and B2B growth. Straight from the Mazzi Studios team."
        canonical={`${SITE}/blog`}
        jsonLd={[collectionSchema, itemListSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 text-center px-4">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(235,37,113,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-[#EB2571] uppercase tracking-[0.12em] text-[11px] font-bold mb-4">
            MAZZI STUDIOS
          </span>
          <div className="w-12 h-px bg-[#EB2571] mb-8" />
          <h1 className="text-[80px] md:text-[112px] leading-[0.85] text-[#F5F0EB] mb-6 font-['Bebas_Neue']">
            INSIGHTS & <span className="text-[#EB2571]">PERSPECTIVES.</span>
          </h1>
          <p className="text-[17px] text-[#cfcfcf] max-w-xl mx-auto leading-relaxed">
            AI, healthcare marketing, B2B growth, and digital strategy. Straight from the team.
          </p>
          <p className="text-[12px] text-white/20 uppercase tracking-widest mt-6">
            {posts.length} articles
          </p>

          {/* Search bar */}
          <div className="relative mt-10 w-full max-w-lg">
            <Search
              size={15}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cfcfcf] pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full bg-[#0F0F1C] border border-[#EB2571]/20 text-[#F5F0EB] placeholder-[#cfcfcf]/40 text-[14px] pl-10 pr-10 py-3 focus:outline-none focus:border-[#EB2571]/60 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#cfcfcf] hover:text-[#F5F0EB] transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <div className="bg-[#0D0D1A] border-y border-white/5 py-6 sticky top-[72px] z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 -mb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  activeCategory === category
                    ? 'bg-[#EB2571] text-white'
                    : 'border border-[#EB2571]/20 text-[#cfcfcf] hover:text-[#F5F0EB] hover:border-[#EB2571]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#EB2571] mb-2 text-[18px]">No results found.</p>
            <p className="text-[#cfcfcf] mb-6 text-[14px]">
              Try a different search term or browse all articles.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setQuery(''); }}
              className="text-[#cfcfcf] hover:text-[#F5F0EB] transition-colors border border-[#EB2571]/30 px-5 py-2 text-[12px] uppercase tracking-widest"
            >
              Clear filters →
            </button>
          </div>
        ) : (
          <>
            {/* Search result count when searching */}
            {query && (
              <p className="text-[#cfcfcf] text-[13px] mb-8 uppercase tracking-widest">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </p>
            )}

            {/* Featured Post */}
            {featured && (
              <FadeUp>
                <Link href={`/blog/${featured.slug}`}>
                  <div className="w-full flex flex-col md:flex-row bg-[#0F0F1C] border border-[#EB2571]/15 border-t-2 border-t-[#EB2571] group hover:border-[#EB2571]/40 transition-colors mb-24 cursor-pointer">
                    <div className="w-full md:w-[45%] h-64 md:h-auto overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700 opacity-80 group-hover:opacity-100 transition-all"
                        loading="eager"
                      />
                    </div>
                    <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[#EB2571] uppercase text-[11px] font-bold tracking-widest">
                          {featured.category}
                        </span>
                        <span className="w-4 h-px bg-white/10" />
                        <span className="text-[#cfcfcf] uppercase text-[11px] tracking-widest">
                          {featured.readTime}
                        </span>
                      </div>
                      <h2 className="text-[42px] md:text-[52px] leading-tight text-[#F5F0EB] mt-4 mb-6 font-['Bebas_Neue'] line-clamp-3">
                        {featured.title}
                      </h2>
                      <p className="text-[16px] text-[#cfcfcf] leading-relaxed mb-8 line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-[#cfcfcf] text-[12px]">{featured.date}</span>
                        <span className="text-[#EB2571] font-bold uppercase text-[12px] tracking-widest group-hover:opacity-80 transition-opacity">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            )}

            {/* Posts Grid */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
                {rest.map((post, i) => (
                  <FadeUp key={post.id} delay={Math.min(i * 0.07, 0.35)}>
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <article className="bg-[#0F0F1C] border border-[#EB2571]/15 hover:border-[#EB2571]/40 transition-colors group h-full flex flex-col cursor-pointer">
                        <div className="h-52 overflow-hidden bg-[#0F0F1C]">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-500 opacity-80 group-hover:opacity-100 transition-all"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-7 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#EB2571] uppercase text-[10px] font-bold tracking-widest">
                              {post.category}
                            </span>
                            <span className="text-[#cfcfcf]">·</span>
                            <span className="flex items-center gap-1 text-[#cfcfcf] text-[11px] uppercase tracking-widest">
                              <Clock size={11} /> {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-[22px] leading-tight text-[#F5F0EB] mt-3 mb-3 font-['Bebas_Neue'] line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-[14px] text-[#cfcfcf] leading-relaxed mb-6 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[#cfcfcf] text-[12px]">{post.date}</span>
                            <span className="text-[#EB2571] font-bold uppercase text-[11px] inline-flex items-center gap-1 tracking-widest group-hover:opacity-80 transition-opacity">
                              Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
