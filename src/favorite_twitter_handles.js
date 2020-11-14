const favorite_twitter_handles = [
  "@pvl1111",
  "@jamestanton",
  "@stevenstrogatz",
  "@DavidNdii",
  "@freeCodeCamp",
  "@iamdeveloper",
  "@ThePracticalDev",
  "@outreachy",
  "@DevSimplified",
  "@acemarke",
  "@ryanflorence",
  "@kentcdodds",
  "@traversymedia",
  "@youyuxi",
  "@DThompsonDev",
  "@themarcba",
  "@ProfFeynman",
  "@dabit3",
  "@reactnewsletter",
  "@reactjs",
  "@developedbyed",
  "@catalinmpit",
  "@getify",
  "@dan_abramov",
  "@Snowden",
  "@DenzelWashington",
  "@que_tourist",
  "@thenetninjauk",
  "@akol_lam",
  "@davidwalshblog",
  "@LeaVerou",
  "@smashingmag",
  "@jensimmons",
  "@chriscoyier"

];
/*
This is to ensure proper sorting due to mixed cases in the strings
Read more at: https://www.digitalocean.com/community/tutorials/js-array-sort-strings
This sorting is in ascending alphabetical order
*/
function sortFavoriteTwitterHandles(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : b > a ? 1 : 0;
}
favorite_twitter_handles.sort(sortFavoriteTwitterHandles);
module.exports = favorite_twitter_handles;
