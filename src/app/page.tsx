import FullPage from "@/app/home/FullPage";
import Articles from "@/app/home/Articles";
import Aside from "@/app/home/Aside";
import React from "react";
import {Col, Row} from 'antd'

const HomePage: React.FC<Common.IProps> = ({searchParams}) => {
    return (
        <div className="min-h-screen">
            <FullPage/>
            <Row className='items-start mx-auto px-15 max-w-[1200px] flex py-4'>
                <Col lg={17} md={17} sm={24} xs={24}>
                    <Articles searchParams={searchParams}/>
                </Col>
                <Col lg={6} md={6} sm={0} xs={0} offset={1}>
                    <Aside/>
                </Col>
            </Row>

        </div>
    );
}
export default HomePage
