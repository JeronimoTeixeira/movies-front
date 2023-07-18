import { Route } from '@angular/router';
import { AuthGuard } from './modules/shared/guards/auth.guard';

export const appRoutes: Route[] = [
    {
        path: "",
        loadChildren: ()=> import('./modules/login/login.module').then( m => m.LoginModule)
    },
    {
        path: "movies",
        loadChildren: ()=> import('./modules/movies/movies.module').then( m => m.MoviesModule),
        canActivate: [AuthGuard]
    }

];
