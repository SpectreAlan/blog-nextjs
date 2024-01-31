import FullPage from "@/app/home/FullPage";
import Articles from "@/app/home/Articles";
import React from "react";

const HomePage: React.FC<Common.IProps> = ({searchParams}) => {
    return (
        <div className="min-h-screen">
            <FullPage/>
            <Articles searchParams={searchParams}/>
        </div>
    );
}
export default HomePage
