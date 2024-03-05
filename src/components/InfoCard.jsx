import { useState } from "react";
export default function InfoCard({category, title}){
    const [resource, setresource] = useState({
        title: title,
    })
return(
    <article>
        <a href="#">{category}</a>
        <h3>{title}</h3>
    </article>
)

}