import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthenticationGuard } from './guards/authGuard';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: '**',
          component: LoginComponent
        }
      ],
      canActivateChild: [AuthenticationGuard]
    },
    {
      path: '**',
      redirectTo: 'login'
    }
  ];

export const appRoutingModule = RouterModule.forRoot(routes);
