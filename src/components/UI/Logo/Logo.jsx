import classes from './Logo.module.css'
import StyledLink from '../Link/StyledLink'


const Logo = () => {
    return (
        <div className={classes.myLogo}>
            <StyledLink to="/">
                <h2>AnimeDb</h2>
            </StyledLink>
        </div>
        
    )

}

export default Logo