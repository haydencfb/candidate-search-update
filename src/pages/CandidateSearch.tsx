import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateInterface from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  return (
    <>
        <h1>CandidateSearch</h1>
        <CandidateInterface />  
    </>
  );
};

export default CandidateSearch;
