import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import SEO from "../../components/SEO.jsx";
import posts from "../../data/blogData.js";

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <SEO
        path="/blog"
        title="Surveying Blog & Guides"
        description="Practical guides on land survey cost in Delhi, DGPS accuracy, drone vs total station surveys, topographical surveys and survey equipment rental from Avanza Survey & Instruments."
        keywords={[
          "surveying blog",
          "land survey guide",
          "DGPS survey accuracy",
          "drone survey vs total station",
          "land survey cost Delhi",
          "topographical survey guide",
          "survey equipment rental guide",
        ]}
      />
      <main className="bg-[#F7F7F8] mt-20">
        {/* Header */}
        <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4A017]">
            KNOWLEDGE HUB
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#202B4A] sm:text-5xl">
            Surveying guides, explained simply.
          </h1>
          <p className="mt-3 max-w-[680px] text-md leading-6 text-[#5A5A5A]">
            Practical answers on land surveys, DGPS, drones, costs and equipment —
            written by survey professionals for project owners, engineers and contractors.
          </p>
        </section>

        {/* Featured post */}
        <section className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden border border-[#E6E6E9] bg-white md:grid-cols-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
          >
            <div className="h-64 overflow-hidden bg-[#0B1F4B] sm:h-80">
              <img
                src={featured.image}
                alt={featured.alt}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.14em] text-[#D4A017]">
                <span className="border border-[#D4A017] px-2 py-1">{featured.category.toUpperCase()}</span>
                <span className="font-medium tracking-normal text-[#8A8A8A]">FEATURED</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-[#202B4A] group-hover:text-[#0B1F4B] sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6A6A6A]">{featured.excerpt}</p>
              <PostMeta post={featured} light={false} />
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#202B4A] group-hover:text-[#8A7A3A]">
                Read article <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden border border-[#E6E6E9] bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(11,31,75,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              >
                <div className="h-52 overflow-hidden bg-[#0B1F4B]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit border border-[#E6E6E9] bg-[#F7F7F8] px-2 py-1 text-[10px] font-bold tracking-[0.14em] text-[#8A7A3A]">
                    {post.category.toUpperCase()}
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-[#202B4A]">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#6A6A6A]">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4">
                    <PostMeta post={post} light={false} />
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#202B4A] group-hover:text-[#8A7A3A]">
                      Read article
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-12 overflow-hidden border border-[#202B4A] bg-[#202B4A] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <span className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#D9A515]" aria-hidden />
            <div>
              <h2 className="text-[20px] font-bold tracking-tight text-white sm:text-[22px]">
                Have a surveying question not covered here?
              </h2>
              <p className="mt-2 max-w-[520px] text-[12.5px] leading-6 text-white/70">
                Tell us about your project and our survey professionals will guide you to the right solution.
              </p>
            </div>
            <div className="mt-6 flex lg:mt-0 lg:shrink-0">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 bg-[#D9A515] px-6 text-[13px] font-bold tracking-wide text-[#202B4A] hover:bg-[#C99A12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Ask Our Team <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function PostMeta({ post }) {
  const date = new Date(post.date + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="mt-3 flex flex-wrap items-center gap-4 text-[12px] font-medium text-[#8A8A8A]">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" aria-hidden /> {date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="h-3.5 w-3.5" aria-hidden /> {post.readTime}
      </span>
    </div>
  );
}
