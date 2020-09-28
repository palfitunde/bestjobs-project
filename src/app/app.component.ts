import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bestjobs-project';
  @ViewChild('paidAmountModal') paidAmountModal: ModalDirective;
  public modalJob:Object = null;
  private modalRef: BsModalRef;  
  private searchCity: string;
  public jobList:Array<Object> = [
    {
      id: 1,
      company_name: 'BestJobs', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5cf52934b784e.jpg', 
      extra_info: '',
      rating: '',
      job_name: 'Senior front-end web developer',
      location: 'Târgu Mureș, Koteles',
      salary: '1800 - 2500€'
    },
    {
      id: 2,
      company_name: 'Atracore SRL', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5d023f8aaa83a.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: 'Front-end developer',
      location: 'Cluj-Napoca',
      salary: ''
    },
    {
      id: 3,
      company_name: 'Axians Infoma Romania SRL', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5a58d563b064f.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: '(Senior) SAP UI5 + OData Developer',
      location: 'Sibiu',
      salary: '1800 - 2500€'
    },
    {
      id: 4,
      company_name: 'Emerhub', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5f622fb3d8887.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: 'PHP Symfony Developer',
      location: 'Cluj-Napoca',
      salary: ''
    },
    {
      id: 5,
      company_name: 'BestJobs', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5cf52934b784e.jpg', 
      extra_info: '',
      rating: '3.6',
      job_name: 'Senior front-end web developer',
      location: 'Târgu Mureș, Koteles',
      salary: '1800 - 2500€'
    },
    {
      id: 6,
      company_name: 'Atracore SRL', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5d023f8aaa83a.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: 'Front-end developer',
      location: 'Cluj-Napoca',
      salary: ''
    },
    {
      id: 7,
      company_name: 'Axians Infoma Romania SRL', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5a58d563b064f.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: '(Senior) SAP UI5 + OData Developer',
      location: 'Sibiu',
      salary: '1800 - 2500€'
    },
    {
      id: 8,
      company_name: 'Emerhub', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5f622fb3d8887.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: 'PHP Symfony Developer',
      location: 'Cluj-Napoca',
      salary: ''
    },
    {
      id: 9,
      company_name: 'BestJobs', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5cf52934b784e.jpg', 
      extra_info: '',
      rating: '3.45',
      job_name: 'Senior front-end web developer',
      location: 'Târgu Mureș, Koteles',
      salary: '1800 - 2500€'
    },
    {
      id: 10,
      company_name: 'Atracore SRL', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5d023f8aaa83a.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: 'Front-end developer',
      location: 'Cluj-Napoca',
      salary: ''
    },
    {
      id: 11,
      company_name: 'Axians Infoma Romania SRL', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5a58d563b064f.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: '(Senior) SAP UI5 + OData Developer',
      location: 'Sibiu',
      salary: '1800 - 2500€'
    },
    {
      id: 12,
      company_name: 'Emerhub', 
      logo: 'https://imgcdn.bestjobs.eu/cdn/el/plain/employer_logo/5f622fb3d8887.png', 
      extra_info: 'Responsive Employer',
      rating: '',
      job_name: 'PHP Symfony Developer',
      location: 'Cluj-Napoca',
      salary: ''
    },
];
  constructor(library: FaIconLibrary, private modalService: BsModalService) {
    // Add multiple icons to the library
    library.addIcons(farStar, faHeart);
  }

  openModalWithClass(template: TemplateRef<any>, jobItem) { 
    this.modalJob = jobItem;
    this.modalRef = this.modalService.show(template)
  }  

  
}
