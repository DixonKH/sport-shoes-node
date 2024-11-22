import {Request, Response} from 'express';  
import { T } from "../libs/types/common";

const memberController: T = {};

memberController.goHome = async (req: Request, res: Response) => {
  try {
    res.send("You are home page!");
  } catch(err) {
     console.log("Error: Go Home: ", err);
     
  }
}

memberController.getLogin = async (req: Request, res: Response) => {
    try {
      res.send("You are Login page!");
    } catch(err) {
       console.log("Error: Login: ", err);
       
    }
  }

  memberController.getSignup = async (req: Request, res: Response) => {
    try {
      res.send("You are Signup page!");
    } catch(err) {
       console.log("Error: Signup: ", err);  
    }
  }

  export default memberController;  