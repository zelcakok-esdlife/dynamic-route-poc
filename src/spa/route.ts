type SiteMap = {
  __path: string;
  __pageId: string;
  __variableKey?: string;
  children?: { [key: string]: SiteMap };
};

export const routes = {
  "/": "landing-page-id",
  "/users": "user-listing-page-id",
  "/users/[userId]": "user-profile-page-id",
  "/users/[userId]/posts": "user-post-page-id",
  "/products": "product-listing-page-id",
  "/products/[productId]": "product-detail-page-id",
  "/settings": "setting-page-id",
  "/settings/[siteCode]/language": "site-language-setting-page-id",
  "/about-us": "about-us-page-id",
};

const SPASiteMap: SiteMap = { __path: "/", __pageId: routes["/"] };
type SPASiteKey = keyof typeof SPASiteMap;

let pointer = SPASiteMap;

for (const path in routes) {
  const tokens = path.split("/");
  for (const token of tokens) {
    if (token.length === 0) {
      pointer = SPASiteMap;
      continue;
    }
    const siteKey = token as SPASiteKey;
    const isVariableKey = /\[.+\]/g.test(siteKey);
    if (pointer?.children?.[siteKey]) {
      pointer = pointer.children[siteKey];
    } else if (
      (isVariableKey && pointer.__variableKey === undefined) ||
      (!isVariableKey && !pointer.children?.[siteKey])
    ) {
      if (isVariableKey) {
        pointer.__variableKey = siteKey;
      }
      pointer.children = {
        ...pointer.children,
        [siteKey]: {
          __path: siteKey,
          __pageId: routes[path as keyof typeof routes],
        },
      };
      pointer = pointer.children[siteKey];
    } else if (isVariableKey && pointer.__variableKey !== undefined) {
      throw new Error("Invalid site path configration");
    } else {
      console.error("Unknown state", pointer, siteKey);
    }
  }
}

export { SPASiteMap };
