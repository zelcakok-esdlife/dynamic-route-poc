# Dynamic Route POC

### Define routes

```TypeScript
// Users define pages in CMS

const routes = {
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


// Simulate read page json from db
export const SimulatePageFromAPI = {
  "landing-page-id": LandingPage,
  "user-listing-page-id": UserListingPage,
  "user-profile-page-id": UserProfilePage,
  "user-post-page-id": UserPostPage,
  "product-listing-page-id": ProductListingPage,
  "product-detail-page-id": ProductDetailPage,
  "setting-page-id": SettingsPage,
  "site-language-setting-page-id": SiteLanguageSettingPage,
  "about-us-page-id": AboutUsPage,
};
```
