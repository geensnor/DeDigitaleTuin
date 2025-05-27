import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import yaml from "@rollup/plugin-yaml";
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dedigitaletuin.nl",
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    umami({ id: "a609a09c-e6fe-48dd-b07b-330e8a22a273" }),
    starlight({
      head: [
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "De Digitale Tuin",
            url: "https://wwww.dedigitaletuin.nl",
            description: "Een bonte verzameling van allerlei aardigheden.",
          }),
        },
        // Favicon configuratie
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "/favicon/favicon-96x96.png",
            sizes: "96x96",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon/favicon.svg",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "shortcut icon",
            href: "/favicon/favicon.ico",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/favicon/apple-touch-icon.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "apple-mobile-web-app-title",
            content: "Geensnor",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/favicon/site.webmanifest",
          },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/geensnor/DeDigitaleTuin/edit/main",
      },
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
      ],
      title: "De Digitale Tuin",
      locales: {
        root: {
          label: "Nederlands",
          lang: "nl",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/geensnor/dedigitaletuin",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://mastodon.xyz/@geensnor",
        },
        { icon: "telegram", label: "Telegram", href: "https://t.me/geensnor" },
      ],
      pagination: false,
      lastUpdated: true,
      logo: {
        src: "./src/assets/desnor.svg",
      },
      favicon: "./favicon.ico",
      tableOfContents: false,
      components: {
        PageTitle: "./src/components/KopTuin.astro",
      },
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/zilla-slab/500.css",
        "@fontsource-variable/work-sans",
      ],
      sidebar: [
        {
          label: "Wielrennen",
          autogenerate: { directory: "wielrennen" },
        },
        {
          label: "Soft- en hardware",
          autogenerate: { directory: "soft-en-hardware" },
        },
        {
          label: "Lijsten",
          collapsed: false,
          autogenerate: { directory: "lijsten" },
        },
        {
          label: "Eten en drinken",
          collapsed: true,
          autogenerate: { directory: "eten-en-drinken" },
        },
        {
          label: "Kunst",
          collapsed: true,
          autogenerate: { directory: "kunst" },
        },
        {
          label: "Overig",
          collapsed: true,
          autogenerate: { directory: "overig" },
        },
        {
          label: "Abonnementen",
          collapsed: true,
          autogenerate: { directory: "abonnementen" },
        },
        { label: "Aanpassingen tuin", link: "laatste-aanpassingen" },
      ],
    }),
  ],
});
