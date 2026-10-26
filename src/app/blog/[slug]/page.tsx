import {
  getAbsoluteBlogImageUrl,
  getPostBySlug,
  getAllPosts,
} from "@/lib/post";
import { MarkdownContent } from "@/lib/markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const { title, description, keywords, author, ogImage } = post.frontmatter;
  const imageAlt = post.frontmatter.imageAlt || title;
  const imageUrl = ogImage ? getAbsoluteBlogImageUrl(ogImage) : undefined;

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    alternates: {
      canonical: `https://www.drainsolutionplus.com/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `https://www.drainsolutionplus.com/blog/${slug}`,
      siteName: "Drain Solution Plus",
      images: imageUrl ? [{ url: imageUrl, alt: imageAlt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = post.frontmatter.title || slug.replaceAll("-", " ");
  const image = post.frontmatter.image;
  const imageAlt = post.frontmatter.imageAlt || title;
  const author = post.frontmatter.author || "Drain Solution Plus";

  return (
    <main className="flex-1 bg-stone-50">
      {post.frontmatter.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.frontmatter.schema }}
        />
      )}

      <section className="bg-[#014485] text-white">
        <div className="mx-auto w-[92%] max-w-[1280px] py-8 sm:w-[88%] sm:py-12 lg:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span aria-hidden="true">←</span>
            All articles
          </Link>

          <div className="mt-7 grid items-center gap-8 lg:mt-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ffdf20]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
                  Drain &amp; sewer insights
                </span>
              </div>
              <h1 className="text-2xl font-black leading-[1.15] tracking-tight sm:text-4xl sm:leading-tight lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-white/80 sm:mt-5 sm:text-base">
                {post.frontmatter.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-white/70 sm:mt-6 sm:text-xs">
                <span>{author}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#ffdf20]" />
                <time>{post.frontmatter.date}</time>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div className="absolute -inset-2 rounded-2xl border border-white/20 sm:-inset-3" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#003366] shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-[92%] max-w-[1280px] gap-6 py-7 sm:w-[88%] sm:gap-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:py-16">
        <article className="min-w-0 rounded-xl border border-stone-200 bg-white px-4 py-6 text-sm shadow-sm sm:px-8 sm:py-10 sm:text-base lg:px-12">
          <MarkdownContent content={post.content} />

          <div className="mt-12 rounded-xl bg-[#014485] px-6 py-7 text-white sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffdf20]">
              Need help with a recurring clog?
            </p>
            <h2 className="mt-2 text-xl font-black sm:text-2xl">
              Get expert drain service
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
              Drain Solutions Plus serves homeowners throughout Northern New
              Jersey with professional drain and sewer solutions.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#c02f2d] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#a62523] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#014485]"
            >
              Contact our team
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 border-t border-stone-200 pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#014485] transition-colors hover:text-[#c02f2d]"
            >
              <span aria-hidden="true">←</span>
              Back to all articles
            </Link>
          </div>
        </article>

        <aside className="h-fit rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-32">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
            Drain Solutions Plus
          </p>
          <h2 className="mt-2 text-lg font-black leading-snug text-[#014485] sm:text-xl">
            Local drain and sewer experts
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-stone-600 sm:text-sm">
            Practical advice for homeowners, from a team serving communities
            across Northern New Jersey.
          </p>
          <div className="mt-5 h-px bg-stone-200" />
          <Link
            href="/our-services/residential-drain-cleaning"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#014485] transition-colors hover:text-[#c02f2d]"
          >
            Residential drain cleaning
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </div>
    </main>
  );
}
