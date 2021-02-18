import { uuid } from "uuidv4";

export class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        // Aqui eu pego todas propriedades do construtor e jogo nas propriedades da minha classe "this"
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}