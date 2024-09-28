import type Candidate from '../interfaces/Candidate.interface.tsx';
import { FaMinusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

type SavedCandidateCardProps = {
    removeFromStorage?: ((login: string | null) => void) | null;
};

const SavedCandidateCard = ({}: SavedCandidateCardProps) => {

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

    const removeCandidate = (login: string | null) => {
        if (login) {
            const updateCandidates = savedCandidates.filter(candidate => candidate.login !== login);
            setSavedCandidates(updateCandidates);
            localStorage.setItem('selectedCandidate', JSON.stringify(updateCandidates));
        }
    };

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
                                <td style={{textAlign: "center"}}>
                                    <button style={{width: "11vw", height: "auto"}} onClick={() => removeCandidate(person.login)}>
                                        <FaMinusCircle />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </>
    )
}

export default SavedCandidateCard;