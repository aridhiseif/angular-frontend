import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiServer = 'http://127.0.0.1:3000';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private httpClient: HttpClient) {}

    getAdmins(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/admins/');
    }
    getConducteurs(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/conducteurs/');
    }
    getVoyages(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/voyages');
    }
    getCommentaire(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/comments');
    }
    getReclamations(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/reclamations');
    }
    getRapports(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/rapports');
    }
    getRatings(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/ratings');
    }

    getEnseignats(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/formateurs/');
    }
    getClients(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/clients/');
    }

    getCourses(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/courses');
    }

    getVideos(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/videos/');
    }

    deleteAdmin(id) {
        this.httpClient
            .delete(this.apiServer + '/admins/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }

    deleteVoyage(id) {
        this.httpClient
            .delete(this.apiServer + '/voyages/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }

    deleteComment(id) {
        this.httpClient
            .delete(this.apiServer + '/comments/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }
    deleteReclamation(id) {
        this.httpClient
            .delete(this.apiServer + '/reclamations/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }
    deleteRapport(id) {
        this.httpClient
            .delete(this.apiServer + '/rapports/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }
    deleteRating(id) {
        this.httpClient
            .delete(this.apiServer + '/ratings/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }

    deleteConducteur(id) {
        this.httpClient
            .delete(this.apiServer + '/conducteurs/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }

    deleteCourse(id) {
        this.httpClient
            .delete(this.apiServer + '/courses/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }

    deleteClient(id) {
        this.httpClient
            .delete(this.apiServer + '/clients/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }

    deleteFormateur(id) {
        this.httpClient
            .delete(this.apiServer + '/formateurs/' + id)
            .subscribe((data) => {
                console.log(data);
            });
    }
}
