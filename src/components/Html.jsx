import { ressurser } from '../assets/Ressursarkiv'

export default function Html() {
    return(
        <div>
            <h2 id="">HTML</h2>

            <ul>{ressurser.map((item,index) => item.category === "html" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>

    )
}