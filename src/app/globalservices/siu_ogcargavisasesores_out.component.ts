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
 * « Implements outbound arguments global SIU SIU_OGCARGAVISASESORES »
 */
    selector: 'imes-gs-siu-ogcargavisasesores-out',
    templateUrl: './siu_ogcargavisasesores_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGCARGAVISASESORESuOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument oaProcesados */
    public oaProcesados: Field;
    /** Outbound argument oaErrores */
    public oaErrores: Field;
    /** Outbound argument oaResultado */
    public oaResultado: Field;

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
        this.iuName = 'siu_ogcargavisasesores_out';
        this.title = this.langMng.translateText('gs_OGCARGAVISASESORES',
            'Carga visibilidad Asesores');

        // Create outbound argument components
        this.oaProcesados = new Field(this.langMng);
        this.oaErrores = new Field(this.langMng);
        this.oaResultado = new Field(this.langMng);
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
            'gs_OGCARGAVISASESORES_outArg_oaProcesados',
            'Procesados');
        this.oaProcesados.dataType = Field.dtNat;
        this.oaProcesados.enabled = false;
        this.oaProcesados.assignCSS();

        this.oaErrores.nameInRequest = 'oaerrores';
        this.oaErrores.alias = this.langMng.translateText(
            'gs_OGCARGAVISASESORES_outArg_oaErrores',
            'Errores');
        this.oaErrores.dataType = Field.dtNat;
        this.oaErrores.enabled = false;
        this.oaErrores.assignCSS();

        this.oaResultado.nameInRequest = 'oaresultado';
        this.oaResultado.alias = this.langMng.translateText(
            'gs_OGCARGAVISASESORES_outArg_oaResultado',
            'Resultado');
        this.oaResultado.dataType = Field.dtText;
        this.oaResultado.enabled = false;
        this.oaResultado.assignCSS();

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
        this.oaProcesados.value =
            this.serviceResponse[this.oaProcesados.nameInRequest];
        this.oaErrores.value =
            this.serviceResponse[this.oaErrores.nameInRequest];
        this.oaResultado.value =
            this.serviceResponse[this.oaResultado.nameInRequest];
    }

    /**
     * Returns the context information
     */
    public override getContext(): any {
        return this.context;
    }
}
