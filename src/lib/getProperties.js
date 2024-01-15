export default async function getProperties() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
        const properties = await response.json()
        return properties
    }
    catch (error) {
        console.error(error)
    }
}