import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'watch',
    loadChildren: () => import('../pages/watch/watch.module').then(m => m.WatchModule),
  },
  { path: '**', redirectTo: 'auth/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LazyLoadModule {}
