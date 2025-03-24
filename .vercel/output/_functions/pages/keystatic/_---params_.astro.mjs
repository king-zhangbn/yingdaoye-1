import { a as createComponent, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_xSSs3UXw.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_a0014f6a6291d073a867da12caf75de9/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
