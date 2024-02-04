import {MetadataRoute} from "next";
import httpRequest from "@/utils/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseURL = process.env.NEXT_PUBLIC_HOST
    const now = new Date()
    const month: number = now.getMonth() + 1
    const day: number = now.getDate()
    const today = `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    const sitemap: MetadataRoute.Sitemap = [
        {url: baseURL + '/about', lastModified: today, changeFrequency: 'daily'},
        {url: baseURL + '/timeLine', lastModified: today, changeFrequency: 'daily'},
        {url: baseURL + '/onlineTools/imageZip', lastModified: today, changeFrequency: 'monthly'},
        {url: baseURL + '/', lastModified: today, changeFrequency: 'daily'},
    ]
    const res: { list: Article.ArticleItem[] } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/timeLine`,
    })
    res?.list?.map((article)=>{
        sitemap.push({
            url: baseURL + '/detail/' + article.id,
            lastModified: article.updatedAt.split(' ')[0],
            changeFrequency: 'weekly'
        })
    })
    return sitemap
}