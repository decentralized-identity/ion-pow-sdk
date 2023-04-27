export default class IonProofOfWork {
    static submitIonRequest(getChallengeUri:string, solveChallengeUri:string, requestBody:any): Promise<void>;
    static submitIonRequestUntilSuccess(getChallengeUri:string, solveChallengeUri:string, requestBody:any): Promise<void>;
}