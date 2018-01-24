import Admin from '../Repository/Model/Admin';


Admin.findOne().then(user => {
    console.log(user.get('firstName'));
});
