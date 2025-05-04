import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
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

const routes: Routes = [
    { path: 'siu_ogsolicitudfisicaleer' , component: GSSIUuOGSOLICITUDFISICALEERComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogsolicitudfisicaleer_out' , component: GSSIUuOGSOLICITUDFISICALEERuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogsolnovsettramitado' , component: GSSIUuOGSOLNOVSETTRAMITADOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogsolnovsettramitado_out' , component: GSSIUuOGSOLNOVSETTRAMITADOuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogasigusuarios' , component: GSSIUuOGASIGUSUARIOSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogasigusuarios_out' , component: GSSIUuOGASIGUSUARIOSuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogcargavisasesores' , component: GSSIUuOGCARGAVISASESORESComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogcargavisasesores_out' , component: GSSIUuOGCARGAVISASESORESuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogcargaplanasesor' , component: GSSIUuOGCARGAPLANASESORComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogcargaplanasesor_out' , component: GSSIUuOGCARGAPLANASESORuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalServicesRoutingModule { }
