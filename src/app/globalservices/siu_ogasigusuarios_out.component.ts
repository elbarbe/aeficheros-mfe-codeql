import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { AbstractIU } from '../common/baseIUElements';
import { Field } from '../common/baseIUElements';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
/**
 * « Implements outbound arguments global SIU SIU_OGASIGUSUARIOS »
 */
    selector: 'imes-gs-siu-ogasigusuarios-out',
    templateUrl: './siu_ogasigusuarios_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGASIGUSUARIOSuOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument oaProcesados */
    public oaProcesados: Field;
    /** Outbound argument oaErrores */
    public oaErrores: Field;
    /** Outbound argument oaTextoErrores */
    public oaTextoErrores: Field;

    /** Service request */
    private serviceRequest: any;
    /** Service response */
    private serviceResponse: any;
    /** Exchange info */
    private exchangeInfo: ExchangeInfo = new ExchangeInfo();

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param condNavMng Conditinal navigation manager
     */
    constructor(
        protected override appGlobalInfo: AppGlobalInfo,
        protected override util: Util,
        protected override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.className = ModelConstants.Globalservices.name;
        this.iuName = 'siu_ogasigusuarios_out';
        this.title = this.langMng.translateText('gs_OGASIGUSUARIOS',
            'Reasignación usuarios por archivo plano');

        // Create outbound argument components
        this.oaProcesados = new Field(this.langMng);
        this.oaErrores = new Field(this.langMng);
        this.oaTextoErrores = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initialize(): void {
        this.oaProcesados.nameInRequest = 'oaprocesados';
        this.oaProcesados.alias = this.langMng.translateText(
            'gs_OGASIGUSUARIOS_outArg_oaProcesados',
            'Num procesados');
        this.oaProcesados.dataType = Field.dtNat;
        this.oaProcesados.enabled = false;
        this.oaProcesados.assignCSS();

        this.oaErrores.nameInRequest = 'oaerrores';
        this.oaErrores.alias = this.langMng.translateText(
            'gs_OGASIGUSUARIOS_outArg_oaErrores',
            'Num. errores');
        this.oaErrores.dataType = Field.dtNat;
        this.oaErrores.enabled = false;
        this.oaErrores.assignCSS();

        this.oaTextoErrores.nameInRequest = 'oatextoerrores';
        this.oaTextoErrores.alias = this.langMng.translateText(
            'gs_OGASIGUSUARIOS_outArg_oaTextoErrores',
            'Errores');
        this.oaTextoErrores.dataType = Field.dtText;
        this.oaTextoErrores.enabled = false;
        this.oaTextoErrores.assignCSS();

        // Get request and response from the exchange information
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);
        if (this.exchangeInfo) {
            this.serviceRequest = this.exchangeInfo.customData.request;
            this.serviceResponse = this.exchangeInfo.customData.response;
            if (this.serviceRequest && this.serviceResponse) {
                this.initializeFromResponse();
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Initialize the scenario using the response information
     */
    public initializeFromResponse(): void {
        this.oaProcesados.value =
            this.serviceResponse[this.oaProcesados.nameInRequest];
        this.oaErrores.value =
            this.serviceResponse[this.oaErrores.nameInRequest];
        this.oaTextoErrores.value =
            this.serviceResponse[this.oaTextoErrores.nameInRequest];
    }

}
