import ProgressBar from 'react-bootstrap/ProgressBar';


export const MangaListStatisticLinear = () => {
    return (
        <ProgressBar style={{borderRadius:0, width:"640px", height:"15px", fontWeight:"lighter"}}>
            <ProgressBar label={10} style={{backgroundColor:"#df52b4"}} now={50} key={0} />
            <ProgressBar label={2} style={{backgroundColor:"#b78bc7"}} now={13} key={2} />
            <ProgressBar label={3} style={{backgroundColor:"#edacd9"}} now={33} key={3} />
        </ProgressBar>
    );
}