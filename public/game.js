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
            )

        }).catch(error => console.error(error))
        event.preventDefault()
    }