#!/usr/bin/env node

function Artist(name){
  this.id = this.constructor.all.length;
  this.constructor.all.push(this)
  this.name = name;
  this.songs = [];
  this.genres = [];
}

Artist.all = [];

Artist.prototype = {
  constructor: Artist,
  count: function(){
    return Artist.all.length;
  },
  findByName: function(artist_name) {
    console.log("Not sure how to find one yet!")
  },
  addSong: function(song){
    this.songs.push(song);
    if(song.genre){
      this.genres.push(song.genre)
    }
  }
}

var bob = new Artist("Bob")
console.log(bob.songs);
console.log(bob.name);
bob.findByName("Bob");
