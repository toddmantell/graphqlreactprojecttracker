module.exports = `
type Project implements IProject {
  #The sequential id of the project
  id: Int,
  # The project's name or title
  name: String,
  # An object containing the team data
  team: Team
}
`;