import { Metadata } from 'next';

export const baseMetadata: Metadata = {
    metadataBase: new URL('https://shopify-developer.vercel.app/'),
    title: {
        default: 'Om Sharma | Expert Shopify Developer',
        template: '%s | Om Sharma'
    },
    description: 'Om Sharma, an expert Shopify Plus Developer specializing in Shopify Themes, Liquid customization, Shopify EcoSystem and eCommerce growth. Skilled in building scalable, high-performance Shopify stores tailored to client needs.',
    keywords: [
        'Om Sharma',
        'Software Developer',
        'Web developer',
        'Shopify developer',
        'Next.js developer',
        'React.js developer',
        'Full Stack Developer',
        'MERN stack developer',
        'Web3 developer',
        'Tech entrepreneur',
        'eCommerce website developer',
        'SaaS developer',
        'Website developer in Shirpur',
        'Website developer in Bhilwara',
        'Website developer in Jojwa, Triveni, Bigod, Mandalgargh',
        'Node.js backend developer',
        'Frontend and backend development',
        'JavaScript projects',
        'Tech startup enthusiast',
        'best Shopify developer in Bhilwara',
        'Shopify Developer',
        'Shopify Plus Developer',
        'Shopify Themes Developer',
        'Shopify Liquid Developer',
        'eCommerce website developer',
        'Shopify Store Customization',
        'Shopify Theme Customization',
        'Shopify API Integration',
        'Shopify Expert in India',
        'Shopify Expert in Bhilwara',
        'Shopify Expert in Rajasthan',
        'Shopify Expert in Shirpur',
        'Shopify Plus Partner Developer',
        'Shopify App Developer',
        'Shopify Sections and Blocks',
        'Liquid Developer',
        'Shopify Checkout Customization',
        'Om Sharma Shopify Developer',
        'best Shopify Developer in Shirpur',
        'Headless Shopify Development',
        'Custom Shopify Store Development',
        'Shopify JavaScript Developer',
        'Shopify Store Migration Expert'
    ],
    authors: [{ name: 'Om Sharma', url: 'https://shopify-developer.vercel.app/' }],
    creator: 'Om Sharma',
    publisher: 'Om Sharma',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shopify-developer.vercel.app/',
        title: 'Om Sharma | Expert Shopify Developer',
        description: 'Om Sharma, a Shopify Plus and Themes Developer specializing in Liquid, API integrations, and creating seamless eCommerce experiences.',
        siteName: 'Om Sharma Shopify Developer Portfolio',  
        images: [
            {
                url: '/og-image.png',
                width: 1349,
                height: 767,
                alt: 'Om Sharma Shopify Developer Portfolio'
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Om Sharma | Expert Shopify Developer',
        description: 'Explore Om Sharma’s expertise in Shopify Plus, Liquid customization, and creating custom Shopify themes for eCommerce businesses.',
        creator: '@1omsharma',
        images: ['/og-image.png']
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },

    verification: {
        google: 'your-google-site-verification-code', // Optional: Add your Google Search Console verification code
        // yandex: 'your-yandex-verification-code', // Optional
        // bing: 'your-bing-verification-code', // Optional
    },

    alternates: {
        canonical: 'https://shopify-developer.vercel.app/'
    },

    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon_512.png', sizes: '512x512', type: 'image/png' }
        ],
        apple: [
            { url: '/favicon.png', sizes: '180x180' }
        ]
    },

    other: {
        'msapplication-TileColor': '#5E60CE',
        'theme-color': '#5E60CE'
    }
};

// Jsonld Structured Data
export const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Om Sharma',
    'url': 'https://shopify-developer.vercel.app/',
    'sameAs': [
        'https://twitter.com/1omsharma',
        'https://github.com/coderomm',
        'https://linkedin.com/in/1omsharma/'
    ],
    'jobTitle': 'Shopify Developer',
    'worksFor': {
        '@type': 'Organization',
        'name': 'Om Sharma Portfolio'
    },
    'description': 'Om Sharma, a professional Shopify Developer with expertise in Shopify Plus, Liquid programming, and creating bespoke Shopify themes and apps.'
};