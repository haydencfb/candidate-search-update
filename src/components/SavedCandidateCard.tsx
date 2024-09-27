import type Candidate from '../interfaces/Candidate.interface.tsx';
import { useState, useEffect } from "react";

type SavedCandidateCardProps = {
    candidateSelection: ((isSelected: boolean) => void);
}


const SavedCandidateCard = ({candidateSelection}: SavedCandidateCardProps) => {

    const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        let parsedCandidates: Candidate[] = [];
        const storedCandidates = localStorage.getItem('selectedCandidate');
        console.log(typeof storedCandidates);
        if (typeof storedCandidates === 'string') {
            parsedCandidates = JSON.parse(storedCandidates);
            console.log(parsedCandidates);
        }
        setSavedCandidates(parsedCandidates);
        console.log(savedCandidates);
    }, []);

    return (
        <>

            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Bio</th>
                        <th>Reject</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        savedCandidates.map((person) => (
                            <tr key={person.login}>
                                <td style={{textAlign: "center"}}><img src={`${person.avatar_url}`} style={{width: "11vw"}} /></td>
                                <td>{person.name} AKA {person.login}</td>
                                <td>{person.location}</td>
                                <td>{person.email}</td>
                                <td>{person.company}</td>
                                <td>{person.bio}</td>
                                <td style={{textAlign: "center"}}><button onClick={() => candidateSelection(false)}>Reject Me</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </>
    )
}

export default SavedCandidateCard;