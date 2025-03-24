import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_xSSs3UXw.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DJOXHZc_.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/","cacheDir":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.astro/","outDir":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/dist/","srcDir":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/","publicDir":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/public/","buildClientDir":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/dist/client/","buildServerDir":"file:///C:/Users/zhang/Documents/GitHub/yingdaoye-1/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.5.3_@types+node@22._3eb10e3fe3ba79ff0eb28e991719b9e3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CPvyyiTs.js"}],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"https://cojocarudavid.me","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/components/Pagination.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/layouts/BlogLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/image/[slug].png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/image/[slug].png@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/image/[slug].png@_@ts":"pages/image/_slug_.png.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.3_@types+node@22._3eb10e3fe3ba79ff0eb28e991719b9e3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/astro@5.5.3_@types+node@22._3eb10e3fe3ba79ff0eb28e991719b9e3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BK70WDZ_.mjs","C:\\Users\\zhang\\Documents\\GitHub\\yingdaoye-1\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\zhang\\Documents\\GitHub\\yingdaoye-1\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DMITmLqQ.mjs","\u0000@astrojs-manifest":"manifest_CGFPgE25.mjs","@components/Skills":"_astro/Skills.lcss_rAE.js","C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.CmXwJ9_P.js","@astrojs/react/client.js":"_astro/client.CqBhBUpr.js","C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.C_m7v6VE.js","C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/astro@5.5.3_@types+node@22._3eb10e3fe3ba79ff0eb28e991719b9e3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BTVpV3WR.js","astro:scripts/page.js":"_astro/page.CPvyyiTs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/zhang/Documents/GitHub/yingdaoye-1/src/components/Footer.astro?astro&type=script&index=0&lang.ts","const n=()=>{const t=new Date().getFullYear(),e=document.getElementById(\"year\");e&&(e.innerText=t.toString())},o=()=>{const t=[\"😺\",\"🐱\",\"😸\",\"😻\",\"🙀\",\"😽\",\"😹\",\"😿\",\"😾\"],e=document.getElementById(\"random-emoji\");e&&(e.innerText=t[Math.floor(Math.random()*t.length)])};document.addEventListener(\"DOMContentLoaded\",()=>{n(),o()});"]],"assets":["/_astro/me.BIdPZHME.png","/_astro/montserrat-cyrillic-ext-wght-normal.DV_LRdWn.woff2","/_astro/montserrat-cyrillic-wght-normal.D3on441i.woff2","/_astro/montserrat-vietnamese-wght-normal.BcziCZ2I.woff2","/_astro/montserrat-latin-ext-wght-normal.BLkAzDQP.woff2","/_astro/montserrat-latin-wght-normal.AeMhpAKq.woff2","/_astro/_slug_.BXrGRbCD.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/android-icon-144x144.png","/android-icon-192x192.png","/android-icon-36x36.png","/android-icon-48x48.png","/android-icon-72x72.png","/android-icon-96x96.png","/apple-icon-114x114.png","/apple-icon-120x120.png","/apple-icon-144x144.png","/apple-icon-152x152.png","/apple-icon-180x180.png","/apple-icon-57x57.png","/apple-icon-60x60.png","/apple-icon-72x72.png","/apple-icon-76x76.png","/apple-icon-precomposed.png","/apple-icon.png","/apple-touch-icon.png","/banner.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon-96x96.png","/favicon.ico","/logo.png","/manifest.json","/ms-icon-144x144.png","/ms-icon-150x150.png","/ms-icon-310x310.png","/ms-icon-70x70.png","/mstile-150x150.png","/robots.txt","/sitemap-index.xml","/_astro/client.CqBhBUpr.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BTVpV3WR.js","/_astro/clsx.Bq1LokoP.js","/_astro/index.CclUD5iE.js","/_astro/index.CDlOlYQx.js","/_astro/index.U3IA9L3b.js","/_astro/keystatic-page.CmXwJ9_P.js","/_astro/page.CPvyyiTs.js","/_astro/Skills.lcss_rAE.js","/_astro/page.CPvyyiTs.js","/404.html","/blog/index.html","/projects/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"6A8mVRZTOOWqgzkKbnPfOCVAtUK+zCBs6sh/Z9m12Aw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
