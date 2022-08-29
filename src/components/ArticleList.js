import React from "react";
import Article from "./Article"

function ArticleList ({posts}) {
     const listElements = posts.map((item) =>{
        return <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>
     })
    return (
        <main>{listElements}</main>
    )
}
export default ArticleList;