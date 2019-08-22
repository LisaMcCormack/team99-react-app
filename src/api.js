const fetchTeamInfo = () => {
  const endpoint = window.encodeURI("http://www.22px.io/99/data")

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        if (!data) {
          throw new Error('error')
        }
      return data
    })
  }

export default function dataProvider(setter) {
    const fetchData = async () => {
      const result = await fetchTeamInfo()
      setter(result.theNineNine)
    }
    fetchData()
  }
