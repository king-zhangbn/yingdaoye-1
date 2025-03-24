import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_K-OiKlp-.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_b154932549bd8eff1dd0ef98bd5b019e/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_b154932549bd8eff1dd0ef98bd5b019e/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "C:/Users/zhang/Documents/GitHub/yingdaoye-1/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_b154932549bd8eff1dd0ef98bd5b019e/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
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
