import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
      keywords: ['module', 'component', 'binding'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Anis Zouari',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      keywords: ['activity', 'intent', 'xml'],
    },
  ];
  constructor() {}

  getCourseById(idCourse) {
    return this.tabCourses.find((element) => element.id == idCourse);
  }

  getAllCourses() {
    return this.tabCourses;
  }
}
