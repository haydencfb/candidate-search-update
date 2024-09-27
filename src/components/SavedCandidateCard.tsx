import type Candidate from '../interfaces/Candidate.interface.tsx';
import { useState, useEffect } from "react";

const SavedCandidateCard = () => {

    const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        let parsedCandidates: Candidate[] = [];
        const storedCandidates = localStorage.getItem('selectedCandidate');
        console.log(typeof storedCandidates);
        if (typeof storedCandidates === 'string') {
            parsedCandidates = JSON.parse(storedCandidates);
            console.log(parsedCandidates);
            // setSavedCandidates([{
            //     login: "", 
            //     name: "",
            //     location: "",
            //     avatar_url: "",
            //     email: "",
            //     html_url: "",
            //     company: "",
            //     bio: "",
            // }]);
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
                    <tr>
                        <>
                        {
                            savedCandidates.map((person) => {
                                <>
                                    <td><img src={`${person.avatar_url}`} /></td>
                                    <td>{person.name} AKA {person.login}</td>
                                    <td>{person.location}</td>
                                    <td>{person.email}</td>
                                    <td>{person.company}</td>
                                    <td>{person.bio}</td>
                                    <td><button>Reject</button></td>
                                </>
                            })
                        }
                        </>
                    </tr>
                </tbody>
            </table>
        
        </>
    )
}

export default SavedCandidateCard;