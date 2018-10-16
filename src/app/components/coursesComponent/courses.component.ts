import { Component } from '@angular/core';
import { CourseDetailsService } from '../courseDetailsServices/course-details.service';
import { DetailsService} from '../courseDetailsServices/details.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
 storeItems: CourseDetailsService[] = [];
   constructor(private detailsService: DetailsService) { }
   getStoreItems(): void {
        this.storeItems = this.detailsService.getItems();
   }
   ngOnInit(): void {
        this.getStoreItems();
   }
   addItemInCart(id:number): void {
	this.detailsService.addItem(id);
   }
}