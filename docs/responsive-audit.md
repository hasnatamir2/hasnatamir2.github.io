# Responsive layout verification

Verified locally on 10 October 2026 using the running portfolio at `http://127.0.0.1:3000`.

## Coverage

- Checked all six sections: home, projects, experience, skills, contact, and footer.
- Measured widths of 320, 390, 640, 768, 1024, 1280, 1440, and 1920 CSS pixels. No horizontal document overflow or overflowing headings remained at these widths. The complete footer image remained inside its container.
- Visually reviewed desktop and mobile layouts in dark and light themes, project details on mobile and desktop, expanded experience content, skill filters, the contact form, and the footer.
- Checked mobile navigation at 667 × 375 and the desktop sidebar at 1024 × 500. Navigation remains reachable in short viewports.

## Corrections

- Same-page section navigation uses Next.js `Link` through a shared `SectionLink` component. Its click handler explicitly scrolls when the target hash is already in the URL, while preserving modified-click behavior and reduced-motion preferences. Reproduced the original footer bug with `#home` already in the URL and the page scrolled down; Back to top now returns to scroll position 0 while retaining `#home`.
- Aligned hero gutters with the other sections: 24 pixels on phones, 40 pixels on tablets, and 64 pixels beside the desktop sidebar.
- Kept the project grid at two columns below 1280 pixels, with the featured project spanning both columns. This avoids narrow cards beside the sidebar at 1024 pixels.
- Added content resize observation to experience panels. Previously, resizing an expanded panel to 320 pixels left 1728 pixels of content inside a 751-pixel container. The expanded container now follows the content height.
- Prevented the mobile job title from wrapping at narrow widths by showing an accessible icon-only menu button below 360 pixels.
- Made the sidebar and expanded mobile menu scrollable when viewport height is constrained.

Project summaries retain their intentional line limits; full descriptions remain available in project details. The centered contact form and its matching header/footer captions retain the approved layout.

## Evidence and limits

Screenshots and viewport measurements are stored in `output/responsive-audit/`. TypeScript checking and `git diff --check` passed. These checks cover the local browser and responsive viewport emulation, not physical-device browser testing or a production deployment. No contact email was sent.
