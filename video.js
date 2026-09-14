export function videoSource(value) {
  const input = String(value || '').trim();
  let url;
  try { url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`); }
  catch { throw new Error('সঠিক ভিডিও লিংক দিন।'); }
  if (!input || !['https:', 'http:'].includes(url.protocol) || !url.hostname.includes('.')) {
    throw new Error('সঠিক ভিডিও লিংক দিন।');
  }
  const host = url.hostname.replace(/^www\./, '').replace(/^m\./, '');
  if (['youtube.com', 'youtube-nocookie.com', 'youtu.be'].includes(host)) {
    const parts = url.pathname.split('/').filter(Boolean);
    const id = host === 'youtu.be' ? parts[0] : url.searchParams.get('v') || (['embed', 'shorts', 'live'].includes(parts[0]) ? parts[1] : '');
    if (!/^[\w-]{11}$/.test(id || '')) throw new Error('সঠিক YouTube ভিডিও লিংক দিন।');
    return { kind: 'embed', url: `https://www.youtube.com/embed/${id}`, original: url.href };
  }
  return { kind: /\.(mp4|webm|ogg|ogv|mov)$/i.test(url.pathname) ? 'file' : 'embed', url: url.href, original: url.href };
}

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

export function videoCard(item) {
  const title = escapeHtml(item.title);
  try {
    const source = videoSource(item.url);
    const url = escapeHtml(source.url);
    const player = source.kind === 'file'
      ? `<video controls preload="metadata" playsinline src="${url}" aria-label="${title}" style="width:100%;aspect-ratio:16/9;background:#000"></video>`
      : `<iframe src="${url}" title="${title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    return `<article class="video">${player}<p>${title} <a href="${escapeHtml(source.original)}" target="_blank" rel="noopener noreferrer">ভিডিও খুলুন ↗</a></p></article>`;
  } catch {
    return `<article class="video"><p>${title} — ভিডিও লিংকটি সঠিক নয়।</p></article>`;
  }
}
