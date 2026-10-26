import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const siteUrl = 'https://www.drainsolutionplus.com';

export const defaultBlogImage =
  '/images/services-images/drain-pipe-video-inspection.webp';

function normalizeBlogImagePath(image: string) {
  const trimmedImage = image.trim();
  if (/^(?:https?:)?\/\//i.test(trimmedImage) || trimmedImage.startsWith('/')) {
    return trimmedImage;
  }
  return `/${trimmedImage.replace(/^\.\/+/, '')}`;
}

function getPostImages(data: Record<string, unknown>) {
  const frontmatterImage =
    typeof data.image === 'string' ? data.image.trim() : '';
  const frontmatterOgImage =
    typeof data.ogImage === 'string' ? data.ogImage.trim() : '';

  return {
    image: frontmatterImage
      ? normalizeBlogImagePath(frontmatterImage)
      : defaultBlogImage,
    ogImage: frontmatterOgImage
      ? normalizeBlogImagePath(frontmatterOgImage)
      : undefined,
    imageAlt:
      typeof data.imageAlt === 'string' ? data.imageAlt.trim() : '',
  };
}

export function getAbsoluteBlogImageUrl(image: string) {
  const url = new URL(image, siteUrl);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`Unsupported blog image URL protocol: ${url.protocol}`);
  }
  return url.toString();
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  schema?: string;
}

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  keywords?: string | string[];
  author?: string;
  image: string;
  imageAlt: string;
  ogImage?: string;
  schema?: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const postImages = getPostImages(data);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      keywords: data.keywords,
      author: data.author,
      image: postImages.image,
      imageAlt: postImages.imageAlt,
      schema: data.schema,
    };
  });
}

export function getPostBySlug(
  slug: string,
): { slug: string; frontmatter: BlogPostFrontmatter; content: string } | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const postImages = getPostImages(data);

  return {
    slug,
    frontmatter: {
      title: typeof data.title === 'string' ? data.title : '',
      description:
        typeof data.description === 'string' ? data.description : '',
      date: typeof data.date === 'string' ? data.date : '',
      keywords:
        typeof data.keywords === 'string'
          ? data.keywords
          : Array.isArray(data.keywords) &&
              data.keywords.every((keyword: unknown) => typeof keyword === 'string')
            ? data.keywords
            : undefined,
      author: typeof data.author === 'string' ? data.author : undefined,
      image: postImages.image,
      imageAlt: postImages.imageAlt,
      ogImage: postImages.ogImage,
      schema: typeof data.schema === 'string' ? data.schema : undefined,
    },
    content,
  };
}