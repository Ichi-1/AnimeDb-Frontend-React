import classes from './Logo.module.css'
import StyledLink from 'components/UI/Link/StyledLink'


export const Logo = () => {
    return (
        <div className={classes.myLogo}>
            <StyledLink to="/">
                <h2>AnimeDb</h2>
            </StyledLink>
        </div>
        
    )

}

