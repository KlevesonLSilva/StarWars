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
    
}