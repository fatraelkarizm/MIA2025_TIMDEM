import React from "react";

const Landing = React.lazy(() => import("@/pages/landing"));
const Explore = React.lazy(() => import("@/pages/explore"));
const Beranda = React.lazy(() => import("@/pages/beranda"));
const Peta = React.lazy(() => import("@/pages/peta"));
const Event = React.lazy(() => import("@/pages/event"));
const Search = React.lazy(() => import("@/pages/search"));
export {
  Landing,
  Explore,
  Beranda,
  Peta,
  Event,
  Search
}