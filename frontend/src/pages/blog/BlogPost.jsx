import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import SEO from "../../components/SEO.jsx";
import { SITE } from "../../data/seoData.js";
import { getPost, getRelated } from "../../data/blogData.js";
import { PostMeta } from "./Blog.jsx";
import NotFound from "../NotFound.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = getRelated(slug, 3);
  const url = `${SITE.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE.url}${post.image}`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    datePublished: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <SEO
        path={`/blog/${post.slug}`}
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        jsonLd={jsonLd}
      />
      <main className="bg-white mt-20">
        <article className="mx-auto max-w-[860px] px-4 pt-10 sm:px-6 lg:pt-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-medium text-[#8A8A8A]">
            <Link to="/" className="hover:text-[#202B4A]">Home</Link>
            <span aria-hidden>/</span>
            <Link to="/blog" className="hover:text-[#202B4A]">Blog</Link>
            <span aria-hidden>/</span>
            <span className="text-[#202B4A]">{post.category}</span>
          </nav>

          <span className="mt-6 inline-block border border-[#D4A017] px-2 py-1 text-[10px] font-bold tracking-[0.14em] text-[#8A7A3A]">
            {post.category.toUpperCase()}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#202B4A] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-[#E6E6E9] pb-6 text-[13px] font-medium text-[#8A8A8A]">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden />
              {new Date(post.date + "T00:00:00").toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" aria-hidden /> {post.readTime}
            </span>
            <span>By {SITE.name}</span>
          </div>

          <div className="mt-8 overflow-hidden border border-[#E6E6E9]">
            <img
              src={post.image}
              alt={post.alt}
              loading="eager"
              className="h-64 w-full object-cover sm:h-[380px]"
            />
          </div>

          {/* Body */}
          <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-[#3A3A3A]">
            {post.content.map((block, i) => {
              if (block.h)
                return (
                  <h2 key={i} className="pt-3 text-2xl font-bold tracking-tight text-[#202B4A]">
                    {block.h}
                  </h2>
                );
              if (block.list)
                return (
                  <ul key={i} className="space-y-2.5">
                    {block.list.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-[#D4A017]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.p}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="relative mt-12 overflow-hidden border border-[#202B4A] bg-[#202B4A] px-6 py-8 sm:px-8">
            <span className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#D9A515]" aria-hidden />
            <h2 className="text-xl font-bold tracking-tight text-white">
              Need this survey done on your site?
            </h2>
            <p className="mt-2 max-w-[520px] text-[13px] leading-6 text-white/70">
              Share your location and requirement — our team will recommend the right survey and quote.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 bg-[#D9A515] px-6 text-[13px] font-bold text-[#202B4A] hover:bg-[#C99A12]"
              >
                Get a Quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/rental"
                className="inline-flex h-11 items-center justify-center gap-2 border border-white/25 px-6 text-[13px] font-semibold text-white hover:bg-white/10"
              >
                Explore Instruments
              </Link>
            </div>
          </div>

          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#202B4A] hover:text-[#8A7A3A]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to all articles
          </Link>
        </article>

        {/* Related */}
        <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#202B4A] sm:text-3xl">
            Related articles
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group flex flex-col overflow-hidden border border-[#E6E6E9] bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(11,31,75,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              >
                <div className="h-44 overflow-hidden bg-[#0B1F4B]">
                  <img
                    src={r.image}
                    alt={r.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit border border-[#E6E6E9] bg-[#F7F7F8] px-2 py-1 text-[10px] font-bold tracking-[0.14em] text-[#8A7A3A]">
                    {r.category.toUpperCase()}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold leading-snug text-[#202B4A]">
                    {r.title}
                  </h3>
                  <div className="mt-auto pt-3">
                    <PostMeta post={r} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
