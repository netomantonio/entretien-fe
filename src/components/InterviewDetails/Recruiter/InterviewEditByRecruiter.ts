export class InterviewEditByRecruiter {
  id: number;
  candidateName: string;
  managerName: string;
  companyName: string;
  startingAt: string;
  score: number;
  recruiterObservation: string;
  managerObservation: string;
  candidateObservation: string;

  constructor(
    id: number,
    candidateName: string,
    managerName: string,
    companyName: string,
    startingAt: string,
    score: number,
    recruiterObservation: string,
    managerObservation: string,
    candidateObservation: string
  ) {
    this.id = id;
    this.candidateName = candidateName;
    this.managerName = managerName;
    this.companyName = companyName;
    this.startingAt = startingAt;
    this.score = score;
    this.recruiterObservation = recruiterObservation;
    this.managerObservation = managerObservation;
    this.candidateObservation = candidateObservation;
  }

  // Adicione métodos adicionais conforme necessário
}
