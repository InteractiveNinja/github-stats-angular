import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

//Containers
import { StatsComponent } from './container/stats/stats.component';

//Component
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { HttpClientModule } from '@angular/common/http';

//Services
import { StatsGithubService } from './service/stats-github.service';

//Store

import * as fromStore from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StatsRepoCardComponent } from './components/stats-repo-card/stats-repo-card.component';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    StatsCardComponent,
    StatsRepoCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(fromStore.reducers, {}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
  ],
  providers: [StatsGithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
