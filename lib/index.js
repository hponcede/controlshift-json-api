import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'


let instance


const petition = (slug) => {
	const ep = `petitions/${slug}.json`
	return instance.get(ep)
}


const featuredPetitions = () => {
	const ep = `petitions/featured.json`
	return instance.get(ep)
}


const categories = () => {
	const ep = 'categories.json'
	return instance.get(ep)
}


const category = (slug, page = 1) => {
	const ep = `categories/${slug}.json`

	page = parseInt(page, 10)
	if (isNaN(page) || page < 1) {
		page = 1
	}

	const params = {
		page
	}

	return instance.get(ep, {
		params
	})
}


const partnerships = (slug, page = 0) => {
	const ep = '/partnerships/${slug}/petitions.json'

	page = parseInt(page, 10)
	if (isNaN(page) || page < 1) {
		page = 1
	}

	const params = {
		page
	}

	return instance.get(ep, {
		params
	})
}


const efforts = (slug, page = 1) => {
	const ep = `efforts/${slug}.json`
	page = parseInt(page, 10)
	if (isNaN(page) || page < 1) {
		page = 1
	}

	const params = {
		page
	}

	return instance.get(ep, {
		params
	})
}


const search = (slug, location_query, query) => {
	const ep = `efforts/${slug}/lookup/query.json`

	const params = {}

	if (location_query) params.location_query = location_query
	if (query) params.query = query

	return instance.get(ep, {
		params
	})
}


const calendar = (slug) => {
	const ep = `calendars/${slug}.json`
	return instance.get(ep)
}


const locations = () => {
	const ep = `api/local/points.json`
	return instance.get(ep)
}


const locationDetails = (page = 1, per_page = 10) => {
	const ep = `api/local.json`

	page = parseInt(page, 10)
	per_page = parseInt(per_page, 10)

	const params = {}
	if (page) params.page = page
	if (per_page) params.per_page = per_page

	return instance.get(ep, {
		params
	})
}


const init = (domain) => {

	instance = axios.create({
		timeout: 1000,
		adapter: jsonpAdapter,
		callbackParamName: 'callback'
	});

	instance.interceptors.request.use( config => {
		config.url =  `https://${ domain }/${ config.url }`
		return config
	})

	instance.interceptors.response.use( response => {
		if (response.status === 200)
			return response.data

		return response
	})

	return methods
}


const methods = {
	calendar,
	categories,
	category,
	efforts,
	featuredPetitions,
	locations,
	locationDetails,
	partnerships,
	petition,
	search,
}

export default init

