import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  // useState to change the state of the Candidate type
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login: null,
    name: null,
    location: null,
    avatar_url: null,
    email: null,
    html_url: null,
    company: null,
    bio: null,
  });

  const [searchResult, setSearchResult] = useState<Candidate[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const findCandidates = async () => {
    const data: Candidate[] = await searchGithub();
    setSearchResult(data);
    await findOneCandidate(data[currentIndex].login || "");
  }

  const findOneCandidate = async (username: string) => {
    const data: Candidate = await searchGithubUser(username);
    setCurrentCandidate(data);
    console.log(data);
  }

  const candidateSelection = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates:Candidate[] = [];
      const storedCandidates = localStorage.getItem('selectedCandidate');
      if (typeof storedCandidates === 'string') {
        parsedCandidates = JSON.parse(storedCandidates);
      }
      parsedCandidates = [...parsedCandidates, currentCandidate];
      localStorage.setItem('selectedCandidate', JSON.stringify(parsedCandidates));
    } 

    if ((currentIndex + 1 ) < searchResult.length) {
      setCurrentIndex(currentIndex + 1);
      await findOneCandidate(searchResult[currentIndex + 1].login || "");
    } else {
      setCurrentIndex(0);
      await findCandidates();
    }
  }

  useEffect(() => {
      findCandidates();
}, []);

  return (
    <>
        <h1>CandidateSearch</h1>
        <CandidateCard 
          currentCandidate={currentCandidate}
          candidateSelection={candidateSelection}
        />
    </>
  );
};

export default CandidateSearch;
