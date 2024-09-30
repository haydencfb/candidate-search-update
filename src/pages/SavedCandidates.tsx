import SavedCandidateCard from "../components/SavedCandidateCard";

const SavedCandidates = () => {
  
  const storedCandidates = localStorage.getItem('selectedCandidate');

  return (
    <>
      <h1>Potential Candidates</h1>
        {storedCandidates !== null && storedCandidates !== "[]" ? (
          <SavedCandidateCard />
        ) : (
          <h2>No Potential Candidates Saved!</h2>
        )}
    </>
  );
};

export default SavedCandidates;
