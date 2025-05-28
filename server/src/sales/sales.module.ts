import { Module } from "@nestjs/common";
import { SalesController } from "./sales.controller";
import { SalesService } from "./sales.service";
import { PgService } from "src/database/pg.service";
import { DatabaseModule } from "src/database/pg.module";

@Module({
    imports: [DatabaseModule],
    controllers: [SalesController],
    providers: [SalesService],
})
export class SalesModule {}