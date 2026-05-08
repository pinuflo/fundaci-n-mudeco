import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MissionComponent } from './components/mission/mission.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ImpactComponent } from './components/impact/impact.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [
        NavbarComponent,
        HeroComponent,
        AboutComponent,
        MissionComponent,
        ProgramsComponent,
        ImpactComponent,
        ContactComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fundación MUDECU';
}
