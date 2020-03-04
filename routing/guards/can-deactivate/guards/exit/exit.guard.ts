import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from '~/app/interfaces/can-deactivate-component.interface';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent): Observable<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
