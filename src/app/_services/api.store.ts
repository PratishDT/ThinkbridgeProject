import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Supplier, SupplierCategory, StorageLocation, Bin, StoreSetup,
         Item, ItemCategory, ItemGroup, ItemAssembly, ItemVariant, RequestParam,
        ItemSpecificationLabel, ItemSpecification, PurchaseOrder, GoodReceipt, ItemJournal,  StockMgmt,  PreClosePO,ForgerStock, ReportCategory, ForgerInvoice, SubContractorStockManagement, ChildPartMaster, graListing } from 'src/app/erp/store/models';
import { preclosereport } from '../erp/ppc-mm-reports/model';
import { ReportS7f4balance } from '../erp/sales/models';

export class ApiStore {

  constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
  }

  private apiPath: string = this.baseUrl + 'Store/';
  //#region Cancel
  CancelGra(id: number ,CancellationReason:string) {
    const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn()).set('CancellationReason',CancellationReason)
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'CancelGra', { params: param });
  }
  //#endregion Cancel
  //#region Stock Management
  ForgingList(custNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('custNo', custNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ForgingList', { params: param });
  }
  FinishingList(customerNo,itemNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('customerNo', customerNo)
      .set('itemNo', itemNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'FinishingList', { params: param });
  }
  StockManagementSheet(dialogData: StockMgmt) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'StockManagementSheet', dialogData);
  }
  SubStockManagementSheet(dialogData: SubContractorStockManagement) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'subStockManagementSheet', dialogData);
  }
  SubStockManagementSummary(dialogData: SubContractorStockManagement) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'subStockManagementSheet', dialogData);
  }
  StockManagementSummary(dialogData: StockMgmt) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'StockManagementSheetsSummary', dialogData);
  }
  RejStockManagementRejectionSummary(dialogData: StockMgmt) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'RejStockManagementSheet', dialogData);
  }
  ForgerStockSheet(dialogData: ForgerStock) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ForgerStockSheet', dialogData);
  }
  ReportStockMgmtExport(request: StockMgmt) {

    const options = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),

      // Ignore this part or  if you want full response you have
      // to explicitly give as 'boby'as http client by default give res.json()
      observe: 'response' as 'body',

      // have to explicitly give as 'blob' or 'json'
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'ReportStockMgmtExport', request, { responseType: 'blob' as 'blob' });
  }
  SubReportStockMgmtExport(request: SubContractorStockManagement) {

    const options = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),

      // Ignore this part or  if you want full response you have
      // to explicitly give as 'boby'as http client by default give res.json()
      observe: 'response' as 'body',

      // have to explicitly give as 'blob' or 'json'
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'SubReportStockMgmtExport', request, { responseType: 'blob' as 'blob' });
  }
  ReportForgerStockExport(request: ForgerStock) {

    const options = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),

      // Ignore this part or  if you want full response you have
      // to explicitly give as 'boby'as http client by default give res.json()
      observe: 'response' as 'body',

      // have to explicitly give as 'blob' or 'json'
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'ReportForgerStockExport', request, { responseType: 'blob' as 'blob' });
  }
  //#endregion Stock Management

  //#region Forger Invoice Against Customer

  ForgerInvoiceSheet(dialogData: ForgerInvoice) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ForgerInvoiceSheet', dialogData);
  }
  ForgerPendingInvoiceSheet(dialogData: ForgerInvoice) {
    dialogData.AppUserId = this.authService.UserID(); 
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ForgerPendingInvoiceSheet', dialogData);
  }
  BalanceForgerPendingInvoiceSheet(dialogData: ReportS7f4balance) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ForgerPendingInvoiceSheet', dialogData);
  }
  ReportForgerInvoiceExport(request: ForgerInvoice) {

    const options = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),

      // Ignore this part or  if you want full response you have
      // to explicitly give as 'boby'as http client by default give res.json()
      observe: 'response' as 'body',

      // have to explicitly give as 'blob' or 'json'
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'ReportForgerInvoiceExport', request, { responseType: 'blob' as 'blob' });
  }
  //#endregion Forger Invoice Against Customer

  //#region StoreSetup Management
  StoreSetupGet() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'StoreSetupGet', { params: param });
  }
  StoreSetupAddUpdate(record: StoreSetup) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'StoreSetupAddUpdate', record);
    }
  }
  //#endregion StoreSetup Management

  //#region Supplier Management
  SupplierList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierList', { params: param });
  }

  DeliverySupplierList(ID: number) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliverySupplierList', { params: param });
  }
  TransporterList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'TransporterList', { params: param });
  }
  SubcontratorList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SubcontractorList', { params: param });
  }
  SupplierByCategoryList(category: string) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('category', category)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierList', { params: param });
  }
  SupplierNoNameList(all: boolean) {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('all', all.toString())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierNoNameList', { params: param });
  }
  GetNextSupCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextSupCode', { params: param });
  }
  GetNextSubContCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextSubContCode', { params: param });
  }
  SupplierCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierCount', { params: param });
  }
  SupplierGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierGet', { params: param });
  }
  SupplierDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierDelete', { params: param });
  }
  SupplierAddUpdate(record: Supplier) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'SupplierAddUpdate', record);
    }
  }
  //#endregion Supplier Management
  //#region SupplierCategory Management
  SupplierCategoryList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierCategoryList', { params: param });
  }
  SupplierCategoryCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierCategoryCount', { params: param });
  }
  SupplierCategoryGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierCategoryGet', { params: param });
  }
  SupplierCategoryDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierCategoryDelete', { params: param });
  }
  SupplierCategoryAddUpdate(record: SupplierCategory) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'SupplierCategoryAddUpdate', record);
    }
  }
  //#endregion SupplierCategory Management
  //#region StorageLocation Management
  StorageLocationList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'StorageLocationList', { params: param });
  }
  StorageLocationCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'StorageLocationCount', { params: param });
  }
  StorageLocationGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'StorageLocationGet', { params: param });
  }
  StorageLocationDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'StorageLocationDelete', { params: param });
  }
  StorageLocationAddUpdate(record: StorageLocation) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'StorageLocationAddUpdate', record);
    }
  }
  //#endregion StorageLocation Management
  //#region Bin Management
  BinList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BinList', { params: param });
  }
  BinLocationList(location) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('location', location)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BinLocationList', { params: param });
  }
  GetLocationBins(location) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('location', location)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetLocationBins', { params: param });
  }
  BinCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BinCount', { params: param });
  }
  BinGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BinGet', { params: param });
  }
  BinDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'BinDelete', { params: param });
  }
  BinAddUpdate(record: Bin) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'BinAddUpdate', record);
    }
  }
  //#endregion Bin Management
  //#region Item Management
  ItemList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemList', { params: param });
  }
  ItemByCategoryGroupList(category, group) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('category', category).set('group', group)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryGroupList', { params: param });
  }


  ItemCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCount', { params: param });
  }
  ItemGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemGet', { params: param });
  }
  ItemDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemDelete', { params: param });
  }
  ItemAddUpdate(record: Item) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemAddUpdate', record);
    }
  }
  //#endregion Item Management
  //#region ItemGroup Management
  ItemGroupList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemGroupList', { params: param });
  }
  ItemCategoryGroupList(category) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('category', category)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryGroupList', { params: param });
  }
  ItemGroupCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemGroupCount', { params: param });
  }
  ItemGroupGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemGroupGet', { params: param });
  }
  ItemGroupAddUpdate(record: ItemGroup) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemGroupAddUpdate', record);
    }
  }
  ItemGroupDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemGroupDelete', { params: param });
  }
  //#endregion ItemGroup Management
  //#region ItemCategory Management
  ItemCategoryList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryList', { params: param });
  }
  ItemCategoryCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryCount', { params: param });
  }
  ItemCategoryGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryGet', { params: param });
  }
  ItemCategoryAddUpdate(record: ItemCategory) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemCategoryAddUpdate', record);
    }
  }
  ItemCategoryDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryDelete', { params: param });
  }
  //#endregion ItemCategory Management
  //#region ItemVariant Management
  ItemVariantList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemVariantList', { params: param });
  }
  ItemVariantByItemList(item) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('item', item)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemVariantByItemList', { params: param });
  }
  ItemVariantCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemVariantCount', { params: param });
  }
  ItemVariantGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemVariantGet', { params: param });
  }
  ItemVariantDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemVariantDelete', { params: param });
  }
  ItemVariantAddUpdate(record: ItemVariant) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemVariantAddUpdate', record);
    }
  }
  //#endregion ItemVariant Management
  //#region ItemAssembly Management
  ItemAssemblyList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemAssemblyList', { params: param });
  }
  ItemAssemblyCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemAssemblyCount', { params: param });
  }
  ItemAssemblyGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemAssemblyGet', { params: param });
  }
  ItemAssemblyDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemAssemblyDelete', { params: param });
  }
  ItemAssemblyAddUpdate(record: ItemAssembly) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemAssemblyAddUpdate', record);
    }
  }
  //#endregion ItemAssembly Management
  //#region ItemSpecificationLabel Management
  ItemSpecificationLabelList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationLabelList', { params: param });
  }
  ItemSpecificationLabelCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationLabelCount', { params: param });
  }
  ItemSpecificationLabelGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationLabelGet', { params: param });
  }
  ItemSpecificationLabelSearch(searchText: string) {
    const param = new HttpParams().set('searchText', searchText).set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationLabelSearch', { params: param });
  }
  ItemSpecificationLabelDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationLabelDelete', { params: param });
  }
  ItemSpecificationLabelAddUpdate(record: ItemSpecificationLabel) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID()
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemSpecificationLabelAddUpdate', record);
    }
  }
  //#endregion ItemSpecificationLabel Management
  //#region ItemSpecification Management
  ItemSpecificationList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationList', { params: param });
  }
  ItemSpecsByCategoryItem(category, item) {
    const param = new HttpParams()
      .set('category', category)
      .set('item', item)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecsByCategoryItem', { params: param });
  }
  ItemSpecificationGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationGet', { params: param });
  }
  ItemSpecificationSearch(searchText: string) {
    const param = new HttpParams().set('searchText', searchText).set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationSearch', { params: param });
  }
  ItemSpecificationAddUpdate(record: ItemSpecification) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID()
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemSpecificationAddUpdate', record);
    }
  }
  ItemSpecificationDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemSpecificationDelete', { params: param });
  }
  //#endregion ItemSpecification Management
  //#region GoodsReceipt Management
  GoodReceiptList() {
    const param = new HttpParams()
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GoodReceiptList', { params: param });
  }
  PostGoodReceiptList() {
    const param = new HttpParams()
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostGoodReceiptList', { params: param });
  }
  GetNextGRACode(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextGRACode', { params: param });
  }
  CustSupPOList(customerNo, supplierNo, item, category, code) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('customerNo', customerNo).set('supplierNo', supplierNo)
      .set('item', item).set('code', code)
      .set('category', category)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustSupPOList', { params: param });
  }

  GetPreCloseCustSupList(customerNo, supplierNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('customerNo', customerNo).set('supplierNo', supplierNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetPreCloseCustSupList', { params: param });
  }
  GetPreCloseList(record:preclosereport) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
     .set('connName', this.authService.CompConn());
    return this.http.post(this.apiPath + 'GetPreCloseList',  record );
  }
  getDCBalance(supplierNo, item, reason, quantity, ItemCategory) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('supplierNo', supplierNo).set('item', item).set('reason', reason).set('quantity', quantity).set('ItemCategory',ItemCategory)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getDCSBalance', { params: param });
  }
  GoodReceiptGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GoodReceiptGet', { params: param });
  }
  PostGoodReceiptGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostGoodReceiptGet', { params: param });
  }
  GoodReceiptPost(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GoodReceiptPost', { params: param });
  }
  GoodReceiptAddUpdate(record: GoodReceipt) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'GoodReceiptAddUpdate', record);
    }
  }
  GoodReceiptDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GoodReceiptDelete', { params: param });
  }
  MaxGraNumber(no: string) {
    const param = new HttpParams().set('no', no)
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'MaxGraNumber', { params: param });
  }
  GoodReceiptDetailDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GoodReceiptDetailDelete', { params: param });
  }
  MachRew(InvoiceType: string, Quantity: number) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('InvoiceType', InvoiceType)
      .set('quantity', Quantity.toString())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'MachRew', { params: param });
  }
  //#endregion GoodsReceipt Management
  //#region PurchaseOrder Management
  PurchaseOrderList() {
    const param = new HttpParams()
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PurchaseOrderList', { params: param });
  }
  GetNextPONo(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextPONo', { params: param });
  }
  PurchaseOrderGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PurchaseOrderGet', { params: param });
  }
  PurchaseOrderPost(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PurchaseOrderPost', { params: param });
  }
  PurchaseOrderAddUpdate(record: PurchaseOrder) {
    if (record !== undefined && record !== null) {
      record.ConnName = this.authService.CompConn();
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'PurchaseOrderAddUpdate', record);
    }
  }
  PurchaseOrderDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PurchaseOrderDelete', { params: param });
  }
  PurchaseOrderDetailDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PurchaseOrderDetailDelete', { params: param });
  }
  PurchaseOrderItemSpecsDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PurchaseOrderItemSpecsDelete', { params: param });
  }
  PurchaseOrderTermsDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PurchaseOrderTermsDelete', { params: param });
  }
  PostPurchaseOrderList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PostPurchaseOrderList', { params: param });
  }
  PostPurchaseOrderGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostPurchaseOrderGet', { params: param });
  }
  //#endregion PurchaseOrder Management
  //#region PurchaseOrder Management
  ItemJournalPost(record: ItemJournal) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ItemJournalPost', record);
    }
  }
  //#endregion ItemJournal Management
  ItemLedgerListGet() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemLedgerListGet', { params: param });
  }
  ReportCategoryList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ReportCategoryList', { params: param });
  }
  ReportCategoryAddUpdate(record: ReportCategory) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ReportCategoryAddUpdate', record);
    }
  }
  ReportCategoryDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ReportCategoryDelete', { params: param });
  }
  CustomerDocumentGet() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn())
    return this.http.get(this.apiPath + 'CustomerDocumentGet', { params: param });
  }
  CustomerDocumentNoGet(CustomerNo:string,SupplierNo:string,Category:string,InvoiceType:string,Reason:string,ForgingPart: string,FinishPart:string) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn())
      .set('customerNo',CustomerNo)  .set('Category',Category).set('InvoiceType',InvoiceType)
      .set('Reason',Reason).set('supplier',SupplierNo).set('ForgingPart',ForgingPart).set('FinishPart',FinishPart)
    return this.http.get(this.apiPath + 'CustomerDocumentNoGet', { params: param });
  }
  GetDocumentNo(Category:string) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn())
      .set('Category',Category)
    return this.http.get(this.apiPath + 'GetDocumentNo', { params: param });
  }
  ForgerCustomerList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ForgerCustomerList', { params: param });
  }

  getForgerCustomerDetails(ForgerNo: string, Item: string) {
    const param = new HttpParams().set('ForgerNo', ForgerNo)
    .set('Item',Item)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getForgerCustomerDetails', { params: param });
  }

  getCustomer() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getCustomer', { params: param });
  }

  ForgerCustomerAddUpdated(record: RequestParam) {
    record.AppUserId = this.authService.UserID();
    record.ConnName = this.authService.CompConn();
    return this.http.post(this.apiPath + 'ForgerCustomerAddUpdated', record);
  }

  getForgerCusDetails(CustomerNo: string,Item :string) {
    if (CustomerNo != null) {
      const param = new HttpParams().set('CustomerNo', CustomerNo).set('Item', Item).set('connName', this.authService.CompConn())
        .set('appUserId', this.authService.UserID());
      return this.http.get(this.apiPath + 'getForgerCusDetails', { params: param });
    }
  }
  getForgerItemDetails(GRANo: string) {
    if (GRANo != null) {
      const param = new HttpParams().set('GRANo', GRANo)
        .set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
      return this.http.get(this.apiPath + 'getForgerItemDetails', { params: param });
    }

  }


  getModel(CustomerNo: string) {
    if (CustomerNo != null) {
      const param = new HttpParams().set('CustomerNo', CustomerNo)
        .set('appUserId', this.authService.UserID())
        .set('connName', this.authService.CompConn());
      return this.http.get(this.apiPath + 'getModel', { params: param });
    }
  }

ModelDelete(customerNo: string) {
  const param = new HttpParams().set('customerNo', customerNo)
  .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
  return this.http.get(this.apiPath + 'ModelDelete', {params: param});
}

ForgingListSupplier(SupNo){
  const param = new HttpParams().set('appUserId', this.authService.UserID())
  .set('SupNo', SupNo)
  .set('connName', this.authService.CompConn());
  return this.http.get(this.apiPath + 'ForgingListSupplier', {params: param});
}
  PreClosePOList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PreClosePOList', { params: param });
  }

  PreClosePODelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PreClosePODelete', { params: param });
  }
  PreClosePOAddUpdate(record: PreClosePO) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'PreClosePOAddUpdate', record);
    }
  }
  PreClosePo(record: PreClosePO) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'PreClosePo', record);
    }
  }
  ChildPartMasterAddUpdate(record: ChildPartMaster) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ChildPartMasterAddUpdate', record);
    }
  }
  ChildPartMasterList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ChildPartMasterList', { params: param });
  }
  ChildPartMasterDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ChildPartMasterDelete', { params: param });
  }
CancelOrder(id: number,CancellationReason: string) {
  const param = new HttpParams().set('id', id.toString()).set('CancellationReason',CancellationReason)
  .set('appUserId', this.authService.UserID());
  return this.http.get(this.apiPath + 'CancelOrder', {params: param});
}

  GRAListing(dialogData: graListing) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'GRAListing', dialogData);
  }

  GRAListingExport(request: graListing) {

    const options = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),

      // Ignore this part or  if you want full response you have
      // to explicitly give as 'boby'as http client by default give res.json()
      observe: 'response' as 'body',

      // have to explicitly give as 'blob' or 'json'
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'GRAListingExport', request, { responseType: 'blob' as 'blob' });
  }
  POListing(dialogData: graListing) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'POListing', dialogData);
  }
  POlistingExport(request: graListing) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'POlistingExport', request, { responseType: 'blob' as 'blob' });
  }

  GetPreCloseLists(dialogData: preclosereport) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'GetPreCloseLists', dialogData);
  }
  ForgingItemByfinishItem(Item) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('Item', Item)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ForgingItemByfinishItem', { params: param });
  }
}
