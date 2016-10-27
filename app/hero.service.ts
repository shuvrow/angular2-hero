/**
 * Created by bappu on 10/25/16.
 */

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()

export class HeroService{
    //stub
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    //heroService = new HeroService(); // this is a bad idea
}