export interface IUniversList {
  list: IUniverCard[];
}
export interface IUniverCard {
  id: string;
  name: string;
  links?: ILink[];
  address: string;
  site: string;
  phone: string;
  socials?: ISocial[];
  image: string;
}

export interface IUniverPage extends IUniverCard {
  title: string;
  university: string;
  studyForms: string[];
  language: string;
  disciplines: string[];
  degree: string;
  budgetPlaces: number;
  paidPlaces: number;
  description: string[];
}

interface ISocial {
  name: string;
  link: string;
}

interface ILink {
  name: string;
  link: string;
}
