const Campagne = require('../../models/campagnes.model')
const {User, Account} = require('../../models/user.model')
const Daader = require('../../models/userModel/daader.model')
const Ddader = require('../../models/userModel/ddader.model')
const Pas = require('../../models/userModel/pas.model')
const Village = require('../../models/userModel/village.model')

// Middleware pour recuperer les informations utilisateur
exports.getUser = async (req, res, next) => {
    const email = req.headers['email']
    if(!email) return res.status(400).json({message: 'Email is required'})
    try {
        User.getByEmail(email, async (err, user) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'utilisateur:', err);
            return res.status(500).json({ message: 'Erreur du serveur' });
        }
    
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        Account.getByUser(user.id, async (err, account) => {
            if (err) {
                console.error('Erreur lors de la récupération du Compte:', err);
                return res.status(500).json({ message: 'Erreur du serveur' });
            }
        
            if (!account) {
                return res.status(404).json({ message: 'Compte non trouvé' });
            }
            res.status(200).json( account)
        });

        /*
        if(!account) return res.status(404).json({message: 'Account not found'})
        req.session.user = user
        req.session.account = account
        req.user = user
        req.account = account
        res.status(200).json({user, account}); // Retourne les informations de l'utilisateur*/
        });

        
        next()
    } catch (error) {
        return res.status(500).json({message: 'Server error', error: error.message})
    }
}

// Middlware pour verifer la session
exports.checkSession = (req, res, next) => {
    if (req.session.account) {
        res.json({ message: 'Session active', session: req.session.user });
      } else {
        res.status(401).json({ message: 'No active session' });
      }
}

// Creer un nouvel utilisateur 
exports.createUser = async (req, res, next) => {
    const data = req.headers
    console.log(data)
    const email = data.email
    //const role = data.role
    if(!email) return res.status(400).json({message: 'Email is '})
    try {
        await User.create(email)
        const user = await User.getAll()
        console.log('Utilisateur crée : ', user)
        const account = await Account.create({ 'id_user': user.id })
        //await Account.UpdateRole(user.id, role)
        res.json({ message: 'User created', user, account });
        next()
        
    } catch (error) {
        return res.status(500).json({message: 'Server error', error: error.message})
    
    }
}

// Recuperation des ressources de chaque utilisateur en fonction de son role
exports.getUserResources = async (req, res, next) => {
    const account = req.session.account
    try {
        
        if (account.id_drader != null){
            const resources = await Ddader.getByDrader(account.id_drader)
            res.json({ message: 'User resources', resources });
            req.session.resources = resources
        }
        if (account.id_ddader !=null){
            const resources = await Daader.getByDdader(account.id_ddader)
            res.json({ message: 'User resources', resources });
            req.session.resources = resources
        }

        if (account.id_daader !=null){
            const resources = await Pas.getByDaader(account.id_daader)
            res.json({ message: 'User resources', resources });
            req.session.resources = resources
        }

        if (account.id_pas !=null){
            const resources = await Village.getByPas(account.id_pas)
            res.json({ message: 'User resources', resources });
            req.session.resources = resources
        }

        if (account.id_village !=null){
            const resources = await Campagne.getByVillage(account.id_village)
            res.json({ message: 'User resources', resources });
            req.session.resources = resources
        }
        next()
    } 
    catch (error) {
        return res.status(500).json({message: 'Server error', error: error.message})
    
    }
}