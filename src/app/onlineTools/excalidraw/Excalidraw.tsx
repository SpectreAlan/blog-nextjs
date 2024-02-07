'use client'
import React, {useState} from "react";
import dynamic from "next/dynamic";
const Excalidraw = dynamic(
    async () => (await import("@excalidraw/excalidraw")).Excalidraw,
    {
        ssr: false,
    },
);

const Draw = () => {
    return <Excalidraw langCode='zh-CN'/>;

}

export default Draw