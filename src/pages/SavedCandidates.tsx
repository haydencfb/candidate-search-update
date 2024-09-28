import SavedCandidateCard from "../components/SavedCandidateCard";

const SavedCandidates = () => {
  
  const storedCandidates = localStorage.getItem('selectedCandidate');


  if (storedCandidates !== null && storedCandidates.length > 0) {
    return (
      <>
        <h1>Potential Candidates</h1>
        <SavedCandidateCard />
      </>
    );
  } else {
    return (
      <>
        <h1>Potential Candidates</h1>
        <h2>No Potential Candidates to Display!</h2>
      </>
    );
  }
};

export default SavedCandidates;
