export async function fetchPlayerMatches(name: string, tag: string) {
  try {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v3/matches/na/${name}/${tag}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
}