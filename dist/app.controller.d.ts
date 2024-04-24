/// <reference types="cookie-parser" />
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
export declare class AppController {
    private readonly appService;
    private jwtService;
    constructor(appService: AppService, jwtService: JwtService);
    register(name: string, surname: string, email: string, password: string, role: string): Promise<import("./user.entity").User>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        name: string;
        surname: string;
        email: string;
        role: string;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
