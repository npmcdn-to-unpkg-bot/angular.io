import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { MissionControlComponent } from './missioncontrol.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';

let directives: any[] = [
    AppComponent,
    AstronautComponent,
    CountdownTimerComponent,
    HeroChildComponent,
    HeroParentComponent,
    MissionControlComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent
  ];

// Include Countdown examples
// unless in e2e tests which they break.
if (!/e2e/.test(location.search)) {
  console.log('adding countdown timer examples');
  directives.push(CountdownLocalVarParentComponent);
  directives.push(CountdownViewChildParentComponent);
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: directives,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
