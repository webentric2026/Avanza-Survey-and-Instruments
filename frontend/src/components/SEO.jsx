// Reusable per-page SEO — sets title, meta description/keywords,
// canonical, Open Graph + Twitter tags and optional JSON-LD.
// Usage: <SEO path="/about" title="About Us" description="..." keywords={[...]} jsonLd={{...}} />
import { useEffect } from "react";
import { SITE } from "../data/seoData.js";

function setMetaByName(name, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  let el = existing;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description,
  keywords,
  path = "/",
  image,
  jsonLd,
  noindex = false,
}) {
  useEffect(() => {
    const url = `${SITE.url}${path}`;
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.defaultTitle;
    const desc = description || SITE.description;
    const keys = (keywords && keywords.length ? keywords : SITE.keywords).join(", ");
    const img = image || SITE.ogImage;

    document.title = fullTitle;
    setMetaByName("description", desc);
    setMetaByName("keywords", keys);
    setMetaByName("robots", noindex ? "noindex, follow" : "index, follow");

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:site_name", SITE.name);
    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", desc);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", img);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", desc);
    setMetaByName("twitter:image", img);

    setCanonical(url);
    setJsonLd("page-jsonld", jsonLd || null);
  }, [title, description, keywords, path, image, jsonLd, noindex]);

  return null;
}
