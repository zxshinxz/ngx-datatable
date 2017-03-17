import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-pager',
  template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a
          href="javascript:void(0)"
          (click)="selectPage(1)">
          <img *ngIf="!canPrevious()" src="assets/img/ic_pagenation_left2_no.png">
          <img *ngIf="canPrevious()" src="assets/img/ic_pagenation_left2.png">
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a
          href="javascript:void(0)"
          (click)="prevPage()">
          <img *ngIf="!canPrevious()" src="assets/img/ic_pagenation_left_no.png">
          <img *ngIf="canPrevious()" src="assets/img/ic_pagenation_left.png">
        </a>
      </li>
      
      <div class="page-counter">
        <li class="current-page">{{page}}</li>
        <li>/</li>
        <li class="total-page">{{totalPages}}</li>
      </div>
      <li>
        <a
          href="javascript:void(0)"
          (click)="nextPage()">
          <img *ngIf="!canNext()" src="assets/img/ic_pagenation_right_no.png">
          <img *ngIf="canNext()" src="assets/img/ic_pagenation_right.png">
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          (click)="selectPage(totalPages)">
          <img *ngIf="!canNext()" src="assets/img/ic_pagenation_right2_no.png">
          <img *ngIf="canNext()" src="assets/img/ic_pagenation_right2.png">
        </a>
      </li>
    </ul>
  `,
  host: {
    class: 'datatable-pager'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePagerComponent {

  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;

  @Input()
  set size(val: number) {
    this._size = val;
    this.pages = this.calcPages();
  }

  get size(): number {
    return this._size;
  }

  @Input()
  set count(val: number) {
    this._count = val;
    this.pages = this.calcPages();
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set page(val: number) {
    this._page = val;
    this.pages = this.calcPages();
  }

  get page(): number {
    return this._page;
  }

  get totalPages(): number {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  @Output() change: EventEmitter<any> = new EventEmitter();

  _count: number = 0;
  _page: number = 1;
  _size: number = 0;
  pages: any;

  canPrevious(): boolean {
    return this.page > 1;
  }

  canNext(): boolean {
    return this.page < this.totalPages;
  }

  prevPage(): void {
    this.selectPage(this.page - 1);
  }

  nextPage(): void {
    this.selectPage(this.page + 1);
  }

  selectPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;

      this.change.emit({
        page
      });
    }
  }

  calcPages(page?: number): any[] {
    let pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    let maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;

    page = page || this.page;

    if (isMaxSized) {
      startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
      endPage = Math.min(startPage + maxSize - 1, this.totalPages);
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: <string><any>num
      });
    }

    return pages;
  }

}
