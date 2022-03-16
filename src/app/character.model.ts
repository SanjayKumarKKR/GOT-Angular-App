export class Character {
    constructor( id: number,firstName: string,lastName: string, fullName: string, title: string, family: string, image: string, imageUrl: string){
       this.id =id;
       this.firstName =firstName;
       this.lastName =lastName;
       this.fullName = fullName;
       this.title =title;
       this.family =family;
       this.image =image;
       this.imageUrl =imageUrl;
    }
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    family: string;
    image: string;
    imageUrl: string;
    
}