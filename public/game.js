const { Client, Account, Databases, ID, Query } = Appwrite
const projectId = '6545c881c2b7cf50da30'
const databaseId = ''
const collectionId = ''


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId)

const account = new Account(client)


    function register(event) {
        account.create(
            ID.unique(),
            event.target.elements['register-email'].value,
            event.target.elements['register-password'].value,
            event.target.elements['register-username'].value
        ).then(response => {
            console.log(response)
            // create a document in a database

            account.createEmailSession(
                event.target.elements['register-email'].value,
                event.target.elements['register-password'].value
            )

        }).catch(error => console.error(error))
        event.preventDefault()
    }