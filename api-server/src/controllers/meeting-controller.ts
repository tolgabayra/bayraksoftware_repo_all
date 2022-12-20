import { Request, Response } from "express";
import { MeetingService } from "../services/meeting-service"
import {StatusCodes} from "http-status-codes";

export class MeetingController {

    private meetingService = new MeetingService();


    public createMeeting = async (req: Request, res: Response): Promise<void> => {

    }
    public deleteMeeting = async (req: Request, res: Response): Promise<void> => {

    }
    public updateMeeting = async (req: Request, res: Response): Promise<void> => {

    }
    public showMeeting = async (req: Request, res: Response): Promise<void> => {

    }
    public listMeeting = async (req: Request, res: Response): Promise<void> => {

    }

}