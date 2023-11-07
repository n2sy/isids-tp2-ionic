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

  addCourse(newCourse) {
    newCourse.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    // delete newCourse.author;
    // console.log(newCourse);
    newCourse.keywords = newCourse.keywords.split(',');
    console.log(newCourse);

    this.tabCourses.push(newCourse);
  }

  getCourseById(idCourse) {
    return this.tabCourses.find((element) => element.id == idCourse);
  }

  deleteCourse(course) {
    let i = this.tabCourses.indexOf(course);
    this.tabCourses.splice(i, 1);

    // console.log('Avant filter', this.tabCourses);

    // this.tabCourses = this.tabCourses.filter(
    //   (element) => element.id != course.id
    // );
    // console.log('Apres filter', this.tabCourses);
  }

  getAllCourses() {
    return this.tabCourses;
  }
}
