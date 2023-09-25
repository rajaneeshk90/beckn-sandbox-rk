import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { PharmacyApiService } from "src/pharmacy/pharmacy-api.service";
import { ConsultationApiService } from "src/consultation/consultation-api.service";
import { Injectable } from "@nestjs/common";
import { DHPApiInterface } from "./dhp-api.interface";
import { DHPTypeEnum } from "./dhp-type.enum";
import { DiagnosticsApiService } from "src/diagnostics/diagnostics-api.service";

@Injectable()
export class DHPService {
    get(domain: string): DHPApiInterface {
        switch (domain) {
            case DHPTypeEnum.DHPPHARMACY:
                return new PharmacyApiService();
            case DHPTypeEnum.DHPCONSULTATION:
                return new ConsultationApiService();
            case DHPTypeEnum.DHPDIAGNOSTICS:
                return new DiagnosticsApiService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
