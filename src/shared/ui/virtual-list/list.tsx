import React, {CSSProperties, FC, ReactNode, useState} from "react";

interface IProps{
    className?:string
    numItems:number,
    itemHeight:number,
    renderItem:(index:number, style:CSSProperties)=>ReactNode,
    windowHeight:number,
}

const VirtualizedList:FC<IProps> = (props) => {
    const { numItems, className, itemHeight, renderItem, windowHeight } = props;
    const [scrollTop, setScrollTop] = useState(0);

    const innerHeight = numItems * itemHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        numItems - 1, // don't render past the end of the list
        Math.floor((scrollTop + windowHeight) / itemHeight)
    );

    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
        items.push(
            renderItem(
                 i,
                 {
                    position: "absolute",
                    top: `${i * itemHeight}px`,
                }
    )
        );
    }

    const onScroll = (e:React.UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop);

    return (
        <div className={className} style={{ overflowY: "auto" }} onScroll={onScroll}>
            <div
                style={{ position: "relative", height: `${innerHeight}px` }}
            >
                {items}
            </div>
        </div>
    );
};

export default VirtualizedList;
