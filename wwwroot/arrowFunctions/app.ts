//https://channel9.msdn.com/Blogs/One-Dev-Minute/Arrow-Functions-in-JavaScript
//https://aka.ms/arrowfunctions

class NameService {
    constructor(private name: any) { }

    getFullname = (prefix:string) => prefix + this.name;
}

var nameService = new NameService("Quinntyne Brown");

// return is implicit when using the arrow function and single line right side
// return is explicit if right side is more than one line
// should alert 'Mr. Quinntyne Brown'
// you can remove brackets ( ) if you leave out the type ':string'
alert(nameService.getFullname("Mr. "));
