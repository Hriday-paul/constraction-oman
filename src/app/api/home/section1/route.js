import db from '@/DB/database'

export const GET = async () => {

    try {

        // get chairmens photo
        const getchirmenPhotoCommand = 'select image from directors where position = "Chairman"'
        const chairmensPhotoPromise = await new Promise((resolve, reject) => {
            db.query(getchirmenPhotoCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error'});
                }
                resolve({ result })
            })
        });
        const chairmanPhoto = chairmensPhotoPromise.result[0].image;


        //get clients length        
        const clientLengthCommand = 'select count(*) as clientLength from clients;'
        const clientsLengthPromise = await new Promise((resolve, reject) => {
            db.query(clientLengthCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error'});
                }
                resolve({ result })
            })
        });
        const clientLength = clientsLengthPromise.result[0].clientLength;


        //get clients length        
        const projectLengthCommand = 'select count(*) as clientLength from projects;'
        const projectLengthPromise = await new Promise((resolve, reject) => {
            db.query(projectLengthCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error'});
                }
                resolve({ result })
            })
        });
        const projectLength = projectLengthPromise.result[0].clientLength;


        //get clients length        
        const membersLengthCommand = 'select count(*) as clientLength from peoples;'
        const menbersLengthPromise = await new Promise((resolve, reject) => {
            db.query(membersLengthCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error'});
                }
                resolve({ result })
            })
        });
        const membersLength = menbersLengthPromise.result[0].clientLength;

        const response = {
            chairmanPhoto ,
            totalClients : clientLength, 
            totalProjects : projectLength,
            totalMembars : membersLength
        }

        return Response.json(response, { status: 200 })

    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
};
