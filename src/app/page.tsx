import FullPage from "@/app/home/FullPage";
import Articles from "@/app/home/Articles";
import Aside from "@/app/home/Aside";
import React from "react";
import {Col, Row} from 'antd'

const HomePage: React.FC<Common.IProps> = ({searchParams}) => {
    return (
        <>
            <FullPage/>
            <Row className='items-start mx-auto px-4 max-w-[1200px] flex py-4'>
                <Col lg={17} md={17} sm={24} xs={24}>
                    <Articles searchParams={searchParams}/>
                </Col>
                <Col lg={{span: 6, offset: 1}}
                     md={{span: 6, offset: 1}}
                     sm={{span: 24, offset: 0}}
                     xs={{span: 24, offset: 0}}
                >
                    <Aside/>
                </Col>
            </Row>

        </>
    );
}
export default HomePage
