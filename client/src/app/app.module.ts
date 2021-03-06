import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "./material/material.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { UserService } from "./user.service";
import { UserMedicinesService } from "./user-medicines.service";
import { FormsModule } from "@angular/forms";
import { PostComponent } from "./dashboard/post/post.component";
import { SearchComponent } from "./search/search.component";
import { HospitalComponent } from "./search/hospital/hospital.component";
import { SchoolComponent } from "./search/school/school.component";
import { CaretakerComponent } from "./search/caretaker/caretaker.component";
import { GearComponent } from "./search/gear/gear.component";
import { TabModule } from "angular-tabs-component";
import { SearchService } from './search/search.service';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavigationComponent,
    PostComponent,
    SearchComponent,
    HospitalComponent,
    SchoolComponent,
    CaretakerComponent,
    GearComponent,
    HelpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    TabModule
  ],
  providers: [UserService, UserMedicinesService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
