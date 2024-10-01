import SavedCandidateCard from "../components/SavedCandidateCard";

const SavedCandidates = () => {
  
  const storedCandidates = localStorage.getItem('selectedCandidate');

  return (
    <>
      <h1>Potential Candidates</h1>
      <button style={{marginBottom: "25px"}} onClick={() => localStorage.clear()}>Clear localStorage</button>
        {storedCandidates !== null && storedCandidates !== "[]" ? (
          <SavedCandidateCard />
        ) : (
          <h2>No Potential Candidates Saved!</h2>
        )}
    </>
  );
};

export default SavedCandidates;
