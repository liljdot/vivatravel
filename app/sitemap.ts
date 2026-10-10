import { MetadataRoute } from "next";

const sitemap: () => Promise<MetadataRoute.Sitemap> = async () => {

    const baseRoutes = [
        {
            url: "https://www.vivatravelservices.com/",
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 1
        },
    ]

    return [...baseRoutes]
}

export default sitemap