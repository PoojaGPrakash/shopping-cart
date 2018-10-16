import { Component } from '@angular/core';
import { CourseService } from '../course.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  // providers: [CourseService]
})
export class HomepageComponent {

  title = "WebTech Careers";
  imgUrl1 = "http://www.pngall.com/wp-content/uploads/2016/07/Technology.png";
  imgUrl2 = "https://www.murciastudio.es/wp-content/uploads/2015/01/languages.png";
  imgUrl3 = "http://jujuapps.com/wp-content/uploads/2015/09/responsive-design1.png";
  subheadinghomepage = `"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."`;
  somedata = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text.`;

  text = ` It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
				from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English
				versions from the 1914 translation by H. Rackham.`;
  courses;
  constructor( service: CourseService) {
    this.courses = service.getCourses();
  }

}