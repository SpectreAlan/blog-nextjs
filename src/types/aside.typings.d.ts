declare namespace Aside {
    interface Category {
        category: string
        count: number
    }

    interface Items {
        categoryList: Category[]
        totalArticle: number
        totalCategory: number
        list: Article.ArticleItem[]
        tags: string[]
        notice: string
    }
}
