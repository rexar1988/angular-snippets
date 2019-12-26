import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { NodeInterface } from '~/app/pages/admin/interfaces/nodeInterface';
import { TablePatternsEnum } from '~/app/pages/admin/modules/admin-table/enums/table-patterns.enum';

import { NodeService } from '~/app/pages/admin/services/node/node.service';
import { CanDeactivateComponent } from '~/app/interfaces/can-deactivate-component.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy, CanDeactivateComponent {
  private isObservablesAlive = true;
  tablePatterns: typeof TablePatternsEnum = TablePatternsEnum;
  nodes: NodeInterface[] = [];
  //
  saved = false;

  constructor(private nodeService: NodeService) { }

  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Вы хотите покинуть страницу?');
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.nodeService.getAll()
      .pipe(takeWhile(() => this.isObservablesAlive))
      .subscribe((nodes: NodeInterface[]) => {
        this.nodes = nodes;
      });
  }

  ngOnDestroy(): void {
    this.isObservablesAlive = false;
  }

  onNodeCreate(): void {}

  onNodeEdit(id: number): void {}

  onNodeDelete(id: number, title: string): void {}
}
