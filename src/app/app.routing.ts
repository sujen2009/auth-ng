import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthenticationGuard } from './guards/authGuard';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';

const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    }
  ];

export const appRoutingModule = RouterModule.forRoot(routes);
