import { Request, Response } from "express";
import createUser from "../services/createUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "marcioestevao@msn.com",
    password: "123456",
    techs: [
      "React",
      "React Native",
      "Node",
      {
        title: "javascript",
        experience: 100,
      },
    ],
  });

  return response.json({ message: "Hello World New" });
}
