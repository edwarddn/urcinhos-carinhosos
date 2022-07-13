export interface FarmaceuticoModel {
  id: string;
  nome: string;
  aniver: string;
  cpf: string;
  promocaoDia: string;
  idade?: string;
  documento?: string;
  documentoValido?: boolean;
}
