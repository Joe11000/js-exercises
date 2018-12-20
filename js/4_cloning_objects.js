const circle = {
    radius: 1,
    draw(){
        console.log('draw a circle')
    }
}

// Old Way of cloning
    // const another = {}
    // for(let key in circle){
    //     another[key] = circle[key]
    // }
    // console.log(another)

// New way of cloning
    // const another = Object.assign( {color: 'yellow'}, circle)
    // console.log(another)

    

// Newest way of cloning using spread operator
    const another = { ...circle };
    console.log(another);