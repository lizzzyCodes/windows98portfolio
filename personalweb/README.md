# win98-portfolio

A personal developer portfolio built as a fully interactive (soon) Windows 98 desktop environment using Next.js, React, and TypeScript, styled with 98.css and a custom pink color palette.

## Features

- Clickable desktop icons and a functional Start Menu
- Window management system with z-index stacking, singleton enforcement (no duplicate windows)
- Resume rendered as a Notepad-style text window with retro box-drawing character dividers (`═`, `─`, `-`) and a section/header pattern built from composable components.
- Themed using 98.css as the base with custom overrides: `#FFF0F5` dialog backgrounds, `#E09ABE → #F5A8D0` title bar,`#A8518A` borders, `#2C1B24` primary text.

### Inspo

### Window System — `components/Window/` + `app/src/data/desktop/`

The core abstraction. `DesktopContext` and `DesktopProvider` manage all window state: an array of `WindowInstance` objects tracking id, type, z-index, position, minimized/maximized flags. `useDesktop` exposes `openWindow`, `closeWindow`, `focusWindow`, `minimizeWindow`, `maximizeWindow`, and `toggleMenu`. The `Window` component is the single shell — it renders the 98.css title bar, control buttons, and wraps `{children}`. Content components never render their own `<Window>` wrapper.

### Window Registry — `components/Desktop/WindowRegistry.tsx`

Maps window type strings (`"about"`, `"resume"`, `"music"`, `"mycomputer"`, `"connect"`) to their metadata: display title, optional desktop-only width, and the React component to render inside the shell. This is the single source of truth for what windows exist and how they're configured.

### Desktop Layout — `components/Desktop/DesktopLayout.tsx`

The top-level composition layer. Renders the icon grid from `desktopIcons` data and the window layer by mapping over `windows` state, looking up each entry in `windowRegistry`, and wrapping it in `<Window>`. Two `<section>` elements: one for icons, one for open windows.

### Desktop Icons + Start Menu — `components/Desktop/DesktopItem.tsx` + `components/Menu/Menu.tsx`

Both consume the same `desktopIcons` array from `app/src/data/data.ts` and call `openWindow(type)` on click. The Start Menu lives in the Footer/taskbar and its visibility is managed through `DesktopContext` (`isMenuOpen`, `toggleMenu`, `closeMenu`) so opening a window automatically dismisses the menu.

### Resume Window — `components/Resume/`

The most component-heavy window. `ResumeSection` wraps the repeating `Divider → SectionHeader → Divider → {children}` pattern. `ExperienceHeader` uses a flex layout with a dashed fill element that shrinks responsively. `Divider` renders overflow-clipped Unicode box-drawing characters (`═`, `─`, `-`) via a variant prop. Resume data (companies, roles, highlights) lives in `app/src/data/` as typed objects.

### Shared Components — `components/Divider/`, `components/StatusBar/`

`Divider` takes a `variant` prop (`double`, `dashed`, `single`) mapped to box-drawing characters, rendered as a 200-char repeated string clipped by `overflow: hidden`. `StatusBar` is a `field-border` footer placed as a sibling to the window body content, not inside it.

### Static Data — `app/src/data/`

All static content (desktop icon definitions, folder structures for the "My Setup" window, resume entries) lives here as typed TypeScript exports, imported at build time. Not in `public/` — these are bundled, not served as raw files.

### Responsive Behavior — `components/Window/Window.module.css`

The registry `width` is passed as a CSS custom property (`--window-width`) and only applies above 600px. Below that breakpoint, windows go full-width and absolutely-positioned coordinates are overridden. The Win98 chrome (title bar, borders, buttons) is preserved at all sizes.

## Tech Stack

- **Next.js** 16.2.4 (App Router)
- **React** 19.2.4
- **TypeScript** 5
- **98.css** — base Windows 98 UI primitives
- **CSS Modules** — scoped component styles with custom property overrides
