import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { RequestOptions, Headers } from '@angular/http';
import { RequestObject } from './api.service';
import { ProdSetup } from 'src/app/erp/production/models';

export class ApiProduction {
    constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
    }
    private production: string = this.baseUrl + 'production/';

    //#region  GaugeType
    GetGaugeTypes() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GaugeTypes', {params: param});
    }
    AddGaugeType(record) {
        if (record !== undefined && record !== null) {

          const param = new HttpParams().set('gaugeType', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.production + 'AddGaugeType', null, {params: param});
        }
    }
    UpdateGaugeType(record) {
        if (record !== undefined && record !== null) {

          const param = new HttpParams().set('gaugeType', JSON.stringify(record))
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.production + 'UpdateGaugeType', null, {params: param});
        }
    }
    DeleteGaugeType(id: number) {
        if (id !== 0) {
          const param = new HttpParams().set('id', id.toString())
          .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
          return this.http.post(this.production + 'DeleteGaugeType', null, {params: param});
        }
    }
    //#endregion GaugeType
    //#region  Gauge
    GetGauges() {
    const param = new HttpParams().set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.production + 'Gauges', {params: param});
    }
    AddGauge(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddGauge', null, {params: param});
        }
    }
    UpdateGauge(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateGauge', null, {params: param});
        }
    }
    DeleteGauge(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteGauge', null, {params: param});
        }
    }
    //#endregion Gauge
    //#region  GaugeVariant
    GaugeVariants() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GaugeVariants', {params: param});
    }
    GetGaugeVariants(id) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetGaugeVariants', {params: param});
    }
    AddGaugeVariant(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddGaugeVariant', null, {params: param});
        }
    }
    UpdateGaugeVariant(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateGaugeVariant', null, {params: param});
        }
    }
    DeleteGaugeVariant(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteGaugeVariant', null, {params: param});
        }
    }
    //#endregion GaugeVariant
    //#region  Machine
    Machines() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'Machines', {params: param});
    }
    AddMachine(record) {
    if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddMachine', null, {params: param});
        }
    }
    UpdateMachine(record) {
    if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateMachine', null, {params: param});
        }
    }
    DeleteMachine(id: number) {
    if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteMachine', null, {params: param});
        }
    }
    //#endregion Machine
    //#region  MachineProductOperation
    MachineProductOperations() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'MachineProdOperations', {params: param});
    }
    GetMachineProdOperations(machine: number, model: number) {
        const param = new HttpParams().set('machineId', machine.toString())
        .set('modelID', model.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetMachineProdOperations', {params: param});
    }
    AddUpdateMachinePrdOpt(record) {
    if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddUpdateMachinePrdOpt', null, {params: param});
        }
    }
    DeleteMachinePrdOpt(id: number) {
    if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteMachinePrdOpt', null, {params: param});
        }
    }
    //#endregion  MachineProductOperation
    //#region  Operation
    Operations() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'Operations', {params: param});
    }
    GetOperations(machine: number, model: number) {
        const param = new HttpParams().set('machineId', machine.toString()).
        set('modelId', model.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetOperations', {params: param});
    }
    GetMultiOperations(machine: string, model: string) {
      const param = new HttpParams().set('machineIds', machine.toString()).
      set('modelIds', model.toString()).set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
      return this.http.get(this.production + 'GetMultiOperations', {params: param});
    }
    AddOperation(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddOperation', null, {params: param});
        }
    }
    UpdateOperation(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateOperation', null, {params: param});
        }
    }
    DeleteOperation(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteOperation', null, {params: param});
        }
    }
    //#endregion  Operation
    //#region  OperationProdParameter
    OperationProdParameters() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'OperationProdParameters', {params: param});
    }
    AddUpdateOperationPrdParam(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddUpdateOperationPrdParam', null, {params: param});
        }
    }
    DeleteOperationPrdParam(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteOperationPrdParam', null, {params: param});
        }
    }
    //#endregion  OperationProdParameter
    //#region  Products
    Products() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'Products', {params: param});
    }
    AddProduct(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddProduct', null, {params: param});
        }
    }
    UpdateProduct(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateProduct', null, {params: param});
        }
    }
    DeleteProduct(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteProduct', null, {params: param});
        }
    }
    //#endregion Products
    //#region  ProductFamily
    ProductFamilies() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'ProductFamilies', {params: param});
    }
    AddProductFamily(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddProductFamily', null, {params: param});
        }
    }
    UpdateProductFamily(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateProductFamily', null, {params: param});
        }
    }
    DeleteProductFamily(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteProductFamily', null, {params: param});
        }
    }

    //#endregion  ProductFamily
    //#region  ProductModels
    ProductModels() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'ProductModels', {params: param});
    }
    GetFinishPartByProdModelID(prodModelID) {
        const param = new HttpParams().set('ID', prodModelID)
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetFinishPartByProdModelID', {params: param});
    }
    AddProductModel(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddProductModel', null, {params: param});
        }
    }
    UpdateProductModel(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateProductModel', null, {params: param});
        }
    }
    DeletProductModel(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeletProductModel', null, {params: param});
        }
    }
    //#endregion  ProductModels
    //#region  Forges
    Forges() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'Forges', {params: param});
    }
    ForgesByProdModel(prodModel: number) {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID())
        .set('prodModel',prodModel.toString())
        return this.http.get(this.production + 'ForgesByProdModel', {params: param});
    }
    AddForge(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddForge', null, {params: param});
        }
    }
    UpdateForge(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateForge', null, {params: param});
        }
    }
    DeleteForge(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteForge', null, {params: param});
        }
    }
    //#endregion Forges
    //#region  FinishParts
    FinishParts() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'FinishParts', {params: param});
    }
    FinishPartsByMachines(machineIds) {
      const param = new HttpParams().set('machineIds', machineIds)
      .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
      return this.http.get(this.production + 'FinishPartsByMachines', {params: param});
    }
    FinishPartsByModel(prodModelID) {
      const param = new HttpParams().set('ID', prodModelID)
      .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
      return this.http.get(this.production + 'FinishPartsByModel', {params: param});
    }
    GetProdModelByFinPartID(ProdModelID) {
        const param = new HttpParams().set('ID', ProdModelID)
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetProdModelByFinPartID', {params: param});
    }
    AddFinishPart(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddFinishPart', null, {params: param});
        }
    }
    UpdateFinishPart(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateFinishPart', null, {params: param});
        }
    }
    DeleteFinishPart(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteFinishPart', null, {params: param});
        }
    }
    //#endregion FinishParts
    //#region  Inductor
    Inductors() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'Inductors', {params: param});
    }
    AddInductor(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddInductor', null, {params: param});
        }
    }
    UpdateInductor(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateInductor', null, {params: param});
        }
    }
    DeleteInductor(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteInductor', null, {params: param});
        }
    }
    //#endregion Inductor
    //#region  ProductParams
    ProductParams() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'ProductParams', {params: param});
    }
    AddProductParam(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddProductParam', null, {params: param});
        }
    }
    UpdateProductParam(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateProductParam', null, {params: param});
        }
    }
    DeleteProductParam(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteProductParam', null, {params: param});
        }
    }
    //#endregion ProductParams
    //#region  StageControlPlanHdrs
    StageControlPlanHdrs() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'StageControlPlanHdrs', {params: param});
    }
    AddStageControlPlanHdr(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddStageControlPlanHdr', null, {params: param});
        }
    }
    UpdateStageControlPlanHdr(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateStageControlPlanHdr', null, {params: param});
        }
    }
    DeleteStageControlPlanHdr(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteStageControlPlanHdr', null, {params: param});
        }
    }
    //#endregion StageControlPlanHdrs
    //#region  StageControlPlanDtls
    StageControlPlanDtls() {
        const param = new HttpParams().set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'StageControlPlanDtls', {params: param});
    }
    AddStageControlPlanDtl(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddStageControlPlanDtl', null, {params: param});
        }
    }
    UpdateStageControlPlanDtl(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record))
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateStageControlPlanDtl', null, {params: param});
        }
    }
    DeleteStageControlPlanDtl(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteStageControlPlanDtl', null, {params: param});
        }
    }
    //#endregion StageControlPlanDtls
    //#region  StageControlPlan
    StageControlPlanGet(id: number) {
        const param = new HttpParams().set('id', id.toString())
        .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetStageControlPlan', {params: param});
    }
    GetStageControlPlanDetails(machine: number, model: number) {
        const param = new HttpParams().set('machineID', machine.toString()).set('modelID', model.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetStageControlPlanDetails', {params: param});
    }
    GetSCPLines(record) {
        const param = new HttpParams().set('record', JSON.stringify(record)).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetSCPLines', {params: param});
    }
    StageControlPlans() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'StageControlPlans', {params: param});
    }
    AddStageControlPlans(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record)).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'AddStageControlPlans', null, {params: param});
        }
    }
    UpdateStageControlPlans(record) {
        if (record !== undefined && record !== null) {
        const param = new HttpParams().set('record', JSON.stringify(record)).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'UpdateStageControlPlans', null, {params: param});
        }
    }
    AddUpdateStageControlPlans(record) {
        if (record !== undefined && record !== null) {
         const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const param = new HttpParams().set('record', JSON.stringify(record)).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        const obj = {
            record : record,
            connName : this.authService.CompConn(),
            appUserId : this.authService.UserID()
        };
        //return this.http.post(this.production+'AddUpdateStageControlPlans',null,{params:param});
        return this.http.post(this.production + 'AddUpdateStageControlPlans', JSON.stringify(obj), {headers: headers});
        }
    }
    AddUpdateSCPlan(record) {
        if (record !== undefined) {
            const reqObj = new RequestObject();
            reqObj.ConnName = this.authService.CompConn();
            reqObj.AppUserID = this.authService.UserID();
            reqObj.Data = record;
            console.log(reqObj);
            return this.http.post(this.production + 'AddUpdateSCPlan', reqObj);
        }
    }
    DeleteStageControlPlans(id: number) {
        if (id !== 0) {
        const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.post(this.production + 'DeleteStageControlPlans', null, {params: param});
        }
    }

    GetNextStageCtrlPlanNo() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetNextStageCtrlPlanNo', {params: param});
    }
    //#endregion StageControlPlan

    //#region Operator Record
    OperatorRecords() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'OperatorRecords', {params: param});
    }
    AddUpdateOperatorRecord(record) {
        if (record !== undefined && record !== null) {
            const param = new HttpParams().set('record', JSON.stringify(record)).set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
            return this.http.post(this.production + 'AddUpdateOperatorRecord', null, {params: param});
        }
    }
    //#endregion Operator Record
    //region Product Setup
    GetProdSetup() {
        const param = new HttpParams().set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
        return this.http.get(this.production + 'GetProdSetup', {params: param});
    }

    SaveProdSetup(record: ProdSetup) {
        if (record !== undefined && record !== null) {
            record.ConnName = this.authService.CompConn();
            record.AppUserId = this.authService.UserID();
            return this.http.post(this.production + 'SaveProdSetup', record);
          }
    }

    //end region Product Setup
}
