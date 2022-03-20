import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  openModal: boolean = false;
  users = [
    {
      id: '123456789',
      createdDate: '2021-01-06T00:00:00.000Z',
      status: 'En validation',
      firstName: 'Mohamed',
      lastName: 'Taha',
      userName: 'mtaha',
      registrationNumber: '2584',
    },
    {
      id: '987654321',
      createdDate: '2021-07-25T00:00:00.000Z',
      status: 'Validé',
      firstName: 'Hamid',
      lastName: 'Orrich',
      userName: 'horrich',
      registrationNumber: '1594',
    },
    {
      id: '852963741',
      createdDate: '2021-09-15T00:00:00.000Z',
      status: 'Rejeté',
      firstName: 'Rachid',
      lastName: 'Mahidi',
      userName: 'rmahidi',
      registrationNumber: '3576',
    },
  ];

  add_User() {
    console.log('### aDdd User');
    this.openModal = true;
  }
  delete(userId: string) {
    this.users = this.users.filter((user) => user.id !== userId);
  }
  gteClassName(value: string) {
    switch (value) {
      case 'Rejeté':
        return 'rejected';
      case 'Validé':
        return 'valide';
      case 'En validation':
        return 'on-validation';
    }
  }
}

export class DatePipeComponent {
  today: number = Date.now();
}
