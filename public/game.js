const { Client, Account, Databases, ID, Query } = Appwrite
const projectId = '6545c881c2b7cf50da30'
const databaseId = '6549ba3f4db14f37b44c'
const collectionId = '6549ba6687ff43080559'


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId)

const account = new Account(client)
const database = new Databases(client)


    function register(event) {
        account.create(
            ID.unique(),
            event.target.elements['register-email'].value,
            event.target.elements['register-password'].value,
            event.target.elements['register-username'].value
        ).then(response => {
            console.log(response)
            database.createDocument(
                databaseId,
                collectionId,
                response.$id,
                {
                    "userId": response.$id,
                    "highscore": 0 
                }
                
            )
            account.createEmailSession(
                event.target.elements['register-email'].value,
                event.target.elements['register-password'].value
            ).then(() => {
                showDisplay()
            })

        }).catch(error => console.error(error))
        event.preventDefault()
    }

    function login(event) {

    }

    function showDisplay() {
       const modalElement =  document.getElementById('modal')
       modalElement.classList.add('hidden')
    }

    showDisplay()

//Kaboom Game

    function startGame() {
        kaboom({
            global: true,
            fullscreen: true,
            scale: 2
        })

        //Speed identifiers 
        const moveSpeed = 120
        const jumpForce = 350
        const bigJumpForce = 550
        let currentJumpForce = jumpForce
        const fallDeath  = 400
        const enemyDeath = 20


        //Game Logic @ 49:19
        // https://codesandbox.io/s/j6r3o?file=/src/index.js:130-198 //
        let isJumping = true

        loadRoot("https://i.imgur.com/");
        loadSprite("coin", "wbKxhcd.png");

    }
    startGame()