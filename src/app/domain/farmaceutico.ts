import { PessoaFisica } from './pessoa-fisica';

export interface Farmaceutico extends PessoaFisica {
  promocaoDia: string;
}
