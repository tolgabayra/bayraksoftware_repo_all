import Crypto from "crypto"
import Jwt from "jsonwebtoken";

export class Helper {

    public GenerateAccessToken(payload: object){
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY ?? "SECRET",{expiresIn: "3d"})
    }


    public GenerateRefreshToken(payload: object){
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY ?? "SECRET")
    }

    public HashPassword(payload: string){
        return Crypto.createHash("sha256").update(payload).digest("base64")
    }


}