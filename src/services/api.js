export const fetchContent = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                header: {
                    logo: "FionaGreens",
                    links: [
                        { label: "Home", href: "#home" },
                        { label: "Features", href: "#features" },
                        { label: "About", href: "#about" },
                        { label: "Contact", href: "#contact" }
                    ],
                    cta: "Get Started"
                },
                hero: {
                    headline: "Fresh, Organic, & Pure from FionaGreens",
                    subheadline: "Discover the finest selection of 100% organic products. Grown with care, harvested for your health, and delivered fresh to your door.",
                    primaryCta: "Shop Now",
                    secondaryCta: "Our Story"
                },
                features: {
                    title: "Why Choose FionaGreens?",
                    subtitle: "Experience the difference of true quality.",
                    items: [
                        {
                            title: "100% Organic",
                            description: "Certified organic produce free from harmful pesticides and synthetic fertilizers. Pure nature in every bite.",
                            icon: "🌿"
                        },
                        {
                            title: "Health Benefits",
                            description: "Rich in essential nutrients and antioxidants. Boost your immunity and overall well-being with fresh greens.",
                            icon: "❤️"
                        },
                        {
                            title: "Farm to Table",
                            description: "Sourced directly from local sustainable farms to ensure maximum freshness and support for local communities.",
                            icon: "🚜"
                        }
                    ]
                },
                footer: {
                    logo: "FionaGreens",
                    tagline: "Building a better web for a better world.",
                    copyright: `© ${new Date().getFullYear()} FionaGreens Inc. All rights reserved.`,
                    links: {
                        product: ["Features", "Pricing", "Showcase"],
                        company: ["About", "Careers", "Contact"],
                        connect: ["Twitter", "LinkedIn", "GitHub"]
                    }
                }
            });
        }, 500); // Simulate network delay
    });
};
