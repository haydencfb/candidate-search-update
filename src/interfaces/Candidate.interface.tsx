export default interface Candidate {
    // username 
    readonly login: string | null;

    // name
    readonly name: string | null;

    // location
    readonly location: string | null;

    // avatar
    readonly avatar_url: string | null; 

    // email
    readonly email: string | null; 

    // html url
    readonly html_url: string | null; 

    // company
    readonly company: string | null;
    
    // bio
    readonly bio: string | null;
}