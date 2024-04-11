import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_wHd4-FNw.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.eQLDefPv.js"}],"styles":[{"type":"external","src":"/_astro/advertise.VsRnqiPG.css"},{"type":"inline","content":"h1[data-astro-cid-gxgbmpg4]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:.5em}\n"},{"type":"external","src":"/_astro/_slug_.MrK9HTFV.css"}],"routeData":{"route":"/advertise","isIndex":false,"type":"page","pattern":"^\\/advertise\\/?$","segments":[[{"content":"advertise","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/advertise.astro","pathname":"/advertise","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.eQLDefPv.js"}],"styles":[{"type":"external","src":"/_astro/advertise.VsRnqiPG.css"},{"type":"external","src":"/_astro/_slug_.MrK9HTFV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.eQLDefPv.js"}],"styles":[{"type":"external","src":"/_astro/advertise.VsRnqiPG.css"},{"type":"inline","content":"h1[data-astro-cid-uw5kdbxl]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:.5em}#gradient[data-astro-cid-uw5kdbxl]{border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:6px;margin-bottom:2rem}\n"},{"type":"external","src":"/_astro/_slug_.MrK9HTFV.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.eQLDefPv.js"}],"styles":[{"type":"external","src":"/_astro/advertise.VsRnqiPG.css"},{"type":"inline","content":"h1[data-astro-cid-cfftgubm]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:.5em}#form-submission[data-astro-cid-cfftgubm].htmx-swapping{opacity:0;transition:opacity 1s ease-out}\n"},{"type":"external","src":"/_astro/_slug_.MrK9HTFV.css"}],"routeData":{"route":"/submit","isIndex":false,"type":"page","pattern":"^\\/submit\\/?$","segments":[[{"content":"submit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/submit.astro","pathname":"/submit","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://electriciansinphoenix.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/advertise.astro",{"propagation":"none","containsHead":true}],["/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/submit.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/contact.astro":"chunks/pages/contact_TjJRCPYs.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_VOJbOKbZ.mjs","/src/pages/submit.astro":"chunks/pages/submit_bi2qVE9F.mjs","\u0000@astrojs-manifest":"manifest_CSJZVfGz.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_uGx8HEmT.mjs","\u0000@astro-page:src/pages/advertise@_@astro":"chunks/advertise_jm-MZaPZ.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_9s_wjHGN.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__bBVcitP-.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_yJABwssp.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_4k0z3jbd.mjs","\u0000@astro-page:src/pages/submit@_@astro":"chunks/submit_NMq1EqyV.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/electricians-that-install-google-nest-in-phoenix.md?astroContentCollectionEntry=true":"chunks/electricians-that-install-google-nest-in-phoenix_JigcnLjZ.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/how-to-lower-electricity-bill-in-phoenix.md?astroContentCollectionEntry=true":"chunks/how-to-lower-electricity-bill-in-phoenix_Rub8zC-D.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/the-best-electricians-near-me.md?astroContentCollectionEntry=true":"chunks/the-best-electricians-near-me__TVPo8Br.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/electricians-that-install-google-nest-in-phoenix.md?astroPropagatedAssets":"chunks/electricians-that-install-google-nest-in-phoenix_ssoKqZI7.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/how-to-lower-electricity-bill-in-phoenix.md?astroPropagatedAssets":"chunks/how-to-lower-electricity-bill-in-phoenix_BgMTs3b9.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/the-best-electricians-near-me.md?astroPropagatedAssets":"chunks/the-best-electricians-near-me_0zn6jtsW.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/electricians-that-install-google-nest-in-phoenix.md":"chunks/electricians-that-install-google-nest-in-phoenix_E6bFp_I9.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/how-to-lower-electricity-bill-in-phoenix.md":"chunks/how-to-lower-electricity-bill-in-phoenix_39jk4aJf.mjs","/Users/jonathan/Documents/code/electricians-in-phoenix/src/content/blog/the-best-electricians-near-me.md":"chunks/the-best-electricians-near-me_KnmwVojo.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.eQLDefPv.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/takumi.uTJUoO45.jpg","/_astro/_slug_.MrK9HTFV.css","/_astro/advertise.VsRnqiPG.css","/chris-tingom-BaDrWEr794Q-unsplash.jpg","/dan-lefebvre-RFAHj4tI37Y-unsplash.jpg","/high-voltage.svg","/micheile-henderson-SoT4-mZhyhE-unsplash.jpg","/_astro/hoisted.eQLDefPv.js","/blog/index.html"],"buildFormat":"directory"});

export { manifest };
