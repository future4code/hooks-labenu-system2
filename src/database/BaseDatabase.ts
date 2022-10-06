import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDatabase {	
    protected  static connection = knex ({
        client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port:  3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                multipleStatements: true
            },
    });  

    abstract TABLE_NAME: string;

    protected setNewObject = async (item: any): Promise<void> => {
        await  BaseDatabase.connection(this.TABLE_NAME).insert(item);
    };

    protected getObjectBySpecifics = async (param: any, value: any): Promise<any> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .where({param: value});
        
            return result;
    };

    protected setUpdate = async(WProp: string, WValue: any, UProp: string, UValue: any): Promise<void> => {
        await BaseDatabase.connection(this.TABLE_NAME)
            .where(`${WProp}`, `${WValue}`)
            .update(`${UProp}`,`${UValue}`);
    };
};