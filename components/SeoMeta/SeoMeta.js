import Head from "next/head";
import { formatBlogDate, getImagePath } from "../../utils/blogUtils";

const SeoMeta = ({meta}) => {
    const { seo_title, seo_description, keywords, og_url, canonical_url, featured_image, author, published_date, updated_date } = meta;
    return (
        <Head>
            {/* Basic SEO */}
            <title>{seo_title || "Jio Kheti"}</title>
            <meta name="description" content={seo_description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            {/* Open Graph (Facebook, LinkedIn, etc.) */}
            <meta property="og:title" content={seo_title} />
            <meta property="og:description" content={seo_description} />
            <meta property="og:image" content={getImagePath(featured_image)} />
            <meta property="og:url" content={og_url} />
            <meta property="og:type" content="article" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo_title} />
            <meta name="twitter:description" content={seo_description} />
            <meta name="twitter:image" content={getImagePath(featured_image)} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical_url} />

            {/* Robots Meta Tag */}
            <meta name="robots" content="index, follow" />

            {/* JSON-LD Structured Data for SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": seo_title,
                    "author": {
                        "@type": "Person",
                        "name": author
                    },
                    "datePublished": formatBlogDate(published_date),
                    "dateModified": formatBlogDate(updated_date),
                    "publisher": {
                        "@type": "Organization",
                        "name": "Your Brand",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://yourwebsite.com/logo.png" // TODO : Manoj update our logo url here
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": canonical_url
                    },
                    "image": getImagePath(featured_image),
                    "description": seo_description
                })}
            </script>
        </Head>
    );
};

export default SeoMeta;
