import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Photo } from 'src/app/_models/photo';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(private autherService: AuthService, private userService: UserService, private alertity: AlertifyService) {}

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    console.log('USER ID', this.autherService.decodedToken.nameid);
    this.uploader = new FileUploader({
      url:
        this.baseUrl + 'users/' + this.autherService.decodedToken.nameid +  '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 2024 * 2024
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };

        this.photos.push(photo);
      }
    };
  }

  setMainPhoto(photo: Photo) {
    this.userService.setMainPhoto(this.autherService.decodedToken.nameid,
      photo.id).subscribe(() => {
        this.currentMain = this.photos.filter(p => p.isMain === true)[0];
        this.currentMain.isMain = false;
        photo.isMain = true;
        this.getMemberPhotoChange.emit(photo.url);
        console.log('Successfully set to main');
      }, error => {
        this.alertity.error(error);
      });
  }

  deletePhoto(id: number) {
    this.alertity.confirm('Are you user you want to delete this photo?', () => {
      this.userService.deletePhoto(this.autherService.decodedToken.nameid, id).subscribe(() => {
        this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
        this.alertity.success('Photos has been deleted');
      }, error => {
        this.alertity.error('Failed to delete the photo');
      });
    });
  }

}
