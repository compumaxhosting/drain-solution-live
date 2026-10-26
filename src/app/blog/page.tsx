import { getAllPosts } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";

const featuredImage = "/images/services-images/sink-line-cleared.webp";

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <main className="flex-1 bg-stone-50">
      <section className="relative isolate overflow-hidden bg-[#014485] text-white">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[#c02f2d] lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
        <div className="mx-auto grid w-[92%] max-w-[1440px] items-center gap-10 py-12 sm:w-[88%] sm:py-16 lg:min-h-[440px] lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">
                Drain Solutions Plus
              </p>
            </div>
            <h1 className="text-4xl font-black uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Drain &amp; Sewer
              <span className="mt-1 block text-[#ffdf20]">Insights</span>
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-[#c02f2d]" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Helpful advice, practical prevention tips, and expert guidance
              for keeping your home&apos;s drains flowing smoothly.
            </p>
            <a
              href="#latest-articles"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#c02f2d] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#a62523] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#014485]"
            >
              Explore the blog
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -inset-2 rounded-2xl border border-white/25 sm:-inset-3" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#003366] shadow-2xl">
              <Image
                src={featuredImage}
                alt="Technician carrying out a sewer pipe video inspection"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001d3a]/65 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#014485] sm:bottom-6 sm:left-6">
                Expert tips for healthier drains
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="latest-articles"
        className="mx-auto w-[92%] max-w-[1440px] py-14 sm:w-[88%] sm:py-18 lg:py-20"
      >
        <div className="mb-8 flex flex-col gap-3 border-b border-stone-200 pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c02f2d]">
              From our team
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#014485] sm:text-4xl">
              Latest articles
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-stone-600 sm:text-right">
            Straightforward answers to common drain and sewer questions from
            your local service professionals.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#014485]/25 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c02f2d] focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <Image
                    src={post.image || featuredImage}
                    alt={post.imageAlt || post.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded bg-[#c02f2d] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow">
                    Drain tips
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <time className="text-xs font-medium uppercase tracking-wide text-stone-500">
                    {post.date}
                  </time>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-[#014485] transition-colors group-hover:text-[#c02f2d]">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-600">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c02f2d]">
                    Read article
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-stone-300 bg-white px-6 py-14 text-center">
            <h3 className="text-xl font-bold text-[#014485]">
              New articles are on the way
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Check back soon for helpful drain and sewer advice.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
