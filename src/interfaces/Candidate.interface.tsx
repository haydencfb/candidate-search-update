// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly Name: string | null;
    // readonly Username: string | null;
    readonly Value: string | null;
    readonly Visibility: string | null;
    readonly Selected_Repositories_URL: string | null;
}