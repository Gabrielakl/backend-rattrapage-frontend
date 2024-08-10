import Technics from './technics';

export interface Pokemon {
    id: string;
    health: number;
    type: string;
    name: string;
    technics: Technics[];
}
