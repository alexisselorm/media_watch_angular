import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
      })
    );
  }
  add(mediaItem: any) {
    return this.http.post('mediaItems', mediaItem);
  }
  delete(mediaItem: any) {
    return this.http.delete(`mediaItems/${mediaItem.id}`);
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
