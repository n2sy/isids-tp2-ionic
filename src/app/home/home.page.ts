import { Component } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  allCourses = [];

  constructor(private courseSer: ListCoursesService, private router: Router) {}

  ngOnInit() {
    this.allCourses = this.courseSer.getAllCourses();
  }

  // goToDetails(id) {
  //   this.router.navigate(['/details', id]);
  //   this.router.navigateByUrl('/nidhal/amine');
  // }
}
