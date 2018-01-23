import Admin from '../Persistence/Model/Admin';


Admin.findOne().then(user => {
    console.log(user.get('firstName'));
});
