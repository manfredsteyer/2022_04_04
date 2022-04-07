import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { FlightService } from './flight.service';

fdescribe('FlightService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FlightService);
  });

  it('should load flights ', () => {

    const ctrl = TestBed.inject(HttpTestingController);

    service.find('Graz', 'Hamburg').subscribe(flights => {
      expect(flights.length).toBe(3);
    })

    const req = ctrl.expectOne('http://www.angular.at/api/flight?from=Graz&to=Hamburg');
    
    // const reqs = ctrl.match(p => p.url.startsWith('http://www.angular.at/api/flight')
    //   && p.method === 'GET'
    //   && p.params.get('from') == 'Graz'
    // )

    // reqs[0].flush(...)
    
    req.flush([
      { id: 1, from: 'Nürnberg', to: 'Flagranti', date: '2022-02-22T13:00+01:00', delayed: false },
      { id: 2, from: 'Nürnberg', to: 'Kognito', date: '2022-02-22T13:20+01:00', delayed: false },
      { id: 3, from: 'Nürnberg', to: 'Mallorca', date: '2022-02-22T13:40+01:00', delayed: false },
    ]);

  });
});
