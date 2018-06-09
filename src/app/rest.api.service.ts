import { Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import {Observable} from 'rxjs/Rx';
//  import 'rxjs/add/operator/map';
import { HttpClient, HttpParams , HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable()
export class RestApiService{

	baseUrl = environment.baseUrl;
	artworkUrl = environment.artworkUrl;
	httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type':  'application/json'
		})
	  };

	constructor(private http: HttpClient) {

	}

	getContent(offset, path, param, mood, sessionId) {

		let params = new HttpParams();

		// Begin assigning parameters
		params = params.append('offset',offset);
		params = params.append('limit', '12');
		params = params.append('firebase_uid','npOPxh4FRhQq3yXNjsp7oUTBRz92');

		if(param){
			params = params.append('keyword', param);
			params = params.append('mood', mood);
		}

		if(sessionId){
			params = params.append('session_id', sessionId);
		}

		if(path === '/today')
			return this.http.get(this.baseUrl+'GetContent',
				{ params : new HttpParams().set('firebase_uid','npOPxh4FRhQq3yXNjsp7oUTBRz92').set('offset', offset).set('limit', '12')
					.set('channelid', '36')});

		if(path === '/free')
			return this.http.get(this.baseUrl+'GetContent',
				{ params : new HttpParams().set('firebase_uid','npOPxh4FRhQq3yXNjsp7oUTBRz92').set('offset', offset).set('limit', '12')
					.set('channelid', '7e7de989-0bf8-42e5-8b4f-68623cdc4736')});

		return this.http.get(this.baseUrl+'GetContent',
	{ params : params});
	}

	getTags(){
		console.log(environment.baseUrl);
		return this.http.get(this.baseUrl+'GetTags');
		
	}
	getConfig(){
		return this.http.get(this.baseUrl+'GetConfig');
	}

	getContentObject() {
		return JSON.parse(localStorage.getItem('contentObject'));
	}

	getMadeUrl(content_url_rt: string){
		return this.http.get(this.baseUrl+'GetMadeUrl' , { params : new HttpParams().set('content_url_rt',content_url_rt)
			, responseType: 'text'}
			);
	}

	
	//tag edit/new/delete
	addTag (tag: any) : Observable<any> {
		return this.http.post(this.baseUrl+'SaveTag', tag, this.httpOptions);
	}

	deleteTag (channelid): Observable<any> {
		return this.http.delete(this.baseUrl+'DeleteTag/'+channelid, this.httpOptions);
	}

	//config edit/new/delete
	addConfig (config: any): Observable<any> {
		return this.http.post<any>(this.baseUrl+'SaveConfig', config, this.httpOptions);
	}

	deleteConfig (key): Observable<any> {
		return this.http.delete(this.baseUrl+'DeleteConfig/'+key, this.httpOptions);
	}

	//Update Content
	updateContent (content: any): Observable<any> {
		return this.http.post<any>(this.baseUrl+'UpdateContent', content, this.httpOptions);
	}

}