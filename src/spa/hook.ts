"use client";

import { useParams } from "next/navigation";
import { SPASiteMap } from "./route";

export const useSPAHooks = () => {
  const getRouteParams = (): {
    pageId: string;
    params: { [key: string]: string };
  } => {
    const { routes } = useParams();
    if (!routes?.length) {
      return { pageId: SPASiteMap.__pageId, params: {} };
    }
    let pointer = SPASiteMap;
    const params: { [key: string]: string } = {};
    for (const token of routes) {
      if (pointer?.children?.[token]) {
        pointer = pointer.children[token];
      } else if (pointer.__variableKey !== undefined) {
        params[pointer.__variableKey.replace(/[[|\]]/g, "")] = token;
        pointer = pointer.children![pointer.__variableKey];
      } else {
        return { pageId: "/404-error", params: {} };
      }
    }
    return { pageId: pointer.__pageId, params };
  };

  return {
    getRouteParams,
  };
};
