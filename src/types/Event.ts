export type Event = {
name: string;
email: string;
adress:string;
phone:string;
cnpj: string;
profileImage: string;
description: string;
context: OngContext;

}

export enum OngContext {
  ALIMENTOS,
  UTENSILIOS_ADERECOS,
  DIREITOS_HUMANOS,
  MEIO_AMBIENTE,
  CULTURA,
  ANIMAIS,
  SAUDE,
  MORADIA,
  TRANSPORTE,
  EDUCACAO,
  OUTROS
};