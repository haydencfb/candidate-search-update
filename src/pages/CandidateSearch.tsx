import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  // 
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login: "",
    name: "",
    location: "",
    avatar_url: "",
    email: "",
    html_url: "",
    company: "",
  });


  return (
    <>
        <h1>CandidateSearch</h1>
        <CandidateCard />
    </>
  );
};

export default CandidateSearch;
