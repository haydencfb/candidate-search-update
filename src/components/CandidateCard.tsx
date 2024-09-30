import type Candidate from '../interfaces/Candidate.interface.tsx';
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

type CandidateCardProps = {
    currentCandidate: Candidate;
    candidateSelection: ((isSelected: boolean) => void);
}

const CandidateCard = ({currentCandidate, candidateSelection}: CandidateCardProps) => {
    return (
        <>
            <section style={{backgroundColor: "black", borderRadius: "5px"}}>
                <figure style={{display: "flex", justifyContent: "center"}}>
                    <img src={`${currentCandidate.avatar_url}`} style={{height: "200px", width: "auto"}} />
                </figure>
                <article style={{textAlign: "center"}}>
                    <h2>{currentCandidate.name} aka {currentCandidate.login}</h2>
                    <p>Location: {currentCandidate.location}</p>
                    <p>Email: {currentCandidate.email}</p>
                    <p>Company: {currentCandidate.company}</p>
                    <p>Bio: {currentCandidate.bio}</p>
                </article>
            </section>
            <section>
                <button style={{margin: "50px", backgroundColor: "red", width: "200px"}}>
                    <FaMinusCircle onClick={() => candidateSelection(false)} />
                </button>
                <button style={{margin: "50px", backgroundColor: "green", width: "200px"}}>
                    <IoMdAddCircle onClick={() => candidateSelection(true)} />
                </button>
            </section>
        </>
    )
}

export default CandidateCard;