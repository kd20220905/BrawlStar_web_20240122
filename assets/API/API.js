export function postPlayerAPI(tag) {
  return $fetch("http://localhost:3001/players/Player", {
    method: "POST",
    body: { tag },
  });
}

export function getAllBrawlersAPI() {
  return $fetch("https://api.brawlapi.com/v1/brawlers", {
    method: "GET",
  });
}

export function getIconsAPI() {
  return $fetch("https://api.brawlapi.com/v1/icons", {
    method: "GET",
  });
}
