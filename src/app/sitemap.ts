import {MetadataRoute} from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [{id: '11111', date: '2023-05-05'},{id: '11111', date: '2023-05-05'}].map((product) => ({
        url: `https://xx.com/product/${product.id}`,
        lastModified: product.date,
    }))
}