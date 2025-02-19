import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
import { GSSIUuOGSOLICITUDFISICALEERComponent } from './siu_ogsolicitudfisicaleer.component';
import { GSSIUuOGSOLICITUDFISICALEERuOutComponent } from './siu_ogsolicitudfisicaleer_out.component';
import { GSSIUuOGSOLNOVSETTRAMITADOComponent } from './siu_ogsolnovsettramitado.component';
import { GSSIUuOGSOLNOVSETTRAMITADOuOutComponent } from './siu_ogsolnovsettramitado_out.component';
import { GSSIUuOGASIGUSUARIOSComponent } from './siu_ogasigusuarios.component';
import { GSSIUuOGASIGUSUARIOSuOutComponent } from './siu_ogasigusuarios_out.component';
import { GSSIUuOGCARGAVISASESORESComponent } from './siu_ogcargavisasesores.component';
import { GSSIUuOGCARGAVISASESORESuOutComponent } from './siu_ogcargavisasesores_out.component';
import { GSSIUuOGCARGAPLANASESORComponent } from './siu_ogcargaplanasesor.component';
import { GSSIUuOGCARGAPLANASESORuOutComponent } from './siu_ogcargaplanasesor_out.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GlobalServicesRoutingModule
  ],
  declarations: [
    GSSIUuOGSOLICITUDFISICALEERComponent,
    GSSIUuOGSOLICITUDFISICALEERuOutComponent,
    GSSIUuOGSOLNOVSETTRAMITADOComponent,
    GSSIUuOGSOLNOVSETTRAMITADOuOutComponent,
    GSSIUuOGASIGUSUARIOSComponent,
    GSSIUuOGASIGUSUARIOSuOutComponent,
    GSSIUuOGCARGAVISASESORESComponent,
    GSSIUuOGCARGAVISASESORESuOutComponent,
    GSSIUuOGCARGAPLANASESORComponent,
    GSSIUuOGCARGAPLANASESORuOutComponent
  ],
  exports: [
    GSSIUuOGSOLICITUDFISICALEERComponent,
    GSSIUuOGSOLICITUDFISICALEERuOutComponent,
    GSSIUuOGSOLNOVSETTRAMITADOComponent,
    GSSIUuOGSOLNOVSETTRAMITADOuOutComponent,
    GSSIUuOGASIGUSUARIOSComponent,
    GSSIUuOGASIGUSUARIOSuOutComponent,
    GSSIUuOGCARGAVISASESORESComponent,
    GSSIUuOGCARGAVISASESORESuOutComponent,
    GSSIUuOGCARGAPLANASESORComponent,
    GSSIUuOGCARGAPLANASESORuOutComponent
  ]
})
export class GlobalServicesModule { }
