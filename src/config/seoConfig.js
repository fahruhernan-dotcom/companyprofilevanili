/**
 * Centralized SEO & Structured Data (JSON-LD) Configuration
 * Used for both Client-Side Route Updates and Build-Time Static Pre-Rendering (SSG)
 */

export const siteBaseUrl = 'https://essenceindonesia.com';

export const seoRoutes = {
  home: {
    path: '/',
    title: 'Essence Indonesia — Single-Origin Indonesian Vanilla Exporter (Planifolia & Tahitensis)',
    description: 'Direct export sourcing of single-origin Indonesian Vanilla (Planifolia & Tahitensis) and value-added derivatives. Verified with laboratory CoA, phytosanitary quarantine certification, and hermetic barrier packaging.',
    keywords: 'Indonesian Vanilla, Planifolia Vanilla, Tahitensis Vanilla, Single-Origin Vanilla Beans, Agricultural Commodity Exporter, B2B Vanilla Supplier Indonesia, Gourmet Vanilla Grade A, Vanilla Caviar, Vanilla Extract',
    canonical: `${siteBaseUrl}/`,
    ogImage: `${siteBaseUrl}/images/catalog_products/origin_planifolia_hero.webp`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteBaseUrl}/#organization`,
          'name': 'Essence Indonesia',
          'legalName': 'Essence Indonesia Commodity',
          'url': siteBaseUrl,
          'logo': `${siteBaseUrl}/favicon.svg`,
          'description': 'Direct export sourcing of single-origin Indonesian agricultural commodities including Vanilla Planifolia, Vanilla Tahitensis, and value-added derivatives.',
          'knowsAbout': [
            'Vanilla planifolia',
            'Vanilla tahitensis',
            'Agricultural Export Logistics',
            'Phytosanitary Certification',
            'ISO 22000 Standards',
            'Vanilla Caviar and Derivatives'
          ],
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+62-896-6924-1131',
            'contactType': 'B2B Global Trade Concierge',
            'availableLanguage': ['English', 'Indonesian'],
            'areaServed': ['Worldwide', 'Europe', 'North America', 'Asia Pacific', 'Middle East']
          }
        },
        {
          '@type': 'WebSite',
          '@id': `${siteBaseUrl}/#website`,
          'url': siteBaseUrl,
          'name': 'Essence Indonesia',
          'alternateName': [
            'Essence Indonesia Commodity',
            'Essence Indonesia Vanilla',
            'Essence Indonesia Exporter'
          ],
          'publisher': {
            '@id': `${siteBaseUrl}/#organization`
          }
        }
      ]
    }
  },

  vanilla: {
    path: '/vanilla',
    title: 'Indonesian Vanilla Sourcing (Planifolia & Tahitensis) — Essence Indonesia',
    description: 'Explore Grade A Gourmet Indonesian Vanilla Beans (Planifolia & Tahitensis), Vanilla Caviar, Pure Extract, and Natural Powder. Tested with HPLC for high vanillin content and moisture specifications.',
    keywords: 'Indonesian Vanilla Beans, Vanilla Planifolia Grade A, Tahitensis Vanilla, Vanilla Caviar, Pure Vanilla Powder, Wholesale Vanilla Beans Indonesia, B2B Vanilla Export',
    canonical: `${siteBaseUrl}/vanilla`,
    ogImage: `${siteBaseUrl}/images/catalog_products/origin_planifolia_hero.webp`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          '@id': `${siteBaseUrl}/vanilla#product-planifolia`,
          'name': 'Indonesian Vanilla Planifolia (Gourmet Grade A)',
          'description': 'Artisanal Grade A Indonesian Vanilla planifolia beans cured with 90-day traditional methods. High vanillin content (1.8% - 2.4%), 30-35% moisture content, plump 16-22cm pods.',
          'brand': {
            '@type': 'Brand',
            'name': 'Essence Indonesia'
          },
          'category': 'Agricultural Commodities > Spices > Vanilla Beans',
          'countryOfOrigin': {
            '@type': 'Country',
            'name': 'Indonesia'
          },
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'eligibleQuantity': {
              '@type': 'QuantitativeValue',
              'unitCode': 'KGM',
              'minValue': '1'
            }
          }
        },
        {
          '@type': 'Product',
          '@id': `${siteBaseUrl}/vanilla#product-tahitensis`,
          'name': 'Indonesian Vanilla Tahitensis (Floral Grade A)',
          'description': 'Exotic Indonesian Tahitensis vanilla pods known for floral, cherry, and anise-like aromatic profiles. Ideal for haute gastronomy and premium fragrance formulation.',
          'brand': {
            '@type': 'Brand',
            'name': 'Essence Indonesia'
          },
          'category': 'Agricultural Commodities > Spices > Vanilla Beans',
          'countryOfOrigin': {
            '@type': 'Country',
            'name': 'Indonesia'
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteBaseUrl}/vanilla#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': `${siteBaseUrl}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Vanilla Sourcing',
              'item': `${siteBaseUrl}/vanilla`
            }
          ]
        }
      ]
    }
  },

  coffee: {
    path: '/coffee',
    title: 'Indonesian Green Coffee Sourcing (Single-Origin Terroirs) — Essence Indonesia',
    description: 'Direct trade Indonesian Specialty Green Coffee beans sourced from high-altitude volcanic terroirs (Gayo, Mandheling, Toraja, Bali Kintamani, Ijen Java). Sized, moisture-calibrated, and defect-screened for commercial roasters.',
    keywords: 'Indonesian Green Coffee, Sumatra Gayo Green Coffee, Mandheling Arabica, Toraja Specialty Coffee, Indonesia Coffee Exporter, Green Coffee Beans B2B',
    canonical: `${siteBaseUrl}/coffee`,
    ogImage: `${siteBaseUrl}/images/farm_origin/farm_green_coffee_plantation.webp`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          '@id': `${siteBaseUrl}/coffee#product-green-coffee`,
          'name': 'Indonesian Selected Green Coffee Beans',
          'description': 'Single-origin green coffee beans from Indonesian volcanic terroirs. Screen-graded, moisture-controlled (10-12%), with SCA defect screening.',
          'brand': {
            '@type': 'Brand',
            'name': 'Essence Indonesia'
          },
          'category': 'Agricultural Commodities > Coffee > Green Coffee',
          'countryOfOrigin': {
            '@type': 'Country',
            'name': 'Indonesia'
          },
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'eligibleQuantity': {
              '@type': 'QuantitativeValue',
              'unitCode': 'KGM',
              'minValue': '50'
            }
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteBaseUrl}/coffee#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': `${siteBaseUrl}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Green Coffee',
              'item': `${siteBaseUrl}/coffee`
            }
          ]
        }
      ]
    }
  },

  quality: {
    path: '/quality',
    title: 'Export Quality & Quarantine Standards — Essence Indonesia',
    description: 'Explore our strict export quarantine protocol, laboratory HPLC Certificate of Analysis (CoA), Indonesian Ministry of Agriculture Phytosanitary Certification, and multi-layer vacuum hermetic packaging.',
    keywords: 'Phytosanitary Certificate Indonesia, Vanilla CoA Testing, HPLC Vanillin Analysis, Export Packaging Standards, Agricultural Commodity Quarantine',
    canonical: `${siteBaseUrl}/quality`,
    ogImage: `${siteBaseUrl}/images/inspection_proofs/proof_lab_hplc.webp`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${siteBaseUrl}/quality#webpage`,
          'name': 'Quality & Export Compliance Standards',
          'description': 'Laboratory testing, official phytosanitary quarantine clearance, and hermetic export protection for agricultural exports from Indonesia.',
          'publisher': {
            '@id': `${siteBaseUrl}/#organization`
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteBaseUrl}/quality#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': `${siteBaseUrl}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Quality Standards',
              'item': `${siteBaseUrl}/quality`
            }
          ]
        }
      ]
    }
  },

  buyers: {
    path: '/buyers',
    title: 'For International Buyers (B2B Procurement & Trade Terms) — Essence Indonesia',
    description: 'International buyer guide for procuring Indonesian vanilla and coffee. Overview of sample evaluation kits, MOQ tiers, Incoterms (FOB, CIF, CFR, DDP air courier), payment terms, and logistics.',
    keywords: 'Vanilla Importers Guide, Indonesian Commodity Procurement, Incoterms FOB CIF Vanilla, B2B Spice Export Indonesia, Sample Evaluation Kit',
    canonical: `${siteBaseUrl}/buyers`,
    ogImage: `${siteBaseUrl}/images/inspection_proofs/proof_air_freight.webp`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FAQPage',
          '@id': `${siteBaseUrl}/buyers#faq`,
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What is the Minimum Order Quantity (MOQ) for Vanilla and Coffee?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'For Vanilla Beans, our commercial MOQ starts at 5 kg for air freight export, with sample test kits starting from 500g. For Green Coffee, commercial MOQ begins at 1 standard jute sack / GrainPro bag (approx. 60 kg).'
              }
            },
            {
              '@type': 'Question',
              'name': 'Which Incoterms do you support for international shipping?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'We regularly ship under FOB (Jakarta / Surabaya / Bali ports), CIF / CFR (to your preferred port of entry), and DAP / DDP via express air freight couriers (DHL / FedEx Express) for time-sensitive boutique shipments.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What export documentation is provided with every shipment?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Every commercial shipment includes an official Phytosanitary Certificate issued by the Indonesian Agricultural Quarantine Agency (Barantan), Batch Certificate of Analysis (CoA), Certificate of Origin (COO / Form AK / Form D), Commercial Invoice, and Packing List.'
              }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteBaseUrl}/buyers#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': `${siteBaseUrl}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'For Buyers',
              'item': `${siteBaseUrl}/buyers`
            }
          ]
        }
      ]
    }
  },

  about: {
    path: '/about',
    title: 'Our Heritage & Indonesian Terroirs — Essence Indonesia',
    description: 'Learn about Essence Indonesia: bridging Indonesian generational farming communities directly to global gastronomy and commodity roasters through transparent, ethical trade.',
    keywords: 'Essence Indonesia Profile, Indonesian Agricultural Terroirs, Ethical Vanilla Sourcing, Direct Trade Indonesia, Spice Exporters Java Bali Papua',
    canonical: `${siteBaseUrl}/about`,
    ogImage: `${siteBaseUrl}/images/farm_origin/curing_facility_traditional.webp`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${siteBaseUrl}/about#aboutpage`,
          'name': 'About Essence Indonesia',
          'description': 'Direct export sourcing and artisanal curing of Indonesian agricultural commodities.',
          'publisher': {
            '@id': `${siteBaseUrl}/#organization`
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteBaseUrl}/about#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': `${siteBaseUrl}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'About Us',
              'item': `${siteBaseUrl}/about`
            }
          ]
        }
      ]
    }
  }
};
