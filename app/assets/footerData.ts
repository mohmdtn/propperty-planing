import useLocales from "../locales/useLocales";

export const useFooterData = () => {
  const { t } = useLocales();

  return [
    {
      title: t("product"),
      items: [
        { name: t("rental-and-sales-software"), link: "/" },
        { name: t("work-orders"), link: "/" },
        { name: t("assets-and-parts"), link: "/" },
        { name: t("communication"), link: "/" },
        { name: t("financial"), link: "/" },
        { name: t("crm-and-customer-care"), link: "/" },
        { name: t("real-state-filing"), link: "/" },
      ],
    },
    {
      title: t("who-we-served"),
      items: [
        { name: t("property-managers"), link: "/" },
        { name: t("sales-and-rental-offices"), link: "/" },
        { name: t("real-states"), link: "/" },
        { name: t("property-owners"), link: "/" },
        { name: t("facility-managers"), link: "/" },
        { name: t("security-managers"), link: "/" },
        { name: t("condos-and-co-ops"), link: "/" },
        { name: t("hoas-and-communities"), link: "/" },
      ],
    },
    {
      title: t("platforms"),
      items: [
        { name: t("web-application"), link: "/" },
        { name: t("admin-panel"), link: "/" },
        { name: t("ios-app-for-management"), link: "/" },
        { name: t("android-app-for-management"), link: "/" },
        { name: t("ios-app-for-residents-and-owners"), link: "/" },
        { name: t("android-app-for-residents-and-owners"), link: "/" },
      ],
    },
    {
      title: t("help"),
      items: [
        { name: t("faqs"), link: "/" },
        { name: t("contact-us"), link: "/" },
        { name: t("career"), link: "/" },
        { name: t("pricing"), link: "/" },
        { name: t("privacy-policy"), link: "/" },
        { name: t("terms-and-conditions"), link: "/" },
      ],
    },
  ];
};
