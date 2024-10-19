/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'client') return '/fill-actualite'
  else return '/fill-actualite'
}

export default getHomeRoute
