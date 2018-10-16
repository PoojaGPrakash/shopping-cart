import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/headerComponent/header.component';
import { FooterComponent } from './components/footerComponent/footer.component';
import { LoginComponent } from './components/loginComponent/login.component';
import { IndexComponent } from './components/index.component';
import { RegisterComponent } from './components/registerComponent/register.component';
import { CoursesComponent } from './components/coursesComponent/courses.component';
import { CourseService } from './components/course.service';
import { HomepageComponent } from './components/homepageComponent/homepage.component';
import { AboutComponent } from './components/aboutComponent/about.component';
import { SummaryPipe } from './components/summary.pipe';
// import { CourseDetailsService } from './components/courseDetailsServices/course-details.service';
import { DetailsService } from './components/courseDetailsServices/details.service';
import { CartComponent } from './components/cartComponent/cart.component';
import { ContactUsComponent } from './components/contact-usComponent/contact-us.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component : HomepageComponent},
      {path: 'home', component : HomepageComponent},
      {path : 'register' , component : RegisterComponent },
      {path : 'login' , component : LoginComponent },
      {path : 'courses' , component : CoursesComponent },
      {path : 'about' , component : AboutComponent},
      {path: 'contactus', component : ContactUsComponent},
      {path : 'courses/cart' , component : CartComponent}

    ])
    ],
  declarations: [IndexComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, CoursesComponent, HomepageComponent, AboutComponent, SummaryPipe, CartComponent, ContactUsComponent],
  bootstrap: [
    IndexComponent
    ],
  providers: [
  DetailsService,
  CourseService
  ]
})
export class AppModule { }
