import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseSer: ListCoursesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    let selectedId = this.activatedRoute.snapshot.paramMap.get('id');
    this.selectedCourse = this.courseSer.getCourseById(selectedId);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sur de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
        'Non',
      ],
    });

    await alert.present();
  }
}
