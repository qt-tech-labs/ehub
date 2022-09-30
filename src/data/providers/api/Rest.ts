import Constants from "../../../utils/Constants"
import IRest, { AppError, IError, IResponse, MyResponse } from "./IRest"
class RestDefault implements IRest {
    private static instance: IRest
    private constructor() { }

    public static GetInstance(): IRest {
        if (!this.instance) {
            this.instance = new RestDefault()
        }
        return this.instance
    }

    private buildPath(path: string): string {
        return Constants.BaseURL + path
    }

    async get<T>(path: string): Promise<T> {
        const fullPath = this.buildPath(path)

        const response = await fetch(fullPath)
        if (!response.ok) {
            throw new AppError("Request failed: " + response.status, response.text())
        }
        return response.json()
    }
    post<T>(path: string, data: any): Promise<IResponse<T, IError>> {
        throw new Error("Method not implemented.")
    }
    delete<T>(path: string, data: any): Promise<IResponse<T, IError>> {
        throw new Error("Method not implemented.")
    }
}


export { RestDefault }