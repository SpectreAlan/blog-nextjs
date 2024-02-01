declare namespace Article {
    interface ArticleItem {
        id: string;
        title: string;
        cover: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        category: {
            title: string
        }
        tags: {
            title: string
            _id: string
        }[]
    }

    interface Detail extends ArticleItem{
        content: string
        catalogue: boolean
        scan: number
    }
}
