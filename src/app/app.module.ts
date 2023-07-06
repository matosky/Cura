import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from "./components/header/header.component";
import { FeedbackComponent } from './modules/feedback/feedback.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ComplaintsHeaderComponent } from './components/complaints-header/complaints-header.component';
import { DropDownBoxComponent } from './components/drop-down-box/drop-down-box.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FeedbackComponent,
    ButtonComponent,
    InputComponent,
    ComplaintsHeaderComponent,
    DropDownBoxComponent,
    MobileNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
