import useLocales from "../locales/useLocales";

export const useMenuItems = () => {
  const { t } = useLocales();

  return [
    {
      id: "menu1",
      name: t("home"),
      link: "https://propertycareapp.com/",
    },
    {
      id: "menu2",
      name: t("products"),
      link: "/",
      items: [
        {
          id: "menu21",
          name: t("maintenance"),
          link: "https://propertycareapp.com/maintenance/",
        },
        {
          id: "menu22",
          name: t("assets-and-parts-module"),
          link: "https://propertycareapp.com/assets-and-parts/",
        },
        {
          id: "menu23",
          name: t("communication"),
          link: "https://propertycareapp.com/communication/",
        },
        {
          id: "menu24",
          name: t("crm"),
          link: "https://propertycareapp.com/crm/",
        },
        {
          id: "menu25",
          name: t("sales-rentals"),
          link: "https://propertycareapp.com/sales-rentals-2/",
        },
      ],
    },
    {
      id: "menu3",
      name: t("pricing"),
      link: "https://pricing.propertycareapp.com/",
    },
    {
      id: "menu4",
      name: t("blog"),
      link: "https://propertycareapp.com/blog-6/",
    },
    {
      id: "menu5",
      name: t("our-company"),
      link: "/",
      items: [
        {
          id: "menu51",
          name: t("about-us"),
          link: "https://propertycareapp.com/about-us-4/",
        },
        {
          id: "menu52",
          name: t("contact-us"),
          link: "https://propertycareapp.com/contact-us-2-2/",
        },
      ],
    },
  ];
};
