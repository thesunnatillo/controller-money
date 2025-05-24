import { DataSource, DataSourceOptions } from "typeorm";
import { Config } from "../configs/configs";

export const AppDataSource = new DataSource({
    type: Config.database.type,
    host: Config.database.host,
    port: Config.database.port,
    username: Config.database.user,
    password: Config.database.password,
    database: Config.database.name,
    keepConnectionAlive: true,
    schema: "public",
    logging: false,
    migrations: [__dirname + '/migrations/**'],
    entities: [__dirname + "/entities/*.entity{.ts,.js}"],
    synchronize: false
} as DataSourceOptions)