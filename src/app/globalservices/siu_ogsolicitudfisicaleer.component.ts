import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldBlob } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements global SIU SIU_OGSOLICITUDFISICALEER »
 */
@Component({
    selector: 'imes-gs-siu-ogsolicitudfisicaleer',
    templateUrl: './siu_ogsolicitudfisicaleer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGSOLICITUDFISICALEERComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public puArchivo: FieldBlob;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'IGl_1436519235584156UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuuogsolicitudfisicaleer;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'OGSOLICITUDFISICALEER';
        this.title = this.langMng.translateText('gs_OGSOLICITUDFISICALEER',
            'Carga masiva solicitudes físicas');

        // Create inbound argument components
        this.puArchivo = new FieldBlob(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puArchivo.nameInRequest = 'p_archivo';
        this.puArchivo.alias = this.langMng.translateText(
            'gs_OGSOLICITUDFISICALEER_inArg_p_Archivo',
            'Seleccione archivo');
        this.puArchivo.mandatory = true;
        this.puArchivo.dataType = Field.dtBlob;
        this.puArchivo.assignCSS();
        this.fields.push(this.puArchivo);
    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public override processOutboundArguments(request: any, response: any): boolean {
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_ogsolicitudfisicaleer_out',
            this.context.exchangeInfo ? this.context.exchangeInfo.previous : null,
            this.context.exchangeInfo ? this.context.exchangeInfo.comeBackContext : null, request, response);
        return true;
    }
}
