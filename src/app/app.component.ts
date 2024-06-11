import { Component, OnInit, ViewChild, } from '@angular/core';
import { BookService } from './services/book.service';
import { NgSelectComponent } from '@ng-select/ng-select';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public newBooks: string[]=[];
  constructor(private bookservice: BookService) { }
  public books$: string[]=[];
  @ViewChild('mySelect') mySelect!: NgSelectComponent;
  @ViewChild('myHeader')  myHeader!: HTMLElement;
  public showHandle = false;
  private _pageNumber = 1;
  ngOnInit(): void {
    this.loadData();
  }
  private loadData(pageNumber = this._pageNumber) {
    this.bookservice.getBook(pageNumber).subscribe({
      next: (book) => {
          this.newBooks = book.docs.map((book) => book.title);
          this.books$=[...this.books$,...this.newBooks];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onScrollToEnd() {
    this._pageNumber += 1;
    this.loadData(this._pageNumber);
    console.log(this.books$.length)
  }
  refreshNgSelect() {
    this.mySelect.detectChanges();
  }
  public _listbooks$: string[] = [];
  onMaterialGroupChange(event: any) {
    if (event != null) {
      this._listbooks$.push(event);
      console.log(this._listbooks$);
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._listbooks$, event.previousIndex, event.currentIndex);
  }
  delete(book: string, index: number): void {
    this._listbooks$.splice(index, 1);
  }
}
