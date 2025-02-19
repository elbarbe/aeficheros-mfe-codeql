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
    selector: 'imes-gs-siu-ogsolnovsettramitado-out',
    templateUrl: './siu_ogsolnovsettramitado_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGSOLNOVSETTRAMITADOuOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument oaNumProcesados */
    public oaNumProcesados: Field;
    /** Outbound argument oaNumErrores */
    public oaNumErrores: Field;
    /** Outbound argument oaErrores */
    public oaErrores: Field;

    /** Service request */
    private serviceRequest: any;
    /** Service response */
    private serviceResponse: any;
    /** Context */
    private readonly context: {exchangeInfo: ExchangeInfo} = {exchangeInfo: new ExchangeInfo()};

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
        this.iuName = 'siu_ogsolnovsettramitado_out';
        this.title = this.langMng.translateText('gs_OGSOLNOVSETTRAMITADO',
            'Marcar como tramitadas las Solicitudes de Novedad');

        // Create outbound argument components
        this.oaNumProcesados = new Field(this.langMng);
        this.oaNumErrores = new Field(this.langMng);
        this.oaErrores = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initialize(): void {
        this.oaNumProcesados.nameInRequest = 'oanumprocesados';
        this.oaNumProcesados.alias = this.langMng.translateText(
            'gs_OGSOLNOVSETTRAMITADO_outArg_oaNumProcesados',
            'Num Procesados');
        this.oaNumProcesados.dataType = Field.dtInt;
        this.oaNumProcesados.enabled = false;
        this.oaNumProcesados.assignCSS();

        this.oaNumErrores.nameInRequest = 'oanumerrores';
        this.oaNumErrores.alias = this.langMng.translateText(
            'gs_OGSOLNOVSETTRAMITADO_outArg_oaNumErrores',
            'Num Errores');
        this.oaNumErrores.dataType = Field.dtInt;
        this.oaNumErrores.enabled = false;
        this.oaNumErrores.assignCSS();

        this.oaErrores.nameInRequest = 'oaerrores';
        this.oaErrores.alias = this.langMng.translateText(
            'gs_OGSOLNOVSETTRAMITADO_outArg_oaErrores',
            'Errores');
        this.oaErrores.dataType = Field.dtText;
        this.oaErrores.enabled = false;
        this.oaErrores.assignCSS();

        // Get request and response from the exchange information
        this.context.exchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);
        if (this.context.exchangeInfo) {
            this.serviceRequest = this.context.exchangeInfo.customData.request;
            this.serviceResponse = this.context.exchangeInfo.customData.response;
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
        this.oaNumProcesados.value =
            this.serviceResponse[this.oaNumProcesados.nameInRequest];
        this.oaNumErrores.value =
            this.serviceResponse[this.oaNumErrores.nameInRequest];
        this.oaErrores.value =
            this.serviceResponse[this.oaErrores.nameInRequest];
    }

    /**
     * Returns the context information
     */
    public override getContext(): any {
        return this.context;
    }
}
