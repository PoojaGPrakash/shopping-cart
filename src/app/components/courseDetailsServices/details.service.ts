import { Injectable } from '@angular/core';
import { CourseDetailsService } from './course-details.service';
import { ITEMS } from './course-mock-details.service';

@Injectable()
export class DetailsService {
    selectedItems: CourseDetailsService[] = [];
    getItems(): CourseDetailsService[] {
	return ITEMS;
    }
    getSelectedItems(): CourseDetailsService[] {
	return this.selectedItems;
    }	
    addItem(id:number): void {
       let item = ITEMS.find(ob => ob.id === id);
       if (this.selectedItems.indexOf(item) < 0) {	   
	      this.selectedItems.push(item);
       }
    }
    removeItem(id:number): void {
       let item = this.selectedItems.find(ob => ob.id === id);
       let itemIndex = this.selectedItems.indexOf(item);
       this.selectedItems.splice(itemIndex, 1);
    }
} 