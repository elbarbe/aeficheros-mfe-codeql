import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Global services
 */
export class GlobalServicesServices extends AbstractServices {

    private oGSOLICITUDFISICALEERSrvName = 'OGSOLICITUDFISICALEER';
    private oGSOLNOVSETTRAMITADOSrvName = 'OGSOLNOVSETTRAMITADO';
    private oGASIGUSUARIOSSrvName = 'OGASIGUSUARIOS';
    private oGCARGAVISASESORESSrvName = 'OGCARGAVISASESORES';
    private oGCARGAPLANASESORSrvName = 'OGCARGAPLANASESOR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GlobalServices');
    }

    /**
     * Call to the service 'OGSOLICITUDFISICALEER' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puArchivoInArg Mandatory argument 'p_Archivo'
     */
    public oGSOLICITUDFISICALEER(
        puArchivoInArg: string):
        Promise<ErrorInformation | {
            ps_archivoresultado: string,
            ps_nombrearchivoresultado: string,
            ps_resultado: string
        }> {
        const request: {
            p_archivo: string
        } = {
            p_archivo: puArchivoInArg
        };
        return new Promise<ErrorInformation | {
            ps_archivoresultado: string,
            ps_nombrearchivoresultado: string,
            ps_resultado: string
        }> ((resolve, reject) => {
            this.callService(this.oGSOLICITUDFISICALEERSrvName, request).then((response: any) => {
                resolve({
                    ps_archivoresultado: response.ps_archivoresultado,
                    ps_nombrearchivoresultado: response.ps_nombrearchivoresultado,
                    ps_resultado: response.ps_resultado
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGSOLNOVSETTRAMITADO' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptFicheroInArg Mandatory argument 'ptFichero'
     */
    public oGSOLNOVSETTRAMITADO(
        ptFicheroInArg: string):
        Promise<ErrorInformation | {
            oanumprocesados: number,
            oanumerrores: number,
            oaerrores: string
        }> {
        const request: {
            ptfichero: string
        } = {
            ptfichero: ptFicheroInArg
        };
        return new Promise<ErrorInformation | {
            oanumprocesados: number,
            oanumerrores: number,
            oaerrores: string
        }> ((resolve, reject) => {
            this.callService(this.oGSOLNOVSETTRAMITADOSrvName, request).then((response: any) => {
                resolve({
                    oanumprocesados: response.oanumprocesados,
                    oanumerrores: response.oanumerrores,
                    oaerrores: response.oaerrores
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGASIGUSUARIOS' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptFicheroInArg Mandatory argument 'ptFichero'
     */
    public oGASIGUSUARIOS(
        ptFicheroInArg: string):
        Promise<ErrorInformation | {
            oaprocesados: number,
            oaerrores: number,
            oatextoerrores: string
        }> {
        const request: {
            ptfichero: string
        } = {
            ptfichero: ptFicheroInArg
        };
        return new Promise<ErrorInformation | {
            oaprocesados: number,
            oaerrores: number,
            oatextoerrores: string
        }> ((resolve, reject) => {
            this.callService(this.oGASIGUSUARIOSSrvName, request).then((response: any) => {
                resolve({
                    oaprocesados: response.oaprocesados,
                    oaerrores: response.oaerrores,
                    oatextoerrores: response.oatextoerrores
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGCARGAVISASESORES' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptFicheroInArg Mandatory argument 'ptFichero'
     */
    public oGCARGAVISASESORES(
        ptFicheroInArg: string):
        Promise<ErrorInformation | {
            oaprocesados: number,
            oaerrores: number,
            oaresultado: string
        }> {
        const request: {
            ptfichero: string
        } = {
            ptfichero: ptFicheroInArg
        };
        return new Promise<ErrorInformation | {
            oaprocesados: number,
            oaerrores: number,
            oaresultado: string
        }> ((resolve, reject) => {
            this.callService(this.oGCARGAVISASESORESSrvName, request).then((response: any) => {
                resolve({
                    oaprocesados: response.oaprocesados,
                    oaerrores: response.oaerrores,
                    oaresultado: response.oaresultado
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGCARGAPLANASESOR' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptFicheroInArg Mandatory argument 'ptFichero'
     */
    public oGCARGAPLANASESOR(
        ptFicheroInArg: string):
        Promise<ErrorInformation | {
            oaprocesados: number,
            oaerrores: number,
            oaresultado: string
        }> {
        const request: {
            ptfichero: string
        } = {
            ptfichero: ptFicheroInArg
        };
        return new Promise<ErrorInformation | {
            oaprocesados: number,
            oaerrores: number,
            oaresultado: string
        }> ((resolve, reject) => {
            this.callService(this.oGCARGAPLANASESORSrvName, request).then((response: any) => {
                resolve({
                    oaprocesados: response.oaprocesados,
                    oaerrores: response.oaerrores,
                    oaresultado: response.oaresultado
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
