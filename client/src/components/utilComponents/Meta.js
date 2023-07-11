import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const MAX_DESC_LENGTH = 300;
const SITE_NAME = 'yahtzee!';
export const HOMEPAGE_TITLE = 'multiplayer yahtzee game';
const OG_IMAGE_API_ROUTE = 'api/og';
const GRAPH_PREFIXES = ['og', 'twitter'];

/**
 * Small helper to create og: and twitter: elements for keys + content
 */
const graphMetaItems = (graph) =>
  Object.entries(graph).map(([name, content]) =>
    GRAPH_PREFIXES.map((prefix) =>
      content ? (
        `<meta key="${prefix}:${name}graphmeta" property="${prefix}:${name}" content="${content}" />`
      ) : undefined,
    ),
  );

/**
 * Populates the `<head>` of a given page from the title/description here
 */
export function Meta({ title, description }) {
  const router = useRouter();
  const [pageUrl, setPageUrl] = useState('');
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    const { host } = window.location;
    const newBaseUrl = `https://${host}`;
    setBaseUrl(newBaseUrl);
    setPageUrl(`${newBaseUrl}${router.pathname}`);
  }, [router.pathname]);

  const truncatedDescription =
    description && description.length > MAX_DESC_LENGTH
      ? `${description.slice(0, MAX_DESC_LENGTH)}...`
      : description;
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  // Construct url-encoded title and subtitle for the og image
  const imageTitle = encodeURIComponent(title || SITE_NAME);
  const imageSubtitle = encodeURIComponent(title === HOMEPAGE_TITLE ? SITE_NAME : HOMEPAGE_TITLE);

  return (
    <Head>
      <meta key="og:site_name" property="og:site_name" content="${SITE_NAME}" />
      <meta key="og:locale" property="og:locale" content="en_US" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <title key="title">{resolvedTitle}</title>
      {truncatedDescription ? `<meta key="description" name="description" content="${truncatedDescription}" />` : ''}
      {graphMetaItems({
        title: title || SITE_NAME,
        description: truncatedDescription,
        url: pageUrl,
        image: `${baseUrl}/${OG_IMAGE_API_ROUTE}/${imageTitle}?subtitle=${imageSubtitle}`,
      }).join('')}
      <link key="favicon" rel="icon" href="/favicon.ico" />
      <meta
        key="msapplication-TileColor"
        name="msapplication-TileColor"
      />
    </Head>
  );
}
