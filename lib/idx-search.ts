// Shirin's kvCORE agent IDX site (BHHS Jacklin Real Estate).
// Search URLs were captured from live searches on the agent site on
// 2026-10-15 and verified against the rendered results (result counts and
// listing cities matched the location filter in each case). The `pak`
// parameter is kvCORE's opaque location code; it differs per location and
// cannot be derived from the place name, so each URL is stored in full.

export const KVCORE_BASE = "https://shirinabplanalp.jacklinrealestate.com";

const SEARCH_PARAMS =
  "advanced=1&min=0&max=100000000&beds=0&baths=0" +
  "&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=5&types%5B%5D=4" +
  "&types%5B%5D=8&types%5B%5D=12&types%5B%5D=15&types%5B%5D=20" +
  "&statuses%5B%5D=0&statuses%5B%5D=57" +
  "&minfootage=0&maxfootage=30000&minacres=0&maxacres=0" +
  "&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=" +
  "&sortby=listings.price+DESC&rtype=grid";

function searchUrl(display: string, pak: string) {
  return `${KVCORE_BASE}/index.php?${SEARCH_PARAMS}&display=${encodeURIComponent(
    display
  )}&pak=${encodeURIComponent(pak)}`;
}

// Keyed by area page slug. Verified 2026-10-15:
// Post Falls 188 results, Coeur d'Alene 290, Hayden 94, Rathdrum 85,
// Sandpoint 93, Kootenai County 1,600, Bonner County 1,046.
// (Counts reflect the full parameter set above, which limits results to
// Active + Coming Soon listings; dropping the statuses parameters widens
// the search to all statuses and inflates the counts.)
export const IDX_SEARCH_BY_AREA: Record<string, string> = {
  "post-falls-idaho": searchUrl("Post Falls", "city:g30_c2kz6zng"),
  "coeur-dalene-idaho": searchUrl("Coeur d'Alene", "city:g30_c2kzqk60"),
  "hayden-idaho": searchUrl("Hayden", "city:g30_c2kzy0h0"),
  "rathdrum-idaho": searchUrl("Rathdrum", "city:g30_c2kzujd7"),
  "sandpoint-idaho": searchUrl("Sandpoint", "city:g30_c2t4et79"),
  "kootenai-county": searchUrl("Kootenai", "county:g40_c2mp0qu7"),
  "bonner-county": searchUrl("Bonner", "county:g40_c2t4f8v8"),
};
