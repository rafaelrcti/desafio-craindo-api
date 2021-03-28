import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const requestHeader = JSON.stringify(request.headers);
    const { user_id } = JSON.parse(requestHeader);

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
