import ProgressBar from 'react-bootstrap/ProgressBar';



export const AnimeListStatisticLinear = () => {
    return (
        <ProgressBar style={{borderRadius:0, width:"640px", height:"15px", fontWeight:"lighter"}}>
            <ProgressBar label={35} style={{backgroundColor:"#4682b4"}} now={35} key={1} />
            <ProgressBar label={20} style={{backgroundColor:"#79A9CF"}} now={20} key={2} />
            <ProgressBar label={11} style={{backgroundColor:"#b7c8d6"}} now={10} key={3} />
        </ProgressBar>
    );
}