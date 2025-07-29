import AboutUsPage from "./about-us";
import LandingPage from "./landing";
import ProductDetailPage from "./product-detail";
import ProductListingPage from "./product-listing";
import SettingsPage from "./setting-page";
import SiteLanguageSettingPage from "./site-language-setting";
import UserProfilePage from "./user-detail";
import UserListingPage from "./user-listing";
import UserPostPage from "./user-posts";

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
