import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import {  Customer, CustomerCategory, SalesSetup, SalesWorkOrder, SalesInvoice,
  CustomerItemHsn, CustomerProductListing, DeliveryChallanSupplier, DeliveryChallanCustomer, AsnDetails, PaymentReceipt, InvoiceType, RequestParam, ClearanceReport57f4, ReportS7f4balance, ScrapInvoiceReport, DCRequestParam, DeliveryChallanSubcontractor, Invoice, WorkOrderRateChange, PostSaleRateChange, PostSalesWorkOrderDetail, DailyStockMovement, DClistingSubcontractor, debitdetails, wagesearnedInfo, detaillistofdebit, DuePaymentList, Paymentadvicereport, ASNInvoiceDetail
} from 'src/app/erp/sales/models';
import { GoodReceipt, PreClosePO } from 'src/app/erp/store/models';
import { DcListingInfo, DailyStockMovementSCM, WorkOrderListing,CancelledReports } from '../erp/ppc-mm-reports/model';
import { CurrentMonthAttendance } from '../erp/human-resource/models';

export class ApiSales {

  constructor(private baseUrl: string, private http: HttpClient, private authService: AuthenticationService) {
  }

  private apiPath: string = this.baseUrl + 'Sales/';

  //#region Cancel
  CancelOrder(id: number, CancellationReason:string) {
    const param = new HttpParams().set('id', id.toString()).set('CancellationReason', CancellationReason)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CancelOrder', { params: param });
  }
  CancelInvoice(InvoiceNo: string, CancellationReason:string) {
    const param = new HttpParams().set('InvoiceNo', InvoiceNo).set('CancellationReason',CancellationReason)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CancelInvoice', { params: param });
  }
  //#endregion Cancel
  //#region Asn Details
  AsnDetailsAddUpdate(record: AsnDetails) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'AsnDetailsAddUpdate', record);
    }
  }
  AsnDetailsList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'AsnDetailsList', { params: param });
  }
  AsnDetailsDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'AsnDetailsDelete', { params: param });
  }
  InvoiceList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'InvoiceList', { params: param });
  }
  WithInDateInvoiceList(from:string,to:string) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('from', from).set('to', to)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'WithInDateInvoiceList', { params: param });
  }
  InvoiceAsnList(custNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('custNo', custNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'InvoiceAsnList', { params: param });
  }
  InvoiceTypeGet() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'InvoiceTypeListDetail', { params: param });
  }
  //#endregion Asn Details

  //#region barcode
  AsnNoList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'AsnNoList', { params: param });
  }
  //#endregion barcode

  //#region Delivery Challan Supplier
  DeliveryChallanSupplierAddUpdate(record: DeliveryChallanSupplier) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'DeliveryChallanSupplierAddUpdate', record);
    }
  }
  DeliveryChallanSupplierList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierList', { params: param });
  }
  DeliveryChallanSupplierDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierDelete', { params: param });
  }
  GetNextDCSCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextDCSCode', { params: param });
  }
  SupplierList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SupplierList', { params: param });
  }
  ItemCategoryList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemCategoryList', { params: param });
  }
  ItemList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ItemList', { params: param });
  }
  StorageLocationList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'StorageLocationList', { params: param });
  }
  DeliveryChallanSupplierGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierGet', { params: param });
  }
  DeliveryChallanSupplierDetailDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierDetailDelete', { params: param });
  }
  //#endregion Delivery Challan Supplier

  //#region Customer Management
  CustomerList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerList', { params: param });
  }
  CustomerShipList(custNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('custNo', custNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerShipList', { params: param });
  }
  CustomerNoNameList(all: boolean) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('all', all.toString())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerNoNameList', { params: param });
  }
  GetNextCustCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextCustCode', { params: param });
  }
  CustomerCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerCount', { params: param });
  }
  CustomerGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerGet', { params: param });
  }
  CustomerAddUpdate(record: Customer) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'CustomerAddUpdate', record);
    }
  }
  PostCustomerWorkOrderList(customerNo: string, Item: string) {
    const param = new HttpParams().set('customerNo', customerNo).set('Item', Item)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PostCustomerWorkOrderList', { params: param });
  }

  CustomerDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerDelete', { params: param });
  }

  CustomerLedgerList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerLedgerList', { params: param });
  }
  GetCustomerSupplierInfo(supplierNo: string) {
    const param = new HttpParams().set('supplierNo', supplierNo).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetCustomerSupplierInfo', { params: param });
  }
  //#endregion Customer Management

  //#region CustomerCategory Management
  CustomerCategoryList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerCategoryList', { params: param });
  }
  CustomerCategoryCount() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerCategoryCount', { params: param });
  }
  CustomerCategoryGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connNname', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerCategoryGet', { params: param });
  }
  CustomerCategorySearch(searchText: string) {
    const param = new HttpParams().set('searchText', searchText)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerCategorySearch', { params: param });
  }
  CustomerCategoryAddUpdate(record: CustomerCategory) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'CustomerCategoryAddUpdate', record);
    }
  }
  CustomerCategoryDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerCategoryDelete', { params: param });
  }
  //#endregion CustomerCategory Management
  //#region CustomerItemHsn Management
  CustomerItemHsnList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerItemHsnList', { params: param });
  }
  CustomerItemHsnAddUpdate(record: CustomerItemHsn) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'CustomerItemHsnAddUpdate', record);
    }
  }
  CustomerItemHsnDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerItemHsnDelete', { params: param });
  }
  //#endregion CustomerItemHsn Management

  //#region SalesSetup Management
  SalesSetupGet() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SalesSetupGet', { params: param });
  }
  SalesSetupAddUpdate(record: SalesSetup) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'SalesSetupAddUpdate', record);
    }
  }
  //#endregion SalesSetup Management

  //#region SalesWorlOrder Management
  SalesWorkOrderList() {
    const param = new HttpParams()
    .set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderList', { params: param });
  }
  PostSalesWorkOrderList() {
    const param = new HttpParams()
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostSalesWorkOrderList', { params: param });
  }
  SalesWorkOrderGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderGet', { params: param });
  }
  PostSalesWorkOrderGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostSalesWorkOrderGet', { params: param });
  }
  SalesWorkOrderAddUpdate(record: SalesWorkOrder) {
    if (record !== undefined && record !== null) {
      record.ConnName = this.authService.CompConn();
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'SalesWorkOrderAddUpdate', record);
    }
  }
  SalesWorkOrderDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderDelete', { params: param });
  }
  SalesWorkOrderDetailDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderDetailDelete', { params: param });
  }
  SalesWorkOrderTermsDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderTermsDelete', { params: param });
  }
  SalesWorkOrderItemSpecDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderItemSpecDelete', { params: param });
  }
  SalesWorkOrderPost(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderPost', { params: param });
  }
  SalesWorkOrderNoCheck(orderNo: string, customerNo: string) {
    const param = new HttpParams().set('orderNo', orderNo)
      .set('customerNo', customerNo)
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesWorkOrderNoCheck', { params: param });
  }
  //#endregion SalesWorlOrder Management

  //#region SalesInvoice Management
  SalesInvoiceList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SalesInvoiceList', { params: param });
  }
  GetNextInvoiceNo(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextInvoiceNo', { params: param });
  }
  PostSalesInvoiceList() {
    const param = new HttpParams().set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostSalesInvoiceList', { params: param });
  }
  SalesInvoiceGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SalesInvoiceGet', { params: param });
  }
  DebitDetailsGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'DebitDetailsGet', { params: param });
  }
  ModelPriceGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ModelPriceGet', { params: param });
  }
  PostSalesInvoiceGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn()).set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PostSalesInvoiceGet', { params: param });
  }
  SalesInvoiceAddUpdate(record: SalesInvoice) {
    if (record !== undefined && record !== null) {
      record.ConnName = this.authService.CompConn();
      record.AppUserId = this.authService.UserID();
      return this.http.post(this.apiPath + 'SalesInvoiceAddUpdate', record);
    }
  }
  SalesInvoiceDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesInvoiceDelete', { params: param });
  }
  SalesInvoiceDetailDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesInvoiceDetailDelete', { params: param });
  }
  SalesInvoicePost(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SalesInvoicePost', { params: param });
  }

  MaterialSalesInvoicePost(id: number , Code:string) {
    const param = new HttpParams().set('id', id.toString()).set('Code',Code)
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'MaterialSalesInvoicePost', { params: param });
  }
  Notification(record: SalesInvoice) {
    record.ConnName = this.authService.CompConn();
    record.AppUserId = this.authService.EmpCode();
    record.GenByEmpCode = this.authService.EmpCode();
    return this.http.post(this.apiPath + 'Notification', record);
  }
  S7f4ChallanDetails(customerNo: string, supplierNo: string, Quantity: number, InvoiceType: string, Item: string, ItemCategory: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('supplierNo', supplierNo)
      .set('quantity', Quantity.toString())
      .set('InvoiceType', InvoiceType.toString())
      .set('Item', Item.toString())
      .set('ItemCategory', ItemCategory.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'S7f4ChallanDetails', { params: param });
  }

  checkChildPart(Item: string) {
    const param = new HttpParams().set('Item', Item).set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'checkChildPart', { params: param });
  }

  CheckHSNPresent(Item: string, CustomerNo: string) {
    const param = new HttpParams().set('Item', Item).set('CustomerNo',CustomerNo).set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'CheckHSNPresent', { params: param });
  }

  ChildPartDetails(customerNo: string, supplierNo: string, Quantity: number, InvoiceType: string, Item: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('supplierNo', supplierNo)
      .set('quantity', Quantity.toString())
      .set('InvoiceType', InvoiceType.toString())
      .set('Item', Item.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'ChildPartDetails', { params: param });
  }
  RejectionChildPartDetails(customerNo: string, supplierNo: string, Quantity: number, InvoiceType: string, Item: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('supplierNo', supplierNo)
      .set('quantity', Quantity.toString())
      .set('InvoiceType', InvoiceType.toString())
      .set('Item', Item.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'RejectionChildPartDetails', { params: param });
  }

  CustomerProductList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductList', { params: param });
  }
  ModelPriceList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ModelPriceList', { params: param });
  }

  CustomerProductUpdate(record: CustomerProductListing) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'CustomerProductUpdate', record);
    }
  }
  ModelAddUpdateRej(record: CustomerProductListing) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ModelAddUpdateRej', record);
    }
  }
  ModelPriceDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ModelPriceDelete', { params: param });
  }
  
  CustomerProductDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductDelete', { params: param });
  }
  CustomerProductGet(customerNo: string, itemCategory: string, item: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('itemCategory', itemCategory).set('item', item)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductGet', { params: param });
  }
  getRejectionPrice(customerNo: string, itemCategory: string, item: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('itemCategory', itemCategory).set('item', item)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getRejectionPrice', { params: param });
  }

  CustomerProductItems(customerNo: string, itemCategory: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('itemCategory', itemCategory)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductItems', { params: param });
  }//#endregion CustomerProductList Management

  //#region Delivery Challan Customer
  DeliveryChallanAddUpdate(record: DeliveryChallanCustomer) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'DeliveryChallanAddUpdate', record);
    }
  }

  DeliveryChallanSubcontractorList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierList', { params: param });
  }

  DeliveryChallanSubcontractorAddUpdate(record: DeliveryChallanSubcontractor) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'DeliveryChallanSupplierAddUpdate', record);
    }
  }
  DeliveryChallanSubcontractorGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierGet', { params: param });
  }

  DeliveryChallanCustomerList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanCustomerList', { params: param });
  }

  DeliveryChallanCustomerGet(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanCustomerGet', { params: param });
  }

  DeliveryChallanCustomerDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanCustomerDelete', { params: param });
  }

  DeliveryChallanSubcontractorDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DeliveryChallanSupplierDelete', { params: param });
  }
  DeliveryChallanSubcontractorPost(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'DeliveryChallanSubcontractorPost', { params: param });
  }
  GetNextCustomersCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextCustomersCode', { params: param });
  }

  GetNextSubCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextDCSCode', { params: param });
  }

  // #endregion Delivery Challan To Customer

  // #Delivery Challan To Subcontractor
  GetNextSubcontractorCode() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetNextSubcontractorCode', { params: param });
  }
  // #endregion Delivery Challan To Subcontractor

  //#endregion CustomerProductList Management
  PaymentReceiptAddUpdate(record: PaymentReceipt) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'PaymentReceiptAddUpdate', record);
    }
  }
  //#endregion CustomerProductList Management
  PostSalesInvoiceDetail() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PostSalesInvoiceDetail', { params: param });
  }
  //#region PostedInvoice
  ReportPostedInvoice(request: RequestParam) {

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
    request.AppUserId = this.authService.UserID()
    console.log(request);
    return this.http.post(this.apiPath + 'ReportPostedInvoice', request, { responseType: 'blob' as 'blob' });
  }

  PaymentReceiptList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PaymentReceiptList', { params: param });
  }
  PaymentReceiptGet(id: number) {
    const param = new HttpParams().set('id', id.toString())
    .set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'PaymentReceiptGet', { params: param });
  }
  PaymentReceiptDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PaymentReceiptDelete', { params: param });
  }
  InvoiceTypeList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'InvoiceTypeList', { params: param });
  }

  InvoiceTypeDelete(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'InvoiceTypeDelete', { params: param });
  }

  InvoiceTyeAddUpdate(record: InvoiceType) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'InvoiceTypeAddUpdate', record);
    }
  }

  DcNo(custNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('custNo', custNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DcNo', { params: param });
  }
  DcsNo(supNo) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('supNo', supNo)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DcsNo', { params: param });
  }

  ASNPostedInvoiceGet(dialogData: ASNInvoiceDetail) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ASNPostedInvoiceGet', dialogData);
  }
  AsnReportExport(dialogData: ASNInvoiceDetail) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'AsnReportExport', dialogData);
  }
  ClearanceReportS7f4Detail(dialogData: ClearanceReport57f4) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ClearanceReportS7f4Detail', dialogData);
  }

  DClistingSubcontractor(dialogData: DClistingSubcontractor) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DClistingSubcontractorDetail', dialogData);
  }

  ClearanceReportS7f4DetailExport(request: ClearanceReport57f4) {
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
    return this.http.post(this.apiPath + 'ClearanceReportS7f4DetailExport', request, { responseType: 'blob' as 'blob' });
  }

  DClistingSubcontractorDetail(request: DClistingSubcontractor) {
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
    return this.http.post(this.apiPath + 'DClistingSubcontractorDetail', request, { responseType: 'blob' as 'blob' });
  }
  CustomerProductItem(customerNo: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductItem', { params: param });
  }
  CustomerProductItemfinishingPart(customerNo: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductItemfinishPart', { params: param });
  }
  AsnDetailscheck(dialogData: RequestParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.apiPath + 'AsnDetailscheck', dialogData);
  }
  ReportS7f4balanceExport(request: ReportS7f4balance) {

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
    return this.http.post(this.apiPath + 'ReportS7f4balanceExport', request, { responseType: 'blob' as 'blob' });
  }
  ReportS7f4balance(dialogData: ReportS7f4balance) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ReportS7f4balance', dialogData);
  }

  subcontractorstockbalance(dialogData: ReportS7f4balance) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'subcontractorstockbalance', dialogData);
  }

  ForgingCustomerList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ForgingCustomerList', { params: param });
  }
  CustomerItemList(CustomerNo: string) {
    const param = new HttpParams().set('CustomerNo', CustomerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerItemList', { params: param });
  }
  getInvoiceNo(CusNo: string) {
    const param = new HttpParams().set('custNo', CusNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getInvoiceNo', { params: param });
  }
  getGRNNo(InvoiceNo: string) {
    const param = new HttpParams().set('InvoiceNo', InvoiceNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getGRNNo', { params: param });
  }
  getInvoiceNoWithoutGRN(CusNo: string) {
    const param = new HttpParams().set('custNo', CusNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getInvoiceNoWithoutGRN', { params: param });

  }
  getInvoiceRecord(InvoiveNo: string) {
    const param = new HttpParams().set('InvoiveNo', InvoiveNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getInvoiceRecord', { params: param });
  }
  ChallanCustomerGet(CustomerNo: string) {
    const param = new HttpParams().set('CustomerNo', CustomerNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ChallanCustomerGet', { params: param });
  }
  ScrapInvoiceReportDetail(dialogData: ScrapInvoiceReport) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'ScrapInvoiceReportDetail', dialogData);
  }

  ScrapInvoiceReportDetailExport(request: ScrapInvoiceReport) {
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
    return this.http.post(this.apiPath + 'ScrapInvoiceReportDetailExport', request, { responseType: 'blob' as 'blob' });
  }

  GeneralInvoiceReportDetail(dialogData: ScrapInvoiceReport) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'GeneralInvoiceReportDetail', dialogData);
  }

  CustomerItems(customerNo: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerItems', { params: param });
  }

  OrderNumber(customerNo: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PostCustomerWorkOrderList', { params: param });
  }

  CustomerFinishingItems(customerNo: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerFinishingItems', { params: param });
  }

  GeneralInvoiceReportDetailExport(request: ScrapInvoiceReport) {
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
    return this.http.post(this.apiPath + 'GeneralInvoiceReportDetailExport', request, { responseType: 'blob' as 'blob' });
  }
  ModelAddUpdate(record: RequestParam) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'ModelAddUpdate', record);
    }
  }
  ItemByGroupList(Item, group) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('Item', Item).set('group', group)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'CustomerProductList', { params: param });
  }
  ModelCategoryGroupList(ItemCategory, RejectionPrice) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('ItemCategory', ItemCategory).set('RejectionPrice', RejectionPrice)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ModelCategoryGroupList', { params: param });
  }

  getfinishpart(Item) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('Item', Item)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getfinishpart', { params: param });
  }

  RejectionDctPost(id: number) {
    const param = new HttpParams().set('id', id.toString())
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'RejectionDctPost', { params: param });
  }
  S7f4SupplierChallanDetails(CustomerNo: string, supplier: string, Quantity: number, InvoiceType: string, Item: string, ItemCategory: string) {
    const param = new HttpParams().set('customerNo', CustomerNo)
      .set('supplierNo', supplier)
      .set('Quantity', Quantity.toString())
      .set('InvoiceType', InvoiceType.toString())
      .set('Item', Item)
      .set('ItemCategory', ItemCategory)
      .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'S7f4ChallanDetails', { params: param });
  }
  getDCNo(code: string, CusNo: string, supNo: string) {
    const param = new HttpParams().set('code', code)
    .set('custNo', CusNo)
      .set('supNo', supNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetDCNo', { params: param });
  }
  getDcListingDCNo(CusNo: string, supNo: string) {
    const param = new HttpParams().set('custNo', CusNo)
      .set('supNo', supNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getDcListingDCNo', { params: param });
  }
  GetcusSupDCNoList(CusSup: string ) {
    const param = new HttpParams().set('CusSup', CusSup)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetcusSupDCNoList', { params: param });
  }
  getDCSUBNo(SubNo: string) {
    const param = new HttpParams()
      .set('supNo', SubNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getDCSUBNo', { params: param });
  }

  PostDC(request: DCRequestParam) {

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
    request.AppUserId = this.authService.UserID()
    console.log(request);
    return this.http.post(this.apiPath + 'PostDC', request, { responseType: 'blob' as 'blob' });
  }
 
  GetSupplierList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetSupplierList', { params: param });
  }
  DCListingReportGet(dialogData: DcListingInfo) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DCListingReportGet', dialogData);
  }  
  WorkOrderReportGet(param: WorkOrderListing) {
    param.AppUserId = this.authService.UserID();
    param.ConnName = this.authService.CompConn();
    console.log(param);
    return this.http.post(this.apiPath + 'WorkOrderReportGet', param);
  }
  GetDCNoList(Code: string) {
    const param = new HttpParams().set('Code', Code).set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetDCNoList', { params: param });
  }
  GetSubDCNoList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetSubDCNoList', { params: param });
  }
  ForgingPartList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ForgingPartList', { params: param });
  }
  ChildPartList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'ChildPartList', { params: param });
  }
  FinishPartList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'FinishPartList', { params: param });
  }
  getChallanNo(customerNo: string) {
    const param = new HttpParams().set('customerNo', customerNo)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'getChallanNo', { params: param });
  }
  InvoiceGRNUpdateGet(dialogData: RequestParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'InvoiceGRNUpdateGet', dialogData);
  }
  GRNInvoiceAddUpdate(record: SalesInvoice) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn()
      return this.http.post(this.apiPath + 'GRNInvoiceAddUpdate', record);
    }
  }
  GRNInvoiceAllList() {
    const param = new HttpParams().set('connName', this.authService.CompConn())
    .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'GRNInvoiceAllList', { params: param });
  }
  DebitDetailsAddUpdate(record: debitdetails) {
    if (record !== undefined && record !== null) {
      record.AppUserID = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'DebitDetailsAddUpdate', record);
    }
  }
  DebitDetailsList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
    .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'DebitDetailsList', { params: param });
  }
  DebitDetailsDelete(id: number) {
    const param = new HttpParams().set('id', id.toString()).set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'DebitDetailsDelete', { params: param });
  }
  SubContractorListing(dialogData: DClistingSubcontractor) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'SubContractorListing', dialogData);
  }
  ReportSubContractorListing(request: DClistingSubcontractor) {

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
    return this.http.post(this.apiPath + 'ReportSubContractorListing', request, { responseType: 'blob' as 'blob' });
  }
  PaymentReportList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PaymentReportList', { params: param });
  }
  PaymentadviceReportList() {
    const param = new HttpParams().set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PaymentadviceReportList', { params: param });
  }
  PaymentReportInfo(dialogData: PaymentReceipt) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'PaymentReportInfo', dialogData);
  }

  wagesearned(record: wagesearnedInfo) {
    record.AppUserId = this.authService.UserID();
    record.ConnName = this.authService.CompConn();
    console.log(record);
    return this.http.post(this.apiPath + 'wagesearned', record);
  }
  DetailListOfDebit(dialogData: detaillistofdebit) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DetailListOfDebit', dialogData);
  }

  ReportPaymentInfo(request: PaymentReceipt) {

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
    return this.http.post(this.apiPath + 'ReportPaymentInfo', request, { responseType: 'blob' as 'blob' });
  }

  wagesearnedInfo(record: wagesearnedInfo) {

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
    record.ConnName = this.authService.CompConn();
    console.log(record);
    return this.http.post(this.apiPath + 'wagesearnedInfo', record, { responseType: 'blob' as 'blob' });
  }
  DuepaymentInfo(dialogData: DuePaymentList) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DuepaymentInfo', dialogData);
  }



  ReportduepaymentInfo(request: DuePaymentList) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'ReportduepaymentInfo', request, { responseType: 'blob' as 'blob' });
  }
  ReportDetailListOfDebit(request: detaillistofdebit) {
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
    return this.http.post(this.apiPath + 'ReportDetailListOfDebit', request, { responseType: 'blob' as 'blob' });
  }

  PaymentadviceReportInfo(dialogData: Paymentadvicereport) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'PaymentReportInfo', dialogData);
  }

  DCListingExport(request: DcListingInfo) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'DCListingExport', request, { responseType: 'blob' as 'blob' });
  }
  WOListingExport(request: WorkOrderListing) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'WOListingExport', request, { responseType: 'blob' as 'blob' });
  }
  PaymentadviceReport(FromDate, ToDate) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('FromDate', FromDate).set('ToDate', ToDate)
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PaymentadviceReport', { params: param });
  }
  ReportadvicePaymentInfo(request: Paymentadvicereport) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
      responseType: 'blob' as 'blob'
    };
    request.ConnName = this.authService.CompConn();
    console.log(request);
    return this.http.post(this.apiPath + 'ReportadvicePaymentInfo', request, { responseType: 'blob' as 'blob' });
  }
  PreCloseWo(record: PreClosePO) {
    if (record !== undefined && record !== null) {
      record.AppUserId = this.authService.UserID();
      record.ConnName = this.authService.CompConn();
      return this.http.post(this.apiPath + 'PreCloseWo', record);
    }
  }
  AutoDcGenerateReport(request: RequestParam) {

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
    request.AppUserId = this.authService.UserID()
    console.log(request);
    return this.http.post(this.apiPath + 'AutoDcGenerateReport', request, { responseType: 'blob' as 'blob' });
  }
  WorkOrderRateChange(dialogData: WorkOrderRateChange) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'WorkOrderRateChange', dialogData);
  }
  PostSaleRateChange(customerNo: string, OrderNo: string, FromDate: string, ToDate: string) {
    const param = new HttpParams().set('customerNo', customerNo).set('OrderNo', OrderNo).set('FromDate', FromDate).set('ToDate', ToDate)
      .set('appUserId', this.authService.UserID()).set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'PostSaleRateChange', { params: param });
  }

  NewRateUpdate(dialogData: PostSaleRateChange) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    return this.http.post(this.apiPath + 'NewRateUpdate', dialogData);
  }
  DailyStockMovementSCM(dialogData: DailyStockMovementSCM) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DailyStockMovementSCM', dialogData);
  }
  DailyStocKSubContractorRjt(dialogData: DailyStockMovementSCM) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DailyStocKSubContractorRjt', dialogData);
  }

  DailyStockMovement(dialogData: DailyStockMovement) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DailyStockMovement', dialogData);
  }
  DailyStocKSupplierDtl(dialogData: DailyStockMovement) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DailyStocKSupplierDtl', dialogData);
  }
  DailyStockInovoiceDtl(dialogData: DailyStockMovement) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DailyStockInovoiceDtl', dialogData);
  }
  DailyStockDcCustomer(dialogData: DailyStockMovement) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'DailyStockDcCustomer', dialogData);
  }
  DailyStockCustInwardDetails(request: DailyStockMovement) {
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
    return this.http.post(this.apiPath + 'DailyStockCustInwardDetails', request, { responseType: 'blob' as 'blob' });
  }
  DailyStockSupInwardDetails(request: DailyStockMovement) {
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
    return this.http.post(this.apiPath + 'DailyStockSupInwardDetails', request, { responseType: 'blob' as 'blob' });
  }
   DailyStocKSubContractorDCDtl(dialogData: DailyStockMovementSCM) {
      dialogData.AppUserId = this.authService.UserID();
      dialogData.ConnName = this.authService.CompConn();
      console.log(dialogData);
      return this.http.post(this.apiPath + 'DailyStocKSubContractorDCDtl', dialogData);
    }
    DailyStockSubConInwardDetails(request: DailyStockMovementSCM) {
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
      return this.http.post(this.apiPath + 'DailyStockSubConInwardDetails', request, { responseType: 'blob' as 'blob' });
    }

  SubContractorCancelOrder(DCNo: string, CancellationReason: string) {
    const param = new HttpParams().set('DCNo', DCNo).set('CancellationReason', CancellationReason)
    .set('connName', this.authService.CompConn())
      .set('appUserId', this.authService.UserID());
    return this.http.get(this.apiPath + 'SubContractorCancelOrder', { params: param });
  }
  SubContractorEwayBill(EwayBill: string,DCNo: string) {
    const param = new HttpParams().set('EwayBill', EwayBill).set('DCNo', DCNo)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'SubContractorEwayBill', { params: param });
  }
  CancelledRecordDetail(dialogData:CancelledReports) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'CancelledRecordDetail', dialogData);
  }
CancelledRecordDetailExport(request: CancelledReports) {
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
   return this.http.post(this.apiPath + 'CancelledRecordDetailExport', request, {responseType : 'blob' as 'blob' });
  }
  WagesEarnes(dialogData: RequestParam) {
    dialogData.AppUserId = this.authService.UserID();
    dialogData.ConnName = this.authService.CompConn();
    console.log(dialogData);
    return this.http.post(this.apiPath + 'WagesEarnes', dialogData);
  }
  WagesEarnesReport(request: RequestParam) {

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
    return this.http.post(this.apiPath + 'WagesEarnesReport', request, { responseType: 'blob' as 'blob' });
  }
  NotifyChallanDetails(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'NotifyChallanDetails', { params: param });
  }
  NotifyworkOrderDetails(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'NotifyworkOrderDetails', { params: param });
  }
  NotifyPurchseOrderDetails(date: Date) {
    const param = new HttpParams().set('appUserId', this.authService.UserID())
      .set('date', date.toLocaleDateString('en-US'))
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'NotifyPurchseOrderDetails', { params: param });
  }
  GetCancelNo(RejectionType) {
    const param = new HttpParams().set('RejectionType', RejectionType)
      .set('appUserId', this.authService.UserID())
      .set('connName', this.authService.CompConn());
    return this.http.get(this.apiPath + 'GetCancelNo', { params: param });
  }
}
