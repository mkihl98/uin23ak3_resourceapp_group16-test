import { useParams } from 'react-router-dom'
import {resources} from '../assets/Ressursarkiv'

export default function ContentPage({category}){
    const {id} = useParams()
    return(
        
           <main>
                <Title category={id} />
                {resources.map(resource =>
                    <InfoCard 
                    category={resource.category}
                    title={resource.title}
                    
                    
                    />
                    )}
           </main>
        
    )
}