import { CreditPersonalModule } from "src/personal-credit/credit-personal.module";
import { CreditInvoiceModule } from "src/invoice-based-credit/credit-invoice.module";
import { Module } from "@nestjs/common";

import { FinancialServicesController } from "./financial-services.controller";
import { FinancialServicesService } from "./financial-services.service";
import { MutualFundsModule } from "src/mutual-funds/mutual-funds.module";

@Module({
    imports: [CreditPersonalModule, CreditInvoiceModule, MutualFundsModule],
    controllers: [FinancialServicesController],
    providers: [FinancialServicesService],
})
export class FinancialServicesModule {
    /* body */
}
