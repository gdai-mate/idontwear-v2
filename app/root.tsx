import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { GrainOverlay } from "~/components/GrainOverlay";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export const meta: MetaFunction = () => [
  { title: "idontwear" },
  {
    name: "description",
    content: "Clothes for people who wear them.",
  },
  { property: "og:title", content: "idontwear" },
  {
    property: "og:description",
    content: "Clothes for people who wear them.",
  },
  { name: "theme-color", content: "#F7F6F3" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-idw-white font-sans text-idw-black antialiased" suppressHydrationWarning>
        <GrainOverlay />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
