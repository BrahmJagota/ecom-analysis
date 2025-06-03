import { Injectable } from "@nestjs/common";
import { GoogleGenerativeAI } from '@google/generative-ai';
@Injectable()
export class AiService {
    private genAI: GoogleGenerativeAI;
    private model: any;

    constructor() {
        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    }


    //JUST FOR TESTING
    async generateResonse(body: string) {
        try {
            const promt = `your promt`;
            const result = await this.model.gennerateContent(promt);
            const response = await result.response();
            const text = response.text();
            const messageResponse= {
                message: text,
            }
            return messageResponse;
        } catch (e) {
            console.log(e);
        }
    }
}