import React from "react";

const Landing = React.lazy(() => import("@/pages/landing"));
const Explore = React.lazy(() => import("@/pages/explore"));
export {
  Landing,
  Explore
}