"use client";

import { SimulatePageFromAPI } from "@/simulate-page-data";
import { useSPAHooks } from "@/spa/hook";

const Render = () => {
  const { getRouteParams } = useSPAHooks();
  const { pageId } = getRouteParams();
  const Component = SimulatePageFromAPI[pageId as keyof typeof SimulatePageFromAPI];
  if (!Component) {
    return (
      <div style={{ fontSize: "10rem", textAlign: "center", marginTop: "20%" }}>404 Not Found</div>
    );
  }
  return <Component />;
};

export default Render;
