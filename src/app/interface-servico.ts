export interface Planetas {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: number,
    population: number,

}

export interface PlanetasPaginado {
     count : number,
	 next :  string ,
	 previous : string,
	 results: Planetas[]
}

export interface Personagens{
    name:string,
    height:number,
    mass:number,
    hair_color:string,
    skin_color:string,
    eye_color:string,
    birth_year:string,
    gender:string,
    
}

export interface PersonagensPaginado {
    count : number,
    next :  string ,
    previous : string,
    results: Personagens[]
}