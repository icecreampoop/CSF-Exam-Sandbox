import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, firstValueFrom, map, tap } from 'rxjs';
import { WeatherModel } from '../models/weather-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private readonly http = inject(HttpClient)

  onWeather = new Subject<WeatherModel[]>()

  getWeather(city: string): Observable<WeatherModel[]> {
    const queryString = new HttpParams()
      .set('q', city)
      .set('appid', 'ddb5d91604d2bdf2a0c6752fae78bacc')

      return this.http.get<WeatherModel[]>('https://api.openweathermap.org/data/2.5/weather', {params: queryString})
        .pipe(
          map((result: any) =>
          (result['weather'] as any[])  //cast to an array
            .map(value => {
              return {
                icon: value['icon'],
                main: value['main'],
                description: value['description']
              } as WeatherModel
            })),
          
            tap(result => {
              console.info(">>>> in tap: ", result)
            })
        )
  }

  getWeatherAsPromise(city: string): Promise<WeatherModel[]> {
    const queryString = new HttpParams()
      .set('q', city)
      .set('appid', 'ddb5d91604d2bdf2a0c6752fae78bacc')

      return firstValueFrom(
        this.http.get<WeatherModel[]>('https://api.openweathermap.org/data/2.5/weather', { params: queryString })
          .pipe(
            tap(result => console.info('BEFORE: ', result)),
            map((result: any) =>
              (result['weather'] as any[]) // cast to an array
                .map(value => {
                  return {
                    icon: value['icon'],
                    main: value['main'],
                    description: value['description'],
                  } as WeatherModel
                }) // WeatherData[]
            ), // map()
            tap(result => {
              console.info(">>> in tap: ", result)
              // firing the onWeather with result
              this.onWeather.next(result)
            }) // WeatherData[]
          ) // pipe() -> Observable<WeatherData[]>
        ) // firstValueFrom() -> Promise<WeatherData[]>
  }
}
