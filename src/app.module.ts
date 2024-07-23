import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { MobilityModule } from "./mobility/mobility.module";
import { FinancialServicesModule } from "./financial-services/financial-services.module";
import { DentModule } from "./dent/dent.module";
import { DHPModule } from "./dhp/dhp.module";
import { DsepModule } from "./dsep/dsep.module";

@Module({
    imports: [MobilityModule, CommonModule, FinancialServicesModule, DsepModule, DentModule, DHPModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    /* body */
}
