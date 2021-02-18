import { MailtrapMailProvider } from "../../Providers/Implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../Repositories/Implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export {
    createUserUseCase,
    createUserController
}