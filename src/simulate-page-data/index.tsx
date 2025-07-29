import AboutUsPage from "./pages/about-us";
import LandingPage from "./pages/landing";
import ProductDetailPage from "./pages/product-detail";
import ProductListingPage from "./pages/product-listing";
import SettingsPage from "./pages/setting-page";
import SiteLanguageSettingPage from "./pages/site-language-setting";
import UserProfilePage from "./pages/user-detail";
import UserListingPage from "./pages/user-listing";
import UserPostPage from "./pages/user-posts";

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
