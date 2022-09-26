import { Panel } from "components/UI/Panel/Panel";
import { PanelWithLink } from "components/UI/Panel/Panel";
import styled from "styled-components";


const Container = styled.div`
    border: 2px solid red;
    display:  flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;

const PosterImage = styled.div`

    img {
        height:70px;
        max-width:55px;
    }
`;



export const Favorites = ({ poster_image }) => {
    const [favorites, setFavorites] = useState([]) 
    const [fetchfavorites,, isLoading, error] = useFetch(async () => {
        const response = await AnimeSerivce.getComments(id)
        setFavorites(response.result)
    })

    return (
        <Container>
            <PanelWithLink title="Favorites" />
            {favorites.map(show => {
                return <PosterImage
                    poster_image={show.poster_image}
                />
            })}
        </Container>
    )
}
