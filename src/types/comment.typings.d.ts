declare namespace Comment {
    interface Item {
        id: string;
        content: string;
        article: string;
        nickName: string;
        email: string;
        parentId: string;
        parentName: string;
        author: number;
        pinned: number;
        createdAt: string
        region: string
        platform?: string
    }
    interface Info {
        article: string
        parentId: string
        nickName?: string
    }
}
