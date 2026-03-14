const{crawlPage}=require('./crawl.js')

function main () {
    /* process.argv is an array that contains the command-line 
    arguments passed when you run a script.
    */
    /*
    It’s an array where:

    process.argv[0] → the path to the Node.js executable.

    process.argv[1] → the path to the script being executed.

    process.argv[2] and onward → the actual arguments you provide.
    */

    if (process.argv.length < 3) {
        console.log("no website provided")
        process.exit (1)
    }
    if (process.argv.length > 3) {
        console.log("too many command line args")
        process.exit (1)
    }
    
    const baseURL=process.argv[2]

    console.log(`starting crawl of ${baseURL}`)
    crawlPage(baseURL)
}

// process command line arguments
main() 
