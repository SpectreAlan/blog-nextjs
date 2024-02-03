import {MetadataRoute} from "next";
import httpRequest from "@/utils/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseURL = process.env.NEXT_PUBLIC_HOST
    const now = new Date()
    const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`
    const sitemap: MetadataRoute.Sitemap = [
        {url: baseURL + '/about', lastModified: today, changeFrequency: 'daily'},
        {url: baseURL + '/timeLine', lastModified: today, changeFrequency: 'daily'},
        {url: baseURL + '/', lastModified: today, changeFrequency: 'daily'},
    ]
    const res: { list: Article.ArticleItem[] } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/timeLine`,
    })
    res?.list?.map((article)=>{
        sitemap.push({
            url: baseURL + '/detail/' + article.id,
            lastModified: article.updatedAt,
            changeFrequency: 'weekly'
        })
    })
    return sitemap
}