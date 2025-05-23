// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import studiocmsUi from "@studiocms/ui";

// https://astro.build/config
export default defineConfig({
  site: "https://frame-platform.com",
  integrations: [
    starlight({
      title: "Frame",
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-B1FNVBZ63Z",
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B1FNVBZ63Z');
          `,
        },
      ],
      customCss: ["./src/styles/global.css"],
      logo: {
        src: "./src/assets/frame-logo.svg",
      },
      components: {
        MobileMenuFooter: "./src/components/MobileMenuFooter.astro",
        Header: "./src/components/DocHeader.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Frame-Platform/Frame",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/frame-platform/about/",
        },
      ],
      sidebar: [
        {
          label: "Case Study",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "case-study/introduction" },
            {
              label: "The Challenge of Organizing Images",
              slug: "case-study/background",
            },
            {
              label: "Building an Image Search System",
              slug: "case-study/building-image-search",
            },
            {
              label: "Introducing Frame",
              slug: "case-study/introducing-frame",
            },
            {
              label: "Frame’s Architecture",
              slug: "case-study/architecture-overview",
            },
            {
              label: "Design Decisions",
              slug: "case-study/design-decisions",
            },
            {
              label: "Conclusion",
              slug: "case-study/conclusion",
            },
          ],
        },
        {
          label: "Documentation",
          items: [
            { label: "Deploying Frame", slug: "documentation/deployment" },
            {
              label: "Using the Frame SDK",
              slug: "documentation/sdk",
            },
            {
              label: "API",
              slug: "documentation/api",
            },
          ],
        },
      ],
    }),
    studiocmsUi(),
  ],
});
