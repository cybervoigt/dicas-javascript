

const sleep = time => new Promise(resolve => {
    console.log('I am going to sleep...',time,' miliseconds')
    setTimeout(resolve,time)
    // console.log('')
})

const processing = async() => {
    try{
        console.log('processing...');
        await sleep(4000).then(
            function(value) { console.log('I woke up... :-))'); },
            function(error) { console.log(':-(('); }
          )
        console.log('processed!')
    }catch(err){
        console.log('error in processing...',err)
    }
}


console.log('line 1')

// sleep 1
sleep(2000).then(
    function(value) { console.log('I woke up... :-)'); },
    function(error) { console.log(':-('); }
  )

console.log('line 2...')

// sleep 2
processing()

console.log('line 3... the end!')

