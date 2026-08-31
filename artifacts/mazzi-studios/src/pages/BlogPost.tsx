import { useParams, Link } from 'wouter';
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from 'lucide-react';
import { Head } from '@/components/seo/Head';
import { posts } from '@/data/posts';
import { postHtml } from '@/data/postsHtml';
import NotFound from '@/pages/NotFound';

const SITE = 'https://www.mazzistudios.com';

/** Strip HTML tags for plain-text processing (FAQ extraction, word count) */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, ' - ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * AEO: Extract Q&A pairs from content.
 * Works on both plain text (legacy) and HTML (strips tags first).
 */
function extractFAQs(content: string): Array<{ question: string; answer: string }> {
  const plain = content.includes('<') ? stripHtml(content) : content;
  const paragraphs = plain.split(/\n\n|\.\s+(?=[A-Z])/).map((p) => p.trim()).filter(Boolean);
  const faqs: Array<{ question: string; answer: string }> = [];
  const questionRe = /^(what|how|why|when|where|which|can|should|is|are|do|does|will|who).+\?$/i;

  for (let i = 0; i < paragraphs.length - 1; i++) {
    const p = paragraphs[i];
    if (questionRe.test(p) && p.length < 180) {
      const answer = paragraphs[i + 1];
      if (answer && answer.length > 40 && !questionRe.test(answer)) {
        faqs.push({ question: p, answer: answer.slice(0, 500) });
        i++;
      }
    }
  }
  return faqs.slice(0, 8);
}

/**
 * Render plain-text content (legacy fallback) as structured paragraphs/headings.
 */
function PlainTextBody({ content }: { content: string }) {
  const paragraphs = content.split('\n\n').map((p) => p.trim()).filter(Boolean);
  return (
    <>
      {paragraphs.map((para, i) => {
        const isHeading =
          para.length < 120 &&
          !para.endsWith('.') &&
          !para.endsWith('?') &&
          i > 0 &&
          para === para.trimEnd();
        if (isHeading && i > 2) {
          return (
            <h2
              key={i}
              className="text-[26px] sm:text-[32px] font-['Bebas_Neue'] text-[#F5F0EB] mt-12 mb-4 leading-tight"
            >
              {para}
            </h2>
          );
        }
        return (
          <p key={i} className="mb-6 text-[17px] text-[#cfcfcf] leading-[1.8]">
            {para}
          </p>
        );
      })}
    </>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  const html = postHtml[post.slug] || '';
  const canonical = `${SITE}/blog/${post.slug}`;
  const contentForFaq = html || post.content;
  const faqs = extractFAQs(contentForFaq);

  const wordCount = html
    ? stripHtml(html).split(/\s+/).length
    : post.content.split(/\s+/).length;

  /* ── JSON-LD schemas ───────────────────────────────────────── */

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: post.image,
      width: 1200,
      height: 630,
    },
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    author: {
      '@type': 'Person',
      name: post.author,
      worksFor: { '@type': 'Organization', name: 'Mazzi Studios', url: SITE },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mazzi Studios',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/brand-assets/mazzi-og.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    keywords: [
      post.category,
      'Mazzi Studios',
      'AI marketing',
      'fractional CMO',
      'Miami marketing agency',
      'healthcare marketing',
      'B2B growth',
    ].join(', '),
    articleSection: post.category,
    wordCount,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-lead'],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  const schemas = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <div className="w-full bg-[#080810] min-h-screen">
      <Head
        title={post.seoTitle || `${post.title} | Mazzi Studios`}
        description={post.metaDescription || post.excerpt}
        ogImage={post.image}
        canonical={canonical}
        jsonLd={schemas}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] min-h-[320px] max-h-[520px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-85"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, #080810 15%, rgba(8,8,16,0.5) 60%, rgba(8,8,16,0.2) 100%)',
          }}
        />
        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 pt-28 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-[#cfcfcf] hover:text-[#F5F0EB] transition-colors"
            >
              <ArrowLeft size={13} /> Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 pb-32 -mt-16 relative z-10">

        {/* Category + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-[#EB2571] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[#cfcfcf] text-[12px] uppercase tracking-widest">
            <Clock size={12} /> {post.readTime}
          </span>
          <span className="flex items-center gap-1 text-[#cfcfcf] text-[12px] uppercase tracking-widest">
            <Calendar size={12} /> {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[52px] sm:text-[68px] md:text-[80px] leading-[0.9] text-[#F5F0EB] mb-8 font-['Bebas_Neue']">
          {post.title}
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-3 mb-12 pb-8 border-b border-white/10">
          <div className="w-8 h-8 rounded-full bg-[#EB2571] flex items-center justify-center text-white text-[11px] font-bold">
            M
          </div>
          <div>
            <p className="text-[#F5F0EB] text-[13px] font-semibold">{post.author}</p>
            <p className="text-[#cfcfcf] text-[11px] uppercase tracking-widest">{post.authorRole}</p>
          </div>
        </div>

        {/* Lead / excerpt — speakable target */}
        <p className="article-lead text-[20px] text-[#CBD5E1] leading-relaxed mb-10 font-medium border-l-2 border-[#EB2571] pl-6">
          {post.excerpt}
        </p>

        {/* Body — HTML (with real links) or plain text fallback */}
        {html ? (
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div className="max-w-none">
            <PlainTextBody content={post.content} />
          </div>
        )}

        {/* Inline FAQ block */}
        {faqs.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-[32px] font-['Bebas_Neue'] text-[#F5F0EB] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/8 bg-[#0F0F1C] p-6">
                  <h3 className="text-[16px] font-bold text-[#F5F0EB] mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-[15px] text-[#cfcfcf] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex items-center gap-2 mt-12 pt-8 border-t border-white/10">
          <Tag size={13} className="text-[#EB2571]" />
          <span className="text-[#EB2571] text-[11px] uppercase tracking-widest font-bold">
            {post.category}
          </span>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/blog/${prev.slug}`}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 hover:border-[#EB2571]/40 transition-colors p-6 group cursor-pointer">
                  <p className="text-[#cfcfcf] text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1">
                    <ArrowLeft size={10} /> Previous
                  </p>
                  <p className="text-[#F5F0EB] text-[15px] font-semibold leading-snug group-hover:text-[#EB2571] transition-colors line-clamp-2">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link href={`/blog/${next.slug}`}>
                <div className="bg-[#0F0F1C] border border-[#EB2571]/15 hover:border-[#EB2571]/40 transition-colors p-6 group cursor-pointer text-right">
                  <p className="text-[#cfcfcf] text-[10px] uppercase tracking-widest mb-2 flex items-center justify-end gap-1">
                    Next <ArrowRight size={10} />
                  </p>
                  <p className="text-[#F5F0EB] text-[15px] font-semibold leading-snug group-hover:text-[#EB2571] transition-colors line-clamp-2">
                    {next.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-[#0F0F1C] border border-[#EB2571]/20 border-t-2 border-t-[#EB2571] p-10 text-center">
          <p className="text-[#EB2571] text-[11px] uppercase tracking-[0.15em] font-bold mb-3">
            Work With Us
          </p>
          <h3 className="text-[36px] sm:text-[48px] text-[#F5F0EB] font-['Bebas_Neue'] mb-4 leading-tight">
            Ready to Put This Into Practice?
          </h3>
          <p className="text-[#cfcfcf] text-[15px] mb-8 max-w-md mx-auto">
            Get a free strategy session with our team and see how we'd apply this to your specific
            situation.
          </p>
          <Link href="/contact">
            <span className="inline-block bg-[#EB2571] text-white text-[12px] uppercase tracking-widest font-bold px-8 py-4 hover:bg-[#EB2571]/90 transition-colors">
              Book a Strategy Call →
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
