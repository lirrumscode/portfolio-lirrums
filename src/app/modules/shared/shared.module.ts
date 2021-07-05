import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { ServicesComponent } from "src/app/components/services/services.component";
import { TestimonialsComponent } from "src/app/components/testimonials/testimonials.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";
import { ContactComponent } from "src/app/components/contact/contact.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    TestimonialsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    TestimonialsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SharedModule {}
