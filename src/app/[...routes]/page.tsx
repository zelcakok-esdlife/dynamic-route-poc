"use client";

import { SimulatePageFromAPI } from "@/simulate-page-data";
import { useSPAHooks } from "@/spa/hook";

const Render = () => {
  const { getRouteParams } = useSPAHooks();
  const { pageId, params } = getRouteParams();
  const Component = SimulatePageFromAPI[pageId as keyof typeof SimulatePageFromAPI];
  return <Component />;
};

export default Render;
