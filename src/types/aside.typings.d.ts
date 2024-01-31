declare namespace Aside {
    interface Items{
        categoryList: {category: string, count: number}[]
        totalArticle: number
        totalCategory: number
        recentUpdate: Article.ArticleItem[];
        tags: string[];
        notice: string;
    }
}
