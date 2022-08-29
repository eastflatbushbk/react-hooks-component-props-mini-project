import React from "react";
import Article from "./Article"

function ArticleList ({article}) {
     const listElements = article.map((item) =>{
        return <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>
     })
    return (
        <main>{listElements}</main>
    )
}
export default ArticleList;