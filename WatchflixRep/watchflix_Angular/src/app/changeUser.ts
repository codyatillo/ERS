export class changeUser{
    constructor(
        public username: string,
        public blocked: boolean, 
        public subscribe: boolean,
        public activity: boolean
        
    ){}
}