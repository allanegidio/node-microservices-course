import { User } from "../../Entities/User";
import { IMailProvider } from "../../Providers/IMailProvider";
import { IUsersRepository } from "../../Repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    private usersRepository: IUsersRepository; 
    private mailProvider: IMailProvider;

    constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists)
            throw new Error('User already exists.');

        const user = new User(data);

        await this.usersRepository.save(user);

        let mail = {
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Equipe do meu APP',
                email: 'equipe@meuapp.com'
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p> Você já pode fazer login em nossa plataforma.</p>'
        }

        await this.mailProvider.sendMail(mail);
    }
}