import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

//Containers
import { StatsComponent } from './container/stats/stats.component';

//Component
import { StatsCardComponent } from './component/stats-card/stats-card.component';
import { HttpClientModule } from '@angular/common/http';

//Services
import { StatsGithubService } from './service/stats-github.service';

//Store

import * as fromStore from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, StatsComponent, StatsCardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(fromStore.reducers, {}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [StatsGithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
