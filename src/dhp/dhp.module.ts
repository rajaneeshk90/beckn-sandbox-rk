import { Module } from "@nestjs/common";
import { PharmacyModule } from "src/pharmacy/pharmacy.module";
import { ConsultationModule } from "src/consultation/consultation.module";
import { DiagnosticsModule } from "src/diagnostics/diagnostics.module";
import { DHPController } from "./dhp.controller";
import { DHPService } from "./dhp.service";
import { AmbulanceModule } from './ambulance/ambulance.module';

@Module({
    imports: [PharmacyModule, ConsultationModule, DiagnosticsModule, AmbulanceModule],
    controllers: [DHPController],
    providers: [DHPService],
})
export class DHPModule {
    /* body */
}
