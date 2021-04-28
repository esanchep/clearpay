(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\clearpay-be\src\main\resources\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0j8L":
/*!*******************************************************!*\
  !*** ./src/app/store/effects/transactions.effects.ts ***!
  \*******************************************************/
/*! exports provided: TransactionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsEffects", function() { return TransactionsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/i18n/literals */ "rgVV");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "v8Ou");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/notification/notification.service */ "7vTS");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _administration_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../administration/transactions/transactions.service */ "YkOR");










class TransactionsEffects {
    constructor(actions$, notificationService, store, transactionsService) {
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.store = store;
        this.transactionsService = transactionsService;
        this.getTransactionsByWalletId$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].getTransactionsByWalletId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((wallet) => this.transactionsService.getTransactionsByWallet(wallet.walletId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (!response.body) {
                this.notificationService.error(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.transactions.errorGettingTransactions);
                return _actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].getTransactionsByWalletIdFailed();
            }
            return _actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].getTransactionsByWalletIdSuccess(response);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.notificationService.error(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.transactions.errorGettingTransactions);
            this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].resetState());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].getTransactionsByWalletIdFailed());
        })));
    }
}
TransactionsEffects.ɵfac = function TransactionsEffects_Factory(t) { return new (t || TransactionsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_administration_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_8__["TransactionsService"])); };
TransactionsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TransactionsEffects, factory: TransactionsEffects.ɵfac });


/***/ }),

/***/ "51Mf":
/*!**************************************************!*\
  !*** ./src/app/store/effects/wallets.effects.ts ***!
  \**************************************************/
/*! exports provided: WalletsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsEffects", function() { return WalletsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../assets/i18n/literals */ "rgVV");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions */ "v8Ou");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/notification/notification.service */ "7vTS");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _administration_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../administration/wallets/wallets.service */ "z9sC");










class WalletsEffects {
    constructor(actions$, notificationService, store, walletsService) {
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.store = store;
        this.walletsService = walletsService;
        this.getWalletsByUserId$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromWalletsActions"].getWalletsByUserId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((user) => this.walletsService.getWalletsByUserId(user.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (!response.body) {
                this.notificationService.error(_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.wallets.errorGettingWallets);
                return _actions__WEBPACK_IMPORTED_MODULE_4__["fromWalletsActions"].getWalletsByUserIdFailed();
            }
            return _actions__WEBPACK_IMPORTED_MODULE_4__["fromWalletsActions"].getWalletsByUserIdSuccess(response);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.notificationService.error(_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.wallets.errorGettingWallets);
            this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fromWalletsActions"].resetState());
            this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].resetState());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromWalletsActions"].getWalletsByUserIdFailed());
        })));
    }
}
WalletsEffects.ɵfac = function WalletsEffects_Factory(t) { return new (t || WalletsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_administration_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_8__["WalletsService"])); };
WalletsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WalletsEffects, factory: WalletsEffects.ɵfac });


/***/ }),

/***/ "7vTS":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.service.ts ***!
  \************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ "jYQy");
/* harmony import */ var _notification_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.models */ "vad9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.DEFAULT_TIMING = 5000;
    }
    success(message, parameters, timing) {
        this.openSnackBar(message, _notification_models__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].SUCCESS, timing, parameters, 'success');
    }
    error(message, parameters, timing) {
        this.openSnackBar(message, _notification_models__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].ERROR, timing, parameters, 'error');
    }
    openSnackBar(message, type, parameters, timing, panelClass) {
        this.snackBar.openFromComponent(_notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"], {
            duration: timing ? timing : this.DEFAULT_TIMING,
            data: parameters ? { message, type, parameters } : { message, type },
            panelClass: ['notification', panelClass]
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "99/s":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.module.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.component */ "jYQy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
        ], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "A7Qc":
/*!*******************************************************!*\
  !*** ./src/app/store/actions/transactions.actions.ts ***!
  \*******************************************************/
/*! exports provided: TransactionAction, resetState, getTransactionsByWalletId, getTransactionsByWalletIdSuccess, getTransactionsByWalletIdFailed, addTransactionToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionAction", function() { return TransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionsByWalletId", function() { return getTransactionsByWalletId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionsByWalletIdSuccess", function() { return getTransactionsByWalletIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionsByWalletIdFailed", function() { return getTransactionsByWalletIdFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransactionToList", function() { return addTransactionToList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const TRANSACTIONS = '[Transactions]';
const TransactionAction = {
    RESET_STATE: `${TRANSACTIONS} Reset State`,
    GET_TRANSACTIONS_BY_WALLET_ID: `${TRANSACTIONS} Get Transactions by Wallet ID`,
    GET_TRANSACTIONS_BY_WALLET_ID_SUCCESS: `${TRANSACTIONS} Get Transactions by Wallet ID success`,
    GET_TRANSACTIONS_BY_WALLET_ID_FAILED: `${TRANSACTIONS} Get Transactions by Wallet ID failed`,
    ADD_TRANSACTION_TO_LIST: `${TRANSACTIONS} Add Transaction to list`
};
const resetState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TransactionAction.RESET_STATE);
const getTransactionsByWalletId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TransactionAction.GET_TRANSACTIONS_BY_WALLET_ID, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getTransactionsByWalletIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TransactionAction.GET_TRANSACTIONS_BY_WALLET_ID_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getTransactionsByWalletIdFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TransactionAction.GET_TRANSACTIONS_BY_WALLET_ID_FAILED);
const addTransactionToList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TransactionAction.ADD_TRANSACTION_TO_LIST, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: DevStoreModule, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevStoreModule", function() { return DevStoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const DevStoreModule = [
    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__["StoreDevtoolsModule"].instrument()
];
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MOgX":
/*!*********************************************************!*\
  !*** ./src/app/store/reducers/transactions.reducers.ts ***!
  \*********************************************************/
/*! exports provided: INITIAL_TRANSACTIONS_STATE, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_TRANSACTIONS_STATE", function() { return INITIAL_TRANSACTIONS_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "v8Ou");


const INITIAL_TRANSACTIONS_STATE = undefined;
const transactionsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_TRANSACTIONS_STATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromTransactionsActions"].resetState, _actions__WEBPACK_IMPORTED_MODULE_1__["fromTransactionsActions"].getTransactionsByWalletId, _actions__WEBPACK_IMPORTED_MODULE_1__["fromTransactionsActions"].getTransactionsByWalletIdFailed, () => INITIAL_TRANSACTIONS_STATE), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromTransactionsActions"].getTransactionsByWalletIdSuccess, (state, data) => ({
    transactionList: data.body
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromTransactionsActions"].addTransactionToList, (state, data) => {
    const updatedList = [...state.transactionList];
    updatedList.unshift(data);
    return Object.assign(Object.assign({}, state), { transactionList: updatedList });
}));
function reducer(state, action) {
    return transactionsReducer(state, action);
}


/***/ }),

/***/ "NdIJ":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/wallets.reducers.ts ***!
  \****************************************************/
/*! exports provided: INITIAL_WALLETS_STATE, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_WALLETS_STATE", function() { return INITIAL_WALLETS_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions */ "v8Ou");


const INITIAL_WALLETS_STATE = undefined;
const walletsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_WALLETS_STATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromWalletsActions"].resetState, _actions__WEBPACK_IMPORTED_MODULE_1__["fromWalletsActions"].getWalletsByUserId, _actions__WEBPACK_IMPORTED_MODULE_1__["fromWalletsActions"].getWalletsByUserIdFailed, () => INITIAL_WALLETS_STATE), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromWalletsActions"].getWalletsByUserIdSuccess, (state, data) => ({
    walletList: data.body
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromWalletsActions"].setSelectedWallet, (state, data) => (Object.assign(Object.assign({}, state), { selectedWallet: data }))));
function reducer(state, action) {
    return walletsReducer(state, action);
}


/***/ }),

/***/ "RxZS":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: fromNewTransactionEffects, fromTransactionsEffects, fromUsersEffects, fromWalletsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_transaction_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-transaction.effects */ "s2ve");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromNewTransactionEffects", function() { return _new_transaction_effects__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _transactions_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.effects */ "0j8L");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromTransactionsEffects", function() { return _transactions_effects__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _users_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.effects */ "cwu1");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromUsersEffects", function() { return _users_effects__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _wallets_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallets.effects */ "51Mf");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromWalletsEffects", function() { return _wallets_effects__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/i18n/literals */ "rgVV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(titleService, translateService) {
        this.setAppTitle(titleService, translateService);
    }
    setAppTitle(titleService, translateService) {
        translateService.setDefaultLang('en');
        translateService.get('page_title').subscribe((res) => {
            titleService.setTitle(translateService.instant(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_0__["Literal"].app.title));
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["color", "primary"], [1, "icon"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".icon[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n  background-image: url('logo.png');\n  background-size: 200px 40px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 40px;\n  height: calc(100% - 64px - 80px - 48px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQVhPO0VBWVAsdUNBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9vbGJhci1oZWlnaHQ6IDY0cHg7XHJcbiRtYXJnaW46IDQwcHg7XHJcbiR0aXRsZS1oZWlnaHQ6IDQ4cHg7XHJcblxyXG4uaWNvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vYXNzZXRzL2ltZy9sb2dvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHggNDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogJG1hcmdpbjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0fSAtICN7JG1hcmdpbiAqIDJ9IC0gI3skdGl0bGUtaGVpZ2h0fSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "TxrH":
/*!**********************************************************!*\
  !*** ./src/app/store/actions/new-transaction.actions.ts ***!
  \**********************************************************/
/*! exports provided: NewTransactionAction, resetState, resetDestinationWallets, setSourceUser, setSourceWallet, getDestinationWalletsByUserId, getDestinationWalletsByUserIdSuccess, getDestinationWalletsByUserIdFailed, addNewTransaction, addNewTransactionSuccess, addNewTransactionFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTransactionAction", function() { return NewTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetDestinationWallets", function() { return resetDestinationWallets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSourceUser", function() { return setSourceUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSourceWallet", function() { return setSourceWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationWalletsByUserId", function() { return getDestinationWalletsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationWalletsByUserIdSuccess", function() { return getDestinationWalletsByUserIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationWalletsByUserIdFailed", function() { return getDestinationWalletsByUserIdFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTransaction", function() { return addNewTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTransactionSuccess", function() { return addNewTransactionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewTransactionFailed", function() { return addNewTransactionFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const NEW_TRANSACTION = '[New Transaction]';
const NewTransactionAction = {
    RESET_STATE: `${NEW_TRANSACTION} Reset State`,
    RESET_DESTINATION_WALLETS: `${NEW_TRANSACTION} Reset destination Wallets`,
    SET_SOURCE_USER: `${NEW_TRANSACTION} Set source User`,
    SET_SOURCE_WALLET: `${NEW_TRANSACTION} Set source Wallet`,
    GET_ELIGIBLE_DESTINATION_WALLETS: `${NEW_TRANSACTION} Get eligible destination Wallets`,
    GET_ELIGIBLE_DESTINATION_WALLETS_SUCCESS: `${NEW_TRANSACTION} Get eligible destination Wallets success`,
    GET_ELIGIBLE_DESTINATION_WALLETS_FAILED: `${NEW_TRANSACTION} Get eligible destination Wallets failed`,
    ADD_NEW_TRANSACTION: `${NEW_TRANSACTION} Add new Transaction`,
    ADD_NEW_TRANSACTION_SUCCESS: `${NEW_TRANSACTION} Add new Transaction success`,
    ADD_NEW_TRANSACTION_FAILED: `${NEW_TRANSACTION} Add new Transaction failed`,
};
const resetState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.RESET_STATE);
const resetDestinationWallets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.RESET_DESTINATION_WALLETS);
const setSourceUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.SET_SOURCE_USER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setSourceWallet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.SET_SOURCE_WALLET, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getDestinationWalletsByUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.GET_ELIGIBLE_DESTINATION_WALLETS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getDestinationWalletsByUserIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.GET_ELIGIBLE_DESTINATION_WALLETS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getDestinationWalletsByUserIdFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.GET_ELIGIBLE_DESTINATION_WALLETS_FAILED);
const addNewTransaction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.ADD_NEW_TRANSACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewTransactionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.ADD_NEW_TRANSACTION_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewTransactionFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NewTransactionAction.ADD_NEW_TRANSACTION_FAILED);


/***/ }),

/***/ "U7Aq":
/*!************************************************!*\
  !*** ./src/app/store/actions/users.actions.ts ***!
  \************************************************/
/*! exports provided: UserAction, resetState, getAllUsers, getAllUsersSuccess, getAllUsersFailed, setSelectedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersSuccess", function() { return getAllUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersFailed", function() { return getAllUsersFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedUser", function() { return setSelectedUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const USERS = '[Users]';
const UserAction = {
    RESET_STATE: `${USERS} Reset State`,
    GET_ALL_USERS: `${USERS} Get all users`,
    GET_ALL_USERS_SUCCESS: `${USERS} Get all users success`,
    GET_ALL_USERS_FAILED: `${USERS} Get all users failed`,
    SET_SELECTED_USER: `${USERS} Set selected user`
};
const resetState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserAction.RESET_STATE);
const getAllUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserAction.GET_ALL_USERS);
const getAllUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserAction.GET_ALL_USERS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllUsersFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserAction.GET_ALL_USERS_FAILED);
const setSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserAction.SET_SELECTED_USER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "YkOR":
/*!*********************************************************************!*\
  !*** ./src/app/administration/transactions/transactions.service.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TransactionsService {
    constructor(http) {
        this.http = http;
    }
    getTransactionsByWallet(walletId) {
        return this.http.get(`/wallet/${walletId}/transactions`);
    }
    addNewTransaction(request) {
        return this.http.post(`/wallet/${request.sourceWalletId}/transactions`, request);
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_notification_notification_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/notification/notification.module */ "99/s");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/effects */ "RxZS");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/reducers */ "tg95");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");



















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([
                _store_effects__WEBPACK_IMPORTED_MODULE_12__["fromNewTransactionEffects"].NewTransactionEffects,
                _store_effects__WEBPACK_IMPORTED_MODULE_12__["fromTransactionsEffects"].TransactionsEffects,
                _store_effects__WEBPACK_IMPORTED_MODULE_12__["fromUsersEffects"].UsersEffects,
                _store_effects__WEBPACK_IMPORTED_MODULE_12__["fromWalletsEffects"].WalletsEffects
            ]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _shared_components_notification_notification_module__WEBPACK_IMPORTED_MODULE_11__["NotificationModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_13__["reducers"], {
                runtimeChecks: {}
            }),
            src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["DevStoreModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _shared_components_notification_notification_module__WEBPACK_IMPORTED_MODULE_11__["NotificationModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();


/***/ }),

/***/ "cwu1":
/*!************************************************!*\
  !*** ./src/app/store/effects/users.effects.ts ***!
  \************************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../assets/i18n/literals */ "rgVV");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions */ "v8Ou");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/notification/notification.service */ "7vTS");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _administration_users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../administration/users/users.service */ "jfLz");










class UsersEffects {
    constructor(actions$, notificationService, store, usersService) {
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.store = store;
        this.usersService = usersService;
        this.getAllUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromUsersActions"].getAllUsers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.usersService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (!response.body) {
                this.notificationService.error(_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.users.errorGettingUsers);
                return _actions__WEBPACK_IMPORTED_MODULE_4__["fromUsersActions"].getAllUsersFailed();
            }
            return _actions__WEBPACK_IMPORTED_MODULE_4__["fromUsersActions"].getAllUsersSuccess(response);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.notificationService.error(_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.users.errorGettingUsers);
            this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fromWalletsActions"].resetState());
            this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].resetState());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromUsersActions"].getAllUsersFailed());
        })));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_administration_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });


/***/ }),

/***/ "jYQy":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class NotificationComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.icons = {
            success: 'check_circle',
            error: 'error'
        };
        this.message = this.data.message;
        this.type = this.data.type;
        if (!!this.data.parameters) {
            this.parameters = this.data.parameters;
        }
    }
    closeDialog() {
        this.dialogRef.dismiss();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MAT_SNACK_BAR_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarRef"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 6, vars: 5, consts: [[1, "container"], ["matSuffix", "", 1, "flex-start", 3, "ngClass"], [1, "flex-center", "message"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.icons[ctx.type]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx.message));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: #b2fce4;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #ffbbbb;\n}\n\n.message[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 10px;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxjQ1RjO0FEUWhCOztBQUlBO0VBQ0UsY0NYVztBRFViOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vY29sb3JzLnNjc3MnO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogJHdhcm4tY29sb3I7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICNiMmZjZTQ7XHJcbiRhY2NlbnQtY29sb3I6ICNlYWRkZjI7XHJcbiR3YXJuLWNvbG9yOiAjZmZiYmJiO1xyXG4iXX0= */"] });


/***/ }),

/***/ "jfLz":
/*!*******************************************************!*\
  !*** ./src/app/administration/users/users.service.ts ***!
  \*******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UsersService {
    constructor(http) {
        this.http = http;
    }
    getAllUsers() {
        return this.http.get(`/user`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lMVP":
/*!**************************************************!*\
  !*** ./src/app/store/actions/wallets.actions.ts ***!
  \**************************************************/
/*! exports provided: WalletsActions, resetState, getWalletsByUserId, getWalletsByUserIdSuccess, getWalletsByUserIdFailed, setSelectedWallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsActions", function() { return WalletsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletsByUserId", function() { return getWalletsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletsByUserIdSuccess", function() { return getWalletsByUserIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletsByUserIdFailed", function() { return getWalletsByUserIdFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedWallet", function() { return setSelectedWallet; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const WALLETS = '[Wallets]';
const WalletsActions = {
    RESET_STATE: `${WALLETS} Reset State`,
    GET_WALLETS_BY_USER_ID: `${WALLETS} Get Wallets by User ID`,
    GET_WALLETS_BY_USER_ID_SUCCESS: `${WALLETS} Get Wallets by User ID success`,
    GET_WALLETS_BY_USER_ID_FAILED: `${WALLETS} Get Wallets by User ID failed`,
    SET_SELECTED_WALLET: `${WALLETS} Set selected Wallet`
};
const resetState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(WalletsActions.RESET_STATE);
const getWalletsByUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(WalletsActions.GET_WALLETS_BY_USER_ID, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getWalletsByUserIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(WalletsActions.GET_WALLETS_BY_USER_ID_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getWalletsByUserIdFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(WalletsActions.GET_WALLETS_BY_USER_ID_FAILED);
const setSelectedWallet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(WalletsActions.SET_SELECTED_WALLET, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "p/PJ":
/*!************************************************************!*\
  !*** ./src/app/store/reducers/new-transaction.reducers.ts ***!
  \************************************************************/
/*! exports provided: INITIAL_NEW_TRANSACTION_STATE, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_NEW_TRANSACTION_STATE", function() { return INITIAL_NEW_TRANSACTION_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "v8Ou");


const INITIAL_NEW_TRANSACTION_STATE = undefined;
const newTransactionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_NEW_TRANSACTION_STATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].resetState, () => INITIAL_NEW_TRANSACTION_STATE), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].setSourceUser, (state, data) => (Object.assign(Object.assign({}, state), { sourceUser: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].setSourceWallet, (state, data) => (Object.assign(Object.assign({}, state), { sourceWallet: data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].addNewTransaction, (state) => (Object.assign({}, state))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].getDestinationWalletsByUserIdSuccess, (state, data) => (Object.assign(Object.assign({}, state), { destinationWallets: data.body }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].resetDestinationWallets, _actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].addNewTransactionSuccess, _actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].addNewTransactionFailed, _actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].getDestinationWalletsByUserId, _actions__WEBPACK_IMPORTED_MODULE_1__["fromNewTransactionActions"].getDestinationWalletsByUserIdFailed, (state) => (Object.assign(Object.assign({}, state), { destinationWallets: undefined }))));
function reducer(state, action) {
    return newTransactionReducer(state, action);
}


/***/ }),

/***/ "rgVV":
/*!*************************************!*\
  !*** ./src/assets/i18n/literals.ts ***!
  \*************************************/
/*! exports provided: Literal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
const Literal = {
    app: {
        title: 'app.title'
    },
    common: {
        newTransaction: 'common.new-transaction',
        balance: 'common.balance',
        from: 'common.from',
        amount: 'common.amount',
        to: 'common.to',
        comment: 'common.comment'
    },
    administration: {
        title: 'administration.title',
        users: {
            title: 'administration.users.title',
            username: 'administration.users.username',
            name: 'administration.users.name',
            surname: 'administration.users.surname',
            errorGettingUsers: 'administration.users.error-getting-users'
        },
        wallets: {
            title: 'administration.wallets.title',
            alias: 'administration.wallets.alias',
            errorGettingWallets: 'administration.wallets.error-getting-wallets'
        },
        transactions: {
            title: 'administration.transactions.title',
            date: 'administration.transactions.date',
            sourceWallet: 'administration.transactions.sourceWallet',
            destinationWallet: 'administration.transactions.destinationWallet',
            errorGettingTransactions: 'administration.transactions.error-getting-transactions'
        },
        newTransaction: {
            user: 'administration.new-transaction.user',
            wallet: 'administration.new-transaction.wallet',
            cancel: 'administration.new-transaction.cancel',
            add: 'administration.new-transaction.add',
            fieldRequired: 'administration.new-transaction.field-required',
            invalidAmount: 'administration.new-transaction.invalid-amount',
            transactionHasBeenSuccessfullyAdded: 'administration.new-transaction.transaction-has-been-successfully-added',
            errorGettingWallets: 'administration.new-transaction.error-getting-wallets',
            errorAddingNewTransaction: 'administration.new-transaction.error-adding-new-transaction'
        }
    }
};


/***/ }),

/***/ "s2ve":
/*!**********************************************************!*\
  !*** ./src/app/store/effects/new-transaction.effects.ts ***!
  \**********************************************************/
/*! exports provided: NewTransactionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTransactionEffects", function() { return NewTransactionEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/i18n/literals */ "rgVV");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions */ "v8Ou");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/notification/notification.service */ "7vTS");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _administration_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../administration/transactions/transactions.service */ "YkOR");
/* harmony import */ var _administration_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../administration/wallets/wallets.service */ "z9sC");











class NewTransactionEffects {
    constructor(actions$, notificationService, store, transactionsService, walletsService) {
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.store = store;
        this.transactionsService = transactionsService;
        this.walletsService = walletsService;
        this.getDestinationWalletsByUserId$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].getDestinationWalletsByUserId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((user) => this.walletsService.getWalletsByUserId(user.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (!response.body) {
                this.notificationService.error(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.newTransaction.errorGettingWallets);
                return _actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].getDestinationWalletsByUserIdFailed();
            }
            return _actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].getDestinationWalletsByUserIdSuccess(response);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.notificationService.error(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.newTransaction.errorGettingWallets);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].getDestinationWalletsByUserIdFailed());
        })));
        this.addNewTransaction$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].addNewTransaction), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((newTransaction) => this.transactionsService.addNewTransaction(newTransaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fromTransactionsActions"].addTransactionToList(response.body));
            if (!response.body) {
                this.notificationService.error(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.newTransaction.errorAddingNewTransaction);
                return _actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].addNewTransactionFailed();
            }
            this.notificationService.success(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.newTransaction.transactionHasBeenSuccessfullyAdded);
            return _actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].addNewTransactionSuccess(response);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.notificationService.error(src_assets_i18n_literals__WEBPACK_IMPORTED_MODULE_3__["Literal"].administration.newTransaction.errorAddingNewTransaction);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["fromNewTransactionActions"].addNewTransactionFailed());
        })));
    }
}
NewTransactionEffects.ɵfac = function NewTransactionEffects_Factory(t) { return new (t || NewTransactionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_components_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_administration_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_8__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_administration_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_9__["WalletsService"])); };
NewTransactionEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: NewTransactionEffects, factory: NewTransactionEffects.ɵfac });


/***/ }),

/***/ "svWS":
/*!**************************************************!*\
  !*** ./src/app/store/reducers/users.reducers.ts ***!
  \**************************************************/
/*! exports provided: INITIAL_USERS_STATE, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_USERS_STATE", function() { return INITIAL_USERS_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions */ "v8Ou");


const INITIAL_USERS_STATE = undefined;
const usersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(INITIAL_USERS_STATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromUsersActions"].resetState, _actions__WEBPACK_IMPORTED_MODULE_1__["fromUsersActions"].getAllUsers, _actions__WEBPACK_IMPORTED_MODULE_1__["fromUsersActions"].getAllUsersFailed, () => INITIAL_USERS_STATE), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromUsersActions"].getAllUsersSuccess, (state, data) => ({
    userList: data.body
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["fromUsersActions"].setSelectedUser, (state, data) => (Object.assign(Object.assign({}, state), { selectedUser: data }))));
function reducer(state, action) {
    return usersReducer(state, action);
}


/***/ }),

/***/ "tg95":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: fromTransactionsReducers, fromUsersReducers, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _new_transaction_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-transaction.reducers */ "p/PJ");
/* harmony import */ var _transactions_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.reducers */ "MOgX");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromTransactionsReducers", function() { return _transactions_reducers__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _users_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.reducers */ "svWS");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromUsersReducers", function() { return _users_reducers__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _wallets_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallets.reducers */ "NdIJ");




const reducers = {
    users: _users_reducers__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    wallets: _wallets_reducers__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    transactions: _transactions_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    newTransaction: _new_transaction_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};



/***/ }),

/***/ "v8Ou":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: fromNewTransactionActions, fromTransactionsActions, fromUsersActions, fromWalletsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_transaction_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-transaction.actions */ "TxrH");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromNewTransactionActions", function() { return _new_transaction_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _transactions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.actions */ "A7Qc");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromTransactionsActions", function() { return _transactions_actions__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ "U7Aq");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromUsersActions", function() { return _users_actions__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _wallets_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallets.actions */ "lMVP");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromWalletsActions", function() { return _wallets_actions__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'administration'
    },
    {
        path: 'administration',
        loadChildren: () => __webpack_require__.e(/*! import() | administration-administration-module */ "administration-administration-module").then(__webpack_require__.bind(null, /*! ./administration/administration.module */ "0JFd")).then(m => m.AdministrationModule)
    },
    {
        path: 'not-found',
        loadChildren: () => __webpack_require__.e(/*! import() | not-found-not-found-module */ "not-found-not-found-module").then(__webpack_require__.bind(null, /*! ./not-found/not-found.module */ "QFL/")).then(m => m.NotFoundModule)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vad9":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.models.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
var NotificationType;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["ERROR"] = "error";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "z9sC":
/*!***********************************************************!*\
  !*** ./src/app/administration/wallets/wallets.service.ts ***!
  \***********************************************************/
/*! exports provided: WalletsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsService", function() { return WalletsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class WalletsService {
    constructor(http) {
        this.http = http;
    }
    getWalletsByUserId(userId) {
        return this.http.get(`/user/${userId}/wallets`);
    }
}
WalletsService.ɵfac = function WalletsService_Factory(t) { return new (t || WalletsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WalletsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WalletsService, factory: WalletsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map