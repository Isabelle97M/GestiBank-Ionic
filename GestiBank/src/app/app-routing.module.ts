import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'converter',
    loadChildren: () => import('./converter/converter.module').then( m => m.ConverterPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'administrator-home',
    loadChildren: () => import('./administrator-home/administrator-home.module').then( m => m.AdministratorHomePageModule)
  },
  {
    path: 'agent-home',
    loadChildren: () => import('./agent-home/agent-home.module').then( m => m.AgentHomePageModule)
  },
  {
    path: 'customers-list',
    loadChildren: () => import('./customers-list/customers-list.module').then( m => m.CustomersListPageModule)
  },
  {
    path: 'customer-update',
    loadChildren: () => import('./customer-update/customer-update.module').then( m => m.CustomerUpdatePageModule)
  },
  {
    path: 'agents-list',
    loadChildren: () => import('./agents-list/agents-list.module').then( m => m.AgentsListPageModule)
  },
  {
    path: 'admins-list',
    loadChildren: () => import('./admins-list/admins-list.module').then( m => m.AdminsListPageModule)
  },
  {
    path: 'add-staff',
    loadChildren: () => import('./add-staff/add-staff.module').then( m => m.AddStaffPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
