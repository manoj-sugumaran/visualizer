import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest.api.service';
import { Ng2SmartTableModule , LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {

  sourceConfig: LocalDataSource; // add a property to the component
  settingsConfig = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      module: {
        title: 'Module'
      },
      name: {
        title: 'Name'
      },
      value: {
        title: 'Value'
      },
      os_type: {
        title: 'OS_Type'
      }
    }
  };
  constructor( private restService: RestApiService) {
   }
  channels : any[] = null; 
  config : any[] = null;
  ngOnInit() {
    this.onGet();
  }

  onGet() {
  	this.restService.getTags().subscribe(
  		(data: any) => {
				// const data = response.json();
        this.channels = data;
  		},
  		(error) => console.log(error)
      )
    //Config
    this.restService.getConfig().subscribe(
        (data: any) => {
          // const data = response.json();
          this.config = data;
          this.sourceConfig = new LocalDataSource(this.config); // create the source
        },
        (error) => console.log(error)
        )
  }

  onSaveConfig(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve(event.newData);
      //call update config api
      let config = { "module" : event.newData.module ,
                  "name" : event.newData.name ,
                  "value" : event.newData.value,
                  "os_type" : event.newData.os_type 
       }
       this.restService.addConfig(config)
              .subscribe(response => event.confirm.resolve(event.newData),
              err => console.log(err));
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfig(event) {
    if (window.confirm('Are you sure you want to Delete?')) {
      event.confirm.resolve(event.data);
      //call delete config api
      let module = event.data.module;
       this.restService.deleteConfig(module)
              .subscribe(response => console.log(response),
              err => console.log(err));
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfig(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.confirm.resolve(event.newData);
      //call save config api
      let config = { "module" : event.newData.module ,
                  "name" : event.newData.name ,
                  "value" : event.newData.value,
                  "os_type" : event.newData.os_type 
     }
     this.restService.addConfig(config)
                .subscribe(response => event.confirm.resolve(event.newData),
                err => console.log(err));
    } else {
      event.confirm.reject();
    }
  }
  
}
