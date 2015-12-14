class NameService {
    constructor(private name: any) { }

    getFullname = (prefix:string) => prefix + this.name;
}

var nameService = new NameService("Quinntyne Brown");

// fat arrow will return the right side automatically
// should alert 'Mr. Quinntyne Brown'
// you can remove brackets ( ) if you leave out the type ':string'
alert(nameService.getFullname("Mr. "));
