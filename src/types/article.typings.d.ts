declare namespace Article {
    interface ArticleItem {
        id: string;
        title: string;
        category: {
            title: string
        }
        tags: {
            title: string
            _id: string
        }[]
    }
}
