import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { ExitGuard } from '~/app/guards/exit/exit.guard';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    canDeactivate: [ExitGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContentRoutingModule {}
