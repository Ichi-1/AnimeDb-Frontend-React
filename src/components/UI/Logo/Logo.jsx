import classes from './Logo.module.css'
import StyledLink from 'components/UI/Link/StyledLink'


export const Logo = () => {
    return (
        <div className={classes.myLogo}>
            <StyledLink style={{color:'white'}} to="/">
                <h2>MyAnimeDatabase</h2>
            </StyledLink>
        </div>
        
    )

}

