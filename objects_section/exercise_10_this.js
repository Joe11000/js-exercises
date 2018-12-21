// this : the OBJECT that is executing the current function

// if the function is part of an object call the the function a method 
// method --> obj
// function --> global object [window(in browser), global(in node)]

const album = {
  artist: 'Disturbed',
  titles: ['Parasite', 'Night', 'Into the Fire'], 

  play(title){
    debugger
    console.log(typeof this == 'object');
    if(title in this.titles) {
      console.log(`playing ${this.display_title(title)}`)
    }
  },

  list() {
    this.titles.forEach((title) => {
      this.display_title(title)
    });
  },

  display_title(title) {
    console.log(`${title} - ${this.artist}`)
  },
}
album.list()
album.play()
album.stop = function(){
  console.log(this == window)
}



// this global function by default is called by the global object
function playVideo(){
  console.log(this == window); 
}
playVideo();

// the 'new' operator in the constructor function changes the this from pointing to global to be equal an newly created empty object {}
function ConstructorFunctionPlayVideo(title){
  this.title = title
  console.log(typeof this == 'object') // this = {}
}
const v = new ConstructorFunctionPlayVideo('b') // this = {}