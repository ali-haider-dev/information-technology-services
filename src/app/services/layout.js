export const metadata = {
  title: { absolute: "Services | ITS", template: "Services | %s " },

  description:
    "Explore the complete range of specialized technology solutions offered by Information Technology Services, including AI, ERP systems, Automated Typesetting, and Proprietary Manuscript Platforms for the publishing industry.",

  keywords: [
    "IT Services Portfolio",
    "Publishing Technology Solutions",
    "Academic Software Services",
    "Full Service Technology Provider",
    "AI Consulting",
    "ERP Implementation",
    "ITS Services List",
  ],

  openGraph: {
    title: "Discover Our Full Suite of Publishing Technology Services",
    description:
      "From content automation to secure delivery and ERP systems, see how ITS can transform your operations.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services",
    images: [
      {
        url: "/its-logo.png",
        width: 1200,
        height: 630,
        alt: "Information Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All ITS Services: AI, ERP, and Automation",
    description:
      "Browse our comprehensive list of technology solutions tailored for publishers and academic clients.",
  },
  alternates: {
    canonical: "https://information-technology-services.vercel.app/services",
  },
};

export default function ServicesLayout({ children }) {
  return (

     children

  );
}
