import React from 'react'
import httpRequest from "@/utils/fetch";
import Profile from "@/app/home/Profile";
import Notice from "@/app/home/Notice";
import RecentUpdate from "@/app/home/RecentUpdate";

const ArticleList: React.FC = async () => {
    const aside: Aside.Items | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/aside`,
        options: {cache: 'no-store'}
    })
    if(!aside){
        return null
    }
    console.log(aside);
    return <>
        <Profile aside={aside}/>
        <Notice notice={aside.notice}/>
        <RecentUpdate articles={aside.list}/>
    </>
};
export default ArticleList
