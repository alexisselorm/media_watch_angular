import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium: any) {
    const getOptions = {
      params: { medium },
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions).pipe(
      map((response) => {
        return response.mediaItems;
      }),
      catchError(this.handleError)
    );
  }
  add(mediaItem: any) {
    return this.http
      .post('mediaItems', mediaItem)
      .pipe(catchError(this.handleError));
  }
  delete(mediaItem: any) {
    return this.http
      .delete(`mediaItems/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('A DATA ERROR OCCURRED');
  }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}
