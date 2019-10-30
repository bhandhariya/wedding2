import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { StoryComponent } from './shared/story/story.component';
import { TimerComponent } from './shared/timer/timer.component';
import { JourneyComponent } from './shared/journey/journey.component';
import { MomentComponent } from './shared/moment/moment.component';
import { ReserveComponent } from './shared/reserve/reserve.component';
import { ProgressComponent } from './shared/progress/progress.component';
import { ClientComponent } from './shared/client/client.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    StoryComponent,
    TimerComponent,
    JourneyComponent,
    MomentComponent,
    ReserveComponent,
    ProgressComponent,
    ClientComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
