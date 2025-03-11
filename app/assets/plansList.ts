import useLocales from "../locales/useLocales";

export const usePlansHeaderMaintenance = () => {
  const { t } = useLocales();
  return [
    {
      color: "bg-[#00b451]",
      title: t("base"),
      id: "basic",
      summary: t("base-plan-maintenance-summary"),
      monthPrice: "$2.5",
      yearPrice: "$2.5",
      link: "https://admin.propertycareapp.com/create-subscription/52/false/EN",
      items: [
        {
          id: 1,
          text: t("unlimited-seamless-amenity-booking"),
        },
        {
          id: 2,
          text: t("direct-integration-with-google-calendar"),
        },
        {
          id: 3,
          text: t(
            "cancel-or-reschedule-events-directly-from-google-calendar"
          ),
        },
        {
          id: 4,
          text: t(
            "send-notifications-and-announcements-by-email-or-sms-individually-or-in-bulk"
          ),
        },
        {
          id: 5,
          text: t(
            "create-comprehensive-profiles-for-all-residents-and-owners"
          ),
        },
        {
          id: 6,
          text: t("define-access-levels-for-admin-panel-users"),
        },
        {
          id: 7,
          text: t("advanced-analytics-and-reliable-reports"),
        },
      ],
    },
    {
      color: "bg-[#f3bd33]",
      title: t("silver"),
      id: "starter",
      summary: t("silver-plan-maintenance-summary"),
      monthPrice: "$5",
      yearPrice: "$5",
      link: "https://admin.propertycareapp.com/create-subscription/51/false/EN",
      items: [
        {
          id: 1,
          text: t("work-orders"),
        },
        {
          id: 2,
          text: t("scheduled-maintenance"),
        },
        {
          id: 3,
          text: t("assets-parts"),
        },
        {
          id: 4,
          text: t("inventory-management"),
        },
        {
          id: 5,
          text: t("comprehensive-and-live-reporting-package"),
        },
        {
          id: 6,
          text: t("custom-form-maker"),
        },
        {
          id: 7,
          text: t("efficient-ticket-management-system"),
        },
      ],
    },
    {
      color: "bg-[#ff3429]",
      title: t("gold"),
      id: "gold",
      summary: t("gold-plan-maintenance-summary"),
      monthPrice: "$6",
      yearPrice: "$6",
      link: "https://admin.propertycareapp.com/create-subscription/50/false/EN",
      items: [
        {
          id: 1,
          text: t("work-orders-with-attached-procedures"),
        },
        {
          id: 2,
          text: t("advanced-analytics"),
        },
        {
          id: 3,
          text: t("meter-and-threshold-based-scheduling"),
        },
        {
          id: 4,
          text: t("vendor-purchase-order-management"),
        },
        {
          id: 5,
          text: t("labor-time-cost-tracking"),
        },
        {
          id: 6,
          text: t("ai-powered-workflow-validations"),
        },
        {
          id: 7,
          text: t("custom-roles-approval-processes"),
        },
      ],
    },
    {
      color: "bg-[#007bff]",
      extraTitle: t("most-popular"),
      id: "elite",
      title: t("customization"),
      summary: t("custom-plan-maintenance-summary"),
      monthPrice: t("contact-us-for-a-quote"),
      yearPrice: t("contact-us-for-a-quote"),
      textPrice: true,
      link: "https://fire.chilipiper.com/me/property-careapp/meeting-with-propertycare",
      items: [
        {
          id: 1,
          text: t("custom-feature-development"),
        },
        {
          id: 2,
          text: t("integration-with-third-party-tools"),
        },
        {
          id: 3,
          text: t("custom-reports-dashboards"),
        },
        {
          id: 4,
          text: t("ai-powered-automations"),
        },
        {
          id: 5,
          text: t("highly-flexible-fully-customizable-system"),
        },
        {
          id: 6,
          text: t("ai-powered-demand-prediction"),
        },
      ],
    },
  ];
};

export const usePlansHeaderSales = () => {
  const { t } = useLocales();
  return [
    {
      color: "bg-[#00b451]",
      title: t("base"),
      id: 'basic',
      summary: t("base-plan-sales-summary"),
      monthPrice: "$2.5",
      yearPrice: "$2.5",
      link: "https://admin.propertycareapp.com/create-subscription/55/false/EN",
      items: [
        {
          id: 1,
          text: t("define-building-units-along-with-features-and-pricing"),
        },
        {
          id: 2,
          text: t("ability-to-import-initial-data"),
        },
        {
          id: 3,
          text: t("ability-to-book-a-unit-for-a-specific-customer"),
        },
        {
          id: 4,
          text: t("contract-management"),
        },
        {
          id: 5,
          text: t("activate-units-for-sale-or-rent"),
        },
        {
          id: 6,
          text: t("manage-agents-and-their-commissions"),
        },
        {
          id: 7,
          text: t("submit-negotiations-and-easily-follow-up"),
        },
        {
          id: 8,
          text: t("direct-integration-with-google-calendar"),
        },
        {
          id: 9,
          text: t("cancel-or-reschedule-directly-from-google-calendar"),
        },
        {
          id: 10,
          text: t("send-notifications-emails-and-sms-individually-or-in-bulk"),
        },
        {
          id: 11,
          text: t("advanced-analytics-and-reliable-reports"),
        },
      ]
    },
    {
      color: "bg-[#f3bd33]",
      title: t("silver"),
      id: 'starter',
      summary: t("silver-plan-sales-summary"),
      monthPrice: "$5",
      yearPrice: "$5",
      link: "https://admin.propertycareapp.com/create-subscription/54/false/EN",
      items: [
        {
          id: 1,
          text: t("interactive-presentation-for-tower-floor-and-unit-selection"),
        },
        {
          id: 2,
          text: t("displaying-units-in-gride-model-views"),
        },
        {
          id: 3,
          text: t("form-maker"),
        },
        {
          id: 4,
          text: t("ticket-management"),
        },
        {
          id: 5,
          text: t("installment-reminder-system"),
        },
        {
          id: 6,
          text: t("an-alert-in-case-of-agents-failure-to-follow-up"),
        },
        {
          id: 7,
          text: t("live-reports"),
        },
      ],    
    },
    {
      color: "bg-[#ff3429]",
      title: t("gold"),
      id: 'gold',
      summary: t("gold-plan-sales-summary"),
      monthPrice: "$6",
      yearPrice: "$6",
      link: "https://admin.propertycareapp.com/create-subscription/53/false/EN",
      items: [
        {
          id: 1,
          text: t("unit-visit-appointment-booking"),
        },
        {
          id: 2,
          text: t("managing-contract-payments"),
        },
        {
          id: 3,
          text: t("ai-with-memory-of-past-conversations"),
        },
        {
          id: 4,
          text: t("weighted-search-and-filtering-for-units"),
        },
        {
          id: 5,
          text: t("professional-scheduling-module"),
        },
        {
          id: 6,
          text: t("ai-chat-support"),
        },
        {
          id: 7,
          text: t("advanced-analytics"),
        },
        {
          id: 8,
          text: t("ai-powered-duplicate-checks"),
        },
        {
          id: 9,
          text: t("custom-roles-approval-processes"),
        },
      ],    
    },
    {
      color: "bg-[#007bff]",
      extraTitle: t("most-popular"),
      id: 'elite',
      title: t("customization"),
      summary:t("custom-plan-sales-summary"),
      monthPrice: t("contact-us-for-a-quote"),
      yearPrice: t("contact-us-for-a-quote"),
      textPrice: true,
      link: "https://fire.chilipiper.com/me/property-careapp/meeting-with-propertycare",
      items: [
        {
          id: 1,
          text: t("custom-feature-development"),
        },
        {
          id: 2,
          text: t("integration-with-third-party-tools"),
        },
        {
          id: 3,
          text: t("custom-reports-dashboards"),
        },
        {
          id: 4,
          text: t("ai-powered-automations"),
        },
        {
          id: 5,
          text: t("highly-flexible-fully-customizable-system"),
        },
        {
          id: 6,
          text: t("ai-powered-demand-prediction"),
        },
      ],    
    },
  ];
};

export const usePlansMaintenance = () => {
  const { t } = useLocales();
  return [
    {
      title: t("work-orders"),
      items: [
        {
          title: t("work-order-management"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("recurring-work-orders"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-categories"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("data-importing"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("scheduled-maintenance"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("checklists"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("time-and-cost-tracking"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("signature-capture"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("work-order-configuration"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-work-order-statuses"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("workflow-automation"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("work-requests"),
      items: [
        {
          title: t("internal-requests"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("external-request-portal"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("locations-assets-and-parts"),
      items: [
        {
          title: t("location-management"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("asset-management"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("barcode-scanning"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("inventory-management"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("meter-readings"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("file-upload"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-asset-statuses"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("multiple-inventory-lines"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("asset-downtime-tracking"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("asset-depreciation-tracking"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("asset-warranty-tracking"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("purchase-orders"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("asset-check-in-check-out"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("booking"),
      items: [
        {
          title: t("unlimited-user-availability-list"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("booking-link-sharing"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("calendar-integration"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("customizable-notifications"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("reminders"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("flexible-time-periods"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("unlimited-booking-items"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("location-setting"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("invite-participants"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("mobile-offline"),
      items: [
        {
          title: t("work-order-availability"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("updating-status"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("updating-tasks"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("work-order-drafts"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("updates"),
      items: [
        {
          title: t("push-notifications"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("daily-email-digest"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("email-notifications"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("manage-template-massages"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("customer-care"),
      items: [
        {
          title: t("contacts"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("ai-chat-support"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("form-maker-module-to-create-various-forms"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("tickets-manager-on-portal"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("negotiation-and-follow-up-system"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("add-an-alert-in-case-of-delay-in-the-call"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("the-necessity-of-assigning-a-follow-up-date"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("installment-reminder-system"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t(
            "enable-sms-and-email-payment-reminders-for-each-scheduled-payment"
          ),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("integrations"),
      items: [
        {
          title: t("api-access"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("business-integrations"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("custom-integrations"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
      ],
    },

    {
      title: t("users-and-teams"),
      items: [
        {
          title: t("unlimited-view-only-users"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("unlimited-requesters"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("unlimited-vendors"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("unlimited-customers"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("teams"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-roles"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("sso"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("analytics"),
      items: [
        {
          title: t("full-drill-down-reporting-history"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("pdf-and-csv-exporting"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("itemized-time-reporting"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("user-log-in-reports"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("user-profile-edition-reports"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("all-modules-edition-reports"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("requests-analysis"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("parts-consumption-reports"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-dashboards"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("asset-downtime-reports"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("equipment-reliability-reports"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("multi-site-modules"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("generative-reports"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("support"),
      items: [
        {
          title: t("articles"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("training-webinars"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("chat-support"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("phone-support"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("sms-support"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("implementation-training"),
          one: "1600 CAD",
          two: "1600 CAD",
          three: "1600 CAD",
          four: "1600 CAD",
        },
        {
          title: t("dedicated-customer-success-manager"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
      ],
    },

    {
      title: t("logs"),
      items: [
        {
          title: t("comments-recent-activities"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
      ],
    },
  ];
};

export const usePlansSales = () => {
  const { t } = useLocales();
  return [
    {
      title: t("sales-rentals"),
      items: [
        {
          title: t("interactive-presentation"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("grid-model-views"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("activate-unit"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("price-info-toggle"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("unit-visit-booking"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("reservation-receipt"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("unit-request"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("media-display"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("price-update-excel"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("reservations-manager"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("contracts-manager"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("contract-payments"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("commission-view"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("search-filtering"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("ai-memory"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("booking"),
      items: [
        {
          title: t("user-availability-list"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("booking-link-sharing"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("calendar-integration"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("custom-notifications"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("reminders"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("flexible-time-periods"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("unlimited-booking-items"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("location-setting"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("invite-participants"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("updates"),
      items: [
        {
          title: t("push-notifications"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("daily-email-digest"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("email-notifications"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("manage-template-messages"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("crm"),
      items: [
        {
          title: t("contacts"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("ai-chat-support"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("form-maker-module"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("tickets-manager-on-portal"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("call-me-module"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("automatic-registration"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("assigning-applicant-to-agent"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("automatic-submission-inquiry"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("negotiation-follow-up-system"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("alert-delay-call"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("estimated-success-percentage"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("necessity-follow-up-date"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("alert-agent-failure"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("installment-reminder-system"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("sms-email-payment-reminders"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("generate-unique-links"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("integrations"),
      items: [
        {
          title: t("api-access"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("business-integrations"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("custom-integrations"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
      ],
    },

    {
      title: t("users-teams"),
      items: [
        {
          title: t("unlimited-view-only-users"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("unlimited-customers"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("teams"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-roles"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("analytics"),
      items: [
        {
          title: t("full-drill-down-reporting-history"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("pdf-csv-exporting"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("itemized-time-reporting"),
          one: false,
          two: false,
          three: true,
          four: true,
        },
        {
          title: t("user-log-in-reports"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("user-profile-edition-reports"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("all-modules-edition-reports"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("requests-analysis"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("custom-dashboards"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("multi-site-modules"),
          one: false,
          two: true,
          three: true,
          four: true,
        },
      ],
    },

    {
      title: t("support"),
      items: [
        {
          title: t("articles"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("training-webinars"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("chat-support"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
        {
          title: t("phone-support"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("sms-support"),
          one: false,
          two: false,
          three: false,
          four: true,
        },
        {
          title: t("implementation-training"),
          one: "1600 CAD",
          two: "1600 CAD",
          three: "1600 CAD",
          four: "1600 CAD",
        },
      ],
    },

    {
      title: t("logs"),
      items: [
        {
          title: t("comments-recent-activities"),
          one: true,
          two: true,
          three: true,
          four: true,
        },
      ],
    },
  ];
};