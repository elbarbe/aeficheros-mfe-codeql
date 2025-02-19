import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldBlob } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-gs-siu-ogsolnovsettramitado',
    templateUrl: './siu_ogsolnovsettramitado.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGSOLNOVSETTRAMITADOComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptFichero: FieldBlob;

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
        this.idXML = 'IGl_1584043524096102UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuuogsolnovsettramitado;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'OGSOLNOVSETTRAMITADO';
        this.title = this.langMng.translateText('gs_OGSOLNOVSETTRAMITADO',
            'Marcar como tramitadas las Solicitudes de Novedad');

        // Create inbound argument components
        this.ptFichero = new FieldBlob(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptFichero.nameInRequest = 'ptfichero';
        this.ptFichero.alias = this.langMng.translateText(
            'gs_OGSOLNOVSETTRAMITADO_inArg_ptFichero',
            'Fichero');
        this.ptFichero.mandatory = true;
        this.ptFichero.dataType = Field.dtBlob;
        this.ptFichero.assignCSS();
        this.fields.push(this.ptFichero);
    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public override processOutboundArguments(request: any, response: any): boolean {
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_ogsolnovsettramitado_out',
            this.context.exchangeInfo ? this.context.exchangeInfo.previous : null,
            this.context.exchangeInfo ? this.context.exchangeInfo.comeBackContext : null, request, response);
        return true;
    }
}
