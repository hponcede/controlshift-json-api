import t from"axios";import e from"axios-jsonp";var r,n={calendar:function(t){return r.get("calendars/"+t+".json")},categories:function(){return r.get("categories.json")},category:function(t,e){void 0===e&&(e=1);var n="categories/"+t+".json";return e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),r.get(n,{params:{page:e}})},efforts:function(t,e){void 0===e&&(e=1);var n="efforts/"+t+".json";return e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),r.get(n,{params:{page:e}})},featuredPetitions:function(){return r.get("petitions/featured.json")},locations:function(){return r.get("api/local/points.json")},locationDetails:function(t,e){void 0===t&&(t=1),void 0===e&&(e=10),t=parseInt(t,10),e=parseInt(e,10);var n={};return t&&(n.page=t),e&&(n.per_page=e),r.get("api/local.json",{params:n})},partnerships:function(t,e){return void 0===e&&(e=0),e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),r.get("/partnerships/${slug}/petitions.json",{params:{page:e}})},petition:function(t){return r.get("petitions/"+t+".json")},search:function(t,e,n){var a="efforts/"+t+"/lookup/query.json",o={};return e&&(o.location_query=e),n&&(o.query=n),r.get(a,{params:o})}};export default function(a){return(r=t.create({timeout:1e3,adapter:e,callbackParamName:"callback"})).interceptors.request.use(function(t){return t.url="https://"+a+"/"+t.url,t}),r.interceptors.response.use(function(t){return 200===t.status?t.data:t}),n}
//# sourceMappingURL=index.module.js.map
