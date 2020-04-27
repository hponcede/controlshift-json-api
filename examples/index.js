
import controlshift from 'controlshift'

const slug = 'localisation-pour-des-repas-sains-a-la-cantine-mairie-de-toulouse'
const domain = 'www.cantineverte.fr'

const cs = controlshift(domain)

cs.petition(slug)
	.then( data => console.log(data) )
	.catch( (e) => console.log(e) )


cs.categories()
	.then( data => console.log(data) )
	.catch( (e) => console.log(e) )

